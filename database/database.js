const mysql = require('mysql2');

const database = mysql.createConnection({
  host: 'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com',
  user: 'candidate',
  password: 'NoTeDeSt^C10.6?SxwY882}',
  database: 'conqtvms_dev',
  port: 3306,
});

database.connect((err) => {
  if (err) {
    console.error('error to connect database', err);
  }
  console.log('successfully connected');
});

module.exports = database;
