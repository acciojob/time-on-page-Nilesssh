
let URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

 async function fetchData (){
    let response = await fetch(URL);
    let data = await response.json();
    return data;
  }

  fetchData().then((data) => {
    let img = document.querySelector("#table");
    function itrateAll(data) {
      data.forEach((item) =>
        img.insertAdjacentHTML(
          "beforeend",
          `<tr class="bottom"><td class="columns aligned"><img src="${
            item.image
          }"></img><span class="namealign">${item.name}</span></td>
    <td class="columns">${item.symbol}</td>
    <td class="columns rtl">$${item.current_price.toFixed(2)}</td>
    <td class="columns rtl">${item.total_volume}</td>
    <td class="columns rtl percentage1"><span class="percentage-${
      item.price_change_percentage_24h.toFixed(2) > 0 ? "1" : "2"
    }">${item.price_change_percentage_24h.toFixed(2)}%</span></td>
    <td class="columns rtl">Mkt Cap: $${item.total_volume}</td></tr>`
        )
      );
    }
    itrateAll(data);

    const sortByPercentage = document.querySelector("#sortByPer");
    const sortByMktCap = document.querySelector("#sortByMktCap");

    sortByMktCap.addEventListener("click", () => {
      img.innerHTML = "";
      let newArr = data.sort((a, b) => a.total_volume - b.total_volume);
      itrateAll(newArr);
    });

    sortByPercentage.addEventListener("click", () => {
      img.innerHTML = "";
      let newArr = data.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      itrateAll(newArr);
    });

    const search = document.querySelector("#search");

    search.addEventListener("keyup", () => {
      let value = search.value.toLowerCase();
      let tr = document.querySelectorAll("tr");
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].name.toLowerCase().includes(value) ||
          data[i].symbol.toLowerCase().includes(value)
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }      
    });
  })
  .catch((error) => console.log(error));


  /*
        below code is working without fetch API;
   */


//  async function fetchData (){
//     let response = await fetch("./file.json");
//     let data = await response.json();
//     return data;
//   }

//   fetchData().then((data) => {
//     let img = document.querySelector("#table");
//     function itrateAll(data) {
//       data.forEach((item) =>
//         img.insertAdjacentHTML(
//           "beforeend",
//           `<tr class="bottom"><td class="columns aligned"><img src="${
//             item.image
//           }"></img><span class="namealign">${item.name}</span></td>
//     <td class="columns">${item.symbol}</td>
//     <td class="columns rtl">$${item.current_price.toFixed(2)}</td>
//     <td class="columns rtl">${item.total_volume}</td>
//     <td class="columns rtl percentage1"><span class="percentage-${
//       item.price_change_percentage_24h.toFixed(2) > 0 ? "1" : "2"
//     }">${item.price_change_percentage_24h.toFixed(2)}%</span></td>
//     <td class="columns rtl">Mkt Cap: $${item.total_volume}</td></tr>`
//         )
//       );
//     }
//     itrateAll(data);

//     const sortByPercentage = document.querySelector("#sortByPer");
//     const sortByMktCap = document.querySelector("#sortByMktCap");

//     sortByMktCap.addEventListener("click", () => {
//       img.innerHTML = "";
//       let newArr = data.sort((a, b) => a.total_volume - b.total_volume);
//       itrateAll(newArr);
//     });

//     sortByPercentage.addEventListener("click", () => {
//       img.innerHTML = "";
//       let newArr = data.sort(
//         (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
//       );
//       itrateAll(newArr);
//     });

//     const search = document.querySelector("#search");

//     search.addEventListener("keyup", () => {
//       let value = search.value.toLowerCase();
//       let tr = document.querySelectorAll("tr");
//       for (let i = 0; i < data.length; i++) {
//         if (
//           data[i].name.toLowerCase().includes(value) ||
//           data[i].symbol.toLowerCase().includes(value)
//         ) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     });
//   })
//   .catch((error) => console.log(error));

