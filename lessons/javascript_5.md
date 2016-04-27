# JavaScript: Data Structures Part 2 Objects

## Computer Science: Trees
Trees are the most common data structure used on the web.  A tree is a data structure that creates a hierarchy of information.  HTML is a hierarchal structure.  A node has a pointer to its parents and its children.  A tree structure can continue to nest deeper and deeper.  

## JavaScript: Objects

In JavaScript we use objects to create a tree structure.  JS objects are not used for sequential data but more so to describe relationships in data.  Object have properties that describe attributes of information.  Each of these properties have a value, creating a key value pair.  This is a concept that we should be very familiar with by now in HTML we used key value pairs when we placed attributes on our tags.  In CSS we used key value pairs to describe a rule.  In JavaScript we use key value pairs to describe information and its relationships.

## Syntax

An object starts and ends with curly braces.  This is just like many of the other JavaScript features we have been learning about.  Inside the curly braces we will place a collection of key value pairs that will be used to describe the object.  Key value pairs are separated by a colon.  While it's not required, to make it easier to read you should place a space after the colon.  Each key value pair in the object needs to be followed by a comma, except for the last one.  Properties of an object can be any primitive value (string, number, boolean, undefined, null) and they can also be function, arrays, and even more objects.  You can assign an object to a variable.  Lets describe a person with an object:

```
var person = {
    name: 'Jordan',
    age: 36
}
```

The variable of person has 2 properties: name and age.  Each of these properties can be thought of like a variable.  We can access the values of these properties in two ways.

```
person['name'] // Jordan
person.name // Jordan
```

The first use looks a lot like an array.  We place the key in brackets inside of quotes.  The second is called dot notation and is the more common way to work with information inside an object.  The cool thing about the bracket syntax is that we can use a variable instead of a string.  There are a few restrictions with dot notation that you need to know:

- You can't use if there is a space in the name
- You can't use if the name starts with a number
- You can't use with a variable name

There are a few ways to create a new object.

```
// create an empty object and assign values
var person = {}
person.name = 'Jordan'

// Object literal
var person = {
    name: 'Jordan'
}

// With a function
var person = new Object()
person.name = 'Jordan'
```

Each has its own purpose.  Personally I feel like us use the object literal syntax the most.

## Arrays v Objects

Arrays store data in a list where every item is bound to an index.  Objects are not a list, there is no order, and it utilizes key value pairs.

**Syntax**

```
// a collection of cookies
var cookies = ['sugar', 'oatmeal']

// a cookie
var cookie = {
    type: 'sugar',
    ingredients: ['sugar', 'eggs', 'flour'],
    recipe: ['Make', 'Bake', 'Eat']
}

// adding new data
cookies.push('chocolate chip')
cookie.calories = 10000000000

// changing data
cookies[0] = 'snicker doodle'
cookie.type = 'snicker doodle'
```

So to be completely straight with you right now, arrays are technically objects.  They are a special type of object that uses the index number as the key.  Arrays have additional functions applied to them allowing us to do things like push and pop.  The cookies array actually looks like this:

```
var cookies = {
    0: 'sugar',
    1: 'oatmeal'
}
```

## Nesting

In theory, data could have infinite relationships in its attributes.  Let's just think about the person object.  The only properties we listed were name and age, but there are way more things that create a person.  Depending on the need of the application the properties of a person could be different.  For example what if we were describing a person from a biological point of view.

```
var person = {
    body: {
        limbs: {
            arms: {
                count: 2
            },
            legs: {
                count: 2
            }
        }
    }
}
```

You could take this way past my comprehension and describe properties to the cellular level.  The depth and detail of your data is up to you.
  
Let's look at something a little more familiar that biology.  We can represent our rendered web elements with JavaScript too.  The following HTML and CSS have an object that describes it.

**HTML**


    <a class='primary-link'>Hyper Link</a>


**CSS** looks much more like our JS object

```
a {
    color: red;
    font-size: 16px;
}
```


```
{
    tagName: 'a',
    className: 'primary-link',
    text: 'Hyper Link',
    style: {
        color: 'red'
        fontSize: '16px'
    }
}
```

It has properties that nest like style.  The HTML to build a web page requires us to nest tags.  So you can expect that all the properties list above is incomplete.  In reality, it is grossly incomplete, but we will talk more about that later.  HTML tags have a childNodes property which is a list of tags:

{
    tagName: 'a',
    className: 'primary-link',
    text: 'Hyper Link',
    style: {
        color: 'red'
        fontSize: '16px'
    },
    childNodes: [
        {
            // more html objects
        }
    ]
}

## Methods

I mentioned above that objects can have functions as properties.  When a function is used like this it is called a method.  You have been using this every time you log something to the console.

```
console.log()
```

Console is an object.  One of its properties is the method log.

```
var console = {
    log: function (value) {
        // log the value to the console
    }
}
```

## *this* keyword

This is a big sticking point for developers, so don't worry if you don't get it right away.  It refers to the JavaScript that *owns* the code.  But it will mean different things in different places as the *owner* is different.  What is does is allow us to refer to the parent generically.

```
var comment = {}

comments.data = ['yay', 'woohoo', 'whatevs']
comments.print = function () {
    console.log(this.data) // this.data refers to the data property on the comment object
}

comments.print() // it will log the array data
```

## Object Constructor

So far we have done a lot of things that I would consider to be DRY.  Every time we create an object we will actually have to write all the code for it.  It would be great if we could just have the instructions for an object and then create a new object as needed.  

The object constructor does exactly this.  It allows us to create the blueprints for our data structure and make more on demand.

```
function person (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

var me = new person('Jordan', 'Papaleo')
```

## Object loops

Lastly in this, we need to know how to loop over this data.  To do this we use a for loop but it has a slightly different way it gets executed.  With arrays we iterate over items by the index, but with objects we will loop over items by their key name.

```
function person (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

var me = new person('Jordan', 'Papaleo')

for (var key in person) {
    console.log('key', key)
    console.log('value', person[key])
}
```


## Exercises

### Which is not a valid statement

```
var someObject = {}

someObject._name = "suds"
someObject.age = 65
var prop = 'color'
someObject[prop] = red
someObject.123 = true
```

### Reading and writing

How would you retrieve the name 'Ryan'?

How would you change the favorite color to green?


```
var person = {
    friends: [
        'Ryan',
        'Russel'
    ],
    name: 'Jordan',
    favoriteColor: 'blue
}
```

