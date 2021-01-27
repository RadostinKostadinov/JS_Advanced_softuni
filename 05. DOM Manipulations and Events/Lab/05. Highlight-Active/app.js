function focus() {
    Array.from(document.querySelectorAll('input[type=text]')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });


    function onFocus(ev){
        ev.target.parentNode.classList.add('focused');
    };

    function onBlur(ev){
        ev.target.parentNode.classList.remove('focused');
    };
}