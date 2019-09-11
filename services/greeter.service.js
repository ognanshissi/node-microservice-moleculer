"use strict";

module.exports = {
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return {
				data: [
					{
						name: "jason",
						age: 34
					}
				],
				message: "list des utilisateurs"
			};
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 *
		 * @param {number} age - User age
		 */
		welcome: {
			params: {
				name: "string",
				age: "number"
			},

			handler(ctx) {
				let message = `${ctx.params.name} has ${ctx.params.age}`;
				return `Welcome, ${message}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};
