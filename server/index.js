const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('gegeg Node 월드 '));

app.listen(3000,() => {
    console.log('서버가 시작되었습니다.  ');
})