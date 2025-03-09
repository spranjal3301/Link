/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname:"assets.aceternity.com"
          },
          {
            protocol: 'https',
            hostname:"images.unsplash.com"
          },
          {
            protocol: 'https',
            hostname:"scontent-iad3-2.cdninstagram.com"
          },
          {
            protocol: 'https',
            hostname:"startup-template-sage.vercel.app"
          },
          {
            protocol: 'https',
            hostname:"**"
          },
        ],
      },
};

export default nextConfig;
