// 1) Normal function:

// function declaration/ definition
// { } = function body
// n => function arugument/parameter
function double(n){
    return n*2
}

// a, b are function arugument/parameter
function Sum(a, b){
    return a+b;
}
// double(4)  => Function Calling (or) invoke
// console.log(double(4)) 

// why ? you define a function       // why we are doing these
// 1. Resue
// 2. Modularity
// console.log(sum (4,3))
// console.log(sum (12,43))


function doubleAndSum(x, y){
   return Sum(double(x),double(y));
}
console.log(doubleAndSum(10,20));



function welcome(name){
   "Hi, " + name + " 🙋‍♂️!!!";
}
console.log(welcome("srikanth"));    // undefined


function welcome(name){
   return "Hi, " + name + " 🙋‍♂️!!!";
 }
 console.log(welcome("srikanth"));   // when returns it will get output
 console.log(welcome("srikanth"));  


//2) Arrow functions:\

// syntatic sugar
const doubleArrowOne=(n) => n*2    //when function body is one line
console.log(doubleArrowOne(4500))


const doubleArrow = (n) =>{
    return n*2
};
console.log(doubleArrow(1500))


const Sumone =(a,b) => (a+b) 
console.log(Sumone(5,5)) 


// 3) IIFE :Immediately Invoked Function Expression

(function double1(n){
    console.log(n*2)
})(50);

// () creates expression
// Anonymous function means    -   nameless function

(function (a,b){
    var c= a+b;
    let x= a-b;
    const y=a*b;
    console.log(c, x, y)
})(3,10);


((name)=>{
   return "hi,"+name+" "+"🙋‍♂️"
})('srikanth')

((name) => "hi,"+name+" "+"🙋‍♂️")('srikanth')    // arrow anoynomous function

((t) => t*2)(4)
//-------------------------------------------------------------------------------------------------------------


// copy by value:

var t1= [200,400];
var t3=t1;     //copy by reference 
t1.push(60)
console.log(t1)

var q1 =[100,200];
var q3 =[...q1];       // copy -by-value
var q4 =[...q1, 300,400]
console.log(q4)
console.log(q1,q3)
q3.push(50)
console.log(q1,q3)

var r1= [90, 40]
var r2= [30, 80]
var r3= [...r1, ...r2]        
console.log(r3)           // r3=> [90,40,30,80]

//spread the values
var q1=[100,200]
var q7=[80, ...q1, 300,400,500]
console.log(q7);
//--------------------------------------------------------------------------------------------------------------


// different for loops:
// 1) For loop:
var marks =[80,90,70,50,60];
for (var index=0; index<marks.length; index++){
   console.log("index is ", index);
   console.log('value is ',marks[index]);
}

// 2) for...of
var marks =[80,90,70,50,60];
for (var marks of marks){
   console.log("marks is",marks)
}

//3) for...in
var marks =[80,90,70,50,60];
for (var index in marks){
   console.log("index is ", index);
   console.log("value is ", marks[index]);
}
// use for...of find the topper rank 
var marks =[80,90,70,50,60];
var highest=marks[0];
for(var mark of marks){
   if(highest <mark){
      highest=mark;
   }
}
console.log(highest);

//------------------------------------------------------------------------------------------------------------


// object Methods:

// js object
let salaries = {
   John:100,
   Peter:200,
   Mary:300,
}

// to ways to access the object to get output
console.log(salaries.John)      //100
console.log(salaries['John'])   //100
console.log(Object.keys(salaries))   // [ 'John', 'Peter', 'Mary' ]  
console.log(Object.values(salaries)) // [ 100, 200, 300 ]

// difference b/w undefined & not defined
let a; 
a 
// typeof(a)
// console.log(a)     //undefined is value 
                      //not defined is a error
// to convert js object to JSON 
console.log(salaries)                    //{ John: 100, Peter: 200, Mary: 300 } = JS Object
console.log(JSON.stringify(salaries))    //{"John":100,"Peter":200,"Mary":300}  = Json always in String format

// JSON.stringify    object => JSON      
// JSON.parse        JSON   => Object  

// JS Object => ' single quotes'  or "double quotes" acceptable
// JSON      => Only double quotes
//JSON       =>  Javascript Oject Notation
// for array=index , object=key is more important

let student ={
   name:"Sandeboina srikanth",
   age:25,
   marks:[80,75,60,68],
   class:"B43 English ",

}
console.log(student);
console.log(JSON.stringify(student));
console.log(typeof JSON.stringify(student));
console.log(JSON.parse('{"name":"Sandeboina srikanth","age":25,"marks":[80,75,60,68],"class":"B43 English "}'));

// for looping object with for...in
//for...in
var salary = {
   John:100,
   Peter:200,
   Mary:300,
}
for (var name in salary){
   var sal=salary[name]
   console.log(name, "salary is ", sal)
}

//for...of
var salary = {
   John:100,
   Peter:200,
   Mary:300,
}
var name=object.keys(salary)

for (var name in salary){
   var sal=salary[name]
   console.log(name, "salary is ", sal)
}

//------------------------------------------------------------------------------------



// function
// function can be passed to another function as an Argument
function double(n){
   return n*2;
}
function square(n){
   return n*n;
}
function combine(fn1,fn2,val){
   return fn2(fn1(val))
}
console.log(combine(square, double, 5))


// function programming(paradigm) haskel , f#, scala | function composition
function toUpper(str){
   return str.toUpperCase();
}

function firstLetter(str){
   return str[0];
}

function combine (fn1, fn2, val){
   return fn2(fn1(val));
}

const val ="v.ram"

console.log(combine(firstLetter, toUpper, val));
// console.log(combine(firstLetter, toUpper, S.santhose));
// console.log(combine(firstLetter, toUpper, t.santhose));
// double (square(5))

//function returning another function
function sayHello(){
   return function(){
      console.log("Hello! 😊",)
      return "cool"
   }
}
// sayHello()();
console.log(sayHello()());

// another way to return function
const sayHello1 =function(){
   return function (msg){
      console.log("Hello! 😊");
      return msg;
   }
}
const myWay=sayHello1();
// myWay();    //here myway is anoynomous
//const double =(x)=> x*2; 
console.log("another way to call",myWay('hi! msg'));

//-------------------------------------------------------------------------------------------------------------

//Lexical scope:
//father lexical scope / child lexical scope
// closure  (own scope+lexical scope)
// Fathers Lexical scope + Father's Scope = Father's Closure
// Child Lexical scope + Childs's Scope = Childs's Closure

let codeworld ="Hulk";

function spaceship(){
    let question = "please provide code world "

    function codeworldCheck(){
        let passworld = "hulk";
        console.log(question);
        if (passworld = codeworld){
            console.log("welcome,"+passworld+"the strongest avenger")

        }else{
            console.log("X Access denied to")
        }
        codeworldCheck(); 
    }
    spaceship();
    
}

//-------------------------------------------------------------------------------------------------------------


// XHR (XML Http request)
// you asked chennai  whether report ,tcp connection established , your system and whether server is connected
xhr.open() 
// once its opened you have to send request 
xhr.send()  
// Then you will get the response as the JSON data 
JSON-data
//when data come back what want to do use onload .suppose you want convert celsius to feranheit
xhr.onload()


const getCountries =()=> {
//Creating the request
const xhr = new XMLHttpRequest();
//Reading the data
//METHOD, URL
// API or endpoint => Can access the data
xhr.open("GET", "https://restcountries.com/v3.1/all");  // open
xhr.send();  //send
xhr.responseType = "json";   //data format
xhr.onload = () =>{
   const countries = xhr.response;
   console.log(countries)
   // const countryNames =countries.map(
   //    (country) => country.name.common
   // );
   //    console.log("List of countries names", countryNames);
} 
};
getCountries();


// Task 1
// Find all countries that speaks spanish?        Expected output  ["spain","Mexico"...]

// task 2
// Find all countries >= 1_00_00_000 population?     Expected output  ["Russia","India","spain","Mexico"...]   

//------------------------------------------------------------------------------------------------------------
// ES6 Features introduced:
// 1 => let & const
// 2 => ` ` Template literal
// 3 => ... Spread Operator
// 4 => ... Rest operator
// 5 => Destructuring
// 6 => Class
// 7 => Arrow Function =>
// 8 => Promises

// Latest Es6+ new features :
// 1=> Numeric Separators  1_00_00_000
// 2=> Nullish Coalescing ??
// 3=> Optional Chaining ?.
//--------------------------------------------------------------------------------------------------------------

// Difference b/w string Concate+ & template literal
// Template Literal  
function fullname(firstname, lastname) {
   // return "welcome" + lastname + ", "+ firstname + " 😀 !!!" 
   // ${}=> Interpolation(substitution)
   return `welcome  ${lastname}, ${firstname} 😀 !!!` 
}

// console.log(fullname("Srikanth", "Yadav"))

// convert above function to arrow Function:
const fullname1 = (firstname, lastname) => 
   `welcome ${lastname}, ${firstname}  😀 !!!`;
// console.log(fullname1("Darth", "Vader"));

// supports multiline string
const quote = `Dream is not that you see in sleep, 
 dream is something
 that does not you sleep.`;
//-------------------------------------------------------------------

 // Destructuring:
 // 1)  Array Destructuring  (unpacking)
 //only if t3 is undefined it will take default value(=80)

//   const [t1, t2,t3] = [100,200]
//  console.log(t1,t2,t3)    // 100 200 undefined

//  const [t1, t2,t3=80] = [100,200,500]
//  console.log(t1,t2,t3)  // 100 200 500

// const [t1, t2,t3] = [100,200, null]
//  console.log(t1,t2,t3)     // 100 200 null

// const [, t1, t2,t3] = [100,200, null]
//  console.log(t1,t2,t3)       // 200 null undefined

const [, t1, t2,t3=80] = [100,200, null]
//  console.log(t1,t2,t3)       // 200 null 80


// 2) Object Destructuring:
// const avenger ={
//    name1: "Tony Stock",
//    house: "🏠",
//    networth: "money",
//    power: "mask power",
//    phrase: "love you 3000",

// }

// console.log(avenger.name);
// console.log(avenger.house);
// console.log(avenger.networth);

// const {name1, networth, house} = avenger;
// console.log(name1,networth,house)
// console.log(name1)
// console.log(networth)
// console.log(house)


// default value
// const {name1,networth1,power,skill}={
//    name1: "Tony Stock",
//    house: "🏠",
//    networth1: "money",
//    power: "mask power",
//    phrase: "love you 3000",
// }
// console.log(skill)    // undefined


var {name1,networth1,power,skill=["genius", "billionaire", "playboy", "philantropist"]}={
   name1: "Tony Stock",
   house: "🏠",
   networth1: "money",
   power: "mask power",
   phrase: "love you 3000",
}
console.log(skill)    // ["genius", "billionaire", "playboy", "philantropist"]


var {name1,networth1,power="💪",skill=["genius", "billionaire", "playboy", "philantropist"]}={
   name1: "Tony Stock",
   house: "🏠",
   networth1: "money",
   power: "mask power",
   phrase: "love you 3000",
   skill: ["super strong", "fly"],
}
console.log(skill)     // ["super strong", "fly"]


var {power="💪100", house="🏠"}={
   name1: "Tony Stock",
   house: null,
   networth1: "money",
   power: undefined,
   phrase: "love you 3000",
   skill: ["super strong", "fly"],
}
//it is undefined then it overide the default value
console.log(power);      // 💪100 
// null will not overide the default value 
console.log(house)       // null
//-----------------------------------------------------------------------------------------

//spread operator and Rest operator
var [s1,s2,s3]= [100,200,300,400,500,600]
console.log(s1,s2,s3)   // 100 200 300

// rest operator
var [s1,s2,...s3]= [100,200,300,400,500,600]
console.log(s1,s2,s3)     //100 200 [ 300, 400, 500, 600 ]


// spread operator
const p1 =[100,200,300];
const p2 =[400,...p1,500];
const p3=[10,20,30,...p2,40,50]
console.log(p1,p2,p3)  
//-------------------------------------------------------------------------------------------

// Array methods
// 1. array push ()
// 2. array unshift()
// 3. array pop()
// 4. array map()
 const arr =[6,7,8].map((n)=> n*2);
 //  console.log(arr)     // [ 12, 14, 16 ]
 arr.push(true)
console.log(arr)         // [ 12, 14, 16, true ]

const arr1 = [ "🐒" ,"🐐", "🐈‍⬛", "🌍"].map((n)=> n+"🙋‍♂️" );
console.log(arr1)

// map()
// 1. It always returns copy of array
// 2. It always input.length === output.length
// 3. Tranform data type



// ternary operator:
5>4 ? "Awesome" : "Cool"




















