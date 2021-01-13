function squareOfStars(number = 5){
    number = Number(number);
    for(let i = 0; i < number; i++){
        let line = '';
        for(let y = 0; y < number; y++){
            line += '* ';
        }
        console.log(line);
    }
}
squareOfStars();