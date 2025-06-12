let counterValue = document.getElementById('counter-value')

function incValue()
{
    let prevCounterValue = counterValue.textContent
    let latestValue = parseInt(prevCounterValue) + 1
    counterValue.textContent = latestValue

    if(latestValue>0){
        counterValue.style.color = "green";
    }
    else if(latestValue<0){
        counterValue.style.color = "red";
    }
    else{
            counterValue.style.color = "black";
    }
}

function resetValue()
{
   
    counterValue.textContent = 0
    counterValue.style.color = "black"
   
}
function decValue(){
    let prevCounterValue = counterValue.textContent
    latestValue = parseInt(prevCounterValue) - 1
    counterValue.textContent = latestValue
    if(latestValue>0){
        counterValue.style.color = "green";
    }
    else if(latestValue<0){
        counterValue.style.color = "red";
    }
    else{
            counterValue.style.color = "black";
    }
}