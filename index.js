const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate() {
    let expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function percentCalculator(){
    display.value = display.value / 100; 
}

function changePolarity(){
    display.value = display.value * -1;
}

