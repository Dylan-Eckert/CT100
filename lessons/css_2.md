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




- content-box: width and height includes content, padding and border, but not the margin



p {
    padding-top: 10px;
    padding-right: 12px;
    padding-bottom: 10x;
    padding-left: 12px;
    padding: 10px 12px 10px 12px;
    padding: 10px 12px;
}



p {
    margin-top: 10px;
    margin-right: 12px;
    margin-bottom: 10x;
    margin-left: 12px;
    margin: 10px 12px 10px 12px;
    margin: 10px 12px;
}

Both width and height just set the named properties.  The one caveat with these is that you can only set width and height on block elements, not inline ones.

```
p {
    width: 100px;
    height: 75px;
}
```


- inline: stack horizontally... yeah thats it.
- inline-block: its kind of a hybrid as it stacks horizontally but you can do things like set width and height
- none: the element will not be displayed and is removed from the layout of the page

Actually I am going to mention two more: initial and inherit.

- initial: sets the property to its default value
- inherit: tells the element to inherit from its parent

Visibility also controls if an element is seen on the page but it does it in a different way.  If an element is display: none, it will not be visible and won't take up any space on the page.  If an item hidden using visibility it will still take up space on the page.  So visibility has to values: visible and hidden.

- visible: the content visible on page
- hidden: the content is not visible but the rest of the page still acts like it is still there.

Position specifies how content is placed on the page.  The position property is super useful in creating complex layouts. There are four ways to change the positioning: static, relative, absolute or fixed.

- relative: the element is positioned relative to its normal position
- absolute: the element is positioned relative to its first positioned (not static) ancestor element
- fixed: the element is positioned relative to the browser window

When using position you can also set location properties: top, right, bottom, and left.  Its also important to note that when using the position property you can remove the element from the norma flow of the page and get unwanted overlapping.  You will need to account for this.

