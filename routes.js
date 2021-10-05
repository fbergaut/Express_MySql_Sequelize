const StreamerController = require("./controllers/Streamer.controller");
const StreamerService = require("./controllers/Streamer.service");

const StreamerServiceInstance = new StreamerService();
const StreamerControllerInstance = new StreamerController(StreamerServiceInstance);


const routes = (app) => {
    app.get("/streamers", (req, res) => {
        StreamerControllerInstance.find(req, res);
    });

    app.get("/streamer/:id", (req, res) => {
        StreamerControllerInstance.findById(req, res);
    });

    app.post("/streamer", (req, res) =>
        StreamerControllerInstance.create(req, res)
    );

    app.put('/streamer/:id', (req, res) => {
        StreamerControllerInstance.update(req, res);
    });

    app.delete('/streamer/:id', (req, res) => {
        StreamerControllerInstance.deleteById(req, res);
    });
};

module.exports = routes;