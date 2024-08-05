let mySet = new Set([1,5,4,3,6,7,8,3,2,1,5])
console.log(mySet);

// using an add operation on the set //
mySet.add("nova");
mySet.add("harry");
mySet.add("Raven");
console.log(mySet);

// using delete operation to remove thye element from the set //
mySet.delete('nova');
console.log(mySet);

// to find the element which is present in set or not using has method //
console.log(mySet.has(4));


// using for each method over the set //
let newcolor = new Set("black" , "pink", "violet", "red");

newcolor.forEach((value) => {
    console.log(value);
});


// using values method in the set
let numbers2 = new  Set([45,43,23,2,1]);
let setValue = numbers2.values();

console.log(setValue);



