<<<<<<< HEAD
<h1>기업형 웹 페이지 : Web Frontend Technologies</h1>

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
=======
# NextByte - IT Solutions Company Website

![NextByte Logo](https://img.shields.io/badge/NextByte-IT_Solutions-3b82f6?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

NextByte는 첨단 기술을 바탕으로 고객의 비즈니스 성장과 혁신을 지원하는 IT 개발 전문 기업의 공식 웹사이트입니다.

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [폴더 구조](#-폴더-구조)
- [페이지 구성](#-페이지-구성)
- [설치 및 실행](#-설치-및-실행)
- [브라우저 지원](#-브라우저-지원)
- [라이선스](#-라이선스)

## 🚀 프로젝트 소개

NextByte 웹사이트는 기업의 디지털 존재감을 강화하고, 고객에게 전문적인 IT 솔루션과 제품을 소개하기 위해 제작된 프론트엔드 웹 애플리케이션입니다.

### 핵심 가치

- **혁신(Innovation)** - 끊임없는 도전과 창의적 사고
- **신뢰(Trust)** - 고객과의 약속 준수
- **협력(Collaboration)** - 함께 성장하는 파트너십
- **전문성(Excellence)** - 최고 수준의 기술력

## ✨ 주요 기능

### 🎨 디자인 & UX
- 현대적이고 세련된 UI/UX 디자인
- 완전한 반응형 레이아웃 (Desktop, Tablet, Mobile)
- 부드러운 애니메이션 및 트랜지션 효과
- 그라디언트 및 글래스모피즘 효과

### 🗺️ 인터랙티브 기능
- Leaflet 기반 인터랙티브 지도 (Contact 페이지)
- 커스텀 마커 및 팝업
- 부드러운 스크롤 애니메이션
- 호버 효과 및 리플 이펙트

### 📱 반응형 디자인
- 모바일 최적화 메뉴 (햄버거 메뉴)
- 유연한 그리드 레이아웃
- 디바이스별 최적화된 이미지 크기
- 터치 친화적 UI 요소

## 🛠 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 그리드, 플렉스박스, 애니메이션
- **JavaScript (ES6+)** - 인터랙티브 기능

### Libraries & Frameworks
- **[Leaflet.js](https://leafletjs.com/)** `v1.9.4` - 지도 렌더링
- **[Font Awesome](https://fontawesome.com/)** - 아이콘
- **[Google Fonts](https://fonts.google.com/)** - Orbitron, Poppins

### Design System
- **색상 팔레트**
  - Primary: `#3b82f6` (Blue)
  - Secondary: `#2563eb` (Dark Blue)
  - Dark: `#1e293b` (Slate)
  - Light Gray: `#f8fafc`
  - Text Gray: `#64748b`

## 📁 폴더 구조
```
company-web-master/
│
├── css/
│   └── style.css              # 메인 스타일시트
│
├── img/                       # 이미지 리소스
│   ├── ai.jpg                 # AI 관련 이미지
│   ├── cloud*.jpg             # 클라우드 서비스 이미지
│   ├── news*.jpg              # 뉴스/블로그 이미지
│   ├── kth.jpg, ljh.jpg, pje.jpg  # 팀 멤버 사진
│   └── visual.mp4             # 히어로 섹션 배경 영상
│
├── js/
│   └── ie.js                  # Internet Explorer 지원
│
├── index.html                 # 메인 홈페이지
├── solutions.html             # 솔루션 소개 페이지
├── products.html              # 제품 소개 페이지
├── resources.html             # 리소스/블로그 페이지
├── company.html               # 회사 소개 페이지
├── contact.html               # 연락처 페이지
├── favicon.ico                # 파비콘
└── README.md                  # 프로젝트 문서
```

## 📄 페이지 구성

### 1. 🏠 Home (index.html)
- **Hero Section**: 비디오 배경과 대형 타이포그래피
- **Latest Technology Insights**: 최신 기술 뉴스 4개 그리드

### 2. 💼 Solutions (solutions.html)
- **솔루션 소개**: 4가지 핵심 솔루션 상세 설명
  - 클라우드 마이그레이션
  - 데이터 분석 & AI/ML
  - 엔터프라이즈 시스템 통합
  - 사이버 보안 솔루션
- **CTA Section**: 무료 상담 신청

### 3. 🎯 Products (products.html)
- **제품 그리드**: 6개 제품 카드 레이아웃
  - NextCloud Pro
  - DataVision AI
  - SecureShield Enterprise
  - DevOps Hub
  - SmartBot Studio
  - MobileFirst SDK
- **제품 비교**: 다운로드 가능한 비교표

### 4. 📚 Resources (resources.html)
- **카테고리 필터**: 블로그, 백서, 사례연구, 웨비나, E-book
- **Featured Content**: 주요 콘텐츠 하이라이트
- **리소스 그리드**: 9개 리소스 카드
- **Newsletter**: 이메일 구독 폼

### 5. 🏢 Company (company.html)
- **회사 소개**: 기업 비전 및 미션
- **통계**: 500+ 전문 인력, 1,000+ 고객사
- **연혁**: 2020-2025 타임라인
- **Leadership Team**: 4명의 경영진 소개
- **채용 정보**: Join Our Team 섹션

### 6. 📞 Contact (contact.html)
- **연락처 정보**: 본사, 전화, 이메일, 운영시간
- **문의 폼**: 7개 필드 + 개인정보 동의
- **인터랙티브 지도**: Leaflet 기반 위치 표시
- **Global Offices**: 4개 글로벌 오피스 정보

## 🚀 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone https://github.com/yourusername/nextbyte-website.git
cd nextbyte-website
```

### 2. 로컬 서버 실행

#### 방법 1: Live Server (VS Code Extension)
1. VS Code에서 프로젝트 열기
2. Live Server 확장 설치
3. `index.html` 우클릭 → "Open with Live Server"

#### 방법 2: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

브라우저에서 `http://localhost:8000` 접속

#### 방법 3: Node.js HTTP Server
```bash
npx http-server
```

### 3. 직접 파일 열기
`index.html` 파일을 브라우저에서 직접 열기 (일부 기능 제한 가능)

## 🌐 브라우저 지원

| Browser | Version |
|---------|---------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |
| Opera | 76+ ✅ |

## 📱 반응형 브레이크포인트
```css
/* Desktop */
@media (min-width: 1201px) { }

/* Tablet */
@media (max-width: 1200px) { }

/* Mobile */
@media (max-width: 768px) { }
```

## 🎨 커스터마이징

### 색상 변경
`css/style.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:
```css
:root {
    --primary-color: #3b82f6;      /* 메인 컬러 */
    --secondary-color: #2563eb;    /* 보조 컬러 */
    --dark-color: #1e293b;         /* 다크 컬러 */
    --light-gray: #f8fafc;         /* 배경 컬러 */
    --text-gray: #64748b;          /* 텍스트 컬러 */
}
```

### 폰트 변경
Google Fonts에서 원하는 폰트를 선택하고 HTML `<head>`에 추가:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

## 📧 연락처

- **이메일**: info@nextbyte.com
- **전화**: 032-111-1234
- **주소**: 인천광역시 부평구 부평동 65-7, NextByte Tower 10F

## 👥 팀

- **김태현** - CEO & Co-Founder
- **박지은** - CTO
- **이준호** - VP of Engineering
- **최민서** - CFO

## 📝 라이선스

Copyright © 2020 NextByte. All rights reserved.

---

**Made with ❤️ by NextByte Team**
>>>>>>> c965aa13c3b26d9d7b2a9fb49752dcb0bbf1fce6
