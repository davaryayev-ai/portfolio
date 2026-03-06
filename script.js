// ===== CASES DATA =====
const casesData = [
    {
        id: 'ai-recruiter',
        icon: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        title: 'AI Рекрутер',
        shortDesc: 'Автоматизация найма: скрининг резюме, подбор кандидатов и проведение первичных интервью.',
        tag: 'HR & Найм',
        fullDesc: 'AI-агент для автоматизации полного цикла рекрутинга. Анализирует резюме, сопоставляет требования вакансии с навыками кандидатов, проводит первичные интервью через чат и формирует шорт-лист.',
        results: [{ value: '70%', label: 'Экономия времени HR' }, { value: '3x', label: 'Быстрее найм' }, { value: '95%', label: 'Точность подбора' }],
        videoUrl: 'https://youtu.be/m8WS2-LaI14'
    },
    {
        id: 'data-parser',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
        title: 'Парсер данных',
        shortDesc: 'Сбор, структурирование и анализ данных из любых источников в автоматическом режиме.',
        tag: 'Data & Аналитика',
        fullDesc: 'Мощный AI-парсер для автоматического сбора данных с веб-сайтов, документов, API и баз данных. Структурирует информацию и выгружает в удобном формате.',
        results: [{ value: '24/7', label: 'Работа без остановки' }, { value: '10K+', label: 'Записей в час' }, { value: '99%', label: 'Точность данных' }],
        videoUrl: 'https://youtu.be/AqyEvmwKDf8'
    },
    {
        id: 'chatbots',
        icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,
        title: 'Чат-боты любой сложности',
        shortDesc: 'Умные чат-боты для поддержки, продаж и консультаций — от простых FAQ до сложных сценариев.',
        tag: 'Коммуникации',
        fullDesc: 'Разработка чат-ботов любого уровня сложности. Боты работают в Telegram, WhatsApp, на сайте. Обучаются на вашей базе знаний.',
        results: [{ value: '80%', label: 'Авто-ответов' }, { value: '24/7', label: 'Доступность' }, { value: '50%', label: 'Сокращение нагрузки' }],
        videoUrl: 'https://youtu.be/iuYwUzwGFUY'
    },
    {
        id: 'ai-accountant',
        icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>`,
        title: 'AI Бухгалтер',
        shortDesc: 'Автоматизация бухгалтерского учёта: обработка документов, расчёты и отчётность.',
        tag: 'Финансы',
        fullDesc: 'AI-бухгалтер берёт на себя рутину: распознаёт первичные документы, ведёт учёт, формирует отчёты. Возможны удобные вам интеграции.',
        results: [{ value: '90%', label: 'Меньше рутины' }, { value: '0', label: 'Ошибок в расчётах' }, { value: '5x', label: 'Быстрее обработка' }],
        videoUrl: 'https://youtu.be/09U4epDX2vw'
    },
    {
        id: 'ai-secretary',
        icon: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
        title: 'AI Приёмщик',
        shortDesc: 'Голосовой ввод данных: автоматическая расшифровка и мгновенное внесение информации в базы или CRM.',
        tag: 'Продуктивность',
        fullDesc: 'Интеллектуальный бизнес-ассистент, который превращает хаос голосовых сообщений в структурированную базу данных. Агент избавляет сотрудников и руководителей от необходимости вручную заполнять таблицы, или CRM-системы, позволяя вносить отчеты, задачи или заметки простым голосовым сообщением в Telegram.',
        results: [{ value: '3ч', label: 'Экономии в день' }, { value: '100%', label: 'Дисциплина' }, { value: '0', label: 'Забытых встреч' }],
        videoUrl: 'https://youtu.be/vh1hsmI_onI'
    }
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initRotatingText();
    initScrollReveal();
    initCounters();
    initCases();
    initNavTracking();
});

// ===== PARTICLES =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mx = -1000, my = -1000;

    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    const COUNT = window.innerWidth < 768 ? Math.min(12, Math.floor(window.innerWidth / 40)) : Math.min(50, Math.floor(window.innerWidth / 28));

    class P {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.sz = Math.random() * 1.8 + 0.3;
            this.sx = (Math.random() - 0.5) * 0.3;
            this.sy = (Math.random() - 0.5) * 0.3;
            this.o = Math.random() * 0.3 + 0.05;
        }
        update() {
            this.x += this.sx;
            this.y += this.sy;
            const dx = mx - this.x, dy = my - this.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) { const f = (130 - d) / 130; this.x -= dx * f * 0.01; this.y -= dy * f * 0.01; }
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(59,130,246,${this.o})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < COUNT; i++) particles.push(new P());

    function connect() {
        for (let i = 0; i < particles.length; i++)
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 130) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(59,130,246,${(1 - d / 130) * 0.08})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
    }

    (function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connect();
        requestAnimationFrame(animate);
    })();
}

// ===== ROTATING TEXT =====
function initRotatingText() {
    const wrapper = document.querySelector('.hero-rotating-wrapper');
    if (!wrapper) return;

    const texts = ['Сокращаю рутину', 'Поднимаю доход', 'Экономлю ваше время', 'Ускоряю процессы'];

    texts.forEach((t, i) => {
        const span = document.createElement('span');
        span.className = 'hero-rotating-text' + (i === 0 ? ' active' : ' enter-below');
        span.textContent = t;
        wrapper.appendChild(span);
    });

    let cur = 0;
    setInterval(() => {
        const all = wrapper.querySelectorAll('.hero-rotating-text');
        const next = (cur + 1) % texts.length;
        all[cur].className = 'hero-rotating-text exit-up';
        all[next].className = 'hero-rotating-text active';
        setTimeout(() => { all[cur].className = 'hero-rotating-text enter-below'; cur = next; }, 500);
    }, 2800);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ===== COUNTERS =====
function initCounters() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting && !e.target.dataset.counted) {
                e.target.dataset.counted = 'true';
                const tgt = parseInt(e.target.dataset.count);
                const sfx = e.target.dataset.suffix || '';
                const dur = 2000, st = performance.now();
                (function up(now) {
                    const p = Math.min((now - st) / dur, 1);
                    e.target.textContent = Math.floor(tgt * (1 - Math.pow(1 - p, 3))) + sfx;
                    if (p < 1) requestAnimationFrame(up);
                    else e.target.textContent = tgt + sfx;
                })(st);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

// ===== CASES & MODAL =====
function initCases() {
    const grid = document.getElementById('cases-grid');
    const overlay = document.getElementById('modal-overlay');
    if (!grid || !overlay) return;

    casesData.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = `case-card reveal reveal-delay-${(i % 3) + 1}`;
        card.innerHTML = `
      <div class="case-icon">${c.icon}</div>
      <div class="case-arrow"><svg viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></div>
      <h3 class="case-title">${c.title}</h3>
      <p class="case-desc">${c.shortDesc}</p>
      <span class="case-tag">${c.tag}</span>`;
        card.addEventListener('click', () => openModal(c));
        grid.appendChild(card);
    });

    initScrollReveal();
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function getVideoId(url) {
    if (!url) return '';
    let m = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    m = url.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (m) return m[1];
    return '';
}

function openModal(c) {
    const overlay = document.getElementById('modal-overlay');
    const modal = overlay.querySelector('.modal');
    const videoId = getVideoId(c.videoUrl);
    let vid;
    if (videoId) {
        const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        vid = `<div class="modal-video video-lite" data-video-id="${videoId}" style="background-image:url(${thumb})">
            <button class="video-play-btn" aria-label="Play video">
                <svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#FF0000"/><path d="M45 24L27 14v20" fill="#fff"/></svg>
            </button>
        </div>`;
    } else {
        vid = `<div class="modal-video"><div class="modal-video-placeholder"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>Видео скоро будет добавлено</span></div></div>`;
    }
    const res = c.results?.length ? `<h4>Результаты</h4><div class="modal-results">${c.results.map(r => `<div class="modal-result-card"><div class="modal-result-value">${r.value}</div><div class="modal-result-label">${r.label}</div></div>`).join('')}</div>` : '';

    modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()"><svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="modal-header">
      <div class="modal-icon">${c.icon}</div>
      <div><h2 class="modal-title">${c.title}</h2><span class="modal-tag">${c.tag}</span></div>
    </div>
    ${vid}
    <div class="modal-body"><h4>Описание</h4><p>${c.fullDesc}</p>${res}</div>`;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Lite embed: load iframe on play click
    const lite = modal.querySelector('.video-lite');
    if (lite) {
        lite.addEventListener('click', function () {
            const id = this.dataset.videoId;
            this.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&vq=hd1080&hd=1" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
            this.classList.add('video-active');
        });
    }
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== NAV TRACKING =====
function initNavTracking() {
    const links = document.querySelectorAll('.floating-nav a');
    const sections = document.querySelectorAll('section[id]');

    document.querySelectorAll('.floating-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.getElementById(link.getAttribute('href').substring(1));
            if (t) t.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.id;
                links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
            }
        });
    }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });

    sections.forEach(s => obs.observe(s));
}

window.closeModal = closeModal;
