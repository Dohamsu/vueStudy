var express = require('express');
var router  = express.Router();
var app     = express();

const { Client } = require('pg');

//DB 정보 세팅 
const client = new Client({
    user : 'mcnc',
    host : 'vue-db',
    //host : 'localhost',
    database : 'vuedb',
    password : 'gomcnc!!',
    port : 5432,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '뀨아아ㅏㅇ' });
  next();
});

app.use(function(err, req, res, next){
  var err = new Error('Not Foundeee');
  err.status = 404;
  next(err);
})

/* 대시보드 */
router.get('/dashboard', function(req, res, next) {

  var data = '';

  client.query("SELECT user_id,TO_CHAR(register_date,'YYYY-MM-DD-HH24:MM:SS') as TIME FROM connect_list  order by register_date DESC", (err, response) => {
        if(err == null){
            endDBconnection();
            data = response.rows[0];
            data = JSON.stringify(data);

          res.render('index', 
          { 
            title: '대시보드', 
            boardNo : req.query.no,
            contents : data
          });
        }else{
            console.log(err);
        }
  });
});

/* 회원가입 */
router.get('/sign-in', function(req, res, next) {

  var userId    = req.query.user_id;
  var name      = req.query.name;
  var password  = req.query.password;
  var email     = req.query.email;

  res.render('index', 
  { 
    title: '회원 가입',
    boardNo : 1,
    contents : "아이디 : " + userId
              +"\n이름 :" + name
              +"\nemail :" + email

  });
  
  //계정 생성
  insertAccount(userId,name,password,email);

});


module.exports = router;



// 첫 실행 시 DB 생성 
setTimeout(() => {

  // DB 연결
  client.connect();

  client.query("SELECT * FROM pg_tables WHERE tablename = 'account'", (err, res) => {
      //계정 테이블 없을 경우 생성
      if(err == null){
          if(res.rows.length<1){
            createAccountTable();
          }
      }
  });

  client.query("SELECT * FROM pg_tables WHERE tablename = 'board'", (err, res) => {
    //게시판 테이블 없을 경우 생성
    if(err == null){
        if(res.rows.length<1){
          createBoardTable();
        }
    }
  });

  client.query("SELECT * FROM pg_tables WHERE tablename = 'connect_list'", (err, res) => {
      if(err == null){
          //접속 테이블 없을 경우 생성
          if(res.rows.length<1){
            createConnectListTable();
          } 
          //접속 이력 테이블이 있을 경우 조회 
          else{
              // insertCurrentTime();
              // lookList();
          }
      }else{
          console.log("에러러ㅓ어어어어어러러어어어");
          console.log(err);
      }
  });


  function insertCurrentTime() {
      client.query("INSERT INTO connect_list (user_id,register_date) VALUES ('mcnc',now())", (err, res) => {
          if(err == null){
              console.log("접속이력 생성 완료 \n\n");
          }else{
              console.log(err);

              return err;
          }
      });
  }

}, 5000)

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

//계정 추가
function insertAccount(userId, name, password, email){
  client.query("INSERT INTO account (user_id, user_name, password, email,created_on,last_login) VALUES ('"
              + userId + "','" 
              + name  + "','"
              + password + "','"
              + email + "', now(),now())", (err, res) => {
    if(err == null){
        console.log("계정 생성 완료 \n\n");
    }else{
        console.log(err);
    }
});
}

function createConnectListTable() {
  client.query("CREATE TABLE connect_list"
  +"("
  + "USER_ID VARCHAR(50) NOT NULL,"
  + "register_date timestamp"
  + ")", (err, res) => {
      console.log("접속 이력 테이블 생성 완료");
  });  
}

function createAccountTable() {
  client.query("CREATE TABLE ACCOUNT"
  +"("
  + "USER_ID VARCHAR(50) PRIMARY KEY,"
  + "USER_NAME VARCHAR(50) UNIQUE NOT NULL,"
  + "PASSWORD VARCHAR(50) NOT NULL,"
  + "EMAIL VARCHAR(355) UNIQUE NOT NULL,"
  + "CREATED_ON TIMESTAMP NOT NULL,"
  + "LAST_LOGIN TIMESTAMP"
  + ")", (err, res) => {
    console.log("계정 테이블 생성 완료");
  });
}

function createBoardTable() {
  client.query("CREATE TABLE BOARD"
  +"("
  + "BOARD_NO INT PRIMARY KEY,"
  + "WRITER_ID VARCHAR(50) UNIQUE NOT NULL,"
  + "TITLE VARCHAR(50) NOT NULL,"
  + "CONTENTS VARCHAR(1000) UNIQUE NOT NULL,"
  + "CREATED_TIME TIMESTAMP NOT NULL,"
  + "REVISE_TIME TIMESTAMP"
  + ")", (err, res) => {
    console.log("게시판 테이블 생성 완료");
  });
}

function endDBconnection(){
  // client.end() //DB 연결 해제 
}