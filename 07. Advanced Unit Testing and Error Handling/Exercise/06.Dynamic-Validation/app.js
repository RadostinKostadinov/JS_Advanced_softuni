function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    
    const regEx = new  RegExp(/^[a-z]+@[a-z]+\.[a-z]+$/, 'gm');

    function onChange(ev){
        const inputText = ev.target.value;
        if(regEx.test(inputText)){
            ev.target.removeAttribute('class');
        } else {
            ev.target.setAttribute('class', 'error');
        }
    }
}