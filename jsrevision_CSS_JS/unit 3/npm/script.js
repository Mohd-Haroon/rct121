// import { v4 as uuidv4 } from 'uuid';



// let user1 = {
//     name: 'Nrupul',
//     id : uuidv4()
// }

// let user2 = {
//     name: 'Dhaval',
//     id : uuidv4()
// }

// console.log(user1.id)
// console.log(user.id)

function add(){
    let named =  document.querySelector("#member").value 
    console.log(named)
    let city =  document.querySelector("#city").value 
    console.log(city)
    let data ={
        name : named,
        city : city
    }

    data = JSON.stringify(data)

    fetch(`http://localhost:3000/user`,{
        method: "POST",
        headers: {
            'Content-type' : "application/json"
        },
        body: data
    })
    .then((res)=> res.json())
    .then((dat)=>console.log(dat))
    .catch((err)=>console.log(err))
}


function update(){
    let id =  document.querySelector("input").value 
    console.log(id)
    let data ={
        name : "Wong",
        city : "kathmandu"
    }

    data = JSON.stringify(data)

    fetch(`http://localhost:3000/user/${id}`,{
        method: "PATCH",
        headers: {
            'Content-type' : "application/json"
        },
        body: data
    })
    .then((res)=> res.json())
    .then((dat)=>console.log(dat))
    .catch((err)=>console.log(err))
}

function deletee(){
    let id =  document.querySelector("input").value 
    console.log(id)

    let data ={
        name : "Wong",
        city : "kathmandu"
    }

    data = JSON.stringify(data)

    fetch(`http://localhost:3000/user/${id}`,{
        method: "DELETE",
        headers: {
            'Content-type' : "application/json"
        },
        // body: data
    })
    .then((res)=> res.json())
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

