
const CrollService = require('../services/croll_service');


exports.getHtml = async(req, res, next) => {
    let {url} = req.params;
    try {
        console.log("크롤 컨트롤러");
        let resultData = await CrollService.getHtml(url);
        return res;
    }catch(err){
        return res.status(500).json(err);
    }
}