document.querySelector("form").addEventListener("submit",formtodo)
var todoarr=JSON.parse(localStorage.getItem("todolocal")) || []
function formtodo(event){
    event.preventDefault()
    var obj={
        name:document.querySelector("#name").value,
        qty:document.querySelector("#qty").value,
        priority:document.querySelector("#priority").value,

    }
    todoarr.push(obj)
    // console.log(obj)
    localStorage.setItem("todolocal",JSON.stringify(todoarr))
    document.querySelector("#name").value=""
    document.querySelector("#qty").value=""
    document.querySelector("#priority").value=""
}