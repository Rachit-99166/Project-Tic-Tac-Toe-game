const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.use(express.static("public"));
app.listen(8081, function () {
    console.log("Server is running on localhost:8081");
});