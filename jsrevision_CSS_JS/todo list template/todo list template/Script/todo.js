var todolist =JSON.parse(localStorage.getItem("todolocal"))
// console.log(todolist)

todolist.map(function(elem,inddex,arr){
    var row= document.createElement("tr")

    var col1= document.createElement("td")
    col1.innerText=elem.name
    var col2= document.createElement("td")
    col2.innerText=elem.qty
    var col3= document.createElement("td")
    col3.innerText=elem.priority
    var col4= document.createElement("button")
    col4.innerText="Mark as completed"
    col4.addEventListener("click",function(){
        markcomplete(elem)
    })

    row.append(col1,col2,col3,col4)
    document.querySelector("tbody").append(row)
})
var complted=JSON.parse(localStorage.getItem("comppletedtodo")) || []
function markcomplete(elem){
    complted.push(elem)
    localStorage.setItem("comppletedtodo",JSON.stringify(complted))
}