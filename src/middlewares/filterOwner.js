'use strict';

/**
 * `filterOwner` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const user = ctx.state.user;

		
		ctx.query.filters = {
			...ctx.query.filters,
			user: user.documentId      
    };
		
		console.log(ctx.query.filters, '>>>>>>>>>>>>>>>>>>>>>>>')
    await next();
  };
};
