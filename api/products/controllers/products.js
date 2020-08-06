'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        //example: modify returned object
        const products = await strapi.services.products.find(ctx.query)
        //console.log(products)
        const obj = products.map(p => {
            return {
                ...p,
                images: []
            }
        })
        return products
    }
};
