console.log("Hello");
console.log("3"/"5");
console.log(typeof 100);
console.log(typeof undefined);
console.log(typeof typeof undefined);
console.log(typeof [1,2,10]);

// Types of Declaration
// var     (Function scope)         Re-assign  ✅     Re-declaration   ✅  
// let     (block scope)            Re-assign  ✅     Re-declaration    ❌
// const   (block scope)          Re-assign  ❌     Re-declaration   ❌

var name ="yeshwanth";
var name="pavan"   //Re-declaration
name ="srikanth"   // Re-assign or initialization
console.log(name)


let name1 ="yeshwanth";
name1 ="srikanth"   // Re-assign or initialization will work
console.log(name1)

const fun =  "Keerthana";
console.log(fun)

//--------------------------------------------------------------------------------------------------

// scope: (Life time variables)      

{
    // let quote =`live more worry less 😀`;         // quote is not defined
    var nicequote = "Be good Do good 🎉🎉";
}
// console.log(quote);  //❌ 
console.log(nicequote); //✅


function beautiful() {
    let quote = `Live more worry less 🤩`;
    var niceQuote = "Be good Do good 🎉🎉";
    console.log(quote);    //✅   
    console.log(niceQuote);//✅    
}
beautiful()
//console.log(quote);    //❌   
//console.log(niceQuote);//❌ 
//---------------------------------------------------------------------------------------------------

// if Statements:

if(5>4){  // 5>4 condition
    //block scope 1
    let x= 10;
}else{
    //block scope 2
    console.log(x)   //❌
}


if(5>4){  // 5>4 condition
    //block scope 1
    var x= 10;
}else{
    //block scope 2
    console.log(x)   //✅
}

for(let i=0; i<array.length;  i++){

}

function DrivingTest(age){
    if(age > 18){
        var msg ="Eligible";
    } else {
        var msg ="Not Eligible"
    }
    console.log("You Driving test is" +"  "+ msg)
}
DrivingTest(20);  
//------------------------------------------------------------------------------------------------


// TypeCasting & Coercion
// 1)Implicit Coercion
var x1 = 3;    
var x2 = "5";
console.log(x1 +x2);  // 3 convert to string "3" then = "3"="5"=  "35"  // 3+"5"   here + prefers string concatenation 
console.log(x1-x2);   // "5" convert to number 5 then = 3-5 = -2        // minus its only to substract

// 2)Explicit Coercion
var x1 = 3;    
var x2 = "5";
var x3 = 8;
console.log(x1 + parseInt(x2));
console.log(x1 + +x2);
console.log(x1+x2+x3);
//----------------------------------------------------------------------------------

// we have to understand that how arrays will store the data
var t1 = [200, 400];    // these is t1 =x1 address
var t2 = [200, 400];    // these is t2 =x2 address   they look like same but they are not same.
var t3 = t1;
// Array & objects are compared by Address
console.log(t1 === t2);
console.log(t3 === t1);


var t1= [200, 400]; 
var t2= [200, 400];
var t3= t1;    //copy by reference (address)
t1.push(70);
t2.push(100);
t3.push(20);
console.log(t1);
console.log(t2);
console.log(t3);


var t1= [100,200];
var t3=t1;
t1.push(400);
console.log(t1)
console.log(t3)

var r1=[100,200];
var r2=[...r1];         // copy by value
var r3=[80,...r2,400,500]
console.log(r2)
console.log(r3)
//--------------------------------------------------------------------------------------------------

//types of Function:
function double(n){
    return  n*5
}
console.log(double(4));


function sum(a, b){
    return a+b;
}
console.log(sum(5));
console.log(sum(5,20));


function doubleAndSum(a,b){
   return sum(double(a), double(b))
}
console.log(doubleAndSum(10, 20))
//-----------------------------------------------------------------------------------------------------

