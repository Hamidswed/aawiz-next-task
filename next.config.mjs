/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent duplicate script injection
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Prevent duplicate module loading
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
      };
    }
    return config;
  },
  // Disable source maps in development if causing issues
  // productionBrowserSourceMaps: false,
};

export default nextConfig;
