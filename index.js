var images = ["./boxtank.jpg", "./bowltank.jpg", "./rocksubstrate.jpg" , "./sandsubstrate.jpg", "./driftwood.jpg", "./lavarock.jpeg" ]
var userData = {
    TankImage: 0,
    tank: "",
    SubstrateImage: 0,
    substrate: "",
    DecorImage: 0,
    decor: ""
}

const q1 = document.querySelector(".option")
const q2 = document.querySelector(".option2")
const q3 = document.querySelector(".option3")
const info = document.querySelector(".info")

let title = document.getElementById("choose-option")

 function makeImage() {
    var img = document.createElement('img')
    img.src = images[0];
    document.getElementById('imageboxs').appendChild(img);
   
    var img2 = document.createElement('img')
    img2.src = images[1]
    document.getElementById('imagebowls').appendChild(img2)

    var img3 = document.createElement('img')
    img3.src = images[2]
    document.getElementById('imagerocks').appendChild(img3)

    var img4 = document.createElement('img')
    img4.src = images[3]
    document.getElementById('imagesand').appendChild(img4)

    var img5 = document.createElement('img')
    img5.src = images[4]
    document.getElementById('driftwood').appendChild(img5)

    var img6 = document.createElement('img')
    img6.src = images[5]
    document.getElementById('lavarock').appendChild(img6)
 }

 function addBoxTank() {
   userData.TankImage = 0

   userData.tank = "Aquarium Box Tank"

   secondSlide()
 }


 function addBowlTank() {
   userData.TankImage = 1

   userData.tank = "Aquarium Bowl Tank"

   secondSlide()
 }

 function addRocks() {
   userData.SubstrateImage = 0
   userData.substrate = "Rock Substrate"
   thirdSlide()
 }

 function addSand() {
   userData.SubstrateImage = 1
   userData.substrate = "Sand Substrate"
   thirdSlide()
 }

 function addDriftwood() {
   userData.DecorImage = 0
   userData.decor = "Driftwood"
   fourthSlide()
 }

 function addLavaRock() {
   userData.DecorImage = 1
   userData.decor = "Lava Rock"

   fourthSlide()
 }

 function secondSlide() {
    q1.style.display = "none"
    q2.style.display = "flex"
    
 }

 function thirdSlide() {
    q2.style.display = "none"
    q3.style.display = "flex"
 }

 function fourthSlide() {
     q3.style.display = "none"
     info.style.display = "flex"
     displayInfo()
 }

 function displayInfo() {
    if(userData.TankImage === 0){
        document.getElementById("tank-img").src = "boxtank.jpg"
        document.getElementById("tank-name").innerText = "Aquarium Box Tank"
        document.getElementById("tank-info").innerText = "The Aquatic Box Tank is an excellent tank to start your aquascaping build, to purchase one "  
        document.getElementById("tank-info").innerHTML += '<a href"https://waterboxaquariums.com/">visit this site</a>'
    }else{
        document.getElementById("tank-img").src = "bowltank.jpg"
        document.getElementById("tank-name").innerText = "Aquarium Bowl Tank"
        document.getElementById("tank-info").innerText = "The Aquatic Bowl Tank is an excellent tank for a desk, to purchase one "  
        document.getElementById("tank-info").innerHTML += '<a href"https://waterboxaquariums.com/">visit this site</a>'
    }
 
    if(userData.SubstrateImage === 0){
        document.getElementById("substrate-img").src = "rocksubstrate.jpg"
        document.getElementById("substrate-name").innerText = "Rock Substrate"
        document.getElementById("substrate-info").innerText = "Rock substrate is a great substrate to add on to a tank adding color and texture to the tank, to puschase "  
        document.getElementById("substrate-info").innerHTML += '<a href"https://waterboxaquariums.com/">visit this site</a>'

    }else{
        document.getElementById("substrate-img").src = "sandsubstrate.jpg"
        document.getElementById("substrate-name").innerText = "Sand Substrate"
        document.getElementById("substrate-info").innerText = "Sand is very fine substrate which will collect beneficial bacteria in it for plants and fish; maintenance is high but worth it, purchase it by  "  
        document.getElementById("substrate-info").innerHTML += '<a href"https://waterboxaquariums.com/">visiting this site</a>'

    }

    if(userData.DecorImage === 0){
        document.getElementById("decor-img").src = "driftwood.jpg"
        document.getElementById("decor-name").innerText = "Driftwood Decor"
        document.getElementById("decor-info").innerText = "Driftwood is a decor used by professionals to make the fish and plants stand out in their tanks, to purchase some "  
        document.getElementById("decor-info").innerHTML += '<a href"https://waterboxaquariums.com/">visit this site</a>'

    }else{
        document.getElementById("decor-img").src = "lavarock.jpeg"
        document.getElementById("decor-name").innerText = "Lava Rock Decor"
        document.getElementById("decor-info").innerText = "Lava Rock is one of the most common decor in an aquatic tank, adding beautiful color and texture you can never go wrong purchasing it by "  
        document.getElementById("decor-info").innerHTML += '<a href"https://waterboxaquariums.com/">visiting this site</a>'

    }
 }

