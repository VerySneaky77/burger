const express = require("expresss");

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});