const display = document.getElementById("display");

function addValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        display.value = eval(display.value);

    }catch{

        alert("Invalid Expression");
        display.value = "";

    }

}

// Keyboard Support

document.addEventListener("keydown",function(e){

    if((e.key>='0' && e.key<='9') ||
       ['+','-','*','/','.','%'].includes(e.key))
    {
        display.value += e.key;
    }

    if(e.key==="Enter"){
        e.preventDefault();
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }

});