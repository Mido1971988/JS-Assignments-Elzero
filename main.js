// ------Lessons 1-9 ----------

// assign 2
// document.write("<h1>Elzero</h1>")
// document.querySelector("h1").style.cssText = "color:blue; font-size:80px; font-weight:bold; text-align: center; font-family:Arial"

// assign 3
// console.log("%cElzero %cWeb %cSchool" ,"color:red; font-size:40px", "color:green; font-size:40px; font-weight:bold;", "color:white; background:blue; font-size:40px");

// assign4 (console Group)
// console.group("Group 1")
// console.log("Message One")
// console.log("Message Two")
// // differen between groupCollapsed and group that groupCollapsed you have to press at arrow to show the content
// console.groupCollapsed("Child Group")
// console.log("Message One")
// console.log("Message Two")
// console.group("Grand Child Group")
// console.log("Message One")
// console.log("Message Two")
// console.groupEnd()
// console.groupEnd()
// console.groupEnd()
// console.group("Group 2")
// console.log("Message One")
// console.log("Message Two")


// assign 5 (console table)
// let arr = ["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]
// console.table(arr)

// assign 6 
// function stop() {
// console.log("Iam In Console")
// document.write("Iam In Page")
// }
// or just make comment :)
/*
console.log("Iam In Console")
document.write("Iam In Page")
*/

// ------Lessons 10-17 ----------

// assign 1
// let numberOne = 10;
// let numberTwo = 20;

// console.log(numberOne+""+numberTwo)
// console.log(typeof(numberOne+""+numberTwo))
// console.log(`${numberOne}${numberTwo}`)
// console.log(typeof(`${numberOne}${numberTwo}`))
// console.log(numberTwo + "\n" + numberOne)
// console.log(`${numberTwo}
// ${numberOne}`)

// assign 2 (look at html file)
// console.log(elzero.innerHTML);
// console.log(typeof elzero);

// assign 3
// console.log("`I'm In"+"\n"+"\\\\"+"\n"+"Love \\\\ \"\" \'\'\'"+"\n"+"++ With ++"+"\n"+"\\\"\"\"\\\"\"\""+"\n"+"\"\"JavaScript\"\"\``")

//assign 4
// let a = 21;
// let b = 20;
// // _21_2021_2021_2021_20_
// console.log("_" + `${a}_${b}`.repeat(4) + "_")

// ------Lessons 18-22 ----------

// assign 1
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400)

// assign 2
// let num = 3;
// 6 in 6 different times
// console.log(num+num)
// console.log(num * (true + true))
// console.log(num ** (true + true) - num)
// console.log(num * --num)
// console.log(num ** num + num)
// console.log(num * ++num)

//assign 3 
// let num = "10";

// console.log(+num + +num)
// // when you increment a variable it will change it's type from string to number
// console.log(num-- + ++num)
// console.log(typeof num)
// console.log(num + num)
// console.log(num - -num)

// ------Lessons 23-26 ----------


// assign 1
// console.log(100000)
// console.log(100000.0)
// console.log(10**5)
// console.log(10e4)
// console.log(100_000)
// console.log(100*1000)
// console.log(5e4 + 5e4)
// console.log(15e4 - 5e4)
// console.log(10e5 / 10)
// console.log(Math.pow(10,5))
// console.log(Math.round(100000.4));
// console.log(Math.floor(100000.9));
// console.log(Math.trunc(100000.9));
// console.log(Math.ceil(99999.9));
// console.log(parseInt(100000.9));

// assign 2
// console.log(Number.MAX_SAFE_INTEGER)

// assign 3
// console.log((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER + +true)**(+true + +true + +true + +true ))
// other answer
// console.log(Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER)) ** (Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))) ** (Math.ceil((Number.MAX_SAFE_INTEGER / --Number.MAX_SAFE_INTEGER))));

// assign 4
// let myVar = "100.56789 Views"
// console.log(parseInt(myVar))
// console.log(+(parseFloat(myVar).toFixed(2)))

// assign 5
// let num = 10;
// console.log(+(Number.isInteger(num)) + +(Number.isInteger(num)))

//assign 6 
// let flt = 10.4

// console.log(Math.trunc(flt))
// console.log(Math.round(flt))
// console.log(Math.floor(flt))
// console.log(-Math.ceil(-flt))
// console.log(Number.parseInt(flt))

// assign 7 
// console.log(Math.floor(Math.random() * 5))


// ------Lessons 27-30 ----------

// assign 1
// let userName = "Elzero";
// console.log(userName.charAt(0).toLowerCase());
// console.log(userName[0].toLowerCase());
// console.log(userName.slice(0,1).toLowerCase())
// console.log(userName.substring(0,1).toLowerCase())
// console.log(userName.substr(0,1).toLowerCase(0))
// console.log(userName.split("l")[0].toLowerCase().repeat(3))

// assign 2 

// let word ="Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ));
// console.log(word.startsWith(letterE.toUpperCase()))
// console.log(word.endsWith(letterO.toLowerCase()))

// ------Lessons 31-32 ----------

// assign 1

// console.log(100 == "100")
// console.log(100 < 1000)
// console.log(110 > 100 > 10 < 20)
// console.log(-10 == "-10")
// console.log(! -50 >= +"-40" )
// console.log(! 10 <= -"-40")
// console.log(!("10" === 10))
// console.log(! 20 == false)

// assign 2 

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2)
// console.log(num2 > num1)
// console.log(typeof num1 === typeof num2)
// console.log(num1 <= num2)
// console.log(num2 >= num1)
// console.log(!(num1 == num2))

// ------Lessons 33-37 ----------

// assign 1
// let num= 010;

// if (num > 0 && num < 10) {
//     console.log(`00${num}`)
// } else if (num >= 10 && num < 100) {
//     console.log(`0${num}`)
// }else if (num >= 100) {
//     console.log(num.toString())
// }else {
//     if(num > -10){
//         console.log(`-00${Math.abs(num)}`)
//     }else if(num <= -10 && num > -100){
//         console.log(`-0${Math.abs(num)}`)
//     }else if (num <= -100) {
//         console.log(num.toString())
//     }
// }
// will return 8 that's mean base 8 
// console.log(010)
// console.log(parseInt(010)) // 8
// console.log(parseInt("010" ,10)) // 10

// assign 2 
// let num = 9;
// let str = "9";
// let str2 = "20";

// if (num == str ){
//     console.log(`{num} Is the same value as {str}`)
// }
// if (num == str && num !== str ) {
//     console.log(`{num} Is the same value as {str} but not the same type`)
// }
// if(num !== str2) {
//     console.log(`{str} Is not the same type or the same value as {str2}`)
// }
// if (typeof str === typeof str2 && str !== str2) {
//     console.log(`{str} Is the same type as {str2} but not the same value`)
// }

// assign 3
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (typeof num3 !== typeof num2) {
//     if(num3 > num1) {
//         console.log(`${num3} is larger than ${num1} and type string not the same as number`)
//         if(num2 == num3) {
//             console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`)
//         }
//     }
//     if (num3 != num1) {
//         console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
//     } 
// } 

// assign 4 

// let num1 = 3;
// let num2 = 2;
// let num3 = 3;
// let num4 = 25;

// Condition 1

// if (num1 > num2) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//     console.log("True");
// } else {
//     console.log("False");
// }


// ------Lessons 38-39 ----------

// let day = "   friday  ";
// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// let day = "    monday  ";
// let day = "Thursday";
// let day = "Tuesday";
// let day = "Wednesday";
// let day = "World";

// switch(day.trim()[0].toUpperCase() + day.trim().slice(1)) {
//     case "Friday" :
//     case "Saturday":
//     case "Sunday":
//         console.log("No Appointments Available");
//         break;
//     case "Monday":
//     case "Tuesday":
//         console.log("From 10:00 AM To 6:00 PM");
//         break;
//     case "Wednesday":
//         console.log("From 10:00 AM To 7:00 PM");
//         break;
//     default:
//         console.log("Its Not A Valid Day")
// }

// ------Lessons 40-47 ----------

// assign 1

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// // Method 1
// console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];
// myFriends.pop()
// // Method 2
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// assign 2

// let myFriends = ["Ahmed", "Eman", "Osama", "Gamal"];
// myFriends.pop()
// myFriends.shift()
// console.log(myFriends)

// assign 3

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// assign 4

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// assign 5

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// if (haystack.includes(needle)) {
//     console.log("Found")
// }else {
//     console.log("Not Found")
// }

// if (haystack[haystack.indexOf(needle)] === needle) {
//     console.log("Found")
// }else {
//     console.log("Not Found")
// }

// switch(true) {
//     case haystack.includes(needle) :
//         console.log("found")
//         break
//     default:
//         console.log("Not Found")
// }  

// if (haystack.indexOf(needle) !== -1) {
//     console.log("Found")
// } else {
//     console.log("Not Found")
// }
// if (haystack.lastIndexOf(needle) !== -1) {
//     console.log("Found")
// } else {
//     console.log("Not Found")
// }

// console.log(haystack.includes(needle) ? "Found" : "Not Found");

// haystack.includes(needle) ? console.log("Found") : console.log("Not Found")


// assign 6

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// Your Code Here

// console.log((allArrs.concat(arr1.pop().toLowerCase(),arr2.slice(arr1.length).join("").toLowerCase())).join("")); // fxy
// console.log((allArrs.concat(arr2.slice(arr1.length - true).reverse().pop(), arr1.pop(),arr2.pop())).join("").toLowerCase()); // fxy

// ------Lessons 48-53 ----------

// assign 1
// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start ; i <= end; i+=start) {
//     if (i === exclude) {
//         continue
//     }
//     console.log(i)
// }

// assign 2 
// let start = 10;
// let end = 0;
// let stop = 3;
// for( let i = start; i > end; i--) {
//     console.log(i)
//     if ( i === stop) {
//         break
//     }
// }

// assign 3 
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(let i = start; i <= end; i++ ) {
//     console.log(i);
//     console.log(`-- ${breaker}`)
//     console.log(`-- ${breaker * breaker}`)
// }

// assign 4 
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//     console.log(index)
//     if ( index === (jump * jump) ){
//         break
//     }
//     index -= jump
// }


// you can break from nested if condition
// for (;;) {
//     console.log(index)
//     if ( index  >= end) {
//         if ( index === (jump * jump)){
//             break
//         }
//     }
//     index -= jump
// }

// assign 5
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama","Ashly","Sameh","Andy","Ali","Mido"];
// let letter = "a";
// let arrA = []

// for ( let i =0; i < friends.length; i++) {
//     if (friends[i][+false].toLowerCase() === letter) {
//         arrA.push(friends.slice(i, (i+true)).toString())
//     }
// }
// console.log(arrA)

// for (let i = +false; i < friends.length; i++ ) {
//     if (arrA.includes(friends[i])){
//         var index = i;
//         var arrIndex = arrA.indexOf(friends[i]);
//         // console.log(arrIndex)
//         continue
//     }
//     if (index) {
//         console.log(`${i - arrIndex} => ${friends[i]}`)
//     } else {
//         console.log(`${i} => ${friends[i]}`)
//     }
// }

// another Answer

// let counter = +true ;
// for(let i = +false ; i < friends.length ; i++){
//     if(friends[i][+false] === letter.toUpperCase()){
//         continue;
//     } else{
//     console.log(`"${counter} => ${friends[i]}"`);
//     counter++;
//     } 
// }

// another Answer Using Higher Order Function 
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama","Sameh"];
// let letter = "a";
// let filter = friends.filter(el => !el.startsWith("A")).map((el,index) => `"${index + 1} => ${el}"`).join("\n")
// console.log(filter)

// assign 6 

// let start = 0;
// let swappedName = "eLZerO"
// let arr = swappedName.split("")

// for(let i = start; i < arr.length; i++) {
//     if(arr[i] === arr[i].toLowerCase()) {
//         arr[i] = arr[i].toUpperCase()
//     } else {
//         arr[i] = arr[i].toLowerCase()
//     }
// }
// let newName = arr.join("")
// console.log(newName)

// Another Answer

// let start6 = 0;
// let swappedName = "elZerO";
// let swappedNameFinished="";

// for(let i = start6; i < swappedName.length; i++){
//     if(swappedName[i] === swappedName[i].toUpperCase()){
//         swappedNameFinished += swappedName[i].toLowerCase();
//     }
//     else{
//         swappedNameFinished += swappedName[i].toUpperCase();

//     }
// }
// console.log(`${swappedNameFinished}`);

// another Answer Using Higher Order Function 

// let result = arr.map(el => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join("")
// console.log(result)

// assign 7

// let start = 0;
// let mix = [1,2,3,"A","B","C",4]

// for (let i = mix[start]; i < mix.length; i++) {
//     if(typeof mix[i] === "number" ) {
//         console.log(mix[i])
//     }
// }  

// another Answer Using Higher Order Function 
// let result = mix.filter(el => !isNaN(el)).filter(el => el > 1).map(el => console.log(el))


// ------Lessons 54-56 ----------

// assign 1

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//     if (typeof friends[index] === "number" || friends[index].startsWith("A")) {
//         index++
//         continue
//     } else {
//         counter++
//         console.log(` ${counter} => ${friends[index]}`)
//     }
//     index++
// }

// another Answer Using Higher Order Function 
// let filter = friends.filter(el => isNaN(el)).filter(el => !el.startsWith("A")).map((el,index) => `"${index + 1} => ${el}"`).join("\n")
// console.log(filter)


// ------Lessons 57-63 ----------

// assign 1

// function sayHello(theName = "Unknown", theGender) {
//     switch(theGender){
//         case undefined:
//             console.log(`Hello ${theName}`)
//             break
//         case theGender:
//             switch(theGender){
//                 case "Male":
//                     console.log(`Hello Mr ${theName}`)
//                     break
//                 case "Female":
//                     console.log(`Hello Miss ${theName}`)
//                     break
//             }
//             break
//     }
// }
// if condition version
// function sayHello(theName, theGender) {
//     if(theGender === "Male"){
//         console.log(`Hello Mr ${theName}`)
//     }
//     else if(theGender === "Female"){
//         console.log(`Hello Miss ${theName}`)

//     }
//     else{
//         console.log(`Hello ${theName}`)

//     }
// }

//   // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
//   sayHello("Sameh"); // "Hello Sameh"

// sayHello("soliman","Male")
// sayHello("nada","Female")
// sayHello("nada")
// sayHello(undefined, "Female")

// assign 2

// for studing purpose only
// function calculate(firstNum, secondNum, operation) {
//     switch(firstNum){
//         case undefined:
//             console.log("First Number Not Found")
//             break
//     }
//     switch(secondNum){
//         case undefined:
//             console.log("Second Number Not Found")
//             break
//     }
//     switch(operation){
//         case undefined:
//         case "add":
//             switch(firstNum && secondNum) {
//                 case undefined && secondNum:
//                     break
//                 case firstNum && undefined:
//                     break
//                 case firstNum && secondNum:
//                     console.log(firstNum + secondNum)
//                     break
//             }
//             break
//         case "subtract":
//             console.log(firstNum - secondNum)
//             break
//         case "multiply":
//             console.log(firstNum * secondNum)
//             break
//     }
// }

// another switch way (better version)
// function calculate(firstNum, secondNum, operation) {
//     switch(true) {
//         case firstNum === undefined:
//             console.log("First Number Not Found")
//             break
//         case secondNum === undefined:
//             console.log("Second Number Not Found")
//             break
//         case operation === undefined:
//             console.log(firstNum + secondNum)
//             break
//         case operation === "add" :
//             console.log(firstNum + secondNum)
//             break
//         case operation === "subtract":
//             console.log(firstNum - secondNum)
//             break
//         case operation === "multiply":
//             console.log(firstNum * secondNum)
//             break
//     }
// }

// if condition version
// function calculate(firstNum, secondNum, operation){
//     if (firstNum === undefined){
//         console.log("First Number Not Found")
//     } else if (secondNum === undefined) {
//         console.log("Second Number Not Found")
//     }else if (operation === undefined || operation === "add") {
//         console.log(firstNum + secondNum)
//     }else if (operation === "subtract") {
//         console.log(firstNum - secondNum)
//     }else if(operation === "multiply") {
//         console.log(firstNum * secondNum)
//     }
// }


// calculate(20)
// calculate(20,10)
// calculate(undefined,10)
// calculate(20,10,"add")
// calculate(20,10,"subtract")
// calculate(undefined,10,"subtract")
// calculate(20,10,"multiply")

// assign 3
// function ageInTime(age){
//     switch(true) {
//         case age > 110:
//         case age < 10:
//             console.log("Age Out Of The Range")
//             break
//         default:
//             console.log(`Months => ${age * 12}
// Days => ${age * 12 * 30}
// Hours => ${age * 12 * 30 * 24}
// Minutes => ${age * 12 * 30 * 24 * 60}
// Seconds => ${age * 12 * 30 * 24 * 60 * 60}
//             `)
//             break
//     }
// }

// // default like else in if condition

// if condition version
// function ageInTime(age){
//     if(age <10 || age >110){
//         console.log("Age Out Of The Range")
//     } else {
//         console.log(`Months => ${age * 12}
// Days => ${age * 12 * 30}
// Hours => ${age * 12 * 30 * 24}
// Minutes => ${age * 12 * 30 * 24 * 60}
// Seconds => ${age * 12 * 30 * 24 * 60 * 60}
//             `)
//     }
// }

// ageInTime(33)

// assign 4

// function checkStatus(a,b,c){
//     let theName;
//     let age;
//     let av;
//     switch(typeof a){
//         case "string":
//             theName = a;
//             break
//         case  "number":
//             age = a;
//             break
//         case "boolean":
//             av = a;
//             break
//     }
//     switch(typeof b){
//         case "string":
//             theName = b;
//             break
//         case "number":
//             age = b;
//             break
//         case "boolean":
//             av = b;
//             break
//     }
//     switch(typeof c){
//         case "string":
//             theName = c;
//             break
//         case "number":
//             age = c;
//             break
//         case "boolean":
//             av = c;
//             break
//     }

//     av ? av = "You are Availabe For Hire" : av = "You are Not Availabe For Hire"
//     console.log(`Hello ${theName} ,Your Age is ${age}, ${av}`)
// }
// checkStatus("Soliman",33,true)
// checkStatus(33,"Soliman",false)
// checkStatus(true,33,"Soliman")

// better version
// function showDetails(...parameters) {
//   let one, two, three;
//   document.write(`<div>`);
//   for (let i = 0; i < parameters.length; i++) {
//     let s = typeof parameters[i];
//     switch (s) {
//       case "string":
//         one = parameters[i];
//         break;

//       case "boolean":
//         if (parameters[i] === true) {
//           three = "you are avilable for hire";
//         } else {
//           three = "you are not  avilable for hire";
//         }
//         break;

//       case "number":
//         two = parameters[i];
//         break;
//     }
//   }

//   document.write(
//     `<p> hello ${one} , yor age is ${two} , your status it ${three} </p>`
//   );

//   document.write(`</div>`);
// }

// showDetails(true, 25, "kenan");
// showDetails(25, "kenan", false);
// showDetails(true, "kenan", 25);
// showDetails("kenan", true, 25);

// assign 5 
// function createSelectBox(startYear,endYear) {
//     let currentYear = startYear;
//     document.write("<select>")
//     for(let i=0; i <= (endYear-startYear); i++){
//         document.write(`<option value=${currentYear}>${currentYear}</option>`)
//         currentYear++
//     }
//     document.write("</select>")
// }
// createSelectBox(2000,2021)

// another Answer
// function createSelectBox(startYear, endYear) {
//     document.write("<select >");
//     for(let i = startYear; i <= endYear; i++){
//         document.write(`<option value=${i}>${i}</option>`);
    
//     }document.write("</select>")
// }
// createSelectBox(2000, 2021);

// assign 6
// function multiply(...arg) {
//     let arrNum =[]
//     let result =1;
//     for(let i = 0; i < arg.length; i++){
//         switch(true){
//             case typeof arg[i] === "number":
//                 switch(Number.isInteger(arg[i])) {
//                     case true :
//                         arrNum.push(arg[i])
//                         break
//                     case false:
//                         arg[i] = Math.trunc(arg[i])
//                         arrNum.push(arg[i])
//                         break
//                 }
//         }
//     }
//     for(let i =0; i < arrNum.length; i++) {
//         result *= arrNum[i] 
//     }
//     console.log(result)
// }
// multiply("A",10,10.5)
// multiply(10,"A",10.5)
// multiply(10,10.5,"A")

// better version
// function multiply(...Numbers){
//     let result =  1;
//     for(let i = 0; i < Numbers.length; i++){
//         if(typeof Numbers[i] === "string"){
//             continue;
//     }else{
//         result *= Math.trunc(Numbers[i]);
//     }
//     }
//     console.log(result);
// }  

//   multiply(10, 20); // 200
//   multiply("A", 10, 30); // 300
//   multiply(100.5, 10, "B"); // 1000

// another Answer Using Higher Order Function 
// function multiply(...para) {
//     let allNums = para.filter(el => !isNaN(el))
//     let intNum = allNums.map(el => Number.isInteger(el) ? el : Math.trunc(el))
//     let multiResult = intNum.reduce((acc, curr) => acc * curr)
//     console.log(multiResult)
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

// ------Lessons 64-70 ----------

// assign 1
// function getDetails(zName,zAge,zCountry){
//     function namePattern(){
//         return `${(zName).split(" ")[0]} ${(zName).split(" ")[1].slice(0,1)}.`
//     }
//     function ageWithMessage(){
//         return `Your Age Is ${parseInt(zAge)}`
//     }
//     function countryTwoLetters(){
//         return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     }
//     function fullDetails(){
//         return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//     }
//     return fullDetails()
// }
// console.log(getDetails("Mohamed Soliman", "33 Is My Age","Egypt" ))

// Arrow Function Version
// function getDetails(zName,zAge,zCountry){
//     let namePattern = () => `${(zName).split(" ")[0]} ${(zName).split(" ")[1].slice(0,1)}.`
//     let ageWithMessage = () =>`Your Age Is ${parseInt(zAge)}`
//     let countryTwoLetters =() =>`You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     let fullDetails = () => `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//     return fullDetails()
// }
// console.log(getDetails("Mohamed Soliman", "33 Is My Age","Egypt" ))

// Better Version accept one or more names
// function getDetails(zName,zAge,zCountry){
//     let arrName = zName.split(" ").length;
//     function namePattern(){
//         if (arrName === 1) {
//             return zName
//         }else{
//             return `${(zName).split(" ")[0]} ${(zName).split(" ")[arrName -1].slice(0,1)}.`
//         }
//     }
//     function ageWithMessage(){
//         return `Your Age Is ${parseInt(zAge)}`
//     }
//     function countryTwoLetters(){
//         return `You Live In ${zCountry.slice(0,2).toUpperCase()}`
//     }
//     function fullDetails(){
//         return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//     }
//     return fullDetails()
// }
// console.log(getDetails("Mohamed Ahmed Soliman Hussein", "33 Is My Age","Egypt" ))

// assign 2
// convert function to Arrow function
// function itsMe() {
//     return `Iam A Normal Function`
// }
// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe())

// assign 3
// convert function to Arrow function
// Currying Function Technique :
// Currying is when you break down a function that takes multiple arguments
// into a series of functions that each take only one argument.

// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

//   console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
//   console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// assign 4
// function specialMix(...para){
//     let sum = 0;
//     if (para.length === 0) {
//         return ("No Arguments")
//     }
//     for (let i =0; i < para.length; i++) {
//         if(typeof para[i] === "string"){
//             if(isNaN(parseInt(para[i])) === false ){
//                 para.splice(i,1,parseInt(para[i]))
//             } else if(para.length >= 1) {
//                 para.splice(i,1)
//                 i--
//             }
//         }
//     }
//     if(para.length === 0){
//         return ("All Is Strings")
//     }else if(para.length > 0){
//         for(let i = 0; i < para.length; i++) {
//             sum += para[i]
//         } 
//         return sum
//     }
    
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// ------Lessons 71-78 ----------

// assign 1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let elzero = mix.filter(el => isNaN(el)).reduce((acc,curr) => `${acc}${curr}`)
// console.log(elzero)

// assign 2
// let myString = "EElllzzzzzzzeroo";
// let arr = myString.split("")
// reduce will not work here print to see that acc is sum of all previous characters and can compare it with curr
// let elzero = arr.reduce((acc,curr,index) => {
//     if (acc === curr) {
//         return curr
//     } else {
//         console.log(acc)
//         return acc + curr
//     }
// })
// let elzero = arr.filter((el,index,arr) => arr[index] !== arr[index + 1]).reduce((acc,curr) => `${acc}${curr}`)
// console.log(elzero)

// another Answer using indexOf
// let myString = "EElllzzzzzzzeroo";
// let removeDublicate = myString.split("").filter(function(ele, index, arr ){
//     // indexOf give you index of first element of duplicate
//     console.log(index)
//     console.log(arr.indexOf(ele))
//     return arr.indexOf(ele) === index  ;
// }).join("");
// console.log(removeDublicate);

// assign 3
// solution using every()
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let flatArr = myArray.every((el,index,arr) => {
//     if (typeof el === "object") {
//         arr.splice(index,1,el[0],el[1])
//         return false
//     } else {
//         return true
//     }
// })
// let final = myArray.join("")
// console.log(final)

// solution using reduce()
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let reduceArr = myArray.reduce((acc,curr) => typeof curr === "object" ? acc + curr[0] + curr[1]: acc + curr )
// console.log(reduceArr)

// another Answer using concat()
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let returnElzero = myArray.reduce(function(acc,curr){
//     return acc.concat(curr) 
// },[]).join("");

// console.log(returnElzero);


// assign 4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let result = numsAndStrings.filter(el => !isNaN(el)).map(el => -el)
// console.log(result)

// assign 5
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let result = nums.reduce((acc,curr)=> curr % 2 ? acc + curr : acc * curr,1)
// console.log(result)

// ------Lessons 79-85 ----------

//  assign 1
// let member = {
//     name : "Elzero",
//     age : 38,
//     country : "Egypt",
//     fullDetails : function () {
//         return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
//     }
// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// assign 2 
// Literal Method
// let objMethodOne = {
//     property : "Method One"
// }
// console.log(objMethodOne.property)
// // Object.create Method
// let objMethodTwo = Object.create({property : "Method Two"})
// console.log(objMethodTwo.property)
// // construcor Method : Built-in and user-defined
// // buit-in 
// let objMethodThree = new Object({property : "Method Three"})
// console.log(objMethodThree.property)
// // user-defined
// function objConstructor() {
//     this.property = "Method Three"
// }
// let objMethodThree2 = new objConstructor()
// console.log(objMethodThree2.property)
// // Object.assign 
// let objMethodFour = Object.assign({}, {property : "Method Four"})
// console.log(objMethodFour.property)

// assign 3
// let a = 1;
// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };
// let twoNums = {
//     e: 5,
//     f: 6,
// };
// let finalObject = Object.assign({},{a},threeNums,twoNums )
// console.log(finalObject);

// assign 4
// The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//         publisher: "NIS America",
//         price: 40,
//     },
//     "Titan Quest": {
//         publisher: "THQ",
//         bestThree: {
//             one: "Immortal Throne",
//             two: "Ragnarök",
//             three: "Atlantis",
//         },
//         price: 50,
//         },
//         YS: {
//         publisher: "Falcom",
//         bestThree: {
//             one: "Oath in Felghana",
//             two: "Ark Of Napishtim",
//             three: "origin",
//         },
//         price: 40,
//         },
//     };
//   // Code One => How To Get Object Length ?
//     let objectLength = Object.keys(myFavGames).length;
//     let keysArray = Object.keys(myFavGames)
//     let nestedKeysArray = Object.keys(myFavGames.YS)
// here we get keys as string so we used bracet notation instead of fot notation (myFavGames[keysArray[i]].publisher instead of myFavGames.keysArray[i].publisher )
//     for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${keysArray[i]}`);
//     console.log(`The Publisher Is ${myFavGames[keysArray[i]].publisher}`);
//     console.log(`The Price Is ${myFavGames[keysArray[i]].price}`);
        
//     // Check If Nested Object Has Property (bestThree)
//     if (Object.keys(myFavGames[keysArray[i]]).includes("bestThree")) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[keysArray[i]].bestThree.one}`);
//         console.log(`Second => ${myFavGames[keysArray[i]].bestThree.two}`);
//         console.log(`Third => ${myFavGames[keysArray[i]].bestThree.three}`);
//     }
//     console.log("#".repeat(20));
//     }
    
  // Ouput
    
    // "The Game Name Is Trinity Universe"
    // "The Publisher Is NIS America"
    // "The Price Is 40"
    // "####################"
    // "The Game Name Is Titan Quest"
    // "The Publisher Is THQ"
    // "The Price Is 50"
    // "- Game Has Releases"
    // "First => Immortal Throne"
    // "Second => Ragnarök"
    // "Third => Atlantis"
    // "####################"
    // "The Game Name Is YS"
    // "The Publisher Is Falcom"
    // "The Price Is 40"
    // "- Game Has Releases"
    // "First => Oath in Felghana"
    // "Second => Ark Of Napishtim"
    // "Third => origin"
    // "####################"

// ------Lessons 86-93 ----------
// assign 1 
// let elzeroElement = document.querySelector("#elzero")
// let elzeroElement = document.querySelector(".element")
// let elzeroElement = document.querySelector("[name='js']")
// let elzeroElement = document.querySelector("div")
// let elzeroElement = document.querySelectorAll("#elzero")[0]
// let elzeroElement = document.querySelectorAll(".element")[0]
// let elzeroElement = document.querySelectorAll("[name='js']")[0]
// let elzeroElement = document.querySelectorAll("div")[0]
// let elzeroElement = document.getElementById("elzero")
// let elzeroElement = document.getElementsByClassName("element")[0]
// let elzeroElement = document.getElementsByTagName("div")[0]
// let elzeroElement = document.getElementsByName("js")[0]
// let elzeroElement = document.body.children[0]
// let elzeroElement = document.body.childNodes[0]
// let elzeroElement = document.body.firstElementChild
// let elzeroElement = document.body.lastElementChild
// console.log(elzeroElement)

// assign 2
// let divs = document.getElementsByTagName("div")
// for (div of divs) {
//   div.firstElementChild.src = "https://toppng.com/uploads/preview/naruto-small-11549477147qrrafynkrc.png"
//   div.firstElementChild.alt = "Elzero-Logo"
// }

// another answer
// let allImages = document.querySelectorAll("div img");
// allImages.forEach((img) => {
// 	img.setAttribute(
// 		"src",
// 		"https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
// 	);
// 	img.alt = "Elzero Logo";
// });


// assign 3
// let rate = 15.6
// let currencyInput = document.querySelector("form input")
// let currencyDiv = document.querySelector("form div")
// currencyInput.addEventListener("input", function () {
//   currencyDiv.innerHTML = `{${this.value}} USD Dollar = {${(this.value * rate).toFixed(2)}} Egyptian Pound`
// })
// how to limit input of user from HTML file
/* <form action="">
        <input type="number" name="dollar" placeholder="USD Dollar"/>
        <!-- to limit no. of user input -->
        <input name="somename"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        type = "number"
        maxlength = "6"/>
        <!-- 2nd way to limit no. of user input but will accept number or text -->
        <input type="tel" name="dollar" placeholder="USD Dollar" maxlength="6"/>
        <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
  </form> */

// assign 4
// let one = document.querySelector(".one")
// let two = document.querySelector(".two")
// let divs = document.querySelectorAll("div")
// let oneTitel = one.title
// let twoTitel = two.title
// let oneText = one.innerHTML
// let twoText = two.innerHTML
// one.title = twoTitel
// two.title = oneTitel
// one.innerHTML = twoText
// two.innerHTML = `${oneText} ${divs.length}`

// assign 5 
// let imgs = document.querySelectorAll("img")
// for(img of imgs) {
//   if (img.alt) {
//     img.alt = "Old"
//   }else {
//     img.setAttribute("alt", "Elzero New")
//   }
// }
// another Answer 
// let allImgs = document.querySelectorAll("img");

// allImgs.forEach((img) => {
// 	if (img.hasAttribute("alt")) {
// 		img.alt = "Old";
// 	} else {
// 		img.alt = "Elzero New";
// 	}
// });

// assign 6 

// let mainFrom = document.querySelector("form")
// let mainFromChilds = document.querySelectorAll("form > *")
// let results = document.querySelector(".results")
// let btn = document.querySelector("[name='create']")
// let selectField = document.querySelector("[name='type']")
// let newElements;
// function setAttributes(el, attrs) {
//   for(let key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }

// mainFrom.addEventListener("submit" , function(e) {
//   while(results.hasChildNodes()){
//     results.removeChild(results.firstChild)
//   }
//   let userInput = document.querySelector("[name='texts']").value
//   let inputNumbers = document.querySelector("[name='elements']").value
//   let optionValue = document.querySelectorAll("[name='type'] option")[selectField.selectedIndex].value
//   let newEl;
//   for (let i = 1; i <= inputNumbers; i++) {
//     if (optionValue === "Div") {
//       newEl = document.createElement("div")
//     }else if(optionValue === "Section") {
//       newEl = document.createElement("section")
//     }
//     let newText = document.createTextNode(userInput)
//     newEl.appendChild(newText)
//     setAttributes(newEl, {class :"box", title:"Element", id :`id-${i}`})
//     results.appendChild(newEl)
//   }
//   newElements = document.querySelectorAll(".box")
//   for (let i =0; i < newElements.length; i++) {
//     newElements[i].style.cssText = "padding:10px; color:white; text-align:center; background-color:orange; width:100px; border-radius:5px"
//   }
//   e.preventDefault()
// })


// // CSS

// mainFrom.style.cssText = "display:flex; flex-direction:column; justify-content:center; align-items:center; gap:10px"
// for ( let i = 0; i <mainFromChilds.length; i++ ) {
//   mainFromChilds[i].style.cssText = "box-sizing:border-box; padding:10px; width:250px ; border-radius:5px; background-color:#eee; border : 1px solid #ddd"
// }
// btn.style.backgroundColor = "green"
// btn.style.color = "white"
// results.style.cssText = "background-color:white; display:flex; gap:20px; max-width:450px; flex-wrap:wrap; justify-content:center; align-items:center;"
// // part of css inside addEventListener

// ------Lessons 94-101 ----------

// assign 1
// Look at script tag in HTML file

// assign 2
// let add = document.querySelector(".classes-to-add")
// let remove = document.querySelector(".classes-to-remove")
// let current = document.querySelector("[title='Current']")
// let curClaList = current.classList
// let container = document.querySelector(".classes-list div")

// // when page reload add classes to container
// if (curClaList.length > 0 ) {
//   for( let i =0; i < curClaList.length; i++){
//     let span = document.createElement("span")
//     let className = document.createTextNode(curClaList[i])
//     span.appendChild(className)
//     container.appendChild(span)
//   }
// } else if (curClaList.length === 0) {
//   let message = document.createTextNode("No Classes To Show")
//   container.appendChild(message)
// }
// // add function
// add.addEventListener("blur" , function(e){
//   let sortedCurClaList = [...curClaList]
//   if (curClaList.length === 0) {
//     container.innerHTML = ""
//   }
//   if (add.value === "") {
//     alert("Please add Class")
//   }else {
//     let arr = add.value.split(" ");
//     for (one of arr) {
//       current.classList.add((one).toLowerCase())
//     }
//     for( let i =0; i < arr.length; i++){
//       if ( sortedCurClaList.includes((arr[i]).toLowerCase())) {
//         console.log("repeated class")
//       }else {
//         sortedCurClaList.push((arr[i].toLowerCase()))
//         sortedCurClaList.sort()
//         while (container.firstChild) {
//           container.removeChild(container.firstChild)
//         }
//         for(sort of sortedCurClaList) {
//           let span = document.createElement("span")
//           let className = document.createTextNode(sort.toLowerCase())
//           span.appendChild(className)
//           container.appendChild(span)
//         }
//       }
//     }
//   }
//   if (curClaList.length === 0) {
//     let message = document.createTextNode("No Classes To Show")
//     container.appendChild(message)
//   }
//   e.target.value = ""
// })

// // Remove function
// remove.addEventListener("blur" , function(e){
//   let spanList = document.querySelectorAll(".classes-list div span")
//   if (curClaList.length === 0) {
//     e.preventDefault()
//   }else {
//     if (remove.value === "") {
//       alert("Please add Class")
//     }else {
//       let arr = remove.value.split(" ");
//       for (one of arr) {
//         current.classList.remove((one).toLowerCase())
//         for (span of spanList) {
//           if ( (one).toLowerCase() === span.innerHTML){
//             span.remove()
//           }
//         }
//       }
//     }
//     if (curClaList.length === 0) {
//       let message = document.createTextNode("No Classes To Show")
//       container.appendChild(message)
//     }
//   }
//   e.target.value = ""
// })

// assign 3
// function setAttributes(el, attrs) {
//   for(let key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// }
// let p = document.querySelector("p")
// p.remove()
// let div = document.querySelector("div")
// let before = document.createElement("div")
// let after = document.createElement("div")
// let beforeText = document.createTextNode("Start")
// let afterText = document.createTextNode("End")
// before.appendChild(beforeText)
// after.appendChild(afterText)
// let beforeObj = {
//   class : "start",
//   title : "Start Element",
//   "data-value": "Start"
// }
// let afterObj = {
//   class : "end",
//   title : "End Element",
//   "data-value": "End"
// }
// setAttributes(before, beforeObj)
// setAttributes(after, afterObj)
// div.before(before)
// div.after(after)

// assign 4

// let div = document.querySelector("div")
// let elzero = div.lastChild
// console.log(elzero.nodeValue.trim())

// assign 5
// here you can use nodeName or tagName
// document.addEventListener("click", function(e) {
//   console.log(`This Is ${e.target.nodeName}`)
// })


// ------Lessons 102-110 ----------

// assign 1

// let promtMsg = prompt("Print Number From-To", "Please write the range")
// let range = promtMsg.split("-")
// range.sort()
// for (let i = range[0]; i <= range[1]; i++) {
//   console.log(Number(i))
// }

// assign 2

// function createPop(){
//   let div = document.createElement("div")
//   let h1 = document.createElement("h1")
//   let p = document.createElement("p")
//   let btn = document.createElement("button")
//   let h1Txt = document.createTextNode("Welcome")
//   let pTxt = document.createTextNode("Welcome to Elzero Web School")
//   let btnTxt = document.createTextNode("X")
//   h1.appendChild(h1Txt)
//   p.appendChild(pTxt)
//   btn.appendChild(btnTxt)
//   div.append(h1, p, btn)
//   document.body.appendChild(div)
//   div.style.cssText = "width:500px; height:150px; background-color:#eee; display:flex; jusifty-content:center; align-items:center; flex-direction:column; margin: 20px auto; border:1px solid #ddd; position:relative;"
//   btn.style.cssText = "border-radius:50%; background-color:red; color:white; border:none; padding:7px; position:absolute; top:0; right:0; transform: translate( 50%, -50%);"  
// }

// setTimeout( function() {
//   let promptMsg = prompt("Create Pop-Up?", "Y or N")
//   if ( promptMsg === "Y") {
//     createPop()
//   } else if(promptMsg === "N") {
//     alert("As You Like!")
//   }
// },5000)

// let close = document.addEventListener("click", function(e){
//   if (e.target.tagName === "BUTTON" ){
//     e.target.parentNode.remove()
//   }
// })

// another Answer 
// window.onload = function () {
// 	setTimeout(createPopup, 5000);
// };

// function createPopup() {
// 	let popup = document.createElement("div");
// 	popup.id = "popup";
// 	let heading = document.createElement("h2");
// 	heading.textContent = "Welcome";
// 	let content = document.createElement("p");
// 	content.textContent = "Welcome To Elzero Web School";
// 	let closeBtn = document.createElement("button");
// 	closeBtn.id = "close-popup";
// 	closeBtn.textContent = "x";

// 	popup.style.cssText =
// 		"width: 500px; max-width: 100%; background-color: #eee; padding: 20px; text-align: center; position: relative; border: 1px solid #ccc; font-family: Arial; margin: 100px auto";
// 	closeBtn.style.cssText =
// 		"position: absolute; background-color: #fc0000; color: white; font-size: 1.5rem; top: 0; right: 0; transform: translate(50%, -50%); border-radius: 50%; border: none; width: 35px; height: 35px; cursor: pointer";

// 	popup.append(heading, content, closeBtn);
// 	document.body.append(popup);
// }

// document.addEventListener("click", function (e) {
// 	if (!e.target.matches("#close-popup")) return;
// 	e.target.parentElement.remove();
// });

// assign 3

// let div = document.createElement("div")
// div.textContent = 10
// document.body.appendChild(div)
// let countDown = setInterval(function() {
//   div.textContent -= 1
//   if (div.textContent === "0") {
//     clearInterval(countDown)
//   }
// },1000)


// assign 4 

// let div = document.createElement("div")
// div.textContent = 10
// document.body.appendChild(div)
// let countDown = setInterval(function() {
//   div.textContent -= 1
//   if (div.textContent === "0") {
//     clearInterval(countDown)
//   } else if(div.textContent === "5"){
//     window.open("https://elzero.org", "_self")
//   }
// },1000)

// assign 5

// let div = document.createElement("div")
// div.textContent = 10n˜
// document.body.appendChild(div)
// let countDown = setInterval(function() {
//   div.textContent -= 1
//   if (div.textContent === "0") {
//     clearInterval(countDown)
//   } else if(div.textContent === "5"){
//     window.open("https://elzero.org", "_blank", "width=500,height=500")
//   }
// },1000)



// BOM Challenge

// let container = document.querySelector(".container")
// let input = document.querySelector(".input")
// let add = document.querySelector(".add")
// let tasks = document.querySelector(".tasks")

// // CSS TEXT
// container.style.cssText = "width:500px; background-color:#eee; margin:20px auto; padding:20px; border-radius:5px; position:relative; box-sizing:border-box;"
// input.style.cssText = "width:70%; padding:10px; border:none; border-radius:5px; outline:none;"
// add.style.cssText = "background-color:red; color:white; border:none; border-radius:5px; padding:10px; margin-left:20px; cursor:pointer;"
// tasks.style.cssText = "background-color:#eee; position:absolute; top:100px; width:100%; left:0; padding:20px; box-sizing:border-box; border-radius:5px; display:grid; gap:20px"
// // new Task css style
// let taskStyle = "padding:15px; background-color:white; border-radius:5px; display:grid; grid-template-columns:1fr 1.5fr 0.3fr; "
// // delete button css style
// let deleteStyle = "padding:5px; background-color:red; color:white; border-radius:5px; cursor:pointer; border:none; "
// // completed button css style
// let compeleteStyle = "padding:5px; background-color:grey; color:white; border-radius:5px; cursor:pointer; border:none; width:50%; "

// // JS

// // restore last i from LocalStorage
// let keysArr = Object.keys(window.localStorage)
// let onlyNums = keysArr.filter(el => !isNaN(el))
// let sortOnlyNums = onlyNums.sort((el, el2) => el - el2)
// let lastNum = +(sortOnlyNums.reverse()[0])


// // Restore old tasks
// localArrs = Object.entries(window.localStorage)
// let numsArr = localArrs.filter(([index, value]) => !isNaN(index))
// let strArr = localArrs.filter(([index, value]) => isNaN(index))
// let numsSorted = numsArr.sort(([index1, value1], [index2, value2]) => index1 - index2)
// let strSorted = strArr.sort(([index1, value1], [index2, value2]) => index1 - index2)
// let sortedArr = numsSorted.concat(strSorted)
// let oldTasksArr= [];

// // declare varaibles
// let task;
// let deleteBtn;
// let completedBtn;

// for([index, value] of sortedArr) {
//   if(!isNaN(index)) {
//     oldTasksArr.push([index , value])
//   }
// }
// for (oldTask of oldTasksArr) {
//   createEls()
//   task.setAttribute("id", `ID-${oldTask[0]}`)
//   task.textContent = oldTask[1]
//   if (completedBtn.classList.contains("completed")) {
//     completedBtn.style.backgroundColor = "green"
//     completedBtn.textContent = "Completed"
//   }
//   appendFunc()
// }

// // restore completed 
// for([index, value] of sortedArr) {
//   if(isNaN(index)) {
//     let compEl = document.querySelector(`#${index} .done`)
//     compEl.style.backgroundColor = "green"
//     compEl.textContent = "Completed"
//   }
// }

// // no Tasks to show
// noTaskToShow();

// // add new task
// let i;
// if (!isNaN(lastNum)){
//   i = lastNum
// } else {
//   i = 0
// }
// add.addEventListener("click", function(e){
//   if(input.value !== "") {
//     i++
//     window.localStorage.setItem(i , input.value)
//     createEls()
//     task.setAttribute("id", `ID-${i}`)
//     task.textContent = input.value
//     appendFunc()
//     input.value = ""
//     if (document.body.contains(document.querySelector(".noTask"))) {
//       let noTask = document.querySelector(".noTask")
//       noTask.remove()
//     }
//   }
// })

// // Mark Completed
// document.addEventListener("click", function(e){
//   if (e.target.className === "done") {
//     if (e.target.textContent === "Not-Completed") {
//       e.target.style.backgroundColor = "green"
//       e.target.textContent = "Completed"
//       window.localStorage.setItem(e.target.parentNode.id, "done")
//     } else if(e.target.textContent === "Completed") {
//       e.target.style.backgroundColor = "grey"
//       e.target.textContent = "Not-Completed"
//       window.localStorage.removeItem(e.target.parentNode.id, "done")
//     }
//   }
// })

// // delete task
// document.addEventListener("click", function(e){
//   if (e.target.className === "delete") {
//     e.target.parentNode.remove()
//     let parentId = e.target.parentNode.id
//     idNum = +(parentId.match(/\d+/g).join(""))
//     window.localStorage.removeItem(idNum)
//     window.localStorage.removeItem(parentId)
//     noTaskToShow()
//   }
// })


// // Functions 

// function noTaskToShow() {
//   if(window.localStorage.length === 0) {
//     let noTask = document.createElement("div")
//     noTask.className = "noTask"
//     noTask.textContent = "NO TASKS TO SHOW"
//     noTask.style.cssText = taskStyle
//     noTask.style.color = "grey"
//     tasks.appendChild(noTask)
//   }
// }

// function createEls() {
//   task = document.createElement("div")
//   deleteBtn = document.createElement("button")
//   completedBtn = document.createElement("button")
//   task.style.cssText = taskStyle
//   deleteBtn.style.cssText = deleteStyle
//   completedBtn.style.cssText = compeleteStyle
//   deleteBtn.textContent = "Delete"
//   completedBtn.textContent = "Not-Completed"
//   deleteBtn.setAttribute("class", "delete")
//   completedBtn.setAttribute("class", "done")
// } 

// function appendFunc(){
//   task.append(completedBtn ,deleteBtn)
//   tasks.append(task)
// }

// ------Lessons 111-114 ----------

// assign 1

// let select1 = document.querySelector("#font")
// let select2 = document.querySelector("#color")
// let select3 = document.querySelector("#fontSize")
// let h1 = document.querySelector("h1")

// // change Font
// h1.setAttribute("data-font", window.localStorage.getItem("font"));
// let array1 = Array.from(select1.options)
// let options1 = array1.map((el) => el.value)
// for (option of options1) {
//   if (option === window.localStorage.getItem("font")){
//     let index = options1.indexOf(option)
//     select1.selectedIndex = index
//   }
// }
// select1.addEventListener("change" , function(){
//   h1.dataset.font = ""
//   h1.dataset.font = `${select1.value}`
//   window.localStorage.setItem("font",select1.value )
// })

// // change color
// h1.setAttribute("data-color", window.localStorage.getItem("color"));
// let array2 = Array.from(select2.options)
// let options2 = array2.map((el) => el.value)
// for (option of options2) {
//   if (option === window.localStorage.getItem("color")){
//     let index = options2.indexOf(option)
//     select2.selectedIndex = index
//   }
// }
// select2.addEventListener("change" , function(){
//   h1.dataset.color = ""
//   h1.dataset.color = `${select2.value}`
//   window.localStorage.setItem("color",select2.value )
// })

// // change Font-Size
// h1.setAttribute("data-size", window.localStorage.getItem("fontSize"));
// let array3 = Array.from(select3.options)
// let options3 = array3.map((el) => el.value)
// for (option of options3) {
//   if (option === window.localStorage.getItem("fontSize")){
//     let index = options3.indexOf(option)
//     select3.selectedIndex = index
//   }
// }
// select3.addEventListener("change" , function(){
//   h1.dataset.size = ""
//   h1.dataset.size = `${select3.value}`
//   window.localStorage.setItem("fontSize",select3.value)
// })

// -----assign 1 without CSS
// let select1 = document.querySelector("#font")
// let select2 = document.querySelector("#color")
// let select3 = document.querySelector("#fontSize")
// let h1 = document.querySelector("h1")

// // you have 2 ways to restore old selection
// // [1] using .selected = true | false
// if(window.localStorage.color || window.localStorage.fontSize  || window.localStorage.font ) {
//   document.querySelector(`[value='${localStorage.fontSize}']`).selected = true
//   document.querySelector(`[value='${localStorage.color}']`).selected = true
//   document.querySelector(`[value='${localStorage.font}']`).selected = true
// }

// // using restore function 
// // restore function
// // function restore(select, style) {
// //   let array = Array.from(select.options)
// //   let options = array.map((el) => el.value)
// //   for (option of options) {
// //     if (option === window.localStorage.getItem(`${style}`)){
// //       let index = options.indexOf(option)
// //       select.selectedIndex = index
// //     }
// //   }
// // }

// // change Font
// h1.style.fontFamily = window.localStorage.getItem("font")
// // restore(select1, "font")
// select1.addEventListener("change" , function(){
//   h1.style.fontFamily = select1.value
//   window.localStorage.setItem("font",select1.value )
// })

// // change color
// h1.style.color = window.localStorage.getItem("color");
// // restore(select2, "color")
// select2.addEventListener("change" , function(){
//   h1.style.color = select2.value
//   window.localStorage.setItem("color",select2.value )
// })

// // change Font-Size
// h1.style.fontSize = window.localStorage.getItem("fontSize");
// // restore(select3,"fontSize")
// select3.addEventListener("change" , function(){
//   h1.style.fontSize = select3.value
//   window.localStorage.setItem("fontSize",select3.value)
// })


// assign 2

// let input1 = document.querySelector("#inputOne");
// let input2 = document.querySelector("#inputTwo");
// let input3 = document.querySelector("#inputThree");
// let select = document.querySelector("#select");
// let form = document.querySelector("#form")

// // if(window.sessionStorage.inputOne ) {
// //   input1.value = window.sessionStorage.input1
// // } 
// // if( window.sessionStorage.inputTwo){
// //   input2.value = window.sessionStorage.input2
// // }
// // if( window.sessionStorage.inputThree){
// //   input3.value = window.sessionStorage.input3
// // }

// // here if we use querySelectorAll wil return nodeList and it is not live 
// // so when we add a new input will not be in NodeList so we use getElementsByTagName
// // because it return HTMLCollection and it is live 
// let inputs = document.getElementsByTagName("input")
// // let inputs = document.querySelectorAll("input")
// // let newInput = document.createElement("input")
// // newInput.id = "input4"
// // form.appendChild(newInput)

// for ( input of inputs) {
//     if(window.sessionStorage.getItem(input.id) ) {
//     input.value = window.sessionStorage.getItem(input.id)
//   } 
// }

// if(window.sessionStorage.select) {
//   document.querySelector(`[value='${sessionStorage.select}']`).selected = true
// }
// document.addEventListener("change" , function(e) {
//   window.sessionStorage.setItem(`${e.target.id}`,e.target.value)
// })

// ------Lessons 115-122 ----------

// assign 1

// let arr = [1, 2 ,3 ,4 ,5];
// let [ a, , , ,b] = arr
// console.log(a * b)

// assign 2

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a,b,c,[d,e,[f,g]]] = mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// assign 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let arr4 = arr1.concat(arr2,arr3);
// arr4.splice(1,6);
// let [c , a , b]  = arr4;
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// assign 4 

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// let {age : a , working : w , country: c , hobbies: [h1,h2,h3]} = member;
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// console.log(`I Live in ${c}`);
// console.log(`My Hobbies: ${h1} And ${h3}`);

// assign 5

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };

// let newGame = { 
//     title : t, 
//     developer: d, 
//     releases: { 
//       [o = "Oath In Felghana"] : [u , j],
//       [a = "Ark Of Napishtim"] : {
//         US : u_price ,
//         JAP : j_price,
//     },
//     Origin : or
//   },
// } = game;

// another Answer
// const {
// 	title: t,
// 	developer: d,
// 	releases: { Origin: or }
// } = game;

// const [o, a] = Object.keys(game.releases);

// const [u, j] = game.releases["Oath In Felghana"];

// const { US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"];

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style
// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan
// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim
// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD
// console.log(`${a} Price in USA Is ${j_price}`);
// // Ark Of Napishtim Price in USA Is 10 USD
// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

// assign 6
// challenge on main js file

// ------Lessons 123-133 ----------

// assign 1
// let setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// console.log(+Array.from(setOfNumbers).splice(-1).join(""))
// // another answer
// console.log([...setOfNumbers].pop())

// assign 2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log([...new Set(myFriends)].sort())

// assign 3 
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let myInfoMap = new Map(Object.entries(myInfo))
// console.log(myInfoMap)
// console.log(myInfoMap.size)
// console.log(myInfoMap.has("role"))

// assign 4
// let num = 100020003000
// console.log(+[...new Set(num.toString())].sort().splice(1).join(""))

// assign 5 
// let str = "Elzero"
// // [1]
// console.log(Array.from(str))
// // [2]
// console.log(str.split(""))
// // [3]
// console.log([...str])
// // [4]
// console.log([...new Set(str)])
// // [5]
// console.log([...new Map(Object.entries(str)).values()])
// // [6]
// console.log(Object.values(str))

// assign 6
// let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
// function removeNum(char) {
//   let nums = char.filter((el) => !isNaN(el))
//   let chars = char.filter((el) => isNaN(el))
//   console.log(nums.concat(chars).copyWithin(0,nums.length,(nums.length * 2)))
// }
// removeNum(chars1)
// removeNum(chars2)
// removeNum(chars3)

// another Answer 
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// // Shift numbers to the top of the array
// for (let i = 0; i < chars.length; i++) {
// 	if (typeof chars[i] === "number") chars.unshift(...chars.splice(i, 1));
// }
// // Find the index of first letter in the array
// let firstLetterPosition = chars.findIndex((e) => typeof e === "string");
// // Make needed changes
// chars.copyWithin(0, firstLetterPosition, firstLetterPosition * 2);
// console.log(chars);

// assign 7
// let nums1 = [1,2,3]
// let nums2 = [4,5,6]

// // [1]
// console.log([...nums1,...nums2])
// // [2]
// console.log(nums1.concat(nums2))
// [3]
// nums1.push(...nums2)
// console.log(nums1)
// [4]
// nums2.unshift(...nums1)
// console.log(nums2)
// [5]
// console.log(([nums1,nums2]).flat())
// [6]
// console.log(Array.of(...nums1,...nums2))

// assign 8
// challenge on main js file


// ------Lessons 134-146 ----------

// assign 1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let re = /\d+:\w+:\w+:\w+:\w+:\w+:\w+:\w+/ig
// let ipReg = /[^a-z]+\w+[^a-z]+/gi;
// console.log(ip.match(re))
// console.log(ip.match(ipReg))

// assign 2
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let re = /Os\d*O/ig
// console.log(specialNames.match(re))

// assign 3
// let phone = "+(995)-123 (4567)";
// let re = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig
// console.log(phone.match(re))

// assign 4
// let regex = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// let x = "http://-osama.name/.edu";
// Console.log(regex.test(x));
// 1 - https? returns https or http
// 2 - :\/\/ returns ://
// 3 - (?:[-\w]+\.)? returns ?:-letters. else move one
// 4 - ([-\w]+)\.\w returns -letters.letters
// 5 - (?:\.\w+)? if there ?:/letters else move on
// 6 - \/?.* if there or no / and ... or more

// assign 5 

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}\/?(\s\-\s)?\s?\d{2}(\s\-\s)?\s?\/?\d+/ig

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// assign 6
// challenge on main js file