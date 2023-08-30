# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Build a Base Appareal coming soon page which takes in email and validates as user types in email.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [Github](https://your-solution-url.com)
- Live Site URL: [Website](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS
- Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In this challenge, I gained insights into the implementation of the `input` and `label` HTML tags. I discovered valuable input types such as "email" and "image." The "email" input type comes with built-in email validation, while the "image" input type functions similarly to a submit button, but it employs an image for its visual representation.

Regarding the "email" input, it's important to note that this input type considers an empty value as valid by default. To address this, utilizing the 'required' attribute proves useful. By incorporating this attribute, we ensure that users cannot submit the form with an empty email address, thereby enhancing the user experience.

Furthermore, I explored the `oninput` attribute, which triggers a JavaScript function when users interact with an input field. In the context of the email input, this attribute allows us to execute a JavaScript function whenever users type into the field, facilitating real-time responses and interactions.

```html
<input
  type="email"
  id="email"
  name="email"
  placeholder=" Email Address"
  required
  oninput="checker()"
/>
<input type="image" src="images/icon-arrow.svg" alt="submit" id="submit" />
```

I also learned about the pseudo-element `::placeholder`.

```css
#email::placeholder {
  color: hsla(0, 36%, 70%, 0.404);
  font-weight: 400;
}
```

With this challenge I've been able to practice regular expressions and broke down the expression into smaller parts below for easier understanding. I've followed the common rules for valid email addresses:

**Local Part:** This is the first part of the email before the '@' symbol. It can have letters, numbers, and a few special characters like '-', '\_', and '.'. But it can't start or end with these special characters, and they can't appear together.

**Domain Part:** This is the second part after the '@' symbol. It's separated by dots (.) and has letters and numbers only. No special characters are allowed here.

By sticking to these widely recognized rules, I tried to validate email addresses in the way they're usually formatted.

```js
let mailRegex =
  /^[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]([-_]?[a-zA-Z0-9]+)*)*@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
```

/^
[a-zA-Z0-9] // Start with a letter or digit (local part should begin with at least one character)
(
[-_]? // Optional hyphen or underscore
[a-zA-Z0-9]+ // At least one letter or digit (subsequent characters in local part)
)\* // End of optional group (can repeat zero or more times)

(\. // Mandatory dot for domain (domain must start with a dot)
[a-zA-Z0-9] // Domain should start with a letter or digit
(
[-_]? // Optional hyphen or underscore
[a-zA-Z0-9]+ // At least one letter or digit (subsequent characters in domain)
)_
)_ // End of optional group (can repeat zero or more times)

@ // Mandatory "@" symbol

[a-zA-Z0-9]+ // Domain should start with at least one letter or digit
\. // Mandatory dot after domain (separating domain components)
[a-zA-Z0-9]+ // Domain should end with at least one letter or digit

$/; // End of the string

### Useful resources

- [input type="email"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) - Morzilla developers page on the input type email
- [input type="image"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image) - Morzilla developers page on the input type image
- [Email validation Using Javascript | With Source Code](https://www.youtube.com/watch?v=1tnINeBLNj4) - This video helped me get an idea on what i should do for email validation. i learnt about the oninput attribute and helped me get started on the regular expression
- [How To Make Email Validation Using JavaScript | Valid & Invalid Email Check In JavaScript](https://www.youtube.com/watch?v=ndNPg8-5jgI) - Another video which can be used to get an idea of how to do email validation. Here he uses onkeyup attribute.
- [What are the rules for email address syntax?](https://knowledge.validity.com/hc/en-us/articles/220560587-What-are-the-rules-for-email-address-syntax-#:~:text=A%20valid%20email%20address%20has%20four%20parts%3A%201,%40%20symbol%203%20Domain%20name%204%20Top-level%20domain) - This article gives information on what makes a valid email address. I simplified the rules for this challenge.
- [Regular expression syntax cheat sheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet) - Reference this page for regular expressions.
- [What characters need to be escaped?](https://riptutorial.com/regex/example/15848/what-characters-need-to-be-escaped-) - Another refernce for special characters that need to be escaped.
- [Lookahead assertion: (?=...), (?!...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) - Talks about lookahead assertion
- [Lookahead and Lookbehind Zero-Length Assertions](https://www.regular-expressions.info/lookaround.html) - Another article that talks about lookahead assertion

## Author

- Frontend Mentor - [@jrc17](https://www.frontendmentor.io/profile/jrc17)
