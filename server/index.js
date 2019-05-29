const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const serverConst = require("./constants/server");
const usersRequests = require("./requests/usersRequests");

mongoose.connect("mongodb://localhost/nodeApp", { useNewUrlParser: true });
const db = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3001"
}));

app.use(usersRequests);

app.listen(serverConst.port, () => {
    console.log(`Server listen in port ${serverConst.port}`)
});