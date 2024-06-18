const sendMail = require("./sendEmail");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("index.html");
});

app.get("donuts", (req, res) => {
  res.redirect("donuts/index.html");
});

app.get("pastries", (req, res) => {
  res.redirect("pastries/index.html");
});

app.get("breakfast", (req, res) => {
  res.redirect("breakfast/index.html");
});

app.get("kolaches", (req, res) => {
  res.redirect("kolaches/index.html");
});

app.get("croissant_sandwiches", (req, res) => {
  res.redirect("croissant_sandwiches/index.html");
});

app.get("beverages", (req, res) => {
  res.redirect("beverages/index.html");
});

app.get("order", (req, res) => {
  res.redirect("order/index.html");
});

app.post("/order/userData", (req, res) => {
  const userData = req.body;

  // Extract individual properties
  const customerName = userData.customerName;
  const customerPhone = userData.customerPhone;
  const items = userData.items;

  // Log the extracted data
  console.log("Customer Name:", customerName);
  console.log("Customer Phone:", customerPhone);
  console.log("Items:", items);

  sendMail(customerName, customerPhone, items)
    .then((result) => {
      console.log("Email sent...", result);
      res.json({ success: true, message: "Email sent successfully" });
    })
    .catch((error) => {
      console.log(error.message);
      res.json({ success: false, message: "Error sending email" });
    });
});

app.listen(port, () => {
  console.log(`Donald's Donuts is available on http://localhost:${port}`);
});
