const pool = require('../database/pool');
const BantalQuery = require('../queries/bantal_query');


//키워드 검색
exports.getBantalInfo = async(searchKeyword) => {
    try{
        const client = await pool.connect();
        searchKeyword = "%"+searchKeyword+"%";
        console.log(searchKeyword);

        let data = await client.query(BantalQuery.searchAllData,[searchKeyword]);
        client.release();
        console.log(data);
        return data;
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}
