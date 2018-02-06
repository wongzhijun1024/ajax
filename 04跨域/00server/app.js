var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "douban.txt" );
})


app.post('/user', urlencodedParser, function (req, res) {
    var id =req.body.id;
    console.log("user:"+id);
    res.write(id);
    res.end();
})

app.get('/infor',  function (req, res) {

    var ob={
        name:'小刚你好！'
    }

    var data = 'foo('+JSON.stringify(ob)+')';
    console.log(data);
    res.write(data);
    res.end();
})

var server = app.listen(8088)