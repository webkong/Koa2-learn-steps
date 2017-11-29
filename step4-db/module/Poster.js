const Sequelize = require('sequelize');
const sequelize = require('../lib/libDB');
const {id} = require('./Id');

const ModulePoster = sequelize.define('poster', {
  id,
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '标题'
  },
  content: {
    type: Sequelize.TEXT,
    comment: '内容'
  },
  images: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: '图片'
  },
  comments: {
    type: Sequelize.STRING,
    allowNull: true,
    comment: '评论'
  },
  like_count: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    comment: '喜欢'
  }
}, {
  tableName: 'poster',
  timestamps: false
});
ModulePoster.sync({
  force: true
});


module.exports = ModulePoster;