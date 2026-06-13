const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Lexora Legal API",
      version: "1.0.0",
      description:
        "API documentation for Lexora Legal backend",
    },

    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },

  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;