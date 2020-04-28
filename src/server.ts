import Koa from 'koa'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import yenv from 'yenv'
import log from 'fancy-log'
import csp from './utils/csp'
import compress from './utils/compress'
import notFavicon from './utils/api-not-favicon'
import apiError from './utils/api-error'
import docs from './utils/api-docs'
import {
  access as accessLogger,
  error as errorLogger,
} from './utils/api-logger'

const env = yenv()
const PORT = env.PORT
const server = new Koa()

server
  .use(accessLogger)
  .use(errorLogger)
  .use(helmet.contentSecurityPolicy(csp))
  .use(compress)
  .use(bodyParser())
  .use(notFavicon)
  .use(apiError)
  .use(docs)

if (env.NODE_ENV !== 'test') {
  server.listen(PORT, '0.0.0.0', () =>
    log.info(`server is running on PORT ${PORT}`)
  )
}

export default server
