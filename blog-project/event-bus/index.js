const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const posts = {};

app.post('/events', async (req, res) => {
    const event = req.body;

    console.log(event);
    // posts
    await axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });

    // comments
    await axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });

    //query
    await axios.post('http://localhost:4002/events', event).catch(err => console.log(err));

    // moderation
    await axios.post('http://localhost:4003/events', event).catch(err => console.log(err));
    
    res.send({ status: 'OK' })
})

app.listen(4005, () => {
    console.log('Event-Bus Server is running on Port: 4005');
})