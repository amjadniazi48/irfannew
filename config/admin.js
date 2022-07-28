module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '2jPXsBGHWJBO1JgepWUPWA=='),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'QVFxy/NZMYMMdnlYZnwFZA=='),
  },
});