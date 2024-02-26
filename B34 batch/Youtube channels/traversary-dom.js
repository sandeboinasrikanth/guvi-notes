//EXAMINE THE DOCUMENT OBJECT
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title)
// // document.title = 12345;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// // document.all[6].textContent="srikanth12345";
// console.log(document.forms)
// console.log(document.links)

//getElementById //
// console.log(document.getElementById('header-title'));
var headerTitle =document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent= "hello";
// headerTitle.innerText= "goodbuy";
// headerTitle.innerHTML= "<h3>Hello world</h3>";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
header.style.borderBottom = 'solid 4px #333'

//getElementsByClassName //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= "sandeboina srikanth";
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor="yellow";

// //gives error
// // items.style.backgroundColor="#f4f4f4";
// // items.style.backgroundColor="blue";
// for(var i=0; i < items.length; i++){
//     items[i].style.backgroundColor="#f4f4f4";
// }


// getElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent= "sandeboina srikanth";
// li[1].style.fontWeight="bold";
// li[1].style.backgroundColor="yellow";

// //gives error
// // items.style.backgroundColor="#f4f4f4";
// // items.style.backgroundColor="blue";
// for(var i=0; i < li.length; i++){
//     li[i].style.backgroundColor="#f4f4f4";
// }


// Queryselector
// var header =document.querySelector('#main-header');
// header.style.borderBottom="solid 4px #ccc";

// var input = document.querySelector('input');
// input.value= "Hello world! ";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item = document.querySelector('.list-group-item');
// item.style.color= "red"

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color= "blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="pink";
// secondItem.style.fontWeight="bold";

// Queryselector All
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor="#f4f4f4";
//     even[i].style.backgroundColor="#ccc";

// }



// Traversing dom //
var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);   
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="lightblue";
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes //
// console.log(itemList.childNodes);

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild //
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElemenntChild.style.backgroundColor = "red";


// lastChild //
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "blue";

//nextsibling
// console.log(itemList.nextSibling)
//nextElementsibling
// console.log(itemList.nextElementSibling)


//previoussibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="gray";


//CreateElement

//create a div
// var newDiv = document.createElement('div');
// //add class
// newDiv.className='hello';
// //add id
// newDiv.id='hello1'
// //add attr
// newDiv.setAttribute('title', 'hello Div');
// //create text node
// var newDivText = document.createTextNode('Hello world');
// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv)
// newDiv.style.fontSize='30px';



// var button = document.getElementById('button').addEventListener
// ('click', function(){
//     console.log(123)
// })

// var button = document.getElementById('button').addEventListener
// ('click', buttonClick)

// function buttonClick(e){
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e)
//     // console.log(e.target)
    
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target+ '</h3>';

//     // console.log(e.type)
//     // console.log(e.clientX)
//     // console.log(e.clientY)
//     // console.log(e.offsetX)
//     // console.log(e.offsetY)



// }

// var button = document.getElementById('button').addEventListener
// ('click', runEvent)

// var button = document.getElementById('button');
// // var box = document.getElementById('box')

// button.addEventListener('click', runEvent);

// function runEvent(e){
//     e.preventDefault();
//     console.log('EVENT TYPE: ', e.type)
    

// }


