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

exports.getLogin = async(accounttInfo) => {
    try{
        console.log("############# 쿼리 시작 #################################");
        const client = await pool.connect();
        let data = await client.query(AccountQuery.getLogin,
            [
             accounttInfo.id, 
             accounttInfo.password
            ]);

        client.release();
        console.log("쿼리 결과 ");
        console.log(data.rows[0].count);

        return data.rows[0].count>0;
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}


exports.addAccount = async(accounttInfo) => {
    try{
        console.log("############# 쿼리 시작 #################################");
        const client = await pool.connect();

        let data = await client.query(AccountQuery.addAccount,
             [accounttInfo.id, 
             accounttInfo.name, 
             accounttInfo.password, 
             accounttInfo.email]
             );

        client.release();

        return data;
    } catch(err){
        console.log(err);
        throw Error(err)
    }
}