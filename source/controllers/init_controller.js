const InitService   = require('../services/init_service');

exports.getInit = async(req, res, next) => {
    try {
        //db table 생성 진행
         let data = await InitService.init();

        res.render('index', 
        { 
            title: '뀨아아ㅏㅇ 이닛' 

        });

        return;
    }catch(err){
        return res.status(500).json(err);
    }
}