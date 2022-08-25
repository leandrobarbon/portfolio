/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "br",
  },
};

module.exports = nextConfig
