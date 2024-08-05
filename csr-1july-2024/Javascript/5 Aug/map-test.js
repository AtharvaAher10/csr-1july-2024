// using the get method in the javascript // 

const flowers = new Map([
    ['jasmine' , 200],
    ['mogra', 100],
    ['rose', 500]
]);

let flow = flowers.get('mogra');
document.getElementById('get').innerHTML = "there are "  + flow + " mogra flowers ";

// using set in map //

const cars = new Map();
cars.set("bmw" , 100000);
cars.set('audi', 2000000);
cars.set('jaguar', 6000000);

let price = cars.get('jaguar');
document.getElementById('set').innerHTML = "the price of the car jaguar is :" + price;

// using size in map //

const seasons = new Map([
    ["summer" , 4],
    ["winter", 4],
    ["rainy" , 4]
]);

document.getElementById('size').innerHTML = "the size of the given maped array is " + seasons.size;

// using the delete method in the map //

const newMap = new Map([
    ["bycicle", 30],
    ["motorcycle", 50],
    ["cars", 20]
]);

newMap.delete("motorcycle");
document.getElementById('delete').innerHTML = "the size of the map array afte deleting one element from it is " + newMap.size;

// clear method in the map //

const colors = new Map([
    ["red", 20],
    ["blue",10],
    ["yellow",40]
]);

colors.clear();
document.getElementById('clear').innerHTML = "after clear all the elements in map the value is : " + colors.size;

// has method in the map //

const animals = new Map([
    ["tiger" , 3],
    ["lion", 7],
    ["cheetah", 10]
]);

document.getElementById('has').innerHTML = "element has in map and it returns the :" + animals.has("lion");

// for each method in the map //

const countries = new Map([
    ["india", 1.4],
    ["australia", 0.4],
    ["china", 1.8],
    ["afghanistan", 0.3]
]);

let cntr = "";
countries.forEach(function (value, key) {
    cntr += key + ' = ' + value + "<br>";
});

document.getElementById('foreach').innerHTML = "the list after using the for each method in the map is : <br>" + cntr;


//  using entries in the map method //

var gender = new Map([
    ["male", 20],
    ["female",15],
    ["transgender",3],
]);

var newGender = "";
for(const x of 
    gender.entries()){
        newGender += x + "<br>";
    };

document.getElementById('entries').innerHTML = "the entries are return as <br>" + newGender;

// using map.keys() //

var gender = new Map([
    ["male", 20],
    ["female",15],
    ["transgender",3],
]);

var newGender = "";
for(const x of 
    gender.keys()){
        newGender += x + "<br>";
    };

document.getElementById('keys').innerHTML = "the keys are return as <br>" + newGender;

// using values.map() //

var gender = new Map([
    ["male", 20],
    ["female",15],
    ["transgender",3],
]);

var newGender = "";
for(const x of 
    gender.values()){
        newGender += x + "<br>";
    };

document.getElementById('values').innerHTML = "the values are return as <br>" + newGender;



