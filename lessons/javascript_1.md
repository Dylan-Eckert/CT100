# JavaScript 1: Data Types & Variables

JavaScript is the most popular programming language in the world.  It can be used to create websites, games, servers, and native apps.  You can use JavaScript to create complex animations and run physics engines.  It can be used to manipulate 3d objects created by high performing applications like Maya.  JavaScript is just amazing and what you can do with ti is only limited by what you can think up.  Ok but we getting a little ahead of ourselves.  Let's take it back a bit and learn about this JavaScript.

Back in 1995, JavaScript was developed by [Brandan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) in just **10 days**.  Just that alone is amazing.  What is the most amazing thing you have done in 10 days?  Most languages take years to create (I may have made that up a little).  Completely to the opposite of what you would expect, JavaScript has nothing to do with Java.  But they both come from a C based language so they make look kind of similar.

Unlike many languages, the barrier to entry for JavaScript is very low.  JavaScript is not owned by anyone; its free for everyone and anyone to use.  If you want to build iOS apps, you need to buy a mac.  If you want to build Microsoft programs, you need to buy an a windows computer.  If you want to build android apps, God have mercy on your soul.  But seriously, isn't it amazing how restrictive this can be.  Some languages require expensive application to actually write and compile your code into something usable.  To write JavaScript you only need a few things:

- A browser

Yup, thats it. There are websites that you can go to like [CodePen](http://codepen.io/) that will allow you to write JavaScript in the browser.  Most modern browsers have developer tools in them that also allow you to write JavaScript.  We could could stop there but you would be extremely limited by what you can accomplish.

To create bigger and more complex applications you will need some sort of text editor, like [Atom.io](https://atom.io/).  Now that is actually it.  You can write and execute JavaScript with just those 2 things.

## Data Types

So all languages have the concept of types of data.  You can think of data as any value in a program.  This data can be numbers, words, and collections of data.  A data type allows us to classify information and then restrict the types of things you can do with it.  Imagine if you were trying to do math.  You will need to make sure you have numbers.  Its like that it it will become more clear as we start to use data types to do fun stuff.  

There a a handful of data types in JavaScript.  We will talk about them all but for now we are just going to discuss what JavaScript calls their **primitive** data types.  A primitive value is really a low level part of JavaScript and there a 5 of them:

- numbers
- strings
- booleans
- null
- undefined

### Numbers
Number data types are are used for numeric data.  This all numbers positive, zero, and negative.  It includes whole numbers and decimals.  Some languages are very specific when it comes to numbers making you define the size of the number.  

```
// numbers
4
0
-36
87.6
```

By defining a number data type you can do addition, subtraction, multiplication, division, and even long division.  In reality you can do any math that you can write the instructions for.

To do math we use things called operators to define what will happen.  You probably know most of these operators: ` + - / *`.  JavaScript math can be pretty straight.

```
// math with numbers
4 + 5
2 - 1
10 * 3
20 / 4
```

There is another operator that you probably don't know that well.  Its called the **Modulo / Modulus** operator.  You can think of it as the remainder operator.  It will divide 2 numbers together and give you the remainder from that division.

```
// modulus operator
10 % 5 // 10 divided by 5 is 2, remainder 0 so this equals 0
10 % 3 // 10 divided by 3 is 3, remainder 1 so this equals 1
```

A super useful way to use this would be to determine if a number is even, odd, or divisible by another number.

### Strings
A string is a sequence of characters that are used to represent text.  Strings need to be surrounded by quotes.  You can use a single quote or a double quote.  You need to be careful if you end up using quotes within quotes.  You have a couple of options doing this: you can use the other quote or you can do something called escaping it.

```
"hello"
'single quote string'
"That's a great idea"
'That\'s a good idea too'
```

You can take two strings and join them into one.  This process is known as [Concatenation](https://en.wikipedia.org/wiki/Concatenation).

```
"hello " + "class" \\ will make "hello class"
```

You can also get the count of characters in a string by using a property of a string called length.

```
"my string".length \\ 9
```

You can now make a reference to each character in a string by using brackets with a number inside of it.  You have to remember that JavaScript is ** a 0 based counting system**.  This means the the first character is at position 0.

```
"my string"[0] \\ "m"
"my string"[4] \\ "t"
"my string"["my string".length - 1] \\ "g" By taking the length less one, you will always get the last character
```

Try do get the the first, middle, and last character of the word 'mississippi'.

### Booleans
Booleans or commonly known as bools are super easy.  They only have two values: true and false.  You use booleans to help you make logical decisions in you code.  For example: maybe you have a value of whether a user is logged to a app or not.  You would use a bool for it

```
true
false
```

## Variables
Another concept in programming is that of variables.  A variable is a named container that can store all sorts of data.  For our purposes right now a variable can store a number, string, or boolean.  Variables have a few parts: keyword, name, assignment operator, and value

```
var myName = "Jordan"
myName // "Jordan"

var favoriteNumber = 7
favoriteNumber // 7
```

- The keyword **var** tells JavaScript that the next thing on the line will be the name of a variable
- myName is the name of our variable.  We need to name them so we can recall them later
- The equal sign is how we tell JavaScript that we are going to assign a value to name
- Lastly the value is what we assign to the variable name

Variables are super important in all programming languages and without them our code would be a mess if not even functional.  This concept exists in every programming language.

I am sure right now you are wondering why the names of my variables look like that.  Names have to be one word but not necessarily a real word.  What I mean by one word is that you cannot have any spaces in a name.  This requirement can make our variable names really hard to read.  Naming conventions were created to help with this and JavaScript uses one called **came case**.  Camel case follows this rule:  the first character is lowercase, every additional word in the name will start with an uppercase letter.  There are some other ways to do it but in JS use camel case.

**camel case**

myVar

**snake case**

my_var

**kabob case**

my-var

## Null and Undefined data types
These two data types are used to represent nothingness but in 2 different way.

**Undefined** is the value of a variable that has been declared but not assigned.  This variable has not been initialized and it value is defaulted by JavaScript.

```
var blar
alert(blar)
```

**Null**, like undefined, also means nothing.  Unlike undefined null is not defaulted by JavaScript but a value explicitly set by the developer.

```
var plop = null
alert(plop)
```


## Checking the type
Now that we have discussed all these types it is important to know that you can check the type of some data.  

```
typeof 2 // "number"
typeof "Jordan" // "string"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object"  ... don't ask
```

# Built in methods
JS is more than just some data types and operators; that is just some syntax.  What really makes JS is the collection of pre made methods you as a developer will be working with.  We will talk about functions later but for now you can think of a method as a set of instructions you can call by name.  Methods can be given information to use for any reason.  This information taken by the method is called a parameter.  We are going to look at a few built in methods: alert, prompt, and console.log.

**alert** is a method that allows the developer to put a popup on screen to notify the user of something.  A lot of times you may see this if you are navigating away from a page that has unsaved work on it.

```
alert("Hello Jordan")
```


**prompt** is similar to alert in that it notifies the user of something but it also requests information and returns it to the developer.  The returned information can be saved as a variable.

```
var name = prompt("What is your name?")
alert(name)
```


**console.log** is a method used by developers to help with the creation and debugging of JavaScript.  Its parameters are literally written out to the browser's console.  You would never use this to give the user information.

```
console.log('my name is jordan')
```
