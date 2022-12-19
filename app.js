const billType = document.querySelector(".bill-type");
const peopleInput = document.querySelector(".people-input");
const tipsPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("tip-amount1");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");

billType.addEventListener("input", billType);
peopleInput.addEventListener("input", peopleInput);
tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipCustom);
resetBtn.addEventListener("click", resetBtn);

billType.value = "0.0";
peopleInput.value = "1";
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);
tipsPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipsValue = 0.15;

function billtype() {
    billValue = parseFloat(billType.Value);
    calculateTip;
}

function peopleinput() {
    peopleValue = parseFloat(peopleInput.Value);
   

    if(peopleValue < 1) {
        error.style.display = 'flex'
        peopleInput.style.border = 'thick solid red '
    }else{
        error.style.display = 'none'
        peopleInput.style.border = 'none '
        calculateTip;
    }
}

function tipamount() {
    tipsValue = parseFloat(tipCustom.value /100);

    tips.forEach(function(val) {
        val.classList.remove("active-tip");
    });
    calculateTip;
}

function handleClick(event){
    tips. forEach(function (val) { 
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-tip");
            tipsValue = parseFloat(val.innerHTML) /100;
        }
    });
    calculateTip;
}

function calculateTip(){
    if(peopleValue >= 1){
    let tipamount = (billValue * tipsPerPerson) /peopleValue;
    let total = (billValue * tipamount) / peopleValue;
    tipsPerPerson.innerHTML = "$" + tipamount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2)
    }
}

function reset(){
    billType.value = "0.0";
    billType()
    peopleInput.value = "1";
    peopleInput()
    tipCustom.value = ""
}


