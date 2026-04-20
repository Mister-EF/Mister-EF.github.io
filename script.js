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
        'p2-full-desc': 'Comprehensive dashboard built with JS and MongoDB to manage non-relational data.',
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
        'p2-full-desc': 'Dashboard construído com JavaScript e MongoDB para dados não relacionais.',
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