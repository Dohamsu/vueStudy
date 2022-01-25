
const CrollService = require('../services/croll_service');


exports.getCroll = async(req, res, next) => {
    let param = req.params;
        console.log(param);
        if(param.keyword){
            try {
                console.log("맛집관련");
                let resultData = await CrollService.getMatjip(param);
                // return res.status(200).json(resultData);
                return res.status(200) .contentType('text/xml')
                .send(JSON.stringify(resultData));
            }catch(err){
                return res.status(500).json(err);
            }
        }else if(param.question){
            //자연어 처리



        }else{
            try {
                console.log("방탈관련");
                let resultData = await CrollService.getEscapeRoom(param);

                // return res.status(200).json(resultData);
                return res.status(200) .contentType('text/xml')
                .send(JSON.stringify(resultData));
            }catch(err){
                return res.status(500).json(err);
            }
        }
}