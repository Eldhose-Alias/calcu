function display(num){
    result.value+=num  //result.value+num
}
function allclear(){
 result.value=" "
}
function evaluateexp(){
    result.value=eval(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1)
}