import Foundation

struct Card: Identifiable, Equatable {
    let id = UUID()
    let word: String
    let definition: String
    let emoji: String
    
    static func == (lhs: Card, rhs: Card) -> Bool {
        lhs.id == rhs.id
    }
}

// Sample vocabulary cards data
let vocabularyCards: [Card] = [
    Card(word: "Acceptance", definition: "The willingness to embrace reality or situations without attempting to change them", emoji: "🤗"),
    Card(word: "Accountability", definition: "Taking responsibility for one's actions and their consequences", emoji: "✅"),
    Card(word: "Adaptability", definition: "The ability to adjust to new conditions or circumstances", emoji: "🦎"),
    // ... Add all other cards from the original vocabulary.js
]
