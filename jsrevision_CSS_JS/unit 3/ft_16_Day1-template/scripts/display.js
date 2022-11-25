//here retrieve the generated number from Localstorage.

var numA = JSON.parse(localStorage.getItem("dice"))
console.log(numA) 

numA.map(function(elem){
    var BB = document.querySelector("#show_number")
    BB.innerHTML = elem.number
    // console.log(BB)
    if(elem.number==1)
    {
        document.querySelector("#show_number").style.backgroundColor = "yello";
    }
    else if(elem.number==6){
        BB.style.backgroundColor = "green";
    }
    else{
        BB.style.backgroundColor = "red";
    }
})