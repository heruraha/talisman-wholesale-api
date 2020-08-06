'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    find(params, populate) {
        //example to modify the find service
        console.log('find on products called')
        return strapi.query('products').find(params, populate)
    }
};
