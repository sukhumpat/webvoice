// Internationalization (i18n) - Multi-language support
const translations = {
    th: {
        // Navigation
        home: 'หน้าหลัก',
        about: 'เกี่ยวกับ',
        app: 'แอพฝึกออกเสียง',
        contact: 'ติดต่อเรา',
        
        // Index page
        indexTitle: 'WebVoice - เรียนรู้การออกเสียง',
        badgeForEveryone: 'สำหรับทุกคน',
        heroHeading1: 'เรียนรู้',
        heroHeading2: 'การออกเสียง',
        heroHeading3: 'อย่างมั่นใจ',
        heroDesc: 'เว็บไซต์เรียนรู้การออกเสียงสำหรับผู้ปกครองและผู้พิการทางการออกเสียง ฝึกออกเสียงด้วยเทคโนโลยี AI ที่ทันสมัย พร้อมแนวทางและคำแนะนำจากผู้เชี่ยวชาญ',
        startPractice: 'เริ่มฝึกออกเสียง',
        learnMore: 'เรียนรู้เพิ่มเติม',
        
        // Stats
        statWords: 'คำฝึกออกเสียง',
        statUsers: 'ผู้ใช้งาน',
        statSatisfaction: 'ความพึงพอใจ',
        
        // Microphone status
        micStatus: 'สถานะไมโครโฟน',
        checking: 'กำลังตรวจสอบ...',
        ready: 'พร้อมใช้งาน',
        notReady: 'ไม่สามารถเข้าถึงไมโครโฟน',
        totalScore: 'คะแนนรวม',
        
        // App page
        appTitle: 'แอพฝึกออกเสียง - WebVoice',
        selectCategory: 'เลือกหมวดคำ',
        all: 'ทั้งหมด',
        consonant: 'พยัญชนะ',
        vowel: 'สระ',
        word: 'คำ',
        sentence: 'ประโยค',
        currentWord: 'คำปัจจุบัน',
        phonetic: 'การออกเสียง',
        description: 'รายละเอียด',
        recordBtn: 'บันทึกเสียง',
        stopBtn: 'หยุด',
        playReference: 'ฟังเสียงอ้างอิง',
        playUser: 'ฟังเสียงของคุณ',
        nextWord: 'คำถัดไป',
        retry: 'ลองใหม่',
        recordHint: 'กดปุ่มเพื่อเริ่มอัดเสียง',
        stopHint: 'กดปุ่มเพื่อหยุดบันทึก',
        grantPermission: 'กรุณาอนุญาตการเข้าถึงไมโครโฟน',
        
        // About page
        aboutTitle: 'เกี่ยวกับ - WebVoice เรียนรู้การออกเสียง',
        aboutBadge: 'เกี่ยวกับเรา',
        aboutHeading: 'ความสำคัญของการ ฝึกออกเสียง',
        aboutDesc: 'การออกเสียงที่ถูกต้องเป็นพื้นฐานสำคัญของการสื่อสาร สำหรับผู้พิการทางการออกเสียง การฝึกออกเสียงอย่างสม่ำเสมอจะช่วยพัฒนาทักษะและเพิ่มความมั่นใจในการสื่อสาร',
        why: 'ทำไมต้องฝึกออกเสียง',
        whyImportance: 'ความสำคัญของการฝึกออกเสียง',
        effective: 'การสื่อสารที่มีประสิทธิภาพ',
        effectiveDesc: 'การออกเสียงที่ชัดเจนช่วยให้การสื่อสารกับผู้อื่นเป็นไปอย่างราบรื่น ลดความเข้าใจผิดและเพิ่มความมั่นใจในการพูด',
        
        // Contact page
        contactTitle: 'ติดต่อเรา - WebVoice เรียนรู้การออกเสียง',
        contactBadge: 'ติดต่อเรา',
        teamHeading: 'ทีมผู้จัดทำ WebVoice',
        teamDesc: 'เราคือทีมที่มุ่งมั่นพัฒนาเครื่องมือการเรียนรู้การออกเสียง เพื่อช่วยเหลือผู้ปกครองและผู้พิการทางการออกเสียงให้สามารถฝึกออกเสียงได้ด้วยตนเอง',
        teamBadge: 'ทีมงาน',
        teamTitle: 'ผู้จัดทำเว็บไซต์',
        teamSubtitle: 'ทีมผู้เชี่ยวชาญที่พร้อมช่วยเหลือคุณ',
    },
    en: {
        // Navigation
        home: 'Home',
        about: 'About',
        app: 'Speech Training',
        contact: 'Contact',
        
        // Index page
        indexTitle: 'WebVoice - Learn Pronunciation',
        badgeForEveryone: 'For everyone',
        heroHeading1: 'Learn',
        heroHeading2: 'Pronunciation',
        heroHeading3: 'with Confidence',
        heroDesc: 'A pronunciation learning website for parents and individuals with speech disabilities. Practice pronunciation using advanced AI technology with guidance and advice from experts.',
        startPractice: 'Start Practice',
        learnMore: 'Learn More',
        
        // Stats
        statWords: 'Practice Words',
        statUsers: 'Users',
        statSatisfaction: 'Satisfaction Rate',
        
        // Microphone status
        micStatus: 'Microphone Status',
        checking: 'Checking...',
        ready: 'Ready',
        notReady: 'Microphone Not Available',
        totalScore: 'Total Score',
        
        // App page
        appTitle: 'Speech Training App - WebVoice',
        selectCategory: 'Select Word Category',
        all: 'All',
        consonant: 'Consonants',
        vowel: 'Vowels',
        word: 'Words',
        sentence: 'Sentences',
        currentWord: 'Current Word',
        phonetic: 'Pronunciation',
        description: 'Description',
        recordBtn: 'Record',
        stopBtn: 'Stop',
        playReference: 'Play Reference',
        playUser: 'Play Your Voice',
        nextWord: 'Next Word',
        retry: 'Try Again',
        recordHint: 'Click to start recording',
        stopHint: 'Click to stop recording',
        grantPermission: 'Please grant microphone access',
        
        // About page
        aboutTitle: 'About - WebVoice Learn Pronunciation',
        aboutBadge: 'About Us',
        aboutHeading: 'Why Practice Pronunciation',
        aboutDesc: 'Correct pronunciation is a fundamental aspect of communication. For individuals with speech disabilities, consistent pronunciation practice helps develop skills and boost confidence in communication.',
        why: 'Why Practice Pronunciation',
        whyImportance: 'Importance of Pronunciation Practice',
        effective: 'Effective Communication',
        effectiveDesc: 'Clear pronunciation helps communication with others proceed smoothly, reduces misunderstandings, and increases confidence in speaking.',
        
        // Contact page
        contactTitle: 'Contact Us - WebVoice Learn Pronunciation',
        contactBadge: 'Contact Us',
        teamHeading: 'WebVoice Development Team',
        teamDesc: 'We are a dedicated team developing pronunciation learning tools to help parents and individuals with speech disabilities practice pronunciation independently.',
        teamBadge: 'Team',
        teamTitle: 'Website Creators',
        teamSubtitle: 'Expert team ready to help you',
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'th';
    }
    
    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            this.updatePageLanguage();
            return true;
        }
        return false;
    }
    
    getLanguage() {
        return this.currentLanguage;
    }
    
    translate(key) {
        return translations[this.currentLanguage][key] || key;
    }
    
    updatePageLanguage() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translate(key);
        });
        
        // Update all elements with data-i18n-attr attribute
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrs = element.getAttribute('data-i18n-attr').split(',');
            attrs.forEach(attr => {
                const key = element.getAttribute(`data-i18n-${attr}`);
                if (key) {
                    element.setAttribute(attr, this.translate(key));
                }
            });
        });
        
        // Update language button styling
        this.updateLanguageButtons();
        
        // Dispatch custom event for language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.currentLanguage } }));
    }
    
    updateLanguageButtons() {
        const langThBtn = document.getElementById('langTh');
        const langEnBtn = document.getElementById('langEn');
        
        if (langThBtn) {
            if (this.currentLanguage === 'th') {
                langThBtn.classList.add('active');
                langThBtn.style.backgroundColor = '#4f46e5';
                langThBtn.style.color = 'white';
            } else {
                langThBtn.classList.remove('active');
                langThBtn.style.backgroundColor = '';
                langThBtn.style.color = '#4f46e5';
            }
        }
        
        if (langEnBtn) {
            if (this.currentLanguage === 'en') {
                langEnBtn.classList.add('active');
                langEnBtn.style.backgroundColor = '#4f46e5';
                langEnBtn.style.color = 'white';
            } else {
                langEnBtn.classList.remove('active');
                langEnBtn.style.backgroundColor = '';
                langEnBtn.style.color = '#4f46e5';
            }
        }
    }
}

// Initialize language manager
const i18n = new LanguageManager();

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = i18n.getLanguage();
    i18n.updatePageLanguage();
    i18n.updateLanguageButtons(); // Highlight the current language button
});
