# CSS 3

## Responsive Web
People have become more and more dependent on phones to access internet content.  Naturally everyone with a website wants to have a site that will work well on a phone.  But the overhead of building and maintaining two sites is not realistic.  Responsive web is the approach that suggests that the design and development of sites should respond to the user’s behavior and environment based on screen size, platform and orientation.

Responsive Web Design (RWD) is achieved by using a mix of flexible grids, layouts, content, and size queries.  A designer/developer will define **break points** in a CSS file.  These break points will tell the browser the screen constraints for certain CSS rule.  Developers can have different css rules be used on different screen sizes.

A popular workflow today is called mobile first.  This means that you build the mobile version of your site first and the web version next.  The reason for this is that it is much easier to add content as you grow than to smash a web page into phone.  Every design today should be done with the mindset of how will it look on a phone, a tablet, a website, and a huge resolution screen.

## Grids
A grid is a concept in design to help you create harmonious and balanced layouts.  Grids establish a set of guidelines for how elements should be positioned.  They help you determine proportion and enforce proportion.  On the web this means that our content can easily be placed in specify locations relative to other content on the page.  Using a grid will increase your productivity and help with responsive layout.

Grids on the web use the concept columns and rows.  Content can span multiple columns based on a class name.  A grid will have an pre defined number of columns.  You have to design and develop within that constraint.

![image](http://media.creativebloq.futurecdn.net/sites/creativebloq.com/files/images/2014/04/grid03.jpg)

## [Bootstrap](http://getbootstrap.com/getting-started/)

Learning CSS is super important and using a library will never give you the skills you will need to be a front end developer.  Bootstrap will not help you in interviews either.  Having said that, using a library like bootstrap will allow you to be pretty efficient in building sites as an early stage developer.

Many large companies use bootstrap because it allows developers to work at less of a granular level when creating front end components.  I have used Bootstrap on many projects for that exact reason.  Bootstrap gives you a css file to include in your html files that will apply a base set of styles to content on the page.  For many of the boot strap styles to work you will have to follow their html structure and use their class names.

Using bootstrap gives you access to navbars components, responsive elements, grids, and JavaScript components.  Take a look at their [examples](http://getbootstrap.com/getting-started/#examples) on the web and [DOWNLOAD THEM HERE](https://github.com/twbs/bootstrap/archive/v3.3.6.zip).

Remember Bootstrap is a tool and to truly wield it correctly you need to know what that tool is doing.  I **strongly** urge you to not just take the easy road by blindly implementing their markup.  Look at it, inspect it, figure out why it works the way it does.

### Containers

Everything in bootstrap needs to go inside of a container.  It gives us access to some of its most powerful features like layouts and responsive components.  We have 2 options for containers both of which are responsive:

**Fixed width on the page**

    <div class="container">
      ...
    </div>

**Full width of the page**

    <div class="container-fluid">
     ...
    </div>

### [Grids](http://getbootstrap.com/css/#grid-example-basic)

The BS grid is 12 columns and applies layout based on class names to specific nested structure of tags.  Conceptually every horizontal section of a grid is a row and that row has children that declare how many columns they need.  The amount of columns may vary depending on the size of the page.  For example a form on full screen page may only need a third of the page to work right but on a phone it will need the entire width of the device.

This example shows content that needs full width on a medium sized screen.

    <div class="row">
      <div class="col-md-12"></div>
    </div>

The class used on the content can be reasoned about like this: 12 columns for a medium screen.  Screens can be sized extra small (xs), small (sm), medium (md), and large (lg).  Columns can be offset using a similar syntax:

    <div class="col-md-offset-3"></div>

So this content will start 3 columns from the left side.  It is important to remember that you have to keep track of your column count.  You cannot exceed 12.

You can nest columns inside of columns.  Each time you nest it will create a new smaller 12 column layout inside the parent.

    <div class="row">
      <div class="col-sm-9">
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6"></div>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>

In order to control the responsiveness of a Bootstrap grid you can apply multiple classes to elements defining how much space they get at each break point.

    <div class="row">
      <div class="col-sm-9 col-xs-12"></div>
      <div class="col-sm-3 col-xs-12"></div>
    </div>


### [Components](http://getbootstrap.com/components/)    

Bootstrap also has a plethora of components created that you can use.  A component is a specific set of HTML and CSS put together to do a specific thing.  You will have to look at the list as it would be a waste of time to explain most of them.  There are some really useful items in there like navigation bars.

### [JavaScript Component](http://getbootstrap.com/javascript/)

If you want interactivity you will need to JavaScript components but we are not talking about that yet.  Feel free to take a look though.
