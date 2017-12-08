#### koa资源

>webkong

官网[http://koajs.com/#introduction](http://koajs.com/#introduction)

中文网[https://koa.bootcss.com/#introduction](https://koa.bootcss.com/#introduction)


#### 开始构建

> node.js > 8.0 & npm>5.0

```
mkdir cd  koa-learn
npm init
npm install koa
```

用编辑器打开项目，创建index.js

```
//与koa1不同，在koa2中，导入的是一个class，因此要用大写的Koa
const Koa = require('koa');
//创建一个koa对象
const app = new Koa();

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
```

其中，参数ctx是由koa传入的封装了request和response的变量，我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。

上面的异步函数中，我们首先用await next();处理下一个异步函数，然后，设置response的Content-Type和内容。

由async标记的函数称为异步函数，在异步函数中，可以用await调用另一个异步函数，这两个关键字将在ES7中引入。


#### koa middleware

```
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});
```

每收到一个http请求，koa就会调用通过app.use()注册的async函数，并传入ctx和next参数。

我们可以对ctx操作，并设置返回内容。但是为什么要调用await next()？

原因是koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。

可以用以下3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML：

```
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

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});
```

**middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。**

此外，如果一个middleware没有调用await next()，会怎么办？答案是后续的middleware将不再执行了。这种情况也很常见，例如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：

```
app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
    } else {
        ctx.response.status = 403;
    }
});
```

koa 核心概念就是中间件。

中间件集合 [https://github.com/koajs/koa/wiki#middleware](https://github.com/koajs/koa/wiki#middleware)

可以看出async/await的特点

* 可以让异步逻辑用同步写法实现
* 最底层的await返回需要是Promise对象
* 可以通过多层 async function 的同步写法代替传统的callback嵌套