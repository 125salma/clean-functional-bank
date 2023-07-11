function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const valueInText=inputField.value;
    const value = parseFloat(valueInText);
    inputField.value='';
    return value;
}

function getInnerTextValue(fieldId){
    const fieldTag =  document.getElementById(fieldId);
    const fieldIdValueText = fieldTag.innerText;
    const value = parseFloat(fieldIdValueText);
    return value;
}

function updateTotal(fieldId,amount){
    // const totalTag = document.getElementById(fieldId);
    // const previouTotalInTex = totalTag.innerText;
    // const previousTotal=parseFloat(previouTotalInTex);
    // const newTotal=previousTotal+amount;
    // totalTag.innerText=newTotal;
    // return newTotal;

    const previousTotal = getInnerTextValue(fieldId)
    const newTotal=previousTotal+amount;
    document.getElementById(fieldId).innerText=newTotal;//use refactor
    return newTotal;

}

function updateBalance(amount,isAdding){
    // const balanceTag= document.getElementById('balance-total');
    // const balanceInText= balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdding==true){
     newBalance =previousBalance+amount;
    }
    else{
        newBalance =previousBalance-amount;

    }
    document.getElementById('balance-total').innerText=newBalance;


}
//handel desopit
document.getElementById('deposit-button').addEventListener('click',function(){
    const amount = getInputValue('deposit-input')
    if(amount > 0){
        updateTotal('deposit-total',amount)
        updateBalance(amount,true)
    }

})
//handel withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
   const amount = getInputValue('withdraw-input')
   const balance = getInnerTextValue('balance-total');

    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total',amount)
        updateBalance(amount,false)
    }
})