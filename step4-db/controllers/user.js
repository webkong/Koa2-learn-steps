// user controllers
const ModuleUser = require('../module/User');

let login = async (ctx) => {
  let data = '';
  await ModuleUser.findById(1).then(user => {
    data = user;
  });
  ctx.body = data;
}

let logout = (ctx) => {
  ctx.body = {
    flag: true,
    name: ctx.params.name,
    para: ctx.query
  }
}
let register = (ctx) => {
  ctx.body = {
    flag: true,
    name: ctx.params.name,
    para: ctx.query
  }
}

module.exports = {
  register: register,
  logout: logout,
  login: login
}