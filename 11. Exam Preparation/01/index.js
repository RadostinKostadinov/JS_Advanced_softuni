function solve() {
    const lectureName = document.querySelector('input[name=lecture-name]');
    const date = document.querySelector('input[name=lecture-date]');
    const module = document.querySelector('select[name=lecture-module]');
    document.querySelector('div.form-control button').addEventListener('click', addLecture);
    const trainingModules = document.querySelector('div.modules');

    createTrainingsLists(); //creates div elements in traning section (header for every module)



    function addLecture(ev) {
        ev.preventDefault();

        if (lectureName.value != '' && date.value != '' && module.value != 'Select module...') { // input validation (must not be empty or default value)

            // creates new row
            const delButton = e('button', 'Del');
            delButton.setAttribute('class', 'red');
            delButton.addEventListener('click', deleteLi);

            const chosenDate = date.value;
            const li = e('li',
                e('h4', `${lectureName.value} - ${chosenDate.slice(0, 4)}/${chosenDate.slice(5, 7)}/${chosenDate.slice(8, 10)} - ${chosenDate.slice(-5)}`),
                delButton);
            li.setAttribute('class', 'flex');

            // add created row(li) to expected module
            const moduleList = document.querySelector(`div[name=${module.value.toUpperCase()}]`);
            moduleList.style.display = 'block';
            moduleList.children[1].appendChild(li);

            console.log('here1');
            sortLectures(moduleList);
        }
    }

    // this function deletes lecture in training section
    //      if the deleted lecture was last one in its module, hides module...
    function deleteLi(ev) {
        if(Array.from(ev.target.parentNode.parentNode.parentNode.children[1].children).length == 1) {
            ev.target.parentNode.parentNode.parentNode.style.display = 'none';
        }
        ev.target.parentNode.remove();
    }


    function sortLectures(moduleListEl) {
        const array = Array.from(moduleListEl.children[1].children);
        array.sort((a, b) => a.textContent.slice(-18).localeCompare(b.textContent.slice(-18)))
            .forEach(el => moduleListEl.children[1].appendChild(el));
    }

    function createTrainingsLists() {      
        const options = [];
        for (let i = 1; i < module.options.length; i++) {
            options.push(module.options[i].text.toUpperCase());
        };

        // creates div element in training section a.k.a. => (creates header for every module)
        options.forEach(option => {
            const div = e('div',
                e('h3', `${option}-MODULE`),
                e('ul'));
            div.className = 'module';
            div.setAttribute('name', option);
            div.style.display = 'none';
            trainingModules.appendChild(div);
        });

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