function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Кодирай и изпрати') {
            const text = ev.target.parentNode.querySelector('textarea').value;
            let encodedMessage = '';
            for (let i = 0; i < text.length; i++) {
                encodedMessage += String.fromCharCode(Number(text.charCodeAt(i)) + 1);
            }
            ev.target.parentNode.querySelector('textarea').value = '';
            ev.target.parentNode.parentNode.querySelector('div:nth-of-type(2) textarea').textContent = encodedMessage;
        };

        if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Декодирай и прочети') {
            const text = ev.target.parentNode.parentNode.querySelector('div:nth-of-type(2) textarea').value;
            let decodedMessage = '';
            for (let i = 0; i < text.length; i++) {
                decodedMessage += String.fromCharCode(Number(text.charCodeAt(i)) - 1);
            }
            ev.target.parentNode.querySelector('textarea').value = decodedMessage;
        };

    }

}
