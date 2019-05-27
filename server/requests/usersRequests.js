const app = require("../index");

const usersGetReq = new Promise((res) => {
    app.get("/users", (req, res) => {
        const userslist = [
            {id: 1, firstName: "Asdfgh", lastName: "skadmsdml", age: 20},
            {id: 2, firstName: "Kfdgfgd", lastName: "ghngh", age: 20},
            {id: 3, firstName: "Gdsvsdw", lastName: "dffad", age: 20},
        ];
        res.json(userslist);
    });
    res();
});

module.exports = [usersGetReq];