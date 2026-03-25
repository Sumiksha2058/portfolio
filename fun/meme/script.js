// Nepali Meme Creator Script with Bilingual Support

// Category-based suggestions (English and Nepali)
const categorySuggestions = {
    general: [
        { top_en: "My dream", bottom_en: "Reality", top_ne: "मेरो सपना", bottom_ne: "वास्तविकता" },
        { top_en: "When my number is called", bottom_en: "In exam", top_ne: "जब मेरो नम्बर आउछ", bottom_ne: "परीक्षामा" },
        { top_en: "My favorite subject", bottom_en: "Exam", top_ne: "मेरो प्रिय विषय", bottom_ne: "परीक्षा" },
        { top_en: "When Monday comes", bottom_en: "My life", top_ne: "जब सोमबार आता", bottom_ne: "मेरो जीवन" },
        { top_en: "My goal", bottom_en: "My reality", top_ne: "मेरो लक्ष्य", bottom_ne: "मेरो वास्तविकता" }
    ],
    politics: [
        { top_en: "When politicians speak", bottom_en: "My reaction", top_ne: "जब राजनीतिज्ञ बोल्छन्", bottom_ne: "मेरो प्रतिक्रिया" },
        { top_en: "Election campaign", bottom_en: "Reality", top_ne: "चुनाव अभियान", bottom_ne: "वास्तविकता" },
        { top_en: "Political promises", bottom_en: "Implementation", top_ne: "राजनीतिक वादा", bottom_ne: "कार्यान्वयन" },
        { top_en: "Government scheme", bottom_en: "People's experience", top_ne: "सरकारी योजना", bottom_ne: "जनताको अनुभव" },
        { top_en: "Political debate", bottom_en: "Never solution", top_ne: "राजनीतिक बहस", bottom_ne: "कहिले पनि समाधान" }
    ],
    celebrity: [
        { top_en: "Celebrity's life", bottom_en: "Reality", top_ne: "सेलिब्रिटीको जीवन", bottom_ne: "वास्तविकता" },
        { top_en: "Social media", bottom_en: "Real life", top_ne: "सोशल मिडिया", bottom_ne: "वास्तविक जीवन" },
        { top_en: "Celebrity fans", bottom_en: "Critics", top_ne: "सेलिब्रिटी फ्यान्स", bottom_ne: "आलोचकहरू" },
        { top_en: "Movie drama", bottom_en: "Real problems", top_ne: "फिल्मी ड्रामा", bottom_ne: "वास्तविक समस्या" },
        { top_en: "Celebrity style", bottom_en: "My budget", top_ne: "सेलिब्रिटी स्टाइल", bottom_ne: "मेरो बजेट" }
    ],
    sports: [
        { top_en: "Sports news", bottom_en: "My reaction", top_ne: "खेल समाचार", bottom_ne: "मेरो प्रतिक्रिया" },
        { top_en: "My team wins", bottom_en: "My team loses", top_ne: "मेरो टीम जित्छ", bottom_ne: "मेरो टीम हार्छ" },
        { top_en: "Cricket analyst", bottom_en: "Real game", top_ne: "क्रिकेट विश्लेषक", bottom_ne: "वास्तविक खेल" },
        { top_en: "Sports actor", bottom_en: "Real player", top_ne: "खेल अभिनेता", bottom_ne: "वास्तविक खेलाडी" },
        { top_en: "My favorite team", bottom_en: "Everyone else", top_ne: "मेरो पसंदको टीम", bottom_ne: "अन्य सबै" }
    ],
    tech: [
        { top_en: "When coding", bottom_en: "Error appears", top_ne: "कोडिङ गर्दा", bottom_ne: "त्रुटि आउछ" },
        { top_en: "My code", bottom_en: "In production", top_ne: "मेरो कोड", bottom_ne: "उत्पादनमा" },
        { top_en: "Programmer life", bottom_en: "Reality", top_ne: "प्रोग्रामर जीवन", bottom_ne: "वास्तविकता" },
        { top_en: "New technology", bottom_en: "My computer", top_ne: "नयाँ प्रविधि", bottom_ne: "मेरो कम्प्यूटर" },
        { top_en: "Debugging", bottom_en: "Problem increases", top_ne: "डिबग गर्दा", bottom_ne: "समस्या बढ्छ" }
    ],
    education: [
        { top_en: "Before exam", bottom_en: "During exam", top_ne: "परीक्षा अघि", bottom_ne: "परीक्षामा" },
        { top_en: "Teacher's lecture", bottom_en: "My attention", top_ne: "शिक्षक को व्याख्यान", bottom_ne: "मेरो ध्यान" },
        { top_en: "Studying", bottom_en: "Social media", top_ne: "पढाई गर्दा", bottom_ne: "सोशल मिडिया" },
        { top_en: "Exam result", bottom_en: "Parent's reaction", top_ne: "परीक्षा परिणाम", bottom_ne: "माता-पिताको प्रतिक्रिया" },
        { top_en: "Homework time", bottom_en: "Play time", top_ne: "होमवर्क समय", bottom_ne: "खेल्ने समय" }
    ],
    relationship: [
        { top_en: "Relationship start", bottom_en: "Now", top_ne: "सम्बन्धको सुरु", bottom_ne: "अब" },
        { top_en: "Boyfriend's promise", bottom_en: "Reality", top_ne: "प्रेमी को वादा", bottom_ne: "वास्तविकता" },
        { top_en: "My boyfriend", bottom_en: "My friend's boyfriend", top_ne: "मेरो प्रेमी", bottom_ne: "मेरी सहेली को प्रेमी" },
        { top_en: "Writing love letter", bottom_en: "Meeting", top_ne: "प्रेमपत्र लेख्दा", bottom_ne: "भेट्टिएर" },
        { top_en: "Long distance love", bottom_en: "Reality", top_ne: "लम्बी दूरी को सम्बन्ध", bottom_ne: "वास्तविकता" }
    ],
    work: [
        { top_en: "Starting work", bottom_en: "Now", top_ne: "काम सुरु गर्दा", bottom_ne: "अब" },
        { top_en: "Bus time", bottom_en: "Work time", top_ne: "बस को समय", bottom_ne: "काम को समय" },
        { top_en: "Bus time", bottom_en: "Coming home", top_ne: "बस को समय", bottom_ne: "घर फर्किएर" },
        { top_en: "Office meeting", bottom_en: "My attention", top_ne: "कार्यालय मिटिङ", bottom_ne: "मेरो ध्यान" },
        { top_en: "Monday work", bottom_en: "Friday work", top_ne: "सोमबार काम", bottom_ne: "शुक्रबार काम" }
    ],
    travel: [
        { top_en: "When traveling", bottom_en: "Reality", top_ne: "यात्रा गर्दा", bottom_ne: "वास्तविकता" },
        { top_en: "Travel plan", bottom_en: "Real travel", top_ne: "यात्रा योजना", bottom_ne: "वास्तविक यात्रा" },
        { top_en: "New place", bottom_en: "My photo", top_ne: "नयाँ ठाउँ", bottom_ne: "मेरो फोटो" },
        { top_en: "Travel budget", bottom_en: "Real expense", top_ne: "यात्रा बजेट", bottom_ne: "वास्तविक खर्च" },
        { top_en: "Travel dream", bottom_en: "Reality", top_ne: "यात्रा को सपना", bottom_ne: "वास्तविकता" }
    ],
    food: [
        { top_en: "Restaurant photo", bottom_en: "Real food", top_ne: "रेस्टुरेन्टको तस्विर", bottom_ne: "वास्तविक खाना" },
        { top_en: "Ordering food", bottom_en: "What arrives", top_ne: "खाना अर्डर गर्दा", bottom_ne: "आउछ" },
        { top_en: "My favorite food", bottom_en: "My budget", top_ne: "मेरो पसंदको खाना", bottom_ne: "मेरो बजेट" },
        { top_en: "Cooking food", bottom_en: "Real result", top_ne: "खाना बनाउँदा", bottom_ne: "वास्तविक परिणाम" },
        { top_en: "Recipe video", bottom_en: "My food", top_ne: "रेसिपी भिडियो", bottom_ne: "मेरो खाना" }
    ]
};

// Meme templates
const memeTemplates = {
    drake: {
        name_en: "Drake Meme",
        name_ne: "ड्रेक मेम",
        width: 500,
        height: 500,
        draw: (ctx, topText, bottomText, bgColor, textColor, fontSize) => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 500, 500);

            // Top section
            ctx.fillStyle = "#f0f0f0";
            ctx.fillRect(0, 0, 500, 250);

            // Bottom section
            ctx.fillStyle = "#e0e0e0";
            ctx.fillRect(0, 250, 500, 250);

            // Draw text
            drawText(ctx, topText, 250, 125, textColor, fontSize);
            drawText(ctx, bottomText, 250, 375, textColor, fontSize);
        }
    },
    distracted: {
        name_en: "Distracted Boyfriend",
        name_ne: "विचलित प्रेमी",
        width: 500,
        height: 500,
        draw: (ctx, topText, bottomText, bgColor, textColor, fontSize) => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 500, 500);

            // Left section
            ctx.fillStyle = "#e8f4f8";
            ctx.fillRect(0, 0, 250, 500);

            // Right section
            ctx.fillStyle = "#f8e8e8";
            ctx.fillRect(250, 0, 250, 500);

            // Draw text
            drawText(ctx, topText, 125, 250, textColor, fontSize);
            drawText(ctx, bottomText, 375, 250, textColor, fontSize);
        }
    },
    success: {
        name_en: "Success Kid",
        name_ne: "सफलता बालक",
        width: 500,
        height: 500,
        draw: (ctx, topText, bottomText, bgColor, textColor, fontSize) => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 500, 500);

            // Circle background
            ctx.fillStyle = "#e8f5e9";
            ctx.beginPath();
            ctx.arc(250, 250, 150, 0, Math.PI * 2);
            ctx.fill();

            // Draw text
            drawText(ctx, topText, 250, 200, textColor, fontSize);
            drawText(ctx, bottomText, 250, 300, textColor, fontSize);
        }
    },
    expanding: {
        name_en: "Expanding Brain",
        name_ne: "विस्तारित दिमाग",
        width: 500,
        height: 500,
        draw: (ctx, topText, bottomText, bgColor, textColor, fontSize) => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 500, 500);

            // Four sections
            const sections = [
                { x: 0, y: 0, w: 250, h: 250, color: "#fff3e0" },
                { x: 250, y: 0, w: 250, h: 250, color: "#ffe0b2" },
                { x: 0, y: 250, w: 250, h: 250, color: "#ffcc80" },
                { x: 250, y: 250, w: 250, h: 250, color: "#ffb74d" }
            ];

            sections.forEach(s => {
                ctx.fillStyle = s.color;
                ctx.fillRect(s.x, s.y, s.w, s.h);
            });

            // Draw text
            drawText(ctx, topText, 250, 125, textColor, fontSize);
            drawText(ctx, bottomText, 250, 375, textColor, fontSize);
        }
    },
    nepali_humor: {
        name_en: "Nepali Humor",
        name_ne: "नेपाली हास्य",
        width: 500,
        height: 500,
        draw: (ctx, topText, bottomText, bgColor, textColor, fontSize) => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, 500, 500);

            // Gradient background
            const gradient = ctx.createLinearGradient(0, 0, 500, 500);
            gradient.addColorStop(0, "#ffd89b");
            gradient.addColorStop(1, "#19547b");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 500, 500);

            // Draw text
            drawText(ctx, topText, 250, 200, "white", fontSize);
            drawText(ctx, bottomText, 250, 350, "white", fontSize);
        }
    }
};

// Helper function to draw text
function drawText(ctx, text, x, y, color, fontSize) {
    ctx.fillStyle = color;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add text shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Wrap text if too long
    const maxWidth = 450;
    const words = text.split(" ");
    let line = "";
    let lineY = y;

    words.forEach((word, index) => {
        const testLine = line + word + " ";
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && line !== "") {
            ctx.fillText(line, x, lineY);
            line = word + " ";
            lineY += fontSize + 10;
        } else {
            line = testLine;
        }
    });

    ctx.fillText(line, x, lineY);
    ctx.shadowColor = "transparent";
}

// DOM Elements
const topTextInput = document.getElementById("topText");
const bottomTextInput = document.getElementById("bottomText");
const memeTemplateSelect = document.getElementById("memeTemplate");
const gifUrlInput = document.getElementById("gifUrl");
const bgColorInput = document.getElementById("backgroundColor");
const textColorInput = document.getElementById("textColor");
const fontSizeInput = document.getElementById("fontSize");
const fontSizeValue = document.getElementById("fontSizeValue");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");
const copyBtn = document.getElementById("copyBtn");
const memePreview = document.getElementById("memePreview");
const suggestionsList = document.getElementById("suggestionsList");
const memeGallery = document.getElementById("memeGallery");
const clearGalleryBtn = document.getElementById("clearGalleryBtn");
const categoryBtns = document.querySelectorAll(".category-btn");
const emojiButtons = document.querySelectorAll(".emoji-btn");
const suggestionsGrid = document.getElementById("suggestionsGrid");

let currentCategory = "general";
let memeGalleryArray = [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    updateSuggestions();
    loadGalleryFromStorage();
    populateQuickSuggestions();
});

// Category filter
categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        updateSuggestions();
    });
});

// Update suggestions based on category and language
function updateSuggestions() {
    const suggestions = categorySuggestions[currentCategory] || categorySuggestions.general;
    suggestionsList.innerHTML = "";

    suggestions.forEach(suggestion => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        const topText = currentLanguage === 'en' ? suggestion.top_en : suggestion.top_ne;
        const bottomText = currentLanguage === 'en' ? suggestion.bottom_en : suggestion.bottom_ne;
        div.innerHTML = `
            <p>"${topText}" - "${bottomText}"</p>
        `;
        div.addEventListener("click", () => {
            topTextInput.value = topText;
            bottomTextInput.value = bottomText;
            generateMeme();
        });
        suggestionsList.appendChild(div);
    });
}

// Populate quick suggestions grid
function populateQuickSuggestions() {
    const suggestions = categorySuggestions.general.slice(0, 6);
    suggestionsGrid.innerHTML = "";

    suggestions.forEach(suggestion => {
        const topText = currentLanguage === 'en' ? suggestion.top_en : suggestion.top_ne;
        const bottomText = currentLanguage === 'en' ? suggestion.bottom_en : suggestion.bottom_ne;
        const card = document.createElement("div");
        card.className = "suggestion-card";
        card.innerHTML = `
            <p class="suggestion-text">"${topText}"</p>
            <button class="use-btn" data-top="${topText}" data-bottom="${bottomText}">
                <i class="fas fa-check"></i> ${currentLanguage === 'en' ? 'Use' : 'प्रयोग गर्नुहोस्'}
            </button>
        `;
        suggestionsGrid.appendChild(card);
    });

    // Add event listeners to use buttons
    document.querySelectorAll('.use-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            topTextInput.value = btn.dataset.top;
            bottomTextInput.value = btn.dataset.bottom;
            generateMeme();
        });
    });
}

// Emoji buttons
emojiButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const emoji = btn.dataset.emoji;
        topTextInput.value += emoji;
    });
});

// Font size slider
fontSizeInput.addEventListener("input", () => {
    fontSizeValue.textContent = fontSizeInput.value;
});

// Generate meme
generateBtn.addEventListener("click", generateMeme);

function generateMeme() {
    const topText = topTextInput.value;
    const bottomText = bottomTextInput.value;
    const template = memeTemplateSelect.value;
    const bgColor = bgColorInput.value;
    const textColor = textColorInput.value;
    const fontSize = parseInt(fontSizeInput.value);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const templateConfig = memeTemplates[template] || memeTemplates.drake;
    canvas.width = templateConfig.width;
    canvas.height = templateConfig.height;

    templateConfig.draw(ctx, topText, bottomText, bgColor, textColor, fontSize);

    // Display preview
    memePreview.innerHTML = "";
    memePreview.appendChild(canvas);

    // Enable action buttons
    downloadBtn.disabled = false;
    shareBtn.disabled = false;
    copyBtn.disabled = false;

    // Add to gallery
    addToGallery(canvas.toDataURL());
}

// Add to gallery
function addToGallery(imageData) {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.innerHTML = `
        <img src="${imageData}" alt="Meme">
        <div class="gallery-item-overlay">
            <button class="download-item"><i class="fas fa-download"></i></button>
            <button class="delete-item"><i class="fas fa-trash"></i></button>
        </div>
    `;

    const downloadBtn = galleryItem.querySelector(".download-item");
    const deleteBtn = galleryItem.querySelector(".delete-item");

    downloadBtn.addEventListener("click", () => downloadImage(imageData));
    deleteBtn.addEventListener("click", () => galleryItem.remove());

    if (memeGallery.querySelector(".gallery-placeholder")) {
        memeGallery.innerHTML = "";
    }

    memeGallery.appendChild(galleryItem);
    memeGalleryArray.push(imageData);
    saveGalleryToStorage();
}

// Download image
function downloadImage(imageData) {
    const link = document.createElement("a");
    link.href = imageData;
    link.download = `meme-${Date.now()}.png`;
    link.click();
}

// Download button
downloadBtn.addEventListener("click", () => {
    const canvas = memePreview.querySelector("canvas");
    if (canvas) {
        downloadImage(canvas.toDataURL());
    }
});

// Copy button
copyBtn.addEventListener("click", () => {
    const canvas = memePreview.querySelector("canvas");
    if (canvas) {
        canvas.toBlob(blob => {
            navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob })
            ]).then(() => {
                alert(t("Meme copied to clipboard!"));
            });
        });
    }
});

// Share button
shareBtn.addEventListener("click", () => {
    const canvas = memePreview.querySelector("canvas");
    if (canvas && navigator.share) {
        canvas.toBlob(blob => {
            const file = new File([blob], "meme.png", { type: "image/png" });
            navigator.share({
                files: [file],
                title: currentLanguage === 'en' ? "Meme" : "मेम",
                text: currentLanguage === 'en' ? "Check out my meme!" : "मेरो बनाएको मेम हेर्नुहोस्!"
            });
        });
    } else {
        alert(t("Your browser doesn't support sharing."));
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    topTextInput.value = "";
    bottomTextInput.value = "";
    memePreview.innerHTML = `
        <div class="meme-placeholder">
            <i class="fas fa-image"></i>
            <p>${currentLanguage === 'en' ? 'Your meme will appear here' : 'तपाईंको मेम यहाँ देखिनेछ'}</p>
        </div>
    `;
    downloadBtn.disabled = true;
    shareBtn.disabled = true;
    copyBtn.disabled = true;
});

// Clear gallery
clearGalleryBtn.addEventListener("click", () => {
    if (confirm(t("Are you sure you want to delete all memes?"))) {
        memeGallery.innerHTML = `
            <div class="gallery-placeholder">
                <p>${currentLanguage === 'en' ? 'Your created memes will appear here' : 'तपाईंले बनाएका मेमहरू यहाँ देखिनेछन्'}</p>
            </div>
        `;
        memeGalleryArray = [];
        localStorage.removeItem("memeGallery");
    }
});

// Save gallery to localStorage
function saveGalleryToStorage() {
    localStorage.setItem("memeGallery", JSON.stringify(memeGalleryArray));
}

// Load gallery from localStorage
function loadGalleryFromStorage() {
    const saved = localStorage.getItem("memeGallery");
    if (saved) {
        memeGalleryArray = JSON.parse(saved);
        if (memeGalleryArray.length > 0) {
            memeGallery.innerHTML = "";
            memeGalleryArray.forEach(imageData => {
                const galleryItem = document.createElement("div");
                galleryItem.className = "gallery-item";
                galleryItem.innerHTML = `
                    <img src="${imageData}" alt="Meme">
                    <div class="gallery-item-overlay">
                        <button class="download-item"><i class="fas fa-download"></i></button>
                        <button class="delete-item"><i class="fas fa-trash"></i></button>
                    </div>
                `;

                const downloadBtn = galleryItem.querySelector(".download-item");
                const deleteBtn = galleryItem.querySelector(".delete-item");

                downloadBtn.addEventListener("click", () => downloadImage(imageData));
                deleteBtn.addEventListener("click", () => {
                    galleryItem.remove();
                    memeGalleryArray = memeGalleryArray.filter(item => item !== imageData);
                    saveGalleryToStorage();
                });

                memeGallery.appendChild(galleryItem);
            });
        }
    }
}

// Listen for language changes
document.addEventListener('languageChanged', () => {
    updateSuggestions();
    populateQuickSuggestions();
});


// Mobile Optimization
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        document.body.classList.add('touch-device');
        
        // Improve touch targets for better mobile experience
        document.querySelectorAll('.btn, .emoji-btn, .category-btn').forEach(btn => {
            btn.style.minHeight = '44px';
            btn.style.minWidth = '44px';
        });
    } else {
        document.body.classList.remove('touch-device');
    }
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    optimizeForMobile();
});

// Prevent zoom on input focus (iOS)
document.addEventListener('touchstart', function() {}, false);

// Smooth scrolling for mobile browsers
if ('scrollBehavior' in document.documentElement.style === false) {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.hash) {
            e.preventDefault();
            const target = document.querySelector(e.target.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// Optimize canvas rendering for mobile
function optimizeCanvasForMobile() {
    const canvas = memePreview.querySelector('canvas');
    if (canvas && window.innerWidth <= 768) {
        const maxWidth = Math.min(canvas.width, window.innerWidth - 40);
        const scale = maxWidth / canvas.width;
        canvas.style.maxWidth = maxWidth + 'px';
        canvas.style.height = 'auto';
    }
}

// Call mobile optimization on page load
document.addEventListener('DOMContentLoaded', () => {
    optimizeForMobile();
});

// Optimize canvas when meme is generated
const originalGenerateMeme = generateMeme;
generateMeme = function() {
    originalGenerateMeme.call(this);
    optimizeCanvasForMobile();
};


// ===== TRENDING MEME DISPLAY SECTION =====

// DOM Elements for Trending Section
const trendingMemesGrid = document.getElementById('trendingMemesGrid');
const refreshTrendingBtn = document.getElementById('refreshTrendingBtn');
const autoPlayBtn = document.getElementById('autoPlayBtn');
const topTrendName = document.getElementById('topTrendName');
const memesCount = document.getElementById('memesCount');
const categoriesCount = document.getElementById('categoriesCount');

let autoPlayInterval = null;
let isAutoPlaying = false;

// Initialize trending memes on page load
document.addEventListener('DOMContentLoaded', () => {
    displayTrendingMemes();
    updateTrendingStats();
});

// Display trending memes
function displayTrendingMemes() {
    const trendingMemes = trendingMemeGen.generateBatch(6);
    
    trendingMemesGrid.innerHTML = '';
    
    trendingMemes.forEach((meme, index) => {
        const memeCard = createTrendingMemeCard(meme, index);
        trendingMemesGrid.appendChild(memeCard);
    });
}

// Create trending meme card
function createTrendingMemeCard(meme, index) {
    const card = document.createElement('div');
    card.className = 'trending-meme-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    
    const ctx = canvas.getContext('2d');
    const templateConfig = memeTemplates[meme.template] || memeTemplates.drake;
    
    // Scale down for card display
    const scaledWidth = 300;
    const scaledHeight = 300;
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
    
    // Draw meme
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, scaledWidth, scaledHeight);
    
    // Draw text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(meme.topText, scaledWidth / 2, 50);
    ctx.fillText(meme.bottomText, scaledWidth / 2, scaledHeight - 30);
    
    // Add emoji
    ctx.font = '40px Arial';
    ctx.fillText(meme.emoji, scaledWidth / 2, scaledHeight / 2);
    
    const cardHTML = `
        <div class="trending-card-header">
            <span class="trend-title">${meme.title}</span>
            <span class="trend-score">
                <i class="fas fa-fire"></i> ${meme.trendScore}
            </span>
        </div>
        <div class="trending-card-image">
            ${canvas.outerHTML}
        </div>
        <div class="trending-card-content">
            <p class="trending-text">"${meme.topText}"</p>
            <p class="trending-text">"${meme.bottomText}"</p>
            <div class="trending-card-actions">
                <button class="btn-small use-trending" data-top="${meme.topText}" data-bottom="${meme.bottomText}">
                    <i class="fas fa-check"></i> ${currentLanguage === 'en' ? 'Use' : 'प्रयोग गर्नुहोस्'}
                </button>
                <button class="btn-small download-trending">
                    <i class="fas fa-download"></i> ${currentLanguage === 'en' ? 'Save' : 'बचाउनुहोस्'}
                </button>
            </div>
        </div>
    `;
    
    card.innerHTML = cardHTML;
    
    // Add event listeners
    const useBtn = card.querySelector('.use-trending');
    const downloadBtn = card.querySelector('.download-trending');
    
    useBtn.addEventListener('click', () => {
        topTextInput.value = meme.topText;
        bottomTextInput.value = meme.bottomText;
        memeTemplateSelect.value = meme.template;
        generateMeme();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    downloadBtn.addEventListener('click', () => {
        downloadImage(canvas.toDataURL());
    });
    
    return card;
}

// Update trending stats
function updateTrendingStats() {
    const stats = trendingMemeGen.getStats();
    const topTrending = trendingMemeGen.getTopTrending(1)[0];
    
    topTrendName.textContent = topTrending ? topTrending.title : 'Loading...';
    memesCount.textContent = stats.totalMemes;
    categoriesCount.textContent = stats.categories.length;
}

// Refresh trending memes
refreshTrendingBtn.addEventListener('click', () => {
    refreshTrendingBtn.classList.add('spinning');
    setTimeout(() => {
        displayTrendingMemes();
        updateTrendingStats();
        refreshTrendingBtn.classList.remove('spinning');
    }, 500);
});

// Auto-play trending memes
autoPlayBtn.addEventListener('click', () => {
    isAutoPlaying = !isAutoPlaying;
    
    if (isAutoPlaying) {
        autoPlayBtn.classList.add('active');
        autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> <span data-en="Stop" data-ne="रोक्नुहोस्">Stop</span>';
        
        autoPlayInterval = setInterval(() => {
            displayTrendingMemes();
            updateTrendingStats();
        }, 5000);
    } else {
        autoPlayBtn.classList.remove('active');
        autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> <span data-en="Auto Play" data-ne="स्वचालित खेल">Auto Play</span>';
        clearInterval(autoPlayInterval);
    }
});

// Update trending display when language changes
document.addEventListener('languageChanged', () => {
    displayTrendingMemes();
    updateTrendingStats();
});

// Add CSS for trending section animations
const style = document.createElement('style');
style.textContent = `
    .trending-meme-card {
        animation: slideInUp 0.5s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .spinning {
        animation: spin 0.6s linear !important;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .btn-small {
        padding: 6px 12px;
        font-size: 0.8rem;
        border: none;
        background: var(--accent);
        color: white;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
    }
    
    .btn-small:hover {
        background: var(--accent-light);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);
