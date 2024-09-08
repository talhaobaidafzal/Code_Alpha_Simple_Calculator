let modebtn = document.querySelector(".modeswitchbtn");
let darkModeIc = document.querySelector(".dark");
let lightModeIc = document.querySelector(".light");
let darkMode= document.querySelector(".darkM");
let lightMode= document.querySelector(".lightM");
const keys = document.querySelectorAll(".griditem");
let screen =document.querySelector(".result");
let smallScreen =document.querySelector(".input")

let switchModeIcon = "light";
modebtn.addEventListener("click",()=>{
    if(switchModeIcon==="light"){
        darkModeIc.style.visibility = "visible";
        lightModeIc.style.visibility = "hidden";
        switchModeIcon= "dark";
}
else{
    darkModeIc.style.visibility = "hidden"
    lightModeIc.style.visibility = "visible";
    switchModeIcon = "light";
}
});

document.body.classList.add("darkM");
document.body.classList.add("lightM");

let mode = "light";
modebtn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark"
        document.body.classList.add("darkM");
        document.body.classList.remove("lightM");
    }
    else{
        mode="light";
        document.body.classList.add("lightM");
        document.body.classList.remove("darkM");
    }
});
document.addEventListener("keydown", (event) => {
    const { key } = event;
    const value = key;

    if ((/[0-9]/.test(key)) || ['+', '-', '*', '/', '.', '=', 'Enter'].includes(key)) {
        processInput(value);
    } else if (key === 'Escape') {
        processInput('AC');
    } else if (key === 'Backspace') {
        processInput('C');
    } else if (key === 'Delete') {
        processInput('AC');
    }
});
let currentInput="";
let calculationCompeleted="false";
keys.forEach(key=>{
    key.addEventListener("click",()=>{
        const value = key.getAttribute("datavalue");
        processInput(value);
    })})
    function processInput(value){
        if(value==="AC"){
            currentInput=" "
        }
        else if(calculationCompeleted){
            currentInput="";
            calculationCompeleted=false;           
        }
        else if (value === "C") {
            currentInput = currentInput.slice(0, -1);
        }
        else if(value === "+/-"){
            if (currentInput) {
                if (currentInput.startsWith('-')) {
                    currentInput = currentInput.slice(1);
                } else {
                    currentInput = '-' + currentInput;
                }
            }
        }
        else if(value=="sqrt"){
            currentInput=Math.sqrt(currentInput);
        }
        else if(value=="=" || value==="Enter"){
            try {
                currentInput= eval(currentInput);
            }
            catch{
                currentInput = "Error";
                calculationCompeleted= "true";
            }
        }
        else{
            currentInput += value;
        }
        screen.innerText= currentInput;
    }

