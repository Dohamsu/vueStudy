const pool = require('../database/pool');
const AccountQuery = require('../queries/account_query');

exports.getAccount = async(accountNo) => {
    try{

        const client = await pool.connect();


        let data = await client.query(AccountQuery.getAccountList);

        client.release();

        return data;
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}


exports.addAccount = async(accounttInfo) => {
    try{

        console.log(accounttInfo);
        const client = await pool.connect();


        let data = await client.query(AccountQuery.addAccount,
            //  [accounttInfo.id, 
            //  accounttInfo.name, 
            //  accounttInfo.password, 
            //  accounttInfo.email]
      []      // ["jwonm" , "jinjin","1234","www@mcnc.comkr "]
             );

        client.release();

        return data;
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}