"use strict"

const ApiGateway = require("moleculer-web")

module.exports = {
    name: "api",
    mixins: [ ApiGateway ],
    settings: {
        port: 3000,
        ip: "0.0.0.0",
        routes: [
            {
                path: "api",
                aliases: {
                    "GET food: ": "food.get"
                },
                //whitelist: ["**"],
                logging: true
            }
        ]
    }
}