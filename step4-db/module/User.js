const Sequelize = require('sequelize');
const sequelize = require('../lib/libDB');
const { id } = require('./Id');
const ModuleUser= sequelize.define('user', {
  id,
  fullname: { type: Sequelize.STRING(32), allowNull: false, comment: '姓名' },
  password: { type: Sequelize.STRING(32), allowNull: true, comment: '密码' },
  email: { type: Sequelize.STRING(128), allowNull: false, unique: true, comment: '邮箱' }
}, {
  paranoid: true,
  comment: '用户'
})
ModuleUser.sync({
  force: true
});
module.exports = ModuleUser;