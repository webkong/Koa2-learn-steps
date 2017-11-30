// comment controllers
const ModuleComment = require('../module/Comment');

let add = async (ctx) => {
  let data = '';
  await ModuleComment.findById(1).then(comment => {
    data = comment;
  });
  ctx.body = data;
}
let del = async (ctx) => {
  let data = '';
  await ModuleComment.findById(1).then(comment => {
    data = comment;
  });
  ctx.body = data;
}
let liked = async (ctx) => {
  let data = '';
  await ModuleComment.findById(1).then(comment => {
    data = comment;
  });
  ctx.body = data;
}


module.exports = {
  add: add,
  del: del,
  liked: liked
}