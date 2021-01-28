function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', onClick);
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    function onClick(ev) {
        if(ev.target.type == 'button') {
            let num = Number(ev.target.parentNode.querySelector('input[type=text]').value);
            let unit = ev.target.id.split('Btn')[0];
            console.log(unit, num);
            const calcUnits = {
                'days': function(num) {
                    hoursInput.value = num * 24;
                    minutesInput.value = num * 1440;
                    secondsInput.value = num * 86400;
                },
                'hours': function(num) {
                    daysInput.value = num / 24;
                    minutesInput.value = num * 60;
                    secondsInput.value = num * 3600;
                },
                'minutes': function(num) {
                    daysInput.value = num / 1440;
                    hoursInput.value =  num / 60;
                    secondsInput.value = num * 60;
                },
                'seconds': function(num) {
                    daysInput.value = num / 86400;
                    hoursInput.value = num / 3600;
                    minutesInput.value = num / 60;
                   
                },
                
            };
            calcUnits[unit](num);
        }
    }
}