const pool          = require('../database/pool');
const AccountQuery  = require('../queries/account_query');
const InitQuery     = require('../queries/init_query');

exports.init = async() => {

        try{
            //db 연결
            pool.connect();
    
            let searchConnectT = await pool.query(InitQuery.searchConnectTable);
            let searchAccountT = await pool.query(AccountQuery.searchAccountTable);
    
                if(searchConnectT.err == null|| searchConnectT.err == undefined){
                    //접속 테이블 없을 경우 생성
                    if(searchConnectT.rows.length < 1){
                      //테이블 생성
                        let createTable = await pool.query(InitQuery.createConnectList);
                    } 
                }

                if(searchAccountT.err == null|| searchAccountT.err == undefined){
                    //계정 테이블 없을 경우 생성
                    if(searchAccountT.rows.length < 1){
                      //테이블 생성
                        let createTable = await pool.query(AccountQuery.createAccountList);
                    } 
                }

                console.log("searchConnectT============================");
                console.log(searchConnectT.rows);

                console.log("searchAccountT============================");
                console.log(searchAccountT.rows);

        
            setTimeout(function(){
                pool.end();
            },3000)

        } catch(err){
            console.log(err);
            throw Error(err)
        }
}

