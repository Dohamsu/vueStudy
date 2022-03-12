const BangtalService = require('../services/bangtal_service');


exports.getBantalInfo = async(req, res, next) => {
     let searchKeyword = req.body.searchKeyword;
     console.log("검색어ㅓ=========");
     console.log(searchKeyword);
    try {
        let rows = await BangtalService.getBantalInfo(searchKeyword);
        console.log("서버 정보 전달 완료");
        console.table(rows.rows);
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}