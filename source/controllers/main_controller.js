const MainService = require('../services/main_service');

exports.getMain = async(req, res, next) => {
    try {
        //접속 이력 조회
         let rows = await MainService.getMain();

        res.render('index', 
        { 
            title: '뀨아아ㅏㅇ 엠비씨 패터너언' 
             ,contents : JSON.stringify(rows)

        });


        return ;
    }catch(err){
        return res.status(500).json(err);
    }
}