let display = document.getElementById('display');


function displayAppend(input){
    display.value += input;
    console.log('hello')
};

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error'
    }
};

function clearDisplay(){
    display.value = '';
}

