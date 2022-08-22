/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


// const withImages = require('next-images')
// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   inlineImageLimit: false,
//   webpack(config, options) {
//     return config
//   }
// })