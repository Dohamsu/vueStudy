const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('ㅎㅔ로 월드 '));

app.listen(3000,() => {
    console.log('무야호  ');
})