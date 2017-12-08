const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comment');

User.OwnPost = User.hasMany(Post, {foreignKey: 'ownerId', constraints: false})

User.PublishComment = User.hasMany(Comments, {foreignKey: 'commentId', constraints: false})


Post.Creator = Post.belongsTo(User, { foreignKey: 'creatorId', as: 'creator' })
Post.Comments = Post.hasMany(Comments, { foreignKey: 'commentId', as: 'comment' })

Comments.Creator = Comments.belongsTo(User, { foreignKey: 'creatorId', as: 'creator' })

Post.sync({
  force: true
});
User.sync({
  force: true
});

module.exports = {
  User, Post , Comments
}