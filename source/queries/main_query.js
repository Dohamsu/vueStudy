exports.getConnectList       = "SELECT user_id,TO_CHAR(register_date,'YYYY-MM-DD-HH24:MM:SS') as TIME FROM connect_list  order by register_date DESC"
exports.createConnectList    = "CREATE TABLE connect_list (USER_ID VARCHAR(50) NOT NULL,register_date timestamp)"
exports.addConnectRow        = "INSERT INTO connect_list (user_id,register_date) VALUES ('mcnc',now())"
exports.searchConnectTable   = "SELECT * FROM pg_tables WHERE tablename = 'connect_list'"