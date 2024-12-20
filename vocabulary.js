const vocabularyCards = [
    {
        word: "Acceptance",
        definition: "The willingness to embrace reality or situations without attempting to change them",
        emoji: "🤗"
    },
    {
        word: "Accountability",
        definition: "Taking responsibility for one's actions and their consequences",
        emoji: "✅"
    },
    {
        word: "Adaptability",
        definition: "The ability to adjust to new conditions or circumstances",
        emoji: "🦎"
    },
    {
        word: "Authenticity",
        definition: "Being true to one's own personality, spirit, or character",
        emoji: "💫"
    },
    {
        word: "Balance",
        definition: "A state of equilibrium or harmonious arrangement",
        emoji: "⚖️"
    },
    {
        word: "Benevolence",
        definition: "The quality of being well-meaning and kind",
        emoji: "🤲"
    },
    {
        word: "Commitment",
        definition: "The state of being dedicated to a cause or activity",
        emoji: "🎯"
    },
    {
        word: "Compassion",
        definition: "Sympathetic concern for the sufferings of others",
        emoji: "💗"
    },
    {
        word: "Confidence",
        definition: "The feeling of self-assurance arising from appreciation of one's abilities",
        emoji: "🦋"
    },
    {
        word: "Cooperation",
        definition: "Working together for a common purpose or benefit",
        emoji: "🤝"
    },
    {
        word: "Creativity",
        definition: "The use of imagination or original ideas to create something",
        emoji: "🎨"
    },
    {
        word: "Curiosity",
        definition: "A strong desire to know or learn something",
        emoji: "🔍"
    },
    {
        word: "Determination",
        definition: "Firmness of purpose; resoluteness",
        emoji: "🎯"
    },
    {
        word: "Dignity",
        definition: "The quality of being worthy of honor or respect",
        emoji: "👑"
    },
    {
        word: "Discipline",
        definition: "Training to act in accordance with rules and self-control",
        emoji: "⏰"
    },
    {
        word: "Empathy",
        definition: "The ability to understand and share the feelings of others",
        emoji: "🫂"
    },
    {
        word: "Excellence",
        definition: "The quality of being outstanding or extremely good",
        emoji: "🏆"
    },
    {
        word: "Fairness",
        definition: "Impartial and just treatment without favoritism or discrimination",
        emoji: "⚖️"
    },
    {
        word: "Forgiveness",
        definition: "The action of forgiving or being forgiven",
        emoji: "🕊️"
    },
    {
        word: "Gratitude",
        definition: "The quality of being thankful and appreciative",
        emoji: "🙏"
    },
    {
        word: "Honesty",
        definition: "The quality of being truthful and sincere",
        emoji: "💎"
    },
    {
        word: "Humility",
        definition: "Freedom from pride or arrogance",
        emoji: "🌱"
    },
    {
        word: "Initiative",
        definition: "The ability to assess and initiate things independently",
        emoji: "🚀"
    },
    {
        word: "Integrity",
        definition: "The quality of being honest and having strong moral principles",
        emoji: "🛡️"
    },
    {
        word: "Justice",
        definition: "Just behavior or treatment; fairness",
        emoji: "⚖️"
    },
    {
        word: "Leadership",
        definition: "The action of leading a group of people or an organization",
        emoji: "👥"
    },
    {
        word: "Learning",
        definition: "The acquisition of knowledge or skills through study or experience",
        emoji: "📚"
    },
    {
        word: "Mindfulness",
        definition: "The quality of being conscious or aware of something",
        emoji: "🧘"
    },
    {
        word: "Optimism",
        definition: "Hopefulness and confidence about the future",
        emoji: "🌅"
    },
    {
        word: "Patience",
        definition: "The capacity to accept delay or trouble calmly",
        emoji: "🧘‍♀️"
    },
    {
        word: "Perseverance",
        definition: "Persistence in doing something despite difficulty",
        emoji: "🏃"
    },
    {
        word: "Purpose",
        definition: "The reason for which something exists or is done",
        emoji: "🎯"
    },
    {
        word: "Reliability",
        definition: "The quality of being trustworthy or performing consistently well",
        emoji: "🤝"
    },
    {
        word: "Resilience",
        definition: "The capacity to recover quickly from difficulties",
        emoji: "🌱"
    },
    {
        word: "Respect",
        definition: "Due regard for the feelings, wishes, or rights of others",
        emoji: "🙌"
    },
    {
        word: "Responsibility",
        definition: "The state of being accountable for something",
        emoji: "💪"
    },
    {
        word: "Self-awareness",
        definition: "Conscious knowledge of one's own character and feelings",
        emoji: "🪞"
    },
    {
        word: "Service",
        definition: "The action of helping or doing work for someone",
        emoji: "💝"
    },
    {
        word: "Simplicity",
        definition: "The quality of being easy to understand or uncomplicated",
        emoji: "⭐"
    },
    {
        word: "Sincerity",
        definition: "The quality of being free from pretense or deceit",
        emoji: "💫"
    },
    {
        word: "Teamwork",
        definition: "The combined action of a group working together effectively",
        emoji: "🤝"
    },
    {
        word: "Thoughtfulness",
        definition: "The quality of being considerate of others' needs and feelings",
        emoji: "💭"
    },
    {
        word: "Tolerance",
        definition: "The ability to accept differences in opinions or behavior",
        emoji: "🤲"
    },
    {
        word: "Trust",
        definition: "Firm belief in the reliability or truth of someone or something",
        emoji: "🤝"
    },
    {
        word: "Understanding",
        definition: "The ability to comprehend or grasp the meaning of something",
        emoji: "🧠"
    },
    {
        word: "Unity",
        definition: "The state of being united or joined as a whole",
        emoji: "🔄"
    },
    {
        word: "Vision",
        definition: "The ability to think about and plan for the future",
        emoji: "🔭"
    },
    {
        word: "Wisdom",
        definition: "The quality of having experience, knowledge, and good judgment",
        emoji: "🦉"
    },
    {
        word: "Wonder",
        definition: "A feeling of amazement and admiration",
        emoji: "✨"
    },
    {
        word: "Worthiness",
        definition: "The quality of being good enough or deserving",
        emoji: "💫"
    },
    {
        word: "Xenial",
        definition: "Hospitable, especially to strangers or foreigners",
        emoji: "🏠"
    },
    {
        word: "Yearning",
        definition: "A deep, persistent longing or desire",
        emoji: "💫"
    },
    {
        word: "Yielding",
        definition: "Inclined to give way to others; flexible and accommodating",
        emoji: "🌿"
    },
    {
        word: "Youth",
        definition: "The quality of being eager, energetic and fresh in spirit",
        emoji: "🌱"
    },
    {
        word: "Zaniness",
        definition: "The quality of being amusingly unconventional and quirky",
        emoji: "🎭"
    },
    {
        word: "Zealousness",
        definition: "Passionate devotion or diligence in pursuit of something",
        emoji: "⚡"
    },
    {
        word: "Zen",
        definition: "A state of calm attentiveness and peaceful harmony",
        emoji: "☯️"
    },
    {
        word: "Zeal",
        definition: "Great energy or enthusiasm in pursuit of a cause or objective",
        emoji: "🔥"
    }
];
