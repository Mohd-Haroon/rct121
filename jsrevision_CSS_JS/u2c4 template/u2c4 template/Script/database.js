var database=JSON.parse(localStorage.getItem("studentDatabase"))
console.log(database)

database.map(function(elem,index,arr){
    var row=document.createElement("tr")

    var col1=document.createElement("td")
    col1.innerText = elem.name

    var col2=document.createElement("td")
    col2.innerText = elem.age

    var col3=document.createElement("td")
    col3.innerText = elem.gender

    var col4=document.createElement("td")
    col4.innerText = elem.email

    var col5=document.createElement("td")
    col5.innerText = elem.phone

    var col6=document.createElement("td")
    col6.innerText = "Admitt"
    col6.addEventListener("click",function(){
        console.log(elem)
        admitted(elem)
    })

    var col7=document.createElement("td")
    col7.innerText = "Reject"
    col7.addEventListener("click",function(){
        console.log(elem)
        remove(elem)
    })

    row.append(col1,col2,col3,col4,col5,col6,col7)
    document.querySelector("#body").append(row)

})
var admittedarray=JSON.parse(localStorage.getItem("admittedlocal")) || []
function admitted(elem){
    admittedarray.push(elem)
    localStorage.setItem("admittedlocal",JSON.stringify(admittedarray))
}

var rejectedarray=JSON.parse(localStorage.getItem("rejectedlocal")) || []
function remove(elem){
    rejectedarray.push(elem)
    localStorage.setItem("rejectedlocal",JSON.stringify(rejectedarray))
}