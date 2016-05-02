# JavaScript 7: Intro to Events

Not all interactions with a website or application should be driven by our programming logic.  In fact the majority of these interactions in the DOM are driven by user behaviors.  We build sites and applications for people to use.  The interactions we we create are for them, many of the events that occur are from them.  Understanding this relationship is what will make you a great developer.

This is not at all a complete representation of events.  When working with events you will reach the deeps of JavaScript.  This is just an introduction to this concept.

## [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

The DOM has a collection predefined events that are very important in people's use of web pages and applications.  For now, think of these events as an action on something in the DOM.  Events have names and targets.  The name is the type of event that is occurring and the target is the DOM element on which it is happening.

Examples of HTML events:

- Using a mouse to click a button
- The web page has finished loading
- An image is loaded
- The mouse moves over something (hovers)
- Changing data in a form
- Submitting a form
- Pressing a key on the keyboard

We can assign functions to these events to handle or change the flow of information.  The developer has ultimate control on how to respond to events.  Responses can be logical or illogical.  While there are no syntax rules how we create responses to an event, there is a web discipline that deals with user experience.

### Syntax

Events are methods in the DOM.  In your browser console, inspect the properties of the document.

```
console.dir(document)
```

You should see all sorts of properties that begin with on.  Most of them are null as that event has not been assigned a handler.  Look through the children nodes on the document.  They too will have these *on* properties.  These are the events the element has available and we can set any event to have the value of a function.  

```
var button = document.querySelector('button')
console.dir(button)

button.onclick = function (ev) {
  // the function takes a parameter of the actual event
  // do something amazing here
  console.log(ev)
}

console.dir(button)
```

So above code reads like this:

- Select the first button found and save a reference to it as a variable
- Log the DOM properties of the button and find all the *on* events
- Set its *onclick* method to a function that does something amazing
- Log the DOM properties of the button again and find function we just assigned

Every time the button is clicked, the attached function will be called.  So there is one obvious problem with this.  The button's onclick method can only run one function.  Many times in our projects an event needs to tell many things to happen.

## Event listeners

Event Listeners give us the ability to attach multiple handlers to a single event.  We do this by using the *addEventListener* method.  We call this method on a DOM element giving it a type and a handler.

```
var button = document.querySelector('button')

button.addEventListener('click', function (ev) {
  console.log('Event 1', ev)
}

button.addEventListener('click', function (ev) {
  console.log('Event 2', ev)
}
```

Notice the the event type is not *onclick* but just *click*.  The method does not set the DOM property.  That's it for the intro.  Like I mentioned there are a ton of topics here and this is all you need to start using events.  

[**List of Events**](https://developer.mozilla.org/en-US/docs/Web/Events)