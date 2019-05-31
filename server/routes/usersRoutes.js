const {Router} = require('express');
const Users = require("../models/users");
const router = new Router();

router.get("/users", (req, res) => {
    Users.find({}, (err, users) => {
        res.json(users);
    });
});

router.post("/users", (req, res) => {
    const users = new Users();
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.age = req.body.age;
    users.save(err => err
        ? res.status(400).end(err.message)
        : res.send("success")
    );
});

module.exports = router;