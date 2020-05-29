import Router from 'koa-router'
import CuoponsController from '../controllers/coupons.controller'

const cuoponsRouter = new Router({ prefix: '/cuopons' })
const controller = new CuoponsController()

cuoponsRouter.post('/', controller.execTask)

export default cuoponsRouter
