import type { Project } from '@/types'

const projects: Project[] = [
  {
    title: 'Mini Cafe',
    period: '2024.08 (개인 학습 프로젝트)',
    subTitle: 'Vue.js와 express서버를 활용해 로그인 및 회원가입,관리자 페이지 구현',
    explain: [
      '컴포넌트 기반 SPA 개발 프레임워크 학습',
      'UI라이브러리(Vuetify) 사용 방법 학습',
      'AXIOS를 사용한 통신 방법 학습',
      'Express서버 기초 사용 방법 학습',
    ],
    link: 'https://github.com/nihilism011/minicafe',
    stacks: 'node Express, Vue.js, Vuetify Css, MySQL',
  },
  {
    title: 'Hanju',
    period: '2024.09 ~ 2024.10 (Team 프로젝트)',
    subTitle: 'Spring,Mybatis를 활용한 주류 판매 쇼핑몰 구현.',
    explain: [
      'Spring boot를 활용해 Backend 서버 구현',
      '장바구니 관련 기능 및 페이지 구현',
      '결제 페이지 카카오 결제 API 구현',
      'log4j 활용 로그 레벨 조절 및 불필요 로그 제거',
      'axios 전역 예외처리 및 backend의 dao 전역 예외처리 구현',
      'jsp 학습 ,but 이 프로젝트에 유의미하게 사용되지 않음.',
    ],
    link: 'https://github.com/nihilism011/Hanju_Project',
    stacks: 'Spring boot, Mybatis, JSP, Vue.js, Oracle DB',
  },
  {
    title: 'React_SNS',
    period: '2024.10 (React 연습 프로젝트)',
    subTitle: 'React를 활용한 SNS 구현.',
    explain: [
      'react를 사용하여 인스타그램 카피 구현',
      'dotEnv 환경변수 활용',
      'JWT 연습 및 간단 구현',
      'multer라이브러리 활용, 이미지 업로드 구현',
      'express 서버에 mybatis 구현, but 예상만큼 편한 기능X',
      'express 서버 구조화 시도, but Spring 만큼 제대로 구현 못함.',
    ],
    link: 'https://github.com/nihilism011/react_sns',
    link2: 'https://github.com/nihilism011/react_sns_server',
    stacks: 'React.js, recoil, multer, node Express, JWT',
  },
  {
    title: 'DailySync',
    period: '2024.12 (Spring Team 프로젝트)',
    subTitle: 'Spring,Vue.js 를 활용해 가계부,식단,일정,todo 구현',
    explain: [
      'Spring 의 전반적인 구조, 및 Spring security 인증,인가(JWT) 구현',
      'REST API 활용, SWAGGER 활용',
      'Oracle Cloud에 Ubuntu 설치 및 DB 설치,사용',
      'Frontend 의 가계부 구현',
      '서버 통신 최소화를 위한 Pinia 상태관리 최대 활용',
      'Vue compositionApi 학습 및 활용',
      'TypeScript 학습 및 활용',
    ],
    link: 'https://github.com/nihilism011/DailySyncBackUp',
    stacks: 'Spring boot, JPA, Vue.js, Pinia, JWT, MySQL, Ubuntu, NGINX',
  },
  {
    title: 'Portfolio',
    period: '2024.12 ~ 2024.01 (현재 페이지 제작)',
    subTitle: 'Vue.js 를 활용해 포트폴리오 제작',
    explain: [
      '가장 많이 사용해본 Frontend Framework 인 Vue.js를 활용해 제작',
      'Oracle Cloud에 Ubuntu 설치, NGINX 사용 배포',
      'Cloudflare에서 도메인 구매, 연결',
    ],
    link: 'https://github.com/nihilism011/portfolio',
    link2: 'https://hastore.dev/portfolio/',
    stacks: 'Vue.js, Tailwind CSS, TypeScript, Ubuntu, NGINX',
  },
]
export default projects
