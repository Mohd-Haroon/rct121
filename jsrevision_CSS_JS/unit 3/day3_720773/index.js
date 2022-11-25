//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )
var scopea={
    p1: "Scope determines the accessibility (visibility) of variables.",
    p2: "JavaScript has 3 types of scope:Block scope,Function scope and Global scope.",
    p3: "Variables let and const declared inside a { } block cannot be accessed from outside the block.",
    p4: "Variables declared within a JavaScript function, become LOCAL to the function.They can only be accessed from within the function.",
    p5: "A variable declared outside a function, becomes GLOBAL.Global variables can be accessed from anywhere in a JavaScript program."
}
    localStorage.setItem("scope", JSON.stringify(scopea))

var hoistinga={
    p1: "Hoisting is JavaScript's default behavior of moving declarations to the top.",
    p2: "In JavaScript, a variable can be used before it has been declared.",
    p3: "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).",
    p4: "The block of code is aware of the variable, but it cannot be used until it has been declared.",
    p5: "JavaScript only hoists declarations, not initializations."
}
    localStorage.setItem("hoisting", JSON.stringify(hoistinga))

var Constructor_Functionsa={
    p1: " A constructor is a function that initializes an object.",
    p2: "In a constructor function this does not have a value. It is a substitute for the new object.",
    p3: "this is not a variable. It is a keyword. You cannot change the value of this.",
    p4: "Your constructor function can also define methods.",
    p5: "Sometimes we need a 'blueprint' for creating many objects of the same 'type'. The way to create an 'object type', is to use an object constructor function."
}
    localStorage.setItem("constructor-functions", JSON.stringify(Constructor_Functionsa))

var prototypea={
    p1: "All JavaScript objects inherit properties and methods from a prototype.",
    p2: "The JavaScript prototype property allows you to add new properties to object constructors.",
    p3: "The JavaScript prototype property also allows you to add new methods to objects constructors.",
    p4: "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
    p5: "Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects."
}
    localStorage.setItem("prototype", JSON.stringify(prototypea))

//Information should be retrieved from localstorage only, avoid hard coding data.

function ascope(){

    // console.log("check")
    document.querySelector("#points").innerHTML=""
    

    var ls = JSON.parse(localStorage.getItem("scope"))

    var X = document.createElement("ul")

    var l1= document.createElement("li")
    l1.innerText= ls.p1
    var l2= document.createElement("li")
    l2.innerText= ls.p2
    var l3= document.createElement("li")
    l3.innerText= ls.p3
    var l4= document.createElement("li")
    l4.innerText= ls.p4
    var l5= document.createElement("li")
    l5.innerText= ls.p5

    X.append(l1,l2,l3,l4,l5)
    document.querySelector("#points").append(X)
    
    
    
}

function ahoisting(){

    // console.log("check")
    document.querySelector("#points").innerHTML=""

    var ls = JSON.parse(localStorage.getItem("hoisting"))

    var X = document.createElement("ul")

    var l1= document.createElement("li")
    l1.innerText= ls.p1
    var l2= document.createElement("li")
    l2.innerText= ls.p2
    var l3= document.createElement("li")
    l3.innerText= ls.p3
    var l4= document.createElement("li")
    l4.innerText= ls.p4
    var l5= document.createElement("li")
    l5.innerText= ls.p5

    X.append(l1,l2,l3,l4,l5)
    document.querySelector("#points").append(X)
}

function aconstructorfunctions(){

    // console.log("check")
    document.querySelector("#points").innerHTML=""

    var ls = JSON.parse(localStorage.getItem("constructor-functions"))

    var X = document.createElement("ul")

    var l1= document.createElement("li")
    l1.innerText= ls.p1
    var l2= document.createElement("li")
    l2.innerText= ls.p2
    var l3= document.createElement("li")
    l3.innerText= ls.p3
    var l4= document.createElement("li")
    l4.innerText= ls.p4
    var l5= document.createElement("li")
    l5.innerText= ls.p5

    X.append(l1,l2,l3,l4,l5)
    document.querySelector("#points").append(X)
}

function aprototype(){

    // console.log("check")
    document.querySelector("#points").innerHTML=""

    var ls = JSON.parse(localStorage.getItem("prototype"))

    var X = document.createElement("ul")

    var l1= document.createElement("li")
    l1.innerText= ls.p1
    var l2= document.createElement("li")
    l2.innerText= ls.p2
    var l3= document.createElement("li")
    l3.innerText= ls.p3
    var l4= document.createElement("li")
    l4.innerText= ls.p4
    var l5= document.createElement("li")
    l5.innerText= ls.p5

    X.append(l1,l2,l3,l4,l5)
    document.querySelector("#points").append(X)
}