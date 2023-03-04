const express = require('express');

const app = express();
console.log("server");
const port = 5000;

const start = async () => {
  try {
          app.listen(port, () => {
                  console.log(`server is listening on port ${port}...`)
          });
  } catch (error) {
          console.log(error);
  }
};
start();