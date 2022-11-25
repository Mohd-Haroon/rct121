
const getData = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json()

        return data
    }
    catch(error){
        console.log("error",error)
    }
    
};

const append = (data,parent) => {

    parent.innerHTML = null

    data.forEach(({title,image, price}) => {

        

        let div = document.createElement('div')

        let t = document.createElement('p')
        t.innerText = title

        let img = document.createElement("img")
        img.src = image

        let pr = document.createElement('p')
        pr.innerText = price

        div.append(img,title,pr)
        parent.append(div)

    })
}

export {getData, append };