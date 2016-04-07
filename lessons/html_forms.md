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

###Checkboxes
As mentioned above the checkbox input allows a user to select more than one type of value for a form input.  If you use the checkbox type you are also required to use a `value` attribute with it.

```
<form>
    <input type="checkbox" value='A' />
    <input type="checkbox" value='B' />
    <input type="checkbox" value='C' />
</form>
```

### Radio
As mentioned above the radio input allows a user to select only one type of value for a form input.  If you use the radio type you are also required to use a `value` attribute with it.  If there is more than one option to select you will have to use a `name` attribute as well.

```
<form>
    <input type="radio" value='A' name='1'/>
    <input type="radio" value='B' name='1'/>
    <input type="radio" value='C' name='1'/>
</form>
```



## [Text Area](http://www.w3schools.com/tags/tag_textarea.asp)
A text area is just large block of area for a user to write in.  It is basically just a multiline text input.

```
<form action="email-handler.php" method="POST">
    <textarea></textarea>
</form>
```


## [Select](http://www.w3schools.com/tags/tag_select.asp)

## [Option](http://www.w3schools.com/tags/tag_option.asp)

## [Labels](http://www.w3schools.com/tags/tag_label.asp)


## [Field Set](http://www.w3schools.com/tags/tag_fieldset.asp)

## [Legend](http://www.w3schools.com/tags/tag_legend.asp)
