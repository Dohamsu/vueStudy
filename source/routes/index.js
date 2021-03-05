var express = require('express');
var cors = require('cors');
var router  = express.Router();

const InitController    = require('../controllers/init_controller');
const BoardController   = require('../controllers/board_controller');
const AccountController = require('../controllers/account_controller');
const MainController    = require('../controllers/main_controller');
const CrollController   = require('../controllers/croll_controller');

router.get('/', MainController.getMain);
router.get('/init', InitController.getInit);
router.get('/account', cors(),AccountController.getAccount);
router.get('/croll', cors(),CrollController.getHtml);
// router.post('/api/signup', function(req, res, next){
//     var id       = req.body.id;
//     var password = req.body.password;
//     var email    = req.body.email;
//     console.log("#### 데이터 수신중-------");
//     console.log(id + password + email);

//     AccountController.addAccount(req);

//     // res.json(req.body);

// });
router.post('/api/signup', AccountController.addAccount);



// /* 회원가입 */
// router.get('/sign-in', function(req, res, next) {

//   var userId    = req.query.user_id;
//   var name      = req.query.name;
//   var password  = req.query.password;
//   var email     = req.query.email;

//   res.render('index', 
//   { 
//     title: '회원 가입',
//     boardNo : 1,
//     contents : "아이디 : " + userId
//               +"\n이름 :" + name
//               +"\nemail :" + email

//   });
  
//   //계정 생성
//   insertAccount(userId,name,password,email);

// });


module.exports = router;

//   client.query("SELECT * FROM pg_tables WHERE tablename = 'account'", (err, res) => {
//       //계정 테이블 없을 경우 생성
//       if(err == null){
//           if(res.rows.length<1){
//             createAccountTable();
//           }
//       }
//   });

//   client.query("SELECT * FROM pg_tables WHERE tablename = 'board'", (err, res) => {
//     //게시판 테이블 없을 경우 생성
//     if(err == null){
//         if(res.rows.length<1){
//           createBoardTable();
//         }
//     }
//   });


// }, 5000)


// //계정 추가
// function insertAccount(userId, name, password, email){
//   client.query("INSERT INTO account (user_id, user_name, password, email,created_on,last_login) VALUES ('"
//               + userId + "','" 
//               + name  + "','"
//               + password + "','"
//               + email + "', now(),now())", (err, res) => {
//     if(err == null){
//         console.log("계정 생성 완료 \n\n");
//     }else{
//         console.log(err);
//     }
// });
// }


// function createBoardTable() {
//   client.query("CREATE TABLE BOARD"
//   +"("
//   + "BOARD_NO INT PRIMARY KEY,"
//   + "WRITER_ID VARCHAR(50) UNIQUE NOT NULL,"
//   + "TITLE VARCHAR(50) NOT NULL,"
//   + "CONTENTS VARCHAR(1000) UNIQUE NOT NULL,"
//   + "CREATED_TIME TIMESTAMP NOT NULL,"
//   + "REVISE_TIME TIMESTAMP"
//   + ")", (err, res) => {
//     console.log("게시판 테이블 생성 완료");
//   });
// }
