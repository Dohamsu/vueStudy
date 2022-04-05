const AccountService = require('../services/account_service');

exports.getAccount = async(req, res, next) => {
     let {accountInfo} = req.params;
    try {
        let rows = await AccountService.getAccount();
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getLogin = async(req, res, next) => {
    let accountInfo = req.body;
    try {
       let result = await AccountService.getLogin(accountInfo);
       return res.json(result);
   }catch(err){
       return res.status(500).json(err);
   }
}

exports.addAccount = async(req, res, next) => {
    let accountInfo = req.body;
    try {
        let result = await AccountService.addAccount(accountInfo);
        return res.json(result);
    }catch(err){
        return res.status(500).json(err);
    }
}