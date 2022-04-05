const BangtalService = require('../services/bangtal_service');


exports.getBantalInfo = async(req, res, next) => {
     let searchKeyword = req.body.searchKeyword;
    try {
        let rows = await BangtalService.getBantalInfo(searchKeyword);
        return res.json(rows.rows);
    }catch(err){
        return res.status(500).json(err);
    }
}