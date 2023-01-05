/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    PGUSER : "testuser",
    PGHOST : "localhost",
    PGDATABASE : "BloggingWebsite",
    PGPASSWORD : "1234",
    PGPORT : 5432,
  }
}

module.exports = nextConfig
