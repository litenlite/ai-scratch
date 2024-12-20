let deck = [];
let currentCard = null;
let currentPlayer = 1;
let player1Accepted = [];
let player2Accepted = [];

function initializeDeck() {
    deck = [...vocabularyCards];
    shuffleDeck();
    console.log(`Total number of cards in deck: ${vocabularyCards.length}`);
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
    
    document.getElementById('card-count').textContent = `${deck.length} cards`;
    
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
    
    if (accepted) {
        if (currentPlayer === 1) {
            player1Accepted.push(currentCard.word);
        } else {
            player2Accepted.push(currentCard.word);
        }
        drawVenn(player1Accepted, player2Accepted);
    }
    
    cardElement.style.transform = `translateX(${direction}) rotate(${accepted ? '45deg' : '-45deg'})`;
    cardElement.style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById(targetPile).appendChild(createCardElement(currentCard));
        showNextCard();
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
    const pile = document.getElementById(pileId);
    
    modalTitle.textContent = pileId === 'accepted-pile' ? 'Accepted Cards' : 'Rejected Cards';
    modalCards.innerHTML = '';
    
    const cards = pile.querySelectorAll('.card');
    cards.forEach(pileCard => {
        const cardClone = pileCard.cloneNode(true);
        cardClone.style.position = 'relative';
        cardClone.style.transform = 'none';
        cardClone.style.opacity = '1';
        cardClone.style.margin = '10px';
        cardClone.style.cursor = 'pointer';
        
        cardClone.addEventListener('click', () => {
            returnCardToDeck(cardClone, pileCard);
            modal.style.display = 'none';
        });
        
        modalCards.appendChild(cardClone);
    });
    
    modal.style.display = 'block';
}

// Event Listeners
document.getElementById('accept-btn').addEventListener('click', () => handleDecision(true));
document.getElementById('reject-btn').addEventListener('click', () => handleDecision(false));

document.getElementById('player1-btn').addEventListener('click', () => {
    currentPlayer = 1;
    document.getElementById('player1-btn').classList.add('active');
    document.getElementById('player2-btn').classList.remove('active');
    initializeDeck();
    showNextCard();
});

document.getElementById('player2-btn').addEventListener('click', () => {
    currentPlayer = 2;
    document.getElementById('player2-btn').classList.add('active');
    document.getElementById('player1-btn').classList.remove('active');
    initializeDeck();
    showNextCard();
});
document.getElementById('accepted-pile').addEventListener('click', () => showPileCards('accepted-pile'));
document.getElementById('rejected-pile').addEventListener('click', () => showPileCards('rejected-pile'));
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Initialize the game
initializeDeck();
showNextCard();
