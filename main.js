// Load saved language or default to English
let currentLang = localStorage.getItem('language') || 'en';

// Function to apply translations
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });

    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Switch language on button click
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('language', currentLang);
        applyTranslations(currentLang);
    });
});

// Apply translations on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang);
});