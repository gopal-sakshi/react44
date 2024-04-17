JSX 
- Javascript XML
- allows us to write HTML in react
- we dont need createElement(), appendChild()
    JSX converts HTML tags into react elements
- JSX lets you write HTML-like markup inside a JavaScript file
    keeping rendering logic & content in the same place

a) Write expressions inside curly braces { }
b) To write HTML on multiple lines, put the HTML inside parentheses:
c1) html code must be wrapped in one div
c2) close empty elements with />
d) use className, instead of class

const exp23 = <div> React is { 5+5 } times better with JSX </div>

const list23 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myElement = <h1 className="myclass">Hello World</h1>;

