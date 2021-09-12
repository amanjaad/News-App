import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//component
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);
const PORT = 8000;

Connection();
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
DefaultData();
