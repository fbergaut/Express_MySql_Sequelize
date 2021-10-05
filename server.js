const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('database', 'root', 'developper', {
    host: 'localhost',
    dialect: 'mysql',
});

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()


routes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});