const pool      = require('../database/pool');
const MainQuery = require('../queries/main_query');

exports.getMain = async() => {
    try{
        //db 연결
        pool.connect();

        let resSearch = await pool.query(MainQuery.searchConnectTable);

            if(resSearch.err == null|| resSearch.err == undefined){
                //접속 테이블 없을 경우 생성
                if(resSearch.rows.length < 1){
                  //테이블 생성
                    let createProcess = await pool.query(MainQuery.createConnectList);
                    pool.end();
                    return;
                } 
                //접속 이력 테이블이 있을 경우 삽입 및 조회 
                else{
                    await pool.query(MainQuery.addConnectRow);
                    let connectList  = await pool.query(MainQuery.getConnectList);
                    pool.end();
                    console.log("=========  DB 접속 이력  =======");
                    console.table(connectList.rows);
                    return connectList.rows;
                }
            }
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}



