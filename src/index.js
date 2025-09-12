const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
//const { User } = require('./models/index');
//const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const UserRepository = require('./repository/user-repository');
const db = require('./models/index');

const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on port: ${PORT}`);
        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter:true});
        }
        
    });
}

prepareAndStartServer();
