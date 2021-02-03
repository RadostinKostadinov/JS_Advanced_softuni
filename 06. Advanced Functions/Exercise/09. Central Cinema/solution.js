function solve() {
    document.querySelector('#container button').addEventListener('click', addMovieToScreen);
    const addMovieDiv = document.getElementById('container');
    const moviesOnScrUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    document.querySelector('#archive button').addEventListener('click', clear);
    

    function addMovieToScreen(ev) {
        ev.preventDefault();

        const movieName = addMovieDiv.children[0].value;
        const hall = addMovieDiv.children[1].value;
        let price = addMovieDiv.children[2].value;

        addMovieDiv.children[0].value = '';
        addMovieDiv.children[1].value = '';
        addMovieDiv.children[2].value = '';
        if (movieName != '' && hall != '' && !isNaN(price) && price != '') {
            price = Number(price).toFixed(2);

            const inputEl = e('input');
            inputEl.setAttribute('placeholder', 'Tickets Sold');

            const buttonEl = e('button', 'Archive');
            buttonEl.addEventListener('click', Archive);

            const liElement = e('li',
                e('span', movieName),
                e('strong', 'Hall: ' + hall),
                e('div',
                    e('strong', `${price}`),
                    inputEl,
                    buttonEl
                ),
            );

            moviesOnScrUl.appendChild(liElement);

        }
    }

    function Archive(el) {
        el.preventDefault();
        let ticketsSold = el.target.parentNode.querySelector('input').value;

        if (!isNaN(ticketsSold) && ticketsSold != '') {
            const movieName = el.target.parentNode.parentNode.children[0].textContent;
            const ticketPrice = Number(el.target.parentNode.children[0].textContent);
            const totalPrice = ticketPrice * Number(ticketsSold);

            const buttonDelete = e('button', 'Delete');
            buttonDelete.addEventListener('click', Delete);

            const liEl = e('li',
                e('span', movieName),
                e('strong', 'Total amount: ' + totalPrice.toFixed(2)),
                buttonDelete
            );

            archiveUl.appendChild(liEl);
        };
    }

    function Delete(el) {
        el.target.parentNode.remove();
    };

    function clear(){
        archiveUl.innerHTML = '';
    }

    function e(type, ...content) {
        const result = document.createElement(type);

        content.forEach(c => {
            if (typeof c == 'string' || typeof c == 'number') {
                const node = document.createTextNode(c);
                result.appendChild(node);
            } else {
                result.appendChild(c);
            }
        });
        return result;
    }
}