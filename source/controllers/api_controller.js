
const CrollService = require('../services/lol_api_service');


exports.getSummonerInfo = async(req, res, next) => {

    let param = req.params;
        console.log(param);
        if(param){
            try {
                console.log("MMR 검색 ");
                let resultData = await CrollService.getSummonerInfo(param);
              
            


                if(resultData== "ERROR"){
                    return res.status(200) .contentType('text/xml')
                    .send("ERROR");
                }else{
                    console.log(typeof(resultData));

                    let tempObj = JSON.parse(resultData);
                    console.log(tempObj.ARAM);


                    return res.status(200) .contentType('text/xml')
                    .send(tempObj.ARAM);
                }
            }catch(err){
                return res.status(500).send("ERROR");
            }
        }else if(param.question){
            //자연어 처리



        }else{
            try {
                console.log("검색어 없다");
                let resultData = await CrollService.getEscapeRoom(param);

                // return res.status(200).json(resultData);
                return res.status(200) .contentType('text/xml')
                .send(JSON.stringify(resultData));
            }catch(err){
                return res.status(500).json(err);
            }
        }
}