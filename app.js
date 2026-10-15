const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {});

app.get("/students", (req, res) => {
    console.log("GET /students request received");
    res.send("Hello Students! WELCOME");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});