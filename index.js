// Review - Arrays and Objects
// NOTE! Pay close attention to creating code with good and consistent code style.

// Create an array that contains three strings.
const fruit = ["Apple", "Banana", "Orange"];

// Create an array that contains one string, one number and one boolean.
const kalaya = ["Berlin", 26, true];

// Create an array hat contains three empty arrays.
const arrayOfArrays = [[],[],[]];

// Create an empty object.

const thisIsAnObject = {};

// Create an object with three properties: id, email, password.
const person = {
    id: 954121,
    email: "hello@SpeechGrammarList.com",
    password: "sunset2000",
};

// Create an array that contains three objects. All objects should have a width and a height property.
const array2 = [
    {width : 15, height: 78,},
    {width : 15, height: 78,},
    {width : 15, height: 78,}
];

// Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.
const exercise = {
    string: "hello",
    array: [1, 2, 3],
    object: {greeting: "Hello"}
};

// Print the type of a variable that has an array value.
console.log(typeof array2);

// Print the type of a variable that has an object value.
console.log(typeof exercise);

// Create an array with five random values.
const vegetables = ["carrot", "potatoes", "tomatoes", "brocoli", "cauliflower"];

//10.1. Add one value to the end of the array. 
vegetables.push("pepper");
console.log(vegetables);

//10.2. Add one thing to the beginning of the array. 
vegetables.unshift("cucumber");
console.log(vegetables);

//10.3. Take out one thing from the end of the array.
vegetables.pop();
console.log(vegetables);

//10.4. Print the length of the array.
 console.log(vegetables.length);

//10.5. Take out one thing from the end of the array. 
vegetables.pop();
console.log(vegetables);

//10.6. Take out one the 2nd thing from the array.
const veggie = vegetables.splice(1,1);
console.log(veggie);

