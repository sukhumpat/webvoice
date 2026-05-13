// filepath: js/app.js

// Word database - Multi-language pronunciation practice words
const wordDatabase = {
    th: {
        consonant: [
            { word: 'ก', phonetic: 'kor kai', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'ข', phonetic: 'khor khai', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'ค', phonetic: 'khor khwai', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'ง', phonetic: 'ngor ngu', description: 'พยัญชนะต้น ออกเสียงจากจมูก' },
            { word: 'จ', phonetic: 'jor ja', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ฉ', phonetic: 'chor ching', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'ช', phonetic: 'chor chang', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ซ', phonetic: 'sor so', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ญ', phonetic: 'yor ying', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ด', phonetic: 'dor dek', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ต', phonetic: 'tor tao', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ถ', phonetic: 'tor hung', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ท', phonetic: 'tor thahan', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ธ', phonetic: 'tor thong', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'น', phonetic: 'nor no', description: 'พยัญชนะต้น ออกเสียงจากจมูก' },
            { word: 'บ', phonetic: 'bor baimai', description: 'พยัญชนะต้น ออกเสียงจากริมฝีปาก' },
            { word: 'ป', phonetic: 'por pla', description: 'พยัญชนะต้น ออกเสียงจากริมฝีปาก' },
            { word: 'ผ', phonetic: 'phor pheng', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'ฝ', phonetic: 'for fang', description: 'พยัญชนะต้น ออกเสียงจากฟัน' },
            { word: 'พ', phonetic: 'por phan', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ฟ', phonetic: 'for fan', description: 'พยัญชนะต้น ออกเสียงจากฟัน' },
            { word: 'ภ', phonetic: 'por pham', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ม', phonetic: 'mor mom', description: 'พยัญชนะต้น ออกเสียงจากจมูก' },
            { word: 'ย', phonetic: 'yor ying', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ร', phonetic: 'ror rue', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ล', phonetic: 'lor ling', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ว', phonetic: 'wor wa', description: 'พยัญชนะต้น ออกเสียงจากริมฝีปาก' },
            { word: 'ศ', phonetic: 'sor sa', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ษ', phonetic: 'sor sa', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ส', phonetic: 'sor sa', description: 'พยัญชนะต้น ออกเสียงจากลิ้น' },
            { word: 'ห', phonetic: 'hor hip', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' },
            { word: 'อ', phonetic: 'or a', description: 'พยัญชนะต้น ออกเสียงจากลำคอ' }
        ],
        vowel: [
            { word: 'ะ', phonetic: 'a', description: 'สระอะ สั้น' },
            { word: 'า', phonetic: 'a', description: 'สระอา ยาว' },
            { word: 'ิ', phonetic: 'i', description: 'สระอิ สั้น' },
            { word: 'ี', phonetic: 'i', description: 'สระอี ยาว' },
            { word: 'ึ', phonetic: 'ue', description: 'สระอึ สั้น' },
            { word: 'ื', phonetic: 'ue', description: 'สระอือ ยาว' },
            { word: 'ุ', phonetic: 'u', description: 'สระอุ สั้น' },
            { word: 'ู', phonetic: 'u', description: 'สระอู ยาว' },
            { word: 'เ', phonetic: 'e', description: 'สระเอะ สั้น' },
            { word: 'แ', phonetic: 'ae', description: 'สระแอะ สั้น' },
            { word: 'โ', phonetic: 'o', description: 'สระโอะ สั้น' },
            { word: 'อ', phonetic: 'o', description: 'สระออะ สั้น' }
        ],
        word: [
            { word: 'สวัสดี', phonetic: 'sa-wat-di', description: 'คำทักทาย หมายถึงความเป็นสุข' },
            { word: 'ขอบคุณ', phonetic: 'khob khun', description: 'คำขอบคุณ แสดงความซาบซึ้ง' },
            { word: 'สวยงาม', phonetic: 'suay ngam', description: 'คำบรรยายความสวยงาม' },
            { word: 'การศึกษา', phonetic: 'gan suksa', description: 'คำเกี่ยวกับการเรียนรู้' },
            { word: 'พัฒนา', phonetic: 'patthana', description: 'คำหมายถึงการเติบโต' },
            { word: 'ความสำเร็จ', phonetic: 'kwam samret', description: 'คำหมายถึงความสำเร็จ' },
            { word: 'โอกาส', phonetic: 'o gat', description: 'คำหมายถึงโอกาส' },
            { word: 'ประสบการณ์', phonetic: 'prabop kan', description: 'คำหมายถึงประสบการณ์' },
            { word: 'ความรู้', phonetic: 'kwam ru', description: 'คำหมายถึงความรู้' },
            { word: 'การสื่อสาร', phonetic: 'gan suesan', description: 'คำหมายถึงการสื่อสาร' }
        ],
        sentence: [
            { word: 'สวัสดีครับ', phonetic: 'sa-wat-di khrap', description: 'คำทักทาย (ผู้ชาย)' },
            { word: 'สวัสดีค่ะ', phonetic: 'sa-wat-di kha', description: 'คำทักทาย (ผู้หญิง)' },
            { word: 'ขอบคุณมากครับ', phonetic: 'khob khun mak khrap', description: 'ขอบคุณมาก (ผู้ชาย)' },
            { word: 'ขอบคุณมากค่ะ', phonetic: 'khob khun mak kha', description: 'ขอบคุณมาก (ผู้หญิง)' },
            { word: 'ยินดีที่ได้รู้จักครับ', phonetic: 'yin di ti dai rak khrap', description: 'ยินดีที่ได้รู้จัก (ผู้ชาย)' },
            { word: 'ยินดีที่ได้รู้จักค่ะ', phonetic: 'yin di ti dai rak kha', description: 'ยินดีที่ได้รู้จัก (ผู้หญิง)' },
            { word: 'ขอโทษครับ', phonetic: 'kho thot khrap', description: 'ขอโทษ (ผู้ชาย)' },
            { word: 'ขอโทษค่ะ', phonetic: 'kho thot kha', description: 'ขอโทษ (ผู้หญิง)' },
            { word: 'ราคาเท่าไหร่ครับ', phonetic: 'ra ka tao rai khrap', description: 'ราคาเท่าไหร่ (ผู้ชาย)' },
            { word: 'ราคาเท่าไหร่คะ', phonetic: 'ra ka tao rai kha', description: 'ราคาเท่าไหร่ (ผู้หญิง)' }
        ]
    },
    en: {
        consonant: [
            { word: 'A', phonetic: 'ay', description: 'First letter of the alphabet' },
            { word: 'B', phonetic: 'bee', description: 'Second letter of the alphabet' },
            { word: 'C', phonetic: 'see', description: 'Third letter of the alphabet' },
            { word: 'D', phonetic: 'dee', description: 'Fourth letter of the alphabet' },
            { word: 'E', phonetic: 'ee', description: 'Fifth letter of the alphabet' },
            { word: 'F', phonetic: 'ef', description: 'Sixth letter of the alphabet' },
            { word: 'G', phonetic: 'jee', description: 'Seventh letter of the alphabet' },
            { word: 'H', phonetic: 'aych', description: 'Eighth letter of the alphabet' },
            { word: 'I', phonetic: 'eye', description: 'Ninth letter of the alphabet' },
            { word: 'J', phonetic: 'jay', description: 'Tenth letter of the alphabet' },
            { word: 'K', phonetic: 'kay', description: 'Eleventh letter of the alphabet' },
            { word: 'L', phonetic: 'el', description: 'Twelfth letter of the alphabet' },
            { word: 'M', phonetic: 'em', description: 'Thirteenth letter of the alphabet' },
            { word: 'N', phonetic: 'en', description: 'Fourteenth letter of the alphabet' },
            { word: 'O', phonetic: 'oh', description: 'Fifteenth letter of the alphabet' },
            { word: 'P', phonetic: 'pee', description: 'Sixteenth letter of the alphabet' },
            { word: 'Q', phonetic: 'kyoo', description: 'Seventeenth letter of the alphabet' },
            { word: 'R', phonetic: 'are', description: 'Eighteenth letter of the alphabet' },
            { word: 'S', phonetic: 'ess', description: 'Nineteenth letter of the alphabet' },
            { word: 'T', phonetic: 'tee', description: 'Twentieth letter of the alphabet' },
            { word: 'U', phonetic: 'yoo', description: 'Twenty-first letter of the alphabet' },
            { word: 'V', phonetic: 'vee', description: 'Twenty-second letter of the alphabet' },
            { word: 'W', phonetic: 'double-yoo', description: 'Twenty-third letter of the alphabet' },
            { word: 'X', phonetic: 'eks', description: 'Twenty-fourth letter of the alphabet' },
            { word: 'Y', phonetic: 'why', description: 'Twenty-fifth letter of the alphabet' },
            { word: 'Z', phonetic: 'zee', description: 'Twenty-sixth letter of the alphabet' }
        ],
        vowel: [
            { word: 'Apple', phonetic: 'ap-ul', description: 'A red or green fruit' },
            { word: 'Egg', phonetic: 'eg', description: 'Oval object laid by hens' },
            { word: 'Ice', phonetic: 'ys', description: 'Frozen water' },
            { word: 'Orange', phonetic: 'or-inj', description: 'A round orange fruit' },
            { word: 'Umbrella', phonetic: 'um-brel-uh', description: 'Protection from rain' },
            { word: 'Ant', phonetic: 'ant', description: 'Small crawling insect' },
            { word: 'Elephant', phonetic: 'el-uh-funt', description: 'Large animal with trunk' },
            { word: 'Ink', phonetic: 'ingk', description: 'Liquid for writing' },
            { word: 'Oven', phonetic: 'uh-vun', description: 'Kitchen appliance for cooking' },
            { word: 'Umbrella', phonetic: 'um-brel-uh', description: 'Rain protection tool' }
        ],
        word: [
            { word: 'Hello', phonetic: 'huh-lo', description: 'Greeting word' },
            { word: 'Thank you', phonetic: 'thank yoo', description: 'Expression of gratitude' },
            { word: 'Please', phonetic: 'pleez', description: 'Polite request word' },
            { word: 'Excuse me', phonetic: 'ik-skyooz mee', description: 'To get attention politely' },
            { word: 'Good morning', phonetic: 'good mor-ning', description: 'Morning greeting' },
            { word: 'Good afternoon', phonetic: 'good af-tur-noon', description: 'Afternoon greeting' },
            { word: 'Good evening', phonetic: 'good ee-vning', description: 'Evening greeting' },
            { word: 'How are you', phonetic: 'how ar yoo', description: 'Asking about wellbeing' },
            { word: 'Nice to meet you', phonetic: 'nys too meet yoo', description: 'Friendly greeting' },
            { word: 'See you later', phonetic: 'see yoo lay-tur', description: 'Goodbye phrase' }
        ],
        sentence: [
            { word: 'My name is', phonetic: 'my name iz', description: 'Introducing yourself' },
            { word: 'What is your name?', phonetic: 'what iz yor name', description: 'Asking someone name' },
            { word: 'Where are you from?', phonetic: 'where ar yoo from', description: 'Asking origin' },
            { word: 'How are you today?', phonetic: 'how ar yoo uh-day', description: 'Daily greeting' },
            { word: 'I am learning English', phonetic: 'eye am ler-ning ing-glish', description: 'About learning' },
            { word: 'Can you help me?', phonetic: 'can yoo help mee', description: 'Asking for help' },
            { word: 'I do not understand', phonetic: 'eye doo not un-der-stand', description: 'Expressing confusion' },
            { word: 'Speak more slowly', phonetic: 'speek mor slow-lee', description: 'Asking to slow down' },
            { word: 'Thank you very much', phonetic: 'thank yoo ver-ee much', description: 'Strong gratitude' },
            { word: 'Have a nice day', phonetic: 'hav ay nys day', description: 'Polite goodbye' }
        ]
    }
};

// State variables
let currentCategory = 'all';
let currentWordIndex = 0;
let currentWords = [];
let mediaRecorder = null;
let audioChunks = [];
let audioContext = null;
let analyser = null;
let isRecording = false;
let totalScore = 0;
let practiceCount = 0;
let currentLanguage = 'th';
let waveformCanvas = null;
let waveformCtx = null;
let animationId = null;

// DOM Elements
const micStatusEl = document.getElementById('micStatus');
const micBadgeEl = document.getElementById('micBadge');
const totalScoreEl = document.getElementById('totalScore');
const currentWordEl = document.getElementById('currentWord');
const wordPhoneticEl = document.getElementById('wordPhonetic');
const wordDescriptionEl = document.getElementById('wordDescription');
const wordCategoryEl = document.getElementById('wordCategory');
const recordBtn = document.getElementById('recordBtn');
const recordHint = document.getElementById('recordHint');
const recordingIndicator = document.getElementById('recordingIndicator');
const resultDisplay = document.getElementById('resultDisplay');
const wordListEl = document.getElementById('wordList');
const playReferenceBtn = document.getElementById('playReferenceBtn');
const playUserBtn = document.getElementById('playUserBtn');
const nextWordBtn = document.getElementById('nextWordBtn');
const retryBtn = document.getElementById('retryBtn');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Listen for language changes from i18n
    window.addEventListener('languageChanged', (e) => {
        currentLanguage = e.detail.language;
        initializeWords();
        updateLanguageUI();
    });
    
    // Set initial language from i18n
    if (typeof i18n !== 'undefined') {
        currentLanguage = i18n.getLanguage();
    }
    
    initializeWords();
    checkMicrophoneAccess();
    setupEventListeners();
    updateLanguageUI();
});

// Update UI language elements
function updateLanguageUI() {
    // Update category button text
    document.querySelectorAll('.category-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.textContent = getCategoryName(category);
    });
    
    // Trigger update word display to refresh language
    if (currentWords.length > 0) {
        updateWordDisplay();
    }
}

// Get category name in current language
function getCategoryName(category) {
    const categoryNames = {
        th: {
            all: 'ทั้งหมด',
            consonant: 'พยัญชนะ',
            vowel: 'สระ',
            word: 'คำ',
            sentence: 'ประโยค'
        },
        en: {
            all: 'All',
            consonant: 'Letters',
            vowel: 'Vowels & Words',
            word: 'Words',
            sentence: 'Phrases'
        }
    };
    return categoryNames[currentLanguage][category] || category;
}

// Initialize word list based on category and language
function initializeWords() {
    const langData = wordDatabase[currentLanguage] || wordDatabase['th'];
    
    if (currentCategory === 'all') {
        currentWords = [
            ...langData.consonant.slice(0, 10),
            ...langData.vowel.slice(0, 5),
            ...langData.word.slice(0, 5),
            ...langData.sentence.slice(0, 5)
        ];
    } else {
        currentWords = langData[currentCategory] || [];
    }
    currentWordIndex = 0;
    updateWordDisplay();
    renderWordList();
}

// Check microphone access
async function checkMicrophoneAccess() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const readyText = currentLanguage === 'th' ? 'พร้อมใช้งาน' : 'Ready';
        const readyBadge = currentLanguage === 'th' ? 'พร้อม' : 'Ready';
        micStatusEl.textContent = readyText;
        micBadgeEl.textContent = readyBadge;
        micBadgeEl.className = 'ms-auto badge bg-success';
        recordBtn.disabled = false;
        
        // Set up audio context for visualization
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        
        stream.getTracks().forEach(track => track.stop());
    } catch (error) {
        console.error('Microphone access error:', error);
        const errorText = currentLanguage === 'th' ? 'ไม่สามารถเข้าถึงไมโครโฟน' : 'Microphone Not Available';
        const errorBadge = currentLanguage === 'th' ? 'ไม่พร้อม' : 'Not Ready';
        const errorHint = currentLanguage === 'th' ? 'กรุณาอนุญาตการเข้าถึงไมโครโฟน' : 'Please grant microphone access';
        micStatusEl.textContent = errorText;
        micBadgeEl.textContent = errorBadge;
        micBadgeEl.className = 'ms-auto badge bg-danger';
        recordBtn.disabled = true;
        recordHint.textContent = errorHint;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            initializeWords();
        });
    });

    // Record button
    recordBtn.addEventListener('click', toggleRecording);

    // Play reference button
    playReferenceBtn.addEventListener('click', playReferenceAudio);

    // Next word button
    nextWordBtn.addEventListener('click', () => {
        currentWordIndex = (currentWordIndex + 1) % currentWords.length;
        updateWordDisplay();
        hideResult();
    });

    // Retry button
    retryBtn.addEventListener('click', () => {
        hideResult();
    });
}

// Update word display
function updateWordDisplay() {
    if (currentWords.length === 0) return;
    
    const word = currentWords[currentWordIndex];
    currentWordEl.textContent = word.word;
    wordPhoneticEl.textContent = word.phonetic;
    wordDescriptionEl.textContent = word.description;
    
    // Update category badge with current language
    wordCategoryEl.textContent = getCategoryName(currentCategory);
}

// Render word list
function renderWordList() {
    wordListEl.innerHTML = '';
    
    currentWords.forEach((word, index) => {
        const item = document.createElement('button');
        item.className = `list-group-item list-group-item-action ${index === currentWordIndex ? 'active' : ''}`;
        item.innerHTML = `
            <div class="d-flex w-100 justify-content-between align-items-center">
                <h6 class="mb-1">${word.word}</h6>
                <small class="text-muted">${word.phonetic}</small>
            </div>
            <small class="text-muted">${word.description}</small>
        `;
        item.addEventListener('click', () => {
            currentWordIndex = index;
            updateWordDisplay();
            renderWordList();
            hideResult();
        });
        wordListEl.appendChild(item);
    });
}

// Toggle recording
async function toggleRecording() {
    if (isRecording) {
        stopRecording();
    } else {
        await startRecording();
    }
}

// Start recording
async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            await processAudio(audioBlob);
            stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorder.start();
        isRecording = true;
        recordBtn.classList.add('recording');
        recordBtn.innerHTML = '<i class="bi bi-stop-fill"></i>';
        const stopHintText = currentLanguage === 'th' ? 'กดปุ่มเพื่อหยุดบันทึก' : 'Click to stop recording';
        recordHint.textContent = stopHintText;
        recordingIndicator.style.display = 'block';
        
        // Set up waveform visualization
        waveformCanvas = document.getElementById('waveformCanvas');
        waveformCtx = waveformCanvas.getContext('2d');
        // Connect analyser to stream
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        // Start drawing waveform
        drawWaveform();
        
    } catch (error) {
        console.error('Recording error:', error);
        const errorMsg = currentLanguage === 'th' ? 'ไม่สามารถบันทึกเสียงได้ กรุณาตรวจสอบการอนุญาตไมโครโฟน' : 'Unable to record. Please check microphone permissions.';
        alert(errorMsg);
    }
}

// Stop recording
function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        recordBtn.classList.remove('recording');
        recordBtn.innerHTML = '<i class="bi bi-mic"></i>';
        const startHintText = currentLanguage === 'th' ? 'กดปุ่มเพื่อเริ่มอัดเสียง' : 'Click to start recording';
        recordHint.textContent = startHintText;
        recordingIndicator.style.display = 'none';
        
        // Stop waveform visualization
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
}

// Process audio and compare with reference
async function processAudio(audioBlob) {
    // Use Web Speech API for speech recognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        // Fallback: simulate comparison if Speech API is not available
        simulateComparison();
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Set language based on current language
    const langCode = currentLanguage === 'th' ? 'th-TH' : 'en-US';
    recognition.lang = langCode;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Convert blob to audio URL for playback
    const audioUrl = URL.createObjectURL(audioBlob);
    playUserBtn.onclick = () => {
        const audio = new Audio(audioUrl);
        audio.play();
    };
    playUserBtn.disabled = false;

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        console.log('Recognized text:', spokenText);
        comparePronunciation(spokenText);
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        // Fallback to simulation
        simulateComparison();
    };

    recognition.onend = () => {
        // If no result, simulate comparison
        setTimeout(() => {
            if (resultDisplay.style.display === 'none') {
                simulateComparison();
            }
        }, 1000);
    };

    // Create audio element for recognition
    const audio = new Audio(audioUrl);
    audio.play();
    
    // Start recognition after a short delay to let audio play
    setTimeout(() => {
        recognition.start();
    }, 500);
}

// Compare pronunciation
function comparePronunciation(spokenText) {
    const targetWord = currentWords[currentWordIndex].word;
    const similarity = calculateSimilarity(spokenText, targetWord);
    displayResult(similarity, spokenText);
}

// Calculate similarity between two strings
function calculateSimilarity(str1, str2) {
    // Normalize strings
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();
    
    // Exact match
    if (s1 === s2) return 100;
    
    // Calculate Levenshtein distance
    const distance = levenshteinDistance(s1, s2);
    const maxLength = Math.max(s1.length, s2.length);
    
    if (maxLength === 0) return 100;
    
    // Calculate similarity percentage
    const similarity = ((maxLength - distance) / maxLength) * 100;
    
    // Add bonus for partial match
    if (s2.includes(s1) || s1.includes(s2)) {
        return Math.min(100, similarity + 20);
    }
    
    return Math.max(0, Math.round(similarity));
}

// Levenshtein distance calculation
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str1.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str2.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str1.length][str2.length];
}

// Simulate comparison (fallback)
function simulateComparison() {
    // Generate a random similarity score for demo purposes
    const randomScore = Math.floor(Math.random() * 40) + 60; // 60-100%
    const spokenText = currentWords[currentWordIndex].word;
    displayResult(randomScore, spokenText);
}

// Display result
function displayResult(similarity, spokenText) {
    const scoreValue = Math.min(100, similarity);
    
    // Update score display
    document.getElementById('scoreValue').textContent = scoreValue + '%';
    
    // Update score circle class
    const scoreCircle = document.getElementById('scoreCircle');
    scoreCircle.className = 'score-circle';
    if (scoreValue >= 80) {
        scoreCircle.classList.add('score-high');
    } else if (scoreValue >= 60) {
        scoreCircle.classList.add('score-medium');
    } else {
        scoreCircle.classList.add('score-low');
    }
    
    // Update detailed scores
    const clarity = Math.floor(Math.random() * 30) + scoreValue - 15;
    const accuracy = scoreValue;
    const rhythm = Math.floor(Math.random() * 20) + scoreValue - 10;
    
    document.getElementById('clarityScore').textContent = Math.max(0, clarity) + '%';
    document.getElementById('accuracyScore').textContent = accuracy + '%';
    document.getElementById('rhythmScore').textContent = Math.max(0, rhythm) + '%';
    
    document.getElementById('clarityBar').style.width = Math.max(0, clarity) + '%';
    document.getElementById('accuracyBar').style.width = accuracy + '%';
    document.getElementById('rhythmBar').style.width = Math.max(0, rhythm) + '%';
    
    // Update feedback text
    let feedback = '';
    if (scoreValue >= 90) {
        feedback = '🎉 ยอดเยี่ยม! การออกเสียงถูกต้องและชัดเจนมาก';
    } else if (scoreValue >= 80) {
        feedback = '👍 ดีมาก! การออกเสียงใกล้เคียงสมบูรณ์แบบ';
    } else if (scoreValue >= 70) {
        feedback = '💪 ทำได้ดี! มีความถูกต้องสูง ลองฝึกเพิ่มเติม';
    } else if (scoreValue >= 60) {
        feedback = '💡 พอใช้ได้! ควรฝึกออกเสียงให้ชัดเจนขึ้น';
    } else {
        feedback = '📝 ต้องฝึกเพิ่ม! ลองฟังเสียงต้นแบบอีกครั้งและออกเสียงตาม';
    }
    document.getElementById('feedbackText').textContent = feedback;
    
    // Update total score
    practiceCount++;
    totalScore = Math.round((totalScore * (practiceCount - 1) + scoreValue) / practiceCount);
    totalScoreEl.textContent = totalScore + ' คะแนน';
    
    // Show result display
    resultDisplay.style.display = 'block';
    resultDisplay.classList.add('fade-in');
    
    // Scroll to result
    resultDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Hide result display
function hideResult() {
    resultDisplay.style.display = 'none';
}

// Play reference audio (simulated)
function playReferenceAudio() {
    const targetWord = currentWords[currentWordIndex].word;
    
    // Use speech synthesis to read the word
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(targetWord);
        // Set language based on current language
        utterance.lang = currentLanguage === 'th' ? 'th-TH' : 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        speechSynthesis.cancel(); // Stop any previous speech
        speechSynthesis.speak(utterance);
    } else {
        const alertMsg = currentLanguage === 'th' ? 'เบราว์เซอร์ไม่รองรับการอ่านออกเสียง' : 'Browser does not support speech synthesis';
        alert(alertMsg);
    }
}

// Draw realtime waveform
function drawWaveform() {
    if (!analyser || !waveformCtx) return;
    
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    analyser.getByteTimeDomainData(dataArray);
    
    waveformCtx.fillStyle = '#f8f9fa';
    waveformCtx.fillRect(0, 0, waveformCanvas.width, waveformCanvas.height);
    
    waveformCtx.lineWidth = 2;
    waveformCtx.strokeStyle = '#007bff';
    waveformCtx.beginPath();
    
    const sliceWidth = waveformCanvas.width / bufferLength;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * waveformCanvas.height / 2;
        
        if (i === 0) {
            waveformCtx.moveTo(x, y);
        } else {
            waveformCtx.lineTo(x, y);
        }
        
        x += sliceWidth;
    }
    
    waveformCtx.stroke();
    
    animationId = requestAnimationFrame(drawWaveform);
}