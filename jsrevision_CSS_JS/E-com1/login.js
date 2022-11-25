var signuplist = JSON.parse(localStorage.getItem("signupdetail"))
console.log(signuplist)
document.querySelector("#form").addEventListener("submit",formsub)
var formlog = document.querySelector("form")
// console.log(formlog)

function formsub(event){
    event.preventDefault()
    
    var user=formlog.email.value;
    var passw= formlog.pass.value
    console.log(user,passw)
    var flag=false
    for(var i=0;i<signuplist.length;i++)
    {
        if(signuplist[i].email==user)
        {
            flag=true
            if(signuplist[i].password==passw)
            {
                // console.log("Login successful")
                flag=true
                alert("Login successful")
                break
            }
            else{
                // console.log("Wrong password")
                alert("Wrong password")
                break
                
            }
        }
  
    }
    if(flag==false)
    {
        alert("email address not fount")
    }
    

}