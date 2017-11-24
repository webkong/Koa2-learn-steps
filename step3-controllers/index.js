//与koa1不同，在koa2中，导入的是一个class，因此要用大写的Koa
const Koa = require('koa');

const Router = require('koa-router');
//创建一个koa对象
const app = new Koa();
//body解析
var bodyParser = require('koa-bodyparser');

const router = new Router();


app.use(bodyParser());

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/publishPost" method="post">
          <p>id: <input name="name" value="koa"></p>
          <p>title: <input name="text" type="text"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.get('/postList/:id', async (ctx, next)=>{
  await next();
  ctx.body = {
    'id':'webkong',
    'title':'这是一个测试的东西'
  }
});

router.post('/publishPost', async (ctx, next)=>{
  await next();

  let body = ctx.request.body
  console.log(body);
});


app.use(router.routes());

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});  console.log(ctx.req);