const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector("table");
const tr = document.createElement("tr");
tr.className = "tr";
const td = document.createElement("td");
td.textContent = 'Total';
tr.append(td);
const Total = document.createElement("td");
Total.className = "total";
Total.setAttribute("id", "ans");
table.append(tr)
let prices = document.querySelectorAll(".price");
console.log(prices);

const getSum = () => {
//Add your code here
	let total = 0;
    prices.forEach(item => total += Number(item.textContent));
	Total.textContent = total;
	tr.append(Total);
};

getSumBtn.addEventListener("click", getSum);

