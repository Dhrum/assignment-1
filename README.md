1. What is ES6 and what are the new features introduced in ES6?
ES6 (ECMAScript 2015):
ES6, or ECMAScript 2015, is a significant update to the JavaScript language, introducing new features and syntactical improvements to make the language more efficient and easier to use.

New Features:

Arrow Functions: Shorter syntax for function expressions.
javascript
Copy code
const add = (a, b) => a + b;
Classes: Syntactical sugar over JavaScript’s existing prototype-based inheritance.
javascript
Copy code
class Person {
  constructor(name) {
    this.name = name;
  }
}
Template Literals: Multi-line strings and embedded expressions.
javascript
Copy code
const greeting = `Hello, ${name}!`;
Destructuring: Unpacking values from arrays or properties from objects.
javascript
Copy code
const [a, b] = [1, 2];
const {name, age} = person;
Default Parameters: Functions can have default values for parameters.
javascript
Copy code
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
Let and Const: Block-scoped variables and constants.
javascript
Copy code
let count = 0;
const PI = 3.14;
Promises: Simplified asynchronous programming.
javascript
Copy code
new Promise((resolve, reject) => {
  // async operation
});
Modules: Import and export functionality to create modular code.
javascript
Copy code
import { myFunction } from './myModule.js';
2. What is Event Bubbling and Event Delegation in JS?
Event Bubbling:
Event bubbling is a type of event propagation where an event starts at the most specific element and then flows upward to the least specific ones (i.e., from child to parent elements).

Example:

html
Copy code
<div onclick="alert('div clicked')">
  <button onclick="alert('button clicked')">Click me</button>
</div>
Clicking the button will first trigger the button's event, then the div's event.

Event Delegation:
Event delegation is a technique of using a single event listener to manage all events of a particular type for child elements. It leverages event bubbling by attaching a single event listener to a common ancestor of all the elements.

Example:

javascript
Copy code
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName == "BUTTON") {
    alert('Button clicked');
  }
});
3. What is the difference between localStorage, sessionStorage, and cookies?
localStorage:

Data persists even after the browser is closed.
Stores larger amounts of data (up to 5MB or more).
Data is not sent to the server with every request.
sessionStorage:

Data persists only for the duration of the page session.
Similar storage limit to localStorage.
Data is not sent to the server with every request.
Cookies:

Data persists until the expiration date specified.
Stores smaller amounts of data (around 4KB).
Data is sent to the server with every HTTP request.
4. In CSS, what is the difference between display inline, display inline-block, and display block?
display: inline;

Elements do not start on a new line.
Only takes up as much width as necessary.
Cannot set width and height.
display: inline-block;

Elements do not start on a new line.
Takes up as much width as necessary.
Can set width and height.
display: block;

Elements start on a new line.
Takes up the full width available (by default).
Can set width and height.
5. What are new features in CSS3?
New Features in CSS3:

Flexbox: Layout module designed to align items within a container.
css
Copy code
.container {
  display: flex;
}
Grid Layout: Two-dimensional layout system for the web.
css
Copy code
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
Transitions and Animations: Allows for smooth changes between states.
css
Copy code
.box {
  transition: transform 0.5s;
}
.box:hover {
  transform: scale(1.2);
}
Media Queries: Allows for responsive design by applying styles based on device characteristics.
css
Copy code
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
Custom Properties (Variables): Define reusable values.
css
Copy code
:root {
  --main-color: #06c;
}
.element {
  color: var(--main-color);
}
These features enhance the capabilities and performance of web development, enabling more dynamic and responsive designs.

References
Mozilla Developer Network (MDN) - JavaScript
W3Schools - JavaScript ES6
MDN - CSS
CSS Tricks
DevDocs
