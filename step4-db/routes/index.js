const Router = require('koa-router')
const ctrls = require('../controllers/index')

const router = new Router();

router
  .get('/getPoster', ctrls.poster.get)
  .post('/addPoster', ctrls.poster.add)
  .get('/delPoster', ctrls.poster.del)
  .get('/getPosterList', ctrls.poster.getList)
  .get('/login', ctrls.user.login)
  .post('/register', ctrls.user.register)
  .get('/logout', ctrls.user.logout)


module.exports = router;