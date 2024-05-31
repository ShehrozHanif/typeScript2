// Basic Practice Of Object
let person = {name: "Ameen Alam"};
console.log(person.name)

let person2: {name:string;}= {name:"Shehroz Hanif"}
console.log(person2)
console.log(person2.name)

let person3:{name:string; age:number; address:string;}={
    name:"Shehroz",
    age: 26,
    address:"NewYork City "
}

console.log(person3)
console.log(person3.name)
console.log(person3.age)
console.log(person3.address)

person3.age = 50;
console.log(person3.age)

        // Type Aliyasis


type user = {
    name: string;
    age: number;
    haspet:boolean;
};

let user1:user ={
    name:"shehroz",
    age:26,
    haspet: true
}
console.log(user1)
console.log(user1.name)
console.log(user1.age)
console.log(user1.haspet)

type Operation = (x:number, y:number)=>number;
const add:Operation = (x,y)=>x+y;
const sub:Operation= (x,y)=>x-y;
console.log(add(5,6))
console.log(sub(6,5))

// Type Literal
let drinkSize : "Small" | "Medium" | "Large"
drinkSize = "Small";
drinkSize= "Large";
drinkSize = "Medium";

console.log(drinkSize)
// drinkSize = "Jumbo"

// Type Union
// values will be change according to the requirment

let mixBag: string | number;
mixBag = 1
mixBag = "Apple"
console.log(mixBag)

// type intersection
type BeachGear = {
    sunscreen:boolean;
    towel:boolean
}

type MountainGear = {
    waterbottle: number;
    map: boolean;
}

type Adventure = BeachGear & MountainGear;
let myGear:Adventure = {
    sunscreen: true,
    towel:true,
    waterbottle: 2,
    map: true,
}
console.log(myGear)

console.log(myGear.sunscreen)

//   Array and their Properties

let fruits = ["Apple","Kiwi","Mango"]
console.log(fruits.length)
console.log(fruits[2])

let fruit:string[] = ["Water Melon","Orange","Lemon"]
console.log(fruit.length);
console.log(fruit[2])

// Array Method
let color:string[]= ["Red","Black","White","Yellow","Green"]
console.log("Before Using Pop :" , color)
color.pop();
console.log("After Using Pop :" , color)
console.log("Before Adding Push: " , color)
color.push("Navy Blue");
console.log("After Adding push: " , color)
color.shift();
console.log("After adding Shift: ", color)
color.unshift("Pink")
console.log("After adding Unshift " ,color)

//  Multui Dimentional Array:
let matrix: number[][]=[
    [1,2,3],
    [2,5,6],
    [3,7,9]
]

console.log(matrix[1])
console.log(matrix[2])

type Book ={
    title:string
    author:string
    isbn:string
};
let library:Book[] = [
    {title:"Never Give Up", author:"Imran Khan",isbn:"985632145"},
    {title:"2022", author:"Imi", isbn:"12356554"},
]

console.log(library)

library.push({
    title:"Money Can't buy",
    author: "Srz",
    isbn: "65854321"
})

console.log(library)
// let's finding a book
let bookFound = library.find(Book => Book.author === "Imran Khan")
// console.log(bookFound)
let foundbook = library.find(Book => Book.author === "Srz")
console.log(foundbook)

// import inquirer from "inquirer"
// import chalk from "chalk"

// const currency:any = {
//     USD:  1, // Base Currency
//     GBP:  0.79,
//     EURO: 0.92,
//     KWD: 0.31,
//     SAR: 3.75,
//     QAR: 3.64,
//     PKR: 278,
//     INR: 83.30
    
// };


// let userAnswer =  await inquirer.prompt([
//    {
//     name:"From",
//     type:"list",
//     message: chalk.red("Enter from currency"),
//     choices:["USD","GBP","EURO","KWD","SAR","QAR","PKR","INR"]
//    },

//    {
//     name:"TO",
//     type:"list",
//     message:chalk.green("Enter to currency"),
//     choices:["USD","GBP","EURO","KWD","SAR","QAR","PKR","INR"]
//    },

//    {
//     name:"Amount",
//     type:"number",
//     message:chalk.red("Enter the Amount"),
//    }
// ])


// let fromAmount = currency[userAnswer.From]
// let toAmount = currency[userAnswer.TO]
// let Amount = userAnswer.Amount
// let conertToBase = Amount / fromAmount
// let convertedAmount = conertToBase * toAmount
// let fc = Math.floor(convertedAmount)
// console.log(fc)


// Assignment
let froot:string[]= ["Apple","Fruit","banana","Mango","Lichi"]
console.log(froot)
froot.push("Water Mellon")
console.log("After Adding: " , froot)
froot.shift()
console.log("Remove the first fruit " , froot)
froot.unshift("Kiwi")
console.log("Add a new fruit at the beginning " , froot)

let findIndex :string = "banana"
let index:number = froot.indexOf(findIndex)
console.log("Bnanan at index: " , index)

// index Remove
if(index !== -1){
    let removeFruit:string=
    froot.splice(index, 1)[0]
    console.log(`Remove ${removeFruit} from the array`);
    console.log("Updated fruit array " ,froot)
}else{
    console.log(`${findIndex} not found in that array`)
}

// Question 2



// Question 3

 
type book = {
    title: string;
    author: string;
    yearPublished: number; // Corrected property name
};

let lib: book[] = [
    { title: "Never give Up", author: "Imran Khan", yearPublished: 1999 }, // Corrected property name
    { title: "TrueLeader", author: "Sheroz", yearPublished: 2024 }
];

let findbook = lib.find(book => book.author === "Imran Khan");
console.log(findbook);

let findbook2 = lib.filter(book => book.yearPublished > 2000);
console.log(findbook2);

// Question No 4
// Create an array of numbers

let numbers:number[] = [10,20,30,40,50,60,70,80];

// create a new array with the square of each number

let squareNumber:number[] =numbers.map(num => num * num);
console.log(squareNumber)

let greaterNumber:number[] = numbers.filter(num => num > 50)
console.log(greaterNumber)

let addNumber=numbers.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
},0);
console.log("sum of all number " + addNumber)

// Question No 5

type students = ([
    {
        nam:string,
        id:number,
        Grade:number[],
        averageGrade?: number;
    }
])

// let student: students[] =[
//     {nam: "Shehroz", id:"srz266", Grade:[90,95,99,98]},
//     {nam: "Shehroz", id:"srz266", Grade:[90,95,99,98]}
// ]

let coffeeOrder:[string,string]=["Cappuccino","Medium"];
console.log(coffeeOrder)

enum coffeType{
    expresso,
    late,
    mukachino,
    pakichino
}

let myCoffe :coffeType = coffeType.late
console.log(myCoffe)

