
const CrollService = require('../services/croll_service');


exports.getHtml = async(req, res, next) => {
    let {url} = req.params;
    try {
        console.log("크롤 컨트롤러");
        let resultData = await CrollService.getHtml(url);
        console.log("data : ");
        console.log(resultData);
        return res.status(200).json(resultData);
    }catch(err){
        return res.status(500).json(err);
    }
}