import express from "express";
import config from "config";

const PORT = config.get<number>("port");

const app = express();

// another test
// go merge
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
//test
// final branch test
