#### db

拆分控制器和优化路由之后，就要开始服务器端比不可少的步骤--操作数据库。

我们以mysql为例

这里用到ORM包 `Sequelize`来让我们操作数据库更简洁

[http://docs.sequelizejs.com/](http://docs.sequelizejs.com/)

##### 新建db config
```
//db config
const db = {
  dialect:'mysql',
  host: 'localhost', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'root', // 数据库用户名
  password: '', // 数据库密码
  database: 'koa', // 数据库名称
  prefix: '' // 默认"api_"

}

module.exports = db;
```

##### 创建sequelize对象

```
const Sequelize = require('sequelize');

const dbConf = require('../config/confDB');

const sequelize = new Sequelize(dbConf.database, dbConf.username, dbConf.password, {
  dialect: dbConf.dialect,
  host: dbConf.host,
  port: dbConf.port,
  dialectOptions: { // MySQL > 5.5，其它数据库删除此项
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_520_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  pool: {
    max: 4,
    min: 0,
    idle: 10000
  }
})

module.exports = sequelize;
```
##### 定义Sequelize的module

```
const Sequelize = require('sequelize');
const sq = require('../lib/libDB');

const ModulePoster = sq.define('poster', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'poster',
  timestamps: false
})

module.exports = ModulePoster;
```
##### 使用

```

const ModulePoster = require('../module/modulePoster');

 let get = async (ctx) => {
  let data = '';
  await ModulePoster.findById(1).then(poster => {
    data = poster;
  });
  ctx.body = data;
}
```