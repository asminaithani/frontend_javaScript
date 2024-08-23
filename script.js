//console prompt alert
//console.log
//console.warn 
//console.error
//alert("hi");
//prompt("hiii");

for(var i = 5; i<10; i++){

}
start; 
while(end){
    change;
}

start;
while(end){
    change;
}
start;
while(end){
    change;
}

//1-10
for(i=1; i<11; i++){

}
//2-12
for(i=2; i<13; i++){

}
//32-44
//44-32
for(i=44; i>31; i--)
//54-12
for(i=54; i>11; i--){
}

//functions
function abcd(){
     console.log("hi");
     console.log("hello");
     console.log("asmi");
}

abcd();
abcd();

function abcd(){
    var i = 12;
    console.log(i);
    for(var b = 12; b<22; b++){
        console.log("hello");
    }
}
abcd();

//parameters and arguments

function abcd(val){
    console.log(12+val);
}
abcd(12);

var abcd = function(){
    //function expression
}

/* fat arrow
()=>{

}*/


var heroes = ["spiderman", "shaktiman", "captain america"];
console.log(heroes[1]);

arr.forEach(function(elem){

})

arr.forEach(function(val){

})


var obj = {
    name : "Asmi",
    age :19,
    email : "kuch@kuch.come"
};

obj.name; 


console.log(this);

function abcd(){
    console.log(this);
}
abcd();

var obj = {
    name : function(){
        console.log(this);
    },
    email: function(){
        console.log(this);
    }
}
obj.name();


var obj2 = {
    name: function(){
        const child = ()=>{
            console.log(this);
        }
        child();
    }
}
obj2.name();



var obj = {
    name: function(){
        function childfunc(){
            console.log(this);
        }
        childfunc();
    }
}
obj.name();



console.log(this);

var obj = {
    name: function(){
        console.log(this);
    }
}
obj.name();

function add(){
    console.log(this);
}
const ans = new add();


const obj = {
    name: "tony"
}
function abcd(){
    console.log(this);
}
abcd.call(obj); 


const obj = {
    name: "tony"
}
function abcd(a,b,c){
    console.log(this, a,b,c);
}
abcd.apply(obj,[1,2,3]);



// DOM 


//ACCESSING ELEMENTS

var something = document.querySelector('button'); 
var one = document.querySelector('#new');
var two = document.querySelector('.neww');
var three = document.querySelector('.text');
var four  = document.querySelector('#three');

var btn = document.querySelector('button');
btn.textContent = "starting..";


var text = document.querySelector('h1');
text.innerHTML += '<b>ASMI</B>';

var h2 = document.querySelector('h2');
h2.style.color = 'red' 


var h5 = document.createElement('h5');
h5.textContent="hey" 
h5.classList.add("makeitred");
document.querySelector("body").appendChild("h5");

var img = document.createElement("img"); 
img.src = 'https://plus.unsplash.com/premium_photo-1669246257669-bb097937ce47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
document.querySelector("body").appendChild(img); 