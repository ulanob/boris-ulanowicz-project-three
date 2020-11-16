const storyApp = {};

storyApp.init = function() {
  storyApp.eventListeners();
};

storyApp.userTitle;
storyApp.userName;
storyApp.fullName;
storyApp.time = new Date();

// Data Array Tree:
//             index page (username form)
//                        |
//                  [0] story start
//                   /         \
//                 [1]         [2]  middle decisions
//                /   \       /   \
//              [3]   [4]   [5]   [6] story endings

storyApp.dataArray = [
  // [0]
  {
    html: `
      <button class="veryStart"><i class="fas fa-undo"></i></button>
      <div class="storyBox storyStart">
        <h1>Welcometh to Junoper Keep, <span>${storyApp.userName}</span></h1>
        <p>We has't been waiting f'r thee to cometh. Eight months ago, a dark and myst'rious plague did spread ov'r the landeth and did hold us all captive to our homes. With nay direction and nay sight of the endeth of the scourge, a bawbling legion of townspeople beganeth a journey to the prophets to findeth answ'rs, but only one returned, with the message: "we might not but waiteth until ${storyApp.time}, at which hour a h'ro shall arriveth to banish the beshrew and lib'rate us...</p >
        <p>Art the prophecies true? Art thee the h'ro we seeketh?</p>
        <button class="left" value = 0>aye</button>
        <button class="right" value = 0>nay</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/kelly-sikkema-Wni6RtcNhU8-unsplash.jpg')`,
    color: '#595B4F',
    textColor: "#000000",
    credit: `<span>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/castle-inside?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [1]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <div class="storyBox storyMid">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="left" value = 1>____</button>
        <button class="right" value = 1>____</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/carlos-cram-ttJt5X9Hmu8-unsplash.jpg')`,
    color: '#C56723',
    textColor: "#000000",
    credit: `<span>Photo by <a href="https://unsplash.com/@cramtek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Carlos Cram</a> on <a href="https://unsplash.com/s/photos/dragon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [2]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <div class="storyBox storyMid">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="left" value = 2>____</button>
        <button class="right" value = 2>____</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/chase-clark-HKKM537I_Ik-unsplash.jpg')`,
    color: '#172832',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@chaseelliottclark?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chase Clark</a> on <a href="https://unsplash.com/s/photos/wizard?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [3]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/daniel-cheung--vIwZQ_kHa8-unsplash.jpg')`,
    color: '#051701',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Daniel Cheung</a> on <a href="https://unsplash.com/s/photos/friendly-dragon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [4]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/chelms-varthoumlien-j-zQJk6aaaA-unsplash.jpg')`,
    color: '#050505',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@varlien?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chelms Varthoumlien</a> on <a href="https://unsplash.com/s/photos/skulls?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [5]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/joe-caione-qO-PIF84Vxg-unsplash.jpg')`,
    color: '#091119',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@joeyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joe Caione</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [6]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt delectus quia quas repellendus voluptates hic nobis. Sunt adipisci obcaecati nemo sequi, illo sint velit mollitia impedit aperiam rem error cumque soluta voluptatibus eum debitis id deleniti repellat deserunt et sit!</p>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../choose-your-own-adventure-project/assets/simon-berger-6te9SupeW1g-unsplash.jpg')`,
    color: '#05121A',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@8moments?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Simon Berger</a> on <a href="https://unsplash.com/s/photos/castle-swan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
]

// let storyIndex;

storyApp.eventListeners = function () {
  $('input').focus();
  $('form').on('submit', function (event) {
    event.preventDefault();
    storyApp.userName = $('form input').val().trim();
    storyApp.userTitle = $('#additionalTitle').val();
    
    storyApp.fullName = `${storyApp.userName} ${storyApp.userTitle}`;
    console.log(`${storyApp.fullName}`);
    // custom alert if user does not provide a valid response?

    // Remove flexbox off .platform
    $('.platform').removeClass('platformFlex');

    // moving to [0]
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[0].img}`);
    $('.platform').empty().append(storyApp.dataArray[0].html);
    $('html').css("background-color", `${storyApp.dataArray[0].color}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[0].credit);
  });

  // Event listener on left button option
  $('.platform').on('click', '.left', () => {
    const storyIndex = $('.left').val();
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[storyIndex * 2 + 1].img}`);
    $('.platform')
      .empty()
      .append($(storyApp.dataArray[storyIndex * 2 + 1].html));
    $('html').css("background-color", `${storyApp.dataArray[storyIndex * 2 + 1].color}`);
    $('p').css("color", `${storyApp.dataArray[storyIndex * 2 + 1].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[storyIndex * 2 + 1].credit);
  });

  // Event listener on right button option
  $('.platform').on('click', '.right', () => {
    const storyIndex = $('.right').val();
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[storyIndex * 2 + 2].img}`);
    $('.platform')
      .empty()
      .append($(storyApp.dataArray[storyIndex * 2 + 2].html));
    $('html').css("background-color", `${storyApp.dataArray[storyIndex * 2 + 2].color}`);
    $('p').css("color", `${storyApp.dataArray[storyIndex * 2 + 2].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[storyIndex * 2 + 2].credit);
  });

  // Event listener on return button
  $('.platform').on('click', '.return', () => {
    const storyIndex = $('.return').val();
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[storyIndex].img}`);
    $('.platform')
      .empty()
      .append($(storyApp.dataArray[storyIndex].html));
    $('html').css("background-color", `${storyApp.dataArray[storyIndex].color}`);
    $('p').css("color", `${storyApp.dataArray[storyIndex].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[storyIndex].credit);
  });

  $('.platform').on('click', '.start', () => {
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[0].img}`);
    $('.platform')
    .empty()
    .append($(storyApp.dataArray[0].html));
    $('html').css("background-color", `${storyApp.dataArray[0].color}`);
    $('p').css("color", `${storyApp.dataArray[0].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[0].credit);
  });

  $('.platform').on('click', '.veryStart', () => {
    // $('.platform').addClass('platformFlex');
    window.location.reload();
  })
};

$(function() {
  storyApp.init();
})

