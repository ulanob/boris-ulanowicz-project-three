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
    html: `
    <div class="storyBox storyStart">
      <button class="veryStart"><i class="fas fa-undo"></i></button>
      <h1>Welcometh to Junoper Keep, <span>${storyApp.fullName}</span></h1>
      <p>We has't been waiting f'r thee to cometh. Eight months ago, a dark and myst'rious plague did spread ov'r the landeth and did hold us all captive to our homes. With nay direction and nay sight of the endeth of the scourge, a bawbling legion of townspeople beganeth a journey to the prophets to findeth answ'rs, but only one returned, with the message: "we might not but waiteth until ${storyApp.time}, at which hour a h'ro shall arriveth to banish the beshrew and lib'rate us...</p >
      <p>Art the prophecies true? Art thee the h'ro we seeketh?</p>
      <button class="left" value = 0>aye</button>
      <button class="right" value = 0>nay</button>
    </div>`
  },
  // [1]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <h2>[1]</h2>
      <div class="storyBox storyMid">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="left" value = 1>____</button>
        <button class="right" value = 1>____</button>
      </div>`
  },
  // [2]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <h2>[2]</h2>
      <div class="storyBox storyMid">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="left" value = 2>____</button>
        <button class="right" value = 2>____</button>
      </div>`
  },
  // [3]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <h2>[3]</h2>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`
  },
  // [4]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <h2>[4]</h2>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`
  },
  // [5]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <h2>[5]</h2>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`
  },
  // [6]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <h2>[6]</h2>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`
  },
  // [7]
  {
    html: `
      <form action="">
          <label for="username">Welcometh to Junoper Keep, what be thy nameth?</label>
          <input type="text" name="username" id="username" required>
          <select name="titleSelector" id="additionalTitle" required>
            <option value="">Choose Your Title</option>
            <option value="the Valiant">the Valiant</option>
            <option value="the Cruel">the Cruel</option>
            <option value="the Orc">the Orc</option>
            <option value="the Destroyer">the Destroyer</option>
            <option value="the Healer">the Healer</option>
            <option value="the Bold">the Bold</option>
          </select>
          <button type="submit" id="submit">Enter the Castle</button>
        </form>
    `
  }
]

let storyIndex;

storyApp.eventListeners = function () {
  $('input').focus();
  $('form').on('submit', function (event) {
    event.preventDefault();
    storyApp.userName = $('form input').val().trim();
    storyApp.userTitle = $('#additionalTitle').val();
    
    storyApp.fullName = `${storyApp.userName} ${storyApp.userTitle}`;
    console.log(`${storyApp.fullName}`);
    // custom alert if user does not provide a valid response?
    // a way to trim whitespace off end of user response? format?

    // moving between slides
    $('.platform').empty().append(storyApp.dataArray[0].html);
    
    
  });
  $('.platform').on('click', '.left', () => {
    const storyIndex = $('.left').val();
    $('.platform').empty().append($(storyApp.dataArray[storyIndex * 2 + 1].html));
  });
  $('.platform').on('click', '.right', () => {
    const storyIndex = $('.right').val();
    $('.platform').empty().append($(storyApp.dataArray[storyIndex * 2 + 2].html));
  });
  $('.platform').on('click', '.return', () => {
    const storyIndex = $('.return').val();
    $('.platform').empty().append($(storyApp.dataArray[storyIndex].html));
  });
  $('.platform').on('click', '.start', () => {
    $('.platform').empty().append($(storyApp.dataArray[0].html));
  });
  $('.platform').on('click', '.veryStart', () => {
    window.location.reload(true);
  })
};

// const filterLeft = function(i) {
//   const targetIndex = (2*i + 1);
// }

// const filterRight = function(i) {
//   const targetIndex = (2*i + 2);
// }





$(function() {
  storyApp.init();
})

