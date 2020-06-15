//===Chapter1 Tasks===//
 
function showAlert() { 
   alert ("Welcome!")
 } 
showAlert(); 


function myFunction() {
   alert ("Welcome To JS Land...");

   alert ("Happy Coding!\nPrevent this page for additional dialogs.");

}

//===Chapter2 Tasks===//
function myName() {
  var userName = "myName - TayyabaFatima";
  document.getElementById("demo").innerHTML = userName;
}

function myMessage() {
  var message = "Hello World";
        alert(message);
}

function myStudent() {
var name = "Jhone Doe";
var age = "15 year old";
var degree = "Certified Mobile Application Development"; 

alert (name);
alert (age);
alert (degree);

}

function myEmail() {
 var str1 = "My email address is ";
 var email = "example@example.com";
 
 alert (str1.concat(email));

}

function myJava() {
 var book = "A smarter way to learn JavaScript";
 
 alert ("I am trying to learn from the Book " + book );

}

function myDisplay() {
document.getElementById("display").innerHTML = "Yah! I can write HTML Content through JavaScript";

}

function myDesign() {
 var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
 alert (design);

}

//==Chapter 3 Task===//

function myAge() {
var age = "I am 15 year old";
alert (age);

}


function nameDefined(ckie,nme)
{
  var splitValues
  var i
  for (i=0;i<ckie.length;++i)
  {
     splitValues=ckie[i].split("=")
     if (splitValues[0]==nme) return true
  }
  return false
}

function delBlanks(strng)
{
  var result=""
  var i
  var chrn
  for (i=0;i<strng.length;++i) {
     chrn=strng.charAt(i)
     if (chrn!=" ") result += chrn
  }
  return result
}
function getCookieValue(ckie,nme)
{
  var splitValues
  var i
  for(i=0;i<ckie.length;++i) {
     splitValues=ckie[i].split("=")
     if(splitValues[0]==nme) return splitValues[1]
  }
  return ""
}
function myVisit() {
readCookie()
displayCounter()
}
function displayCounter() {
alert("You've visited this page " + counter+" times.")
}
function readCookie() {
var cookie=document.cookie
counter=0
var chkdCookie=delBlanks(cookie)  //are on the client computer
var nvpair=chkdCookie.split(";")
if(nameDefined(nvpair,"pageCount"))
counter=parseInt(getCookieValue(nvpair,"pageCount"))
++counter
var futdate = new Date()
var expdate = futdate.getTime()
expdate += 3600000 * 24 *30  //expires in 1 hour
futdate.setTime(expdate)

var newCookie="pageCount="+counter
newCookie += "; expires=" + futdate.toGMTString()
window.document.cookie=newCookie
}

function myBirth() {
 var birthYear = "1998";
  document.getElementById("birth").innerHTML = "My birth year is" + birthYear + "<br/> Datatype of my declared varible is number";

}

function onlineClothing() {
 var visitorName = "John Doe";
 var result = visitorName.bold();
  var order = "5 T-shirt";
   var resultSec = order.bold();

  
  
  document.getElementById("store").innerHTML = result + " Order " + resultSec + "(s) on XYZ Clothing store";

}

//==Chapter 4 Task===//

function oneStatement() {
 var person = "John Doe", carName = "Volvo", price = 500;
document.getElementById("one").innerHTML = person + carName + price;

}

function legalVariable () {

 var legal = "Legal Variable <br /> My_variable<br /> $my_variable <br />_my_variable <br /> my_variable_example<br /> MyVariableExample<br /><br />";
 var illegal =" Illegal Variable <br /> 1my_example<br />	@my_variable<br /> ++my_variable<br /> %my_variable<br /> #my_variable<br /> ~my_variable";
document.getElementById("variable").innerHTML = legal + illegal;

}

function browserDisplay() {

var heading="Rules For Naming JS Variable	<br/><br/><br/>";
 var result = heading.bold();
  
 
document.getElementById("browser").innerHTML = result + "<br />A heading stating Rules for naming JS variables<br />	Variable names can only contain ______, ______,______ and ______.<br />For example $my_1stVariable<br />Variables must begin with a ______, ______ or_____. <br />	For example $name, _name or name<br />Variable names are case _________<br />Variable names should not be JS _________";

}

//==Chapter 5 Task ===//

function sumVari(){

var x = 3;
var y = 5;
var z = x + y;
document.getElementById("sum").innerHTML = "Sum of " + x + " and " + y + " is " + z;

}

function subVari(){

var x = 3;
var y = 5;
var z = x - y;
document.getElementById("sub").innerHTML = "Sub of " + x + " and " + y + " is " + z;

}


function mulVari(){

var x = 3;
var y = 5;
var z = x * y;
document.getElementById("mul").innerHTML = "Mul of " + x + " and " + y + " is " + z;

}

function divVari(){

var x = 3;
var y = 5;
var z = x / y;
document.getElementById("div").innerHTML = "Div of " + x + " and " + y + " is " + z;

}

function generateTable()
{
var myVar = 4;
var myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
}

function markSheet()
{
var totalMarks = prompt("Enter Your Total Marks");
var obtMarks = prompt("Enter Your Obtain Marks");
var per = obtMarks * 100 / totalMarks;

document.getElementById("mark").innerHTML = "Total Marks:" + totalMarks + "<br />"+ "Obtain Marks:" + obtMarks + "<br />"+ "Percentage:" + per + "<br />";


}

//==Chapter 6-9 Task===//

function outputResult() {
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;

--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; 

document.getElementById("res").innerHTML = "a: " + a + " <br /> b: " + b + " <br/> result: " + result;
}

function greetUser() {
 var txt;
 var person = prompt("Please enter your name:", "Your Name");
 if (person == null || person == "") {
   txt = "User cancelled the prompt.";
 } else {
   txt = "Hello " + person + "! How are you today?";
 }
 document.getElementById("greet").innerHTML = txt;
}

function myBydefault() {
 var myVar;
 var myString;
 var person = prompt("Please enter number:", "You want the table of?");
 if (person == null || person == "") {
  myVar = 5;
  myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
 } 
 else {
 
myVar = person;
  myString = "";
for (i=1; i<=10; i++) {
myString += myVar+ " x " +i+ " = " +(i*myVar)+ "<br/>";
}
document.write(myString);
               
               }
 document.getElementById("default").innerHTML = myVar;
}


function myTbl()
{
var english = prompt("Enter Your English Marks");
var maths = prompt("Enter Your Maths Marks");
var urdu = prompt("Enter Your Urdu Marks");
var totalMarks = ("Enter Your Total Marks", "300");
var obtMarks = parseInt(english) + parseInt(maths) + parseInt(urdu) ;
var percantage = obtMarks * 100 / totalMarks;

document.getElementById("tbl").innerHTML = english;
document.getElementById("tbl2").innerHTML = maths;
document.getElementById("tbl3").innerHTML = urdu;
document.getElementById("tbl4").innerHTML = obtMarks;


document.getElementById("per1").innerHTML = parseInt(english)* 100 / 100 + "%";
document.getElementById("per2").innerHTML = parseInt(maths)* 100 / 100 + "%";
document.getElementById("per3").innerHTML = parseInt(urdu)* 100 / 100 + "%";
document.getElementById("per4").innerHTML = percantage + "%";

}

function cityName() {
 var txt;
 var city = prompt("Please enter city name:", "City Name");
 if (city == "karachi") {
   txt = "“Welcome to city of lights”";
 } else {
   txt = "Your city can not modify";
 }
 document.getElementById("cn").innerHTML = txt;
}

function genderName() {
 var txt;
 var gender = prompt("Please Gender:", "female or male");
 
 if (gender == "male") {
   txt = "Good Morning Sir";
 } 
 else if (gender == "female") {
   txt = "Good Morning Mam";
 } 
 
 else {
   txt = "Gender not Enter";
 }
 document.getElementById("g").innerHTML = txt;
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
} //==Output given condition for variable a is true ===//

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} //=== Output not show b/c od condition flase==//

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}//===Output Condition true 2 and true 4===//


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}//=== Output Cost not Equal==//


if (true){
alert("True");
}
if (false){
alert("False");
}//==Output True==//

if("car" < "cat"){
alert("car is smaller than cat");
} //== Output car is smalle than cat==//


//==Chapter 12- 20 Tasks ===//
function twoInt() {
var input1 = prompt("Enter first number:");
var input2 = prompt("Enter second number:");

 document.getElementById("large").innerHTML = Math.max(input1, input2);
}

function myFix() {
 var greeting;
 var time = new Date().getHours();
 if (time < 10) {
   greeting = "Good morning";
 } else if (time < 20) {
   greeting = "Good day";
 } else {
   greeting = "Good evening";
 }
 document.getElementById("fx").innerHTML = greeting;
}