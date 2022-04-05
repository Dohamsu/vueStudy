const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

exports.getEscapeRoom = (param) => {
    try {
        console.log("크롤링중....\n");
        console.log("param" + JSON.stringify(param));

        let month     =  param.month;
        let day       =  param.day;
        let site      =  param.site;
        let keyword   =  param.keyword;
        let searchUrl =  "";

        switch(site){
            case "secretGarden_RiverTown" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=9&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_Hyewha" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=4&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_CenematicHyewha" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=11&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_MidnightHapjeong" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=7&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=9&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "pointNine_Gangnam1" : 
                searchUrl =  "https://point-nine.com/layout/res/home.php?rev_days=2022-" +month +"-" + day+"&s_zizum=1&go=rev.make";
                break;
            case "pointNine_Gangnam2" : 
                searchUrl =  "https://point-nine.com/layout/res/home.php?rev_days=2022-" +month +"-" + day+"&s_zizum=4&go=rev.make";
                break;

                //******************************************************************************************************************** */
            case "matjip" : 
                searchUrl =  "https://www.diningcode.com/isearch.php?query=" + keyword;
                break;
        }


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
                console.error(error);
            }
        }
        
        const crollResult = async () => {
            return getContent()
                .then(html =>{
                    let ulList = [];
                    const $ = cheerio.load(html);
                    var $bodyList = "";

                    console.log(site);
                    switch(site){

                        case "secretGarden_RiverTown" : 
                        case "secretGarden_Hyewha" : 
                        case "secretGarden_CenematicHyewha" : 
                        case "secretGarden_MidnightHapjeong" : 

                            $bodyList = $(".theme_box");

                            $bodyList.each(function(i, elem) {
                                ulList[i] = {
                                    title: $(this).find('h3.h3_theme').first().text(),
                                    summary: $(this).find('p.tag_txt').text(),
                                    reservableTime:  
                                        $(this).find('ul.reserve_Time li a').not(".end").find(".time").text(),
                                    siteUrl : searchUrl
                                    
                                };
                            });
                        break;

                        case "pointNine_Gangnam1" :
                        case "pointNine_Gangnam2" : 
                        
                            $bodyList = $(".theme_box");

                            $bodyList.each(function(i, elem) {
                                ulList[i] = {
                                    title: $(this).find('h3.h3_theme').first().text(),
                                    // summary: $(this).find('p.tag_txt').text(),
                                    reservableTime:  
                                        $(this).find('ul.reserve_Time li a').not(".end").find(".time").text(),
                                    siteUrl : searchUrl
                                    
                                };
                            });

                        break;

                    }
                    const data = ulList.filter(n => n.title);
                    console.log("==============마지막 필터링 데이터 =================");
                    console.log(JSON.stringify(data));
                    
                    return data;
                })
        }
        
        return  crollResult();

    } catch (error) {
      console.error(error);
    }
};
  
exports.getMatjip = (param) => {
    try {
        console.log("크롤링중....\n");
      
        console.log("param" + JSON.stringify(param));

        let keyword   =  param.keyword;
        let searchUrl =  "https://www.diningcode.com/list.php?query=" + encodeURI(keyword);


        console.log("keyword : " + keyword);
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
                console.error(error);
            }
        }
        
        const crollResult = async () => {
            return getContent()
                .then(html =>{
                    let ulList = [];
                    const $ = cheerio.load(html);
                    var $bodyList = "";


                    $bodyList = $("#div_list li");

                    $bodyList.each(function(i, elem) {
                        ulList[i] = {
                            title: $(this).find('span.btxt').text(),
                            summary: $(this).find('span.stxt').text(),
                            // tag: 
                            //     $(this).find('ul.reserve_Time li a').not(".end").find(".time").text(),
                            // siteUrl : searchUrl
                            
                        };
                    });
 

                    const data = ulList.filter(n => n.title);
                    console.log("==============마지막 필터링 데이터 =================");
                    console.log(JSON.stringify(data));
                    
                    return data;
                })
        }
        
        return  crollResult();

    } catch (error) {
      console.error(error);
    }
};

exports.getBantalInfo = (param) => {
    try {
        let month     =  param.month;
        let day       =  param.day;
        let site      =  param.site;
        let searchUrl =  "";

        switch(site){
            case "secretGarden_RiverTown" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=9&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_Hyewha" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=4&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_CenematicHyewha" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=11&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_DowntownHondae" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=2&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden_MidnightHapjeong" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=7&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "secretGarden" : 
                searchUrl =  "http://www.secretgardenescape.com/reservation.html?k_shopno=9&rdate=2022-" +month +"-" + day+"&prdno=";
                break;
            case "pointNine_Gangnam1" : 
                searchUrl =  "https://point-nine.com/layout/res/home.php?rev_days=2022-" +month +"-" + day+"&s_zizum=1&go=rev.make";
                break;
            case "pointNine_Gangnam2" : 
                searchUrl =  "https://point-nine.com/layout/res/home.php?rev_days=2022-" +month +"-" + day+"&s_zizum=4&go=rev.make";
                break;
        }

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
                console.error(error);
            }
        }
        
        const crollResult = async () => {
            return getContent()
                .then(html =>{
                    let ulList = [];
                    const $ = cheerio.load(html);
                    var $bodyList = "";

                    console.log(site);
                    switch(site){

                        case "secretGarden_RiverTown" : 
                        case "secretGarden_Hyewha" : 
                        case "secretGarden_CenematicHyewha" : 
                        case "secretGarden_DowntownHondae" : 
                        case "secretGarden_MidnightHapjeong" : 

                        $bodyList = $(".theme_box");

                            $bodyList.each(function(i, elem) {

                                ulList[i] = {
                                    theme       : $(this).find('h3.h3_theme').first().text(),
                                    imgSrc      : transImgSrc($(this).find('.theme_pic img').attr("src")),
                                    themeTitle  : $(this).find('p.tag_tt').text(),
                                    themeDetail : $(this).find('p.tag_txt').text(),
                                    timeStamps  : transTimeStamp($(this).find('ul.reserve_Time li a').not(".end").find(".time").text()),
                                    searchUrl   : searchUrl
                                };
                            });
                        break;

                        case "pointNine_Gangnam1" :
                        case "pointNine_Gangnam2" : 
                        
                            $bodyList = $(".theme_box");

                            $bodyList.each(function(i, elem) {
                                ulList[i] = {
                                    title: $(this).find('h3.h3_theme').first().text(),
                                    reservableTime: $(this).find('ul.reserve_Time li a').not(".end").find(".time").text()
                                };
                            });
                        break;
                    }
                    const data = ulList.filter(n => n.timeStamps.length>0);
                    console.log("==============마지막 필터링 데이터 =================");
                    console.log(JSON.stringify(data));
                    
                    return data;
                })
        }
        
        return  crollResult();

    } catch (error) {
      console.error(error);
    }

    function transImgSrc(rawSrc) {
        return rawSrc.replace(".","http://www.secretgardenescape.com");
    }

    function transTimeStamp(rawStr){
        let strLength   = rawStr.length/5;
        let returnArray = [];
        for(let i= 0; i<strLength; i++){
            returnArray.push(rawStr.substr(i*5,5));
        };
        return returnArray;
    }
};
