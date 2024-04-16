//document.getElementById("count-el").innerText = 5
//challenge 1:
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
//challenge 2:
// let age = 20
// let humanDogRatio = 7
// let myDogAge = age * humanDogRatio
// console.log(myDogAge)

//challenge 3:
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints+50
// console.log(bonusPoints)

// bonusPoints = bonusPoints-75
// console.log(bonusPoints)

// bonusPoints = bonusPoints+45
// console.log(bonusPoints)

//challenge 4:
// function countdown(){
//     for (let index = 5; index > 0 ; index--) {
//         console.log(index)        
//     }
// }

// countdown()

//challenge 5:
// function myFunc(){
//     console.log(42)
// }
// myFunc()

//challenge 6:
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum(){
//     console.log(lap1+lap2+lap3)
// }
// lapSum()

//challenge 7:
// let lapsCompleted = 0
// function laps(){
//     lapsCompleted++
// }
// laps()
// laps()
// laps()
// console.log(lapsCompleted)
let count = 0;
function increment(){
    count ++
    document.getElementById("count-el").innerText = count
}

//second way
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment(){
//     count++
//     countEl.innerText = count
// }

//DOM (Document Object Model: how you use JS to modify a website)
let saveEl = document.getElementById("save-el")
function save(){
    let countStr = count + " - "
    count = 0
    saveEl.textContent += countStr 
    document.getElementById("count-el").innerText = count
}

//Strings
//Challenge 8:
// let username = "Ali"
// let message = "You have 3 new notifications"
// let messageToUser = message + " " + username
// console.log(message+" "+username)
// console.log(messageToUser)

//Challenge 9:
// let name = "Ali"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

//strings vs num
// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(totalPoints)

