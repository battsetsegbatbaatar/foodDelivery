"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));

const transporter = nodemailer_1.default.createTransport({
  service: "Gmail",
  auth: {
    user: "batbaatarbattsetseg122@gmail.com",
    pass: "bj998877",
  },
});

const mailOptions = {
  from: "batbaatarbattsetseg122@gmail.com",
  to: "batbaatarbattsetseg122@gmail.com",
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
