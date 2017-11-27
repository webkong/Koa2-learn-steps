// poster controllers

 let get = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let add = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let del = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

 let getList = (ctx) =>{
  ctx.body = {
    flag:true,
    name: ctx.params.name,
    para: ctx.query
  }
}

module.exports = {
  get:get,
  add:add,
  del:del,
  getList:getList
}