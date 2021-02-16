function solve() {
    document.querySelector('form div button:first-child').addEventListener('click', onClick);

    const lectNameField = document.querySelector('form div input[type=\'text\']');
    const dateTimeField = document.querySelector('form div input[type=\'datetime-local\']');
    const moduleField = document.querySelector('form div select[name=\'lecture-module\']');
    const modulesDiv = document.querySelector('div.modules');;

    //CREATING MODULES HEADERS
    const headBasicsModule = e('div');
    headBasicsModule.setAttribute('class', 'module');
    headBasicsModule.appendChild(e('h3', 'BASICS-MODULE'));
    headBasicsModule.style.display = 'none';
    const basicsModuleUL = e('ul');
    modulesDiv.appendChild(headBasicsModule);

    const headFundamentalsModule = e('div');
    headFundamentalsModule.setAttribute('class', 'module');
    headFundamentalsModule.appendChild(e('h3', 'FUNDAMENTALS-MODULE'));
    headFundamentalsModule.style.display = 'none';
    const fundamentalsModuleUL = e('ul');
    modulesDiv.appendChild(headFundamentalsModule);

    const headAdvancedModule = e('div');
    headAdvancedModule.setAttribute('class', 'module');
    headAdvancedModule.appendChild(e('h3', 'ADVANCED-MODULE'));
    headAdvancedModule.style.display = 'none';
    const advancedModuleUL = e('ul');
    modulesDiv.appendChild(headAdvancedModule);

    const headDBModule = e('div');
    headDBModule.setAttribute('class', 'module');
    headDBModule.appendChild(e('h3', 'DB-MODULE'));
    headDBModule.style.display = 'none';
    const dbModuleUL = e('ul');
    modulesDiv.appendChild(headDBModule);

    const headWebModule = e('div');
    headWebModule.setAttribute('class', 'module');
    headWebModule.appendChild(e('h3', 'WEB-MODULE'));
    headWebModule.style.display = 'none';
    const webModuleUL = e('ul');
    modulesDiv.appendChild(headWebModule);


    const basics = [];
    const fundamentals = [];
    const advanced = [];
    const db = [];
    const web = [];

    function onClick(ev) {
        ev.preventDefault();
        if (isValidName() && isValidDate() && isValidModule()) {

            if(moduleField.value == 'Basics') {

            } else if (moduleField.value == 'Fundamentals') {

            } else if (moduleField.value == 'Advanced') {

            } else if (moduleField.value == 'DB') {

            } else if (moduleField.value == 'Web')
            
            const time = dateTimeField.value.slice(-5);
            const date = dateTimeField.value.slice(0, 10);
            const rowBt = e('button', 'Del');
            rowBt.setAttribute('class', 'red');
            const tableRow = e('li',
                e('h4', `DOM - ${date} - ${time}`),
                rowBt);
            tableRow.setAttribute('class','flex');
            


            advancedModuleUL.appendChild(tableRow);
            headAdvancedModule.appendChild(advancedModuleUL);
            headAdvancedModule.style.display = 'block';

        } else {
            console.log('NE MINAVA');
        }
    }

    function isValidName() {
        if (lectNameField.value == '') {
            return false;
        } else {
            return true;
        }
    }

    function isValidDate() {
        if (dateTimeField.value == '') {
            return false;
        } else {
            return true;
        }
    }

    function isValidModule() {
        if (moduleField.value == 'Select module') {
            return false;
        } else {
            return true;
        }
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

};