//与koa1不同，在koa2中，导入的是一个class，因此要用大写的Koa
const Koa = require('koa');

const Router = require('koa-router');
//创建一个koa对象
const app = new Koa();
//body解析
var bodyParser = require('koa-bodyparser');

const router = require('./routes/index');



app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});  