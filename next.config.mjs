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
        {
         protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/**' 
        },
        {
         protocol: 'https',
          hostname: 'platform-lookaside.fbsbx.com',
          port: '',
          pathname: '/**' 
        },
        {
         protocol: 'https',
          hostname: 'postgree-strapi-one.onrender.com',
          port: '',
          pathname: '/**' 
        },
        {
         protocol: 'http',
          hostname: 'localhost',
          port: '3000',
          pathname: '/**' 
        },
          
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '/uploads/**',
        },
          
      ],
    },
};

export default nextConfig;
