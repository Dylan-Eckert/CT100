# HTML Forms

So far our experience with HTML has been purely for people to consume data.  All of the tags we have used have a single purpose: provide people with information.  But how many sites have you been to where you need you are the one who needs to give information to the website.  Form components in html allow websites to collect information for multiple different purposes.  Examples: logins, email subscriptions, google search, bill pay.  Forms allow websites to provide a greater level of service to the people using it.

## [Form](http://www.w3schools.com/tags/tag_form.asp)
This tag is the grouping tag for all form components.  Form tags contain many different types of inputs to present and collect different types of data.  Forms also contains controls to handle the data in the form.  Form cannot have addition forms nested inside of them.  Forms are completely  front end components and are basically useless without a backend.  The `form` tag has a few very specific attributes that only it can possess: action, method, and novalidate are a few of them.

**Attributes**

- action: this allows for a form to submit to a web resource that can process a form.
- method: this specifies the the way the forms data is handled by using HTTP methods 
    - POST: You use post when you are sending data
    - GET: You use get when you are getting data
- novalidate: this prevents the browser from trying to validate the content of a form input element

```
<form action="email-handler.php" method="POST">
    <!-- form content -->
</form>
```

## [Button](http://www.w3schools.com/tags/tag_button.asp)
Buttons are html components that are clickable.  Buttons allow people to execute certain processes on a website.  Think about a login: you put in your credentials then tell the site to login by clicking a submit button.  That button tells the website the needed information is present and it can try to proceed with logging in.  

By default buttons have three different types: submit, reset, button

- submit: this will submit a form if it is nested within a form element, this is the default type
- reset: this will reset all the data inputs on a form
- button: this is a plain button that does not do anything; its my favorite type of button and you can use it outside of a form

```
<button>Submit</button>
<button type="reset">Reset</button>
<button type="button">Button</button>
```

## General form attributes
There are a lot of ways to provide extra information about form components.  Not all of these work on all form components but i am sure you can figure that out.

- required: makes sure the form cannot be submitted without this data
- placeholder: sets default text to serve as a placeholder for the text the user will enter
- disabled: prevents the user from interacting with the input
- readonly: prevents the user from changing an input
- name: just a way to name a control

## [Input](http://www.w3schools.com/tags/tag_input.asp)
The input is a generic type of element.  The type of information the input collects is based on the `type` attribute.  Browsers can apply validation of this information baed on the types.  These are self closing tags.  Inputs can only be changed by the user if they have focus; meaning that the user has clicked in the bounds of the input.  There are multiple different types but we will just discuss a few:

- text: this is just plain text
- number:  only integers, no decimals
- email: email addresses
- date: this will put a date picker on the page
- file: you can upload a file but it will require JavaScript to handle the data
- checkbox: an input that allows you to select multiple options
- radio: an input that allows you to only select a single option

```
<form>
    <input type="text"/>
    <input type="number" />
    <input type="email" />
    <input type="checkbox" />
    <input type="date" />
    <input type="file" />
    <input type="radio" />
</form>
```

<form>
    <input type="text"/><br />
    <input type="number" /><br />
    <input type="email" /><br />
    <input type="checkbox" /><br />
    <input type="date" /><br />
    <input type="file" /><br />
    <input type="radio" /><br />
</form>

###Checkboxes
As mentioned above the checkbox input allows a user to select more than one type of value for a form input.  If you use the checkbox type you are also required to use a `value` attribute with it. You can preselect options by using the checked attribute.

```
<form>
    <input type="checkbox" value='A' />
    <input type="checkbox" value='B' checked />
    <input type="checkbox" value='C' checked />
</form>
```

<form>
    <input type="checkbox" value='A' />
    <input type="checkbox" value='B' checked />
    <input type="checkbox" value='C' checked />
</form>

### Radio
As mentioned above the radio input allows a user to select only one type of value for a form input.  If you use the radio type you are also required to use a `value` attribute with it.  If there is more than one option to select you will have to use a `name` attribute as well.  You can preselect an option by using the checked attribute.

```
<form>
    <input type="radio" value='A' name='1'/>
    <input type="radio" value='B' name='1'checked />
    <input type="radio" value='C' name='1'/>
</form>
```

<form>
    <input type="radio" value='A' name='1'/>
    <input type="radio" value='B' name='1'checked />
    <input type="radio" value='C' name='1'/>
</form>


## [Text Area](http://www.w3schools.com/tags/tag_textarea.asp)
A text area is just large block of area for a user to write in.  It is basically just a multiline text input.  With attributes you can set things like minimum and maximum length and the number of columns and rows it will show by default.

```
<form>
    <textarea rows='10' cols='50'></textarea>
</form>
```
<form>
    <textarea rows='10' cols='50'></textarea>
</form>


## [Select](http://www.w3schools.com/tags/tag_select.asp) and [Option](http://www.w3schools.com/tags/tag_option.asp)
The select serves a similar purpose to the input type radio but it does it in a way more compact UI.  Imagine if you had 50 choices for a form component.  That would be really difficult for a user to deal with if it was just radio buttons.  i'd imagine that it would take up more than one line, wrapping itself down the page.  The select allows you to place multiple elements in a single component.  Select menus are sometimes referred to as dropdown menus.

As I am sure you could guess, the option tag hold a single option for the select menu.  This tag requires a `value`  attribute if it will have a value, just like the radio inputs.   The option can also take an attribute of `selected` to preselect a value

```
<form>
  <select>
    <option>Please select</option>
    <option value='1'>Option 1</option>
    <option value='2' selected>Option 2</option>
    <option value='3'>Option 3</option>
  </select>
</form>
```

<form>
  <select>
    <option>Please select</option>
    <option value='1'>Option 1</option>
    <option value='2' selected>Option 2</option>
    <option value='3'>Option 3</option>
  </select>
</form>


## [Labels](http://www.w3schools.com/tags/tag_label.asp)
Labels literally are purely descriptive tags and do not get submitted when a form is sent off for processing.  But they are super helpful to a user.  Look at our form above: how is someone supposed to know what any of those fields are?  Imagine if there was some easy way to label those inputs.  Yay labels.  Labels also don't just visually give a name to something but they also have the ability to match up to an input by using the `for` attribute.  The desired input must be using an `id` attribute to properly do this.

```
<form>
  <label>Name</label>
  <input type="text"/>
  <label>Age</label>
  <input type="number" />
  <label>Email</label>
  <input type="email" />
  <label>Birthdate</label>
  <input type="date" />
  <label>Sex</label>
  <label>Male</label><input type="radio" value="male" />
  <label>Female</label><input type="radio" value="female" />
</form>
```

<form>
  <label>Name</label>
  <input type="text"/><br />
  <label>Age</label>
  <input type="number" /><br />
  <label>Email</label>
  <input type="email" /><br />
  <label>Birthdate</label>
  <input type="date" />
</form>



## [Fieldset](http://www.w3schools.com/tags/tag_fieldset.asp) and [Legend](http://www.w3schools.com/tags/tag_legend.asp)
A `fieldset` just basically allow you to group form input together and the legend is used to define a caption for a `fieldset`.

```
<form>
  <fieldset>
    <legend>Personal Info</legend>
    Name <input type="text"><br>
    Email <input type="text"><br>
    Date of birth <input type="text">
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Personal Info</legend>
    Name <input type="text"><br>
    Email <input type="text"><br>
    Date of birth <input type="text">
  </fieldset>
</form>


