
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

    data.forEach(({strMeal,strMealThumb,strArea}) => {

        

        let div = document.createElement('div')

        let t = document.createElement('p')
        t.innerText = strMeal

        let img = document.createElement("img")
        img.src = strMealThumb

        let pr = document.createElement('p')
        pr.innerText = strArea

        div.append(img,t,pr)
        parent.append(div)

    })
}

export {getData, append };