function playingCards(card, suit){
    const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    if(!validFaces.includes(card)){
        throw new Error('Invalid card face');
    }
    if(!(Object.keys(validSuits)).includes(suit)){
        throw new Error('Invalid card suit');
    }

    suit = validSuits[suit];
    return {
        card,
        suit,
        toString: function(){
            return `${card}${suit}`;
        },
    };
}

console.log(playingCards('A', 'S'));
console.log(playingCards('10', 'H'));
console.log(playingCards('1', 'C'));