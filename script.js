let publickey = 'public key goes here';
let privatekey = 'private key goes here';
let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + privatekey + publickey).toString();

let url = "http://gateway.marvel.com/v1/public/characters?name=Iron Man&limit=2"+ '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash
let heropic = document.querySelector(".heropic")


document.body.style.backgroundColor = "red"

let hero= ["Avengers",
    "Spider-Man", 
    "Hulk", 
    "Captain America",
    "Iron Man",
    "Thanos",
    "Wolverine",
    "Thor",
    "Falcon",
    "Vision",
    "Daredevil"]

let heroBtn = document.querySelector(".heroBtn")   
heroBtn.addEventListener("click",marvel)
let counter = 0

marvel()

function marvel(){    
    
    url = "http://gateway.marvel.com/v1/public/characters?name="+hero[counter]+"&limit=2"+ '&ts=' + ts + '&apikey=' + publickey + '&hash=' + hash
    
    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(res => {   
        console.log("success!", res)
        console.log(res.data.results[0].description)
        //let imgPath = res.data.results[0].thumbnail.path + "." + res.data.results[0].thumbnail.extension
        let imgPath = res.data.results[0].thumbnail.path + "/" + "portrait_incredible" + "." + res.data.results[0].thumbnail.extension
        heropic.setAttribute("src",imgPath)
        let about = document.querySelector(".about")
        about.innerText = res.data.results[0].description
        counter = counter + 1
    })
    .catch(err => {
        console.log("something went wrong.....", err)
    })
}

