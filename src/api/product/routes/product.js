'use strict';

/**
 * product router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::product.product", {
  config: {
		create: {
			middlewares: ["global::addOwner"]
		},
		find: {
			middlewares: ["global::filterOwner"]
		},
    update: {
      middlewares: ["api::product.is-owner"],
    },
    delete: {
      middlewares: ["api::product.is-owner"],
    },
  },
});
