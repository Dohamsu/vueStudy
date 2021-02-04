const express = require('express');
const app = express();
const { Client } = require('pg');

app.get('/', (req,res) => res.send('gegeg Node 월드 '));

//DB 정보 세팅 
const client = new Client({
    user : 'mcnc',
    host : 'localhost',
    database : 'vuedb',
    password : 'gomcnc!!',
    port : 15432,
});


// DB 연결
client.connect();

client.query("SET TIME ZONE 'Asia/Seoul'", (err, res) => {
    console.log(err);
    console.log(res);
});
client.query("SHOW DATABASES", (err, res) => {});

// client.query("INSERT INTO connect_list (user_id) VALUES ('mcnc')", (err, res) => {

//     // console.log("접속이력 생성 완료");
// });

// client.query("SELECT user_id,TO_CHAR(register_date,'YYYY-MM-DD-HH24:MM:SS') as TIME FROM connect_list  order by register_date DESC", (err, res) => {
//     if(err == null){
//         console.log("=========  DB 접속 이력  =======");
//         console.table(res.rows);
//     }else{
//         console.log(err);
//     }
//     client.end() //DB 연결 해제 
// });


app.listen(3000,() => {

    console.log('\n\n################ 서버가 시작되었습니다 ################ \n\n');
})
