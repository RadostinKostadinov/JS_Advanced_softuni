function solution() {
    document.querySelector('section.card div button').addEventListener('click', onAdd);
    const nameField = document.querySelector('section.card div input[type=text]');
    const [list, sent, discraded] = document.querySelectorAll('ul');

    function onAdd() {
        const name = nameField.value;
        nameField.value = '';

        const div = e('li', name);
        div.className = 'gift';
        const sendButton = e('button', 'Send');
        sendButton.className = 'sendButton';
        sendButton.addEventListener('click', () => buttonClick(name, div, sent));
        const discardButton = e('button', 'Discard');
        discardButton.className = 'discardButton';
        discardButton.addEventListener('click', () => buttonClick(name, div, discraded));

        div.appendChild(sendButton);
        div.appendChild(discardButton);

        list.appendChild(div);
        sortList();

    }

    function buttonClick(name, div, list) {
        div.remove();
        const row = e('li', name);
        list.appendChild(row);
    }

    function sortList() {
        Array
            .from(list.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(row => list.appendChild(row));
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