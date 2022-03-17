import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import senderMail from "./api/services/senderMail.js";
import path from "path";
import { fileURLToPath } from "url";

import { productRouter, userRouter } from "./api/routes/index.js";
import uploadRouter from "./api/routes/upload.routes.js";

// dotenv.config();

// config environments
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});

/* 
  Mongoose
 */

// Connect to db
const dbConnection = process.env.DB_STRING_CONNECTION;
await mongoose.connect(dbConnection);

// Listener to connection error
mongoose.connection.on("error", function (e) {
  console.error("ERROR: ", e);
});

/* 
Express
 */
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (request, response) => {
  response.send("API PRODUCTS");
});

app.use("/api", productRouter);
app.use("/api", userRouter);

app.get("/mail", async (req, res) => {
  senderMail.config = {
    host: process.env.SENDER_CONFIG_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "apikey", // generated ethereal user
      pass: process.env.SENDGRID_API_KEY, // generated ethereal password
    },
  };

  const info = await senderMail.sendMail({
    from: '"Fred Foo 👻" <esteban_rodas@hotmail.es>', // sender address
    to: "esteban16.rodas@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  res.json(info);
});

// Static route
app.use("/static", express.static("upload"));

app.use(uploadRouter);

const PORT = process.env.PORT || 5000;

// Launch server
app.listen(PORT, () => {
  console.log("Iniatialized server!!");
});
