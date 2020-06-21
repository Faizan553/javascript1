// Chapter# 1:
// task@ 1:
// var firstname=prompt("Enter first name");
// var lastname=prompt("Enter last name");
// var fullname=firstname+lastname;
// document.write("Asssala-Mu-Alaikum " + fullname);


// task# 2:
// var mobile =prompt("Enter mobile model");
// var size= mobile.length;
// document.write("My Favorite phone is: " + mobile + "<br>");
// document.write("Length of string: " + size);




// task# 3:
// var name = "Pakistani";
//   var a = name.indexOf("n");
//   document.write("String: "+ name + "<br>");
//   document.write("Index of 'n': " + a);


// task# 4:
// var name= "Hello World";
//   var a = name.lastIndexOf("l");
//   document.write("String: " + name + "<br>");
//   document.write("Last index of 'l': " + a);



// task# 5:
// var name="pakistani"
// var a=name.charAt(3);
//   document.write("String: " + name + "<br>");
//   document.write("Character at index 3: " + a);

// task# 6:
// var firstname=prompt("Enter first name");
// var lastname=prompt("Enter last name");
// var fullname=firstname.concat(lastname);
// document.write("Asssala-Mu-Alaikum " + fullname);



// task# 7:
// var name="Hyderabad";
// var a=name.replace("hyder","Islam");
//   document.write("City: " + name + "<br>");
//   document.write("After replacement: " + a);


// task# 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var a=message.replace(/and/g,"&");
// document.write(a);

// task# 9:
// var str="472";
// var a=parseInt(str,0);
// document.write("Value: " + str + "<br>");
// document.write("Type: " + "string" + "<br>");
// document.write("Value: " + a + "<br>");
// document.write("Type: " + "number");

// task# 10:
// var name=prompt("Enter any name for convert capital letter");
// var a=name.toUpperCase();
// document.write("User input: " + name + "<br>");
// document.write("Upper case: " + a);4

// task# 11:
// var name = "javascript"
// var con = name.charAt(0).toUpperCase() + name.slice(1);
// document.write(con);


// task#12 :
// var number=35.36;
// var b = number.toString();
// var a=b.replace(".","");
// document.write("Number: " + number + "<br>");
// document.write("Result: " + a);



// task# 13:
// var name=prompt("Enter username");
// for (var i=0;i<=name.length;i++){
//   if (name[i]==="@"){
//     alert("enter a valid username");
//   }
//   else if (name[i]==="!"){
//     alert("enter a valid username");
//   }
//   else if (name[i]==="."){
//     alert("enter a valid username");
//   }
//   else if (name[i]===","){
//     alert("enter a valid username");
//   }
// }


// task# 14:
// var A = ["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");



//     if (A[0]===search){
//         document.write("Cake is <b>Available</b> at index " + 0 + " in our bakery");
    
//     }
//     else   if (A[1]===search){
//         document.write("apple pie is <b>Available</b> at index " + 1 + " in our bakery");
    
//     }
//     else   if (A[2]===search){
//         document.write("Cookie is <b>Available</b> at index " + 2 + " in our bakery");
    
//     }
//     else   if (A[3]===search){
//         document.write("Chips is <b>Available</b> at index " + 3 + " in our bakery");
    
//     }
//     else   if (A[4]===search){
//         document.write("patties is <b>Available</b> at index " + 4 + " in our bakery");
    
//     }
//     else {
//         document.write("We are sorry.pastry is <b> not available</b> in our bakery");
//     }








// task# 16:
// var university = "University of Karachi";
// var a=university.split("");
// for (var i=0;i<=university.length-1;i++){
//     document.write(a[i] + "<br>");
// }




// task# 17:
// var name="Pakistan";
// var a=name.charAt(name.length-1);
// document.write("User input: " + name + "<br>");
// document.write("Last character of input: " + a);




// task# 18:
// var temp = "the quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) || []).length;
// document.write("Text: " + temp + "<br>");
// document.write("There are " + count + " occurance(s) of word 'the'");



// <<..........................................................................>>




// chapter# 26-30:
// task# 1:
// var int=prompt("Enter positive number");
// var a=Math.round(int);
// var b=Math.floor(int);
// var c=Math.ceil(int);
// document.write("number: " + int + "<br>");
// document.write("number: " + a + "<br>");
// document.write("number: " + b + "<br>");
// document.write("number: " + c + "<br>");


// task# 2:
// var int=prompt("Enter negative floating point number");
// var a=Math.round(int);
// var b=Math.floor(int);
// var c=Math.ceil(int);
// document.write("number: " + int + "<br>");
// document.write("number: " + a + "<br>");
// document.write("number: " + b + "<br>");
// document.write("number: " + c + "<br>");



// task# 3:
// var number=-4;
// var a=Math.abs(number);
// document.write("The absolute value of " + number + " is " + a);



// task# 4:
// var number=4;
// var a=number+2;
// document.write("random dice value: " + number + "<br>");
// document.write("random dice value: " + a + "<br>");


// task# 5:
// var a=Math.floor((Math.random() * 2)+1);
// if (a==1){
//     document.write("random coin value: Tails");
// }
// else{
//     document.write("random coin value: Heads");
// }


// task# 6:
// var a=Math.floor((Math.random() * 100)+1);
// document.write("random number between 1 and 100: " + a);



// task# 8:
// var user=prompt("Enter number");
// var a=Math.floor((Math.random() * 10)+1);

// if (user==a){
//     alert("congratulate the user");
// }
// else{
//     alert("try again");

// }




// <<..........................................................................>>





// chapter# 31-34:
// task# 1:
// var date= new Date();
// document.write(date);



// task# 2:
// var date = new Date();
// var month=date.getMonth();
// if (month==5){
// document.write("Current month: june");
// }
// else if(month==6){
// document.write("Current month: july");
// }

// task# 3:
// var date = new Date();
// var day=date.getDay();
// if (day==1){
//     document.write("Today is Mon");
// }
// else if (day==2){
//     document.write("Today is Tue");
// }
// else if (day==3){
//     document.write("Today is Wed");
// }
// else if (day==4){
//     document.write("Today is Thu");
// }
// else if (day==5){
//     document.write("Today is Fri");
// }
// else if (day==6){
//     document.write("Today is Sat");
// }
// else if (day==0){
//     document.write("Today is Sun");
// }


// Task# 4:
// var date = new Date();
// var day=date.getDay();
// if (day==1){
//     document.write("Today is Mon");
// }
// else if (day==2){
//     document.write("Today is Tue");
// }
// else if (day==3){
//     document.write("Today is Wed");
// }
// else if (day==4){
//     document.write("Today is Thu");
// }
// else if (day==5){
//     document.write("Today is Fri");
// }
// else if (day==6){
//     document.write("It's Fun day");
// }
// else if (day==0){
//     document.write("It's Fun day");
// }


// Task# 5:
// var date = new Date();
// var date=date.getDate();
// if (date<16){
// document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// task# 6:
// var date=new Date();
// document.write("Current Date: " + date + "<br>");
// var time=date.getTime();
// document.write("Elapsed milliseconds since january 1,1970: " +  time + "<br>");
// var minute=time/60000;
// document.write("Elapsed Minutes since january 1,1970: " +  minute);


// task# 7:
// var date = new Date();
// var hour=date.getHours();
// var minute=date.getMinutes();

// if (hour>=12 && hour<24){
//     document.write("it's PM");
// }
// else {
//     document.write("it's AM");
// }


// task# 8:
// var d = new Date();
// d.setFullYear(2020, 11, 31);
// d.setHours(0,0,0);
// document.write("Later date: " + d);


// task# 9:
// const oneDay = 24 * 60 * 60 * 1000; 
// const firstDate = new Date(2015, 5, 18);
// const secondDate = new Date(2020, 4, 24);
// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// document.write(diffDays + " days have passed since 1st Ramadan, 2015");





// task# 12:
// var date = new Date();
// document.write("Current date: " + date + "<br>");
// date.setFullYear(1920,5,20);
// document.write("100 years back, " + date);



// task# 13:
// var age=prompt("Enter your age");
// var cal=2020-age;
// document.write("your age is " + age + "<br>");
// document.write("your birth year is " + cal);




// task# 14:
// var name="Faizan";
// var date=new Date();
// var month=date.getMonth();
// var hea="K-Electric Bill";
// var size=hea.fontsize(25);
// document.write("<b>" + size + "</b>" + "<br><br>");

// document.write("Customer Name: " + "<b>" + name + "</b>" + "<br>");
// if (month==5){
// document.write("Month:<b> june </b>" + "<br>");
// }
// else if(month==6){
// document.write("Month: <b> july </b>" + "<br>");
// }
// var unit=410;
// var perunit=16;
// document.write("Number of units: " + "<b>" + unit + "</b>" + "<br>");
// document.write("Charges per unit: " + "<b>" + perunit + "</b>" + "<br><br>");
// var total=unit*perunit;
// var late=350;
// var duedate=late+total;
// document.write("Net Amount Payable (within Due Date): " + "<b>" + total + "</b>" + "<br>");
// document.write("Late payment surcharge: " + "<b>" + late + "</b>" + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + "<b>" + duedate + "</b>" + "<br>");





// <<..........................................................................>>





// Chapter# 35-38:
// task# 1:
// var date=new Date();
// document.write(date);


// task# 2:
// greet();
// function greet(){
//     var firstname=prompt("Enter your first name");
//     var lastname=prompt("Enter your last name");
//     var fullname=firstname.concat(lastname);
//     document.write("Assala-Mu-Alaikum " + fullname);

// }


// task# 3:

// document.write("Sum is: " + add());
// function add(){
//     var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
//     var sum=num1+num2;
    
//     return(sum);
// }
// document.write(sum);



// task# 4:
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var operator=prompt("Enter operator:");
// document.write("Answer is: " + calculator(num1,num2,operator));
// function calculator(a,b,c)
// {
//     if (operator=='+'){
//         return(a+b);
//     }
//     else if (operator=='-'){
//         return(a-b);
//     }
//     else if (operator=='*'){
//         return(a*b);
//     }
//     else if (operator=='/'){
//         return(a/b);
//     }
//     else if (operator=='%'){
//         return(a%b);
//     }
// }



// task# 5:
// var num=prompt("Enter square number");
// document.write("square is: " + square(num));
// function square(a){
//     var b=a*a;
//     return(b);
// }


// task# 6:
// var num=prompt("Enter factorial number");
// document.write("Factorial is: " + factorial(num));
// function factorial(n) { 
//     var ans=1; 
      
//     for (var i = 2; i <= n; i++) 
//         ans = ans * i; 
//     return ans; 
// } 




// task# 7:
// count();
// function count(){
//     var num1=prompt("Enter first number");
//     var num2=prompt("Enter your end number");
// for (var i=num1;i<=num2;i++){
//     document.write(i + "<br>");
// }
// }



// task# 8:
// var base=+prompt("Enter base:");
// var per=+prompt("Enter perpendicular:");
// document.write("Answer is: " + hyp(base,per));
// function hyp(a,b){
//    var c=a*a;
//    var d=b*b;
//    var e=c+d;
//     return(e);
// }


// task# 10:
// var str=prompt("Enter the string check palindrome");
// document.write(str + " is " + palindrome(str));
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return ("not palindrome word");
//         }
//     }

//     return ("palindrome word");
// }




// task# 11:
// var str="the quick brown fox";
// document.write(capital_letter(str));


// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }


// task# 12:
// var str="Web Development Tutorial";
// document.write(find_longest_word(str));
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }




// task# 13:
// var str="w3resource.com"
// var letter="o";
// document.write(char_count(str, letter));
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }




// task# 14:
// var radius=prompt("Enter radius number:");
// document.write("The circumference is: " + calcCircumference(radius) + "<br>");
// document.write("The area is: " + calcArea(radius));
// function calcCircumference(radius){
//     var ans=(2*3.14)*radius;
//     return(ans);
// }
// function calcArea(radius){
//     var ans=(radius*radius)*3.14;
//     return(ans);
// }




