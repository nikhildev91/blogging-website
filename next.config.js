/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    PGUSER : "username",
    PGHOST : "localhost",
    PGDATABASE : "BloggingWebsite",
    PGPASSWORD : "pasword1234",
    PGPORT : 5432,
  }
}

module.exports = nextConfig
