module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        MB_CONNECT: process.env.MB_CONNECT,
        API_BASE_URL: process.env.API_BASE_URL,
    },
}
