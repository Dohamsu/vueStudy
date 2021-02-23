const MainService = require('../services/main_service');

exports.getMain = async(req, res, next) => {
    try {
        //  let rows = await MainService.getMain();

        res.render('index', 
        { 
            title: '뀨아아ㅏㅇ 엠비씨 패터너언' 

        });


        return ;
    }catch(err){
        return res.status(500).json(err);
    }
}