function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach(button => {
        button.addEventListener('click', (ev) => {
            const infoDiv = ev.target.parentNode.querySelector('div');
            const isHidden = infoDiv.style.display === 'block';
            if(isHidden) {
                infoDiv.style.display = 'none';
                button.textContent = 'Show more';
            } else {
                infoDiv.style.display = 'block';
                button.textContent = 'Hide it';
            }
        });
    });

    Array.from(document.querySelectorAll('input:checked')).forEach(input => {
        const isLock = input.value === 'lock';
        if (isLock) {
            input.parentNode.querySelector('button').disabled = true;
        } else {
            input.parentNode.querySelector('button').disabled = false;
        }
    });



    document.getElementById('main').addEventListener('click', onClick);
    function onClick(ev) {
        if (ev.target.tagName === 'INPUT') {
            if (ev.target.value === 'lock') {
                ev.target.parentNode.querySelector('button').disabled = true;
            } else {
                ev.target.parentNode.querySelector('button').disabled = false;
            }
        }

    }
}