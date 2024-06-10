// todo add bundle analyzer https://nextjs.org/docs/pages/building-your-application/optimizing/bundle-analyzer

/** @type {import('next').NextConfig} */
const nextConfig = {
  // todo figure out how to configure this
  // source: '/:all*(jpg|jpeg|png|svg|gif|ico|js|css|woff|woff2|ttf|otf)',
  // headers: [
  //   {
  //     key: 'Cache-Control',
  //     value: 'public, max-age=31536000, immutable', // 1 year
  //   },
  // ],
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
      {
        protocol: 'https',
        hostname: 'assets.unegma.net',
        port: '',
        pathname: '/**',
        // pathname:  process.env.NODE_ENV === 'production' ? `${process.env.BASE_URL}/**` : `${process.env.DEV_BASE_URL}/**`
      },
      {
        protocol: 'https',
        hostname: 'assets.unegma.net',
        port: '',
        pathname: '/unegma.place/unegma.place/**',
        // pathname:  process.env.NODE_ENV === 'production' ? `${process.env.BASE_URL}/**` : `${process.env.DEV_BASE_URL}/**`
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add MD file handling
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
