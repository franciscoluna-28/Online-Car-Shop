const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));



app.get("/*", express.static("./page/"));

app.listen("3030", () => console.log("Listenin bish"));