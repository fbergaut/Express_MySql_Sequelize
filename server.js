const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});