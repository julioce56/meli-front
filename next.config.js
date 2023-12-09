/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    env: {
        API_BASE_PATH: "http://localhost:4000/api"
    }
}

module.exports = nextConfig
