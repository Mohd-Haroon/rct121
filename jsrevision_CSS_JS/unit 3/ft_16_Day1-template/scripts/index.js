//Store the generated number in LocalStorage with key "number".

document.querySelector("#throw_dice").addEventListener("click",numfunc)
var numarr= JSON.parse(localStorage.getItem("dice")) || []
function numfunc(){
    numarr=[]

    var A=Math.floor((Math.random() * 6) + 1);
    console.log(A)
    obj={
        number: A
    }
    console.log(obj)
    numarr.push(obj)
    localStorage.setItem("dice",JSON.stringify(numarr))
    window.location.href = "display.html"
}