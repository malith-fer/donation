const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user');
const reservationRoutes = require('./routes/reservation');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/reservations', reservationRoutes);

sequelize.sync()
    .then(result => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.log(err);
    });
