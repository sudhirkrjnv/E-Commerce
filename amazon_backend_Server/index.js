require("dotenv").config();
const express = require("express");
const app = express();
require("./src/db/connection");
const cors = require("cors");
const Defaultdata = require("./src/Defaultdata");
const router = require("./src/routes/router");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

Defaultdata();
app.use(router);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
