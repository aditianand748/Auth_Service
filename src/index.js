const express = require('express');
const { PORT } = require('./config/ServerConfig');
const app = express();

const prepareAndStartServer = () => {
    app.listen(3001, () => {
        console.log(`Server Started on port: ${PORT}`);
    })

}

prepareAndStartServer();
