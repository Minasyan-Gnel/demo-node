const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

const usersSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

//generate user id auto Increment
usersSchema.plugin(autoIncrement.plugin, {model: "usersSchema", field: 'id', startAt: 1, incrementBy: 1});

module.exports = mongoose.model("Users", usersSchema);