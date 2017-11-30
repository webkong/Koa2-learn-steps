// poster controllers
const ModulePoster = require('../module/Post');

let get = async (ctx) => {
  let data = '';
  await ModulePoster.findById(1).then(poster => {
    data = poster;
  });
  ctx.body = data;
}

let add = (ctx) => {
  ctx.body = {
    flag: true,
    name: ctx.params.name,
    para: ctx.query
  }
}

let del = (ctx) => {
  ctx.body = {
    flag: true,
    name: ctx.params.name,
    para: ctx.query
  }
}

let getList = (ctx) => {
  ctx.body = {
    flag: true,
    name: ctx.params.name,
    para: ctx.query
  }
}

module.exports = {
  get: get,
  add: add,
  del: del,
  getList: getList
}