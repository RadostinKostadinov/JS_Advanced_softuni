function validate() {
    document.querySelector('#submit').addEventListener('click', onSubmit);
    document.getElementById('company').addEventListener('change', onChangeCheckbox);
    const usernameInp = document.getElementById('username');
    const emailInp = document.getElementById('email');
    const passwordInp = document.getElementById('password');
    const confPassInp = document.getElementById('confirm-password');
    const companyCb = document.getElementById('company');
    const companyInfoFieldSet = document.getElementById('companyInfo');
    const companyNumInp = document.getElementById('companyNumber');
    const validInp = document.getElementById('valid');
    companyNumInp.setAttribute('min', 1000);
    companyNumInp.setAttribute('max', 9999);
    companyCb.checked ? companyInfoFieldSet.style.display = 'block' : companyInfoFieldSet.style.display = 'none';

    function onChangeCheckbox(ev) {
        console.log('change');
        ev.target.checked ? companyInfoFieldSet.style.display = 'block' : companyInfoFieldSet.style.display = 'none';
    }

    function usernameValidation(username) {
        const nameRegEx = new RegExp(/^[A-Za-z0-9]+$/, 'gm');
        if (nameRegEx.test(username) && username.length >= 3 && username.length <= 20) {
            usernameInp.style.border = 'none';
            return true;
        } else {
            usernameInp.style.border = 'solid';
            usernameInp.style.borderColor = 'red';
            return false;
        }
    }

    function emailValidation(email) {
        const emailRegEx = new RegExp(/[@].*[\.]/, 'gm');
        if (emailRegEx.test(email)) {
            emailInp.style.border = 'none';
            return true;
        } else {
            emailInp.style.border = 'solid';
            emailInp.style.borderColor = 'red';
            return false;
        }
    }

    function passwordValidation(password) {
        const passRegEx = new RegExp(/^\w+$/, 'gm');
        if (passRegEx.test(password) && password.length >= 5 && password.length <= 15) {
            passwordInp.style.border = 'none';
            return true;
        } else {
            confPassInp.style.border = 'solid';
            confPassInp.style.borderColor = 'red';
            passwordInp.style.border = 'solid';
            passwordInp.style.borderColor = 'red';
            return false;
        }
    }

    function confirmPassValidation(password, confPass) {
       
        if (confPass === password) {
            passwordValidation(confPass);
            return true;
        } else {
            confPassInp.style.border = 'solid';
            confPassInp.style.borderColor = 'red';
            passwordInp.style.border = 'solid';
            passwordInp.style.borderColor = 'red';
            return false;
        }
    }

    function companyNumValidation(companyNum) {
        if (companyNum < 1000 || companyNum > 9999 || companyNum == '') {
            companyNumInp.style.border = 'solid';
            companyNumInp.style.borderColor = 'red';
            return false;
        } else {
            companyNumInp.style.border = 'none';
            return true;
        }
    }
    function onSubmit(ev) {
        ev.preventDefault();

        const isValidUsername = usernameValidation(usernameInp.value);
        const isValidEmail = emailValidation(emailInp.value);
        const isValidPassword = passwordValidation(passwordInp.value);
        const isValidConfPassword = confirmPassValidation(passwordInp.value, confPassInp.value);
        const isCbChecked = companyCb.checked;
        let isValidCompanyNum = true;

        if (companyCb.checked) {
            isValidCompanyNum = companyNumValidation(companyNumInp.value);
        }

        if(isValidUsername && isValidEmail && isValidPassword && isValidConfPassword){
            if(!isCbChecked){
                validInp.style.display = 'block';
            } else {
                if(isValidCompanyNum) {
                    validInp.style.display = 'block';
                } else {
                    validInp.style.display = 'none';
                }
            }
        } else {
            validInp.style.display = 'none';
        }
    }
}
