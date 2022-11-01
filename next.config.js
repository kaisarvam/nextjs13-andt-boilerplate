// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

const { i18n } = require("./next-i18next.config");
const withLess = require("next-with-less");


module.exports = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {},
  i18n,

});
