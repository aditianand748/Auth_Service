const express = require('express');
const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const UserService = require('./services///user-service');
const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async() => {
        console.log(`Server Started on Port: ${PORT}`);
        //const service = new UserService();
        //const newToken = service.createToken({email: 'aditi@admin.com', id: 1});
       // console.log("new token is", newToken);
       // const token = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRpQGFkbWluLmNvbSIsImlkIjoxLCJpYXQiOjE3NjA1ODE1MzgsImV4cCI6MTc2MDU4NTEzOH0._5kQFHaYhesv7_FbpLwPZuA49HATTIwgLwmPNGt9-vk';
        //const response = service.verifyToken(token);
       // console.log(response);

    });

}

prepareAndStartServer();//