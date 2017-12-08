#### 拆分controllers和routes

当router多时，不可能在`index.js`里面不停地写`router.get/post`,会导致文件越来越长，越来越难以维护和编写，所以需要重构，是结构更清晰。

所以要拆分处理逻辑

```
+- controllers/
|  |
|  +- login.js <-- 处理login相关URL
|  |
|  +- users.js <-- 处理用户管理相关URL
```

只要在`index.js`应用就可以了

可以使用`require-directory`自动加载controllers里面的js文件，并暴露出去，交由`index.js`使用。

[https://github.com/webkong/node-require-directory](https://github.com/webkong/node-require-directory)


```
//controllers/index.js

let requireDirectory = require('require-directory')
module.exports = requireDirectory(module)

```

```
//routes/index.js
const Router = require('koa-router')
const ctrls = require('../controllers/index.js')

console.log(ctrls);
const router = new Router();

router
  .get('/getPoster', ctrls.poster.get)
  .post('/addPoster', ctrls.poster.add)
  .get('/delPoster', ctrls.poster.del)
  .get('/getPosterList', ctrls.poster.getList)


module.exports = router;
```

```
//constrollers/poster.js

// poster controllers

 let get = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let add = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let del = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let getList = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

module.exports = {
  get:get,
  add:add,
  del:del,
  getList:getList
}
```