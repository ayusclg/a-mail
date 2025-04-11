import express from "express";
import mailRoutes from "./mailRoutes.js";
const app = express();
const host = "127.0.0.1";
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use("/Mail", mailRoutes);

app.listen(port, () => {
  console.log(`Live Here http://${host}:${port}`);
});
