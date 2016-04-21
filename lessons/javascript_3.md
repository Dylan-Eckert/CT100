#JavaScript 3: Functions

Writing code is writing instructions.  We are creating the process to get or do something.  More often than not in our projects, need sets of instructions, with multiple steps, allowing us to do something.  Would't it be nice if that was possible... 

Meet the function.  A function gives you a way to group pieces of code into a greater instruction.  Imagine you are baking cookies.  Doing this involves many steps followed in a specific sequence.  The first time you make them you can go through and do each step.

1. Turn oven on
2. Get ingredients
3. Mix ingredients
4. Put balls of cookie dough on a baking pan
5. Bake them

If you are only making cookies once this may be acceptable, but what if you are a bakery, you would want to take all of these steps and group them.

```
// Theoretical JavaScript: This will not actually run
function makeCookies () {
    1. Turn oven on
    2. Get ingredients
    3. Mix ingredients
    4. Put balls of cookie dough on a baking pan
    5. Bake them
}
```

Now any time you need cookies you could use this named function and it would give you cookies.  In reality this would not work for actually baking but think more about the process.  We are grouping the instructions so we can easily use them again.  This allows us to write DRY (don't repeat yourself) code.  Functions give us extreme power in development.

## Process
There are two parts to using a function.  First we must define the function.  This means we need to group similar purposed instructions and then usually give it a name.  Giving it a name allows us to use those instructions later.

The **function** keyword used to tell JavaScript what comes next is a function.  The parentheses allow us to provide outside information to the function.  The curly braces define the block of instructions that will be run when you use the function.  Using a function is known as calling or invoking it.

```
function () {
  // Do something
}
```

### Function Declaration/Statement
Function statements follow the same syntax as above but we provide a name.  You can read this code example like this: create a function named sayHello.  By giving it a name, this set of instructions is stored just like a variable in our app and we can use it all over.


```
function sayHello () {
  console.log('Hello')
}
```
 
What makes this style of function different from the next is that it gets hoisted when you run the app.  That basically means that you can call the function in your code before you define it.

```
hoisted() // 'foo'

function hoisted() {
  console.log('foo')
}
``` 

### Function Expression
The function expression still assigns a function but this time it does it to a variable.  So this function reads: create a variable called sayHello, assign a function to that variable.

```
var sayHello = function () {
  console.log('Hello')
}
```

While the may get the same job done, this one has a slight difference.  This format does not hoist so you cannot call it before you declare it.

```
notHoisted() // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar')
}
```

### Using a function
So a function will just sit and wait for someone to use it.  When you use a function it is referred to as calling or invoking it.  You do this by placing open and closed parenthesis after the function name.

```
function sayHello () {
  console.log('Hello')
}

sayHello()
```

## Parameter
Like I mentioned earlier, you can provide function outside information required to execute their set of instructions.  This information is known as parameters.  Parameters are variables that only exist inside of the function.  They are place holders for the information the function wants.  You can pass as many params as you want to but at some point it gets a little hard to visually handle.  My suggestion would be to try to keep this list to no more than four; it will make your life easier

```
function sayHelloTo (firstName) {
  // firstName is a parameter
  // firstName can only be used in sayHello  
  console.log('Hello ' + firstName)
}

sayHelloTo('Jordan') // 'Hello Jordan'
console.log(firstName) // Uncaught ReferenceError: firstName is not defined
```

## Argument
Parameters are the name of placeholders in the function but arguments are the actual information being passed to the function when it is invoked.  These two are basically referring the same thing but named from a different perspective.

```
function sayHelloTo (firstName) {
  console.log('Hello ' + firstName)
}

sayHelloTo('Jordan') // 'Jordan' is the argument passed the function
```

## Return
So functions do things.  It takes information, performs a set of instructions, and returns something.  The return part of this flow is the final product.  If our cookie function just made a cookies but we never got it... that would just be sad.  You would smell them cooking and then they would just be gone.  Not cool.  We want our function to give us something back.  So we use the **return** key word to define what a function will return.

```
// Theoretical JavaScript: This will not actually run
function makeCookies () {
    1. Turn oven on
    2. Get ingredients
    3. Mix ingredients
    4. Eat some cookie dough
    6. Put balls of cookie dough on a baking pan
    6. Bake them
    
    return cookies
}

var myCookies = makeCookies()
console.log(myCookies) // Yummmm, I have cookies now
```

So as I bet you can tell by what just happened is that we can take the return value of a function and store it in a variable to eat... use later.

All function return something whether you define it or not.  A function without an explicit return value will return undefined.  Here is my recommendation for the best way to use functions.

```
function getSomething () {
    var something
    
    // Do whatever logic necessary to set the correct value something
    
    return something
}
```

This is just a nice pattern.  The first line of a function defines what is returned.  The last line of the function is it being returned.  Everything in the middle is for getting that variable correctly set.



