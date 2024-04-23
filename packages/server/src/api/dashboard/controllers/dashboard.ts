/**
 * A set of functions called "actions" for `dashboard`
 */

export default {
  exampleAction: async (ctx, _next) => {
    try {
      ctx.body = "ok"
    }
    catch (err) {
      ctx.body = err
    }
  },
}
