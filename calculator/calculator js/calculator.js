function clickBtn(val)
{
    document.getElementById("screen").value+=val
}
function ac(){
    document.getElementById("screen").value=null
} 
function equalTo(){
    var result=document.getElementById("screen").value;
    var total=eval(result);
    document.getElementById("screen").value=total;
}