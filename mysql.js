var mysql      = require('mysql');  //引入模塊

//設置連接參數
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'vue2008'
});
 
connection.connect();
 
//執行query
connection.query('select user_id,user_name,email from p_users limit 10', function (error, results, fields) {

//   獲取查詢結果   results
console.log(results[0].user_name)

//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
});
connection.end();