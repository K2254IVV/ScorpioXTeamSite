class LanguageSystem {
    constructor() {
        this.languages = {};
        this.currentLang = 'en';
    }

    async init() {
        await this.loadLanguages();
        this.setupLanguageSelector();
        this.applySavedSettings();
        this.setupEventListeners();
    }

    async loadLanguages() {
        try {
            const response = await fetch('lang/list.ttxt');
            const langFiles = (await response.text())
                .split('\n')
                .filter(line => line.trim().endsWith('.ttxt'));

            for (const file of langFiles) {
                await this.loadLanguage(file.trim());
            }
        } catch (e) {
            console.error('Language loading error:', e);
        }
    }

    async loadLanguage(filename) {
        const response = await fetch(`lang/${filename}`);
        const content = await response.text();
        
        const langData = {
            name: this.parseMeta(content, 'name'),
            isoCode: this.parseMeta(content, 'iso-code'),
            translations: this.parseTranslations(content)
        };

        this.languages[filename.replace('.ttxt', '')] = langData;
    }

    parseMeta(content, key) {
        const regex = new RegExp(`${key}=([^\\n]+)`);
        return content.match(regex)?.[1]?.trim() || '';
    }

    parseTranslations(content) {
        const translations = {};
        const langBlock = content.match(/language\{([\s\S]*?)\}/)?.[1] || '';
        
        langBlock.split(';').forEach(pair => {
            const [key, value] = pair.split(',').map(s => s.trim());
            if (key && value) translations[key] = value;
        });

        return translations;
    }

    setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        selector.innerHTML = Object.entries(this.languages)
            .map(([code, lang]) => `<option value="${code}">${lang.name}</option>`)
            .join('');
    }

    applyLanguage(langCode) {
        this.currentLang = langCode;
        localStorage.setItem('language', langCode);
        
        const langData = this.languages[langCode];
        if (!langData) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData.translations[key]) {
                el.textContent = langData.translations[key];
            }
        });
    }

    applySavedSettings() {
        // Тема
        const theme = localStorage.getItem('theme') || 'light';
        document.body.className = `${theme}-theme`;
        document.getElementById('theme-selector').value = theme;

        // Язык
        const lang = localStorage.getItem('language') || 'en';
        this.applyLanguage(lang);
        document.getElementById('language-selector').value = lang;
    }

    setupEventListeners() {
        // Смена языка
        document.getElementById('language-selector').addEventListener('change', (e) => {
            this.applyLanguage(e.target.value);
        });

        // Смена темы
        document.getElementById('theme-selector').addEventListener('change', (e) => {
            document.body.className = `${e.target.value}-theme`;
            localStorage.setItem('theme', e.target.value);
        });

        // Переключение вкладок
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.main-panel').forEach(p => p.classList.add('hidden'));
                document.getElementById(this.getAttribute('data-tab')).classList.remove('hidden');
            });
        });
    }
}

// Инициализация системы
const languageSystem = new LanguageSystem();
document.addEventListener('DOMContentLoaded', () => languageSystem.init());
