
const append = (data,parent) =>{
    parent.innerHtml = null
    data.forEach(({name},index)=>{
        let div= document.createElement("div")

        let nameR = document.createElement('h3')
        nameR.innerText = (index+1)+" ."+name 
        
        div.append(nameR)
        parent.append(div)
    })
}

export default append;