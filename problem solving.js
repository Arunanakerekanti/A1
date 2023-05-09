// sum of numbers using function //
function numbers(a,b){
    return a+b
}
alert(numbers(1,5))

//Convering minutes into seconds using function//
var minutes =prompt("enter the minute to convert into seconds")
function minutestoSeconds(minutes){
    return minutes*60;
}

alert(minutestoSeconds(minutes))

//converting year into days using function//

function yearsintodays(){
var yearsintodays=prompt("enter your year to convert to days")
var days=yearsintodays*365
console.log(days)    
}
yearsintodays()

//incriment using functions//
 
var a=prompt("enter the input")
function incrimentnum(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
}
incrimentnum()
