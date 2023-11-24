var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var volumeSlider = document.getElementById("volumeSlider");

playButton.addEventListener("click", function () {
  audio.play();
});

pauseButton.addEventListener("click", function () {
  audio.pause();
});

volumeSlider.addEventListener("input", function () {
  audio.volume = volumeSlider.value;
});

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

if (screen.orientation && screen.orientation.lock) {
  // Lock the screen orientation to landscape
  screen.orientation.lock('landscape');
} else if (screen.lockOrientation) {
  // Alternative method for older browsers
  screen.lockOrientation('landscape');
}

window.addEventListener('DOMContentLoaded', () => {

  setTimeout(() => {

    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) - 300)
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {

        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000)

    setTimeout(() => {
      intro.style.top = '-100vh'
    }, 2300);
  })
})

/*Mozart */
  document.getElementById("change-color").addEventListener("click", function () {
    var cgnbtn = document.getElementById("sun");
    if (cgnbtn.style.display == "block") {
      var items = document.getElementsByClassName("gg-sun");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      var items = document.getElementsByClassName("gg-moon");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }
      var items = document.getElementsByClassName("changeblack");
      for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "black";
        items[i].style.color = "#ff4444";
      }
      var items = document.getElementsByClassName("changewhite");
      for (var i = 0; i < items.length; i++) {
        items[i].style.color = "white";
      }
      var items = document.getElementsByClassName("changebg");
      for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#444444";
      }
      var items = document.getElementsByClassName("changeborder");
      for (var i = 0; i < items.length; i++) {
        items[i].style.border = "3px solid darkgrey";
      }
      var items = document.getElementsByClassName("changeleftbox");
      for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#1f1f1f";
        items[i].style.border.right = "#1f1f1f";
      }
      var items = document.getElementsByClassName("changegif1");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
      var items = document.getElementsByClassName("changegif2");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }
      var homeimg1 = document.getElementById("homeimg1");
      if (homeimg1.style.display == "block") {
      var items = document.getElementById("homeimg1");
      items.style.display = "none";
      var items = document.getElementById("homeimg2");
      items.style.display = "block";}

      var listimg1 = document.getElementById("listimg1");
      if (listimg1.style.display == "block") {
      var items = document.getElementById("listimg1");
      items.style.display = "none";
      var items = document.getElementById("listimg2");
      items.style.display = "block";}
    
  } else if (cgnbtn.style.display == "none") {
    var items = document.getElementsByClassName("gg-sun");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }
      var items = document.getElementsByClassName("gg-moon");
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = "none";
      }
    var items = document.getElementsByClassName("changeblack");
    for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "white";
      items[i].style.color = "black";
    }
    var items = document.getElementsByClassName("changewhite");
    for (var i = 0; i < items.length; i++) {
      items[i].style.color = "black";
    }
    var items = document.getElementsByClassName("changebg");
    for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "white";
    }
    var items = document.getElementsByClassName("changeborder");
    for (var i = 0; i < items.length; i++) {
      items[i].style.border = "3px solid black";
    }
    var items = document.getElementsByClassName("changeleftbox");
    for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "darkgray";
      items[i].style.borderright = "5px solid grey";
    }
    var items = document.getElementsByClassName("changegif1");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "block";
    }
    var items = document.getElementsByClassName("changegif2");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    var homeimg = document.getElementById("homeimg2");
    if (homeimg.style.display == "block") {
    var items = document.getElementById("homeimg1");
    items.style.display = "block";
    var items = document.getElementById("homeimg2");
    items.style.display = "none";}

    var listimg = document.getElementById("listimg2");
    if (listimg.style.display == "block") {
    var items = document.getElementById("listimg1");
    items.style.display = "block";
    var items = document.getElementById("listimg2");
    items.style.display = "none";}
  }
});

function comingsoon() {
  alert("coming soon")
}


document.getElementById("Sound").addEventListener("click", function () {
  var items = document.getElementsByClassName("soundux");
    soundbox.classList.add("show");
    soundbox.classList.remove("hidden");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "block";
    items[i].style.visibility = "visible";
  }
});

document.getElementById("contactalarm").addEventListener("click", function () {
  console.log("contact clicked");
  var items = document.getElementsByClassName("contactux");
  var box = document.getElementById("alarmbox1");
  if (items.length > 0 && items[1].style.visibility === "hidden") {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "block";
      items[i].style.visibility = "visible";
    }
    box.style.visibility = "visible";
  } else {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
      items[i].style.visibility = "hidden";
    }
    box.style.visibility = "hidden";
  }
});


document.getElementById("donatealarm").addEventListener("click", function () {
  console.log("donate clicked");
  var items = document.getElementsByClassName("donateux");
  var box = document.getElementById("alarmbox2");
  if (items.length > 0 && items[1].style.visibility === "hidden") {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "block";
      items[i].style.visibility = "visible";
    }
    box.style.visibility = "visible";
  } else {
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
      items[i].style.visibility = "hidden";
    }
    box.style.visibility = "hidden";
  }
});



document.getElementById("guidealarm").addEventListener("click", function () {
  var items = document.getElementsByClassName("guideux");
    guidebox.classList.add("show");
    guidebox.classList.remove("hidden");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "block";
    items[i].style.visibility = "visible";
  }
  document.getElementById("guidetext").style.display = "block";
  var box = document.getElementById("guidebox");
  box.style.visibility = "visible";
});


var guidelang = "TH";
var guidetext = document.getElementById("guidetext");
function checklan(){
  if (guidelang === "EN") {
   guidetext.innerHTML = "1.ผู้เล่นจะได้บทบาทคนล่ะ 1 บท แต่สถานที่จะเหมือนกันทุกคน <br><br>2.จะมีผู้เล่นที่เป็น Spy ต้องสืบหาให้ได้ว่าสถานที่นี้คือที่ไหน <br><br>3.จับเวลา ใครก็ได้เริ่มถามเพื่อหาคนต้องสงสัยโดยเกี่ยวกับสถานที่และบทบาท <br><br>4.หลังจากคนถูกถามตอบ คนถูกถามต้องเป็นคนถามคนต่อไป <br><br>5.ก่อนหมดเวลาหาก Spy รู้ว่าสถานที่คือที่ไหนแล้วเปิดเผยตัวและตอบชื่อสถานที่ หากตอบถูก Spy ชนะ <br><br>6.หากหมดเวลาผู้เล่นทุกคนต้องโหวตหา Spy หากถูกต้องผู้เล่นทุกคนชนะยกเว้น Spy แต่หากผิดให้เปิดตัว Spy และให้ Spy ทายสถานที่"
   ;
   guidelang = "TH";
   console.log("changed to TH text");
  } else if (guidelang === "TH") {
   guidetext.innerHTML = "1. Each players going to get 1 role but each have same place. <br><br> 2. There will be players that are Spy ,they need to investigate to find this place. <br><br> 3. Start timer and someone need to ask for finding suspect by using question that related with place and role they are.<br><br>4. After person who were asked need to ask the question to a next person.<br><br>5. Before the timer ran out if Spy known the place they are ,Spy can reveal yourself and answer what the place it is. <br><br>6. If Timer ran out all players need to vote for finding Spy ,if correct all players won except Spy ,but if not Spy need to reveal yourself and answer the place."
   ;
   guidelang = "EN";
   console.log("changed to EN text");
  }
}

var closepopupbuttong = document.getElementById("guideclosebox");
var closepopupbutton1 = document.getElementById("closebox1");
var closepopupbutton2 = document.getElementById("closebox2");
var closepopupbackground = document.getElementById("backgroundclosebox");

var closepopup = function () {
  console.log("closing popup")
  var items = document.getElementsByClassName("contactux");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    items[i].style.visibility = "hidden";
  }
  var items = document.getElementsByClassName("donateux");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    items[i].style.visibility = "hidden";
  }
  var items = document.getElementsByClassName("guideux");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    items[i].style.visibility = "hidden";
  }
  var items = document.getElementsByClassName("soundux");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "none";
    items[i].style.visibility = "hidden";
  }
  var kbankcode = document.getElementById("kbankcode");
  kbankcode.style.display = "none";

  document.getElementById("guidetext").style.display = "none";
  var box = document.getElementById("guidebox");
  box.style.visibility = "hidden";
  console.log(box.style)
  var box = document.getElementById("alarmbox1");
  box.style.visibility = "hidden";
  console.log(box.style)
  var box = document.getElementById("alarmbox2");
  box.style.visibility = "hidden";
  console.log(box.style)
}

closepopupbuttong.addEventListener("click", closepopup);
closepopupbutton1.addEventListener("click", closepopup);
closepopupbutton2.addEventListener("click", closepopup);
closepopupbackground.addEventListener("click", closepopup);


guidealarm.addEventListener("click", () => {
  guidebox.classList.add("show");
  guidebox.classList.remove("hidden");
});

//hideleftbox
document.getElementById("hidebox").addEventListener("click", function () {
  var wqq = document.getElementById("hidebox");
  if (wqq.innerHTML == "Hide") {
    var items = document.getElementsByClassName("hideleftbox");//00000000000
          for (var i = 0; i < items.length; i++) {
            items[i].style.transform = 'translateX(-70%)';;}

    
    wqq.innerHTML = "Unhide";//unhideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  } else if (wqq.innerHTML == "Unhide") {
    wqq.innerHTML = "Hide";
    var items = document.getElementsByClassName("hideleftbox");
    for (var i = 0; i < items.length; i++) {
      items[i].style.transform = 'translateX(0%)';
    }
  }
});

var qrElements = document.getElementsByClassName("QR");
for (var i = 0; i < qrElements.length; i++) {
    qrElements[i].addEventListener("click", function () {
        var QR = document.getElementById("kbankcode");
        QR.style.display = "block";
    });
}

function toggleElements() {
  var contactElements = document.getElementsByClassName("contact");
  var donateElements = document.getElementsByClassName("donate");
  for (var i = 0; i < contactElements.length; i++) {
    if (contactElements[i].style.display === "block") {
      contactElements[i].style.display = "none";
    } else if(contactElements[i].style.display === "none"){
      contactElements[i].style.display = "block";
    }
  }

  for (var j = 0; j < donateElements.length; j++) {
    if (donateElements[j].style.display === "block") {
      donateElements[j].style.display = "none";
    } else if(donateElements[j].style.display === "none"){
      donateElements[j].style.display = "block";
    }
  }
}



//offline
function offlineon() {
  console.log("offlinemode clicked");
  var offlineintro = document.getElementById("offlineintro");
  offlineintro.style.display = "block";
  var offlineloader = document.getElementById("loader-offline");
  offlineloader.style.display = "block";
  var offlinelogo = document.getElementById("headeroffline");
  offlinelogo.style.display = "block";
  var kbankcode = document.getElementById("kbankcode");
  kbankcode.style.display = "none";


  setTimeout(function () {
    var cgnbtn = document.getElementById("sun");
    if (cgnbtn.style.display == "block") {
    var homeimg1 = document.getElementById("homeimg1");
      homeimg1.style.display = "block";}      
    else if(cgnbtn.style.display == "none") {
    var homeimg1 = document.getElementById("homeimg2");
      homeimg1.style.display = "block";}
    var Bigbutton = document.getElementsByClassName("Bigbutton");
    for (var i = 0; i < Bigbutton.length; i++) {
      Bigbutton[i].style.display = "none";
    }

    var headermiddle = document.getElementById("headermiddle");
    headermiddle.style.transform = 'translateY(-30%)';
    var csym = document.getElementById("csym");
      csym.style.transform = 'translateY(-30%)';
    var spyfalllogo2 = document.getElementById("Spyfalllogo2");
      spyfalllogo2.style.transform = 'translateY(-30%)';
    var betabutton = document.getElementById("beta");
      betabutton.style.transform = 'translateY(-30%)';
    var offlinesetting = document.getElementsByClassName("offlinesetting");
      for (var i = 0; i < offlinesetting.length; i++) {
        offlinesetting[i].style.display = "block";
        offlinesetting[i].style.visibility = "visible";
      }
  }, 2500);
}
