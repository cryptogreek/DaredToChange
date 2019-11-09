var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var imagesDisabled = false;
var randNum;
var tempScene;
var kettleCounter = 0;
var ethicsCounter = 0;
var timeSince = 0;
var data = {
	player: {
		fName: "You",
		lName: "",
		age: "25",
		color: "Blue",
		character: "red",
		preference: "none",
		currentScene: "start",
		will: 5,
		round: 0,
		dick: 6,
		flags: "",
	},
	story: [
		{index: "meg", image: "", met: true, fName: "Megan", lName: "Howzer", desc:"An old friend that you have Game Night with. She seems to be wearing more provacative clothing tonight.", color:"#6f0087", willpower:5,},
		{index: "dale", image: "", met: false, fName: "Dale", lName: "Tigrid", desc:"A guy that Meg seems to know. You don't know much else about him.", color:"#5d9e49", willpower:5,},
	],
	flags: [
		{index:"introFeet",state:false,},
		{index:"introLieShort",state:false,},
		{index:"introLieLong",state:false,},
		{index:"daleKnowsTinyDick",state:false,},
	],
	gallery: [
	],
	bodytypes: [
		{index: "red", name: "Featureless Red"},
		{index: "basic", name: "Sissy"},
		{index: "macho", name: "Macho Man"},
		{index: "shemale", name: "Shemale"},
	],
}

var galleryArray = [
]

var logbookArray = [
	{index: "meg", 
		desc: "An old friend that you have Game Night with, and a barista at a nearby cafe that you can never remember the name of.",
		body: "She has a pretty solid figure, usually wearing pretty revealing clothes. She loves the feeling of getting hit on, but you've heard more than a few complaints about people who can't take a hint.",
		clothes: "",
	},
	{index: "dale", 
		desc: "Someone that Megan invited to Game Night so that you'd have the right number of players.",
		body: "He's a fairly-well-built guy, standing a bit taller than you.",
		clothes: "Her work outfit isn't too professional, but standards are lax here. She wears a short skirt and a blazer opened enough you can clearly her pink undershirt which doubles as a bra.",
	},
];

var meganDescArray = [
	{desc: "An old friend that you have Game Night with, and a barista at a nearby cafe that you can never remember the name of.",},
	{desc: "The dominant woman that you have Game Night with, and a barista at a nearby cafe that you can never remember the name of.",},
	{desc: "Your personal mistress that makes sure you're never plagued with indecision. If you're lucky, she might call you over soon, but you should probably focus on the game for now...",},
	{desc: "The subby girl that you have Game Night with, and a barista at a nearby cafe that you can never remember the name of.",},
	{desc: "Your personal bitch that makes sure that makes damn sure you're never dissatisfied. At this point, you could probably get her to crawl over to your cock with just a stern look.",},
	{desc: "Your feminine role-model that you look up to, she works as a barista at a nearby cafe. Maybe you apply for the same job? Thinking about the customers looking at you in that uniform sends tingles down your spine...",},
];
var meganBodyArray = [
	{body:"She has a pretty solid figure, usually wearing pretty revealing clothes. She loves the feeling of getting hit on, but you've heard more than a few complaints about people who can't take a hint."},
	{body:""},
	{body:""},
	{body:""},
	{body:""},
];
var meganClothesArray = [
	{clothes:"Right now, she's wearing a particularly short skirt that barely covers her ass, thin black stockings, and a tight shirt that's just revealing enough that you're pretty sure she skipped wearing a bra tonight."},
	{clothes:""},
	{clothes:""},
	{clothes:""},
	{clothes:""},
];

var artifactArray = [
	{index: "bracelet", dark: false, equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions."},
	{index: "erotibox", dark: false, equipable: false, title: "Erotibox", desc: "A large wooden crate large enough to fit a person inside. <br>Anything put inside the box will become an erotic version of itself.", desc2: ""},
	{index: "mirror", dark: false, equipable: false, title: "Antique Mirror", desc: "An antique mirror dating back to the Victorian era. If a person stares into the eyes of their own reflection long enough, they will 'switch places' with an alternate reality version of themselves.<br>In these alternate realities social norms and the physical body of the person switched with can all be completely different.", desc2: ""},
	{index: "stopwatch", dark: false, equipable: true, title: "Time Stopwatch", desc: "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.", desc2: "When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch."},
	{index: "coin", dark: false, equipable: true, title: "Midas Coin", desc: "A single gold coin with an inscription on the back written in Ancient Greek.", desc2: "When held, sexual activities performed by the holder will be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value."},
	{index: "serum", dark: false, equipable: false, title: "Truth Serum", desc: "A set of vials of green, minty liquid.", desc2: "When drunk, everything you say becomes the 'truth'. Not in the reality warping way, but in that everyone around you will believe whatever you say."},
	{index: "gas", dark: true, equipable: false, title: "Exchange Gas", desc: "Several aerosol gas containers. Subjects who inhale the gas experience a process called 'gender-swapping'. In most cases the process is temporary.", desc2: ""},
	{index: "gummy", dark: true, equipable: false, title: "Gummy Dicks", desc: "A package of several erect dicks seemingly made from the same candy as gummy bears. A fluid inside feminizes men, preventing erections and increasing both prostate size & sensitivity. Effects not permanent unless used repeatedly.", desc2: ""},
	{index: "onahole", dark: true, equipable: false, title: "Succubus Onahole", desc: "A fleshlight or 'onahole' made from an unknown material. Known to cause extreme euphoria when male genetalia is inserted, subjects state tendrils inside 'probed' them. Afterwards, subjects showed an extreme increase in semen production.", desc2: ""},
	{index: "cage", dark: true, equipable: false, title: "Punification Cage", desc: "A plastic pink chastity cage. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.", desc2: ""},
	{index: "toolkit", dark: true, equipable: false, title: "Sissy's Toolkit", desc: "A plastic makeup kit. When opened, objects will appear inside and in the room which are designed to encourage the opener to 'explore themselves'. These range from makeup to unknown body-modifying drugs and a 3-man group of naked men. ", desc2: ""},
];

var megF = data.story[0].fName;
var megL = data.story[0].lName;
var daleF = data.story[1].fName;
var daleL = data.story[1].lName;

//Startup & Systems config
function startup() {
	saveSlot(191);
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data190')) {
		loadSlot(190);
		console.log('startup load successful. Now loading autosave at position ' + data.player.currentScene);
	}
	else{
		sceneTransition('start');
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(161);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passTime() {
	if(data.player.round <10){
		data.player.round += 1;
	}
	console.log('round is now ' + data.player.round);
}

function nameUpdate() {
	roommateF = data.story[0].fName;
	roommateL = data.story[0].lName;
	assistantF = data.story[1].fName;
	assistantL = data.story[1].lName;
	girlfriendF = data.story[2].fName;
	girlfriendL = data.story[2].lName;
	librarianF = data.story[3].fName;
	librarianL = data.story[3].lName;
	madameF = data.story[4].fName;
	madameL = data.story[4].lName;
	gymF = data.story[5].fName;
	gymL = data.story[5].lName;
	lifeguardF = data.story[6].fName;
	lifeguardL = data.story[6].lName;
	chairF = data.story[7].fName;
	chairL = data.story[7].lName;
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	//hideSelf();
	//console.log("hideStuff end");
}

function saveButton() {
	if (saveHidden == true) {
		showSave();
	}
	else {
		hideSave();
	}
}

function hideSave() {
	saveHidden = true;
	document.getElementById("save").style.visibility = "hidden"; 
}

function showSave() {
	hideStuff();
	generateSave();
	saveHidden = false;
	document.getElementById("save").style.visibility = "visible"; 
}

function selfButton() {
	if (selfHidden == true) {
		showSelf();
	}
	else {
		hideSelf();
	}
}

function hideSelf() {
	selfHidden = true;
	document.getElementById("self").style.visibility = "hidden";	
}

function showSelf() {
	hideStuff();
	selfHidden = false;
	document.getElementById("self").style.visibility = "visible"; 
	generateNav();
}

//Scene creation
function writeSpeech (name, img, text) {
	var cssColor = "#CCCCCC";
	if(name == "player"){
		if(data.player.character == "pink")
			cssColor = "#ea91ed";
		else
			cssColor = "#994949";
	}
	if(name == "meg"){
		cssColor = "#9400b5";
	}
	if(name == "dale"){
		cssColor = "#5d9e49";
	}
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		name = "You";
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
	}
	if (name == "notes") {
		name = "Research Notes";
		img = "scripts/gamefiles/profiles/notes.png";
	}
	if (name == "gasF") {
		name = data.player.fName;
		img = "scripts/gamefiles/profiles/gasF.jpg";
	}
	if (name == "gasM") {
		name = assistantF;
		img = "scripts/gamefiles/profiles/gasM.jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName;
			var lName = data.story[i].lName;
			var tempIndex = i;
		}
	}
	if (name == "Peta") {
		name = "Mrs. " + lName;
	}
	if(name == "You"){
		console.log("The player speech was generated.");
		document.getElementById('output').innerHTML +=`
		<div class="textBox" style="border-color: `+cssColor+`">
			<img class = "textThumb" onclick="selfButton()" style="box-shadow: -5px 5px `+cssColor+`" src = "
				`+ img +`
			">
			<div class="textBoxContent">
			<p class = "textName" style="color:`+cssColor+`">`+ name + `</p>
			<p>` + replaceCodenames(text) + `</p>
		</div>
		<br>
		`;
	}
	else{
		document.getElementById('output').innerHTML +=`
		<div class="textBox" style="border-color: `+cssColor+`">
			<img class = "textThumb" onclick="openLogFor(`+tempIndex+`)" style="box-shadow: -5px 5px `+cssColor+`" src = "
				`+ img +`
			">
			<div class="textBoxContent">
			<p class = "textName" style="color:`+cssColor+`">`+ data.story[tempIndex].fName + `</p>
			<p>` + replaceCodenames(text) + `</p>
		</div>
		<br>
		`;
	}
}

function writeTab(character, text) {
	var img = "scripts/gamefiles/profiles/"+character+".jpg";
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == character) {
			var name = data.story[i].fName;
			var lName = data.story[i].lName;
		}
	}
	if (name == "Peta") {
		name = "Mrs. " + lName;
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			`+ img +`
		">
		<div class="textBoxContent">
		<p class = "textName">`+ name + `</p>
		<span class = "choiceText" onclick = "sceneTransition('`+character+`')">`+replaceCodenames(text)+`</span>   
	</div>
	<br>
	`;
}

function writeArtifact (name) {
	console.log("Now writing artifact tab id " + name);
	var researchStatus = 0;
	var researchTotal = 0;
	var desc2 = "";
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == name) {
			var jam = i;
			var title = artifactArray[i].title;
			var desc = artifactArray[i].desc;
			var artifactResearchCheck = name + "Research1";
			if (artifactArray[i].equipable == true) {
				console.log("artifact is equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					var equip = "Equip";
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					var equip = "";
					desc2 = "";
				}
			}
			else {
				console.log("artifact is not equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					desc2 = "";
				}
				var equip = "";
			}
		}
	}
	//console.log('now checking number of scenes');
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(name)) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	console.log('Scenes found, current progress is ' + researchStatus + ' of ' + researchTotal);
	//console.log('now determining appropriate research level');
	if (equip != "") {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
			<div class="textBoxContent">
			<p class = "textName">`+ title + `</p>
			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">Research</span>   
				<span class = "choiceText" onclick = "equip('`+name+`')">`+equip+`</span>
			</p>
			<p>`+ desc + `</p>
			<p>`+ desc2 + `</p>
		</div>
		<br>
		`;
	}
	else {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
			<div class="textBoxContent">
			<p class = "textName">`+ title + `</p>
			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">Research</span>
			</p>
			<p>`+ desc + `</p>
			<p>`+ desc2 + `</p>
		</div>
		<br>
		`;
	}
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + replaceCodenames(scene) + `
		</p>
	`;
}

function writeFunction (name, func) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `">
			` + replaceCodenames(func) + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + replaceCodenames(text) + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + replaceCodenames(text) + `</p>
	`;
}
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(160);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

function dreamCheck() {
	var event = false;
	var dreamChecker = data.player.artifact1 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "2";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	switch (data.player.day) {
		case 0:
			event = 'dream0'; 
		break;
		case 1: 
			event = 'dream1';
		break;
	}
	tempScene = 'room';
	console.log('Final dream check result is ' + event);
	return event;
}

function researchLevel(name) {
	var artifactResearchName = name + 'Research';
	var failed = true;
	var sceneTarget = name + 'Failed';
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(artifactResearchName)) {
			if (galleryCheck(galleryArray[i].index) != true) {
				failed = false;
				sceneTarget = galleryArray[i].index;
				break;
			}
		}
	}
	console.log('research level is ' + sceneTarget);
	if (failed == false) {
		writeEvent(sceneTarget);
	}
	else {
		sceneTransition(sceneTarget);
	}
}

function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
	text = text.replace('playerF', data.player.fName);
	text = text.replace('playerL', data.player.lName);
	for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
		codenameCheck = data.story[codenameIndex].index + "F";
		text = text.replace(codenameCheck, data.story[codenameIndex].fName);
		codenameCheck = data.story[codenameIndex].index + "L";
		text = text.replace(codenameCheck, data.story[codenameIndex].lName);
	}
	}
	return text;
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Menu
function updateMenu() {
	document.getElementById('playerName').innerHTML = data.player.fName + ' ' + data.player.lName;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
}

function changeName() {
	data.player.fName = document.getElementById('nameSubmission').value;
	updateMenu();
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	sceneTransition("room");
}

function renamePlayer() {
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	data.player.age = document.getElementById('ageSubmission').value;
	data.player.dick = document.getElementById('dickSubmission').value;
	sceneTransition("prologue2");
}

function equip(n) {
	data.player.artifact2 = n;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == n) {
			var title = artifactArray[i].title;
		}
	}
	writeText("You've equipped the " + title);
	writeTransition(data.player.currentScene, "Go back");
}

function checkArtifact(n) {
	if (n == data.player.artifact1 || n == data.player.artifact2) {
		return true;
	}
	else {
		return false;
	}
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.player.currentScene);
	updateSave();
	nameUpdate();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(160);
	loadSlot(160);
	if (data.player.fName == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(161);
	}
	else {
		saveSlot(160);
		loadSlot(160);
	}
	updateSave();
	nameUpdate();
}

function generateSave() {
	for (i = 151; i < 159; i++) {
		var searchName = 'data' + i;
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
}

function updateSave() {
	saveSlot(160);
}

//Gallery
function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Unlocking error, no scene named "+n+" found.");
	}
}

function generateGalleryNav() {
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == false) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGirlPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateGirlPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div>
			<br>
			`;
		}
	}
	document.getElementById('output').innerHTML += `
		<div class = "textBox" onclick="generateSwallowsPage()" >
			<img class = "textThumb" src = "scripts/gamefiles/profiles/swallows.png">
			<br>
			<span class = "choiceText" onclick="generateSwallowsPage()">Scenes written by Swallows999</span>
		</div>
		<br>
	`;
	writeFunction("generateDarkGalleryNav()", "View the dark vault gallery");
}

function generateDarkGalleryNav() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == true) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	writeTransition("gallery", "Go back");
}

function generateArtifactPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/items/"+n+".jpg");
	console.log('checking for ' + n);
	for (i = 0; i < galleryArray.length; i++) {
		//console.log(galleryArray[i].index);
		//console.log(i);
		if (galleryArray[i].index.includes(n)) {
			console.log('event found, unlock status is ' + galleryCheck(galleryArray[i]));
			if (galleryCheck(galleryArray[i].index) == true) {
				writeFunction ("writeEvent('"+galleryArray[i].index+"')", galleryArray[i].name)
			}
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateSwallowsPage() {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/profiles/swallows.png");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes('swallows')) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateGirlPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/characters/"+ n +".jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes(n)) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function galleryCheck(n) {
	for (x = 0; x < data.gallery.length; x++) {
		if (data.gallery[x].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

//Logbook
function openLogFor(n) {
	selfHidden = false;
	generateNav();
	switchDesc(n);
	document.getElementById("self").style.visibility = "visible";
}

function generateNav() {
	console.log('now generating logbook navigation');
	document.getElementById('logbookLeft').innerHTML = ``;
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('player')">` + data.player.fName + `</p>`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('logbookLeft').innerHTML += `<h3 class = "button" onclick = "switchDesc('`+i+`')">` + data.story[i].fName + `</h3>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">`+logbookArray[n].desc+`</p>
			<p class = "selfDesc">`+logbookArray[n].body+`</p>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p>
			<p class = "selfDesc">   </p>
		</div
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		var researchStatus = 0;
		var researchTotal = 0;
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].dark != true) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: `+data.player.fName+` `+data.player.lName+`</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">Round: `+data.player.round+`</p>
			<p class = "selfDesc">Willpower: `+data.player.will+`</p>
			<p class = "selfDesc">Features: `+researchStatus+` of `+researchTotal+`</p>
		</div>
		`;
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Cheating
function cheat() {
	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	var goofMessage = "Code does not exist";
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "swallows999": {
			goofMessage = "Welcome, Swallows."
			if (checkBody("swallows") != true) {
				var goof = {index: "swallows", name: "Anomaly Vault's Sponsor",};
				data.bodytypes.push(goof);
				var target = data.bodytypes.length - 1;
				changeBody(target);
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "new name": {
			data.player.currentScene = "renamingRoom";
			goofMessage = ""
			break;
		}
		case "scp": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "securecontainprotect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "secure contain protect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomycorp": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy corporation": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "umbrella": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "resident evil": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "silent hill": {
			if (data.player.color.includes('silent') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'silent';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse 13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "fringe": {
			if (data.player.color.includes('fringe') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'fringe';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "welcome to ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "noodlemaster": {
			for (x = 0; x < galleryArray.length; x++) {
				if (galleryCheck(galleryArray[x].index)== false) {
					unlockScene(galleryArray[x].index);
				}
			}
			goofMessage = "Master code accepted. All scenes unlocked."
			break;
		}
		case "haa": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "human alteration app": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "rainy dayz": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "princess quest": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "bitch medicenter": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "hentai university": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	writeText(goofMessage);
}

function listCheats() {
	if (data.player.color.includes('scp') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/doctor.jpg">
			<p class = "textName">'Plague' Doctor</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('doctorResearch')">Research</span>   
			</p>
			<p class = "textName">A mysterious woman dressed in a skimpy version of a medieval plague doctor's uniform. Very dangerous.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/talisman.jpg">
			<p class = "textName">Talisman</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('talismanResearch')">Research</span>
			</p>
			<p class = "textName">A possessed talisman. There's a sticky note on it saying 'DO NOT TOUCH'</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('lobotomy') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/magical.jpg">
			<p class = "textName">Magical Girl</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('magicalResearch')">Research</span>
			</p>
			<p class = "textName">A woman proclaiming herself to be a champion of justice. You're pretty sure she was fished up from a river somewhere.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/blue.jpg">
			<p class = "textName">Blue Star</p>
			<p class = "textName">Blue Star</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('blueResearch')">Blue Star</span>
			</p>
			<p class = "textName">Blue Star</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('warehouse') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/kettle.jpg">
			<p class = "textName">Wish-granting Kettle</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('kettleResearch')">Research</span>
			</p>
			<p class = "textName">A rusty old kettle. It showed some promise at one point, but it's creators clearly had the wrong focus and it just isn't as shiny as everything else.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('fringe') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/fringe.jpg">
			<p class = "textName">Ultra Top Secret Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('fringeResearch')">Research</span>
			</p>
			<p class = "textName">A super locked room, you aren't allowed to go in here. The end of the door's paint job is much, much more lazily done than the rest.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('umbrella') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/umbrella.jpg">
			<p class = "textName">Zombie Virus</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('umbrellaResearch')">Research</span>
			</p>
			<p class = "textName">A vial containing a zombification virus. Hopefully it makes hot zombies, not gross ones.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('silent') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/silent.jpg">
			<p class = "textName">Nurse's Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('silentResearch')">Research</span>
			</p>
			<p class = "textName">A room full of strange creatures, which probably symbolize a really deep message about sexuality or something.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('ethics') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/ethics.jpg">
			<p class = "textName">Ethics Rock</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('ethicsResearch')">Research</span>
			</p>
			<p class = "textName">A rock that dispenses lines of  ethical ramblings. It's a rock though, so it probably doesn't know what its talking about.</p>
		</div>
		<br>
		`;
	}
}

function kettleWish() {
	var goof = document.getElementById('kettleSubmission').value;
	sceneTransition(data.player.currentScene);
	if (goof == "ferret" || goof == "ferrets") {
		kettleCounter +=2;
		writeText("A good wish! For this, you get two ferrets. You have "+kettleCounter+" ferrets.");
	}
	else {
		kettleCounter +=1;
		writeText("Suddenly, out of nowhere, a ferret is here. You have "+kettleCounter+" ferret(s).");
	}
	switch (kettleCounter) {
		case 5:
			writeText("You have a dazzle of ferrets now, they're very cute.");
		break;
		case 7:
			writeText("You might be making too many ferrets. Maybe try wishing for something else?");
		break;
		case 9:
			writeText("Soon you will have too many ferrets.");
		break;
		case 10:
			writeText("You feel like if you keep making ferrets, nothing but ferrets will exist.");
		break;
		case 12:
			writeText("The kettle rumbles a little this time, as if saying 'If this many ferrets do not satisfy you, no wish will.'");
		break;
		case 13:
			writeText("The ferret making will continue forever. When you are satisfied, please scream the number to the heavens.");
		break;
	}
}

function writeWardrobe() {
	for (i = 0; i < data.bodytypes.length; i++) {
		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
		writeFunction("changeBody('"+i+"')", data.bodytypes[i].name);
	}
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = data.bodytypes[n].index;
	data.player.characterArtist = data.bodytypes[n].artist;
	updateMenu();
}
