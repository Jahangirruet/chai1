//require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;
connectDB()
  .then(() => {
    // Code to execute after successful database connection
    app.listen(PORT, () => {
      console.log("server listening on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    // Code to handle errors during database connection
    console.error("Error connecting to the database:", error.message);
  });

