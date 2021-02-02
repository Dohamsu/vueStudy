const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('app,js로 월드 '));

app.listen(3000,() => {
    console.log('무야호  app.js');
})