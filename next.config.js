/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_BASE_PATH: "http://localhost:4000/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
