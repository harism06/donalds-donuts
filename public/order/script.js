window.onload = function () {
  let orderButton = document.getElementById("place-order-btn");
  orderButton.onclick = () => {
    confirmOrder();
  };
};

function confirmOrder() {
  const customerName = document.getElementById("customer-name").value;
  const customerPhone = document.getElementById("customer-phone").value;

  const orderItems = [];

  if (document.getElementById("fde").checked) {
    orderItems.push("Filled Donuts Each");
  }
  if (document.getElementById("fd6").checked) {
    orderItems.push("Filled Donuts 6");
  }
  if (document.getElementById("fd12").checked) {
    orderItems.push("Filled Donuts 12");
  }
  if (document.getElementById("gde").checked) {
    orderItems.push("Glazed Donuts Each");
  }
  if (document.getElementById("gd6").checked) {
    orderItems.push("Glazed Donuts 6");
  }
  if (document.getElementById("gd12").checked) {
    orderItems.push("Glazed Donuts 12");
  }
  if (document.getElementById("sde").checked) {
    orderItems.push("Sprinkled Donuts Each");
  }
  if (document.getElementById("sd6").checked) {
    orderItems.push("Sprinkled Donuts 6");
  }
  if (document.getElementById("sd12").checked) {
    orderItems.push("Sprinkled Donuts 12");
  }
  if (document.getElementById("ce").checked) {
    orderItems.push("Cake Each");
  }
  if (document.getElementById("c6").checked) {
    orderItems.push("Cake 6");
  }
  if (document.getElementById("c12").checked) {
    orderItems.push("Cake 12");
  }
  if (document.getElementById("dh6").checked) {
    orderItems.push("Donut Holes 6");
  }
  if (document.getElementById("dh12").checked) {
    orderItems.push("Donut Holes 12");
  }
  if (document.getElementById("cdh6").checked) {
    orderItems.push("Chocolate Donut Holes 6");
  }
  if (document.getElementById("cdh12").checked) {
    orderItems.push("Chocolate Donut Holes 12");
  }
  if (document.getElementById("ece").checked) {
    orderItems.push("Eclair Each");
  }
  if (document.getElementById("ec6").checked) {
    orderItems.push("Eclair 6");
  }
  if (document.getElementById("ec12").checked) {
    orderItems.push("Eclair 12");
  }
  if (document.getElementById("afe").checked) {
    orderItems.push("Apple Fritter Each");
  }
  if (document.getElementById("cre").checked) {
    orderItems.push("Cinnamon Roll Each");
  }
  if (document.getElementById("cte").checked) {
    orderItems.push("Twist Each");
  }
  if (document.getElementById("secte").checked) {
    orderItems.push("Sausage, Egg, and Cheese Biscuit Each");
  }
  if (document.getElementById("sect6").checked) {
    orderItems.push("Sausage, Egg, and Cheese Biscuit 6");
  }
  if (document.getElementById("sect12").checked) {
    orderItems.push("Sausage, Egg, and Cheese Biscuit 12");
  }
  if (document.getElementById("ccd6").checked) {
    orderItems.push("Cream Cheese Danish 6");
  }
  if (document.getElementById("ccd12").checked) {
    orderItems.push("Cream Cheese Danish 12");
  }
  if (document.getElementById("bde").checked) {
    orderItems.push("Blueberry Donut Each");
  }
  if (document.getElementById("bd6").checked) {
    orderItems.push("Blueberry Donut 6");
  }
  if (document.getElementById("bd12").checked) {
    orderItems.push("Blueberry Donut 12");
  }
  if (document.getElementById("rd6").checked) {
    orderItems.push("Raspberry Donut 6");
  }
  if (document.getElementById("rd12").checked) {
    orderItems.push("Raspberry Donut 12");
  }
  if (document.getElementById("cse").checked) {
    orderItems.push("Cheese Sausage Each");
  }
  if (document.getElementById("cs6").checked) {
    orderItems.push("Cheese Sausage 6");
  }
  if (document.getElementById("cs12").checked) {
    orderItems.push("Cheese Sausage 12");
  }
  if (document.getElementById("pse").checked) {
    orderItems.push("Plain Sausage Each");
  }
  if (document.getElementById("ps6").checked) {
    orderItems.push("Plain Sausage 6");
  }
  if (document.getElementById("ps12").checked) {
    orderItems.push("Plain Sausage 12");
  }
  if (document.getElementById("jke").checked) {
    orderItems.push("Jalapeno Kolache Each");
  }
  if (document.getElementById("jk6").checked) {
    orderItems.push("Jalapeno Kolache 6");
  }
  if (document.getElementById("jk12").checked) {
    orderItems.push("Jalapeno Kolache 12");
  }
  if (document.getElementById("lhke").checked) {
    orderItems.push("Large Ham Kolache Each");
  }
  if (document.getElementById("lhk6").checked) {
    orderItems.push("Large Ham Kolache 6");
  }
  if (document.getElementById("lhk12").checked) {
    orderItems.push("Large Ham Kolache 12");
  }
  if (document.getElementById("lske").checked) {
    orderItems.push("Large Sausage Kolache Each");
  }
  if (document.getElementById("lsk6").checked) {
    orderItems.push("Large Sausage Kolache 6");
  }
  if (document.getElementById("lsk12").checked) {
    orderItems.push("Large Sausage Kolache 12");
  }
  if (document.getElementById("lsje").checked) {
    orderItems.push("Large Sausage Jalapeno Kolache Each");
  }
  if (document.getElementById("lsj6").checked) {
    orderItems.push("Large Sausage Jalapeno Kolache 6");
  }
  if (document.getElementById("lsj12").checked) {
    orderItems.push("Large Sausage Jalapeno Kolache 12");
  }
  if (document.getElementById("chme").checked) {
    orderItems.push("Chapel Hill Mild Kolache Each");
  }
  if (document.getElementById("chm6").checked) {
    orderItems.push("Chapel Hill Mild Kolache 6");
  }
  if (document.getElementById("chm12").checked) {
    orderItems.push("Chapel Hill Mild Kolache 12");
  }
  if (document.getElementById("chje").checked) {
    orderItems.push("Chapel Hill Jalapeno Kolache Each");
  }
  if (document.getElementById("chj6").checked) {
    orderItems.push("Chapel Hill Jalapeno Kolache 6");
  }
  if (document.getElementById("chj12").checked) {
    orderItems.push("Chapel Hill Jalapeno Kolache 12");
  }
  if (document.getElementById("pce").checked) {
    orderItems.push("Plain Croissant Each");
  }
  if (document.getElementById("pc6").checked) {
    orderItems.push("Plain Croissant 6");
  }
  if (document.getElementById("pc12").checked) {
    orderItems.push("Plain Croissant 12");
  }
  if (document.getElementById("behce").checked) {
    orderItems.push("Bacon, Egg, and Ham Croissant Each");
  }
  if (document.getElementById("sece").checked) {
    orderItems.push("Sausage and Egg Croissant Each");
  }
  if (document.getElementById("sec6").checked) {
    orderItems.push("Sausage and Egg Croissant 6");
  }
  if (document.getElementById("amece").checked) {
    orderItems.push("All Meat and Egg Croissant Each");
  }
  if (document.getElementById("be").checked) {
    orderItems.push("Biscuits Each");
  }
  if (document.getElementById("js").checked) {
    orderItems.push("Juice Small");
  }
  if (document.getElementById("jl").checked) {
    orderItems.push("Juice Large");
  }
  if (document.getElementById("ss").checked) {
    orderItems.push("Soda Small");
  }
  if (document.getElementById("sl").checked) {
    orderItems.push("Soda Large");
  }
  if (document.getElementById("ms").checked) {
    orderItems.push("Milk Small");
  }
  if (document.getElementById("ml").checked) {
    orderItems.push("Milk Large");
  }
  if (document.getElementById("mss").checked) {
    orderItems.push("Monster Small");
  }
  if (document.getElementById("bs").checked) {
    orderItems.push("Bang");
  }
  if (document.getElementById("ns").checked) {
    orderItems.push("Nesquick Small");
  }
  if (document.getElementById("nl").checked) {
    orderItems.push("Nesquick Large");
  }
  if (document.getElementById("rbrs").checked) {
    orderItems.push("Redbull Regular Size");
  }

  const orderDetails = {
    customerName: customerName,
    customerPhone: customerPhone,
    items: orderItems,
  };

  console.log(orderDetails);

  fetch("http://localhost:3000/order/userData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if the email was sent successfully
      if (data.success) {
        // Display the modal with the message "Order Received!"
        success_modal.showModal();
      } else {
        // Handle the case where the email was not sent successfully
        console.error("Failed to send email:", data.message);
        error_modal.showModal();
      }
      // This is where to determine if the email
      // has been sent to the owner then disply modal "Order Received!"
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
