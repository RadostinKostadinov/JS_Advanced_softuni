function printDeckOfCards(cards) {
    const myCards = [];
    cards.forEach(card => myCards.push(createCard(card.slice(0, card.length - 1), card.slice(card.length - 1))));
    
    let isInvalid = false;
    for (const card of myCards) {
        if(card.includes('Invalid')){
            isInvalid = card;
        }
    }
    
    if(isInvalid){
        console.log(isInvalid);
    } else {
        console.log(myCards.join(' '));
    }
    function createCard(card, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };

        if (!validFaces.includes(card)) {
            return `Invalid card: ${card}${suit}`;
        }
        if (!(Object.keys(validSuits)).includes(suit)) {
            return `Invalid card: ${card}${suit}`;
        }

        suit = validSuits[suit];
        return `${card}${suit}`;

    }

}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
