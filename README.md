# KT Cloud TECH UP - Coming Soon

[KT Cloud TECH UP](https://ktcloud-techup.com/comingsoon) 사이트와 동일한 디자인의 Coming Soon 페이지입니다.

## 🚀 프로젝트 소개

KT Cloud가 만든 **실전형 테크업 교육**이 곧 찾아옵니다. 이 프로젝트는 차세대 인재 양성을 위한 기술 교육 전문 브랜드의 Coming Soon 페이지를 TypeScript + React + Tailwind CSS로 구현한 것입니다.

## ✨ 주요 기능

- 🎯 **Coming Soon 디자인**: 원본 사이트와 동일한 레이아웃과 스타일
- ⏰ **실시간 카운트다운**: 2025년 8월 28일까지의 남은 시간 표시
- 📱 **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- 🎨 **현대적인 UI**: 그라디언트, 글래스모피즘, 애니메이션 효과
- 🔧 **인터랙티브 요소**: 오픈 알림 신청, 문의하기 등 기능 버튼

## 🛠️ 기술 스택

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 📅 모집 일정

- **모집 기간**: 25.8.28 (목) - 25.9.11 (목)
- **카운트다운**: 2025년 8월 28일까지 남은 시간을 실시간으로 표시

## 🎨 디자인 특징

- **색상 테마**: 파란색 계열의 그라디언트 (blue-900 → blue-800 → indigo-900)
- **글래스모피즘**: 반투명 배경과 블러 효과
- **타이포그래피**: 그라디언트 텍스트 효과
- **애니메이션**: 부드러운 전환과 호버 효과

## 🛠️ 설치 및 실행

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 9.0.0 이상

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

### 미리보기

```bash
# 빌드된 결과물 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 헤더 컴포넌트 (KT Cloud TECH UP 로고)
│   ├── ComingSoon.tsx  # 메인 Coming Soon 섹션
│   └── Footer.tsx      # 푸터 컴포넌트
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 전역 스타일 및 Tailwind CSS
```

## 🎯 주요 컴포넌트

### ComingSoon.tsx

- 실시간 카운트다운 타이머
- 모집 일정 정보
- 액션 버튼 (오픈 알림 신청, 모집 과정 전체보기)
- KT Cloud TECH UP 소개

### Header.tsx

- KT Cloud TECH UP 로고
- 반응형 네비게이션 메뉴
- 글래스모피즘 효과

### Footer.tsx

- 회사 정보 및 연락처
- 빠른 링크
- 저작권 정보

## 🔧 커스터마이징

### 카운트다운 날짜 변경

`src/components/ComingSoon.tsx`에서 `targetDate` 변수를 수정하여 원하는 날짜로 설정할 수 있습니다.

```typescript
const targetDate = new Date("2025-08-28T00:00:00");
```

### 색상 테마 변경

`tailwind.config.js`에서 커스텀 색상을 추가하거나 수정할 수 있습니다.

## 📱 반응형 디자인

- **Mobile First**: 모바일 우선 접근법
- **Breakpoints**: sm, md, lg, xl 기준
- **Flexbox & Grid**: 현대적인 CSS 레이아웃 시스템

## 🚀 배포

빌드된 결과물은 `dist/` 디렉토리에 생성되며, 정적 웹 호스팅 서비스에 배포할 수 있습니다.

```bash
npm run build
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- **이메일**: info@ktcloud.com
- **전화**: +82-2-1234-5678
- **주소**: 서울특별시 강남구

## 🔗 원본 사이트

- **KT Cloud TECH UP**: [https://ktcloud-techup.com/comingsoon](https://ktcloud-techup.com/comingsoon)

---

**KT Cloud TECH UP** - 차세대 인재 양성을 위한 기술 교육 전문 브랜드 ☁️✨
