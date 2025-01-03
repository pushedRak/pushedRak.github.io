import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family: 'Pretendard';
   src: url('/fonts/Pretendard-Thin.woff2') format('woff2');
   font-weight: 100;
   font-style: normal;
 }

 @font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url('/fonts/Pretendard-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
}

 body, button {
   margin: 0;
   padding: 0;
   font-size: 1rem;
   font-family: 'Pretendard', system-ui, -apple-system, sans-serif;
   font-weight: 400;
 }

 button {
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
 }

 a {
  color: inherit;
  text-decoration: none;
 }

 p {
   margin-block-start: 0.25rem;
   margin-block-end: 0.25rem;
 }

 h1, h2, h3, h4 {
   margin-block-start: 0.25rem;
   margin-block-end: 0.25rem;
 }
`;