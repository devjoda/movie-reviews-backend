module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '96e988664795b98ef5266a756257ff6c'),
  },
});
