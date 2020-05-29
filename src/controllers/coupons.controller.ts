import { Context } from 'koa'

class CuoponsController {
  async execTask(ctx: Context): Promise<void> {
    ctx.body = ctx.request.body
  }
}

export default CuoponsController
