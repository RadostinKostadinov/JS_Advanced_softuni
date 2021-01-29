function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onClick);
    const [inputSelectEl, outputSelectEl] = Array.from(document.querySelectorAll('select'));
    const [inputField, outputField] = Array.from(document.querySelectorAll('input[type=text]'));

    const converter = {
        'km': function(value, dir) {
            if(dir == 'to'){
                return value / 1000;
            } else {
                return value * 1000;
            }
        },
        'm': function(value, dir) {
            if(dir == 'to'){
                return value;
            } else {
                return value;
            }
        },
        'cm': function(value, dir) {
            if(dir == 'to'){
                return value / 0.01;
            } else {
                return value * 0.01;
            };
        },
        'mm': function(value, dir) {
            if(dir == 'to'){
                return value / 0.001;
            } else {
                return value * 0.001;
            }
        },
        'mi': function(value, dir) {
            if(dir == 'to'){
                return value / 1609.34;
            } else {
                return value * 1609.34;
            }
        },
        'yrd': function(value, dir) {
            if(dir == 'to'){
                return value / 0.9144;
            } else {
                return value * 0.9144;
            }
        },
        'ft': function(value, dir) {
            if(dir == 'to'){
                return value / 0.3048;
            } else {
                return value * 0.3048;
            }
        },
        'in': function(value, dir) {
            if(dir == 'to'){
                return value / 0.0254;
            } else {
                return value * 0.0254;
            }
        },
    };
    
    function onClick(){
        const from = inputSelectEl.options[inputSelectEl.selectedIndex].value;
        const to = outputSelectEl.options[outputSelectEl.selectedIndex].value;
        const inputValue = Number(inputField.value);

        const meters = converter[from](inputValue,'from');  //Converts the input value, FROM submitted unit to meters;
        const result = converter[to](meters,'to'); //Converts meters TO selected unit;

        outputField.value = result;        
    }
}