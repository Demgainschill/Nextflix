/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
            },
            {
                protocol: 'http',
                hostname: '192.168.1.10',
                port: '3000',
            }
        ],
    },
}

module.exports = nextConfig
