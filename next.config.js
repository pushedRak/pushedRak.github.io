/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      // 개발 환경에서 디버깅을 위한 설정
      displayName: true,
      // 클래스명을 더 짧게 만들어 성능 최적화
      ssr: true,
      // 더 나은 디버깅을 위한 주석 추가
      meaninglessFileNames: ["index", "styles"],
      // 중첩된 템플릿 리터럴 최적화
      minify: true,
      // 불필요한 공백 제거
      transpileTemplateLiterals: true,
      // 순수 주석 제거
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