const Router = require('koa-router')
const ctrls = require('../controllers/index.js')

const router = new Router();

router
  .get('/getPoster', ctrls.poster.get)
  .post('/addPoster', ctrls.poster.add)
  .get('/delPoster', ctrls.poster.del)
  .get('/getPosterList', ctrls.poster.getList)


module.exports = router;