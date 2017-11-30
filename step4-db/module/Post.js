const Sequelize = require('sequelize');
const sequelize = require('../lib/libDB');
const {id} = require('./Id');

const ModulePost = sequelize.define('post', {
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
  tableName: 'posts',
  timestamps: false
});
ModulePost.sync({
  force: true
});


module.exports = ModulePost;