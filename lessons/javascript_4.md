# JavaScript: Data Structures Part 1

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

## JavaScript: Arrays
JavaScript does not have stacks or queues.  The JS array is what you would get stacks and queues got married and had a child.  The JS Array is a sequential way to group data  The Array has the ability to push items in

## Computer Science: Trees
Trees are the most common data structure used on the web.  A tree is a data structure that creates a hierarchy of information.  HTML is a hierarchal structure.  A node has a pointer to its parents and its children.  A tree structure can continue to nest over and over.  Each node in the tree can have children, and those can have children too.

## JavaScript: Objects
