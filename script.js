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
        <p>"Hello. I am the S'rvant of Juniper Keep. I has't been waiting f'r thee to cometh. Eight months ago, a dark and myst'rious plague did spread ov'r the landeth and did hold us all captive to our homes. With nay direction and nay sight of the endeth of the scourge, a bawbling legion of townspeople beganeth a journey to the prophets to findeth answ'rs, but only one returned, with the message: "we might not but waiteth until ${storyApp.time}, at which hour a h'ro shall arriveth to banish the plague and lib'rate us..."</p >
        <p class = "question">"Art the prophecies true? Art thee the h'ro we seeketh?"</p>
        <button class="left" value = 0>aye</button>
        <button class="right" value = 0>nay</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/kelly-sikkema-Wni6RtcNhU8-unsplash.jpg')`,
    color: '#595B4F',
    textColor: "#000000",
    credit: `<span>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/castle-inside?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [1]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <div class="storyBox storyMid">
        <p>Thee nodeth thy headeth in agreement.  In a stout voice, thee replyeth "yes! i am the h'ro thee seeketh"</p>
        <p>The S'rvant nods solemnly.  "Thank thee f'r coming to saveth us.  We believeth yond the spirit of the plague resides inside the fi'ry Dragon living at the top of Junoper Keep.  The bodement sayeth yond the chosen one shalt useth their intellect to dispell the Dragon, but what couldst yond possibly mean?"</p>
        <p>"Fight??? Reasoneth???"</p>
        <button class="left" value = 1>Reasoneth</button>
        <button class="right" value = 1>Fight</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/carlos-cram-ttJt5X9Hmu8-unsplash.jpg')`,
    color: '#C56723',
    textColor: "#000000",
    credit: `<span>Photo by <a href="https://unsplash.com/@cramtek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Carlos Cram</a> on <a href="https://unsplash.com/s/photos/dragon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [2]
  {
    html: `
      <button class="return" value = 0><i class="fas fa-undo"></i></button>
      <div class="storyBox storyMid">
        <p>The S'rvant looks puzzl'd.</p>
        <p>"No, thee might not but beest the h'ro.  Thee wilt beest falsing, coward.  The Wizard shall certes knoweth if 't be true thou art truthful 'r not!" </p>
        <p>A Wizard appears out of thin air, with their wand eft to conjure a dark spelleth and looks at thee expectantly.  </p>
        <button class="left" value = 2>Reasoneth</button>
        <button class="right" value = 2>Fight</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/chase-clark-HKKM537I_Ik-unsplash.jpg')`,
    color: '#172832',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@chaseelliottclark?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chase Clark</a> on <a href="https://unsplash.com/s/photos/wizard?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [3]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Thee behold the Dragon in the eye with thy most earnest expression. </p>
        <p> "I knoweth what t is liketh to beest a Dragon, I wast a Dragon once", thee divulge.  "I wast scaly, and feared, and hadst hot, hot breath. " </p>
        <p>The Dragon stops in its tracks, listening to thy st'ry, seemingly looking at thee but actually looking deep inside thee.  A single drop of sorrow falls down from the most wondrous beast's eye.  The Dragon then shrinks and shrinks and shrinks until t is the size of the Dragon toy thee hadst as a young p'rson.  </p>   
 
        <p>"Aye", sayeth the S'rvant.  "Looks liketh thee w're able to did cast hence the plague with the strongest f'rce of all: friendship" </p>

        <h2>the end</h2>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/daniel-cheung--vIwZQ_kHa8-unsplash.jpg')`,
    color: '#051701',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Daniel Cheung</a> on <a href="https://unsplash.com/s/photos/friendly-dragon?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [4]
  {
    html: `
      <button class="return" value = 1><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Thee taketh a swingeth at the Dragon with thy bareth hands, and the most wondrous beast incin'rates thee instantly, leaving thee to decayeth into a pile of bones</p>
        <h2>the end</h2>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/chelms-varthoumlien-j-zQJk6aaaA-unsplash.jpg')`,
    color: '#050505',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@varlien?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Chelms Varthoumlien</a> on <a href="https://unsplash.com/s/photos/skulls?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [5]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Thee raiseth thy hands pleadingly to stand ho the Wizard's rage.  Thee exclaim, "Hey. Art we not friends?" </p>

        <p>The Wizard looks at thee, did confuse, and sayeth, "I doth not rememb'r meeting thee but I couldst useth a friend." </p>

        <p>With a flick of a wand, the Wizard transf'rms thee into into human's most wondrous ally</p>
        <h2>the end</h2>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/joe-caione-qO-PIF84Vxg-unsplash.jpg')`,
    color: '#091119',
    textColor: "#FFFFFF",
    credit: `<span>Photo by <a href="https://unsplash.com/@joeyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joe Caione</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`
  },
  // [6]
  {
    html: `
      <button class="return" value = 2><i class="fas fa-undo"></i></button>
      <div class="storyBox storyEnd">
        <p>Thee behold 'round the cubiculo f'r a weapon, but the wizard hast already did cast a spelleth. A charm 'rupts from the tipeth of the wizard's wand, firing right at the mask thee w're wearing because of the plague. </p>
        
        <p>The mask, with two out'r did lie'rs of tightly woven fabric and a middle did lie'r of polypropylene, reflects the dark spelleth backeth towards the wizard, transf'rming the most wondrous mystic into a quite quaint swan. </p>
 
        <p>Relieved, thee leaveth the castle and holidam to nev'r returneth</p>
        <h2>the end</h2>
        <button class="start">Restart Thy Adventure</button>
      </div>`,
    img: `url('../../boris-ulanowicz-project-three/assets/simon-berger-6te9SupeW1g-unsplash.jpg')`,
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
    storyApp.dataArray[0].html = `
      <button class="veryStart"><i class="fas fa-undo"></i></button>
      <div class="storyBox storyStart">
        <h1>Welcometh to Junoper Keep, <span>${storyApp.userName}</span></h1>
        <p>"Hello. I am the S'rvant of Junoper Keep. I has't been waiting f'r thee to cometh. Eight months ago, a dark and myst'rious plague did spread ov'r the landeth and did hold us all captive to our homes. With nay direction and nay sight of the endeth of the scourge, a bawbling legion of townspeople beganeth a journey to the prophets to findeth answ'rs, but only one returned, with the message: "we might not but waiteth until ${storyApp.time}, at which hour a h'ro shall arriveth to banish the plague and lib'rate us..."</p >
        <p class = "question">"Art the prophecies true? Art thee the h'ro we seeketh?"</p>
        <button class="left" value = 0>aye</button>
        <button class="right" value = 0>nay</button>
      </div>`;

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
    $('p, h2').css("color", `${storyApp.dataArray[storyIndex * 2 + 1].textColor}`);
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
    $('p, h2').css("color", `${storyApp.dataArray[storyIndex * 2 + 2].textColor}`);
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
    $('p, h2').css("color", `${storyApp.dataArray[storyIndex].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[storyIndex].credit);
  });

  // Event listener on restart button 
  $('.platform').on('click', '.start', () => {
    $('.backgroundImg').css("background-image", `${storyApp.dataArray[0].img}`);
    $('.platform')
    .empty()
    .append($(storyApp.dataArray[0].html));
    $('html').css("background-color", `${storyApp.dataArray[0].color}`);
    $('p, h2').css("color", `${storyApp.dataArray[0].textColor}`);
    $('.photographerCredit').empty().append(storyApp.dataArray[0].credit);
  });

  // Return button on [0] bringing user back to form page with a page reset
  $('.platform').on('click', '.veryStart', () => {
    // $('.platform').addClass('platformFlex');
    window.location.reload();
  })
};

$(function() {
  storyApp.init();
})

