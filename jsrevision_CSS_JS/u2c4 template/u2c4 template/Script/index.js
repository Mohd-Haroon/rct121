document.querySelector("#form").addEventListener("submit", formsubmit)
var detailarray=JSON.parse(localStorage.getItem("studentDatabase")) || []
function formsubmit(event){
    event.preventDefault()

    var obj={
        name: document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        gender : document.querySelector("#gender").value,
        email : document.querySelector("#email").value,
        phone : document.querySelector("#phone").value,
    }

    detailarray.push(obj)
    // console.log(obj)
    localStorage.setItem("studentDatabase",JSON.stringify(detailarray))

    document.querySelector("#name").value=""
    document.querySelector("#age").value+=""
    document.querySelector("#gender").value=""
    document.querySelector("#email").value=""
    document.querySelector("#phone").value=""

}