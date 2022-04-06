const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['dex7j3chxm11u.cloudfront.net'],
  },
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
};
