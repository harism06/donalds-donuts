const http = require("http");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
// const orderDetails = require("./menu/order/script");

const CLIENT_ID =
  "547802568556-5grv44jqj0oqfbshkr5vpacj9f5ggsq8.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04sg_qkPg7zEiCgYIARAAGAQSNwF-L9Ir1bUwPdvNRQT5FUrJvYkzkjPf_K61sQR0bAcJqMjjJ6J7LfjfexEXmSnRLRNcXAnMxPw";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(customerName, customerPhone, customerPickup, items) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "exampleforsmallbusinesses@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Order Tracker <exampleforsmallbusinesses@gmail.com>",
      to: "rothouch@gmail.com",
      subject: "New Order Received",
      text: `Customer Name: ${customerName}\n\nCustomer Phone: ${customerPhone}\n\nCustomer Pickup Time and Date: ${customerPickup}\n\nItems:\n${items.join(
        "\n"
      )}`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = sendMail;
