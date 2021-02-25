const Server = require('./src/Server');
const Model = require('./src/Model');
const App = require('./src/App');

function init() {
    this.port = process.env.PORT || 2020;

    const app = new App();
    const db = new Model();
    const server = new Server(this.port, app, db);
    server.start();
}

init()