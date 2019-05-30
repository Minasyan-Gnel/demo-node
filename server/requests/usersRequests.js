const {Router} = require('express');
const Users = require("../modules/users");
const router = new Router();

router.get("/users", (req, res) => {
    Users.find({}, (err, users) => {
        res.json(users);
    });
});

router.put("/users", (req, res) => {
    const users = new Users(req.body);
    users.save(err => err
        ? res.status(400).end(err.message)
        : res.send("success")
    );
});

module.exports = router;