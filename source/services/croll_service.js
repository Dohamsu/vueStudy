const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv-lite");

exports.getHtml = () => {
    try {
        console.log("크롤링중....\n");
      
        const getContent = async () => {
            try{

                const html = await axios({
                    url: "https://naver.com",
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
                    const $bodyList = $("ul.list_theme");
                
                    // console.log("===========  첫번째 돔 ======================");
                    $bodyList.each(function(i, elem) {
                        ulList[i] = {
                            title: $(this).find('em.theme_category').first().text(),
                            summary: $(this).find('strong.title.elss').text()
                        };
                    });
                    const data = ulList.filter(n => n.title);
                // console.log("==============마지막 필터링 데이터 =================");
                // console.log(JSON.stringify(data));
                
                return data;
                })
        }
        
        return  crollResult();

    } catch (error) {
      console.error(error);
    }
};
  