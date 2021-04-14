const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_5W1IYbdjBpyrwady7U3kiMYmZmUDJQWg73wadqDCnoFlVTzRKjwadfugcUaadfrsewdwqKxHC8kCSXhr6pCZFCfCnUKKJOONKBSgAX8B3tLk9V1009pzRiCAj"
);
//api

// //app config
// const app = express();

// //middlewere
// app.use(cors({ origin: true }));
// app.use(express.json());

// //api roots
// app.get("./", (request, response) => response.status(200).send("hello world"));
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

//listen commands

exports.api = functions.https.onRequest(app);
//example endpoint

//http://localhost:5001/shopcan-adf69/us-central1/api
