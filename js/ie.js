// 브라우저 감지 및 경고
const ver = navigator.userAgent;
const isIE = /trident/i.test(ver);

if(isIE){
  alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.");
}

// 부드러운 스크롤 효과
document.addEventListener('DOMContentLoaded', function() {
  
  // 헤더 스크롤 효과
  const header = document.querySelector('header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.8)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    // 헤더 숨김/표시 효과
    if (currentScroll > lastScroll && currentScroll > 500) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
  
  // 부드러운 앵커 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // 스크롤 애니메이션
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // 뉴스 카드 애니메이션
  document.querySelectorAll('article').forEach((article, index) => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(30px)';
    article.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(article);
  });
  
  // 마우스 따라다니는 커서 효과 (figure 영역)
  const figure = document.querySelector('figure');
  if (figure) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    figure.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.opacity = '1';
    });
    
    figure.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
  }
  
  // 카드 호버 3D 효과
  document.querySelectorAll('article').forEach(article => {
    article.addEventListener('mousemove', (e) => {
      const rect = article.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      article.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    article.addEventListener('mouseleave', () => {
      article.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
  
  // 타이핑 효과 (INNOVATION 텍스트)
  const innovationText = document.querySelector('figure .inner h1');
  if (innovationText) {
    const text = innovationText.textContent;
    innovationText.textContent = '';
    innovationText.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        innovationText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
  
  // 네비게이션 활성화 표시
  const sections = document.querySelectorAll('section, figure');
  const navLinks = document.querySelectorAll('#gnb a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
  });
  
  // 페이지 로드 애니메이션
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  // 스크롤 진행 바
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
  
  // 모바일 메뉴 토글
  const createMobileMenu = () => {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    const headerInner = document.querySelector('header .inner');
    headerInner.appendChild(menuBtn);
    
    menuBtn.addEventListener('click', () => {
      const gnb = document.querySelector('#gnb');
      gnb.classList.toggle('active');
      menuBtn.classList.toggle('active');
      
      if (menuBtn.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  };
  
  if (window.innerWidth <= 768) {
    createMobileMenu();
  }
  
  // 반응형 체크
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
      createMobileMenu();
    }
  });
  
  // 버튼에 리플 효과
  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      this.appendChild(ripple);
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
});