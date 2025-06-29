/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:5000/:path*', // your backend API URL
            },
        ];
    },
};

export default nextConfig;
