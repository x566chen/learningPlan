
var express = require('express');
var app = express();
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By",' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
});



app.get('/', function (req, res) { //添加的代码
let myjson = {
name : '买牛奶',
}
res.status(200).send(myjson);
})

app.post('/', function (req, res) {
  if(error){
    res.status(500).send('ERROR');
    return;
    }
  res.setHeader('Content-Type', 'application/json');
  
  let name = req.body;
  let myjson = { 
    name: name
  }
  res.status(200).send(myjson)
})


var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port
console.log("应用实例，访问地址为 http://%s:%s", host, port)
})