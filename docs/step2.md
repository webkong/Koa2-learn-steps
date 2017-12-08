#### routing

为了处理URL，我们需要引入koa-router这个middleware，让它负责处理URL映射。

开始是用koa-router来处理url。


[https://www.npmjs.com/package/koa-router](
https://www.npmjs.com/package/koa-router)

```
const Router = require('koa-router');
//创建一个koa对象

//body解析
var bodyParser = require('koa-bodyparser');

const router = new Router();


app.use(bodyParser());


router.post('/publishPost', async (ctx, next)=>{
  await next();

  let body = ctx.request.body
  console.log(body);
});


app.use(router.routes());

```