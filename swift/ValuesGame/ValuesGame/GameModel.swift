import Foundation

class GameModel: ObservableObject {
    @Published var player1Deck: [Card]
    @Published var player2Deck: [Card]
    @Published var currentPlayer: Int = 1
    @Published var player1Accepted: [Card] = []
    @Published var player2Accepted: [Card] = []
    @Published var player1Rejected: [Card] = []
    @Published var player2Rejected: [Card] = []
    @Published var currentCard: Card?
    @Published var showVennDiagram: Bool = false
    
    init() {
        player1Deck = vocabularyCards.shuffled()
        player2Deck = vocabularyCards.shuffled()
        currentCard = player1Deck.last
    }
    
    func handleDecision(accepted: Bool) {
        guard let card = currentCard else { return }
        
        if accepted {
            let currentAccepted = currentPlayer == 1 ? player1Accepted : player2Accepted
            if currentAccepted.count >= 10 { return }
            
            if currentPlayer == 1 {
                player1Accepted.append(card)
            } else {
                player2Accepted.append(card)
            }
        } else {
            if currentPlayer == 1 {
                player1Rejected.append(card)
            } else {
                player2Rejected.append(card)
            }
        }
        
        if currentPlayer == 1 {
            player1Deck.removeLast()
            currentCard = player1Deck.last
        } else {
            player2Deck.removeLast()
            currentCard = player2Deck.last
        }
    }
    
    func switchPlayer() {
        currentPlayer = currentPlayer == 1 ? 2 : 1
        currentCard = currentPlayer == 1 ? player1Deck.last : player2Deck.last
    }
}
