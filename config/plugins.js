module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
              },

        },
    },
    email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'amjad@sonnetsolution.com',
            defaultReplyTo: 'amjd@sonnetsolution.com',
            testAddress: 'amjad@sonnetsolution.com',
          },
        },
      },

      graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: false,
          depthLimit: 100,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
            introspection:true,
          },
        },
      },
});