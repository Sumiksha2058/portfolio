// Nepali Meme Creator Script

// Category-based suggestions
const categorySuggestions = {
    general: [
        { top: "मेरो सपना", bottom: "वास्तविकता" },
        { top: "जब मेरो नम्बर आउछ", bottom: "परीक्षामा" },
        { top: "मेरो प्रिय विषय", bottom: "परीक्षा" },
        { top: "जब सोमबार आता", bottom: "मेरो जीवन" },
        { top: "मेरो लक्ष्य", bottom: "मेरो वास्तविकता" }
    ],
    politics: [
        { top: "जब राजनीतिज्ञ बोल्छन्", bottom: "मेरो प्रतिक्रिया" },
        { top: "चुनाव अभियान", bottom: "वास्तविकता" },
        { top: "राजनीतिक वादा", bottom: "कार्यान्वयन" },
        { top: "सरकारी योजना", bottom: "जनताको अनुभव" },
        { top: "राजनीतिक बहस", bottom: "कहिले पनि समाधान" }
    ],
    celebrity: [
        { top: "सेलिब्रिटीको जीवन", bottom: "वास्तविकता" },
        { top: "सोशल मिडिया", bottom: "वास्तविक जीवन" },
        { top: "सेलिब्रिटी फ्यान्स", bottom: "आलोचकहरू" },
        { top: "फिल्मी ड्रामा", bottom: "वास्तविक समस्या" },
        { top: "सेलिब्रिटी स्टाइल", bottom: "मेरो बजेट" }
    ],
    sports: [
        { top: "खेल समाचार", bottom: "मेरो प्रतिक्रिया" },
        { top: "मेरो टीम जित्छ", bottom: "मेरो टीम हार्छ" },
        { top: "क्रिकेट विश्लेषक", bottom: "वास्तविक खेल" },
        { top: "खेल अभिनेता", bottom: "वास्तविक खेलाडी" },
        { top: "मेरो पसंदको टीम", bottom: "अन्य सबै" }
    ],
    tech: [
        { top: "कोडिङ गर्दा", bottom: "त्रुटि आउछ" },
        { top: "मेरो कोड", bottom: "उत्पादनमा" },
        { top: "प्रोग्रामर जीवन", bottom: "वास्तविकता" },
        { top: "नयाँ प्रविधि", bottom: "मेरो कम्प्यूटर" },
        { top: "डिबग गर्दा", bottom: "समस्या बढ्छ" }
    ],
    education: [
        { top: "परीक्षा अघि", bottom: "परीक्षामा" },
        { top: "शिक्षक को व्याख्यान", bottom: "मेरो ध्यान" },
        { top: "पढाई गर्दा", bottom: "सोशल मिडिया" },
        { top: "परीक्षा परिणाम", bottom: "माता-पिताको प्रतिक्रिया" },
        { top: "होमवर्क समय", bottom: "खेल्ने समय" }
    ],
    relationship: [
        { top: "सम्बन्धको सुरु", bottom: "अब" },
        { top: "प्रेमी को वादा", bottom: "वास्तविकता" },
        { top: "मेरो प्रेमी", bottom: "मेरी सहेली को प्रेमी" },
        { top: "प्रेमपत्र लेख्दा", bottom: "भेट्टिएर" },
        { top: "लम्बी दूरी को सम्बन्ध", bottom: "वास्तविकता" }
    ],
    work: [
        { top: "काम सुरु गर्दा", bottom: "अब" },
        { top: "बस को समय", bottom: "काम को समय" },
        { top: "बस को समय", bottom: "घर फर्किएर" },
        { top: "कार्यालय मिटिङ", bottom: "मेरो ध्यान" },
        { top: "सोमबार काम", bottom: "शुक्रबार काम" }
    ],
    travel: [
        { top: "यात्रा गर्दा", bottom: "वास्तविकता" },
        { top: "यात्रा योजना", bottom: "वास्तविक यात्रा" },
        { top: "नयाँ ठाउँ", bottom: "मेरो फोटो" },
        { top: "यात्रा बजेट", bottom: "वास्तविक खर्च" },
        { top: "यात्रा को सपना", bottom: "वास्तविकता" }
    ],
    food: [
        { top: "रेस्टुरेन्टको तस्विर", bottom: "वास्तविक खाना" },
        { top: "खाना अर्डर गर्दा", bottom: "आउछ" },
        { top: "मेरो पसंदको खाना", bottom: "मेरो बजेट" },
        { top: "खाना बनाउँदा", bottom: "वास्तविक परिणाम" },
        { top: "रेसिपी भिडियो", bottom: "मेरो खाना" }
    ]
};

// Meme templates
const memeTemplates = {
    drake: {
        name: "ड्रेक मेम",
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
        name: "विचलित प्रेमी",
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
        name: "सफलता बालक",
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
        name: "विस्तारित दिमाग",
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
        name: "नेपाली हास्य",
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
const useSuggestionBtns = document.querySelectorAll(".use-btn");

let currentCategory = "general";
let memeGalleryArray = [];

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    updateSuggestions();
    loadGalleryFromStorage();
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

// Update suggestions based on category
function updateSuggestions() {
    const suggestions = categorySuggestions[currentCategory] || categorySuggestions.general;
    suggestionsList.innerHTML = "";

    suggestions.forEach(suggestion => {
        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.innerHTML = `
            <p>"${suggestion.top}" - "${suggestion.bottom}"</p>
        `;
        div.addEventListener("click", () => {
            topTextInput.value = suggestion.top;
            bottomTextInput.value = suggestion.bottom;
            generateMeme();
        });
        suggestionsList.appendChild(div);
    });
}

// Emoji buttons
emojiButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const emoji = btn.dataset.emoji;
        topTextInput.value += emoji;
    });
});

// Use suggestion buttons
useSuggestionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const text = btn.dataset.text;
        topTextInput.value = text;
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
                alert("मेम क्लिपबोर्डमा कपी गरियो!");
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
                title: "नेपाली मेम",
                text: "मेरो बनाएको मेम हेर्नुहोस्!"
            });
        });
    } else {
        alert("तपाईंको ब्राउजरले साझेदारी समर्थन गर्दैन।");
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    topTextInput.value = "";
    bottomTextInput.value = "";
    memePreview.innerHTML = `
        <div class="meme-placeholder">
            <i class="fas fa-image"></i>
            <p>तपाईंको मेम यहाँ देखिनेछ</p>
        </div>
    `;
    downloadBtn.disabled = true;
    shareBtn.disabled = true;
    copyBtn.disabled = true;
});

// Clear gallery
clearGalleryBtn.addEventListener("click", () => {
    if (confirm("के तपाई सबै मेमहरू हटाउन निश्चित हुनुहुन्छ?")) {
        memeGallery.innerHTML = `
            <div class="gallery-placeholder">
                <p>तपाईंले बनाएका मेमहरू यहाँ देखिनेछन्</p>
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
