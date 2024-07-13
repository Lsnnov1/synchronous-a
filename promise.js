// let url  = "http swapi.dev/api/planets/1/"
// // let ourFirstPromise = axios.get(url);
// console.log(ourFirstPromise)

// ourFirstPromise.then(function(){
//     console.log("RESOLVED")
// })

// ourFirstPromise.catch(err => {console.log("REJECTED", err)})
// console.log("last line")


function waitThreeSeconds(){
    return new Promise((resolve, reject) => {
        setTimeout(reject(), 3000)
    })

}

waitThreeSeconds()
    .then(()=> console.log("done"))
    .catch(()=> (console.log("no")))

    console.log("still wating")



const h1 = document.querySelector("h1")

function changeh1Color() {
    setTimeout(function(){
            h1.style.color = "blue"
            setTimeout(function(){
                h1.style.color = "purple"
                setTimeout(function(){
                    h1.style.color = "green"
        }, 1000)
    }, 1000)
}, 1000)}

changeh1Color("blue").then(() => {changeh1Color("purple").then(()=>{changeh1Color("green")})});
