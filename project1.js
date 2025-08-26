let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let divNumber = document.querySelector(".number");
let reset = document.querySelector(".reset");

alert("May your prayers be the light that guides you through life's challenges Remember Rimal in your prayers");
let count = Number(divNumber.innerText);//if the inner text is in number formate
console.log(count);

plusButton.addEventListener("click",()=>{
    count++;
    divNumber.innerText = count ;
});

minusButton.addEventListener("click",()=>{
    count--;
    divNumber.innerText = count ;
});

reset.addEventListener("click" ,()=>{
        count=0;
        divNumber.innerText = count;
});