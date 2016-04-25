# JavaScript 2: Control Logic

You use logic every day; it is not just programming concept.  Logic is literally just a reasonable way of thinking about something  In JavaScript we logic to control the flow of our app.  By flow I am referring to how the app is presented to a user.  For example: if an app requires a user to access certain content, the person must be logged.  The app may send a person to a login page instead of serving their content.  This is foundational for everything that involves development.

## Boolean logic
This logic revolves around whether something evaluates to true of false.  Using our above example we could say, if a user is not logged in, have them log in, else allow them to view the content.  To make these kind of evaluations we need some sort of way to compare things.  JavaScript has a bunch of comparison operators we can use.

| operator | evaluates                                         |
|:--------:|---------------------------------------------------|
|     >    | a value is greater than another                   |
|     <    | a value is less than another                      |
|    >=    | a value is greater than or equal to another       |
|    <=    | a value is less than or equal to another          |
|    ==    | a value is equal to another                       |
|    !=    | a value is not equal to another                   |
|    ===   | a value and its data type is equal to another     |
|    !==   | a value and its data type is not equal to another |

```
10 > 5 // true
10 < 5 // false
"hello" === "hello" // true
1 == "1" // true
1 === "1" // false
```

So those last two are interesting; how is one true and the other is false?  When we use two equal signs JS is a little loose in its evaluation of equality and it will allow things that are mostly true to be true.  So in this case the number 1 is equal to the string 1.  When you use three equal signs you are sayings need to be absolutely equal.  The value and the type need to match.  JavaScript is the only language that has this type of evaluation.  You should avoid using **==** unless you have reason to do it.  Always use **===**

Sometimes our logic needs to involve more that one check.  For example: maybe you have an app that needs to maintain a quantity of something.  If you have less that a minimum quantity get more; if you have more than a maximum quantity, get rid of some.  You can accomplish this using our logical operators: **AND**,  **OR**, and **NOT**.  You can group logical operations with parentheses.

| operator | evaluates                                      |
|:--------:|------------------------------------------------|
|    &&    | if one case AND another case are true          |
|    ||    | if one case OR another case is true            |
|     !    | if a case is true make it false and vice verse |

```
10 > 5 && 10 < 15 // true
10 > 20 || 30 < 40 // true
(10 > 20 && 10 < 15) || (30 < 20)  // true
```

### Truthy and Falsy
All JS values have kind of a trueness or falseness to them.  You can check this by using the **!!** syntax before something to check this.  Remember that we can use the logical operator **!** to flip the evaluation of something.  Using two will flip it twice resulting in the truthy or falsy value of something.

```
!"hello" // false
!!"hello" // true
```

This check is literally just for you and not how you would actually evaluate these values in JS

Falsy Values:

- false
- 0
- ""
- null
- undefined
- NaN

This is important because these evaluations will make your logic be false.

## Conditionals
So up to now you are probably wondering who in their right mind would write code like this.  Is 10 greater than 5... duh.  The short answer is no-one would do this.  These are foundational concepts, extremely important to the use of JS.  Conditionals give us a way to use these concepts in our code.  Conditionals are programming language agnostic and one of the most important concepts in all of programming.  Simply put, conditionals allow us to put decision points in our code.  We are going to use three types of conditions for this section: **if**, **else if**, and **else**.

**if** is a conditional check.  It states that if a case is true, do something

**else if** is a conditional check tied to an **if** check.  It states that if the first case is false, check this case.  If this case is true, do something.

**else** is a not a conditional check per say, but more of a catch all for conditional checks that do not evaluate to true.

Let's walk through this in a little narrative.  If it is Monday, Wednesday, or Thursday, I have to go to work and class. Else if it is Tuesday or Friday, I have to go to work. Else its the weekend and I can just chill.

```
var today = "Wednesday"

if (today === "Monday" || today === "Wednesday" || today === "Thursday") {
    // go to work and school
} else if (today === "Tuesday" || today === "Friday") {
    // just go to work
} else {
    // Chillax
}
```

The syntax of a conditional starts with using the conditional check.  The condition to check is enclosed in parentheses.  The instructions associated to a condition are all placed within the braces.  This creates a block of instructions.  The **else if** and **else** statements have to be used with an **if**, but the if can totally be used by it self, with either, or both of **else if** and **else**.

## Loops
Many times in our projects, we will come to a place where we want to run a set of instructions many times.  We could write the instructions every time we need to use them but that violates one of the basic principles of development which is *Don't Repeat Yourself* aka (DRY).  To do this we need a way to apply the same code many times and that's where looping comes in.  Looping allows us to run a code repeatedly as long as a condition is true.  

### While Loop
The while loop states that while a condition is true, do something.  The syntax of a while loop looks a lot like a an **if** statement and in reality it evaluates the same way as an **if** statement.

```
while (somethingIsTrue) {
 // do something
}
```

There are two new arithmetic operators we get to use now: **increment** and **decrement**

**++** will take a value and increment it by one

**--** will take a value and decrement it by one

```
var x = 1
x++ // 2

var y = 1
y = y + 1 // 2
```

Example:

```
var count = 0

while (count < 10) {
 console.log(count)
 count++
}
```

So here we are saying while count has a value less than 10, print the value of count to the console, then increment count by one.

Mental Evaluation: What does this do?

```
var num = 1

while (num <= 10) {
 console.log(num)
 num += 2
}
```

**Infinite loops**
All looping has the potential for becoming an infinite loop.  An infinite loop is literally a loop whose conditional logic never becomes false.  If its always true it will always run until the end of existence, or your computers memory which will most likely happen first.  Most modern browsers today will actually catch these and kill the process.  When using loops you have to have a point where the conditional becomes false.
