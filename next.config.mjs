/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-eu-west-1.amazonaws.com',
          port: '',
          pathname: '/*',
        },
        {
         protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '/**' 
        },
          
      ],
    },
};

export default nextConfig;
