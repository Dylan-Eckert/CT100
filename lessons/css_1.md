# Intro to CSS

How to use it



text alignment
size
color
backgroundcolor
border

chrome dev tools to debug


## What is CSS

CSS (Cascading Style Sheets) is a language that describes the presentation of HTML, meaning, it puts the color on.  CSS can change colors, layout, and fonts.  It also allows you to present different styles based on page sizes.  HTLM is used to semantically describe things on a web page but CSS is used to semantically describe presentation.  CSS is the visual representation to compliment a logical webpage.  HTML is our nouns and CSS is our adjectives.

## Why is it important

In the mid 90's the web got confused and just made a mess.  The representation of data got distorted and instead of describing the essence of information, we started describing the how it looked.  Our nouns became adjectives and communication suffered as the result.

CSS allows us to describe information in a way that is understandable by human senses; it allows you to invoke emotion and greater meaning from information.

## Syntax/Rules

```
selector {
  property: value;
  another-property: value;
}
```

**Selector**

Selectors are the way a a style change knows what it is applied to.  Selectors can be html tags and attributes.  There are a few attributes that can be used directly like a class name of an id.  The rest are used generically, more on that later.  Selectors can be chained allowing for the same rules to be applied to many selectors.

```
h1, h2, h3 { }
```

Selectors can also describe nesting relationship of tags so only certain elements get rules applied to them.  In this example we would be applying style to any `nav` that is at any point a descendent of a `header`.

```
header nav { }
```

The selectors we will start with are tags, classes, and id:

```
 tagName { }

 .class { }

 #id { }
```    

**Property**

The property represents the style that you are applying or changing.

**Value**

This is just what will get applied to a property

**Declaration**

This is a key value pair of property and value that visually manipulates something.  A selector can have many declarations.  The same declaration can be applied twice to a rule.  All declarations must end in a semi colon

**Rule**

The selector, with all of its declarations make up a CSS rule.  Many rules can have a visual opinion on what something is going to look like.  The browser will combine rules to create what we see on a web page.

**Comment*s*

CSS comments are pretty easy to use: `/* */`.  Any rules that are within a comment will not be applied to the page.

## Property: Color

There are many different rules that can change color.  You can change the color of text, backgrounds, borders, and shadows. There are many different values for color.  You can use pre determined names, hexadecimals values, rgb, and hsl.

**[Names](http://www.w3schools.com/colors/colors_names.asp)**: There are a handful of established names for colors that browsers recognize.

**[Hex](http://www.w3schools.com/cssref/css_colors.asp)**: `#FFFFFF`

**RGB (Red Green Blue)**: `rgb(255, 255, 255)`

**RGBA (Red Green Blue Alpha)**: `rgba(255, 255, 255, 1)`

**HSL (Hue Saturation Lightness)**: `hsl(120, 100%, 50%)`

**HSLA (Hue Saturation Lightness Alpha)**: `hsla(120, 100%, 50%)`

## Units of measure

There are many different units of measurement for html elements but you can basically break them into two groups: relative and absolute lengths.

**Relative Units**

em: Relative to the font-size of the element (2em means 2 times the size of the current font)<br>
rem: EM but its derived from the root. Relative to font-size of the root element<br>
vw: Viewport width - relative to 1% of the width of the viewport*<br>
vh: Viewport height - relative to 1% of the height of the viewport*<br>
percentage: Relative to its inherit value or it is set in a percentaged based on the same property of the parent element

**Absolute Units**

px: pixels (1px = 1/96th of 1in)<br>
pt: points (1pt = 1/72 of 1in)

[Example](http://codepen.io/chriscoyier/pen/CiwFD)


Just like color there are many different ways that a size gets applied to an HTML element.  Not all elements have the ability to use all of these, but in general you can change the size for a width, height, padding, margin, fonts,

## Property: Border

Everything has a border.  The border is the outer most part of an html element and it has four potential properties: width, solid, color, and radius.
