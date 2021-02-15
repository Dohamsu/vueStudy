const express = require('express');
const app = express();
const { Client } = require('pg');


app.set('view engine','ejs'); // 1
app.use(express.static(__dirname));


app.get('/', function(req,res){ // root  디렉토리 
    res.render('main', {name:req.query.nameQuery});
  });

app.get('/main', function(req,res){ // 2
  res.render('main', {name:req.query.nameQuery});
});

app.get('/main/:nameParam', function(req,res){ // 3
  res.render('main', {name:req.params.nameParam});
});



setTimeout(() => {
    //DB 정보 세팅 
    const client = new Client({
        user : 'mcnc',
        host : 'vue-db',
        //host : 'localhost',
        database : 'vuedb',
        password : 'gomcnc!!',
        port : 5432,
    });

    // DB 연결
    client.connect();

    client.query("SELECT * FROM pg_tables WHERE tablename = 'account'", (err, res) => {
        //계정 테이블 없을 경우 생성
        if(err == null){
            if(res.rows.length<1){
                client.query("CREATE TABLE ACCOUNT"
                +"("
                + "USER_ID SERIAL PRIMARY KEY,"
                + "USERNAME VARCHAR(50) UNIQUE NOT NULL,"
                + "PASSWORD VARCHAR(50) NOT NULL,"
                + "EMAIL VARCHAR(355) UNIQUE NOT NULL,"
                + "CREATED_ON TIMESTAMP NOT NULL,"
                + "LAST_LOGIN TIMESTAMP"
                + ")", (err, res) => {
                });
            }
        }
    });

    client.query("SELECT * FROM pg_tables WHERE tablename = 'connect_list'", (err, res) => {
        if(err == null){
            //접속 테이블 없을 경우 생성
            if(res.rows.length<1){
                createTable();
            } 
            //접속 이력 테이블이 있을 경우 조회 
            else{
                insertCurrentTime();
                lookList();
            }
        }else{
            console.log("에러러ㅓ어어어어어러러어어어");
            console.log(err);
        }
    });

    function lookList(){
        client.query("SELECT user_id,TO_CHAR(register_date,'YYYY-MM-DD-HH24:MM:SS') as TIME FROM connect_list  order by register_date DESC", (err, res) => {
            if(err == null){
                console.log("=========  DB 접속 이력  =======");
                console.table(res.rows);
                endDBconnection();
            }else{
                console.log(err);
            }
        });
        
        //endDBconnection(); //db 접속 종료
    }

    function createTable() {
        client.query("CREATE TABLE connect_list"
        +"("
        + "USER_ID VARCHAR(50) NOT NULL,"
        + "register_date timestamp"
        + ")", (err, res) => {
            console.log("접속 이력 테이블 생성 완료");
        });  
    }

    function insertCurrentTime() {
        client.query("INSERT INTO connect_list (user_id,register_date) VALUES ('mcnc',now())", (err, res) => {


            if(err == null){
                console.log("접속이력 생성 완료 \n\n");

            }else{
                console.log(err);
            }
        });
    }

    function endDBconnection(){
        client.end() //DB 연결 해제 
    }

}, 5000)


app.listen(3000,() => {

    console.log('\n\n################ 서버가 시작되었습니다 ################ \n\n');
})
