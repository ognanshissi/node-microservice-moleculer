"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../services/greeter.service");

describe("Test 'Products' Service",  () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	console.log("between");
	afterAll(() => broker.stop());

	// describe("Test 'products.get' action" ,() =>  {
	// 	it("should return an 'object' ", () => {
	// 		expect(broker.call("products.get")).resolves.toHaveLength(0);
	// 	});
	// });
});
