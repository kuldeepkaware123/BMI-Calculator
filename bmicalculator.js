const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function () {
    console.log("Server is set on port 3000");
});
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/`);
});
app.post("/", (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = (weight / height / height) * 10000;

    res.send(`<h1> Your BMI is : <span style="color:red" > ${bmi} </span> </h1>`)
});