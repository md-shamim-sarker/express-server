const express = require('express');
const cors = require('cors');
const users = require('./data/users.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is working fine...");
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    const userData = users.find(user => user.id === id) || {};
    res.send(userData);
});

app.get("/users/:gender", (req, res) => {
    const genderInfo = req.params.gender;
    const usersData = users.filter(user => user.gender === genderInfo) || {};
    res.send(usersData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});