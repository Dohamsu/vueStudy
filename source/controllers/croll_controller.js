
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



exports.searchBaltal = async(req, res, next) => {
    let param = req.body.searchInfo;
        console.log(param);

        param = {
            "month" : param.month,
            "day" : param.day,
            "site" : "secretGarden_RiverTown",
        }
        let  param2 = {
            "month" : param.month,
            "day" : param.day,
            "site" : "secretGarden_Hyewha",
        }
        let  param3 = {
            "month" : param.month,
            "day" : param.day,
            "site" : "secretGarden_CenematicHyewha",
        }
        let  param4 = {
            "month" : param.month,
            "day" : param.day,
            "site" : "secretGarden_DowntownHondae",
        }
        let  param5 = {
            "month" : param.month,
            "day" : param.day,
            "site" : "secretGarden_MidnightHapjeong",
        }
    try {
        console.log("방탈 정보 전체 가져오기");

        let storeList  =["secretGarden_RiverTown","secretGarden_Hyewha" ,"secretGarden_CenematicHyewha","secretGarden_DowntownHondae","secretGarden_MidnightHapjeong" ] 
        let resultData = await CrollService.getBantalInfo(param);
        let resultData2 = await CrollService.getBantalInfo(param2);
        let resultData3 = await CrollService.getBantalInfo(param3);
        let resultData4 = await CrollService.getBantalInfo(param4);
        let resultData5 = await CrollService.getBantalInfo(param5);
        // console.log(typeof(resultData));
        // console.log(resultData2);

        // return res.status(200).json(resultData);
        return res.status(200) .contentType('text/xml')
        .send(JSON.stringify(resultData.concat(resultData2).concat(resultData3).concat(resultData4).concat(resultData5)));
    }catch(err){
        return res.status(500).json(err);
    }        
}