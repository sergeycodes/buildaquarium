var images = ["./media/boxtank.jpg", "./media/bowltank.jpg" ]
var userData = []

let title = document.getElementById("choose-option")

function makeImage() {
    console.log("IMAGE")
    var img = document.createElement('img')
    img.src = images[0];
    document.getElementById('imageboxs').appendChild(img);
    var img2 = document.createElement('img')
    img2.src = images[1];
    document.getElementById('imagebowls').appendChild(img2);
 }

 function addBoxTank() {
     console.log("ADD BOX")
    let box = {
        name: "Aquatic Box Tank",
        website: "https://waterboxaquariums.com/collections/freshwater-aquariums"
    }
    userData.push(box)

    substrateSlide()
 }


 function addBowlTank() {
     console.log("ADD BOWL")
    let bowl = {
        name: "Aquatic Bowl Tank",
        website: "https://www.amazon.com/Koller-Products-1-5-Gallon-Fish-Bowl/dp/B008CA82PK/ref=sr_1_2?crid=24K6OXQBSO70B&keywords=aquarium+bowl&qid=1654381806&s=pet-supplies&sprefix=aquarium+bowl%2Cpets%2C320&sr=1-2"
    }
    userData.push(bowl)

    substrateSlide()
 }

 function substrateSlide() {
     title.innerText = "Choose your Substrate"
 }
