//        Project 3 Pseudocode: Choose your own adventure

//  Webpage welcomes the user to the scene of the adventure (... a castle?). There is a form to take the user's character name, along with a <select> element that drops down to give the user a "legendary title" (ie. Username the Cruel/Bold/Destroyer/Etc) and this string is saved to a variable on submit for later so that the app can refer to the user by name, providing a more personal/immersive experience. This form sits in a div that acts as the "platform" of where the story is told - basically a div with a border or a background image serving as a border.

// After the form submits (saves the username variable), the "story platform" (in this case, name entry form) clears, and an introductory scenario (<p>) is appended. At the end of the paragraph, the user is presented with two options <a> to progress in their adventure.

// The <a> tag, on click, then clears the <p> tag of story platform <div> and appends a new scenario that builds around the negative/positive consequences of the user's choice. Two further <a> tags are presented for the user to choose from, along with a button up top that allows the user to return to the previous scenario.

// Similar to before, the two choices lead the user to a unique end of story- there will be 4 different endings to the adventure. The usual <a> tags are different at the end here: one is made invisible, and the other brings the user back to the top where they can restart their adventure. The "return" button is also present so that the user can go back one step and try the other option.  

// The indiviual <p> tags can be written in the JS file in an object instead of in the HTML 

// Stretch goals: on a selection, two random numbers are generated - one for the user "skill" and the second number for minimum requirement". If user skill > requirement, then the user proceeds to selected outcome. If fail, then the user is "punished" to an alternate outcome. User skill integer can be incorporated into the next scene's content, or perhaps onto the clicked on <a> tag.