# JavaScript 6: Intro DOM (Document Object Model)

This is where Javascript becomes fun.  This is where we make animations, create interactivity, build scrolling effects, makes games, validate data (could be fun i guess); this is literally where all the awesome stuff is done by websites that are awesome.

Before we can use the DOM we need to understand what the DOM is.  Let's talk about what it is not first:

- It is **not** the HTML you write
- It is **not** your CSS
- It is **not** your JavaScript

In its' most simple sense, the DOM is the interface that exists between your HTML, CSS, and JavaScript.  The DOM is created by the web browser and it defines how we can interact with a webpage.  When your page loads the browser parses the HTML and creates a huge nested object the represents that page.  It has properties for all the data needed to render that page and the events needed to interact with that page.  This object shows all the parent and child relationships that exist in your html.  It has a ton of stuff and you do not know most of it.  But it is there when you need it.

You can inspect the entire DOM in your browser dev tools.

```
document // returns all of the markup that makes the document
console.dir(document) // returns the object that is the DOM
```

## Select and Manipulate

The DOM allows us to select parts of a web page and change it.  We can change the style of our tags, the content of our html, and even the tags themselves.  Everything we pretty much do relies on interacting with the document object.

```
document.URL // url of the page we are on
document.head // all of the head content
document.body // the entire body
document.links // every link on the page
```

### Selectors

Selectors are methods not the document that we use to access DOM content.  We literally run a search on the DOM for whatever we want

```
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()
```

Conceptually the document object would have these properties

```
var document = {
    getElementById: function () {
        // returns a single node
    },
    getElementsByClassName: function () {
        // returns a node list
    },
    getElementsByTagName: function () {
        // returns a node list
    },
    querySelector: function () {
        // returns a single node
    },
    querySelectorAll: fuSelector) {
        // returns a node list
at match
    }
}
```

When we use these will get back data that looks like an array, but its not.  The selectors return a node list.  Think of a very simple array that does not have all the methods like push and pop.  You can still use a for loop to iterate over the node and access t


**ElementById**: Returns the one element that is on the page

**ElementsByClassName**: Returns all the elements that match a class name

**ElementsByTagName**: Returns all the elements that match a tag name

**querySelector**: Takes a css style selector but returns only the first match 

**querrySelectorAll**: This works the same as querySelector but returns all elements that match

We can use a new type of login to inspect the DOM in out console.

```
var tag = document.getElementById('matchThis')
console.dir(tag)
```

### Selector exercise

Come up with 4 different ways to select the first paragraph

    <html>
    <head></head>
    <body>
        <h1>Heading</h1>
        <p id="first" class="special">I am a paragraph</p>
        <p>I am also paragraph</p>
        <p class="special">I am a paragraph too</p>
        <p id="last">I am a paragraph as well</p>
    </body>
    </html>


### Manipulate

There are a few way we can manipulate a DOM node:

- Change the style
- Add or remove classes
- Change attributes
- Change content

While they all change content, unfortunately each of them has a very unique way of doing it.

#### Style object
Every rendered node has a property called style.  Its value is a huge object that has a every a property for CSS property you can set.  You can access and change all of these styles with JavaScript.  The styles used in JS do not follow a kabob casing; they are camel cased version of the CSS property.

```
var node = document.getElementById("some-id")
node.style.color = 'red'
node.style.fontSize = '16px'
```

#### Adding classes

If the last method seemed like too much typing, we can also change the style by adding or removing CSS classes that have style rules associated to them.  All of our rendered node have a classList property that will look and feel like an array.  But like the node list, it is not an array.  You have three methods you can use to manipulate classes: add, remove, and toggle

```
var node = document.getElementById("some-id")
node.classList.add('some-class')
node.classList.remove('another-class')
node.classList.toggle('another-class') // will either add or remove a class based on it being in the list or not
```

#### Manipulating attributes

We can also change the values of HTML attributes.

```
var node = document.getElementById("some-link")
node.getAttribute('href')
node.setAttribute('href', 'http://www.google.com')
```

#### Changing content

The content can be changed in a couple of different ways.  Each of these uses will completely replace all the content within a HTML tag.

- textContent: will get all the of the text but remove all the html tags
- innerHTML: will return the markup with the content

```
var node = document.getElementById("some-id")
node.textContent
node.textContent = 'some string' // replaces everything in the tag with a string
node.innerHTML
node.innerHTML = 'replaces' // replaces everything in the tag with HTML
```



