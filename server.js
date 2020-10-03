'use strict';


const express = require("express");

const port = 3000;

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {


    res.send("okay");
});

app.get("/lab3", (req, res) => {

    const method = req.query.method.toString();
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    let result = 0;
    if (method == "add")
    {
        result = x + y;
    }
    else if (method == "subtract")
    {
        result = x - y;
    }
    else if (method == "divide")
    {
        result = x / y;
    }
    else if (method == "multiply")
    {
        result = x * y;
    }
    
    console.log(result);

    res.send({ "result" : result});
});

app.listen(port, ()=> {
    console.log(`Running on port ${port}!`);
});


// http://localhost:3000/lab3?method=add&x=16&y=4- Sample Output: 16 + 4 = 20