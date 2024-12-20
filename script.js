let player1Deck = [];
let player2Deck = [];
let currentCard = null;
let currentPlayer = 1;
let player1Accepted = [];
let player2Accepted = [];
let player1Rejected = [];
let player2Rejected = [];
let lastShownCard = null;

function initializeDeck() {
    player1Deck = [...vocabularyCards];
    player2Deck = [...vocabularyCards];
    shuffleDeck(player1Deck);
    shuffleDeck(player2Deck);
    console.log(`Cards in each deck: ${vocabularyCards.length}`);
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
        <div class="card-content">
            <div class="card-emoji">${card.emoji}</div>
            <div class="card-word">${card.word}</div>
            <div class="card-definition">${card.definition}</div>
        </div>
    `;
    return cardElement;
}

function showNextCard() {
    const deckContainer = document.getElementById('deck');
    deckContainer.innerHTML = '';
    
    const currentDeck = currentPlayer === 1 ? player1Deck : player2Deck;
    document.getElementById('card-count').textContent = `${currentDeck.length} cards`;
    
    if (currentDeck.length === 0) {
        deckContainer.innerHTML = '<div class="no-cards">No more cards!</div>';
        return;
    }
    
    currentCard = currentDeck.pop();
    lastShownCard = currentCard;
    const cardElement = createCardElement(currentCard);
    deckContainer.appendChild(cardElement);
}

function handleDecision(accepted) {
    if (!currentCard) return;
    
    if (accepted) {
        const currentAccepted = currentPlayer === 1 ? player1Accepted : player2Accepted;
        if (currentAccepted.length >= 10) {
            alert("You've already selected 10 values! Please reject this card or remove some accepted cards first.");
            return;
        }
        if (currentAccepted.length === 9) {
            alert("Warning: This is your 10th and final value selection!");
        }
    }
    
    const deckCard = document.querySelector('#deck .card');
    const direction = accepted ? '300px' : '-300px';
    
    // Animate the card in deck first
    deckCard.style.transform = `translateX(${direction}) rotate(${accepted ? '45deg' : '-45deg'})`;
    deckCard.style.opacity = '0';
    
    // Add card to appropriate pile array
    if (accepted) {
        if (currentPlayer === 1) {
            player1Accepted.push(currentCard);
        } else {
            player2Accepted.push(currentCard);
        }
        drawVenn(
            player1Accepted.map(card => card.word),
            player2Accepted.map(card => card.word)
        );
    } else {
        if (currentPlayer === 1) {
            player1Rejected.push(currentCard);
        } else {
            player2Rejected.push(currentCard);
        }
    }
    
    setTimeout(() => {
        updatePileDisplay(); // Update the piles first
        showNextCard(); // Then show the next card
    }, 300);
}

function returnCardToDeck(card, pileCard) {
    const word = card.querySelector('.card-word').textContent;
    const definition = card.querySelector('.card-definition').textContent;
    const emoji = card.querySelector('.card-emoji').textContent;
    deck.push({ word, definition, emoji });
    pileCard.remove();
    showNextCard();
}

function showPileCards(pileId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCards = document.getElementById('modal-cards');
    
    const currentAccepted = currentPlayer === 1 ? player1Accepted : player2Accepted;
    modalTitle.textContent = pileId === 'accepted-pile' ? 
        `Accepted Cards (${currentAccepted.length}/10)` : 'Rejected Cards';
    modalCards.innerHTML = '';
    
    const cards = pileId === 'accepted-pile' 
        ? (currentPlayer === 1 ? player1Accepted : player2Accepted)
        : (currentPlayer === 1 ? player1Rejected : player2Rejected);
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardElement.style.position = 'relative';
        cardElement.style.transform = 'none';
        cardElement.style.opacity = '1';
        cardElement.style.margin = '10px';
        cardElement.style.cursor = 'pointer';
        
        cardElement.addEventListener('click', () => {
            const cardArray = pileId === 'accepted-pile'
                ? (currentPlayer === 1 ? player1Accepted : player2Accepted)
                : (currentPlayer === 1 ? player1Rejected : player2Rejected);
            const index = cardArray.indexOf(card);
            if (index > -1) {
                cardArray.splice(index, 1);
                if (currentPlayer === 1) {
                    player1Deck.push(card);
                } else {
                    player2Deck.push(card);
                }
                showNextCard();
                modal.style.display = 'none';
                updatePileDisplay();
            }
        });
        
        modalCards.appendChild(cardElement);
    });
    
    modal.style.display = 'block';
}

// Event Listeners
document.getElementById('accept-btn').addEventListener('click', () => handleDecision(true));
document.getElementById('reject-btn').addEventListener('click', () => handleDecision(false));

function updatePileDisplay() {
    const acceptedPile = document.getElementById('accepted-pile');
    const rejectedPile = document.getElementById('rejected-pile');
    
    // Clear existing cards
    acceptedPile.innerHTML = '<h3>Accepted</h3>';
    rejectedPile.innerHTML = '<h3>Rejected</h3>';
    
    // Add current player's cards
    const acceptedCards = currentPlayer === 1 ? player1Accepted : player2Accepted;
    const rejectedCards = currentPlayer === 1 ? player1Rejected : player2Rejected;
    
    // Add cards in reverse order to maintain visual stacking
    [...acceptedCards].reverse().forEach(card => {
        const cardEl = createCardElement(card);
        cardEl.style.position = 'relative';
        acceptedPile.appendChild(cardEl);
    });
    
    [...rejectedCards].reverse().forEach(card => {
        const cardEl = createCardElement(card);
        cardEl.style.position = 'relative';
        rejectedPile.appendChild(cardEl);
    });
}

document.getElementById('player1-btn').addEventListener('click', () => {
    if (currentPlayer === 1) return; // Don't switch if already on player 1
    currentPlayer = 1;
    document.getElementById('player1-btn').classList.add('active');
    document.getElementById('player2-btn').classList.remove('active');
    document.getElementById('card-count').textContent = `${player1Deck.length} cards`;
    updatePileDisplay();
    
    // If the last shown card is in player 1's deck, shuffle it
    if (lastShownCard && player1Deck.includes(lastShownCard)) {
        const index = player1Deck.indexOf(lastShownCard);
        if (index > -1) {
            player1Deck.splice(index, 1);
            player1Deck.push(lastShownCard);
            shuffleDeck(player1Deck);
        }
    }
    showNextCard();
});

document.getElementById('player2-btn').addEventListener('click', () => {
    if (currentPlayer === 2) return; // Don't switch if already on player 2
    currentPlayer = 2;
    document.getElementById('player2-btn').classList.add('active');
    document.getElementById('player1-btn').classList.remove('active');
    document.getElementById('card-count').textContent = `${player2Deck.length} cards`;
    updatePileDisplay();
    
    // If the last shown card is in player 2's deck, shuffle it
    if (lastShownCard && player2Deck.includes(lastShownCard)) {
        const index = player2Deck.indexOf(lastShownCard);
        if (index > -1) {
            player2Deck.splice(index, 1);
            player2Deck.push(lastShownCard);
            shuffleDeck(player2Deck);
        }
    }
    showNextCard();
});
document.getElementById('accepted-pile').addEventListener('click', () => showPileCards('accepted-pile'));
document.getElementById('rejected-pile').addEventListener('click', () => showPileCards('rejected-pile'));
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Add show values button handler
document.getElementById('show-values-btn').addEventListener('click', () => {
    const vennContainer = document.getElementById('venn-container');
    const button = document.getElementById('show-values-btn');
    if (vennContainer.style.display === 'none') {
        vennContainer.style.display = 'block';
        button.textContent = 'Hide Shared Values';
    } else {
        vennContainer.style.display = 'none';
        button.textContent = 'Show Shared Values';
    }
});

// Initialize the game
initializeDeck();
showNextCard();
