import Koa from "koa";
import serve from 'koa-static'
import path from 'path'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import parser from 'koa-bodyparser'
import logger from 'koa-logger'
import frontend from './routers/index.js'


const app = new Koa();
const __dirname = path.resolve();
/**
 * Static
 */
app.use(serve(`${__dirname}/public`))
app.use(json())
app.use(parser({ extended: true }))
app.use(logger())

/**
 * Html
 */
app.use(
  views(`${__dirname}/public/views/`, {
    map: {
      html: 'pug',
    },
  })
)
/**
 * error handler
 */
onerror(app)
app.use(frontend().routes(), frontend().allowedMethods())

app.listen(3000);