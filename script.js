// ===== TRANSLATIONS =====
const i18n = {
    ru: {
        nav: { home: 'Главная', about: 'Обо мне', cases: 'Кейсы', services: 'Услуги', process: 'Процесс', contact: 'Контакты' },
        hero: {
            badge: 'Открыт для новых проектов',
            h1: 'Автоматизирую бизнес<br>с помощью ИИ',
            description: 'Делаю так, чтобы ваш бизнес работал, пока вы отдыхаете. Чат-боты, AI-агенты, парсеры — решения, которые реально экономят время и приносят деньги.',
            btnPrimary: 'Обсудить проект',
            btnSecondary: 'Смотреть кейсы',
            photoTag: 'Астана, Казахстан'
        },
        rotating: ['Сокращаю рутину', 'Поднимаю доход', 'Экономлю ваше время', 'Ускоряю процессы'],
        about: {
            label: '● Обо мне',
            title: 'Давид Аряев — <span class="gradient-text">Архитектор AI-решений</span>',
            subtitle: 'AI-интегратор и разработчик',
            p1: 'Привет! Я Давид, специалист по интеграции искусственного интеллекта в бизнес. Помогаю компаниям внедрять AI-решения, которые реально работают: чат-боты для поддержки и продаж, AI-агенты для автоматизации рутины, парсеры данных.',
            p2: 'Мой подход — не просто «поставить бота», а разобраться в вашем бизнесе и создать решение, которое сэкономит время и увеличит прибыль.',
            stat1Label: 'Готовых решений',
            stat2Label: 'Интеграций в стеке',
            stat3Label: 'Автоматизация'
        },
        cases: {
            label: '● Портфолио',
            title: 'Мои <span class="gradient-text">кейсы</span>',
            subtitle: 'Каждый проект — рабочее AI-решение. Нажмите на карточку, чтобы узнать подробности.'
        },
        services: {
            label: '● Услуги',
            title: 'Чем я могу <span class="gradient-text">помочь</span>',
            subtitle: 'Полный спектр AI-решений для вашего бизнеса.',
            items: [
                { title: 'Чат-боты', desc: 'Умные боты для Telegram, WhatsApp и сайта. От FAQ до сложных AI-сценариев.' },
                { title: 'AI-агенты', desc: 'Автономные агенты, которые выполняют задачи без участия человека — 24/7.' },
                { title: 'Интеграция AI', desc: 'Внедрение ИИ в CRM, 1С, и другие системы.' },
                { title: 'Консультации', desc: 'Аудит процессов и стратегия внедрения AI в ваш бизнес.' }
            ]
        },
        process: {
            label: '● Процесс',
            title: 'Как я <span class="gradient-text">работаю</span>',
            subtitle: 'Прозрачный процесс от идеи до результата.',
            steps: [
                { title: 'Анализ', desc: 'Изучаю ваш бизнес и нахожу, где AI даст максимум.' },
                { title: 'Прототип', desc: 'Рабочий прототип за 3–5 дней.' },
                { title: 'Разработка', desc: 'Полноценное решение с интеграциями.' },
                { title: 'Тестирование', desc: 'Все сценарии, нагрузки и крайние случаи.' },
                { title: 'Запуск', desc: 'Деплой, обучение команды и поддержка.' }
            ]
        },
        contact: {
            label: '● Контакты',
            title: 'Готовы <span class="gradient-text">автоматизировать</span><br>ваш бизнес?',
            subtitle: 'Напишите мне — первая консультация бесплатно.',
            btnTg: 'Написать в Telegram',
            btnWa: 'WhatsApp'
        },
        footer: '© 2026 Давид. AI-интеграции для бизнеса. Астана, Казахстан.',
        modal: { desc: 'Описание', results: 'Результаты', videoSoon: 'Видео скоро будет добавлено' }
    },
    en: {
        nav: { home: 'Home', about: 'About', cases: 'Cases', services: 'Services', process: 'Process', contact: 'Contact' },
        hero: {
            badge: 'Open for new projects',
            h1: 'Automating business<br>with AI',
            description: 'I make your business work while you rest. Chatbots, AI agents, data parsers — solutions that truly save time and drive revenue.',
            btnPrimary: 'Discuss project',
            btnSecondary: 'View cases',
            photoTag: 'Astana, Kazakhstan'
        },
        rotating: ['Reducing routine', 'Boosting revenue', 'Saving your time', 'Accelerating processes'],
        about: {
            label: '● About me',
            title: 'David Aryayev — <span class="gradient-text">AI Solutions Architect</span>',
            subtitle: 'AI integrator & developer',
            p1: 'Hi! I\'m David, a specialist in integrating artificial intelligence into business. I help companies implement AI solutions that actually work: chatbots for support and sales, AI agents for automation, data parsers.',
            p2: 'My approach — not just "set up a bot", but understand your business and create a solution that saves time and increases profit.',
            stat1Label: 'Ready solutions',
            stat2Label: 'Integrations in stack',
            stat3Label: 'Automation'
        },
        cases: {
            label: '● Portfolio',
            title: 'My <span class="gradient-text">cases</span>',
            subtitle: 'Every project is a working AI solution. Click a card to learn more.'
        },
        services: {
            label: '● Services',
            title: 'How I can <span class="gradient-text">help</span>',
            subtitle: 'Full range of AI solutions for your business.',
            items: [
                { title: 'Chatbots', desc: 'Smart bots for Telegram, WhatsApp and websites. From FAQ to complex AI scenarios.' },
                { title: 'AI Agents', desc: 'Autonomous agents that handle tasks without human involvement — 24/7.' },
                { title: 'AI Integration', desc: 'Implementing AI into CRM, ERP and other systems.' },
                { title: 'Consulting', desc: 'Process audit and AI implementation strategy for your business.' }
            ]
        },
        process: {
            label: '● Process',
            title: 'How I <span class="gradient-text">work</span>',
            subtitle: 'Transparent process from idea to result.',
            steps: [
                { title: 'Analysis', desc: 'I study your business and find where AI gives maximum impact.' },
                { title: 'Prototype', desc: 'Working prototype in 3–5 days.' },
                { title: 'Development', desc: 'Full-scale solution with integrations.' },
                { title: 'Testing', desc: 'All scenarios, loads and edge cases.' },
                { title: 'Launch', desc: 'Deployment, team training and support.' }
            ]
        },
        contact: {
            label: '● Contact',
            title: 'Ready to <span class="gradient-text">automate</span><br>your business?',
            subtitle: 'Write to me — first consultation is free.',
            btnTg: 'Message on Telegram',
            btnWa: 'WhatsApp'
        },
        footer: '© 2026 David. AI integrations for business. Astana, Kazakhstan.',
        modal: { desc: 'Description', results: 'Results', videoSoon: 'Video coming soon' }
    }
};

// ===== CASES DATA =====
const casesData = {
    ru: [
        {
            id: 'recruiter', videoFile: 'videos/ru/recruiter.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            title: 'AI Рекрутер', shortDesc: 'Автоматизация найма: скрининг резюме, подбор кандидатов и проведение первичных интервью.', tag: 'HR & Найм',
            fullDesc: 'AI-агент для автоматизации полного цикла рекрутинга. Анализирует резюме, сопоставляет требования вакансии с навыками кандидатов, проводит первичные интервью через чат и формирует шорт-лист.',
            results: [{ value: '70%', label: 'Экономия времени HR' }, { value: '3x', label: 'Быстрее найм' }, { value: '95%', label: 'Точность подбора' }]
        },
        {
            id: 'parser', videoFile: 'videos/ru/parser.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
            title: 'Парсер данных', shortDesc: 'Сбор, структурирование и анализ данных из любых источников в автоматическом режиме.', tag: 'Data & Аналитика',
            fullDesc: 'Мощный AI-парсер для автоматического сбора данных с веб-сайтов, документов, API и баз данных. Структурирует информацию и выгружает в удобном формате.',
            results: [{ value: '24/7', label: 'Работа без остановки' }, { value: '10K+', label: 'Записей в час' }, { value: '99%', label: 'Точность данных' }]
        },
        {
            id: 'chatbots', videoFile: 'videos/ru/chatbots.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,
            title: 'Чат-боты любой сложности', shortDesc: 'Умные чат-боты для поддержки, продаж и консультаций — от простых FAQ до сложных сценариев.', tag: 'Коммуникации',
            fullDesc: 'Разработка чат-ботов любого уровня сложности. Боты работают в Telegram, WhatsApp, на сайте. Обучаются на вашей базе знаний.',
            results: [{ value: '80%', label: 'Авто-ответов' }, { value: '24/7', label: 'Доступность' }, { value: '50%', label: 'Сокращение нагрузки' }]
        },
        {
            id: 'accountant', videoFile: 'videos/ru/accountant.mp4',
            icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>`,
            title: 'AI Бухгалтер', shortDesc: 'Автоматизация бухгалтерского учёта: обработка документов, расчёты и отчётность.', tag: 'Финансы',
            fullDesc: 'AI-бухгалтер берёт на себя рутину: распознаёт первичные документы, ведёт учёт, формирует отчёты. Возможны удобные вам интеграции.',
            results: [{ value: '90%', label: 'Меньше рутины' }, { value: '0', label: 'Ошибок в расчётах' }, { value: '5x', label: 'Быстрее обработка' }]
        },
        {
            id: 'secretary', videoFile: 'videos/ru/secretary.mp4',
            icon: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
            title: 'AI Приёмщик', shortDesc: 'Голосовой ввод данных: автоматическая расшифровка и мгновенное внесение информации в базы или CRM.', tag: 'Продуктивность',
            fullDesc: 'Интеллектуальный бизнес-ассистент, который превращает хаос голосовых сообщений в структурированную базу данных. Агент избавляет сотрудников и руководителей от необходимости вручную заполнять таблицы, или CRM-системы, позволяя вносить отчеты, задачи или заметки простым голосовым сообщением в Telegram.',
            results: [{ value: '3ч', label: 'Экономии в день' }, { value: '100%', label: 'Дисциплина' }, { value: '0', label: 'Забытых встреч' }]
        }
    ],
    en: [
        {
            id: 'recruiter', videoFile: 'videos/en/recruiter.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
            title: 'AI Recruiter', shortDesc: 'Hiring automation: resume screening, candidate matching and initial interviews — fully on autopilot.', tag: 'HR & Hiring',
            fullDesc: 'AI agent for full-cycle recruitment automation. Analyzes resumes, matches job requirements with candidate skills, conducts initial interviews via chat and creates shortlists.',
            results: [{ value: '70%', label: 'HR time saved' }, { value: '3x', label: 'Faster hiring' }, { value: '95%', label: 'Match accuracy' }]
        },
        {
            id: 'parser', videoFile: 'videos/en/parser.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
            title: 'Data Parser', shortDesc: 'Automated data collection, structuring and analysis from any source.', tag: 'Data & Analytics',
            fullDesc: 'Powerful AI parser for automated data collection from websites, documents, APIs and databases. Structures information and exports in a convenient format.',
            results: [{ value: '24/7', label: 'Non-stop operation' }, { value: '10K+', label: 'Records per hour' }, { value: '99%', label: 'Data accuracy' }]
        },
        {
            id: 'chatbots', videoFile: 'videos/en/chatbots.mp4',
            icon: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>`,
            title: 'Chatbots of any complexity', shortDesc: 'Smart chatbots for support, sales and consulting — from simple FAQ to complex AI scenarios.', tag: 'Communications',
            fullDesc: 'Development of chatbots of any complexity. Bots work on Telegram, WhatsApp, websites. Trained on your knowledge base.',
            results: [{ value: '80%', label: 'Auto-responses' }, { value: '24/7', label: 'Availability' }, { value: '50%', label: 'Load reduction' }]
        },
        {
            id: 'accountant', videoFile: 'videos/en/accountant.mp4',
            icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>`,
            title: 'AI Accountant', shortDesc: 'Accounting automation: document processing, calculations and reporting.', tag: 'Finance',
            fullDesc: 'AI accountant takes over the routine: recognizes primary documents, maintains records, generates reports. Custom integrations available.',
            results: [{ value: '90%', label: 'Less routine' }, { value: '0', label: 'Calculation errors' }, { value: '5x', label: 'Faster processing' }]
        },
        {
            id: 'secretary', videoFile: 'videos/en/secretary.mp4',
            icon: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
            title: 'AI Receiver', shortDesc: 'Voice data entry: automatic transcription and instant information entry into databases or CRM.', tag: 'Productivity',
            fullDesc: 'An intelligent business assistant that turns voice message chaos into a structured database. The agent eliminates the need for employees to manually fill in spreadsheets or CRM systems, allowing them to submit reports, tasks or notes via a simple voice message in Telegram.',
            results: [{ value: '3h', label: 'Saved daily' }, { value: '100%', label: 'Discipline' }, { value: '0', label: 'Missed meetings' }]
        }
    ]
};

// ===== LANGUAGE STATE =====
let currentLang = localStorage.getItem('lang') || 'ru';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    rebuildCases();
    updateLangToggle();
}

function applyTranslations() {
    const t = i18n[currentLang];

    // Nav
    document.querySelectorAll('.floating-nav a[data-i18n]').forEach(a => {
        a.textContent = t.nav[a.dataset.i18n];
    });

    // Hero
    const setText = (sel, val, html) => {
        const el = document.querySelector(sel);
        if (el) html ? el.innerHTML = val : el.textContent = val;
    };
    setText('[data-i18n="hero-badge"]', t.hero.badge);
    setText('[data-i18n="hero-h1"]', t.hero.h1, true);
    setText('[data-i18n="hero-desc"]', t.hero.description);
    setText('[data-i18n="hero-btn1"]', t.hero.btnPrimary);
    setText('[data-i18n="hero-btn2"]', t.hero.btnSecondary);
    setText('[data-i18n="hero-tag"]', t.hero.photoTag);

    // Rotating text
    const wrapper = document.querySelector('.hero-rotating-wrapper');
    if (wrapper) {
        wrapper.innerHTML = '';
        t.rotating.forEach((txt, i) => {
            const span = document.createElement('span');
            span.className = 'hero-rotating-text' + (i === 0 ? ' active' : ' enter-below');
            span.textContent = txt;
            wrapper.appendChild(span);
        });
    }

    // About
    setText('[data-i18n="about-label"]', t.about.label);
    setText('[data-i18n="about-title"]', t.about.title, true);
    setText('[data-i18n="about-subtitle"]', t.about.subtitle);
    setText('[data-i18n="about-p1"]', t.about.p1);
    setText('[data-i18n="about-p2"]', t.about.p2);
    setText('[data-i18n="stat1-label"]', t.about.stat1Label);
    setText('[data-i18n="stat2-label"]', t.about.stat2Label);
    setText('[data-i18n="stat3-label"]', t.about.stat3Label);

    // Cases
    setText('[data-i18n="cases-label"]', t.cases.label);
    setText('[data-i18n="cases-title"]', t.cases.title, true);
    setText('[data-i18n="cases-subtitle"]', t.cases.subtitle);

    // Services
    setText('[data-i18n="services-label"]', t.services.label);
    setText('[data-i18n="services-title"]', t.services.title, true);
    setText('[data-i18n="services-subtitle"]', t.services.subtitle);
    document.querySelectorAll('.service-card').forEach((card, i) => {
        if (t.services.items[i]) {
            const h3 = card.querySelector('.service-title');
            const p = card.querySelector('.service-desc');
            if (h3) h3.textContent = t.services.items[i].title;
            if (p) p.textContent = t.services.items[i].desc;
        }
    });

    // Process
    setText('[data-i18n="process-label"]', t.process.label);
    setText('[data-i18n="process-title"]', t.process.title, true);
    setText('[data-i18n="process-subtitle"]', t.process.subtitle);
    document.querySelectorAll('.process-step').forEach((step, i) => {
        if (t.process.steps[i]) {
            const h3 = step.querySelector('.step-title');
            const p = step.querySelector('.step-desc');
            if (h3) h3.textContent = t.process.steps[i].title;
            if (p) p.textContent = t.process.steps[i].desc;
        }
    });

    // Contact
    setText('[data-i18n="contact-label"]', t.contact.label);
    setText('[data-i18n="contact-title"]', t.contact.title, true);
    setText('[data-i18n="contact-subtitle"]', t.contact.subtitle);
    setText('[data-i18n="contact-tg"]', t.contact.btnTg);
    setText('[data-i18n="contact-wa"]', t.contact.btnWa);

    // Footer
    setText('[data-i18n="footer"]', t.footer);

    // HTML lang
    document.documentElement.lang = currentLang === 'ru' ? 'ru' : 'en';
}

function updateLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
}

// ===== CASES & MODAL =====
function rebuildCases() {
    const grid = document.getElementById('cases-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const cases = casesData[currentLang];
    cases.forEach((c, i) => {
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
}

function openModal(c) {
    const overlay = document.getElementById('modal-overlay');
    const modal = overlay.querySelector('.modal');
    const t = i18n[currentLang].modal;

    let vid;
    if (c.videoFile) {
        vid = `<div class="modal-video">
      <video controls preload="metadata" playsinline>
        <source src="${c.videoFile}" type="video/mp4">
      </video>
    </div>`;
    } else {
        vid = `<div class="modal-video"><div class="modal-video-placeholder"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg><span>${t.videoSoon}</span></div></div>`;
    }

    const res = c.results?.length ? `<h4>${t.results}</h4><div class="modal-results">${c.results.map(r => `<div class="modal-result-card"><div class="modal-result-value">${r.value}</div><div class="modal-result-label">${r.label}</div></div>`).join('')}</div>` : '';

    modal.innerHTML = `
    <button class="modal-close" onclick="closeModal()"><svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="modal-header">
      <div class="modal-icon">${c.icon}</div>
      <div><h2 class="modal-title">${c.title}</h2><span class="modal-tag">${c.tag}</span></div>
    </div>
    ${vid}
    <div class="modal-body"><h4>${t.desc}</h4><p>${c.fullDesc}</p>${res}</div>`;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    // Pause any playing video
    const vid = overlay.querySelector('video');
    if (vid) vid.pause();
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    applyTranslations();
    rebuildCases();
    updateLangToggle();
    initRotatingText();
    initScrollReveal();
    initCounters();
    initNavTracking();
    initLangToggle();

    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    }
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});

function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', () => setLang(currentLang === 'ru' ? 'en' : 'ru'));
}

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
            this.x += this.sx; this.y += this.sy;
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
let rotatingInterval;
function initRotatingText() {
    if (rotatingInterval) clearInterval(rotatingInterval);
    let cur = 0;
    rotatingInterval = setInterval(() => {
        const all = document.querySelectorAll('.hero-rotating-text');
        if (!all.length) return;
        const next = (cur + 1) % all.length;
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
                if (isNaN(tgt)) return;
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

// ===== NAV TRACKING =====
function initNavTracking() {
    const links = document.querySelectorAll('.floating-nav a:not(#lang-toggle)');
    const sections = document.querySelectorAll('section[id]');

    document.querySelectorAll('.floating-nav a:not(#lang-toggle)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const t = document.getElementById(link.getAttribute('href')?.substring(1));
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
