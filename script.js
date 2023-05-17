const result = document.getElementById('result')
const input = document.getElementById('input')
const symbol = document.getElementsByClassName('symbols')
const number = document.getElementsByClassName('numbers')
var first = 0;
var second = 0;

Array.from(number).forEach(num =>{
    num.addEventListener("click",()=>{
        if(parseFloat(input.innerText)>99999999999999999999999999999999999999999|| 
            parseFloat(result.innerText)>99999999999999999999999999999999999999999)
            clr();
        if(num.innerText==="." && result.innerText.includes('.')) 
          return;
        result.innerHTML += num.innerText;
    })
});

Array.from(symbol).forEach(sym =>{
    sym.addEventListener("click",op = ()=>{
        if(first === 0 && !input.innerText){
            first = parseFloat(result.innerText);
            input.innerText = result.innerText + sym.innerText;
            result.innerText = "";
            operator = sym.innerText;
        }
        else{
            second = parseFloat(result.innerText);
            first = operate(first,second,operator);
            input.innerText = first + sym.innerText;
            result.innerText = "";
            operator = sym.innerText;
        }
    })
});

document.getElementById('AC').addEventListener("click",clr= ()=>{
    input.innerText="";
    result.innerText="";
    first = 0;
})

document.getElementById('eq').addEventListener("click",() =>{
    op();
    input.innerText = "";
    result.innerText = first;
    first = 0;
})

operate = (first ,second, operator) =>{
   return operator === "+" ? first + second:
          operator === "-" ? first - second:
          operator === "×" ? first * second:
          operator === "÷" ? first/second:
          operator === "%" ? first%second:
          null; 
}
