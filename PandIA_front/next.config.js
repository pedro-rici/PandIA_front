/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [{
            source: '/',
            destination: '/DigitalTwin',
            permanent: true
        }]
    }
}

module.exports = nextConfig
