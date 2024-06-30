/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**"
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      }
    ]
  
  },
  
};

export default nextConfig;
