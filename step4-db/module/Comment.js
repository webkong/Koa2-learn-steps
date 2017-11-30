const Sequelize = require('sequelize');
const sequelize = require('../lib/libDB');
const {id} = require('./Id');

const ModuleComment = sequelize.define('comment', {
  id,
  content: {
    type: Sequelize.TEXT,
    comment: '内容'
  },
  liked:{
    type: Sequelize.BOOLEAN,
    comment: '点赞'
  }
}, {
  tableName: 'comments',
  timestamps: false
});
ModuleComment.sync({
  force: true
});


module.exports = ModuleComment;