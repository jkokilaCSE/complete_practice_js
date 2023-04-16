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

//practice -21 practice session-1 workout for all concept
// exercise:create a person object  that contains three keys :name,age, and country
// create a function ,logData(), that uses the person object  to create  a string  in the following  format:
//"kokila is 20 years old  and lives  in norway"
//call the logData() function  to verify  that  it works 
  
let person={
    name:"kokila",
    age:20,
    country:"india"
}
function logData(){
    console.log(person.name+ " is "+ person.age+ " years old and lives in " + person.country)
}
 logData()

 //practice-22 practice session-2 

 //less than 6 years old --> free
 //6 to 17 years old      --> child discount
//18 to 26 years old --> student discount
//27 to 66 years old --> full price
//over 66 years old -->senior citizen discount
//create a conditional statement (if/else/else if)thatlogs out the discount
//the passengers will get based upon the value of theage variable

let age =75
if(age<6){
    console.log("free")
}
else if(age>=6 && age<=17){
    console.log("child discount")
}
else if(age>=18 && age<=26){
    console.log("student discount")
}
else if(age>=27 && age<=66){
    console.log("full price")
}
else {
    console.log("senior citizen discount")

}

//practice-23 for loops and arrays
//usea for loop  to log the following to the console :
 //The 5 largest countries  in the world
//  -China
//  -India
//  -United states
//  -Indonesia
//  -pakistan
let largeCountries =["China","India","USA","Indonesia","pakistan"]

for(let i=0;i<largeCountries.length;i++){
    console.log("-"+largeCountries[i])
}

//practice-24 using pop() ,push(),shift(),unshift()--where shift is will remove the 1st word in the array while unshift will add theword to the 1st place
largeCountries.pop()
largeCountries.push("Monaco")
largeCountries.shift()
largeCountries.unshift("Tuvalu")
console.log(largeCountries)

//practice-25 --if it is the friday the 13th ,logout  this spooky  face:
//use  the logical "and operator"--&&
let dayOfMonth =13
let weekday="Friday"
if(dayOfMonth===13 && weekday==="Friday"){
    console.log("😱")
}

//practice-26 --create a function  that returns  a random  item from the array
let hands=["rock","paper","scissor"]
console.log(hands[Math.floor(Math.random()*3)])

//alternate way
function handget(){
    let hann=Math.floor(Math.random()*3)
    return hands[hann]
}
console.log(handget())


// difference b/w innerHTML and textContent
// innerHTML==will change or add or modify the html contents
// where as textContent will not it displays what you add to the js.

// for(i=0;i<myLeads.length;i++){
//     ulEl.innerHTML+="<li>"+myLeads[i]+"</li> "
// }//this leads to add list in the html element as .www
// in case of textContent it displays like <li> www </li>

//practice-27-->template string/literals
const recipient="james"
let email ="hey"+ recipient+"! How is it going? cheers per"//using ordinary method
console.log(email)

email=`hey ${recipient}! How is it going? cheers per`//by using template strings
console.log(email)
//making more dynammic using template strings ....in template strings we can break the strings in many lines which will not give error where as normalstrings will do
const sender ="kokila"
email=`hey
 ${recipient}!
  How is it going? 
  cheers
   ${sender}`
console.log(email)
 
// practice-28-->localstorage...devoloper tools
console.log(localStorage.setItem("myLeads","www.examplelead.com"))//it store set key value pair 
console.log(localStorage.getItem("myLeads"))//if we log out this it will o/p as "www.examplelead.com"
localStorage.clear()//if we clear this the items will clearand if we again give the above statements it will o/p as null.

//stringify() takes a JavaScript object and then transforms it into a JSON string. JSON. parse() takes a JSON string and then transforms it into a JavaScript object.
// in js the falsy values are 
// ""
// false
// 0
// null --->how you as a developer signalize emptiness
// undefined--->how js signalizes a emptiness
// NaN
const credits=0
if(credits){
    console.log("let's play")

}
else{
    console.log("sry!you dont haveany credits")
}

//practice-29--passing value by arguments
const welcome = document.getElementById("welcome-el")
function greetings(name,greets){
    welcome.textContent=name+", kokila "+greets
}
greetings("greeting","welcome back")
//practice-30 by removing all the +symbols we can add the template literals..
const welcomes = document.getElementById("welcomes-el")
//....parameters which always inside the functions...here(name,greets)are the parameters
function greetins(name,greets){
    welcomes.textContent=`${name} , kokila ${greets}`
}
greetins("greeting","welcome back")//......arguments always in outside the functions
//practice-31-->add function by passing the values
function add(a,b){
      let c= a+b
      return c

}
console.log(add(3,7))
console.log(add(9,102))

//practice-32 --->passing  the value not only string we can pass array as well
function getFirst(arr){
    return arr[0]
}
console.log(getFirst([1,2,3,4]))

