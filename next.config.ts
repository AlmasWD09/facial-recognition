// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Development configuration
      ...(process.env.NODE_ENV === 'development'
        ? [
            // Allow localhost/loopback
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'http',
              hostname: '127.0.0.1',
              port: '',
              pathname: '/**',
            },
            // Allow specific internal IP for development
            {
              protocol: 'http',
              hostname: '10.10.10.62',
              port: '8000',
              pathname: '/**',
            },
          ]
        : []),
      
      // Production configuration
      ...(process.env.NODE_ENV === 'production'
        ? [
            // Your production domains here
            // Example:
            // {
            //   protocol: 'https',
            //   hostname: 'yourdomain.com',
            //   port: '',
            //   pathname: '/**',
            // },
          ]
        : []),
    ],
    
    // Disable image optimization in development to avoid issues with internal IPs
    ...(process.env.NODE_ENV === 'development' && {
      unoptimized: true,
    }),
  },
  
  // Allow React strict mode
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
};

export default nextConfig;