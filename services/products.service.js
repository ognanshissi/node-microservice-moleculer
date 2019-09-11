"use strict";

const DbService = require('moleculer-db');

module.exports = {
	name: "products",
	mixins: [DbService],

	actions: {

		get: {
			params: {
				id: "string"
			},
			handler(ctx) {
				return `${ctx.params.id}`;
			}
		}
	}
};
