const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = [];

app.post('/events', async (req, res) => {
    const event = req.body;

    events.push(event);
    // posts
    await axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });

    // comments
    await axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });

    //query
    await axios.post('http://localhost:4002/events', event).catch(err => console.log(err.mesage));

    // moderation
    await axios.post('http://localhost:4003/events', event).catch(err => console.log(err.mesage));
    
    res.send({ status: 'OK' })
});


app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log('Event-Bus Server is running on Port: 4005');
})