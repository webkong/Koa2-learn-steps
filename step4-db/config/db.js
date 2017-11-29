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