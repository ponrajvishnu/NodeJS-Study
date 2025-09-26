const express = require('express');
const db = require('./db');
const cors = require('cors');

const userRouter = require('./routes/users');

const app = express();

app.use(express.json())

app.use('/api/users', userRouter);

// app.use((req, res, next) => {
//     console.log("Request URL ", req.url);
//     next();
// });

// app.get('/', (req, res) => {
//     res.status(200).send("Hello Express App");
// })



app.listen('5000', () => {
    console.log('Server listening on port 5000');
})