const pool          = require('../database/pool');
const AccountQuery  = require('../queries/account_query');
const InitQuery     = require('../queries/init_query');

exports.init = async() => {

        try{
            //db 연결
            const client = await pool.connect();
    
            let searchConnectT = await client.query(InitQuery.searchConnectTable);
            let searchAccountT = await client.query(AccountQuery.searchAccountTable);
    
                if(searchConnectT.err == null|| searchConnectT.err == undefined){
                    //접속 테이블 없을 경우 생성
                    if(searchConnectT.rows.length < 1){
                        let createTable = await client.query(InitQuery.createConnectList);
                    } 
                }

                if(searchAccountT.err == null|| searchAccountT.err == undefined){
                    //계정 테이블 없을 경우 생성
                    if(searchAccountT.rows.length < 1){
                        let createTable = await client.query(AccountQuery.createAccountList);
                    } 
                }

                console.log("searchConnectT============================");
                console.log(searchConnectT.rows);

                console.log("searchAccountT============================");
                console.log(searchAccountT.rows);
        
            client.release();

        } catch(err){
            console.log(err);
            throw Error(err)
        }
}

