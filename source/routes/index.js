var express = require('express');
var cors = require('cors');
var router  = express.Router();

const InitController    = require('../controllers/init_controller');
// const BoardController   = require('../controllers/board_controller');
const AccountController = require('../controllers/account_controller');
const MainController    = require('../controllers/main_controller');
const CrollController   = require('../controllers/croll_controller');
const APIController     = require('../controllers/api_controller');

router.get('/', MainController.getMain);
router.get('/init', InitController.getInit); //서버 초기 세팅
router.get('/account', cors(),AccountController.getAccount);
router.get('/croll/:site/month=:month&day=:day', cors(),CrollController.getCroll); //방탈 크롤
router.get('/croll/matjip/keyword=:keyword', cors(),CrollController.getCroll); //맛집 크롤
// router.get('/croll/question=:question', cors(),CrollController.getCroll); //자연어 처리
router.get('/API/summoner=:summoner', cors(),APIController.getSummonerInfo); // MMR 서치 API 호출 
router.post('/api/signup', AccountController.addAccount);
router.post('/api/login', AccountController.getLogin);

module.exports = router;

