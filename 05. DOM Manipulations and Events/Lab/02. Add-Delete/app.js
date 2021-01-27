function addItem() {
    document.getElementById('items').addEventListener('click', onClick);
    const newText = document.getElementById('newText');

    function onClick(ev) {
        if (ev.target.textContent == '[Delete]') {
            ev.target.parentNode.remove();
        }

    }

    const newLiEl = document.createElement('LI');
    newLiEl.textContent = newText.value;
    newText.value = '';
    const newAEl = document.createElement('A');
    newAEl.textContent = '[Delete]';
    newAEl.setAttribute('href', '#');
    newLiEl.appendChild(newAEl);
    document.getElementById('items').appendChild(newLiEl);
}
//<li>test <a href='#'>[Delete]</a> </li>
//ev.target = The element, which was clicked by user.
//ev.currentTarget = The element, where listener is attached