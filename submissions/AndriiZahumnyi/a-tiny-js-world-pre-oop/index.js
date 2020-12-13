/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/AndriiZahumnyi/a-tiny-JS-world
   Web app: https://andriizahumnyi.github.io/a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here



const man = {
   species: 'human',
   name: 'John',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'Hi! How are you?',
   friendlyTo: ['Toby', 'Tereza', 'Tom']
};

const woman = {
   species: 'human',
   name: 'Tereza',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'I`m fine, thanks!',
   friendlyTo: ['Tom']
};

const dog = {
   species: 'dog',
   name: 'Toby',
   gender: 'male',
   legs: 4,
   hands: 0,
   tail: 1,
   saying: 'woof-woof!',
   friendlyTo: ['John', 'Tereza']
};

const cat = {
   species: 'cat',
   name: 'Tom',
   gender: 'male',
   legs: 4,
   hands: 0,
   tail: 1,
   saying: 'meow-meow!',
   friendlyTo: ['Tereza']
};

const catWoman = {
   species: 'human',
   name: 'Kitty',
   gender: 'female',
   legs: 2,
   hands: 2,
   tail: 1,
   saying: cat.saying
};

const world = [man, woman, catWoman, dog, cat];

const listOfKeys = ['species', 'name', 'gender', 'legs', 'hands', 'tail', 'saying', 'friendlyTo'];

makingString = obj => {
   let string = '';
   for (let i = 0; i < listOfKeys.length; i++) {
      if (i + 1 === listOfKeys.length) {
         string += (obj[listOfKeys[i]] + ".");
         return string;
      } else {
         string += (obj[listOfKeys[i]] + "; ");
      }
   }
};

world.forEach(obj => print(makingString(obj)));

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */


/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
*/
