# HTML 1: Introduction to HTML

## Topics:


HTML stand for Hypertext Markup Language.

- Hypertext:
    - Its how we move around the web    
    - Non linear type of navigation from links
    - Meaning you can just do whatever you want
- Markup: To apply descriptive tags to content to give it meaning
- Language: just like any other form of communication there are rules, grammar, and syntax needed for it to be correctly used

## Quick history
HTML was initially created to share information between academic institutions and the military.  It was first being used around 1989-1990 and was created to provide meaning to content by the use of tags.  HTML has gone through many changes over the years where things such as tables and forms were introduced.  HTML is the least complicated component of web development perhaps the most important part.

## Reference
There are 2 websites that are going to be very important to you as you learn this entire class.  Here is the HTML specific content:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [W3Schools](http://www.w3schools.com/html/default.asp)

I still use these sites on a daily basis.


## Rules and usage
### Syntax 

[Open CodePen](http://codepen.io/pen/) and follow along

#### File type

HTML follows a very simple set of rules.  HTML files will have a file extension of `.htm or .html`.  They are pretty much the same thing but in this class we will the `.html` ending.  

#### Tagging

HTML tags normally come in pairs.  There are two types of tags: **opening** and **closing**.  They are almost identical with the exception of the `/` present in the closing tag.  Some tags are called self closing tags but we will talk about those later.  We apply tags by placing an opening tag before content and a closing tag after content.  This tagging gives the content meaning.

```<tag>content</tag>```

#### Nesting

Tags can be nested.  This means that you can have tags inside of other tags.  When we do this, we commonly refer to elements as **parent** or **children**.  The entire child tag must be completely surrounded by the parent tag.  Failure to do this will cause major issues.  There is no limit to how deep you can nest elements.  Sometimes children tags are indented to help with the readability of your markup.  The rule usually is that **block** elements are indented while **inline** elements are not.

```
<parent-tag>
    content
    <child-tag>more content</child-tag>
</parent-tag>
```

#### Block and Inline

Natively tags can be either **block** or **inline** elements.  **Block** elements will take up as much horizontal space as possible.  They will force additional items that show up after them to a new line.  On the contrary, **inline** elements only take up as much space as they need.  Inline elements will stack horizontally.

Words of wisdom: Avoid nesting a block element in an inline element.

### Text Tags

#### [Headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)

There are a handful of text tags and more than half of them are used for establishing the importance of headers.  Heading tags are used to provide insight into content on the page.  These are very similar to the use newspaper headlines.  There are 6 levels of headings where 1 is the most important and 6 is the least.  So your heading tags are: *h1, h2, h3, h4, h5, h6*.  All headings will have an opening and closing tag.  Headings are block elements meaning they take up an entire line.  It is very important that you use headings for their semantic purpose and not because they make the text look bigger.

```<h1>Most Important Heading</h1>```

#### [Paragraphs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)

You also can tag content as a paragraph using the paragraph tag.  Paragraphs are block elements that are for... well paragraphs.

```<p>I am a paragraph</p>```

#### [Strong](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong) and [Em](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) tag
These two tags are our first inline elements.  Remember that inline elements will stack horizontally.  So both the **strong** and *em* tag are used to place importance on content.  The *em* tag is used to stress emphasis on text while the **strong** tag is used to give strong importance or more emphasis.  In a browser **strong** looks like bolded text and *em* looks like italicized text.  Ill leave it up to you to determine emphasis or stronger emphasis.  The big thing to remember here is to not use those tags for their visual appearance but the need to call out content with more important.  A good way to think about this is to mentally turn the visual result off.

```
<em>I need emphasis</em>
<strong>I need strong emphasis</strong>
```


### HTML Attributes
HTML elements also have the ability to take on attributes.  An attribute provides additional information about an element.  It could be a url, or a size, or a style, or even validation logic for a form.  Not all attributes are available on all elements but some are.  You are able to use the *class* and *id* attributes on every HTML element.  We will discuss these more later.

```
<tag attribute="something">content</tag>
```

### [Anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) and [Image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag

These two tags are our first elements with attributes.  

#### img

The image tag is used to place an image into the document.  It has many attributes that you can use but the two main ones are src and alt.  The image tag is the first and one of the few self closing tags.  A **self closing tag** does not have a closing tag like other elements.  this is because these tags do not surround content.  An image tag has an attribute of its src but there is no content that gets tagged.

```
<self-closing-tag />
```  

**src:** The image URL. This attribute is mandatory for the <img> element.

**alt:** This attribute defines the alternative text describing the image. Users will see this displayed if the image URL is wrong, the image is not in one of the supported formats, or if the image is not yet downloaded.

```
<img src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png" alt="MDN" />
```
#### a

The anchor tag defines a hyperlink to a location on the same page or any other page on the Web.

**href:** The href attribute indicates the link target, either a URL or a URL fragment.

**target:** This attribute specifies where to display the linked resource.  There are a few values for this but the main one you will use is *_blank* which loads the response in a new window or tab.

```
<a href="https://developer.mozilla.org" target="_blank">MDN</a>
```

Try using them both together to make an image an anchor:

```
<a href="https://developer.mozilla.org/en-US/" target="_blank">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN logo" />
</a>
```
Ex:

<a href="https://developer.mozilla.org/en-US/" target="_blank">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png" alt="MDN logo" />
</a>

## HTML Exercise
1. Open your terminal
1. Create a folder called *CT-IntroWeb*
2. Create a folder inside of it called HTML
2. Create a new html file named `bio.html`
1. Create a bio about yourself using all of the html tags that we have discussed so far
1. Go to GitHub.com and create a new repository for *CT-IntroWeb*
2. On your computer, initialize a new **git** repository in CT-IntroWeb
3. Once you are done, stage your file, commit it, and push it to the repo you just made on GitHub.com
4. Go to GitHub and verify your project is there
5. Send me a link to it


## File Issues in GitHub for questions


# Retain and Prepare
## Retain
- Follow the instructions that we used in our HTML exercise but this time create an html file about a favorite place.

## Prepare
- Next time we will keep talking about HTML
- [HTML Boilerplate]()
- [HTML Lists](http://www.w3schools.com/html/html_lists.asp)
- [HTML Containers]()