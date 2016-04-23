# CSS 1

## What is CSS

In the mid 90's the web got confused and just made a mess.  The representation of data got distorted and instead of describing the essence of information, we started describing the how it looked.  Our nouns became adjectives and communication suffered as the result.

CSS (Cascading Style Sheets) is a language that describes the presentation of HTML, meaning, it puts the color on.  CSS can change things like colors, sizes, and fonts.  It allows us to describe information in a way that is understandable by human senses; it allows you to invoke emotion and greater meaning with data.  You can also use different styles based on the rendered size of your webpage.  For example: the same webpage can and often does look different on a phone than on a computer.  Just like HTML, **semantics** are very important with CSS; it is the visual logic used to compliment a well formed webpage.

It is important to note that learning CSS does not mean you are now a designer.  To be successful with HTML requires the ability to describe information; CSS is totally different.  CSS is not necessarily right or wrong in its implementation and no two people will solve something the same way.  You can absolutely learn and master the syntax of CSS but in order to really bend to your will requires creativity, imagination, truly a desire to solve problems... and stubbornness.

## Pieces and Syntax

```
selector {
  property: value;
  another-property: value;
}
```

**Selector**

Selectors are the way a style change knows what it is applied to.  They are used to find content based on html tag names and attributes.  There are a few attributes that can be used directly like a class name of an id.  The rest are used generically, more on that later.  Selectors can be chained allowing for the same rules to be applied to many selectors.

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

This is a key value pair of property and value that visually manipulates something.  A selector can have many declarations.  The same declaration can be applied twice to a rule.

**Rule**

The selector, with all of its declarations make up a CSS rule.  Many rules can have a visual opinion on what something is going to look like.  The browser will combine rules to create what we see on a web page.

**Comments**

CSS comments are pretty easy to use: `/* */`.  Any rules that are within a comment will not be applied to the page.

**Syntax Rules**

1. All selectors must enclose their declarations within curly braces.
1. Chained selectors must be separated by a comma.
1. Nested selectors must be separated by only a space.
1. All declarations must end in a semi colon.
1. Property and value pairs must be separated by a colon.

### Tools
Chrome's comes with a super powerful set of tools to allow you to view and even change the styles that are applied to a page.  To do this open your dev tools by right clicking on your page and inspecting something.  Click on the Elements tab in the dev toolbar.  This should bring up the html for the page and also the styles for the page.

[Web Developer](http://chrispederick.com/work/web-developer/) chrome plugin is really fun to use as it will allow you to completely shut off many parts of a web page including CSS.  I would recommend getting this installed.

[Wappalyzer](https://wappalyzer.com/?pk_campaign=chrome&pk_kwd=options) will show you what libraries are being used on a page.  This is really helpful when you are trying to figure out how something was built.


## Implementations

### Inline styles
These are used to apply style to a single html element on a page.  They do not have a selector and the rules are not enclosed in curly braces.  These rules are not re usable as they are applied to a single element.  As a new developer you should use these rules sparingly or not at all.

```
 <h1 style="color:blue;font-size: 24px;">This is a heading.</h1>
```

### Internal styles
These styles are written directly to an html document in the html document.  They are placed inside of a `style` tag nested in the `head` tag.  This use case will only apply the style rules to a single page.

```
<head>
  <style>
    /* rules go here */
  </style>
</head>
```

### External style sheets
External sheets are files that contain a collection of CSS rules.  The have a file extension of `.css` and must be added to an html file.  You do this by placing a `link` tag in the `head` tag of an html document.  External sheets allow this collection of rules to be shared across html documents on a single website, with multiple sites, or across the entire internet.

```
<head>
  <link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```

**Attributes:**

- rel: defines a relationship between the current document and a linked document
- type: specifies the media type of the linked document
- href: the hyper link reference of the location of the linked document

## Colors

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
percentage: Relative to its inherit value or it is set in a percentage based on the same property of the parent element

**Absolute Units**

px: pixels (1px = 1/96th of 1in)<br>
pt: points (1pt = 1/72 of 1in)

[Example](http://codepen.io/chriscoyier/pen/CiwFD)


Just like color there are many different ways that a size gets applied to an HTML element.  Not all elements have the ability to use all of these, but in general you can change the size for a width, height, padding, margin, fonts,

## Property: [Background](http://www.w3schools.com/css/css_background.asp)
This property controls the background of an element.  You now have to be concerned with your UI.  You can very quickly make a mess out of a page by using colors and images that do not create good contrast.  Text can become hard to see or even disappear based on the choices you make here.

- background-color: sets the color of a background - can use any of the mentioned colors
- background-image: sets a background image to a linkable image - url('some-image.jpg')
- background-repeat: allows you to repeat an image across a page - repeat, repeat-x, repeat-y, no-repeat
- background-position: sets the position of the image being used for a background - top, bottom, left, right, pixels, or percentage
    - [Example](https://dl.dropboxusercontent.com/u/18759926/famous-ad/index.html?wmode=opaque)
- background-attachment: determines whether the background should be fixed on the page or scroll.

```
body {
    background-color: hotpink;
    background-image: url("some-image.jpg"); /* http://www.freelargeimages.com/wp-content/uploads/2014/12/Black_background-2.jpg */
    background-repeat: no-repeat;
    background-position: right top;
    background-attachment: fixed;
}
```


## Property: [Border](http://www.w3schools.com/css/css_border.asp)
Everything has a border.  The border is the outer most part of a rendered html element.  A few of its properties are: width, style, and color.  Each of these properties can be set for all four borders or individually to each side.  Each part of a border is named according to its location: top, right, bottom, left.  Notice that this was written starting at the top and going clockwise.  CSS rules in general are written following that format.

- width: the width of the border - pixels

```
p {
    border-width: 2px; /* Applied to all sides*/
    border-top-width: 1px; /*Applied to the top*/
    border-width: 1px 2px 3px 4px; /*Applied to each side individually*/
    border-width: 2px 4px; /*Applied 2px to top and bottom and 4px to left and right*/
}
```

- border-style: the style of the line - solid, dotted, dashed, none, hidden

```
p {
    border-style: solid; /* Applied to all sides*/
    border-top-style: solid; /*Applied to the top*/
    border-style: solid dashed dotted none; /*Applied to each side individually*/
    border-style: solid dashed; /*Applied solid to top and bottom and dashed to left and right*/
}
```

- border-color: sets the color of the four borders

```
p {
    border-color: red; /* Applied to all sides*/
    border-top-color: red; /*Applied to the top*/
    border-color: red green blue yellow; /*Applied to each side individually*/
    border-color: red green; /*Applied red to top and bottom and green to left and right*/
}
```

There is some shorthand that you can use to combine these rules into a single declaration.

```
p {
    border: 1px solid black;
}
```

## Property: [Fonts](http://www.w3schools.com/css/css_font.asp)
Font properties will control the shape of the characters.  You can manipulate only the things that changes what the character looks like.

- font-family: this is the actual font that will be used, it allows for you to provide a chain of fonts to be used as a fallback if a browser does not have a specific font.
- font-style: changes the style of a font - normal, italic
- font-size: this is the size of the text - can use most size units
- font-weight: specifies the weight of a font - normal bold 100 - 700

```
p {
    font-family: "Times New Roman", Georgia, Serif;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
}
```


## Property: [Text](http://www.w3schools.com/css/css_text.asp)
The text properties address characters that are already on screen.  You cannot change their shape but you can change properties of that character or where is it positioned.

- color: changes the text color
- text-align: sets the horizontal alignment of the text - left, right, center
- text-decoration: allows you to decorate text - underline, overlain, line-through
- text-transform: allows you to transform the casing of text - uppercase, lowercase, capitalize
- text-indent: allows you to indent text
- letter-spacing: the  space between each character
- line-height: the space between lines, can be a unit, percentage, or a ratio


```
p {
    color: black;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase:
    letter-spacing: 2px;
    line-height: 1.5;
}
```
