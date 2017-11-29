const Sequelize = require('sequelize');

const conf = require('../config/index');
console.log(conf);
const sequelize = new Sequelize(conf.db.database, conf.db.username, conf.db.password, {
  dialect: conf.db.dialect,
  host: conf.db.host,
  port: conf.db.port,
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

sequelize.authenticate()
.then((/* err */) => {
  // console.log('Connection has been established successfully.');
  console.log('----------------------------------------')
  console.log('DATABASE √')
  console.log('    HOST     %s', conf.db.host)
  console.log('    PORT     %s', conf.db.port)
  console.log('    DATABASE %s', conf.db.database)
  console.log('----------------------------------------')
})
.catch(err => {
  console.log('Unable to connect to the database:', err)
})


module.exports = sequelize;