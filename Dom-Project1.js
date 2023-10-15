var btnAdd=document.querySelector("#btn");
var h5=document.querySelector("h5");
var loop=0;
btnAdd.addEventListener("click",function()
{
    if(loop==0){
 h5.innerHTML="Friends";
 btnAdd.innerHTML="Remove";
 loop=1;
    } else
    {
        h5.innerHTML="Stranger";
        btnAdd.innerHTML="Add friend";
        loop=0;
    }
})
