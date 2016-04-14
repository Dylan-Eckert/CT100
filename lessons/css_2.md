# CSS 2

## Cascading and Inheritance
Now that we have been talking about basic styles it is important to learn about all the different rules that can be used to create any webpage.  There are three main sources for styles that get applied to a site: browser defaults, user modified, and author created.  

**Browser styles**: The visual way any browser represents html.  The actual term for this would be the **user agent**.  Each user agent will show markup slightly different from another one at the very least.

**User Styles**: Users of any system have the ability to change font sizes and add styles that can be applied to every page on the internet.  Some browsers are removing this feature.

**Developer authored**:  CSS files made by web developers for a specific page.

As you can see, styles *cascade* down from many origins.  Not all of those origins are under your control as a developer.  This cascade uses things like importance, origin, specificity, and order to determine the declaration that should be applied to an html element.

The origin mentioned is as follows:

1. normal user agent styles
1. important user agent styles
1. normal user styles
1. normal author styles
1. author normal
1. css animations
1. important author styles
1. important user styles

Rules applied to a tag has the ability to be applied to its children.  This process is known as inheritance; children inherit the traits of their parents.  Inheritance allows us to apply a defaulted style to a root element and its' descendants.

```
 <div>
   <p>Lorem ispum dolor</p>
 </div>
```

```
 div {
   color: red;
 }
```

In this example the paragraph tag gets styles applied by its parent tag.  The relationship here by default is for nesting at any depth.  The following code will have the same style applied to the paragraph because the paragraph inherits from the div at some point.  This can be prevented through the use of different [css selectors](http://www.w3schools.com/cssref/css_selectors.asp)

```
 <div>
   <section>
     <p>Lorem ispum dolor</p>
   </section>
 </div>
```

The benefit of inheritance is that it prevents the developer from having to declare certain rules over and over; it applies to everything.  The down side of this is that it applies to everything.

It should be noted that not all properties can be inherited from:

- **APPLIED**: color, font, letter-spacing, line-height, list-style, text-align, text-indent, text-transform, visibility, white-space and word-spacing
- **OMITTED**: background, border, display, float and clear, height, and width, margin, min- and max-height and -width, outline, overflow, padding, position, text-decoration, vertical-align and z-index

## Specificity
At first specificity may sound like cascading but its a different beast.  Specificity is the means by which a browser decides which css property values should be applied to the page in contrast to Cascading which more so presents the rules that could be applied.  The reason for this is because many rules may have an opinion about the presentation of an HTML element. It uses a weighted point system to score every rule available.  The rule with the highest score will win and apply the declarations associated to it.  If two rules are scored the same, the last rule scored will win.

The scoring works like this: the number of all tags gets tallied, the number of all classes gets tallied, and the number of all ids also gets tallied.  Those counts get listed like this **id count, class count, tag count**.  Next pull the commas out and you basically have a score.

Example Scores:

| Selector            | Specificity | Score |
|---------------------|:-----------:|:-----:|
| ul                  |   0, 0, 1   |   1   |
| ul li               |   0, 0, 2   |   2   |
| .main-content       |   0, 1, 0   |   10  |
| ul.main-list        |   0, 1, 1   |   11  |
| #intro div          |   1, 0, 1   |  101  |
| #footer #footer-nav |   2, 0, 0   |  200  |

I left out one thing.  There is one more spot in that score and that is for inline styles.  The inline style comes to the left of the id making it the most powerful selector.  So an **inline style** would automatically have a **score** of **1000**

Now some of you may have heard of this important thing that you can use to trump everything.  This would be the infamous *!important* that can be used at the end of a declaration.  It has **NOTHING** to do with specificity because specificity is only concerned with scoring rules, not their declarations.  Important affects the cascade.  Having said that, any declaration with an important will usually be the declaration that is applied regardless.

What do you think will happen here?  What color will the paragraph be?

```
 <div>
     <p style="color: green;">Lorem ispum dolor</p>
 </div>
```

```
 div {
   color: red !important;
 }
```
## More Selectors
Time for some more selectors!
Direct descendant selector will only allow inheritance from an immediate child.

```
div > div { }
```

Attribute Selector applies styles based on the presence of an html attribute.

```
[attribute] { }
```

Attribute Value Selector applies styles based on the value of an html attribute.

```
[attribute=value] { }
```

## Box Model
One of the most confusing and frustrating things in CSS:
**Total Width or Height = margin + border + padding + width + padding + border + margin**
This can totally jack up your layout if you change something even just 1px.  There is not a lot to teach here, its just one of those things you need to know and be aware of.![image](http://www.mikessmallbusiness.com/wp-content/uploads/2015/10/boxmodel-image.png)
## Property: Box Sizing
This is used to tell the browser what width and height should be calculated from.  There are two options for this property: border-box and content-box.- border-box: width and height includes only the content; border, padding, or margin are not included
- content-box: width and height includes content, padding and border, but not the margin
## Property: Padding
Padding is the whitespace that exists between the content and the border.  Padding exists inside the rendered area of an element.  This allows background properties to be seen in the padding.
```
p {
    padding-top: 10px;
    padding-right: 12px;
    padding-bottom: 10x;
    padding-left: 12px;
    padding: 10px 12px 10px 12px;
    padding: 10px 12px;
}```
## Property: Margin
Margin is the whitespace that exists around the rendered content.  As margins exist outside the border you cannot change what they look like as with padding.  They are purely empty whitespace around an element that keeps other elements pushed away.
```
p {
    margin-top: 10px;
    margin-right: 12px;
    margin-bottom: 10x;
    margin-left: 12px;
    margin: 10px 12px 10px 12px;
    margin: 10px 12px;
}```
## Property: Width and Height
Both width and height just set the named properties.  The one caveat with these is that you can only set width and height on block elements, not inline ones.

```
p {
    width: 100px;
    height: 75px;
}
```## Property: Display
So everything in html is a block of some sort.  Display allows you to set or change the block type of html elements.  There are a bunch of potential values for display; we will discuss three: block, inline, inline-block, and none.
- block: block elements stack vertically and can have width/height applied to them
- inline: stack horizontally... yeah thats it.
- inline-block: its kind of a hybrid as it stacks horizontally but you can do things like set width and height
- none: the element will not be displayed and is removed from the layout of the page

Actually I am going to mention two more: initial and inherit.

- initial: sets the property to its default value
- inherit: tells the element to inherit from its parent
## Property: Visibility
Visibility also controls if an element is seen on the page but it does it in a different way.  If an element is display: none, it will not be visible and won't take up any space on the page.  If an item hidden using visibility it will still take up space on the page.  So visibility has to values: visible and hidden.

- visible: the content visible on page
- hidden: the content is not visible but the rest of the page still acts like it is still there.
## Property: Position
Position specifies how content is placed on the page.  The position property is super useful in creating complex layouts. There are four ways to change the positioning: static, relative, absolute or fixed.
- static: default; elements render in order, as they appear in the document flow
- relative: the element is positioned relative to its normal position
- absolute: the element is positioned relative to its first positioned (not static) ancestor element
- fixed: the element is positioned relative to the browser window

When using position you can also set location properties: top, right, bottom, and left.  Its also important to note that when using the position property you can remove the element from the norma flow of the page and get unwanted overlapping.  You will need to account for this.
## Property: Float and ClearFloating describes whether an element can float... not that helpful.  You can think of floating as pulling content in one direction or the other.  You can float elements to the left and the right.  Floated elements are kind of like islands on a page; the rest of the content just naturally flows around them.
Clear gives you some control over the behavior of floating.  Like mentioned above, content will flow around floated elements but this may not always be desired.  We can clear a float with the clear property.  You can make content clear  **left, right, or both**Html elements that only have floated elements will basically collapes having no height. This isn't always obvious if the parent doesn't contain any visually noticeable background, but it is important to be aware of.  You can fix this by placing a clearfix class on the parent element.  You will have to define this stlye if you want to use it; its not a part of browsers.**ClearFix**```.clearfix:after {   content: ".";   visibility: hidden;   display: block;   height: 0;   clear: both;}```Floats are kind of crazy and you should read this[CSS-Tricks: Floats](https://css-tricks.com/all-about-floats/)