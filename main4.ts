// While Loop

let minutesUntillBusArrive = 5;
// while(minutesUntillBusArrive > 0){
//     console.log(`Bus arrive in ${minutesUntillBusArrive}`)
//     minutesUntillBusArrive --
// }


// do{
//     console.log("Checking the buss")
//     minutesUntillBusArrive --
// }while(minutesUntillBusArrive > 0)

// function checkBusArrival(){
//     minutesUntillBusArrive--
//     if(minutesUntillBusArrive != 0){
//         return "checking for bus..."
//     }else{
//         return false
//     }
// }    
// do{
//     let response = checkBusArrival()
//     console.log(response)
// }while(minutesUntillBusArrive > 0)



// Again 
function checkBusArrival(){
    minutesUntillBusArrive --
   if(minutesUntillBusArrive != 0){
        return "Wating for buss"
    }else{
        return false
    }
}
do{
    let response = checkBusArrival()
    console.log(response)
}while(minutesUntillBusArrive > 0)



for(let i = 0; i < 5; i++){
    console.log(`Watering Plant ${i+1}`)

}

let person:any ={
    name:"Shehroz",
    age:"26",
    city:"FutureLand"
}
for(let key in person){
    console.log(`${[key]}:${person[key]} `)
 }
// let flavours =["choclate","vanilla","strawberry","pista"];
// for (let flavour of flavours){
//     console.log(flavour);
// }

// Assignment 1

// let favouriteMoivie:string[]= ["Avengers","Fast&Furious","MrBean","BabyDayOut"]
// for(let i =0; i < favouriteMoivie.length; i ++){
//     console.log(`My Favourite Movie is: ${favouriteMoivie[i]}`)
// }

// function printMovues(movie:string[]){
// for(let movie of favouriteMoivie){
//     console.log(movie)
// }
// }

// printMovues(favouriteMoivie)


// Assignment 2
// let car:any = {
//   make:"Toyota",
//   model:"Corolla",
//   year:"2024"
// }
// function carCheck(car:{[key:string]:string|number}){
// for(let key in car){
//     console.log(`${key}: ${car[key]}`)
    //             property: car[property] = value
// }
// }

// carCheck(car)


// function fizzbuzz(){
//     for(let i = 0; i < 100; i++){
//         if(i % 3 === 0)
            
//            console.log(i + " fizz")
        
//         else if(i % 5 ===0)
//             console.log(i + " buzz")  
        
//         else if (i % 3 === 0 && i % 5 === 0 )
//             console.log(i + " fizzbuzz")
//     }
       
// }

// let response = fizzbuzz()
// console.log(response)
// function fizzbuzz(){
// for (let i = 0; i <= 100; i++){
//     let output = "";
//     if(i % 3 === 0) output = "fizz"
//     if(i % 5 === 0) output = "buzz"
//     if(i % 3 === 0 && i % 5 === 0 ) output = "fizzbuzz"
//     console.log(output || i)
// }
// }
// let response = fizzbuzz()
// console.log(response)


// Question No 4

// function guessGame(userInput:number){
   
//       let number:any =Math.floor(Math.random() *10 )+ 1
//       console.log(number)        
//     if(userInput === number){
//         console.log("You win!")
//     }else{
//         console.log("Try again You loss")
//     }
// }
// let res = guessGame(7)
// console.log(res)

// let number:any = Math.random() * + 1

//  console.log(number)

// let round = Math.floor(number)
// console.log(round)

// function guessGame(userInput: number) {
//     let number: number;
//     let attempts = 0;

//     do {
//         number = Math.floor(Math.random() * 10) + 1;
//         attempts++;
//         if (userInput === number) {
//             console.log("You win!");
//             return attempts;
//         } else {
//             console.log("Try again. You lost this round.");
//         }
//     } while (true);
// }

// let res = guessGame(7);
// console.log(`It took you ${res} attempts to win.`);


function luckyDraw(userInput:number){
    let number:number;
    let attempt = 0

    do{
        number = Math.floor(Math.random() *10)+1;
        attempt++;
        if(userInput === number){
            console.log("you win");
            return attempt;
        }else{
            console.log("Bad Luck Next Time")
        }
    }while(true)
}

let check = luckyDraw(6)
console.log("it took "+ check + " attempt")

// Question No 5

let countdown = 10
while(countdown > 0){
    console.log(`countdown: ${countdown}`)
    countdown--
}

// Question No 6

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
 
function checkDay(day:Day):string{
    if(day === Day.Saturday || day === Day.Sunday){
        return "weekend"
    }else{
        return "weekDay"
    }
}

let today = Day.Monday
console.log(`Today is a ${checkDay(today)}`)

function rgb(){

}

// let color:[string , string, string] = ["Red","Green","Blue"]
// console.log("RGB: " , color)

// Define tuple type for RGB color values
type RGBColor = [number, number, number];

// Function to describe the color based on RGB tuple
function describeColor(rgb: RGBColor): string {
    const [red, green, blue] = rgb;
    return `The color is R:${red}, G:${green}, B:${blue};`
}

// Example usage
const color: RGBColor = [255, 0, 0]; // Red color
console.log(describeColor(color));