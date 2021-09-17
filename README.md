# JS5 Debrief

These eight exercises can be completed in any order. You are not expected to complete them all in this session. Choose which ones you'd like to attempt.

### Basic syntax

For each activity, you will need to code:

- Selectors
- Function
- Call the event with an event listener

**Selectors:** [Selectors](https://www.w3schools.com/js/js_htmldom_elements.asp) select an HTML element for use. Often we store this in a variable for later use.

```JavaScript
let elementName = document.querySelector("#elementId")
```

**Functions:** Program what will happen.

```JavaScript
function functionName() {
  // do something here
}
```

**Call the event:** This is where everything is connected together! Add an [event listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) to the stored element, and define the type of [DOM event](https://www.w3schools.com/js/js_htmldom_events.asp) that will trigger the function to be called.

```JavaScript
elementName.addEventListener("onclick", functionName);
```

# Exercises

- Use Live Server to open the index.html file in the **"answer" folder** to see the expected finished activity in the web browser.
- Use Live Server to open the index.html file in the **"activity1" folder** to see your work in progress in the web browser.
- Write your code in the "activity1" index.js file.
- Refer to the "activity1" index.html file to find the correct element attributes.

## 1) Display Name

Expected outcome: When you click the button it will display your name in the box

- Which two HTML elements need to be selected, and what are their ids and relevant attributes?
- Within the function, how do you assign your name as a value to the selected element value?
- Which element do you add the event listener to?
- What type of DOM event will be used as a trigger?
- _Note: hard code your name within the JavaScript function, rather than use the input box to grab it_.
- Info on the [HTML input value attribute](https://www.w3schools.com/tags/att_input_value.asp)

## 2) Lightswitch

Expected outcome: When the mouse cursor moves on to the lightbulb image, the lighton image is displayed. When the mouse cursor moves off the lightbulb image, the lightoff image is displayed.

- Which HTML element needs to be selected, and what is it's id and relevant attributes?
- Within the function, how do you change the selected element attribute to source a different image? (Check the images folder for images)
- Add the event listener.
- What type of DOM event will be used as a trigger?
- How do you nest a second function and event listener within the first function?
  - Add an event listener for the nested function
  - What type of DOM event will be used as a trigger?

## 3) Double Click to Display 
Intended outcome: When you double the click button, a smiley face and message in red text saying "You double clicked me." will be displayed below the button.
- Which two HTML elements need to be selected, and what are their ids and relevant attributes?
- Within the function, how do you:
  - make a new message display in the HTML of the selected element?
  - make the message red?
  - create a new image element?
  - set the source of the image element to the smiley face image?
  - append the image to the second selected HTML element?
- Which element do you add the event listener to?
- What type of DOM event will be used as a trigger?
- Info on [creating an element](https://www.w3schools.com/jsref/met_document_createelement.asp), and [appending a child element](https://www.w3schools.com/jsref/met_node_appendchild.asp).

## 4) Traffic Lights
Intended outcome: When you click on the "stop" button, the red light will show. Click on the "ready" button, the yellow light will show. Click on the "go" button, the green light will show.
- Which HTML elements need to be selected, and what are their ids and relevant attributes?
- Write three functions, one for each light.
- In the function, how do you change the style of the selected elements to make them the correct colours?
- Add event listeners to each selected button element.
- What type of DOM event will be used as a trigger?

## 5) Border Colours
Intended outcome: When the button is clicked, the top textbox border changes to red, and the bottom textbox border changes to green.
- Which three HTML elements need to be selected, and what are their ids and relevant attributes?
- In the function, how do you change the style of the selected elements to make them the correct colours?
- Add event listeners to selected element.
- What type of DOM event will be used as a trigger?

## 6) Validate Input
Intended outcome: When the button is clicked, if input is less than 8 characters long, a message in red saying "Length should be longer than 8" is displayed above input box, and focus is added to the input box. If the input is longer than 8 characters, a message saying "All good" is displayed instead.
- Which three HTML elements need to be selected, and what are their ids and relevant attributes?
- In the function, how do you:
  - use conditional flow to alter what is displayed?
  - check if the input length is correct?
  - make a new message display in the HTML of the selected element?
  - set the style of the message?
  - add [focus](https://www.w3schools.com/jsref/met_html_focus.asp) to the input box?
- Add event listeners to selected element.
- What type of DOM event will be used as a trigger?

## 7) Hobbies List
Intended outcome: When the button is clicked, a prompt requests user input to gather their hobbies. This occurs three times. The results of all three hobbies are displayed in a bullet point list below the button.
- Which element/s need to be selected?
- In the function, how do you:
  - gather user input with a prompt?
  - create a list item element?
  - display the user input as HTML in the list item?
  - append a child list item element to the selected list element?
  - repeat this 3 times?
- How is the event called?

## 8) Display Profile Card
Intended outcome: When the button is clicked, a card is displayed below it. The Card consists of an image, alt text, your name, your role, and your hobbies.
- How do you create an object with properties of name, role, hobbies and image?
- Which element/s need to be selected?
- In the function, how do you:
  - use a conditional statement to ensure the object is not empty?
  - set the selected elements HTML to be a card?
  - include the object property values on the card?
- How is the event called?

# Challenge
1) Open the completed challenge from the "answers" directory in live server in the browser, and note it's functionality. 
- What is the intended outcome or behaviours?

2) Open the index.html and index.js files from the challenge directory (careful this is not from the "answers" directory!)

3) Try to work out how to implement the functionality you observed.
- Start with pseudocode (writing in plain english)
- Use selectors
- Use event listener & dom event
- Write a function that programs the set of behaviours that occur after the event listener has been triggered.
