const AccountService = require('../services/account_service');


exports.getAccount = async(req, res, next) => {
     let {accountInfo} = req.params;
    try {
        let rows = await AccountService.getAccount();
        console.log("서버 정보 전달 완료");
        console.table(rows.rows);
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getLogin = async(req, res, next) => {
    let accountInfo = req.body;
    console.log("req : ");
    console.log(req.body);   
    try {
       let result = await AccountService.getLogin(accountInfo);
       console.log("결과값 : " + result);
       console.log("로그인 정보 전달 완료");
       return res.json(result);
   }catch(err){
       return res.status(500).json(err);
   }
}

exports.addAccount = async(req, res, next) => {
    let accountInfo = req.body;
    console.log("req : ");
    console.log(req.body);
    try {
        let result = await AccountService.addAccount(accountInfo);
        console.log("서버 정보 전달 완료");
        return res.json(result);
    }catch(err){
        return res.status(500).json(err);
    }
}