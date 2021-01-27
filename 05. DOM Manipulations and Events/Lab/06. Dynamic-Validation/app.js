function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev) {
        const email = ev.target.value;
        const isValid = /^[a-z]+@[a-z]+\.[a-z]+$/.test(email);
        isValid ? ev.target.removeAttribute('class') : ev.target.classList.add('error');
    }
}
//^[a-z]+@[a-z]+\.[a-z]+$;