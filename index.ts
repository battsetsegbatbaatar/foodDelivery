"use strict";
import nodemailer from "nodemailer";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "batbaatarbattsetseg122@gmail.com",
    pass: "bj998877",
  },
});

// Setup email data
const mailOptions = {
  from: "your_email@gmail.com",
  to: "recipient_email@example.com",
  subject: "Hello from Nodemailer",
  text: "Hello, this is a test email sent from Nodemailer in a TypeScript Node.js app!",
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error occurred:", error.message);
    return;
  }
  console.log("Email sent successfully!");
  console.log("Message ID:", info.messageId);
});
