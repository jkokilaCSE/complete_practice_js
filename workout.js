// practice-1
let firstname="kokila"
let lastname="Jayaraj"
let fullName=firstname+" "+lastname
console.log(fullName)

// practice-2
let name ="Linda"
let greeting ="Hi there"

function logs(){
    let s=greeting+","+ name +"!"
    console.log(s)
}
logs()

// practice-3
let myPoints=3

function addPoints(){
    myPoints+=3
    
}
function removePoints(){
    myPoints-=1
    
}
addPoints()
addPoints()
addPoints()
removePoints()
removePoints()


console.log(myPoints)

// practice-4

//Try to predict what each of the lines will log out
 console.log("2"+2) //"22"
 console.log(11+7) //18
 console.log(6 +"5") //"65"
 console.log("My points:"+ 5 + 9) //"My points:59
 console.log(2+2) //4
 console.log("11"+"14") //"1114"


//  practice-5 array

let featuredPosts =["Check out my netflix clone",
"Here's the code for my project",
"I've just relaunched my portofolio"]
console.log(featuredPosts)
console.log(featuredPosts.length)

// practice-6 array different datatypes can be applied...

let yourself =["Kokila",20 , "true"]
console.log(yourself)

//practice-7 array adding element

let messages=["hi","how are you"]
newMessage ="I am fine"
messages.push(newMessage)
console.log(messages)
//removing
messages.pop()
console.log(messages)

// practice-8 for loop
for(let cou=10;cou<21;cou+=1){
    console.log(cou)
}

//practice-9 for loop
let cards=[7,3,9]
for(let i=0;i<cards.length;i++){
    console.log(cards[i])
}

//practice-10 combining all into one...array,for loop
let sentence = ["Hello","my","name","is","per"]
let greetingEl=document.getElementById("greeting-el")

for(let i=0;i<sentence.length;i++){
    greetingEl.textContent+=sentence[i]+" "//textContent+=..will store the previous word and add one by one in the sentence..
}

//practice-11 racetime in total using if else
let p1=111
let p2=123
 function totalCard(){
            return p1+p2
 }
 let trt=totalCard()
 console.log(trt)

 //practice-12 random function using Math.random()
//it lways lies between 0 and 1
 let randomNumberGenerator = Math.random()
 console.log(randomNumberGenerator)

//practice-13 floor function
let floor=Math.floor(45577.8888)
console.log(floor)

//practice-14 combining 2 function...it will generate random number between 0-5 if we need to generate between 1-6 then we need to add +1 atlast
let aa=Math.floor(Math.random()*6)
console.log(aa)
let ae=Math.floor(Math.random()*6)+1
console.log(ae)

//practice-15
function rollDice(){
    let ran=Math.floor(Math.random()*6)+1
    return ran
}

console.log(rollDice())

//practice-16 logical operator and
let hasCompletedCourse =true
let givesCertificate=true

if(hasCompletedCourse===true && givesCertificate===true){
    generateCertificate()
}
function generateCertificate(){
    console.log("generate Certificate...")
}

//practice-17 logical operator and
let hasSolvedChallenge=false
let hasHintsLeft =false

if(hasSolvedChallenge===false && hasHintsLeft===false){
    showSolution()
}
function showSolution(){
    console.log("Showing the solution...")
}

// practice-18 logical operator OR
let likesDocumentaries=false
let likesStartups=true

if(likesDocumentaries===false || likesStartups===false){
    recommendMovie()
}
function recommendMovie(){
    console.log("Hey,check out this movie you will like!")
}

//practice-19 objects and logout the objects name
let obj1 ={
    title : "Live like a king in my castle!",
    price : 200,
    isSuperHost: true,
    images:["img/path,img2/path"]
}
console.log(obj1.title,obj1.price)

// practice-20 function inside the objects


let obj2={
    name:"kokila",
    age:20,
    gender:function(){
        console.log("female")
    }
}
obj2.gender()

//practice -21 workout for all concept
// exercise:create a person object  that contains three keys :name,age, and country
// create a function ,logData(), that uses the person object  to create  a string  in the following  format:
//"kokila is 20 years old  and lives  in norway"
//call the logData() function  to verify  that  it works 







