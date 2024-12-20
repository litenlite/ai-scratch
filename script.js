const suits = ['♠', '♣', '♥', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];
let currentCard = null;

function initializeDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const color = card.suit === '♥' || card.suit === '♦' ? 'red' : 'black';
    cardElement.innerHTML = `
        <div class="card-content" style="color: ${color}">
            <div class="card-value">${card.value}</div>
            <div class="card-suit">${card.suit}</div>
        </div>
    `;
    return cardElement;
}

function showNextCard() {
    const deckContainer = document.getElementById('deck');
    deckContainer.innerHTML = '';
    
    if (deck.length === 0) {
        deckContainer.innerHTML = '<div class="no-cards">No more cards!</div>';
        return;
    }
    
    currentCard = deck.pop();
    const cardElement = createCardElement(currentCard);
    deckContainer.appendChild(cardElement);
}

function handleDecision(accepted) {
    if (!currentCard) return;
    
    const cardElement = document.querySelector('.card');
    const targetPile = accepted ? 'accepted-pile' : 'rejected-pile';
    const direction = accepted ? '300px' : '-300px';
    
    cardElement.style.transform = `translateX(${direction}) rotate(${accepted ? '45deg' : '-45deg'})`;
    cardElement.style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById(targetPile).appendChild(createCardElement(currentCard));
        showNextCard();
    }, 300);
}

// Event Listeners
document.getElementById('accept-btn').addEventListener('click', () => handleDecision(true));
document.getElementById('reject-btn').addEventListener('click', () => handleDecision(false));

// Initialize the game
initializeDeck();
showNextCard();
