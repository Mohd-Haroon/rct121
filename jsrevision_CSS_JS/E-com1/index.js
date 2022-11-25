document.querySelector("#form").addEventListener("submit", formsubmit)

var signupArr=JSON.parse(localStorage.getItem("signupdetail")) || []

function formsubmit(event){
    event.preventDefault()
    var signupobj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pass").value,
    }
    signupArr.push(signupobj)
    console.log(signupobj)
    localStorage.setItem("signupdetail",JSON.stringify(signupArr))
    document.querySelector("#name").value=""
    document.querySelector("#email").value=""
    document.querySelector("#pass").value=""

    // document.querySelector("#form>input:last-child").addEventListener("click",function(){
    //     window.location.href= "login.html";
    // })
    window.location.href= "login.html";
    
}