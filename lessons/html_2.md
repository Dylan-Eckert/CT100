# HTML 2

## Topics
- Boilerplate
- Comments
- Lists
	- Unordered Lists
	- Ordered Lists
	- Definition Lists
- Container elements
	- div, span, header, footer, section, article, nav, aside

## [Comments](https://developer.mozilla.org/en-US/docs/Web/API/Comment)

Code always... well hopefully always, makes sense to you at the exact moment when you are writing it.  But there is a catch here; the majority of the time you will see or interact with your code will not be at that moment.  More often than not you will be fixing bugs, changing functionality, or updating content.  How on earth are you supposed to keep track of everything that is going on.

There are two concepts that I would like to introduce here: self documenting code and semantics.

### Self documenting code
Self documenting code is a concept meaning that your code explains itself.  All developers should strive towards this at all times.  Your code should not require comments; it should just make sense.  If you find yourself in a situation where you have to explain yourself through comments, there is a good chance that you did something wrong.  Self documenting code reads like a book; it just makes sense.

### Semantics
One of the main reasons that code can be self documenting is because of semantics.  In HTML semantics are pretty simple as everything is a noun.  You should strive for thinking this way.  What makes something a heading or a paragraph?  Why does something require emphasis?  Semantics will become more complex as we move forward.  Take the time to do it right now with the smaller items and it will be easier as items get bigger.  To be continued...

### Comments
So after reading the previous two sections I bet you think comments are bad.  On the contrary,  comments are good but you need to make sure your use of them is appropriate.  When explaining code, it is important to be concerned with the **why** behind your code, not explaining **what** is happening in your code.  **Why** comments will help you remember your state of mind when you write something.  This makes it easier to place yourself back into that state when you need to change something.  **What** comments usually mean you wrote some... clever code that does not make sense thus comments are needed.  General best practice here is that **what** is bad and **why** is good.  Ok so let's get real here; we are front end developers.  Everything is not black and white, what or why.  We sometimes need to be pragmatic and we just need a solution.  This is the time where **what** comments are not just accepted; they are required.

HTML comments are very simple to use.  Anything that has been commented out will not be rendered to the page.

    <!-- <p>I will not be rendered to the page</p> -->

## Boilerplate
Boilerplate is the name we give code that can be reused in new applications without being greatly changed from the original.  It literally our common starting spot for every html file we make.

### [doctype](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
The doctype is used to inform the browser which type of html you are using.  This used to be a pretty complex tag but, thankfully now to HTMl5 it is very easy to remember.

### [html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html)
The html tag is the root element of a webpage.  All tags should nest or be children of this tag.  Technically, it can be implied without being written but we will always use it.  Only two tags are allowed to be direct descendants of the html tag: head and body.

### [head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
The head tag is used for providing meta data about a page.  This is the information that describes and should be relevant to the entire html page. The head tag does not render to the webpage.  The following elements can nest in the head: title, base, link, style, meta, script, and no script.  You can a use few of tags to apply style, or link to other styles, and include JavaScript. Right now we are only using the title tag; we will talk about the others in the future.

#### [title](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
The title is the name given to an individual web page.  Search engines use titles to help determine the relevance of a web page to a search.

**Title Search Exercise**

1. Go to any website and look at the name in the tab of your browser
2. Now inspect the web page using the chrome dev tools
3. Expand the head tag an locate the title tag
4. Where does the text used in the tab come from?

### [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
The body tag defines the body of the document.  It contains all of the rendered content for the page.  That means all of the html tags we learn and write will end up in the body.

**Example boilerplate:**

    <!DOCTYPE html>
    <html>
    <head>
        <title>My Title</title>
    </head>
    <body>
        <!-- Rendered content goes here -->
    </body>
    </html>


**Boilerplate Exercise**

You need to create a boilerplate code snippet to use in the future.

1. Go Github and login
2. At the top of the page, click the **Gist** link.  This will bring you to GitHub Gist.
3. Click the **New gist** button at the top right of the page
4. Name your gist whatever you feel is semantically correct
5. Paste your boilerplate code
6. Click **Create public gist**


**HTML 1 Update Exercise**

1. Go to your project that you created for the previous session and update it to use the HTML boilerplate you just learned.
2. Commit your changes and push them to your repo.

## Lists

Lists are a  way to group items.  We use lists every day, whether it is in a todo list, or an outline, or something else completely.  I want you to take a second and think about the semantics of a list.  What kind of things go into a list?  What is the difference between a bunch of navigation anchor tags or a list of navigation elements; semantics.  Whats the difference between a bunch of Twitter posts and a list of posts; semantics.  Like many things on the front end, correctly using list can be very subjective.  You may not be wrong in a given implementation of code but maybe you could be more right.

### [Unordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

An un ordered list allows for the grouping of elements in a manner that does not require linear relations or order.  English: You need a list that's not numbered.  This could be a todo list where things can be done in any order or a list of ingredients.  Unordered lists provide a generic grouping of like content.  

    <ul>
        <!-- list items go here -->
    </ul>

### [Ordered](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

Ordered lists are a grouping of elements where the placement is important.  By default they are displayed with a preceding number.  While the unordered list could be a set of ingredients, this could be the instructions for baking something tasty.

    <ol>
        <!-- list items go here -->
    </ol>

### [List item](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)

List items are HTML elements that go in side of an ordered or unordered list.  List items are required way to create your content.  But lets think about these for a second: you should not just put anything in a list.  Items in a list need to have some sort of connection, something that puts them into a meaning fun group.  A bad example of a list may have a date, then a color, and a the word *run*.  What do any of these have in common and why would you group them together at all.  A list is a way for you to categorize or group things.  The items in that list should have something in common.

    <ul>
        <li>List item</li>
        <li>Another list item</li>
    </ul>

### Nesting lists
Sometimes items in our lists need sub items.  You can do this with HTML by nesting a new list inside of an existing list item.  You can nest a unordered lists inside of ordered lists and the other way as well.

    <ul>
      <li>first item</li>
      <li>second item
        <ul>
          <li>second item first subitem</li>
          <li>second item second subitem</li>
          <li>second item third subitem</li>
        </ul>
      </li>
      <li>third item</li>
    </ul>

### [Definition List](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
This is our last type of list.  Its use is to define a list of terms paired to descriptions.  A term can have multiple descriptions associated to it and multiple descriptions can be associated to a term.  A simple use for this would be a glossary of terms but you can use this list for [much more](https://www.w3.org/TR/html5/grouping-content.html#the-dl-element).

Aside from the glossary use, I have used it to associate stock tickers to value, items in a shopping cart to prices, roles to people.

    <dl>
      <!-- content goes here -->
    </dl>


#### [dt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt): definition Term
This tags the term to be described and it is only valid markup inside of a definition list.

    <dl>
      <dt>Elevate Blue Team</dt>
    </dl

#### [dd](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd): definition description
This identifies the description associated to a term in a definition list and like its partner can only be valid inside of a definition list.

    <dl>
      <dt>Elevate Blue Team</dt>
      <dd>Jameson</dd>
      <dd>Tim</dd>
      <dd>Sasha</dd>
      <dd>Kami</dd>
      <dd>Eric</dd>
      <dd>Jordan</dd>
    </dl

## Containers/Sectioning
HTML containers are tags that are used to create content flow in a web page.  Some containers will have zero semantic meaning.  Container tags really help you create structure for a page; they can build upon our boilerplate to create layout specific boilerplates.

### [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
This is one of the no meaning containers that you can use.  The div is a block level element so it will stack vertically and maintain as much horizontal space as it can.  It can be used to group elements for any purpose.

    <div>
      <!-- Children are nested here -->
    </div>

### [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
This is the other no meaning containers that you can use.  The span is an inline element so it will stack horizontally and maintain minimal horizontal.  It can be used to specialize content.  It should only be used if there is not a better container to use.

    <span><!-- content goes here --></span>

### [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
The header is used to introduce content on a page or in another container.  This introduction should at least contain some sort of heading element but it can also contain navigation components and search forms.  It should help the user utilize the app, the page, or the section on the page.

    <header>
        <!-- Children are nested here -->

        <h1>The page is about stuff</h1>
        <img src="logo.png" alt="My logo" />
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </header>

### [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
To the opposite of the header, the footer will usually contain some sort of closing content.  This may be contact info, navigation elements, or copyright data.  Just like with any tag, think about why something will be tagged as a footer before you use it.

    <footer>
        <!-- Children are nested here -->
        ©2016 Code Tahoe LLC • An Elevate Blue Company
    </footer>

### [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)
Sections are used to group and contain related content.  You could think of section content as something you could store as an individual database entry.  Common tags in a section will be a header, some heading elements, and content represented by the heading.

    <section>
        <header>
            <h1>Headings</h1>
            <p>Stuff about headings</p>
        </header>
    </section>

**Best Practices**

- Don’t use it just as hook for styling or scripting; that’s a div
- Don’t use it if article, aside or nav is more appropriate
- Don’t use it unless there is naturally a heading at the start of the section


### [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
This is kind of an easy one to conceptualize as we read articles in magazines, newspapers, and on blogs.  An article is a self contained document.  But an article could also be a comment from a user on a blog.  Articles can have nested articles and sections and sections can contain articles.  

    <article>
        <!-- Children are nested here -->
        <h1>Apple</h1>
        <p>The <b>apple</b> is the fruit of the apple tree.</p>
    </article>

**Some questions to ask when using article**   

1. Would the content would make sense on its own in a feed reader? If so use an article
1. Is the content related? If so use a section
1. Finally if there’s no semantic relationship use a div


### [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)
Aside is kind of a strange one that I have not used that much but probably should.  It can be used in two ways that contradict each other.  In the first case, it should be used contain elements that are related to the content around it.  You can think of a side bar on a webpage.  Think about something separate from the main content but related to the page itself.

    <aside>
        <!-- Children are nested here -->
    </aside>

The other use is inside of an article where the aside content needs to be related to the article content.


### [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
This is a sectioning of a page for use with linking to other pages or sections of a page.  Navs can nest inside of any sectioning element.

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
