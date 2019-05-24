const express = require("express");
const cors = require("cors");
const app = express();

const port = 3002;

app.use(cors({
    origin: "http://localhost:3001"
}));

app.get("/users", (req, res) => {
    const userslist = [
        {id: 1, firstName: "Asdfgh", lastName: "skadmsdml", age: 20},
        {id: 2, firstName: "Kfdgfgd", lastName: "ghngh", age: 20},
        {id: 3, firstName: "Gdsvsdw", lastName: "dffad", age: 20},
    ];
    res.json(userslist);
});

app.listen(port, () => {
    console.log(`Server listen in port ${port}`);
});