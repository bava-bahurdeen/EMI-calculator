var loan_input=document.querySelector("#loan-amount");
var intrest_input=document.querySelector("#intrest-amount");
var tenure_input=document.querySelector("#loan-tenure");
var change=document.querySelectorAll("#change")
var btn=document.querySelector("#btn")

var yearRadio = document.getElementById('year');
var monthRadio = document.getElementById('month');

var emi_value=document.querySelector("#loan-emi-value")
var intrest_value=document.querySelector("#total-intrest-value")
var total_value=document.querySelector("#total-emi-value")

var loanamount=parseFloat(loan_input.value)
var intrestRate=parseFloat(intrest_input.value)/100
var loantenure=parseFloat(tenure_input.value)
//check radio input 
var frequency = yearRadio.checked ? 12 : 1;
//total amout of payment
var n=loantenure*frequency 
 var intrest=intrestRate/frequency;

//  calculate emi
 const calculate=()=>{
    let emi=loanamount*intrest*(Math.pow(1+intrest,n)/(Math.pow(1+intrest,n)-1));
  
return emi;
}
// update the emi result value
var updateData=(emi)=>{
    emi_value.innerHTML=Math.round(emi)
    
    let totalamount=Math.round(n*emi)
    total_value.innerHTML=totalamount
    let totalintrest=Math.round(totalamount-loanamount)
    intrest_value.innerHTML=totalintrest

}
// assign the prevalue results
const init=()=>{
    let emi=calculate()
    updateData(emi)
}
init()
// clean the input values
const reefreshinputs=()=>{

    
 loanamount=parseFloat(loan_input.value)
 intrestRate=parseFloat(intrest_input.value)/100
 loantenure=parseFloat(tenure_input.value)
 frequency = yearRadio.checked ? 12 : 1;

  n = loantenure * frequency; 
  intrest=intrestRate/frequency;

}
// calculate button click events
btn.addEventListener("click",()=>{
    reefreshinputs()
    let emi=calculate()
    updateData(emi)
    

})