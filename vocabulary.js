const vocabularyCards = [
    {
        word: "Serendipity",
        definition: "Finding something good without looking for it",
        emoji: "🍀"
    },
    {
        word: "Wanderlust",
        definition: "A strong desire to travel and explore",
        emoji: "🌎"
    },
    {
        word: "Resilience",
        definition: "The ability to recover quickly from difficulties",
        emoji: "💪"
    },
    {
        word: "Euphoria",
        definition: "An intense feeling of happiness and excitement",
        emoji: "🌟"
    },
    {
        word: "Mindfulness",
        definition: "The practice of being present and aware",
        emoji: "🧘"
    },
    {
        word: "Harmony",
        definition: "A consistent, orderly, or pleasing arrangement",
        emoji: "☯️"
    },
    {
        word: "Innovation",
        definition: "A new method, idea, or product",
        emoji: "💡"
    },
    {
        word: "Gratitude",
        definition: "The quality of being thankful",
        emoji: "🙏"
    },
    {
        word: "Perseverance",
        definition: "Persistence in doing something despite difficulty",
        emoji: "🎯"
    },
    {
        word: "Tranquility",
        definition: "The quality or state of being calm",
        emoji: "🌅"
    },
    {
        word: "Ephemeral",
        definition: "Lasting for a very short time",
        emoji: "⏳"
    },
    {
        word: "Melancholy",
        definition: "A feeling of pensive sadness",
        emoji: "😔"
    },
    {
        word: "Luminous",
        definition: "Full of or shedding light; bright or shining",
        emoji: "✨"
    },
    {
        word: "Nostalgia",
        definition: "A sentimental longing for the past",
        emoji: "📷"
    },
    {
        word: "Ethereal",
        definition: "Extremely delicate and light; heavenly",
        emoji: "🌫️"
    },
    {
        word: "Synchronicity",
        definition: "The simultaneous occurrence of events that appear related",
        emoji: "⚡"
    },
    {
        word: "Whimsical",
        definition: "Playfully quaint or fanciful",
        emoji: "🎠"
    },
    {
        word: "Zenith",
        definition: "The highest point reached by a celestial body",
        emoji: "🌠"
    },
    {
        word: "Cascade",
        definition: "A process whereby something falls or descends in stages",
        emoji: "🌊"
    },
    {
        word: "Labyrinth",
        definition: "A complicated irregular network of passages",
        emoji: "🌀"
    },
    {
        word: "Effervescent",
        definition: "Vivacious and enthusiastic",
        emoji: "🫧"
    },
    {
        word: "Solitude",
        definition: "The state of being alone",
        emoji: "🌲"
    },
    {
        word: "Quintessential",
        definition: "Representing the most perfect example of a quality",
        emoji: "💎"
    },
    {
        word: "Petrichor",
        definition: "The pleasant smell that follows rain falling on dry ground",
        emoji: "🌧️"
    },
    {
        word: "Eloquent",
        definition: "Fluent or persuasive in speaking or writing",
        emoji: "🎭"
    },
    {
        word: "Enigma",
        definition: "Something hard to understand or explain",
        emoji: "🔮"
    },
    {
        word: "Sublime",
        definition: "Of such excellence or beauty as to inspire great admiration",
        emoji: "🗻"
    },
    {
        word: "Sonder",
        definition: "The realization that each random passerby has a life as vivid as your own",
        emoji: "👥"
    },
    {
        word: "Ineffable",
        definition: "Too great or extreme to be expressed in words",
        emoji: "😶"
    },
    {
        word: "Epiphany",
        definition: "A moment of sudden and great revelation",
        emoji: "💫"
    },
    {
        word: "Halcyon",
        definition: "Denoting a period of time that was idyllically happy and peaceful",
        emoji: "🕊️"
    },
    {
        word: "Nebulous",
        definition: "Unclear, vague, or ill-defined",
        emoji: "🌌"
    },
    {
        word: "Axiom",
        definition: "A statement or proposition that is self-evidently true",
        emoji: "📐"
    },
    {
        word: "Mercurial",
        definition: "Subject to sudden or unpredictable changes of mood",
        emoji: "🎭"
    },
    {
        word: "Pristine",
        definition: "In its original condition; unspoiled",
        emoji: "❄️"
    },
    {
        word: "Quixotic",
        definition: "Exceedingly idealistic; unrealistic and impractical",
        emoji: "🦄"
    },
    {
        word: "Vellichor",
        definition: "The strange wistfulness of used bookstores",
        emoji: "📚"
    },
    {
        word: "Apricity",
        definition: "The warmth of the sun in winter",
        emoji: "☀️"
    },
    {
        word: "Chrysalism",
        definition: "The amniotic tranquility of being indoors during a thunderstorm",
        emoji: "⛈️"
    },
    {
        word: "Monachopsis",
        definition: "The subtle but persistent feeling of being out of place",
        emoji: "🚶"
    },
    {
        word: "Occhiolism",
        definition: "The awareness of the smallness of your perspective",
        emoji: "🔭"
    },
    {
        word: "Onism",
        definition: "The frustration of being stuck in just one body that inhabits only one place",
        emoji: "🧍"
    },
    {
        word: "Kuebiko",
        definition: "A state of exhaustion inspired by acts of senseless violence",
        emoji: "😔"
    },
    {
        word: "Liberosis",
        definition: "The desire to care less about things",
        emoji: "🦋"
    },
    {
        word: "Altschmerz",
        definition: "Weariness with the same old issues that you've always had—the same boring flaws",
        emoji: "😮‍💨"
    },
    {
        word: "Numinous",
        definition: "Having a strong religious or spiritual quality",
        emoji: "🕯️"
    },
    {
        word: "Sempiternal",
        definition: "Eternal and unchanging; everlasting",
        emoji: "♾️"
    },
    {
        word: "Limerence",
        definition: "The state of being infatuated with another person",
        emoji: "💝"
    },
    {
        word: "Syzygy",
        definition: "The alignment of three celestial bodies",
        emoji: "🌓"
    },
    {
        word: "Kalopsia",
        definition: "The delusion of things being more beautiful than they are",
        emoji: "🌈"
    },
    {
        word: "Zenosyne",
        definition: "The sense that time keeps going faster as you get older",
        emoji: "⏰"
    },
    {
        word: "Chrysism",
        definition: "The tendency of undervaluing something if it's abundant",
        emoji: "💫"
    },
    {
        word: "Novaturient",
        definition: "Desiring or seeking powerful change in one's life",
        emoji: "🦋"
    },
    {
        word: "Metanoia",
        definition: "The journey of changing one's mind, heart, or way of life",
        emoji: "🔄"
    },
    {
        word: "Yugen",
        definition: "A profound awareness of the universe that triggers emotional responses",
        emoji: "🌌"
    },
    {
        word: "Fernweh",
        definition: "An ache for distant places; the craving for travel",
        emoji: "✈️"
    },
    {
        word: "Meraki",
        definition: "To do something with soul, creativity, or love",
        emoji: "💖"
    },
    {
        word: "Querencia",
        definition: "A place where one feels safe and at home",
        emoji: "🏡"
    },
    {
        word: "Cafuné",
        definition: "The act of tenderly running fingers through someone's hair",
        emoji: "💆"
    },
    {
        word: "Komorebi",
        definition: "Sunlight filtering through trees",
        emoji: "🌳"
    }
];
