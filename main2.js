// Function 
// function myFunction(){
//     let add = 2 + 2;
//     return add
// }
export {};
// let sum = myFunction()
// console.log(sum)
// function toFunction(){
//     let name1 = "Shehroz"
//     let name2 = "Hanif"
//     console.log(name1 + name2)
// }
//  toFunction()
// let ard = ()=>{
//     let add = 5 * 4
//     return add
// }
// let mok = ard()
// console.log(mok)
// function usFunction(chawal:number,ghos:number,oil:number){
//   let mix = chawal + ghos + oil;
//   return mix
// }
// let biryani = usFunction(5,6,8)
// console.log(biryani)
// Default Parameters
// function kitFunction(egg:number=3, salt:number=2, butter:number=4 ):number{
//     return egg+salt+butter
// }
// let anda = kitFunction()
// console.log(anda)
// function agFuntion(egg:number=5, salt:number=2, butter:number=3, oil:number=2):number{
//     return egg + salt + butter + oil
// }
// let mix = agFuntion(2,5,6)
// console.log(mix)
// Rest Parameters and Spread Operator
// function exFunction(egg:number=2, ...ingridients:number[]){
//     console.log(egg)
//     console.log(...ingridients)
// }
// exFunction(5,6,9,8,2,3)
// let add = () => 1 + 5+ 5
// let response = add()
// console.log(response)
// let make = (egg:number, salt:number, butter:number):number=>{
//    return egg + salt + butter
// }
// let anda = make(2,5,6)
// console.log(anda)
//  let ace = ()=>{return 1 + 5 + 6}
//  let beta = ace()
//  console.log(beta)
// let hif = ()=>{
//     let cooked = 5 + 6 * 5
//     return cooked
// }
// let jk = hif()
// console.log(jk)
// let makeAnda = (egg:number,salt:number,butter:number):number=>{
//     return egg + salt + butter
// }
// let cob = makeAnda(2,3,6)
// console.log(cob) 
// Recursive Function
// function coundown(number:number):void{
//     if(number<=0){
//         console.log("done")
//         return;
//     }
//     console.log(number)
//     coundown(number - 1)
// }
// coundown(0);
// function factorial(n:number):number{
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// let response = factorial(1)
// console.log(response)
// Nested Function
// function outSide(){
//    let innerSide = ()=>{
//     console.log("Hello Function")
//     }
//     innerSide()
// }
// outSide()
// let onefunction = ()=>{
//     console.log("Badla le ni paya re")
// };
// let twofunction = ()=>{
//     onefunction()
// }
// twofunction()
// Callback Function()
// function hello(call:(name: string)=>void, newName:string){
//    call(newName)
// }
// let arrowFunc = (name:string)=>{
//   console.log(`Hello ${name}`)
// }
// hello(arrowFunc, "jhanzaib")
// Set TimeOut
//  setTimeout(()=>{
//     console.log("hello Parkar")
// },1000); // wait for 1 Second
// let input1 = await inquirer.prompt([
//     {
//         name:"userAnswer",
//         type:"string",
//         message:"What is the Capital of France ?"
//     }
// ]);
// function quiz(question:string, correctAnswer:string){
//     if(input1.userAnswer.toLowerCase()=== correctAnswer.toLowerCase()){
//         console.log("Correct")
//     }else{
//         console.log("Wrong Answer Try Again")
//     }
// }
// quiz("What is the capital of France" , "Paris")
//  lets make a Cal
// let user1 = await inquirer.prompt([
//     {
//         name:"input1",
//         type:"number", 
//         message:"please Enter a number", 
//     },
//     {
//         name:"Operator",
//         type:"list",
//         message:"Please Select an Operator",
//         choices:["Addition","Subtraction","Multiplication","Division"]
//     },
//     {
//         name:"input2",
//         type:"number",
//         message:"please enter a number"
//     }
// ])
// if(user1.Operator == "Addition"){
//     console.log(user1.input1 + user1.input2)
// }else if(user1.Operator == "Subtraction"){
//     console.log(user1.input1 - user1.input2)
// }else if(user1.Operator == "Multiplication"){
//     console.log(user1.input1 * user1.input2)
// }else if(user1.Operator == "Division"){
//     if(user1.input1 == 0){
//         console.log("Zero is not divisible")
//     }else{
//         console.log(user1.input1 / user1.input2)
//     }
// }else{
//     console.log("Please Select an Operator")
// }            
// Quiz Question
// Question1
// function calculateProduct(number1:number, number2:number):number{
//     return number1 * number2
// }
// let result = calculateProduct(5,5)
// console.log(result)
// // Quesstion No2
// function greet( name:string,greeting:string = "Hi"):string{
//     return   greeting + " " + name
// }
// let abs = greet("zia")
// console.log(abs)
// // ?Question No 3 
// let arrfun = (a: number, b:number):number=>{
//   return a + b
// }
// console.log(arrfun(5,6))
// // Question No 5
// let multiplier=(factor:number): (num: number) => number=>{
//     return function(num:number){
//         return factor * num
//     }
// }
// // Question No 6
// let anm = multiplier(5)
// console.log(anm(5))
// function factorial(num :number):number{
//     if(num<=0){
//         return 1;
//     }
//     return num *factorial(num-1)
// }
// let response = factorial(0)
// console.log(response)
// // Question No 7
// function outerFunc(x:number){
//     function innerFunc(){
//         x++;
//         return x * 3
//     }
//     return innerFunc();
// }
// console.log(outerFunc(4))
// // Question 8
// const numbers = [1, 2, 3];
// const doubleNumbers = (arr:any, callback:any) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// };
// const doubledNumbers = doubleNumbers(numbers, (x:any) => x * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6]
// // Question no 9
// function simulateDelay(callback:any) {
//     setTimeout(function() {
//         callback();
//     }, 2000); // 2000 milliseconds = 2 seconds
// }
// simulateDelay(function() {
//     console.log("Data retrieved");
// });
// const aCities: string[] = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// const o: string[] = ["th", "st", "nd", "rd"];
// for (let i = 0; i < aCities.length && i < o.length; i++) {
//     const choice: string = (i + 1) + o[i];
//     console.log(choice + " choice is " + aCities[i]);
// }
