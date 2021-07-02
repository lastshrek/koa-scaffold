import Router from 'koa-router'
import index from '../controllers/index.js'
export default () => {
  const router = new Router()
  /**
   * Man Router
   */
  router.get('/', index.index)
  router.get('/login', index.login)
  return router
}