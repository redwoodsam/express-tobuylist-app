const express = require('express');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://sam101914:sam101914@cluster0.sn04r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();

mongoose.connect(mongodb).then(() => {
    app.listen(3000);
})
.catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    const items = [
        { name: 'mobile phone', price: 1000 },
        { name: 'book', price: 30 },
        { name: 'computer', price: 2000 }
    ]
    res.render('index', { items });
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
})

app.use((req, res) => {
    res.render('error');
})

app.set('view engine', 'ejs');

