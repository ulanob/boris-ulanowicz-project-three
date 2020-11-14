const storyApp = {};

storyApp.init = function() {
  storyApp.eventListeners();
};

storyApp.userTitle;
storyApp.userName;
storyApp.fullName;
storyApp.time = new Date();

storyApp.dataArray = [
  // [0]
  {
    html: `<div class="storyBox">
          <h1>Welcometh to Junoper Keep, <span>${storyApp.fullName}</span></h1>
          <p>We has't been waiting f'r thee to cometh. Eight months ago, a dark and myst'rious plague did spread ov'r the landeth and did hold us all captive to our homes. With nay direction and nay sight of the endeth of the scourge, a bawbling legion of townspeople beganeth a journey to the prophets to findeth answ'rs, but only one returned, with the message: "we might not but waiteth until ${storyApp.time}, at which hour a h'ro shall arriveth to banish the beshrew and lib'rate us...</p >
          <p>Art the prophecies true? Art thee the h'ro we seeketh?</p>
          <button>aye</button>
          <button>nay</button>
        </div>`
  },
  // [1]
  {
    villain: 'warlock',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  // [2]
  {
    friend: 'warlock',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis.Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  // [3]
  {
    villain: 'dragon',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  // [4]
  {
    friend: 'dragon',
    storyText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis.Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!'
  },
  // [5]
  {

  },
  // [6]
  {
    
  },
  // 7
  {

  }
]


storyApp.eventListeners = function () {
  $('input').focus();
  $('form').on('submit', function (event) {
    event.preventDefault();
    storyApp.userName = $('form input').val();
    storyApp.userTitle = $('#additionalTitle').val();
    
    storyApp.fullName = `${storyApp.userName} ${storyApp.userTitle}`;
    console.log(`${storyApp.fullName}`);
    // custom alert if user does not provide a valid response?
    // a way to trim whitespace off end of user response? format?
    $(storyApp.dataArray).push(storyApp.fullName);
    $('.platform').empty().append(storyApp.dataArray[0].html);
  })
}



$(function() {
  storyApp.init();
})

