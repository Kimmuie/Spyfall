

var displayedNames = [];

function displayAndClear() {
    var nameInput = document.getElementById("nameInput").value;
    var items = document.getElementById("offlinebox");
    items.style.transform = "translateX(-20%)";

    if (displayedNames.length < 15) {
        if (nameInput.trim() !== "") {
            if (nameInput.length <= 16) { // Check if the name is 16 characters or fewer
                // Find the next available number
                var nextNumber = findNextNumber();

                // Add the name to the displayedNames array
                displayedNames.push({ number: nextNumber, name: nameInput });

                // Sort the displayedNames array by number
                displayedNames.sort(function (a, b) {
                    return a.number - b.number;
                });

                // Clear the input field
                document.getElementById("nameInput").value = "";
                displayNames();
                var items = document.getElementById("nameDisplay");
                items.style.display = "block";
            } else {
                // Show an alert if the name exceeds 16 characters
                alert("Please enter a name with 16 characters or fewer.");
            }
        } else {
            // Show an alert if the input is empty
            alert("Please enter a name before adding.");
        }
    } else {
        // Show an alert if the limit of 15 names has been reached
        alert("You have reached the limit of 15 players.");
    }
}    

// Function to remove a name by number
function removeName(number) {
    displayedNames = displayedNames.filter(function (item) {
        return item.number !== number;
    });

    // Renumber the remaining names
    displayedNames.forEach(function (item, index) {
        item.number = index + 1;
    });

    // Redisplay the names after removal
    displayNames();
}

// Function to display the names
function displayNames() {
    var nameDisplay = document.getElementById("nameDisplay");

    // Clear the nameDisplay div
    nameDisplay.innerHTML = "";

    // Display the sorted names with line breaks and remove buttons
    displayedNames.forEach(function (item) {
        var nameParagraph = document.createElement("p");
        nameParagraph.textContent = item.number + ". " + item.name;
        nameParagraph.classList.add("paragraph-gap"); // Add the gap class
        nameParagraph.classList.add("deletenamehover");
        nameParagraph.classList.add("nameborderlist");


        // Add a click event listener to remove the name when clicked
        nameParagraph.addEventListener("click", function () {
            removeName(item.number);
        });

        nameDisplay.appendChild(nameParagraph);
    });
}

// Function to find the next available number
function findNextNumber() {
    var usedNumbers = displayedNames.map(function (item) {
        return item.number;
    });

    for (var i = 1; i <= displayedNames.length + 1; i++) {
        if (!usedNumbers.includes(i)) {
            return i;
        }
    }
}

function createVotingSection() {
  var votingSection = document.getElementById("votingSection");

  // Clear the votingSection div
  votingSection.innerHTML = "";

  // Display the names with radio buttons for voting
  displayedNames.forEach(function (item) {
      var nameDiv = document.createElement("div");
      nameDiv.classList.add("voting-name");

      var radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "votingName";
      radioInput.value = item.number;

      var nameLabel = document.createElement("votinglabel");
      nameLabel.textContent = " " + item.number + ". " + item.name;

      nameDiv.appendChild(radioInput);
      nameDiv.appendChild(nameLabel);

      votingSection.appendChild(nameDiv);
  });
}

var movePacketCalled = false;

function packetcenter() {
    console.log("packetcenter called")
    var IPADVERmaxHeight = window.innerHeight <= 1200; // Check if window height is less than or equal to 1200
    var IPADVERorientation = window.innerWidth < window.innerHeight; // Check if the orientation is portrait

    var packet2 = document.getElementById('packet2');
    packet2.style.transition = 'ease-in-out 1s';
    var packet1 = document.getElementById('packet1');
    var packet2 = document.getElementById('packet2');
    if (IPADVERmaxHeight && IPADVERorientation) {
      packet1.style.transform = 'translateY(-140%)';
      packet2.style.transform = 'translateY(-140%)';
    }else{
      packet1.style.transform = 'translateY(-120%)';
      packet2.style.transform = 'translateY(-120%)';
    }
    var nextOfflineButton = document.getElementById("nextofflinebutton");
    nextOfflineButton.style.backgroundColor = "#ff4444";
    setTimeout(function (){
    movePacketCalled = false;
    },200);
}

function movepacket() {
    console.log("movepacket called")
    var packet1 = document.getElementById('packet1');
    packet1.style.transform = 'translateY(0%)';
    var packet2 = document.getElementById('packet2');
    packet2.style.transform = 'translateY(-120%) translateX(280%)';
    var nextOfflineButton = document.getElementById("nextofflinebutton");
    nextOfflineButton.style.backgroundColor = "lime";
    setTimeout(function (){
        var packet2 = document.getElementById('packet2');
        packet2.style.transition = 'ease-in-out 0s';
        var packet2 = document.getElementById('packet2');
        packet2.style.transform = 'translateY(0%)';
    },1001);
    setTimeout(function (){
    movePacketCalled = true;
    },200);
  }

function hidecard() {
    console.log("hidecard called")
        var carddelay = document.getElementsByClassName('carddelay');
        for (var i = 0; i < carddelay.length; i++) 
        carddelay[i].style.transition = 'ease-in-out 0s';
        var card = document.getElementsByClassName('main');
        for (var i = 0; i < card.length; i++) 
        card[i].style.top = '60%';
    var main = document.getElementsByClassName('main');
    for (var i = 0; i < main.length; i++) 
    main[i].style.display = 'none';
    }

function cardcenter() {
    console.log("cardcenter called")
    var card = document.getElementsByClassName('main');
    for (var i = 0; i < card.length; i++)
    card[i].style.top = '0%';
    setTimeout(function (){
        for (var i = 0; i < card.length; i++) 
        card[i].style.display = 'block';
    },1250);
}

var listImages = document.getElementsByClassName("List");
  for (var i = 0; i < listImages.length; i++) {
  listImages[i].addEventListener("click", function () {
  hidecard();
  movepacket()
  var playernamecheck = document.getElementById("playernamecheck");
  playernamecheck.style.display = "none";
  var nextofflinebutton = document.getElementById("nextofflinebutton");
  nextofflinebutton.style.display = "none";
  var items = document.getElementById("offlinebox");
  items.style.top = "25%";
  });
}

  function startGame() {
    if (displayedNames.length < 3) {
        alert("You need at least 3 players to start the game.");
    } else if (displayedNames.length >= 3) {
        console.log("Game Start");
        var listimg1 = document.getElementById("listimg1");
        listimg1.style.display = "block";
        var playernamecheck = document.getElementById("playernamecheck");
        playernamecheck.style.display = "block";
        var nextofflinebutton = document.getElementById("nextofflinebutton");
        nextofflinebutton.style.display = "block";
        let role;

        if (chosenPlace === '<br>Hospital') {
            role = Hospitalrole;
            placeimg.src = "zHospital.png";
        } else if (chosenPlace === '<br>School') {
            role = Schoolrole;
            placeimg.src = "zSchool.png";
        } else if (chosenPlace === '<br>Space Station') {
            placeimg.src = "zSpacestation.png";
            role = SpaceStationrole;
        } else if (chosenPlace === '<br>Bank') {
            role = Bankrole;
            placeimg.src = "zBank.png";
        } else if (chosenPlace === '<br>Supermarket') {
            role = SupermarketRole;
            placeimg.src = "zSupermarket.png";
        } else if (chosenPlace === '<br>Beach') {
            role = Beachrole;
            placeimg.src = "zBeach.png";
        }

const randomRole = Math.floor(Math.random() * role.length);
const chosenRole = role[randomRole];

const randomSpyIndex = Math.floor(Math.random() * displayedNames.length);

document.getElementById("confirmvote").addEventListener("click", function () {
  var anyRadioButtonChecked = document.querySelector('input[name="votingName"]:checked');
  if (anyRadioButtonChecked) {
    console.log("The radio button is checked.");
    
    // Convert randomSpyIndex to a string for comparison
    var randomSpyIndexString = (randomSpyIndex + 1).toString(); // Assuming randomSpyIndex is 0-based
    
    if (anyRadioButtonChecked.value === randomSpyIndexString) {
      alert("Congrats! Spy has been caught.");
    } else {
      alert("Spy has won!");
    }
  } else {
    alert("Please select a spy before confirming.");
  }
});


        let currentIdx = 0;
        var currentPlayer = displayedNames[currentIdx];
        var nextButton = document.getElementById("nextofflinebutton");
        nextButton.addEventListener("click", function () {
            console.log("Next Player");
            if (!movePacketCalled) {
                alert("Please open the packet first.");
            //noplayerleft
            }else{
              var listimg1 = document.getElementById("listimg1");
              listimg1.style.display = "none";
              var listimg2 = document.getElementById("listimg2");
              listimg2.style.display = "none";
                currentIdx = (currentIdx + 1) % displayedNames.length;
                if(currentIdx === displayedNames.length - 1){
                  var nextofflinebutton = document.getElementById("nextofflinebutton");
                  nextofflinebutton.innerHTML = "Start Timer";
                  }
                  if(currentIdx == 0){
                    var playernamecheck = document.getElementById("playernamecheck");
                    playernamecheck.style.display = "none";
                    var nextButton = document.getElementById("nextofflinebutton");
                    nextButton.style.display = "none";
                    var packet1 = document.getElementById("packet1");
                    packet1.style.display = "none";
                    var packet2 = document.getElementById("packet2");
                    packet2.style.display = "none";
                    var main = document.getElementsByClassName("main");
                    for (var i = 0; i < main.length; i++) 
                    main[i].style.display = "none";
                    hidecard();
                    gettime();
                    var vote = document.getElementById("vote");
                    vote.style.display = "block";
                }else{
                currentPlayer = displayedNames[currentIdx];
                console.log("Current Player:", currentPlayer);
                hidecard()
                setTimeout(function () {    
                    packetcenter(); 
                    cardcenter();
                }, 200);
            }

                if (currentIdx !== randomSpyIndex) {
                    if (chosenPlace === '<br>Hospital') {
                        placeimg.src = "zHospital.png";
                    } else if (chosenPlace === '<br>School') {
                        placeimg.src = "zSchool.png";
                    } else if (chosenPlace === '<br>Space Station') {
                        placeimg.src = "zSpacestation.png";
                    } else if (chosenPlace === '<br>Bank') {
                        placeimg.src = "zBank.png";
                    } else if (chosenPlace === '<br>Supermarket') {
                        placeimg.src = "zSupermarket.png";
                    } else if (chosenPlace === '<br>Beach') {
                        placeimg.src = "zBeach.png";
                    }
                }
            var items = document.getElementsByClassName("card-front__tp--ski");
            for (var i = 0; i < items.length; i++) {
                items[i].style.background = "#ff4444";
            }
        
            var cardplayername = document.getElementById("cardplayername");
            cardplayername.innerHTML = currentPlayer.number + ". " + currentPlayer.name;
        
            var playernamecheck = document.getElementById("playernamecheck");
            playernamecheck.innerHTML = currentPlayer.number + "." + currentPlayer.name;
        
            var Placeinner = document.getElementById("Placeinner");
            if (currentIdx === randomSpyIndex) {
                Placeinner.innerHTML = "";
                placeimg.src = "zSpy.png";
                var items = document.getElementsByClassName("card-front__tp--ski");
                for (var i = 0; i < items.length; i++) {
                    items[i].style.background = "#191919";
                }
            } else {
                Placeinner.innerHTML = chosenPlace;
            }
        
            const randomRole = Math.floor(Math.random() * role.length);
            const chosenRole = role[randomRole];
            var Roleinner = document.getElementById("Roleinner");
            var Placeinner = document.getElementById("Placeinner");
            if (currentIdx === randomSpyIndex) {
                Placeinner.innerHTML = "Spy";
                Roleinner.innerHTML = "";
            } else {
                Roleinner.innerHTML = chosenRole.roleused + chosenRole.thairoleused;
            }
        
            var Roledescription = document.getElementById("Roledescription");
            if (currentIdx === randomSpyIndex) {
                Roledescription.innerHTML = 'Defend your role if suspected, guess the location wisely.<br>' + '<br>ป้องกันบทบาทของคุณหากมีข้อสงสัย เดาสถานที่อย่างมีเหตุผล';
            } else {
                Roledescription.innerHTML = chosenRole.roledescriptionused;
            }
            

    }});
        //ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

        var cardplayername = document.getElementById("cardplayername");
        cardplayername.innerHTML = currentPlayer.number + ". " + currentPlayer.name;

        var playernamecheck = document.getElementById("playernamecheck");
        playernamecheck.innerHTML = currentPlayer.number + "." + currentPlayer.name;

        var Placeinner = document.getElementById("Placeinner");
        if (currentIdx === randomSpyIndex) {
            Placeinner.innerHTML = "";
            placeimg.src = "zSpy.png";
            var items = document.getElementsByClassName("card-front__tp--ski");
            for (var i = 0; i < items.length; i++) {
                items[i].style.background = "#191919";}
        } else {
            Placeinner.innerHTML = chosenPlace;
        }

        var Roleinner = document.getElementById("Roleinner");
        var Placeinner = document.getElementById("Placeinner");
        if (currentIdx === randomSpyIndex) {
            Placeinner.innerHTML = "Spy";
            Roleinner.innerHTML = "";
        } else {
            Roleinner.innerHTML = chosenRole.roleused + chosenRole.thairoleused;
        }

        var Roledescription = document.getElementById("Roledescription");
        if (currentIdx === randomSpyIndex) {
            Roledescription.innerHTML = 'Defend your role if suspected, guess the location wisely.<br>'+'<br>ป้องกันบทบาทของคุณหากมีข้อสงสัย เดาสถานที่อย่างมีเหตุผล';
        } else {
            Roledescription.innerHTML = chosenRole.roledescriptionused;
        }
        

        setTimeout(function () {
            packetcenter(); 
            cardcenter();
        }, 500);

        var playershow = document.getElementById("playershow");
        playershow.style.top = "50%";
        var items = document.getElementById("offlinebox");
        items.style.top = "100%";

        var itemsTabPlayer = document.getElementById("offlineboxtabplayer");
        itemsTabPlayer.style.top = "100%";
        var nextofflinebutton = document.getElementById("nextofflinebutton");
        nextofflinebutton.style.display = "block";
    }
}


const place = [ '<br>Hospital',
                '<br>School' ,
                '<br>Space Station',
                '<br>Bank',
                '<br>Supermarket',
                '<br>Beach'];
const randomPlace = Math.floor(Math.random() * place.length);
const chosenPlace = place[randomPlace];


const Hospitalrole = [  
    {roleused: 'Doctor'             ,thairoleused: '<br><span class="small-text">(แพทย์)</span>'
    ,roledescriptionused: 'Medical professionals who diagnose and treat patients.<br>'+'<br>ผู้เชี่ยวชาญด้านการแพทย์ที่รักษาโรคและบาดเจ็บของผู้ป่วย'},
    {roleused: 'Nurse'              ,thairoleused: '<br><span class="small-text">(พยาบาล)</span>'
    ,roledescriptionused: 'Healthcare providers who care for patients and assist doctors.<br>'+'<br>ผู้ดูแลผู้ป่วยและให้การช่วยเหลือแก่แพทย์ในการดูแลสุขภาพ'},
    {roleused: 'Patient'            ,thairoleused: '<br><span class="small-text">(ผู้ป่วย)</span>'
    ,roledescriptionused: 'Individuals receiving medical treatment or care.<br>'+'<br>บุคคลที่รับการรักษาเนื่องจากมีอาการป่วยหรือบาดเจ็บ'},
    {roleused: 'Surgeon'            ,thairoleused: '<br><span class="small-text">(หมอผ่าตัด)</span>'
    ,roledescriptionused: 'Doctors specialized in surgical procedures.<br>'+'<br>แพทย์ที่ดำเนินการผ่าตัดเพื่อรักษาโรคหรือบาดเจ็บ'},
    {roleused: 'Anesthesiologist'   ,thairoleused: '<br><span class="small-text">(แพทย์ดมยาสลบ)</span>'
    ,roledescriptionused: 'Medical experts in administering anesthesia.<br>'+'<br>ผู้เชี่ยวชาญด้านการให้ยาชนิดลดความรู้สึกในผู้ป่วยในขณะที่ผ่าตัดหรือกระบวนการทางการแพทย์'},
    {roleused: 'Radiologist'        ,thairoleused: '<br><span class="small-text">(แพทย์รังสี)</span>'
    ,roledescriptionused: 'Physicians interpreting medical imaging.<br>'+'<br>แพทย์ที่ใช้รังสีเพื่อวินิจฉัยโรคและสถานะสุขภาพของผู้ป่วย'},
    {roleused: 'Pharmacist'         ,thairoleused: '<br><span class="small-text">(เภสัชกร)</span>'
    ,roledescriptionused: 'Professionals dispensing medications.<br>'+'<br>ผู้ให้ยาและให้คำแนะนำเกี่ยวกับการใช้ยาในผู้ป่วย'},
    {roleused: 'Paramedic'          ,thairoleused: '<br><span class="small-text">(ผู้ช่วยแพทย์)</span>'
    ,roledescriptionused: 'First responders providing emergency medical care.<br>'+'<br>ผู้ให้บริการการดูแลระหว่างการขนส่งผู้ป่วยหรืออุบัติเหตุ'},
    {roleused: 'Lab Technician'     ,thairoleused: '<br><span class="small-text">(ช่างสิ่ววิทยา)</span>'
    ,roledescriptionused:'Experts conducting medical tests.<br>'+'<br>ทำงานในห้องปฏิบัติการเพื่อวิเคราะห์ตัวอย่างทางการแพทย์'},
    {roleused: 'Hospital Director'  ,thairoleused: '<br><span class="small-text">(ผู้อำนวยการโรงพยาบาล)</span>'
    ,roledescriptionused: 'Administrators overseeing hospital operations.<br>'+'<br>ผู้บริหารหรือผู้ดูแลการทำงานของโรงพยาบาล'},
    {roleused: 'Janitor'            ,thairoleused: '<br><span class="small-text">(คนทำความสะอาด)</span>'
    ,roledescriptionused: 'Individuals maintaining hospital cleanliness.<br>'+'<br>คนทำความสะอาดและบำรุงรักษาความสะอาดในโรงพยาบาล'},
    {roleused: 'Security Guard'     ,thairoleused: '<br><span class="small-text">(ยาม)</span>'
    ,roledescriptionused: 'Personnel ensuring hospital security.<br>'+'<br>คนรักษาความปลอดภัยในโรงพยาบาล'},
    {roleused: 'Medical Student'    ,thairoleused: '<br><span class="small-text">(นักศึกษาแพทยศาสตร์)</span>'
    ,roledescriptionused: 'Students studying medicine.<br>'+'<br>คนที่กำลังเรียนรู้เกี่ยวกับการแพทย์'},
    {roleused: 'Hospital Volunteer' ,thairoleused: '<br><span class="small-text">(อาสาสมัครโรงพยาบาล)</span>'
    ,roledescriptionused: 'Volunteers assisting in hospital tasks.<br>'+'<br>คนที่ทำงานเป็นอาสาสมัครในโรงพยาบาลเพื่อช่วยเหลือผู้ป่วย'},
    {roleused: 'Physical Therapist' ,thairoleused: '<br><span class="small-text">(นักกายภาพบำบัด)</span>'
    ,roledescriptionused: 'Specialists in physical rehabilitation.<br>'+'<br>ช่วยผู้ป่วยกู้คืนสุขภาพและความสามารถทางกาย'},
    {roleused: 'Psychologist'       ,thairoleused: '<br><span class="small-text">(นักจิตวิทยา)</span>'
    ,roledescriptionused: 'Professionals specializing in psychology.<br>'+'<br>ผู้เชี่ยวชาญในด้านจิตวิทยาและการสัมผัส'},
    {roleused: 'Cafeteria Cook'     ,thairoleused: '<br><span class="small-text">(กุ๊กโรงอาหาร)</span>'
    ,roledescriptionused: 'Staff preparing hospital meals.<br>'+'<br>ทำอาหารในโรงพยาบาล'},
    {roleused: 'Visitor'            ,thairoleused: '<br><span class="small-text">(ผู้เยี่ยมชม)</span>'
    ,roledescriptionused: 'Individuals coming to see patients.<br>'+'<br>คนที่มาเยี่ยมผู้ป่วยในโรงพยาบาล'},
    {roleused: 'Chaplain'           ,thairoleused: '<br><span class="small-text">(นักบวช)</span>'
    ,roledescriptionused: 'Spiritual advisors offering support.<br>'+'<br>บุคคลที่ให้คำปรึกษาทางศาสนาและสอนคุณค่าทางจิตใจในโรงพยาบาล'},
    {roleused: 'Ambulance Driver'   ,thairoleused: '<br><span class="small-text">(คนขับรถพยาบาล)</span>'
    ,roledescriptionused: 'Drivers of medical transport vehicles.<br>'+'<br>คนที่ขับรถพยาบาลเพื่อนำผู้ป่วยไปยังโรงพยาบาลหรือสถานที่การแพทย์'},
];     

const Schoolrole = [
    {roleused: 'Teacher'           ,thairoleused: '<br><span class="small-text">(ครู)</span>'
    ,roledescriptionused: 'Educators who guide students learning and critical thinking.<br>'+'<br>ผู้สอนและให้คำแนะนำในการเรียนรู้แก่นักเรียน'},
    {roleused: 'Student'           ,thairoleused: '<br><span class="small-text">(นักเรียน)</span>'
    ,roledescriptionused: 'The learners in a school environment.<br>'+'<br>ผู้เรียนในโรงเรียน'},
    {roleused: 'Principal'         ,thairoleused: '<br><span class="small-text">(ผู้อำนวยการ)</span>'
    ,roledescriptionused: 'School top administrator and visionary leader.<br>'+'<br>ผู้บริหารโรงเรียน'},
    {roleused: 'Cafeteria Cook'    ,thairoleused: '<br><span class="small-text">(กุ๊กโรงอาหาร)</span>'
    ,roledescriptionused: 'Prepares school meals for students.<br>'+'<br>ทำอาหารในโรงเรียน' },
    {roleused: 'Janitor'           ,thairoleused: '<br><span class="small-text">(คนทำความสะอาด)</span>'
    ,roledescriptionused: 'Maintains school cleanliness and hygiene.<br>'+'<br>คนทำความสะอาดและบำรุงรักษาความสะอาดในโรงเรียน' },
    {roleused: 'School Nurse'      ,thairoleused: '<br><span class="small-text">(พยาบาลโรงเรียน)</span>'
    ,roledescriptionused: 'Provides healthcare and first aid in school.<br>'+'<br>ให้บริการดูแลสุขภาพในโรงเรียน' },
    {roleused: 'Librarian'         ,thairoleused: '<br><span class="small-text">(บรรณารักษ์)</span>'
    ,roledescriptionused: 'Manages the school library and resources.<br>'+'<br>ดูแลห้องสมุดและหนังสือในโรงเรียน'},
    {roleused: 'Parent'            ,thairoleused: '<br><span class="small-text">(ผู้ปกครอง)</span>'
    ,roledescriptionused: 'Supports students educational journey.<br>'+'<br>บุคคลที่มีนักเรียนในโรงเรียน'},
    {roleused: 'Guard'             ,thairoleused: '<br><span class="small-text">(ยาม)</span>'
    ,roledescriptionused: 'Ensures school security.<br>'+'<br>รักษาความปลอดภัยในโรงเรียน' },
    {roleused: 'Bus Driver'        ,thairoleused: '<br><span class="small-text">(คนขับรถโรงเรียน)</span>'
    ,roledescriptionused: 'Safely transports students.<br>'+'<br>ทำหน้าที่ขนนักเรียนไป-กลับจากโรงเรียน'},
    {roleused: 'Counselor Teacher' ,thairoleused: '<br><span class="small-text">(ครูแนะแนว)</span>'
    ,roledescriptionused: 'Offers guidance and counseling.<br>'+'<br>ให้คำปรึกษาและแนะนำนักเรียนในด้านการเรียน'},
    {roleused: 'Biology Teacher'   ,thairoleused: '<br><span class="small-text">(ครูชีวะ)</span>'
    ,roledescriptionused: 'Teaches biology concepts.<br>'+'<br>สอนเนื้อหาทางชีววิทยาให้นักเรียน'},
    {roleused: 'Physic Teacher'    ,thairoleused: '<br><span class="small-text">(ครูฟิสิกส์)</span>'
    ,roledescriptionused: 'Imparts physics knowledge.<br>'+'<br>สอนเนื้อหาทางฟิสิกส์ให้นักเรียน' },
    {roleused: 'Chemistry Teacher' ,thairoleused: '<br><span class="small-text">(ครูเคมี)</span>'
    ,roledescriptionused: 'Educates about chemistry.<br>'+'<br>สอนเนื้อหาทางเคมีให้นักเรียน' },
    {roleused: 'Art Teacher'       ,thairoleused: '<br><span class="small-text">(ครูศิลปะ)</span>'
    ,roledescriptionused: 'Nurtures artistic creativity.<br>'+'<br>สอนเนื้อหาทางศิลปะให้นักเรียน' },
    {roleused: 'Music Teacher'     ,thairoleused: '<br><span class="small-text">(ครูดนตรี)</span>'
    ,roledescriptionused: 'Instructs in music and rhythm.<br>'+'<br>สอนเนื้อหาทางดนตรีให้นักเรียน' },
    {roleused: 'PE Teacher'        ,thairoleused: '<br><span class="small-text">(ครูพละ)</span>'
    ,roledescriptionused: 'Promotes physical fitness.<br>'+'<br>สอนเนื้อหาทางพละให้นักเรียน' },
    {roleused: 'Math Teacher'      ,thairoleused: '<br><span class="small-text">(ครูคณิตศาสตร์)</span>'
    ,roledescriptionused: 'Teaches math and problem-solving.<br>'+'<br>สอนเนื้อหาทางคณิตให้นักเรียน' },
    {roleused: 'History Teacher'   ,thairoleused: '<br><span class="small-text">(ครูประวัติศาสตร์)</span>'
    ,roledescriptionused: 'Teaches the past.<br>'+'<br>สอนเนื้อหาทางประวัติศาสตร์ให้นักเรียน' },
    {roleused: 'Computer Teacher'  ,thairoleused: '<br><span class="small-text">(ครูคอมพิวเตอร์)</span>'
    ,roledescriptionused: 'Teaches technology and coding.<br>'+'<br>สอนเนื้อหาทางคอมพิวเตอร์ให้นักเรียน' },
];                              

const SpaceStationrole = [
    {roleused: 'Astronaut'                ,thairoleused: '<br><span class="small-text">(นักบินอวกาศ)</span>'
    ,roledescriptionused:'Individuals trained to travel into space and perform various activities there.<br>'+'<br>ผู้ที่ได้รับการฝึกอบรมเพื่อเดินทางไปยังอวกาศเพื่อดำเนินกิจกรรมต่าง ๆ ในอวกาศ'},
    {roleused: 'Mission Commander'        ,thairoleused: '<br><span class="small-text">(ผู้บังคับการภารกิจ)</span>'
    ,roledescriptionused:'Responsible for leading and overseeing space missions.<br>'+'<br>ผิดชอบในการนำและกำกับภารกิจอวกาศ'},
    {roleused: 'Alien'                    ,thairoleused: '<br><span class="small-text">(เอเลี่ยน)</span>'
    ,roledescriptionused:'Extraterrestrial life forms from outside Earth.<br>'+'<br>สิ่งมีชีวิตนอกโลก'},
    {roleused: 'Astrobiologist'           ,thairoleused: '<br><span class="small-text">(นักชีวศาสตร์อวกาศ)</span>'
    ,roledescriptionused:'Scientists who study extraterrestrial life and environments on other celestial bodies.<br>'+'<br>ศึกษาชีวิตนอกโลกและสภาวะสภาพแวดล้อมที่สว่างอย่างอุดมสมบูรณ์บนดาวอื่น ๆ'},
    {roleused: 'Space Scientist'          ,thairoleused: '<br><span class="small-text">(นักวิทยาศาสตร์อวกาศ)</span>'
    ,roledescriptionused:'Researchers who study space-related phenomena and celestial bodies.<br>'+'<br>วิจัยและทดลองทางดาราศาสตร์ที่เกี่ยวข้องกับอวกาศและสวรรค์ทางดาราศาสตร์อื่น ๆ'},
    {roleused: 'Payload Specialist'       ,thairoleused: '<br><span class="small-text">(นักวิชาการเครื่องบรรจุ)</span>'
    ,roledescriptionused:'Professionals responsible for managing and operating scientific experiments and equipment on spacecraft.<br>'+'<br>รับผิดชอบการจัดการและการทำงานกับการทดลองและอุปกรณ์วิทยาศาสตร์บนยานอวกาศ'},
    {roleused: 'Communicationist'   ,thairoleused: '<br><span class="small-text">(เจ้าหน้าที่สื่อสาร)</span>'
    ,roledescriptionused:'Responsible for maintaining and controlling communications during space missions.<br>'+'<br>รับผิดชอบในการรักษาสื่อสารและควบคุมการสื่อสารในภารกิจอวกาศ'},
    {roleused: 'Mission Operator'         ,thairoleused: '<br><span class="small-text">(ผู้ควบคุมการภารกิจ)</span>'
    ,roledescriptionused:'Responsible for managing various operations during space missions.<br>'+'<br>รับผิดชอบในการดำเนินการต่าง ๆ ในภารกิจอวกาศ'},
    {roleused: 'Medical Officer'          ,thairoleused: '<br><span class="small-text">(เจ้าหน้าที่แพทย์)</span>'
    ,roledescriptionused:'Professionals responsible for the health and well-being of astronauts and mission personnel.<br>'+'<br>รับผิดชอบดูแลสุขภาพของนักบินและภารกิจ'},
    {roleused: 'Biomedical Scientist'     ,thairoleused: '<br><span class="small-text">(นักวิทยาศาสตร์ชีวแพทย์)</span>'
    ,roledescriptionused:' Scientists specializing in medical and health-related research in space and celestial environments.<br>'+'<br>ศึกษาการแพทย์และสุขภาพในอวกาศและสวรรค์'},
    {roleused: 'Astrophysicist'           ,thairoleused: '<br><span class="small-text">(นักฟิสิกส์ดาราศาสตร์)</span>'
    ,roledescriptionused:'Scientists who study astrophysics, the physics of celestial bodies and the universe.<br>'+'<br>ศึกษาดาราศาสตร์และกฎกลึงทางฟิสิกส์ที่มีผลต่ออวกาศและวิวัฒนาการของดวงดาว'},
    {roleused: 'Space Engineer'           ,thairoleused: '<br><span class="small-text">(วิศวกรอวกาศ)</span>'
    ,roledescriptionused:'Engineers who design and build spacecraft and related equipment.<br>'+'<br>ออกแบบและสร้างอุปกรณ์และยานอวกาศ'},
    {roleused: 'Navigation Specialist'    ,thairoleused: '<br><span class="small-text">(นักชี้นำ)</span>'
    ,roledescriptionused:'Experts in guiding spacecraft to their intended destinations in space.<br>'+'<br>นำทางในอวกาศเพื่อให้ยานอวกาศเดินทางไปยังจุดที่ต้องการ'},
    {roleused: 'Space Psychologist'       ,thairoleused: '<br><span class="small-text">(นักจิตวิทยาอวกาศ)</span>'
    ,roledescriptionused:'Cares for astronauts mental health.<br>'+'<br>ศึกษาสุขภาพจิตของนักบินในอวกาศ'},
    {roleused: 'Supply Officer'           ,thairoleused: '<br><span class="small-text">(เจ้าหน้าที่ซัพพลาย)</span>'
    ,roledescriptionused:'Manages mission supplies and equipment.<br>'+'<br>จัดหาพัสดุในอวกาศเพื่อรองรับภารกิจ'},
    {roleused: 'Astrogeologist'           ,thairoleused: '<br><span class="small-text">(นักธรณีวิทยาดาราศาสตร์)</span}'
    ,roledescriptionused:'Studies celestial bodies geology.<br>'+'<br>ศึกษาสภาพธรณีวิทยาของดวงดาวและสวรรค์'},
    {roleused: 'Flight Surgeon'           ,thairoleused: '<br><span class="small-text">(แพทย์ดูแลอวกาศ)</span>'
    ,roledescriptionused:'Monitors astronaut health in space.<br>'+'<br>ดูแลสุขภาพของนักบินในอวกาศและบริเวณด้วย'},
    {roleused: 'Space Chef'               ,thairoleused: '<br><span class="small-text">(เชฟอวกาศ)</span>'
    ,roledescriptionused:'Prepares meals for space missions.<br>'+'<br>รับผิดชอบการเตรียมอาหารในสถานที่ที่ไม่มีแร่และโปรตีนในอวกาศ'},
    {roleused: 'Space Tourist'            ,thairoleused: '<br><span class="small-text">(นักท่องเที่ยวอวกาศ)</span>'
    ,roledescriptionused:'Enjoys recreational space travel.<br>'+'<br>เดินทางไปยังอวกาศเพื่อสัมผัสประสบการณ์ไม่เหมือนใคร'},
    {roleused: 'Space Station Janitor'    ,thairoleused: '<br><span class="small-text">(ภารโรงสถานีอวกาศ)</span>'
    ,roledescriptionused:'Maintains space station cleanliness.<br>'+'<br>ดูแลความสะอาดในสถานีอวกาศและรักษาสภาพแวดล้อมในระบบปิด'},
];

const Bankrole = [
    {roleused: 'Bank Teller'          ,thairoleused: '<br><span class="small-text">(พนักงานสาขาธนาคาร)</span>'
    ,roledescriptionused:'Responsible for assisting bank customers with their financial transactions.<br>'+'<br>รับผิดชอบในการช่วยลูกค้าธนาคารในการทำธุรกรรมทางการเงินของพวกเขา'},
    {roleused: 'Loan Officer'         ,thairoleused: '<br><span class="small-text">(เจ้าหน้าที่อนุมัติสินเชื่อ)</span>'
    ,roledescriptionused:'Evaluates and approves loan applications for individuals and businesses.<br>'+'<br>ประเมินและอนุมัติการสมัครสินเชื่อสำหรับบุคคลและธุรกิจ'},
    {roleused: 'Branch Manager'       ,thairoleused: '<br><span class="small-text">(ผู้จัดการสาขาธนาคาร)</span>'
    ,roledescriptionused:'Manages the daily operations of a bank branch.<br>'+'<br>จัดการกับการดำเนินงานประจำวันของสาขาธนาคาร'},
    {roleused: 'Financial Advisor'    ,thairoleused: '<br><span class="small-text">(ที่ปรึกษาทางการเงิน)</span>' 
    ,roledescriptionused:'Provides financial advice and investment recommendations to clients.<br>'+'<br>ให้คำแนะนำทางการเงินและข้อเสนอแนะในการลงทุนแก่ลูกค้า'},
    {roleused: 'Credit Analyst'       ,thairoleused: '<br><span class="small-text">(นักวิเคราะห์เครดิต)</span>'   
    ,roledescriptionused:'Analyzes the creditworthiness of individuals and businesses.<br>'+'<br>วิเคราะห์ความคุ้มครองในการให้สินเชื่อแก่บุคคลและธุรกิจ'},
    {roleused: 'Bank Auditor'         ,thairoleused: '<br><span class="small-text">(ผู้ตรวจสอบธนาคาร)</span>'  
    ,roledescriptionused:'Conducts internal audits to ensure compliance and financial accuracy.<br>'+'<br>ดำเนินการตรวจสอบภายในเพื่อให้มั่นใจในการปฏิบัติตามกฏระเบียบและความถูกต้องทางการเงิน'},
    {roleused: 'Investment Banker'    ,thairoleused: '<br><span class="small-text">(นักลงทุนธนาคาร)</span>'    
    ,roledescriptionused:'Manages financial transactions for corporate clients and offers investment advice.<br>'+'<br>จัดการธุรกรรมทางการเงินสำหรับลูกค้าบริษัทและให้คำแนะนำในการลงทุน'},
    {roleused: 'Mortgage Broker'      ,thairoleused: '<br><span class="small-text">(โบรกเกอร์สินเชื่อบ้าน)</span>'
    ,roledescriptionused:'Helps individuals find and secure mortgage loans.<br>'+'<br>ช่วยให้บุคคลค้นหาและรับสินเชื่อจดจำนอง'},
    {roleused: 'Financial Analyst'    ,thairoleused: '<br><span class="small-text">(นักวิเคราะห์การเงิน)</span>'  
    ,roledescriptionused:'Analyzes financial data and provides insights for investment decisions.<br>'+'<br>วิเคราะห์ข้อมูลการเงินและให้ข้อมูลเชิงลึกสำหรับการตัดสินใจในการลงทุน'},
    {roleused: 'Security Guard'       ,thairoleused: '<br><span class="small-text">(ยาม)</span>'             
    ,roledescriptionused:'Ensures the safety and security of a bank premises and customers.<br>'+'<br>รักษาความปลอดภัยและความมั่นคงของที่ตั้งและลูกค้าของธนาคาร'},
    {roleused: 'Treasury Analyst'     ,thairoleused: '<br><span class="small-text">(นักวิเคราะห์สินทรัพย์)</span>' 
    ,roledescriptionused:'Manages a company financial assets and cash flow.<br>'+'<br>จัดการทรัพยากรการเงินและกระแสเงินสดของบริษัท'},
    {roleused: 'Commercial Banker'    ,thairoleused: '<br><span class="small-text">(นักธุรกิจธนาคาร)</span>'   
    ,roledescriptionused:'Provides financial services and loans to businesses.<br>'+'<br>ให้บริการทางการเงินและสินเชื่อแก่ธุรกิจ'}, 
    {roleused: 'Financial Planner'    ,thairoleused: '<br><span class="small-text">(นักวางแผนการเงิน)</span>'  
    ,roledescriptionused:'Helps individuals and businesses create financial plans and achieve financial goals.<br>'+'<br>ช่วยให้บุคคลและธุรกิจสร้างแผนการเงินและบรรลุเป้าหมายทางการเงิน'},
    {roleused: 'Credit Manager'       ,thairoleused: '<br><span class="small-text">(ผู้จัดการแผนกเครดิต)</span>' 
    ,roledescriptionused:'Manages a company credit policies and evaluates credit risks.<br>'+'<br>จัดการนโยบายเครดิตของบริษัทและประเมินความเสี่ยงทางเครดิต'},
    {roleused: 'Depositor'            ,thairoleused: '<br><span class="small-text">(ผู้ฝากเงิน)</span>'         
    ,roledescriptionused:'Individuals or businesses that deposit money into a bank.<br>'+'<br>บุคคลหรือธุรกิจที่ฝากเงินในธนาคาร'},
    {roleused: 'ฺBranch Administrator' ,thairoleused: '<br><span class="small-text">(ผู้ดูแลสาขา)</span>'       
    ,roledescriptionused:'Responsible for administrative tasks within a bank branch.<br>'+'<br>รับผิดชอบงานด้านการบริหารที่สาขาธนาคาร'},
    {roleused: 'Investment Analyst'   ,thairoleused: '<br><span class="small-text">(นักวิเคราะห์การลงทุน)</span>'
    ,roledescriptionused:'Analyzes investments and provides recommendations for portfolio management.<br>'+'<br>วิเคราะห์การลงทุนและให้ข้อเสนอแนะในการบริหารพอร์ตการลงทุน'},
    {roleused: 'Millionaire'          ,thairoleused: '<br><span class="small-text">(เศรษฐี)</span>'           
    ,roledescriptionused:'A person with a net worth of one million or more.<br>'+'<br>บุคคลที่มีสุทธินิยมเป็นหนึ่งล้านหรือมากกว่า'},
    {roleused: 'Risk Analyst'         ,thairoleused: '<br><span class="small-text">(นักวิเคราะห์ความเสี่ยง)</span>'
    ,roledescriptionused:'Assesses and manages risks associated with financial activities.<br>'+'<br>ประเมินและจัดการความเสี่ยงที่เกี่ยวข้องกับกิจกรรมทางการเงิน'},
    {roleused: 'Financial Controller' ,thairoleused: '<br><span class="small-text">(ผู้ควบคุมการเงิน)</span>'  
    ,roledescriptionused:'Oversees a company financial operations and reporting.<br>'+'<br>ควบคุมกิจกรรมทางการเงินและรายงานของบริษัท'},  
];

const SupermarketRole = [
    {roleused: 'Cashier'               ,thairoleused: '<br><span class="small-text">(พนักงานเก็บเงิน)</span>'      
    ,roledescriptionused: 'Cashiers handle customer payments at checkout.<br>'+'<br>พนักงานรับเงินจ่ายเงินให้กับลูกค้าที่จุดจ่ายเงิน'},   
    {roleused: 'Store Manager'         ,thairoleused: '<br><span class="small-text">(ผู้จัดการร้านสุขภัณฑ์)</span>'      
    ,roledescriptionused: 'Store Managers oversee daily store operations.<br>'+'<br>ผู้จัดการร้านค้าควบคุมการดำเนินงานประจำวันของร้าน'},   
    {roleused: 'Stock Clerk'           ,thairoleused: '<br><span class="small-text">(พนักงานเก็บรายการสินค้า)</span>'  
    ,roledescriptionused: 'Stock Clerks manage inventory and restocking.<br>'+'<br>พนักงานจัดเก็บคลังสินค้าจัดการสินค้าในคลังและการเติมสินค้า'},   
    {roleused: 'Customer Service'      ,thairoleused: '<br><span class="small-text">(ตัวแทนบริการลูกค้า)</span>'      
    ,roledescriptionused: 'Customer Service assists and supports customers.<br>'+'<br>บริการลูกค้าให้ความช่วยเหลือและสนับสนุนลูกค้า'},   
    {roleused: 'Deli Worker'           ,thairoleused: '<br><span class="small-text">(พนักงานร้านของสด)</span>'      
    ,roledescriptionused: 'Deli Workers prepare and serve deli items.<br>'+'<br>พนักงานร้านอาหารที่เตรียมและเสิร์ฟอาหารอาหารบริเวณร้านอาหาร'},   
    {roleused: 'Bakery Staff'          ,thairoleused: '<br><span class="small-text">(พนักงานร้านเบเกอรี่)</span>'      
    ,roledescriptionused: 'Bakery Staff work in the bakery department.<br>'+'<br>พนักงานขนมปังทำงานในแผนกขนมปัง'},   
    {roleused: 'Butcher'               ,thairoleused: '<br><span class="small-text">(พนักงานร้านเนื้อสัตว์)</span>'     
    ,roledescriptionused: 'Butchers prepare and sell meat products.<br>'+'<br>พ่อครัวเตรียมและขายผลิตภัณฑ์เนื้อสัตว์'},   
    {roleused: 'Store Cleaner'         ,thairoleused: '<br><span class="small-text">(พนักงานทำความสะอาดร้าน)</span>' 
    ,roledescriptionused: 'Store Cleaners maintain store cleanliness.<br>'+'<br>พนักงานทำความสะอาดร้านค้ารักษาร้านค้าให้สะอาด'},   
    {roleused: 'Shelf Stocker'         ,thairoleused: '<br><span class="small-text">(พนักงานเตรียมสินค้าใส่ชั้น)</span>' 
    ,roledescriptionused: 'Shelf Stockers replenish product shelves.<br>'+'<br>พนักงานเติมสินค้าลงบนชั้น'},   
    {roleused: 'Security Guard'        ,thairoleused: '<br><span class="small-text">(ยาม)</span>'                 
    ,roledescriptionused: 'Security Guards ensure store security.<br>'+'<br>พนักงานรักษาความปลอดภัยในร้านค้า'},   
    {roleused: 'Cashier Supervisor'    ,thairoleused: '<br><span class="small-text">(ผู้ควบคุมงานเก็บเงิน)</span>'     
    ,roledescriptionused: 'Cashier Supervisors oversee cashier teams.<br>'+'<br>ผู้ควบคุมแผนกการจ่ายเงินควบคุมทีมพนักงานจ่ายเงิน'},   
    {roleused: 'Service Manager'       ,thairoleused: '<br><span class="small-text">(ผู้จัดการบริการลูกค้า)</span>'     
    ,roledescriptionused: 'Service Managers manage customer service.<br>'+'<br>ผู้จัดการบริการจัดการบริการลูกค้า'},   
    {roleused: 'Grocery Manager'       ,thairoleused: '<br><span class="small-text">(ผู้จัดการแผนกซื้อของชำ)</span>'   
    ,roledescriptionused: 'Grocery Managers oversee grocery departments.<br>'+'<br>ผู้จัดการซุปเปอร์มาร์เก็ตควบคุมแผนกของซุปเปอร์มาร์เก็ต'},   
    {roleused: 'Cashier Assistant'     ,thairoleused: '<br><span class="small-text">(ผู้ช่วยเหลือพนักงานเก็บเงิน)</span>'
    ,roledescriptionused: 'Cashier Assistants support cashiers.<br>'+'<br>ผู้ช่วยจ่ายเงินสนับสนุนพนักงานจ่ายเงิน'},   
    {roleused: 'Customer'              ,thairoleused: '<br><span class="small-text">(ลูกค้า)</span>'                
    ,roledescriptionused: 'Customers shop and purchase items.<br>'+'<br>ลูกค้าเข้ามาช้อปปิ้งและซื้อสินค้า'},   
    {roleused: 'Bakery Assistant'      ,thairoleused: '<br><span class="small-text">(ผู้ช่วยเหลือพนักงานร้านเบเกอรี่)</span>'
    ,roledescriptionused: 'Bakery Assistants support bakery staff.<br>'+'<br>ผู้ช่วยทำขนมปังสนับสนุนพนักงานขนมปัง'},   
    {roleused: 'Dairy Clerk'           ,thairoleused: '<br><span class="small-text">(พนักงานผลิตภัณฑ์นม)</span>'     
    ,roledescriptionused: 'Dairy Clerks handle dairy products.<br>'+'<br>พนักงานแผนกนมดูแลสินค้านม'},   
    {roleused: 'Cart Collector'        ,thairoleused: '<br><span class="small-text">(พนักงานรวบรวมรถเข็นสินค้า)</span>'
    ,roledescriptionused: 'Cart Collectors gather shopping carts.<br>'+'<br>พนักงานเก็บรถเข็นช็อปปิ้งรถเข็นรวบรวมรถเข็นช็อปปิ้ง'},   
    {roleused: 'Store Greeter'         ,thairoleused: '<br><span class="small-text">(พนักงานต้อนรับลูกค้า)</span>'      
    ,roledescriptionused: 'Store Greeters welcome customers.<br>'+'<br>พนักงานต้อนรับลูกค้าในร้านค้า'},   
    {roleused: 'Supermarket Dog'       ,thairoleused: '<br><span class="small-text">(หมาหน้าร้านค้า)</span>'    
    ,roledescriptionused: 'Supermarket Dogs are friendly infront stores.<br>'+'<br>หมาหน้าร้านค้าเพื่อความเป็นมิตรในร้านค้า'},   
];

const Beachrole = [
    {roleused:'Lifeguard'               ,thairoleused: '<br><span class="small-text">(นักดูแลชายหาด)</span>'
    ,roledescriptionused: 'Ensures beach safety and responds to emergencies.<br>'+'<br>รักษาความปลอดภัยในชายหาดและตอบสนองกรณีฉุกเฉิน'},
    {roleused:'Surfer'                  ,thairoleused: '<br><span class="small-text">(นักโต้คลื่น)</span>'
    ,roledescriptionused: 'Rides ocean waves using surfboards.<br>'+'<br>ขี่คลื่นทะเลด้วยบอร์ดเซิร์ฟ'},
    {roleused:'Beach Cleaner'           ,thairoleused: '<br><span class="small-text">(พนักงานทำความสะอาดชายหาด)</span>'
    ,roledescriptionused: 'Maintains beach cleanliness.<br>'+'<br>รักษาความสะอาดชายหาด'},
    {roleused:'Beach Photographer'      ,thairoleused: '<br><span class="small-text">(ช่างภาพชายหาด)</span>'
    ,roledescriptionused: 'Captures moments at the beach.<br>'+'<br>ถ่ายรูปช็อตและฉากต่าง ๆ ที่ชายหาดเพื่อให้บริการถ่ายภาพแก่คนที่มาชายหาด'},
    {roleused:'Beach Vendor'            ,thairoleused: '<br><span class="small-text">(พ่อค้าแม่ค้าชายหาด)</span>'
    ,roledescriptionused: 'Sells products and services on the beach.<br>'+'<br>ขายสินค้าและบริการบนชายหาด'},
    {roleused:'Beachgoer'               ,thairoleused: '<br><span class="small-text">(คนไปชายหาด)</span>'
    ,roledescriptionused: 'Visits the beach for relaxation.<br>'+'<br>มาชายหาดเพื่อผ่อนคลาย'},
    {roleused:'Beach Bartender'         ,thairoleused: '<br><span class="small-text">(บาร์เทนเดอร์ชายหาด)</span>'
    ,roledescriptionused: 'Serves drinks at beachside bars.<br>'+'<br>ทำงานที่บาร์ติดชายหาดโดยให้บริการเครื่องดื่มและค็อกเทลแก่ผู้มาชายหาด'},
    {roleused:'Beach Volleyball Player' ,thairoleused: '<br><span class="small-text">(นักเล่นวอลเลย์บอลชายหาด)</span>'
    ,roledescriptionused: 'Participate in beach volleyball matches and tournaments on the sand.<br>'+'<br>นักเล่นวอลเลย์บอลชายหาดร่วมงานแข่งวอลเลย์บอลชายหาดและทัวร์นาเมนต์บนทราย'},
    {roleused:'Beach DJ'                ,thairoleused: '<br><span class="small-text">(ดีเจชายหาด)</span>'
    ,roledescriptionused: 'Provide music and entertainment on the beach, creating a lively atmosphere.<br>'+'<br>ให้บริการดนตรีและความบันเทิงบนชายหาดเพื่อสร้างบรรยากาศเต็มไปด้วยความสนุกสนาน'},
    {roleused:'Yoga Instructor'   ,thairoleused: '<br><span class="small-text">(ครูสอนโยคะชายหาด)</span>'
    ,roledescriptionused: 'Lead yoga sessions on the beach, promoting relaxation and fitness.<br>'+'<br>นำเซสชันโยคะบนชายหาดเพื่อส่งเสริมความผ่อนคลายและสุขภาพ'},
    {roleused:'Party Planner'     ,thairoleused: '<br><span class="small-text">(ผู้วางแผนปาร์ตี้ชายหาด)</span>'
    ,roledescriptionused: 'Organize and manage beach parties and events.<br>'+'<br>วางแผนปาร์ตี้ชายหาดจัดการและบริหารงานปาร์ตี้และกิจกรรมบนชายหาด'},
    {roleused:'Beachcomber'             ,thairoleused: '<br><span class="small-text">(คนเดินชายหาด)</span>'
    ,roledescriptionused: 'Individuals who search for seashells and treasures on the beach.<br>'+'<br>ผู้ที่ค้นหาหอยทะเลและของมีค่าต่าง ๆ บนชายหาด'},
    {roleused:'Cabana Attendant'  ,thairoleused: '<br><span class="small-text">(พนักงานรับใช้คาบานาชายหาด)</span>'
    ,roledescriptionused: 'Assist visitors with renting and setting up cabanas on the beach.<br>'+'<br>ช่วยเยี่ยมชมในการเช่าและตั้งคาบานาบนชายหาด'},
    {roleused:'Umbrella Rental'   ,thairoleused: '<br><span class="small-text">(บริการเช่าร่มชายหาด)</span>'
    ,roledescriptionused: 'Provides the service of renting umbrellas to beachgoers for shade.<br>'+'<br>บริการเช่าร่มชายหาดให้คนที่มาชายหาดเพื่อร่มเงา'},
    {roleused:'Resort Manager'    ,thairoleused: '<br><span class="small-text">(ผู้จัดการรีสอร์ทชายหาด)</span>'
    ,roledescriptionused: 'Oversee the operations and management of beachfront resorts.<br>'+'<br>ควบคุมการดำเนินงานประจำวันและประสบการณ์ของแขกในรีสอร์ทริมชายหาด'},
    {roleused:'Beach Property Owner'    ,thairoleused: '<br><span class="small-text">(เจ้าของที่ดินชายหาด)</span>'
    ,roledescriptionused: 'Responsible for owning and managing beachfront properties.<br>'+'<br>บุคคลที่เคยทำการลงทุนในที่ดินบริเวณชายหาดและเป็นเจ้าของสิทธิในพื้นที่นี้'},
    {roleused:'Volleyball Coach'  ,thairoleused: '<br><span class="small-text">(โค้ชวอลเลย์บอลชายหาด)</span>'
    ,roledescriptionused: 'Instructs and trains individuals or teams in the sport of beach volleyball.<br>'+'<br>ครูที่สอนและแนะนำการเล่นวอลเลย์บอลชายหาดให้ผู้เรียน'},
    {roleused:'Beach Dog'               ,thairoleused: '<br><span class="small-text">(หมาชายหาด)</span>'
    ,roledescriptionused: ' Friendly canine companions enjoying the beach atmosphere.<br>'+'<br>หมาที่มีโอกาสสนุกกับชายหาดและคนๆ รอบข้างในบรรยากาศแห่งการพักผ่อนแบบอิสระบนชายหาด'},
    {roleused:'Bikini Girl'             ,thairoleused: '<br><span class="small-text">(สาวบิกินี่)</span>'
    ,roledescriptionused: 'Individuals wearing stylish swimwear, adding to the beach vibe.<br>'+'<br>ผู้หญิงที่เลือกสวมใส่ชุดว่ายน้ำและพร้อมสนุกกับทะเลและดวงอาทิตย์ที่ชายหาด'},
    {roleused:'Drowning Person'         ,thairoleused: '<br><span class="small-text">(คนจมน้ำ)</span>'
    ,roledescriptionused: 'Individuals in distress and needing immediate rescue assistance in the water.<br>'+'<br>บุคคลที่ต้องการความช่วยเหลือหรือการกู้ชีวิตเมื่อตกลงน้ำในทะเลหรือสระว่ายน้ำ'},
];

function gettime(){
    const selectedValue = document.getElementById("timeInput").value;

    if (selectedValue === "unlimited") {
      document.getElementById("base-timer-label").innerHTML = "unlimited";
      return;
    }
// Credit: Mateusz Rybczonec
const TIME_LIMIT = document.getElementById("timeInput").value;
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 20;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

if(document.getElementById('timeInput').value === "9999999"){
    document.getElementById("app").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label changewhite">Unlimited</span>
    </div>
    `;
    var vote = document.getElementById("vote");
                vote.style.display = "block";
}
else{
document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label changewhite">${formatTime(
    timeLeft
  )}</span>
</div>
`;
function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTime(
        timeLeft
      );
      setCircleDasharray();
      setRemainingPathColor(timeLeft);
  
      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }}

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
}                
function customtime() {
  var customvalue = prompt("Custom Timer (minute unit)");

  if (customvalue === null) {
    document.getElementById("timeInput").value = "300"; // Select 5-minute option
    document.getElementById("timeInput").selectedIndex = 0;
} else {
    customvalue = parseInt(customvalue);
    if (!isNaN(customvalue) && customvalue >= 1 && customvalue <= 60) {
      var newOption = document.createElement("option");
      newOption.value = customvalue * 60;
      newOption.textContent = customvalue + " Minute";
      document.getElementById("timeInput").appendChild(newOption);
      document.getElementById("timeInput").value = customvalue * 60;
    } else {
      alert("Please enter a valid number between 1 and 60.");
    }
  }
}

function showConfirmation() {
  var result = confirm("Do you want to start voting before the timer ran out?");
  
  if (result) {
    votesectionstart()
    createVotingSection();
  }
}

function showConfirmationforunlimit() {
  var result = confirm("Do you want to start voting?");
  
  if (result) {
    votesectionstart()
    createVotingSection();
  }
}

  document.getElementById("vote").addEventListener("click", function () {
    console.log("start voting");
    console.log("timeLeft:", document.getElementById("base-timer-label").innerHTML);
    if (document.getElementById("base-timer-label").innerHTML != "0:00") {
      showConfirmation();
    }
    else if(document.getElementById("base-timer-label").innerHTML === "Unlimited") {
      showConfirmationforunlimit()
    } 
    else {
      votesectionstart()
      createVotingSection();
    }
  });

  function votesectionstart(){
    var items = document.getElementById("votingSection");
    items.style.display = "block";
    var items = document.getElementById("confirmvote");
    items.style.display = "block";
    var items = document.getElementById("app");
    items.style.display = "none";
    var items = document.getElementById("vote");
    items.style.display = "none";
  }


  