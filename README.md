# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

## Desktop Design
![](./desktop-design.PNG)

## Desktop Error States
![](./error-state-desktop.PNG)

## Mobile Design
![](./mobile-design.PNG)

### Links

- Live Site URL: [Intro Component with Signup](https://rkendall300.github.io/intro-component-signup/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

Didn't have many difficulties with this project. The biggest part of it was actually getting the error icons to show up within an input tag, because they cannot have child elements. The way I worked around this was by making two input field classes; one being the normal design and the other being when there is an error, which would have a background-image set to the error icon and different colors indicating an error state. Styling the error icon inside of the input field was much easier than I thought it would be with this method.

## Author

- Frontend Mentor - [@rkendall300](https://www.frontendmentor.io/profile/rkendall300)

## Acknowledgments

As always, thanks to my friend Eric for the help with React. Through helping me on several earlier projects, I was able to get a better grasp of React and state management as a whole. The early lessons with him made learning it much easier and motivated me to get working on my own stuff. Thanks a lot, Eric!
