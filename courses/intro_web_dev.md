# Introduction to Web Development

## I know how build a website

What really is a website?  Is an app the same as a website?  Is everything on the internet a website?

Once people find out that you know how to build a website you will most likely encounter some of these types of questions; and the occasional request to fix their computer because writing code obviously makes you an expert in all things computer related.  The interesting thing about the above questions is that most people can't correctly answer them.

A website is a location connected to the Internet that maintains one or more pages on the World Wide Web.  A website can be accessed by a domain name or a web address.  A website is stored on a web server and has a unique numeric address.  A website is hosted on a web server.  This basically means that the website is given space on a computer for its files and a connection to the internet so people can visit it.

There are two basic kinds of website: static and dynamic.  Both of these use HTML, CSS, and JS.  The static site will basically have the same data always while the dynamic page will constantly be providing new information.  A basic comparison of this would be a restaurant site and a restaurant review site.  The restaurant site will not change too much.  The hours and menu will stay the same most likely.  Any update will require a someone to go in an physically change the content.  The review site will always be receiving new information as long as people are making reviews.

The difference between a website and a web application is really subjective and you will get a ton of different answers.  I'll give you mine: a website is defined by its content and a web application is defined by its interactions.  This is not an absolute statement by any means but it is a good way to think about things.  I go to websites to see stuff, I go to web apps to do stuff.

No, everything on the internet is not a website.  The internet has all sorts of information available.  Some of it is presented in the form of websites and some of it comes in code formats like XML and JSON.  The code formatted information is accessible from something called an API (application programming interface).  The API, like a website, has an address and is hosted.  It does not have webpages; it only provides that pure, unformatted data.  Websites and web apps will use this data to giving you a more human readable/friendly format.

The technologies that a website uses can be split into two main camps: front end/client side and back end/server side. FE is the stuff that you see and interact with (HTML, CSS, JS).  The BE is everything else 

![image](http://4b93n32qwvjj3ddn5w3yhffoas6.wpengine.netdna-cdn.com/wp-content/uploads/2012/08/term-frontendvsbackend.jpeg)

## Internet basics for a developer
Becoming a developer will take you from just a consumer of the internet to having an understanding of how it works.  Fortunately, as a developer you don't have to know exactly how it works; meaning you don't have to be an expert in the low level communication protocols of the web.  It is good to have a conceptual understanding of what happens to our code when a person visits a page we have made.

[Watch Video](https://www.youtube.com/watch?v=WwyJGzZmBe8)

**Conceptual Comprehension**

- The internet is basically a super highway for requests and responses
- A user makes a request for information, then a server responds with the information
- A server is a computer very similar to a personal computer.
- Go to any url (uniform resource locator) and hit enter.  There is a unique location for the content you are requesting
- A DNS (domain name server) translates a web url/address in to an IP (internet protocol) address then sends the request using the internets communication rules, HTTP (Hypertext Transfer Protocol), to the correct  server
- The request and the response will have to transmit information across fiber, copper and network cables.  It will go through a lot of different types of network hardware like routers and modems.
- A server determines what information the request is asking for and what to send back
- Server may interact with the data base and will send back a response of HTML, CSS, and JS
- The browser takes that response and translates it into the visible web page
- A website request occurs before pixels are rendered to the page

**Exercise**

1. Open up Chrome and your dev tools
2. Click on the Network tab
3. Refresh the page

That tab shows every request that you made and every response that you received; all you did was refresh the page.
