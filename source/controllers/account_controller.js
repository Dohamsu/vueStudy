const AccountService = require('../services/account_service');


exports.getAccount = async(req, res, next) => {
    // let {accountNo} = req.params;
    try {
        let rows = await AccountService.getAccount();
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}