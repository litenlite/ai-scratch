function drawVenn(player1Values, player2Values) {
    const intersection = player1Values.filter(value => 
        player2Values.includes(value)
    );
    
    const uniqueToPlayer1 = player1Values.filter(value => 
        !player2Values.includes(value)
    );
    
    const uniqueToPlayer2 = player2Values.filter(value => 
        !player1Values.includes(value)
    );
    
    const vennContainer = document.getElementById('venn-diagram');
    vennContainer.innerHTML = `
        <div class="venn-circle player1">
            <h3>Player 1</h3>
            <div class="values">${uniqueToPlayer1.join(', ')}</div>
        </div>
        <div class="venn-intersection">
            <h3>Shared Values</h3>
            <div class="values">${intersection.join(', ')}</div>
        </div>
        <div class="venn-circle player2">
            <h3>Player 2</h3>
            <div class="values">${uniqueToPlayer2.join(', ')}</div>
        </div>
    `;
}
