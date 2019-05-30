const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb://localhost/nodeApp", { useNewUrlParser: true });
    const db = mongoose.connection;

    db.once("open", () => {
        console.log("Connected to mongoDB");
    });

    db.on("error", err => {
        console.log(err)
    });
};