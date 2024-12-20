// Create deck of cards
const suits = ['♠', '♣', '♥', '♦'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const deck = [];

// Initialize deck
function initializeDeck() {
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value });
        }
    }
}

// Create card elements
function createCardElements() {
    const deckContainer = document.getElementById('deck');
    const numVisibleCards = 5; // Number of visible stacked cards
    
    for (let i = 0; i < numVisibleCards; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.transform = `translateY(${i * 2}px) translateX(${i * 1}px) rotate(${i * 0.5}deg)`;
        cardElement.addEventListener('click', () => selectRandomCard());
        deckContainer.appendChild(cardElement);
    }
}

// Select and display random card
function selectRandomCard() {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    const selectedCardDiv = document.getElementById('selected-card');
    const color = card.suit === '♥' || card.suit === '♦' ? 'red' : 'black';
    selectedCardDiv.innerHTML = `
        <h2 style="color: ${color}">
            ${card.value}${card.suit}
        </h2>
    `;
}

// Initialize the game
initializeDeck();
createCardElements();
