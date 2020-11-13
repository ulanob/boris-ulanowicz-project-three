// create namespace
const storyApp = {};

// create init function as a method of namespace object
storyApp.init = function() {
  console.log('ready');
};

// create an array "data" in the namespace to hold the story data. The array items will be objects that hold information such as the villains, the story text, and the backgrounds in an unnamed 
storyApp.dataArray = [
  {
    villain: 'warlock',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  {
    friend: 'warlock',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis.Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  {
    villain: 'dragon',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  {
    friend: 'dragon',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis.Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  }
]


// first function: get userName
storyApp.getUsername = function() {
  // 
}
// create an event listener on form input to take the name
// prevent default on input
// create variable userName to save the user's name
// create an event listener on the 

// document ready with init method
$(function() {
  storyApp.init();
})