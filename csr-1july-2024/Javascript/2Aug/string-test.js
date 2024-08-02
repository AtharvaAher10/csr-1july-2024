let str = "hello javascript";
let firstName = "Atharva";
let lastName = "Aher";
let fullName = (firstName +" " + lastName);
let myName = "JOHN";



document.getElementById('string1').innerHTML = str;


document.getElementById('fullname1').innerHTML = "the concated string is " + fullName;
document.getElementById('index1').innerHTML = "the index of the letter r is :" + firstName.indexOf("r");
document.getElementById('lastIdx').innerHTML = "the last index of the letter N is :" + myName.lastIndexOf("N");
document.getElementById('length').innerHTML = "the length of the sring fullname is :" +(fullName.length);
document.getElementById('upper').innerHTML = "the uppercase string of the firstname is :" + firstName.toUpperCase();
document.getElementById('upper1').innerHTML = "the lowercase string of name is :"  + myName.toLowerCase();
document.getElementById('value').innerHTML = "the splited  string in JOHN is :"  + myName.split("J");
document.getElementById('start').innerHTML = "the firstname start with A is :"  + firstName.startsWith("A");
document.getElementById('end').innerHTML = "the lastname ends with e is  :"  + lastName.endsWith("e");





