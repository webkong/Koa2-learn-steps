//与koa1不同，在koa2中，导入的是一个class，因此要用大写的Koa
const Koa = require('koa');
//创建一个koa对象
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.use(async (ctx, next) =>{
  await next();
  //设置response的ContentType
  ctx.response.type = 'text/html';
  //设置response的body
  ctx.response.body = '<h1>hello koa2</h1>';
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});