const express = require('express');
const app = express();

var users = [];

app.get('/', (req, res) => {
    res.send('Hello World!')
});

/* GET USERS LIST (EMPTY) */
app.get('/users', (req, res) => {
    res.send(users);
})

/* POST USER (id:0) */
app.post('/user', (req, res) => {
    users.push(req.body);
    res.status(200).json({users});
    users = [{id:0}];
})

/* GET USER (id:0) */
app.get('/user/:id', (req, res) => {
    const user = users.find(item => item.id == req.params.id);
    res.json(user);
})

app.listen(3000,function(){
    console.log("server running")
});