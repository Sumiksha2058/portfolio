// Trending AI Meme Generator - Automatic Meme Creation Based on Trends

// Trending topics database with AI-generated meme templates
const trendingTopics = {
    nepal_election: {
        name_en: "Nepal Election 2026",
        name_ne: "नेपाल चुनाव २०२६",
        category: "politics",
        trend_score: 95,
        memes: [
            {
                template: "distracted",
                top_en: "Voters in 2026",
                bottom_en: "RSP's promises",
                top_ne: "२०२६ मा मतदाता",
                bottom_ne: "आरएसपीको वादा",
                emoji: "🗳️"
            },
            {
                template: "expanding",
                top_en: "Election campaign",
                bottom_en: "Influencers leading it",
                top_ne: "चुनाव अभियान",
                bottom_ne: "इन्फ्लुएन्सर नेतृत्व",
                emoji: "📱"
            },
            {
                template: "drake",
                top_en: "Traditional politics",
                bottom_en: "Digital-first RSP",
                top_ne: "परम्परागत राजनीति",
                bottom_ne: "डिजिटल-पहिलो आरएसपी",
                emoji: "💻"
            }
        ]
    },
    balen_shah: {
        name_en: "Balen Shah Rise",
        name_ne: "बालेन शाह को उदय",
        category: "celebrity",
        trend_score: 88,
        memes: [
            {
                template: "success",
                top_en: "Balen Shah",
                bottom_en: "Becoming PM candidate",
                top_ne: "बालेन शाह",
                bottom_ne: "प्रधानमन्त्री उम्मेदवार",
                emoji: "🎯"
            },
            {
                template: "expanding",
                top_en: "Challenges",
                bottom_en: "Balen's determination",
                top_ne: "चुनौती",
                bottom_ne: "बालेनको दृढ संकल्प",
                emoji: "💪"
            }
        ]
    },
    nepali_sports: {
        name_en: "Nepali Players in EU",
        name_ne: "नेपाली खेलाडी युरोपमा",
        category: "sports",
        trend_score: 75,
        memes: [
            {
                template: "drake",
                top_en: "Playing in Nepal",
                bottom_en: "Playing in Belgium T20",
                top_ne: "नेपालमा खेल्दा",
                bottom_ne: "बेल्जियम T20 मा खेल्दा",
                emoji: "🏏"
            }
        ]
    },
    infrastructure_crisis: {
        name_en: "Bridge Collapse Crisis",
        name_ne: "पुल भत्किने संकट",
        category: "politics",
        trend_score: 82,
        memes: [
            {
                template: "expanding",
                top_en: "Bridge construction",
                bottom_en: "Monsoon arrives",
                top_ne: "पुल निर्माण",
                bottom_ne: "वर्षा आउछ",
                emoji: "🌊"
            }
        ]
    },
    foreign_employment: {
        name_en: "Foreign Employment Rescue",
        name_ne: "विदेश रोजगार उद्दार",
        category: "work",
        trend_score: 78,
        memes: [
            {
                template: "distracted",
                top_en: "Nepali workers",
                bottom_en: "Rescue missions from Cambodia",
                top_ne: "नेपाली कामदार",
                bottom_ne: "कम्बोडिया उद्दार मिशन",
                emoji: "✈️"
            }
        ]
    },
    ai_content: {
        name_en: "AI Influencers",
        name_ne: "एआई इन्फ्लुएन्सर",
        category: "tech",
        trend_score: 92,
        memes: [
            {
                template: "drake",
                top_en: "Real influencers",
                bottom_en: "AI-generated influencers",
                top_ne: "वास्तविक इन्फ्लुएन्सर",
                bottom_ne: "एआई इन्फ्लुएन्सर",
                emoji: "🤖"
            }
        ]
    },
    nostalgia_trend: {
        name_en: "2000s Nostalgia",
        name_ne: "२००० को दशक स्मृति",
        category: "general",
        trend_score: 85,
        memes: [
            {
                template: "expanding",
                top_en: "2000s fashion",
                bottom_en: "Coming back in 2026",
                top_ne: "२००० को फ्यासन",
                bottom_ne: "२०२६ मा फर्किएको",
                emoji: "👖"
            }
        ]
    }
};

// Trending meme templates with auto-generation capability
const autoGenerationTemplates = {
    "expectation_vs_reality": {
        name_en: "Expectation vs Reality",
        name_ne: "अपेक्षा बनाम वास्तविकता",
        generate: function(topic, language) {
            const topics = {
                election: {
                    en: { exp: "Election promises", real: "After election" },
                    ne: { exp: "चुनाव वादा", real: "चुनाव पछि" }
                },
                infrastructure: {
                    en: { exp: "Bridge completion", real: "Monsoon arrives" },
                    ne: { exp: "पुल पूरा", real: "वर्षा आउछ" }
                },
                employment: {
                    en: { exp: "Dream job abroad", real: "Reality check" },
                    ne: { exp: "विदेश सपना", real: "वास्तविकता" }
                }
            };
            const lang = language === 'ne' ? 'ne' : 'en';
            return topics[topic] ? topics[topic][lang] : null;
        }
    },
    "pov_meme": {
        name_en: "POV (Point of View)",
        name_ne: "दृष्टिकोण",
        generate: function(topic, language) {
            const povs = {
                nepali_player: {
                    en: "POV: You're a Nepali player in Belgium T20",
                    ne: "दृष्टिकोण: तपाई बेल्जियम T20 मा नेपाली खेलाडी हुनुहुन्छ"
                },
                voter: {
                    en: "POV: You're voting in Nepal's 2026 election",
                    ne: "दृष्टिकोण: तपाई नेपालको २०२६ चुनावमा मतदान गर्दै हुनुहुन्छ"
                }
            };
            return povs[topic] ? povs[topic][language === 'ne' ? 'ne' : 'en'] : null;
        }
    }
};

// Trending Meme Generator Class
class TrendingMemeGenerator {
    constructor() {
        this.currentLanguage = localStorage.getItem('memeLanguage') || 'en';
        this.generatedMemes = [];
        this.trendingQueue = this.initializeTrendingQueue();
    }

    // Initialize trending queue based on trend scores
    initializeTrendingQueue() {
        const sorted = Object.entries(trendingTopics)
            .sort((a, b) => b[1].trend_score - a[1].trend_score)
            .map(([key, value]) => ({ key, ...value }));
        return sorted;
    }

    // Generate meme from trending topic
    generateTrendingMeme(topicKey = null) {
        const topic = topicKey 
            ? trendingTopics[topicKey] 
            : this.trendingQueue[Math.floor(Math.random() * this.trendingQueue.length)];

        if (!topic || !topic.memes || topic.memes.length === 0) {
            return null;
        }

        const memeTemplate = topic.memes[Math.floor(Math.random() * topic.memes.length)];
        const lang = this.currentLanguage;

        return {
            title: lang === 'ne' ? topic.name_ne : topic.name_en,
            template: memeTemplate.template,
            topText: lang === 'ne' ? memeTemplate.top_ne : memeTemplate.top_en,
            bottomText: lang === 'ne' ? memeTemplate.bottom_ne : memeTemplate.bottom_en,
            emoji: memeTemplate.emoji,
            category: topic.category,
            trendScore: topic.trend_score,
            timestamp: new Date().toISOString()
        };
    }

    // Generate multiple trending memes
    generateBatch(count = 5) {
        const batch = [];
        for (let i = 0; i < count; i++) {
            const meme = this.generateTrendingMeme();
            if (meme) {
                batch.push(meme);
            }
        }
        this.generatedMemes = batch;
        return batch;
    }

    // Get trending meme by category
    getTrendingByCategory(category) {
        return Object.entries(trendingTopics)
            .filter(([_, topic]) => topic.category === category)
            .map(([key, topic]) => this.generateTrendingMeme(key));
    }

    // Get top trending memes
    getTopTrending(limit = 3) {
        return this.trendingQueue
            .slice(0, limit)
            .map(topic => this.generateTrendingMeme(topic.key));
    }

    // Auto-refresh trending memes every 5 minutes
    startAutoRefresh(callback, interval = 300000) {
        this.refreshInterval = setInterval(() => {
            const newMemes = this.generateBatch(3);
            if (callback) {
                callback(newMemes);
            }
        }, interval);
    }

    // Stop auto-refresh
    stopAutoRefresh() {
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
    }

    // Get meme statistics
    getStats() {
        return {
            totalTopics: Object.keys(trendingTopics).length,
            totalMemes: this.generatedMemes.length,
            topTrend: this.trendingQueue[0],
            categories: [...new Set(Object.values(trendingTopics).map(t => t.category))]
        };
    }

    // Set language preference
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('memeLanguage', lang);
    }
}

// Initialize the trending meme generator
const trendingMemeGen = new TrendingMemeGenerator();

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TrendingMemeGenerator,
        trendingMemeGen,
        trendingTopics,
        autoGenerationTemplates
    };
}
