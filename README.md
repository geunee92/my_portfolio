# JHG Portfolio

프론트엔드 개발자 조형근의 개인 포트폴리오 웹사이트입니다.

## Tech Stack

| 분류 | 기술 |
|------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Emotion (Styled Components) |
| State Management | @tanstack/react-query v5 |
| Animation | Framer Motion |
| Database | Firebase (Firestore) |
| UI | Swiper, React Icons |
| Testing | Jest, React Testing Library |
| Code Quality | ESLint, Prettier |

## Pages

- `/` - Home: 소개 페이지 (타이핑 애니메이션)
- `/about` - About: 자기소개, 경력, 기술스택
- `/project` - Project: 프로젝트 목록 (Swiper 슬라이더 + 모달)
- `/comment` - Comment: 방명록 (Firebase 기반 무한스크롤)

## Getting Started

```bash
# 의존성 설치
yarn

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 테스트 실행
yarn test
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## Environment Variables

Firebase 연동을 위해 `.env` 파일에 아래 환경변수가 필요합니다.

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

## Project Structure

```
src/
├── app/
│   ├── (main)/          # 메인 레이아웃 그룹 (좌측 이미지 + 우측 콘텐츠)
│   │   ├── about/
│   │   ├── comment/
│   │   └── project/
│   └── layout.tsx       # 루트 레이아웃
├── components/
│   ├── AboutSection/    # About 페이지 컴포넌트
│   ├── ClientLayout/    # Header, Footer, 테마, QueryClient
│   ├── CommentSection/  # 댓글 기능
│   ├── HomeSection/     # 홈 페이지 컴포넌트
│   └── ProjectSection/  # 프로젝트 슬라이더 + 모달
├── hooks/               # useComment, useObserver
├── remote/              # Firebase 연동
├── styles/              # 글로벌 스타일 (CSS 변수, 다크모드)
└── types/               # TypeScript 타입 정의
```

## Features

- 다크/라이트 모드 전환 (시스템 설정 자동 감지)
- 반응형 디자인 (데스크탑/모바일)
- Firebase Firestore 기반 댓글 기능 (무한스크롤)
- Framer Motion 애니메이션
- Swiper 기반 프로젝트 슬라이더

## Deploy

Vercel을 통해 배포됩니다.
