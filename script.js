const translations = {
    'en': {
        'intro-label': 'Junior Full-Stack Developer',
        'hero-title': 'Crafting logic with Python, building the web with heart.',
        'work-label': 'Selected Projects',
        'p1-title': 'Data Architect',
        'p1-desc': 'Complex MySQL relational structures optimized for speed.',
        'p1-full-desc': 'Deep dive into database normalization and architecture. Showcase of scalable SQL structures.',
        'p2-title': 'NoSQL Manager',
        'p2-desc': 'A MongoDB-driven dashboard for dynamic content scaling.',
        'p2-full-desc': 'Comprehensive dashboard built with JS, HTML-CSS for the front-end and MongoDB + Python in the back-end to manage non-relational data.',
        'p3-title' : 'Basic HTML-CSS-JavaScript game',
        'p3-desc' : 'A simple Mario game in the same style as Flap Bird using the Front End\'s Holy Trinity.',
        'p3-full-desc' : 'A Mario-themed side-scroller utilizing Flappy Bird mechanics, built with the frontend \'Holy Trinity\' (HTML, CSS, and JavaScript).',
        'p4-title' : 'Glassmorphism Dashboard UI',
        'p4-desc' : 'A high-end, modern dashboard component featuring the trendy \'rosted glass\' aesthetic.',
        'p4-full-desc' : 'A sophisticated UI component utilizing advanced CSS techniques like backdrop-filter and linear gradients to create a glassmorphism effect, with JavaScript used for theme toggling and sidebar animations.',
        'p5-title' : 'Virtual Drum Kit',
        'p5-desc' : 'A musical interaction tool that turns your keyboard into a drum set.',
        'p5-full-desc' : 'A JavaScript-focused project that maps keyboard events to high-quality audio samples, featuring real-time visual feedback and CSS animations triggered by DOM manipulation.',
        'p6-title' : 'Password Security Analyzer',
        'p6-desc' : 'A security tool that evaluates password strength and checks against known vulnerabilities.',
        'p6-full-desc' : 'A hybrid application using JavaScript for instant frontend visual feedback and a Python backend to cross-reference inputs against databases of common or compromised passwords.',
        'p7-title' : 'Automated File Organizer',
        'p7-desc' : 'A Python-based system utility to keep your local directories clean and organized.',
        'p7-full-desc' : 'A backend script using Python\'s \`os` and \'shutil\` libraries to automatically categorize and move files into specific folders based on their extensions and metadata.',
        'p8-title' : 'Interactive Budget Tracker',
        'p8-desc' : 'A personal finance tool for tracking income and expenses in real-time.',
        'p8-full-desc' : 'A functional web application that calculates balances dynamically using JavaScript and utilizes `localStorage` to keep user financial data persistent across browser sessions.',
        'p9-title' : 'Pomodoro Productivity Timer',
        'p9-desc' : 'A sleek focus timer designed to help users manage their work intervals effectively.',
        'p9-full-desc' : 'A minimalist productivity app featuring a circular progress ring built with CSS/SVG and a countdown engine powered by JavaScript\'s \'setInterval\' function.',
        'p10-title' : 'Personal Markdown Blog',
        'p10-desc' : 'A developer-centric blog engine that renders Markdown files into styled web pages.',
        'p10-full-desc' : 'A full-stack bridge using a Python backend (Flask) to process local \'.md\' files and serve them through styled HTML/CSS templates for a seamless reading experience.',
        'p11-title' : 'Real-Time Weather Dashboard',
        'p11-desc' : 'A dynamic weather app that provides live updates based on geographic data.',
        'p11-full-desc' : 'An integrated project using a Python backend to securely fetch data from external APIs and a JavaScript frontend to render dynamic weather icons and temperature charts.',
        'p12-title' : 'Task Management Kanban Board',
        'p12-desc' : 'A productivity board with draggable tasks to manage workflow stages.',
        'p12-full-desc' : 'A comprehensive full-stack application featuring HTML/CSS layout, JavaScript Drag-and-Drop API for task movement, and a Python-based database to store task states.',
        'help-btn': 'Want to help me grow?',
        'footer-head': "Let's build something together!",
        'footer-sub': 'Currently looking for my first big opportunity.',
        'qr-text': 'Scan for contact',
        'view-repo': 'View Repository'
    },
    'pt': {
        'intro-label': 'Desenvolvedor Full-Stack Júnior',
        'hero-title': 'Criando lógica com Python, construindo a web com propósito.',
        'work-label': 'Projetos Selecionados',
        'p1-title': 'Arquiteto de Dados',
        'p1-desc': 'Estruturas relacionais MySQL complexas otimizadas para velocidade.',
        'p1-full-desc': 'Uma imersão em normalização e arquitetura de banco de dados SQL.',
        'p2-title': 'Gestor NoSQL',
        'p2-desc': 'Um dashboard MongoDB para escalonamento de conteúdo dinâmico.',
        'p2-full-desc': 'Dashboard construído com JavaScript, HTML-CSS no front-end e MongoDB + Python (back-end) para dados não relacionais.',
        'p3-title' : 'Jogo básico com HTML-CSS-JavaScript',
        'p3-desc' : 'Um jogo básico do Mario no mesmo estilo de Flap Bird feito com a Santíssima Trindade do Front End.',
        'p3-full-desc' : 'Side-scroller temático do Mario com mecânicas de Flappy Bird, desenvolvido com a \'Santíssima Trindade\' do Front-end: HTML, CSS e JavaScript.',
        'p4-title' : 'Interface de Dashboard em Glassmorphism',
        'p4-desc' : 'Um componente de dashboard moderno e sofisticado com a estética de "vidro embaçado".',
        'p4-full-desc' : 'Um componente de UI sofisticado que utiliza técnicas avançadas de CSS, como backdrop-filter e gradientes lineares, para criar o efeito glassmorphism, com JavaScript para alternância de temas e animações de barra lateral.',
        'p5-title' : 'Kit de Bateria Virtual',
        'p5-desc' : 'Uma ferramenta de interação musical que transforma seu teclado em um conjunto de bateria.',
        'p5-full-desc' : 'Um projeto focado em JavaScript que mapeia eventos de teclado para amostras de áudio de alta qualidade, apresentando feedback visual em tempo real e animações CSS disparadas via manipulação do DOM.',
        'p6-title' : 'Analisador de Segurança de Senhas',
        'p6-desc' : 'Uma ferramenta de segurança que avalia a força de senhas e verifica vulnerabilidades conhecidas.',
        'p6-full-desc' : 'Uma aplicação híbrida que utiliza JavaScript para feedback visual instantâneo no frontend e um backend em Python para cruzar os dados com bancos de dados de senhas comuns ou comprometidas.',
        'p7-title' : 'Organizador de Arquivos Automatizado',
        'p7-desc' : 'Um utilitário de sistema em Python para manter seus diretórios locais limpos e organizados.',
        'p7-full-desc' : 'Um script de backend que utiliza as bibliotecas `os` e `shutil` do Python para categorizar e mover arquivos automaticamente para pastas específicas com base em suas extensões e metadados.',
        'p8-title' : 'Rastreador de Orçamento Interativo',
        'p8-desc' : 'Uma ferramenta de finanças pessoais para monitorar receitas e despesas em tempo real.',
        'p8-full-desc' : 'Uma aplicação web funcional que calcula saldos dinamicamente usando JavaScript e utiliza o `localStorage` para manter os dados financeiros do usuário persistentes entre as sessões do navegador.',
        'p9-title' : 'Temporizador de Produtividade Pomodoro',
        'p9-desc' : 'Um timer de foco elegante projetado para ajudar os usuários a gerenciar seus intervalos de trabalho de forma eficaz.',
        'p9-full-desc' : 'Um aplicativo de produtividade minimalista com um anel de progresso circular construído com CSS/SVG e um motor de contagem regressiva movido pela função \'setInterval\' do JavaScript.',
        'p10-title' : 'Blog Pessoal em Markdown',
        'p10-desc' : 'Um motor de blog focado em desenvolvedores que renderiza arquivos Markdown em páginas web estilizadas.',
        'p10-full-desc' : 'Uma ponte full-stack que utiliza um backend em Python (Flask) para processar arquivos \'.md\' locais e servi-los por meio de templates HTML/CSS estilizados para uma experiência de leitura fluida.',
        'p11-title' : 'Dashboard de Clima em Tempo Real',
        'p11-desc' : 'Um app de clima dinâmico que fornece atualizações ao vivo com base em dados geográficos.',
        'p11-full-desc' : 'Um projeto integrado que utiliza um backend em Python para buscar dados de APIs externas com segurança e um frontend em JavaScript para renderizar ícones climáticos dinâmicos e gráficos de temperatura.',
        'p12-title' : 'Quadro Kanban de Gerenciamento de Tarefas',
        'p12-desc' : 'Um quadro de produtividade com tarefas arrastáveis para gerenciar etapas de fluxo de trabalho.',
        'p12-full-desc' : 'Uma aplicação full-stack abrangente com layout em HTML/CSS, API de Drag-and-Drop do JavaScript para movimentação de tarefas e um banco de dados em Python para salvar os estados das tarefas.',
        'help-btn': 'Quer me ajudar a crescer?',
        'footer-head': 'Vamos construir algo juntos!',
        'footer-sub': 'Atualmente em busca da minha primeira oportunidade.',
        'qr-text': 'Escaneie para contato',
        'view-repo': 'Ver Repositório'
    }
};

// --- Theme Management ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});

// --- Translation Management ---
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${lang}-btn`).classList.add('active');
    localStorage.setItem('portfolio-lang', lang);
}

document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
document.getElementById('pt-btn').addEventListener('click', () => setLanguage('pt'));

// --- Filtering Logic ---
const filterPills = document.querySelectorAll('.filter-pill');
const projectCards = document.querySelectorAll('.project-card');

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => {
            p.classList.remove('active');
            p.setAttribute('aria-selected', 'false');
        });
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');

        const filter = pill.getAttribute('data-filter');
        projectCards.forEach(card => {
            const stacks = card.getAttribute('data-stack');
            if (filter === 'all' || stacks.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// --- Modal & a11y Focus Management ---
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');
let lastFocusedElement;

function openModal(card) {
    lastFocusedElement = document.activeElement;
    const lang = localStorage.getItem('portfolio-lang') || 'en';
    
    const titleKey = card.querySelector('[data-i18n]').getAttribute('data-i18n');
    const descKey = card.getAttribute('data-full-desc');
    const imgUrl = card.getAttribute('data-full-img');
    const repoUrl = card.getAttribute('data-repo');

    document.getElementById('modal-title').textContent = translations[lang][titleKey];
    document.getElementById('modal-desc').textContent = translations[lang][descKey];
    document.getElementById('modal-img').src = imgUrl;
    document.getElementById('modal-link').href = repoUrl;

    modal.style.display = 'flex';
    closeModalBtn.focus();
}

function closeModal() {
    modal.style.display = 'none';
    if (lastFocusedElement) lastFocusedElement.focus();
}

projectCards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(card);
        }
    });
});

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target == modal) closeModal(); });
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
});

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('portfolio-lang') || 'en';
    setLanguage(savedLang);
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.textContent = '☀️';
    }
});