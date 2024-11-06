'use strict';

/**
 * `addOwner` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
		console.log('-------------------ççççççççççççççççççççççççççççççç')
		console.log(ctx.request.body)
		console.log(ctx.state)
    ctx.request.body.data.user = ctx.state.user.documentId;
    await next();
  };
};
