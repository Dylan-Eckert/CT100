# JavaScript: Data Structures Part 1 Arrays

## Data Structures
Data structure is a computer science term.  Sounds advanced with the possibility of being super confusing too.  If we just look at the word, would seem like it is data with structure.  But does that mean some data does not have structure, and how much structure is required to make something really structured.  We could say that using data structures means that we are organizing information in a way that is most efficient for use.  This can be accomplished through collections of similar information or the collection of information that describes the same thing.

For example: We could use a data structure to describe a collection of cars.  Each car does not have to be the same but they are all cars none the less.  We could also have a data structure that describes the properties of an individual car.  A car has an engine, and wheels, and a way to steer it, and so on.  Both of these examples are ways to structure data.  The first example is grouping similar information while the second is grouping data in a way to describe something.

## Computer Science: Stacks
In computer science, a stack is a linear data structure; it organizes data in a sequential order.  We can add and remove things from stacks.  We can also reference items in a stack by their index (numbered spot).  

A great visual example of this can be found at any buffet.  At the beginning of the buffet you will find a stack of plates.  The stack has a number of plates in it.  The plate on the bottom will be plate number 0 (remember our counting starts at 0 in programming).  As we move up the stack, the plate number increments.  The last plate at the top will be the first plate used.  This is known as **Last In First Out** (LIFO).  When that plate is taken, it is **popped** off the stack.  More plates can always be added to the top of the stack.  This is known a **pushing** onto the stack.

Stacks have two methods that you can use to add to and remove from the collection.  We can push something onto the top of a stack or pop something off the top of a stack.  Every time we push onto the stack, it will get bigger.  Every time we pop something from the top of the stack it will get smaller and is no longer a part of the stack.

## Computer Science: Queues
Queues are similar to stacks as they also organize data in a sequential way.  Queues differ from stacks in how items are added and removed from the collection.

For example:  There is a line to get into a concert.  The first person in the line will be the first person out of the line.  As more people line up, they are queueing themselves up to get into concert.  This is known as **First In First Out** (FIFO).  The people in line are allowed entry based the order the entered the line.

Queues have two methods to add or remove data from the list.  We can enqueue something to the top of the stack and dequeue something from the bottom of the stack.  So in our example, you are enqueued when you enter the line and dequeued when you make it to the front and get in to the concert.

## JavaScript: [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
JavaScript does not have stacks or queues.  The JS array is what you would get stacks and queues got married and had a child.  The JS Array is a sequential way to group like data.  In reality, you can group anything in an array in JS.  You can have an array of numbers, strings, booleans, and even functions or any mix of.  But just because you can does not mean you should.  Grouping similar items together is a great use of arrays.

### Syntax
You will define an array by using open and closed brackets.  Inside the brackets you can add stuff.  You separate all the stuff with commas.  So you end up with a bunch of comma separated values enclosed in brackets.  You can also assign the value of an array to a variable.  Arrays are indexed meaning we can refer to any position in an array by using brackets and a number.

```
// Bad group
var friend1 = 'Tim'
var friend2 = 'Jim'
var friend3 = 'Jon'
var friend4 = 'Ron'

// Good group
var friends = ['Tim', 'Jim', 'Jon', 'Ron']

friends[2] // 'Jon'
```

In this example there are a few things that could be problematic with making a var for each friend.  The first is that it violates our **DRY** (don't repeat yourself) principle.  Each time we declare a variable friend we break this rule.  Secondly, think how would you efficiently interact with your friends.  Every thing would require us call each friend variable.  Wouldn't it be easier to just say do this for all friends.  A real world example of this is any sort of group messaging/email.  We take collection of individuals and group them allowing us to send a message once to everyone.

### Methods

There are a lot of methods that JavaScript natively has to help us better use arrays.  We can access all the methods that stacks and queues use allowing us to add and remove content.  

**push/pop** allow us to add or remove from the end of an array.  When we add an item to an array using push, it will be added as the last item.  When we pop off an item in an array, it will remove the last item.  When you pop an item you can also store it as a variable.  When you push an item, you can store the new length of the array.  Push takes a parameter of the value you want to add to the array.

```
var friends = ['Tim', 'Jim', 'Jon', 'Ron']

friends.push('Rick')
console.log(friends) // ['Tim', 'Jim', 'Jon', 'Ron', 'Rick']

var exFriend = friends.pop()
console.log(exFriend) // 'Rick'
console.log(friends) // ['Tim', 'Jim', 'Jon', 'Ron']
```

**shift/unshift** allows us to add or remove an and item from the beginning of the array.  When we unshift something it will be added as index 0 of an array.  When we use shift, it will remove the first item from from an array.  When you shift and item you can also store it as a variable.  When you unshift an item, you can store the new length of the array.  Unshift takes a parameter of the value you want to add to the array.

```
var friends = ['Tim', 'Jim', 'Jon', 'Ron']

friends.unshift('Ted')
console.log(friends) // ['Ted', Tim', 'Jim', 'Jon', 'Ron']

var exFriend = friends.shift()
console.log(exFriend) // 'Ted'
console.log(friends) // ['Tim', 'Jim', 'Jon', 'Ron']
```

**indexOf** allows us to search through an array.  The method will try to find a value we provide.  If found it will return the index of value.  If it does not exist in the array, it will return the value of -1.  Indexof takes a parameter of the value you want to look for.

```
var friends = ['Ted', 'Tim', 'Jim', 'Jon', 'Ron', 'Rick']

var bestFriendPos = friends.indexOf('Ned')
var bestFriend = friends[bestFriendPos]
console.log(bestFriendPos, bestFriend) // -1 undefined

var secondBestFriendPos = friends.indexOf('Ron')
var secondBestFriend = friends[secondBestFriendPos]
console.log(secondBestFriendPos, secondBestFriendPos) // 4, 'Ron'
```

**slice** gives us a way to copy a part of the array.  When we do this, the copy will be returned and we can store it in a variable as a new array.  Slice takes an optional 2 parameters.  Bot params are numbers and the first is where the number index of where the copy should start.  The second value is the index of its upper boundary, meaning it will not copy that value.  If there are no params, slice will return a shallow copy of the entire array.  Using slice will not modify the original array at all.

```
var friends = ['Ted', 'Tim', 'Jim', 'Jon', 'Ron', 'Rick']

var bestFriends = friends.slice(3, 5)
console.log(bestFriends) // ['Jon', 'Ron']
console.log(friends) // ['Ted', 'Tim', 'Jim', 'Jon', 'Ron', 'Rick']
```

### For Loops
This is another type of loop specifically used for iterating over content.  When you do this you usually want to access the content at a specific point or index.  It performs in a similar way as a while loop but does it in a different way.

```
for (init; condition; step) {
  // do something
}
```

- Init: variables only exist in the loop
- Condition: when it should keep running
- Step: What do we do at the end of the loop

Example printing characters in a string

```
var str = 'hello'

for (var i = 0; i < str.length; i++) {
  console.log(str[i])
}
```

Here we are saying that we want to set a starting point of 0 and assign it to the variable of **i**. For as long as **i** is less than the length of our variable **str**, print the value of the **str** at the index of **i**.  Then increment **i** by one.

```
var colors = ['red', 'orange', 'yellow', 'green']

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}
```
