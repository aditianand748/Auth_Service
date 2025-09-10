const { PORT } = require('./config/ServerConfig');
const apiRoutes = require('./routes/index');
//const { User } = require('./models/index');
//const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const UserRepository = reqiure('./repository/user-repository');

const app = express();

const prepareAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on port: ${PORT}`);
        const repo = new UserRepository();
        const response = await repo.getById(1);
        console.log(response);

        const incomingpassword = '123456';
        const user = await User.findByPk(3);

        if (user) {
            const response = bcrypt.compareSync(incomingpassword, user.password);
            console.log('Password match:', response);
        } else {
            console.log('User not found');
        }
    });
};

prepareAndStartServer();
