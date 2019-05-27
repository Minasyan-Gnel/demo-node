const express = require("express");
const cors = require("cors");
const serverConst = require("./constants/server");
const app = module.exports = express().use(cors({
    origin: "http://localhost:3001"
}));
const usersRequests = require("./requests/usersRequests");

Promise.all([...usersRequests]).then(() => {
    app.listen(serverConst.port, () => {
        console.log(`Server listen in port ${serverConst.port}`);
    });
});