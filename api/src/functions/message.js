const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            body: 'Hello from managed function'
        };
    }
});
