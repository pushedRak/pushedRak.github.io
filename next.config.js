/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      meaninglessFileNames: ["index", "styles"],
      minify: true,
      transpileTemplateLiterals: true,
      pure: true,
    },
  },
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rak-blog' : '',
};

export default nextConfig;