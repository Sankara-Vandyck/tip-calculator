const billType = document.querySelector(".bill-type");
const peopleInput = document.querySelector(".people-input");
const tipPrePerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tip-container");
const tipCustom = document.querySelector(".tip-custom")
const resetBtn = document.querySelector(".reset");

const error_message =  document.querySelector(".error-message");


billType.addEventListener("input", billTypeFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});

tipCustom.addEventListener("input", tipCustomFun);
resetBtn.addEventListener("click", reset);


billType.value = "50";
peopleInput.value = "0";

tipPrePerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billvalue = 0;
let peoplevalue = 1;
// let tipvalue = 0;

function billTypeFun(){
    billvalue = parseFloat(billType.value);
 
   calculateTip();
   peoplevalue = parseFloat(peopleInput.value);

   if(peoplevalue === 0 ){
    error_message.textContent = "Can't be zero"

    peopleInput.style.border = "thick solid red";

   }else{
    error_message.textContent = ""

   }
}

function peopleInputFun(){
    peoplevalue = parseFloat(peopleInput.value);

     if (peoplevalue ==0) {
  
        error_message.textContent = "Can't be zero"
        peopleInput.style.border = "thick solid red";
    
    }else{
    
        error_message.textContent = ""
        peopleInput.style.border ="none";
        calculateTip();
    }
}

function tipCustomFun(){
    tipvalue = parseFloat(tipCustom.value /100);

    tips.forEach(function(val){
        val.classList.remove("active-tip");
    });
    calculateTip();
}


function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML ===val.innerHTML) {
            val.classList.add("active-tip");
            tipvalue=parseFloat(val.innerHTML)/100
            calculateTip();
        }
    });
   
}

function calculateTip(){
    if(peoplevalue >=1){
        let tipAmount = (billvalue * tipvalue) / peoplevalue;
        let total = (billvalue + tipAmount) / peoplevalue;
        tipPrePerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}


function reset(){
    billType.value = "0";
    billTypeFun();
    peopleInput.value = "0";
    peopleInputFun();
    tipCustom.value = "";
    error_message.textContent = "";
    peopleInput.style.border ="none";
}

