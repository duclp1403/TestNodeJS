var express = require('express');
var router = express.Router();
//Connect
const { Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dichvugiadinh',
  password: '1403',
  port: 5432,

})


/* GET home page. */
router.get('/', function(req, res, next) {});




/*Test Lấy dữ liệu về*/ 
router.get('/getDatatk', function(req, res, next) {


  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
   //Lấy dữ liệu

    pool.query('SELECT * FROM taikhoantho',(error,response)=>{
      if(error)
      {
        console.log(error);
      }else{
        res.send(response.rows);
        console.log(response.rows);
      }
      //Để cái này vào thì chỉ gọi Res được 1 lần. F5 lại thì nó k gọi nữa ĐM
        // pool.end();
    })
});

module.exports = router;
