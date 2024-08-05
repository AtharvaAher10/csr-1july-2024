let carsCollection = ["suv", "sedan", "offroad", "4 * 4", "luxury"];
let colorCars = ["blue", "green", "yellow", "pink"];

// Using the includes method
document.getElementById("includes").innerHTML =
  "The sedan type of the car is included in the given array: " +
  carsCollection.includes("sedan");

// Using the concat method
document.getElementById("concat").innerHTML =
  "The concatenated array of both arrays is: " +
  carsCollection.concat(colorCars);

// Using the sort method
let sorted = colorCars.sort();
document.getElementById("sort1").innerHTML =
  "The sorted elements from the given array are: " + sorted;

// Using the toString method
let monthsName = ["jan", "feb", "march", "april"];
let upperMonths = monthsName.toString();
document.getElementById("str").innerHTML =
  "The months in the toString format are: " + upperMonths;

// Using the join method
document.getElementById("join").innerHTML =
  "The elements in the array using join method are: " + monthsName.join("*");

// Using the findIndex method
let result = monthsName.findIndex((month) => month === "march");
document.getElementById("findidx").innerHTML =
  "The index of the month 'march' in the given array is: " + result;

// Implementing the stack using push and pop
let fruits = ["orange", "banana", "mango", "pineapple", "kiwi", "dragonfruit"];
let push1 = fruits.push("custard");
document.getElementById("push1").innerHTML =
  "The new length of the array after push is: " + push1;

let pop1 = fruits.pop();
document.getElementById("pop1").innerHTML =
  "The element popped from the array is: " + pop1;

// Implementing the queue using shift and unshift
let cricketTeams = [
  "India",
  "Australia",
  "England",
  "New Zealand",
  "South Africa",
  "West Indies",
];
let queued = cricketTeams.shift();
document.getElementById("shift1").innerHTML =
  "The removed first element from the array using shift method is: " + queued;

let queued1 = cricketTeams.unshift("kiwi");
document.getElementById("unshift1").innerHTML =
  "Using unshift, it adds a new element at the beginning of the array and returns the new length: " +
  queued1;

// array length method  // 
let delArray = ['animal', 'plants', 'fruits', 'vegetables']
document.getElementById('arrLength').innerHTML = "the lenght of the give array is : " + delArray.length;

// using array splice //

let companyName = ['tcs', 'infosys', 'mastercard', 'wipro'];

let newCompany = companyName.splice(2,1, 'tiaa','tech');
document.getElementById('splice1').innerHTML = "splice removes the element from its index position and return the removed element is : " + newCompany;


