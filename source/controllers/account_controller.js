const AccountService = require('../services/account_service');


exports.getAccount = async(req, res, next) => {
    // let {accountNo} = req.params;
    try {
        let rows = await AccountService.getAccount();
        console.log("서버 정보 전달 완료");
        console.table(rows.rows);
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}