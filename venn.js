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
        <div class="values-left">${uniqueToPlayer1.join('<br>')}</div>
        <div class="venn-circles">
            <div class="venn-circle player1"></div>
            <div class="venn-intersection">
                <div class="values">${intersection.join('<br>')}</div>
            </div>
            <div class="venn-circle player2"></div>
        </div>
        <div class="values-right">${uniqueToPlayer2.join('<br>')}</div>
    `;
}
