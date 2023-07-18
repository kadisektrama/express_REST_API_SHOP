import swaggerJSdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API docs',
            version: "1.0.0"
        },
        components: {
            securitySchemes: {
                jwt: {
                    type: "http",
                    scheme: "bearer",
                    in: "header",
                    bearerFormat: "JWT"
                },
            }
        },
        security: [{
            jwt: []
        }],
    },

    apis: [`./source/**/*.mjs`, './source/server.js']
}
export const swaggerSpec = swaggerJSdoc(options)