import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static HTML 내보내기 설정
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 기능을 사용할 수 없음
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rak-blog' : '', // 저장소 이름을 basePath로 설정
};

export default nextConfig;
