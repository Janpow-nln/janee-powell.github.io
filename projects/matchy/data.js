/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Cow";
animal['name'] = 'Betty';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "mooooo";
noises[1] = "moo";
noises[2] = "mhpf";
noises[3] = "mooo";
noises[4] = "toot";



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  bracket and dot notation 
 * 2. What are the different ways of accessing elements on arrays?
 * access by index 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

var cat = {
  species: 'cat',
  name: 'Jack',
  noises: ['meow', 'puur', 'sneeze']
};
animals.push(cat);
var bird = {
  species: 'bird',
  name: 'Jay',
  noises: ['tweet', 'peck', 'flap']
};
animals.push(bird);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// array is a great way to making a list 
function getRandom(array) {
  let num = array.length
  return Math.floor(Math.random() * num)
}
console.log(animals[getRandom(animals)].name);

friends.push(animals[getRandom(animals)]["name"])

console.log(friends); 
animals[1]["friends"] = friends;
console.log(animals[1]["friends"]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports.animal = animal || null;
  module.exports.noises = noises || null;
  module.exports.animals = animals || null;
  module.exports.friends = friends || null;
  module.exports.getRandom = getRandom || null;
}