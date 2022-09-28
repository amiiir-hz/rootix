/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  swcMinify: true,
  images: {
    domains: ["s2.coinmarketcap.com"],
  },
};

module.exports = nextConfig;

// const withImages = require('next-images')
// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   inlineImageLimit: false,
//   webpack(config, options) {
//     return config
//   }
// })
