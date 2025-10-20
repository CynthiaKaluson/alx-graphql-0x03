const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  org: "alx-reactguard",
  project: "rick-and-morty-app",
});
