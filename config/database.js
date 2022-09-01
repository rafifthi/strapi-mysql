module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DEV_DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DEV_DATABASE_NAME', 'strapi'),
      user: env('DEV_DATABASE_USERNAME', 'root'),
      password: env('DEV_DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false)
    },
    debug: false,
  },
});