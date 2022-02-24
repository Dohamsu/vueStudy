const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

exports.getSummonerInfo = (param) => {
    try {
        console.log("API 요청중....\n");
      
        console.log("param" + JSON.stringify(param));

        let summoner     =  param.summoner;
        let queType      =  param.queType;
        let searchUrl =  "";


        searchUrl = "https://kr.whatismymmr.com/api/v1/summoner?name=" + encodeURI(summoner);


        console.log("searchUrl : " + searchUrl);

        const getContent = async () => {
            try{

                const html = await axios({
                    url: searchUrl,
                    mehthod :"GET",
                    responseType : "arraybuffer"
                });
                const contents = iconv.decode(html.data,"UTF-8");


               return contents; 
            }
            catch(error){


                console.log("에러네ㅔ");

                return "ERROR"; 


            }
        }
       
        return  getContent();

    } catch (error) {
      console.error(error);
    }
};
  

