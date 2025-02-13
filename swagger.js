const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "College API",
      version: "1.0.0",
      description: "API Documentation for College Management System",
    },
    servers: [
      {
        url: "http://localhost:8080", // Change this to your API base URL
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to your route files
};

// Generate Swagger docs
const swaggerSpec = swaggerJSDoc(swaggerOptions);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger UI available at: http://localhost:8080/api-docs");
};

module.exports = swaggerDocs;
