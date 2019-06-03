const {Router} = require('express');
const url = require('url');
const Users = require("../models/users");
const router = new Router();

router.get("/users", (req, res) => {
    Users.find({}, {"_id": 0, "__v": 0}, (err, users) => {
        res.json(users);
    });
});

router.get("/user", (req, res) => {
    const url_parts = url.parse(req.url, true);
    Users.find({id: url_parts.query.id}, {"_id": 0, "__v": 0}, (err, user) => {
        res.json(user[0]);
    });
});

router.post("/users", (req, res) => {
    const users = new Users();
    users.firstName = req.body.firstName;
    users.lastName = req.body.lastName;
    users.age = req.body.age;
    users.save(err => err
        ? res.status(400).end(err.message)
        : res.json("success")
    );
});

router.post("/edit", (req, res) => {
    Users.find({id: req.body.id}, (err, user) => {
        Users.update({id: req.body.id}, {...user, ...req.body}, (err) => {
            err ? res.status(400).end(err.message) : res.json("user is updated");
        })
    });
});

module.exports = router;