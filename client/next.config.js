module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        MB_CONNECT: process.env.MB_CONNECT,
        API_BASE_URL: process.env.API_BASE_URL,
        SECRET_KEY: process.env.SECRET_KEY,
        NOVA_POSHTA_API_KEY: process.env.NOVA_POSHTA_API_KEY,
    },
}
