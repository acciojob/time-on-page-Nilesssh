async function getMenu() {
    const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json");
    const data = await response.json();
    //Show the food items to the user
    //...
  }
  
  //Function to take order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ["Burger A", "Burger B", "Burger C"];
        const order = { burgers: burgers };
        resolve(order);
      }, 2500);
    });
  }
  
  //Function to prepare order
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order_status = true;
        const paid = false;
        resolve({ order_status, paid });
      }, 1500);
    });
  }
  
  //Function to pay the order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order_status = true;
        const paid = true;
        resolve({ order_status, paid });
      }, 1000);
    });
  }
  
  //Function to show the thankyou message
  function thankyouFnc() {
    alert("Thank you for eating with us today!");
  }
  
  //Promise chaining to handle the functions one after another
  getMenu()
    .then(() => {
      return takeOrder();
    })
    .then(order => {
      console.log(`Order received: ${JSON.stringify(order)}`);
      return orderPrep();
    })
    .then(status => {
      console.log(`Order status: ${JSON.stringify(status)}`);
      return payOrder();
    })
    .then(status => {
      console.log(`Payment status: ${JSON.stringify(status)}`);
      if (status.paid) {
        thankyouFnc();
      }
    })
    .catch(error => {
      console.error(error);
    });