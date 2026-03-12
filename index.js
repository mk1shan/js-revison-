
// document.getElementById('myH1').textContent =`hello`;
// document.getElementById('myp').textContent =`i like alanya`;



// let fullname = "mudipa kishan";
// let age = 25;
// let studnet = false;



// document.getElementById('p1').textContent = fullname;


//arithmetic operaqtions


// let students =30;



// students += 1;

// console.log(students);


// let username;

// username = window.prompt("whats your username?")
// console.log(username)


// let username;

// document.getElementById('mysubmit').onclick = function(){
  
// //index js wala mytext ekata ganna value eka USERNAME WALATA DALA EKA CONSOLE.LOG EKEN PENNWA

// username = document.getElementById("mytext").value;
// document.getElementById('myh1').textContent =`Hello ${username}`;

// }



//covert types



// let age = window.prompt("how old are u?");

// age = Number(age)
// age +=1;
// console.log(age)
//////////////////////////////////////////////////////////////////////////////

// const PI =3;
// let radius ;
// let cir;

// document.getElementById('mysubmit1').onclick = function(){
// radius = document.getElementById("myradius").value;
// radius = Number(radius);
// cir = 2 * PI * radius

// document.getElementById('myh2').textContent =`cir valus is  ${cir}`;
//}



// const decresebtn = document.getElementById('decrese');
// const resetbtn = document.getElementById('reset');
// const increasebtn = document.getElementById('increase');

// const countLabel = document.getElementById('countLabel');

// let count = 0;

// increasebtn.onclick = function(){

//     count++;
//     countLabel.textContent = count;
// }


// decresebtn.onclick = function(){

//     count--;
//     countLabel.textContent = count;
// }



// resetbtn.onclick = function(){

//     count = 0;
//     countLabel.textContent = count;
// }



//radnom number genartor

// let randopmNum = Math.random();

// console.log(randopmNum);


// const mybutton = document.getElementById('myButton');
// const mylabel = document.getElementById('label');


// const min = 1;
// const max=6;

// let randomNum;

// mybutton.onclick = function(){

//  randomNum = Math.floor(Math.random() * max) +min;
//  mylabel.textContent = randomNum;

// }

//age checker///////////////////////////////////////////////////

// const mytext = document.getElementById('mytext');

// const mysubmit = document.getElementById('mysubmit');
// const resultElement = document.getElementById('resultElement');



// mysubmit.onclick =function(){


// age =mytext.value;

// age =Number(age);


// if(age>=100){
// resultElement.textContent = `you are too old`;
// }

// else if(age==0){
//    resultElement.textContent = `you are too old`; 
// }

// else if(age>=18){
//    resultElement.textContent = `you can come to site`; 
// }

// else if(age<0){
//    resultElement.textContent = `you canty below 0`; 
// }
// else{
//     resultElement.textContent = `you must 18+`; 
// }



// }
////////////////////////////////////////////////





// const myCheckBox = document.getElementById('myCheckBox');

// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const PaypalBtn = document.getElementById('PaypalBtn');

// const mySubmit = document.getElementById('mySubmit');

// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');


//  mySubmit.onclick =function(){


// if(myCheckBox.checked){
//     subResult.textContent=`you are subscribed`;
// }
// else{
//      subResult.textContent=`you are not subscribed`;
// }

// if(visaBtn.checked){
//     paymentResult.textContent=`you are paying with visa`
// }
// else if(masterCardBtn.checked){
//         paymentResult.textContent=`you are paying with mastercard`

// }
// else if(PaypalBtn.checked){
//  paymentResult.textContent=`you are paying with paypal`
// }

// else{
//      paymentResult.textContent=`you are not selected`
// }
//  }


// let age =21;

// let mesage = age >= 18 ? "you are adult":"you are minor";
// console.log(message);

// let testscore = 75;
// let lettergrade;


// switch(true){
   
//     case testscore>=90:
//         lettergrade ="A";
//         break;
    
//     case testscore>=80:
//         lettergrade ="B";
//         break;
    
//     default:
//         lettergrade="fail"


// }
// console.log(lettergrade);


// let userName = "mudpa"

// console.log(userName.charAt(0));
// console.log(userName.indexOf("p"));

// console.log(userName.length);
// console.log(userName.toUpperCase());



// const fullname ="mudipa kishan";


// // const firstname = fullname.slice(0 ,4);
// // console.log(firstname);

// let firstname = fullname.slice(0, fullname.indexOf(" "));
// console.log(firstname);


// method chaining////////////////////////////

// let username = window.prompt("enter your name");

// // username = username.trim();
// // let letter = username.charAt(0);
// // letter = letter.toUpperCase();

// // let exstrachar = username.slice(1);
// // exstrachar =exstrachar.toLowerCase();

// // username = letter + exstrachar;
// // console.log(username);


// username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
// console.log(username);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let username;

// do{
//     username =window.prompt("enter your name");
// }
// while (username === "")


// console.log(`hello ${username}`);


// for (let i =0; i<=10; i+=2){

//     console.log(i)
// }
    

// const minimum =1;
// const maximum = 100;

// const answer = Math.floor((Math.random()*(maximum- minimum)+1));

// console.log(answer);



// function happybirthday(username,age){
//     console.log('happy  bithday to youu');

//     console.log('happy  bithday to youu');
//     console.log(`happy  bithday to youu ${username}`);
//     console.log('happy  bithday to youu');
//     console.log(`you are ${age} years old`);

// }

// happybirthday("mudipa",35);


// function add(x,y){
//     let result = x+y;
//     return result;
// }

// let answer = add(2,3);
// console.log(answer);



// function isEven(number){
//     // if(number%2 ===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

// // return number %2 === 0? true:false


// }

// console.log(isEven(4))


// const textBox = document.getElementById('textBox');
// const tofarenhite = document.getElementById('tofarenhite');
// const toCelcius = document.getElementById('toCelcius');
// const result = document.getElementById('result');


// let temp;

// function convert(){

// if(tofarenhite.checked){

//     temp =Number(textBox.value);
//     temp =temp*9 /5+32;
//     result.textContent =temp +"farenhite"

// }

// else if(toCelcius.checked){
    

// }

// else{
//     result.textContent ='select a unit';
// }
// }



// let fruits = ["apple","orang","mango"];

// for(let i=0; i<=fruits.length;i++){
//     console.log(fruits[i])
// }


// let numbers =[1,2,3,4,5];

// let maximum = Math.max(...numbers);
// console.log(maximum);



// let username = "mudipa kishan";
// let letters = [...username];
// console.log(letters);


// function fridge(...food){
//     console.log(food)
// }

// const food1 ="pizza";

// const food2 ="pizza2";
// const food3 ="pizza3";
// const food4 ="pizza4";

// fridge(food1,food2,food3,food4);



//random pw gnartor




// function genaratePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){


//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password= " ";


//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : ""; 



//     if(length<=0){
//         return(`password lenght must be at least 1`);
//     }
//     if(allowedChars.length===0){
//         return(`at least 1 set of  character needs to be selected`);
//     }

//     for(let i=0; i<length;i++){
//         const randomindex = Math.floor(Math.random()*allowedChars.length);
//         password+= allowedChars[randomindex];
//     }


//      return password;


// }



// const passwordLength =12;
// const includeLowercase =true;
// const includeUppercase = true;
// const includeNumbers =true;
// const includeSymbols = true;

// const password = genaratePassword(passwordLength,
//                                 includeLowercase,
//                                 includeUppercase,
//                                 includeNumbers,
//                                 includeSymbols);



// console.log(`genarated password ${password}` );


///callback


// const numbers =[1,2,3,4,5];

// const squares = numbers.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element,2)
// }


// const names = ['mudipa-kishan', "sandani-muthu", "sena-buudhi"];

// const data = names.map(formdata);
// console.log(data);


// function formdata(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[0]}`;
// }

// //.filter()

// let numbers = [1,2,3,45,6,8];

// let evennumber = numbers.filter(isEven);

// console.log(evennumber); 

// function isEven(element){
//     return element % 2 === 0;

// }


/////////////////////

// const graphes = [74,23,45,76,89];




// function getMax(accumulator,element){
//     return 
// }



// const hello = function(){
// console.log("hello")
// }


// hello();


// setTimeout(function(){
//    console.log("hello") 
// },3000);



// const numbers1 = [1,2,3,4,5];

// const squares = numbers.map(function (element){
//     return Math.pow(element, 2);
// });

// console.log(squares)

//function exprssions
// const cubes = numbers1.map(function(element){
// return Math.sqrt(element,2)
// })
// console.log(cubes)


// const hello = (name,age)=> {console.log(`hello1 ${name}`)
//                         console.log(`you old ${age}` )
// }
// hello("mudipa",25);


// const person1 = {
//     firstName: "mudipa",
//     lastName:"kishan",
//     age: 25,
//     isEmployed: true,

//     sayHello: function(){
//         console.log(`hi im  ${this.firstName}`);
//     },
//     eat:function (){console.log(`hi we ${this.lastName}`)
// }}



// const person2 ={
//      firstName: "mudipa2",
//     lastName:"kishan2",
//     age: 35,
//     isEmployed: true,
//       sayHello: ()=> console.log("hi im  udipakishan "),

//       eat:()=>console.log(`im eating bun2 ${this.lastName}`)
   
// }

// person1.sayHello();
// person2.eat();


// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive= function(){
//         console.log(`you drive ${this.make}`)
//     }
// } 



// const car1 = new Car ("ford","mustang",2025,"red")
// const car2= new Car("mks","bmw",2014,"blue")


// car2.drive()



//classes

// class Product {
//     constructor(name,price)
//     {this.name=name;
//     this.price=price;}

// displayProduct(){console.log(`product:${this.name}`)}

// calculateTotal(saleTax){
//     return this.price+ (this.price*sales)
// }

// }

// const product = new Product("mudipa")
// product.displayProduct()



// class mathUtil{
//     static PI =3.14159;

//     static getDiameter(radius){
//         return radius*2;
//     }



// }

// console.log(mathUtil.getDiameter(19));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
//  static gteUserCount(){

//     console.log(`there are ${User.userCount} users`)
//  }
//     sayHello(){
//         console.log(`hello my username is ${this.username}`)
//     }
// }

// const user1 = new User("mudipa");
// const user2 = new User("mudipa2");
// const user3 = new User("mudipa3");

// user1.sayHello();
// console.log(user2.username);
// console.log(user3.username);

// console.log(User.userCount);
// console.log(User.gteUserCount())

class Animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }


    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}

class Fish extends Animal{
    name = "fish";
}

class Hawk extends Animal {
    name= "hawk";
}

const rabbit = new Rabbit();
const fish  = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive)
rabbit.eat();
