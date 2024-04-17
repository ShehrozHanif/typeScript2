// In this topic we cover If-else Statement

// let raining:boolean = true
// if(raining){
//     console.log("Let's smoke a Sheesha")
// }else{
//     console.log("Than back to Work")
// };

// Ther is another way like we assign a value

// let day:string = "Thursday"
// if(day == "Thursday"){
//     console.log("Today is your Class")
// }else{
//     console.log("Today is your Off")
// }

// Now making more intresting using else-if

// let day = "thursday";
// let time = "8:00" ;
// if(day == "thursday" && time == "8:00"){
//     console.log("It's time for class")
// }else if(day == "thursday" && time == "10:00"){
//     console.log("Class time is over")
// }else if(day == "Friday" && time == "8:00"){
//     console.log("Today is not your Class")
// }else{
//     console.log("Today if Off")
// };

// Now taking to the advance level using Prompt

// import inquirer from "inquirer"
// let day = await inquirer.prompt([
//     {
//         name:"day",
//         type:"string",
//         message:"Tell me the Class Day",
//     }
// ])

// let time = await inquirer.prompt([

//     {
//         name:"time",
//         type:"string",
//         message:"Tell me the timming"
//     }
// ])

// if(day.day == "thursday" && time.time == "8:00"){
//     console.log("It's time for class")
// }else if(day.day == "thursday" && time.time == "10:00"){
//     console.log("Class time is over")
// }else if(day.day == "Friday" && time.time == "8:00"){
//     console.log("Today is not your Class")
// }else{
//     console.log("Today if Off")
// };



// Ternary Operator
// let isHungry = true;
// let snack = isHungry ? "Apple" : "water"

// console.log(snack);

// let age:number = 18;
// let bet = age==18 ? "Licenese  to do" : "wait for 18"
// console.log(bet)

// Same as If-else only the matter is we save in variable basically its a short form of if-else


// Switch Statement

// let day = "SHABRAT"
// switch(day){
//     case "Eid":
//      console.log("Let's go for outing")
//      break;
//     case "Choti Eid":
//      console.log("BBQ")
//      break;
    
//      default:
//     console.log("kAAM KAAM KAAM ") 
// }
    

// let age = 18

// switch(age){
//     case 18:
//         console.log("go for making license")
//         console.log("Apply for test")
//         // break;
//     case 22:
//      console.log("needs to prepare")
//     //  break;

//     case 25:
//         console.log("Time for marriage")
//         // break; 
//     default:
//      console.log("Kch kariye kch Kariye meri nas nas bole")    
// }
 

       // let's play a guess game using if-else & comaparison Operator

// let guessNumber:number = 7;
// let targetedNumber:number = 6;

// if(guessNumber>targetedNumber){
//     console.log("Your Guess is too High")
// }else if(guessNumber<targetedNumber){
//     console.log("your guess is too low")
// }else{
//     console.log("bingo! you win the Car")
// }

             // Friend Checking Game

// In this scenario we use OR || Operator with if-else

//   let isFriend:string = "Shehroz"; 
//   if(isFriend == "Shami" || isFriend == "Shehroz" ){
//     console.log(isFriend + " is your friend")
//   }else{
//     console.log(isFriend + " is not your friend")
//   }         

// In this scenario we use && Operator with if-else Statement

let player1 = "Rock";
let player2 = "Scissors"
if(player1 === player2){
    console.log("It's a tiel")
}else if ((player1 === "Rock" && player2 === "Scissors") || (player1 === "Scissors" && player2 === "Paper" )
 ||(player1 === "Paper" && player2 === "Rock")){
    console.log("player1 Wins!")
}else{
    console.log("player2 Wins!")
}
// Basically what is happen like if only one condition is True in OR || Operator then the whole statement is true, So this 
// is happen in this game else -if consdition is true so player 1 win else if the condition was not true then
// conndition 2 will print 


// Nested if
// its means if k under if

let userName = "Shehroz";
let id = 2568;
let code = 2666;
if(userName == "Shehroz" && id == 2568){
    console.log("please Enter code")
    if(code == 2666){
        console.log("welcome to panel")
    }
};

// So this is how its work if k under if 