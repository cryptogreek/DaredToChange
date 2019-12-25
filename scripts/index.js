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
		pref: "switch",
		currentScene: "start",
		tokens: 0,
		will: 5,
		dick: 6,
		height: 63,
		heightVal:0,
		buildVal:0,
		clothesVal:0,
		earsVal:0,
		hairVal:0,
		legsVal:0,
		assVal:0,
		tailVal:0,
		chestVal:0,
		genitalsVal:0,
		flags: "",
	},
	story: [
		{index: "opp",
		image: "",
		met: false,
		fName: "???",
		lName: "???",
		color:"#833aa7",
		piece:"blue",
		sex:"M",
		will:5,
		dick:7,
		height:65,
		heightVal:0,
		buildVal:0,
		clothesVal:0,
		earsVal:0,
		hairVal:0,
		legsVal:0,
		assVal:0,
		tailVal:0,
		chestVal:0,
		genitalsVal:0,
		genitalsVal2:0,
		},
		//male:5d9e49, herm:833aa7, fem:6f0087
		//{index: "opp", image: "", met: false, fName: "Kieran", lName: "Lentis", desc:"Your opponent in tonight's game of Dare to Change.", color:"#6f0087", willpower:5,},
		//{index: "meg", image: "", met: false, fName: "Megan", lName: "Howzer", desc:"An old friend that you have Game Night with. She seems to be wearing more provacative clothing tonight.", color:"#6f0087", willpower:5,},
		//{index: "dale", image: "", met: false, fName: "Dale", lName: "Tigrid", desc:"A guy that Meg seems to know. You don't know much else about him.", color:"#5d9e49", willpower:5,},
	],
	// flags: [
	// ],
	// gallery: [
	// ],
}

var galleryArray = [
]

var logbookArray = [
	{index: "opp", 
		desc: "Your opponent in Dare to Change.",
		body: "This value hasn't been set yet.",
		clothes: "They're wearing comfortable clothes.",
	},
];

var oppHeightArray = [
	{desc: " looks to be around ",},
	{desc: " stands at a rather short ",},
	{desc: " stands at a rather tall ",},
	{desc: " is a towering ",},
	{desc: " is a miniscule ",},
];

var playerHeightArray = [
	{desc: "You stand at ",},
	{desc: "You stand at a short ",},
	{desc: "You stand at a rather tall ",},
	{desc: "You stand at a miniscule ",},
	{desc: "You stand at a towering ",},
];

var oppBuildArray = [
	{desc: "and he's pretty well-built, with his toned muscles seeming fairly obvious from where you're looking.",},
	{desc: "and she's pretty well-built, with her toned muscles seeming fairly obvious from where you're looking.",},
	{desc: "and he's looking fairly curvy now, thanks to the effects of the transformation.",},
	{desc: "and she's looking fairly curvy now, thanks to the effects of the transformation.",},
	{desc: "and he's looking a lot more slim and fragile now, thanks to the effects of the transformation.",},
	{desc: "and she's looking a lot more slim and fragile now, thanks to the effects of the transformation.",},
	{desc: "and between his broad shoulders and defined muscles, he's looking more and more like the perfect alpha-male body.",},
	{desc: "and between her hourglass figure and birthing hips, she's looking more and more like she has a perfectly womanly body.",},
];
var playerBuildArray = [
	{desc: "and you're probably pretty-average weight-wise.",},
	{desc: "and you're just a little heavier than average.",},
	{desc: "and you're just a bit more slim and light than average.",},
	{desc: "and you're pretty muscular compared to most people.",},
	{desc: "and you've got a bit more in the curves-department compared to most people.",},
	{desc: "and you are practically an Adonis when it comes to your body and muscles.",},
	{desc: "and you are a <i>lot</i> curvier than most people.",},
	{desc: "and you're a lot slimmer than you were at the start of the game. Plus, your ears almost seem pointed, now...",},
];

var oppClothesArray = [
	{desc: " He's wearing a tight-fitting T-shirt that hides nothing, and a pair of loose jeans that you could swear shouldn't be as tight around the crotch as they look.",},
	{desc: " She's wearing a tight-fitting T-shirt that does nothing to hide the fact that she skipped putting on a bra, and a pair of just-as-tight jeans that hug her ass and hips in ways that can really <i>do things</i> to a man.",},
	{desc: " She's wearing a tight-fitting T-shirt that's just thin enough for you to see the the color of her light-violet bra, and a pair of loose jeans that you could swear shouldn't be as tight around the crotch as they look.",},

];
var playerClothesArray = [
	{desc: " You're wearing some normal, fairly-comfortable clothes - nothing to write home about.",},
	{desc: " You have some rather racy, feminine clothes on right now; it's a bit embarrassing to wear, though.",},
	{desc: " You have some rather racy, feminine clothes on right now; if you're being honest, it's a little bit of a turn-on...",},
	{desc: " You're wearing some nice, loose clothes that can accomodate for your changing body.",},
	{desc: " You're wearing a <i>very</i> tight outfit that hugs every part of your body, hiding absolutely nothing from your opponent.",},
	{desc: " You're wearing some normal, fairly-comfortable clothes - though, they're a bit big for your body now.",},
];

var oppEarsArray = [
	{desc: "",},
	{desc: "You can see a pair of cat ears poking out from his head, which he seems to enjoy rubbing with his fingers. ",},
	{desc: "You can see a pair of cat ears poking out from her head, which he seems to enjoy rubbing with her fingers. ",},
	{desc: "You can see a pair of dog ears poking out from the sides of his head, which he occasionally gently scratches at. ",},
	{desc: "You can see a pair of dog ears poking out from the sides of her head, which she occasionally gently scratches at. ",},
	{desc: "You can see a pair of bunny ears poking out from his head, which seem to twitch rather obviously whenever he looks directly at you. ",},
	{desc: "You can see a pair of bunny ears poking out from her head, which seem to twitch rather obviously whenever he looks directly at you. ",},
	{desc: "You can see a pair of fox ears poking out from his head, which seem to shift slightly whenever he hears something interesting... or when your heartbeat speeds up. ",},
	{desc: "You can see a pair of fox ears poking out from her head, which seem to shift slightly whenever she hears something interesting... or when your heartbeat speeds up. ",},
];
var playerEarsArray = [
	{desc: "",},
	{desc: "A pair of adorable cat ears poke out from the top of your head, just sensitive enough that you can feel the very faint breeze caressing the fur. ",},
	{desc: "A pair of adorable dog ears droop out from the sides of your head. They don't seem to be able to hear much, but you could swear you can hear your own heartbeat through them. ",},
	{desc: "A pair of twitchy bunny ears spring out from the top of your head. Despite your best efforts, you can't seem to control how they move, especially when your opponent takes a good look at them. ",},
	{desc: "A pair of sensitive fox ears pop out from the top of your head. You can't seem to stop them from twitching slightly whenever you hear a noise, even if it's as quiet as the drop of a pin. ",},
];

var oppHairArray = [
	{desc: "His hair is pretty short, roughly tossed about and looking a bit fuzzy.",},
	{desc: "Her hair is around shoulder-length and casually hangs rather loosely.",},
	{desc: "His hair is around shoulder-length and casually hangs rather loosely. It almost looks feminine from here.",},
	{desc: "Her long hair is has to go down to the middle of her back, tied into a loose ponytail that she seems to like to toy with.",},
	{desc: "His hair easily goes down to the middle of his back, tied into a loose ponytail that he seems to like to toy with.",},
];
var playerHairArray = [
	{desc: "Your hair is a bit short, feeling a little rough but a little soft when you touch it.",},
	{desc: "Your hair is around shoulder-length, and you get the urge to touch it pretty frequently.",},
	{desc: "Your hair goes down to the middle of your back, hanging loosely and sending pleasant tingles along your back when the tips rub against it.",},
	{desc: "Your hair easily drops down to your ass, flowing down in what you know full-well to be a <i>very</i> feminine look.",},
];

var oppLegsArray = [
	{desc: "His legs are <i>very</i> well-built, toned enough that you could probably trace his muscles with a finger.",},
	{desc: "Her legs are <i>very</i> well-built, toned enough that you could probably trace her muscles with a finger.",},
	{desc: "His legs are looking <i>very</i> plush now, to the point you're pretty sure you could sink your fingers right into them and have them spill out around your hands.",},
	{desc: "Her legs are <i>very</i> plush, to the point you're pretty sure you could sink your fingers right into them and have them spill out around your hands.",},
	{desc: "His legs are looking very slim now, and you could swear that at this point, you could pin him to the wall yourself and hold him there.",},
];
var playerLegsArray = [
	{desc: "Your legs are a little plush, soft to the touch and not that firm.",},
	{desc: "Your legs are a little firm, soft enough that you can poke into it, but springy enough to bounce right back.",},
	{desc: "Your legs are a very toned now, the muscles in your thighs defined enough that you can trace them with a finger.",},
	{desc: "Your legs are a looking fairly dainty now, thanks to the transformation - perfectly smooth, too.",},
	{desc: "Your legs are looking fairly dainty and thin thanks to the transformation, which you're not sure how you feel about.",},
];

var oppAssArray = [
	{desc: "And of course, those legs lead right up into a well-toned ass that pulls your attention to it. Looking at it, you can't help but feel curious about how firm it would feel in your hands...",},
	{desc: "And of course, those legs lead right up into a well-toned ass that pulls your attention to it. Despite how firm you would <i>swear</i> it has to be, there always seems to be just enough jiggle that it shakes with every movement.",},
	{desc: "And of course, those legs lead right up into a thick, fat ass that threatens to spill over the seat. Whenever "+data.story[0].fName+ " shifts in place, you could swear it practically ripples.",},
	{desc: "And of course, those legs lead right up into a taut little bubble-butt that you definitely won't see on a real man. It must be really sensitive, too, if "+data.story[0].fName+"'s gentle squirming is anything to go by.",},

];
var playerAssArray = [
	{desc: " When it comes to your ass, it's not like it's boney or anything, but you have to admit that it's fairly average.",},
	{desc: " Then there's your ass, which has just enough body to it that you can't blame your opponent for stealing the occasional glances at your backside.",},
	{desc: " And then, there's your ass. Thanks to the transformation, it's thick enough that you can feel it bounce when you move, and it's far more sensitive than you expected.",},
	{desc: " And of course, then comes your ass. Your butt is smaller and more lithe than before, but it's sensitive enough that just sitting down feels like someone started to massage it.",},
];

var oppTailArray = [
	{desc: "",},
	{desc: " Along with that, there's also a slim cat's tail poking out, waving gently through the air and occasionally slowing down to drag across some part of his body.",},
	{desc: " Along with that, there's also a slim cat's tail poking out, waving gently through the air and occasionally slowing down to drag across some part of her body.",},
	{desc: " Along with that, there's also a fluffy dog's tail poking out, wagging a bit and occasionally slowing down whenever he stops to think about something.",},
	{desc: " Along with that, there's also a fluffy dog's tail poking out, wagging a bit and occasionally slowing down whenever she stops to think about something.",},
	{desc: " Along with that, there's also a little floof of a bunny's tail poking out. It's small size makes a bit hard to see, but it seems to twitch pretty frequently when you can see it.",},
	{desc: " Along with that, there's also a massively fluffy fox's tail sticking out, lazily cast over the side of the chair while he absentmindedly pets it with one hand, only further fluffing it with each stroke.",},
	{desc: " Along with that, there's also a massively fluffy fox's tail sticking out, lazily cast over the side of the chair while she absentmindedly pets it with one hand, only further fluffing it with each stroke.",},
];
var playerTailArray = [
	{desc: "",},
	{desc: " You have a glossy cat's tail poking out from just above your rear, moving with unintentional, natural grace as it swings about lazily.",},
	{desc: " You also have a very floofy doggy tail poking out from just above your butt. It swings side-to-side completely unbidden, but you can stop the wild wagging if you focus.",},
	{desc: " You also have a puff of a white bunny's tail sticking out from your rear, twitching gently almost all the time. The fur is very soft and <i>very</i> sensitive.",},
	{desc: " Above that, you have a massive pile of hyper-fluffy fox-tail that drapes off to the side. It's a bit heavy, but the texture is incredible, and running your hands through it feels <i>amazing.</i>",},
];

var oppChestArray = [
	{desc: "His chest and shoulders are pretty broad, especially when he spreads out his arms and leans back. You don't doubt that he could probably pick you up pretty easily. ",},
	{desc: "Her chest is a bit on the small side, but she is <i>very</i> toned. Given how strong her arms look, you don't doubt that she could probably pick you up pretty easily. ",},
	{desc: "Her breasts looks pretty large and firm, at least Double-Ds, but she is <i>very</i> toned. Given how strong her arms look, you don't doubt that she could probably pick you up pretty easily. ",},
	{desc: "Her tits are practically spilling over, a fact that she is clearly trying to show off with her posture. Given the nature of the game, though, that's hardly a surprise. ",},
	{desc: "His chest is looking a lot smaller now, his entire frame looking far more slim, but with just a hint of swelling around the chest that you're pretty confident isn't from his muscles. ",},
];
var playerChestArray = [
	{desc: "You have a pretty normal, flat chest. You're not flabby, but you're not exactly <i>fit</i>, either. ",},
	{desc: "Your chest is starting to swell a bit, looking almost like a large A-cup. They're sensitive, too... ",},
	{desc: "You have a pair of fairly-large C-cup breasts hanging from your chest, your sensitive nipples feeling like they're constantly being teased. ",},
	{desc: "You have a pretty normal, flat chest. You're not flabby, but you're not exactly <i>fit</i>, either. ",},
	{desc: "You you have a pair of teeny-titties pushing out from your chest, highlighting your slim sissy figure. ",},
	{desc: "Having shrunk down, your chest is similarly slimmer, with your shoulders less broad now than before. ",},
];

var oppGenitalsArray = [
	{desc: "",},
	{desc: "You can see signs of a bulge at his crotch, though his pants are loose enough that that's all you can see.",},
	{desc: "You can see clear signs of a rather large bulge at her crotch, though her pants are loose enough that you can't really make much else out.",},
	{desc: "She has a pair of violet panties on, just sheer enough for you to see the shape of her pussy.",},
	{desc: "His cock is hanging down between his legs, not quite fully erect but still at least ",},
	{desc: "Her cock is hanging down between her legs, not quite fully erect but still at least ",},
];
var oppGenitalsArray2 = [
	{desc: ""},
	{desc: "-inches long, and <i>very</i> thick."},
];
var playerGenitalsArray = [
	{desc: "You have a fairly average, ",},
	{desc: "You have a fat, ",},
	{desc: "You have a short ",},
	{desc: "Your cock has shrunk down thanks to the transformation, now only ",},
	{desc: "You have a tiny little sissy clitty, only ",},
];
var playerGenitalsArray2 = [
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inches long. Despite that, it feels even <i>more</i> sensitive now than it did before...",},
	{desc: "-inches long. At this point, it doesn't even get hard, but the tip is always dribbling just a little bit of pre.",},
];






// var artifactArray = [
// 	{index: "bracelet", dark: false, equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions."},
// 	{index: "erotibox", dark: false, equipable: false, title: "Erotibox", desc: "A large wooden crate large enough to fit a person inside. <br>Anything put inside the box will become an erotic version of itself.", desc2: ""},
// 	{index: "mirror", dark: false, equipable: false, title: "Antique Mirror", desc: "An antique mirror dating back to the Victorian era. If a person stares into the eyes of their own reflection long enough, they will 'switch places' with an alternate reality version of themselves.<br>In these alternate realities social norms and the physical body of the person switched with can all be completely different.", desc2: ""},
// 	{index: "stopwatch", dark: false, equipable: true, title: "Time Stopwatch", desc: "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.", desc2: "When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch."},
// 	{index: "coin", dark: false, equipable: true, title: "Midas Coin", desc: "A single gold coin with an inscription on the back written in Ancient Greek.", desc2: "When held, sexual activities performed by the holder will be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value."},
// 	{index: "serum", dark: false, equipable: false, title: "Truth Serum", desc: "A set of vials of green, minty liquid.", desc2: "When drunk, everything you say becomes the 'truth'. Not in the reality warping way, but in that everyone around you will believe whatever you say."},
// 	{index: "gas", dark: true, equipable: false, title: "Exchange Gas", desc: "Several aerosol gas containers. Subjects who inhale the gas experience a process called 'gender-swapping'. In most cases the process is temporary.", desc2: ""},
// 	{index: "gummy", dark: true, equipable: false, title: "Gummy Dicks", desc: "A package of several erect dicks seemingly made from the same candy as gummy bears. A fluid inside feminizes men, preventing erections and increasing both prostate size & sensitivity. Effects not permanent unless used repeatedly.", desc2: ""},
// 	{index: "onahole", dark: true, equipable: false, title: "Succubus Onahole", desc: "A fleshlight or 'onahole' made from an unknown material. Known to cause extreme euphoria when male genetalia is inserted, subjects state tendrils inside 'probed' them. Afterwards, subjects showed an extreme increase in semen production.", desc2: ""},
// 	{index: "cage", dark: true, equipable: false, title: "Punification Cage", desc: "A plastic pink chastity cage. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.", desc2: ""},
// 	{index: "toolkit", dark: true, equipable: false, title: "Sissy's Toolkit", desc: "A plastic makeup kit. When opened, objects will appear inside and in the room which are designed to encourage the opener to 'explore themselves'. These range from makeup to unknown body-modifying drugs and a 3-man group of naked men. ", desc2: ""},
// ];

var oppF = data.story[0].fName;
var oppL = data.story[0].lName;

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
	// roommateF = data.story[0].fName;
	// roommateL = data.story[0].lName;
	// assistantF = data.story[1].fName;
	// assistantL = data.story[1].lName;
	// girlfriendF = data.story[2].fName;
	// girlfriendL = data.story[2].lName;
	// librarianF = data.story[3].fName;
	// librarianL = data.story[3].lName;
	// madameF = data.story[4].fName;
	// madameL = data.story[4].lName;
	// gymF = data.story[5].fName;
	// gymL = data.story[5].lName;
	// lifeguardF = data.story[6].fName;
	// lifeguardL = data.story[6].lName;
	// chairF = data.story[7].fName;
	// chairL = data.story[7].lName;
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	hideSelf();
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
	// hideStuff();
	hideSave();
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
	if(name == "Desk Girl")
			cssColor = "#DC58D6";
	if(name == "opp"){
		if(data.story[0].sex=="H")
			cssColor = "#9400b5";
		else if(data.story[0].sex=="M")
			cssColor = "#3459c4";
		else
			cssColor = "#5d9e49";
		img="scripts/gamefiles/profiles/"+name+data.story[0].sex+".jpg";
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
	if (name == "card") {
		img = "scripts/gamefiles/profiles/card.jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName;
			var lName = data.story[i].lName;
			var tempIndex = i;
		}
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
	else if(name == "card"){
		document.getElementById('output').innerHTML +=`
		<div class="textBox" style="border-color: `+cssColor+`">
			<img class = "textThumb" onclick="openLogFor(`+tempIndex+`)" style="box-shadow: -5px 5px `+cssColor+`" src = "
				`+ img +`
			">
			<div class="textBoxContent">
			<p class = "textName" style="color:`+cssColor+`">Card</p>
			<p>` + replaceCodenames(text) + `</p>
		</div>
		<br>
		`;
	}
	else if(name == "Desk Girl"){
		document.getElementById('output').innerHTML +=`
		<div class="textBox" style="border-color: `+cssColor+`">
			<img class = "textThumb" onclick="openLogFor('Desk Girl')" style="box-shadow: -5px 5px `+cssColor+`" src = "
				`+ img +`
			">
			<div class="textBoxContent">
			<p class = "textName" style="color:`+cssColor+`">Desk Girl</p>
			<p>` + replaceCodenames(text) + `</p>
		</div>
		<br>
		`;
	}
	else if(name == "Man" || name == "Woman" || name == "Dickgirl"){
		if(name == "Woman")
			cssColor = "#DDB7DD";
		img = "scripts/gamefiles/profiles/misc.jpg";
		document.getElementById('output').innerHTML +=`
		<div class="textBox" style="border-color: `+cssColor+`">
			<img class = "textThumb" style="box-shadow: -5px 5px `+cssColor+`" src = "
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

// function writeArtifact (name) {
// 	console.log("Now writing artifact tab id " + name);
// 	var researchStatus = 0;
// 	var researchTotal = 0;
// 	var desc2 = "";
// 	for (i = 0; i < artifactArray.length; i++) {
// 		if (artifactArray[i].index == name) {
// 			var jam = i;
// 			var title = artifactArray[i].title;
// 			var desc = artifactArray[i].desc;
// 			var artifactResearchCheck = name + "Research1";
// 			if (artifactArray[i].equipable == true) {
// 				console.log("artifact is equippable");
// 				if (galleryCheck(artifactResearchCheck) == true) {
// 					console.log("artifact has been researched");
// 					var equip = "Equip";
// 					desc2 = artifactArray[jam].desc2;
// 				}
// 				else {
// 					console.log("artifact has not been researched");
// 					var equip = "";
// 					desc2 = "";
// 				}
// 			}
// 			else {
// 				console.log("artifact is not equippable");
// 				if (galleryCheck(artifactResearchCheck) == true) {
// 					console.log("artifact has been researched");
// 					desc2 = artifactArray[jam].desc2;
// 				}
// 				else {
// 					console.log("artifact has not been researched");
// 					desc2 = "";
// 				}
// 				var equip = "";
// 			}
// 		}
// 	}
// 	//console.log('now checking number of scenes');
// 	for (i = 0; i < galleryArray.length; i++) {
// 		if (galleryArray[i].index.includes(name)) {
// 			researchTotal += 1;
// 			if (galleryCheck(galleryArray[i].index) == true) {
// 				researchStatus += 1;
// 			}
// 		}
// 	}
// 	console.log('Scenes found, current progress is ' + researchStatus + ' of ' + researchTotal);
// 	//console.log('now determining appropriate research level');
// 	if (equip != "") {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
// 			<div class="textBoxContent">
// 			<p class = "textName">`+ title + `</p>
// 			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">Research</span>   
// 				<span class = "choiceText" onclick = "equip('`+name+`')">`+equip+`</span>
// 			</p>
// 			<p>`+ desc + `</p>
// 			<p>`+ desc2 + `</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	else {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
// 			<div class="textBoxContent">
// 			<p class = "textName">`+ title + `</p>
// 			<p>Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">Research</span>
// 			</p>
// 			<p>`+ desc + `</p>
// 			<p>`+ desc2 + `</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// }

function willUp(){
	if(data.player.will < 9)
		data.player.will += 1;
	if(data.player.fName == "Testing")
		writeSpecial("Willpower has been incremented.");
}

function willDown(){
	if(data.player.will > 1)
		data.player.will -= 1;
	if(data.player.fName == "Testing")
		writeSpecial("Willpower has been decremented.");
}

function addTokens(num){
	data.player.tokens += num;
	if(data.player.fName == "Testing"){
		if(num == 1)
			writeSpecial("You received a TF-Token.");
		else if (num == 2)
			writeSpecial("You received two TF-Tokens.");
		else
			writeSpecial("Not sure how, but you just received "+num+" tokens?");
	}
}

function loseTokens(num){
	data.player.tokens -= num;
	if(data.player.fName == "Testing")
		writeSpecial(num+" tokens have been spent.");
}

function willUp(){
	if(data.player.will < 9)
		data.player.will += 1;
	if(data.player.fName == "Testing")
		writeSpecial("Willpower has been incremented.");
}

function addFlag(flag){
	if(flag == "Rej"){
		data.player.flags += flag;
	}
	else if(data.player.flags.includes(flag)!=true){
		data.player.flags+=flag;
		if(data.player.fName == "Testing")
			writeSpecial("The flag <i>["+flag+"]</i> has been added to your save file.");
	}
	else
		writeSpecial("The duplicate flag <i>["+flag+"]</i> was not added to your save file.");
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

// function dreamCheck() {
// 	var event = false;
// 	var dreamChecker = data.player.artifact1 + "Dream" + "1";
// 	for (i = 0; i < galleryArray.length; i++) {
// 		if (dreamChecker == galleryArray[i].index) {
// 			if (galleryCheck(dreamChecker)==false) {
// 				event = dreamChecker;
// 			}
// 		}
// 	}
// 	dreamChecker = data.player.artifact2 + "Dream" + "2";
// 	for (i = 0; i < galleryArray.length; i++) {
// 		if (dreamChecker == galleryArray[i].index) {
// 			if (galleryCheck(dreamChecker)==false) {
// 				event = dreamChecker;
// 			}
// 		}
// 	}
// 	dreamChecker = data.player.artifact2 + "Dream" + "1";
// 	for (i = 0; i < galleryArray.length; i++) {
// 		if (dreamChecker == galleryArray[i].index) {
// 			if (galleryCheck(dreamChecker)==false) {
// 				event = dreamChecker;
// 			}
// 		}
// 	}
// 	switch (data.player.day) {
// 		case 0:
// 			event = 'dream0'; 
// 		break;
// 		case 1: 
// 			event = 'dream1';
// 		break;
// 	}
// 	tempScene = 'room';
// 	console.log('Final dream check result is ' + event);
// 	return event;
// }

// function researchLevel(name) {
// 	var artifactResearchName = name + 'Research';
// 	var failed = true;
// 	var sceneTarget = name + 'Failed';
// 	for (i = 0; i < galleryArray.length; i++) {
// 		if (galleryArray[i].index.includes(artifactResearchName)) {
// 			if (galleryCheck(galleryArray[i].index) != true) {
// 				failed = false;
// 				sceneTarget = galleryArray[i].index;
// 				break;
// 			}
// 		}
// 	}
// 	console.log('research level is ' + sceneTarget);
// 	if (failed == false) {
// 		writeEvent(sceneTarget);
// 	}
// 	else {
// 		sceneTransition(sceneTarget);
// 	}
// }

function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
		text = text.replace('playerF', data.player.fName);
		text = text.replace('playerL', data.player.lName);
		if(data.story[0].sex == "M"){
			text = text.replace('oppHer', 'his');
			text = text.replace('OppHer', 'His');
			text = text.replace('oppShe', 'he');
			text = text.replace('OppShe', 'He');
			text = text.replace('oppHim', 'him');
		}
		else{
			text = text.replace('oppHer', 'her');
			text = text.replace('OppHer', 'Her');
			text = text.replace('oppShe', 'she');
			text = text.replace('OppShe', 'She');
			text = text.replace('oppHim', 'her');
		}
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

// function renameEveryone() {
// 	for (i = 0; i < data.story.length; i++) {
// 		var sheet = 'nameSubmission' + i + '1';
// 		data.story[i].fName = document.getElementById(sheet).value;
// 		var sheet = 'nameSubmission' + i + '2';
// 		data.story[i].lName = document.getElementById(sheet).value;
// 	}
// 	sceneTransition("room");
// }

function renamePlayer() {
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	data.player.age = document.getElementById('ageSubmission').value;
	data.player.dick = parseInt(document.getElementById('dickSubmission').value,10);
	data.player.height = document.getElementById('heightSubmission').value;
	for(var i = 0; i < 4; i++){
		if(document.getElementById('build'+i+'').checked==true){
			data.player.buildVal = i;
		}
	}
	for(var i = 0; i < 3; i++){
		if(document.getElementById('gender'+i+'').checked==true){
			data.story[0].sex = document.getElementById('gender'+i+'').value;
		}
	}
	for(var i = 0; i < 3; i++){
		if(document.getElementById('role'+i+'').checked==true){
			data.player.pref = document.getElementById('role'+i+'').value;
		}
	}
	if(data.story[0].sex == "H"){
		data.story[0].fName = "Felicity";
		data.story[0].lName = "Lenore";
		data.story[0].piece = "purple";
		data.story[0].height = 75;
		data.story[0].buildVal = 1;
		data.story[0].clothesVal = 2;
		data.story[0].hairVal = 3;
		data.story[0].legsVal = 1;
		data.story[0].assVal = 1;
		data.story[0].chestVal = 2;
		data.story[0].genitalsVal = 2;
	sceneTransition("prologue2");
	}
	else if(data.story[0].sex == "M"){
		data.story[0].fName = "Cody";
		data.story[0].lName = "Devons";
		data.story[0].piece = "blue";
		data.story[0].height = 73;
		data.story[0].buildVal = 1;
		data.story[0].clothesVal = 0;
		data.story[0].hairVal = 0;
		data.story[0].legsVal = 0;
		data.story[0].assVal = 0;
		data.story[0].chestVal = 0;
		data.story[0].genitalsVal = 1;
	sceneTransition("prologue2");
	}
	else if(data.story[0].sex == "F"){
		data.story[0].fName = "Sienna";
		data.story[0].lName = "Kendrix";
		data.story[0].piece = "green";
		data.story[0].height = 67;
		data.story[0].buildVal = 0;
		data.story[0].clothesVal = 1;
		data.story[0].hairVal = 1;
		data.story[0].legsVal = 3;
		data.story[0].assVal = 1;
		data.story[0].chestVal = 1;
		data.story[0].genitalsVal = 0;
	sceneTransition("prologue2");
	}
	else{
		writeText("Yo, you somehow set your opponent's sex to something impossible? It was probably a glitch, but if it was on purpose, you won't find any eldritch abominations to waifu in this game. Sorry about that.");
	}
}

// function equip(n) {
// 	data.player.artifact2 = n;
// 	updateMenu();
// 	document.getElementById('output').innerHTML = '';
// 	for (i = 0; i < artifactArray.length; i++) {
// 		if (artifactArray[i].index == n) {
// 			var title = artifactArray[i].title;
// 		}
// 	}
// 	writeText("You've equipped the " + title);
// 	writeTransition(data.player.currentScene, "Go back");
// }

// function checkArtifact(n) {
// 	if (n == data.player.artifact1 || n == data.player.artifact2) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

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

// function generateGalleryNav() {
// 	for (i = 0; i < artifactArray.length; i++) {
// 		if (artifactArray[i].dark == false) {
// 			document.getElementById('output').innerHTML += `
// 				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
// 					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
// 					<br>
// 					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
// 				</div>
// 				<br>
// 			`;
// 		}
// 	}
// 	for (i = 0; i < data.story.length; i++) {
// 		if (data.story[i].met == true) {
// 			document.getElementById('output').innerHTML += `
// 			<div class = "textBox" onclick="generateGirlPage('` + data.story[i].index + `')" >
// 				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
// 				<br>
// 				<span class = "choiceText" onclick="generateGirlPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
// 			</div>
// 			<br>
// 			`;
// 		}
// 	}
// 	document.getElementById('output').innerHTML += `
// 		<div class = "textBox" onclick="generateSwallowsPage()" >
// 			<img class = "textThumb" src = "scripts/gamefiles/profiles/swallows.png">
// 			<br>
// 			<span class = "choiceText" onclick="generateSwallowsPage()">Scenes written by Swallows999</span>
// 		</div>
// 		<br>
// 	`;
// 	writeFunction("generateDarkGalleryNav()", "View the dark vault gallery");
// }

// function generateDarkGalleryNav() {
// 	document.getElementById('output').innerHTML = '';
// 	for (i = 0; i < artifactArray.length; i++) {
// 		if (artifactArray[i].dark == true) {
// 			document.getElementById('output').innerHTML += `
// 				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
// 					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
// 					<br>
// 					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
// 				</div>
// 				<br>
// 			`;
// 		}
// 	}
// 	writeTransition("gallery", "Go back");
// }

// function generateArtifactPage(n) {
// 	document.getElementById('output').innerHTML = '';
// 	writeBig("scripts/gamefiles/items/"+n+".jpg");
// 	console.log('checking for ' + n);
// 	for (i = 0; i < galleryArray.length; i++) {
// 		//console.log(galleryArray[i].index);
// 		//console.log(i);
// 		if (galleryArray[i].index.includes(n)) {
// 			console.log('event found, unlock status is ' + galleryCheck(galleryArray[i]));
// 			if (galleryCheck(galleryArray[i].index) == true) {
// 				writeFunction ("writeEvent('"+galleryArray[i].index+"')", galleryArray[i].name)
// 			}
// 		}
// 	}
// 	writeTransition(data.player.currentScene, "Go back");
// }

// function generateSwallowsPage() {
// 	document.getElementById('output').innerHTML = '';
// 	writeBig("scripts/gamefiles/profiles/swallows.png");
// 	for (i = 0; i < data.gallery.length; i++) {
// 		if (data.gallery[i].girl.includes('swallows')) {
// 			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
// 		}
// 	}
// 	writeTransition(data.player.currentScene, "Go back");
// }

// function generateGirlPage(n) {
// 	document.getElementById('output').innerHTML = '';
// 	writeBig("scripts/gamefiles/characters/"+ n +".jpg");
// 	for (i = 0; i < data.gallery.length; i++) {
// 		if (data.gallery[i].girl.includes(n)) {
// 			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
// 		}
// 	}
// 	writeTransition(data.player.currentScene, "Go back");
// }

// function galleryCheck(n) {
// 	for (x = 0; x < data.gallery.length; x++) {
// 		if (data.gallery[x].index.includes(n)) {
// 			return true;
// 			break;
// 		}
// 	}
// 	return false;
// }

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
	if(n == "Desk Girl"){
		console.log("now loading logbook for character ID DESKGIRL aka DESKGIRL");
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/profiles/desk.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc">Name: Desk Girl</h2>
		</div><div class=" lb_secondary">
			<p class = "selfDesc">The girl handling the front desk of D.T.C. Since she's always sitting, you can't really tell how tall she is, though she's clearly got a slim figure. You can also clearly see the edges of her bra poking out of a rather casual V-neck sweater, something that's obviously done on-purpose if the way she toys with the neck is anything to go by.</p>
			<p class = "selfDesc">She has her hair pulled into a loose bun, with some stray strands framing her face and others pulled behind her ears. Every time she pauses her typing to slide some of her hair over her ear, she takes a moment to fiddle with her earlobe...</p>
			<p class = "selfDesc">Aside from that, though, the desk blocks the view of the rest of her. Her smile seems genuine, though, like she actually does enjoy working here.</p>
		</div>
		`;
	}
	else if (n != "player") {
		if(n != "Desk Girl")
			console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+data.story[n].sex+`.jpg">
			`;
		}
		if(data.story[0].genitalsVal2 != 0){		
			document.getElementById('logbookRight').innerHTML += `
			<div class=" lb_primary">
				<h2 class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</h2>
			</div><div class=" lb_secondary">
				<p class = "selfDesc">`+data.story[0].fName+oppHeightArray[data.story[0].heightVal].desc+Math.floor(data.story[0].height / 12)+` feet and `+Math.floor(data.story[0].height % 12)+` inches tall,`+oppBuildArray[data.story[0].buildVal].desc+oppClothesArray[data.story[0].clothesVal].desc+`</p>
				<p class = "selfDesc">`+oppHairArray[data.story[0].hairVal].desc+oppEarsArray[data.story[0].earsVal].desc+`</p>
				<p class = "selfDesc">`+oppLegsArray[data.story[0].legsVal].desc+oppAssArray[data.story[0].assVal].desc+oppTailArray[data.story[0].tailVal].desc+`</p>
				<p class = "selfDesc">`+oppChestArray[data.story[0].chestVal].desc+oppGenitalsArray[data.story[0].genitalsVal].desc+data.story[0].dick+oppGenitalsArray2[data.story[0].genitalsVal2].desc+`</p>
			</div>
			`;
		}
		else{
			document.getElementById('logbookRight').innerHTML += `
			<div class=" lb_primary">
				<h2 class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</h2>
			</div><div class=" lb_secondary">
				<p class = "selfDesc">`+data.story[0].fName+oppHeightArray[data.story[0].heightVal].desc+Math.floor(data.story[0].height / 12)+` feet and `+Math.floor(data.story[0].height % 12)+` inches tall,`+oppBuildArray[data.story[0].buildVal].desc+oppClothesArray[data.story[0].clothesVal].desc+`</p>
				<p class = "selfDesc">`+oppHairArray[data.story[0].hairVal].desc+oppEarsArray[data.story[0].earsVal].desc+`</p>
				<p class = "selfDesc">`+oppLegsArray[data.story[0].legsVal].desc+oppAssArray[data.story[0].assVal].desc+oppTailArray[data.story[0].tailVal].desc+`</p>
				<p class = "selfDesc">`+oppChestArray[data.story[0].chestVal].desc+oppGenitalsArray[data.story[0].genitalsVal].desc+`</p>
			</div>
			`;
		}
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
			<p class = "selfDesc"><i>Tokens:</i> `+data.player.tokens+`</p>
			<p class = "selfDesc">`+playerHeightArray[data.player.heightVal].desc+Math.floor(data.player.height / 12)+` feet and `+Math.floor(data.player.height % 12)+` inches tall,`+playerBuildArray[data.player.buildVal].desc+playerClothesArray[data.player.clothesVal].desc+`</p>
			<p class = "selfDesc">`+playerHairArray[data.player.hairVal].desc+playerEarsArray[data.player.earsVal].desc+`</p>
			<p class = "selfDesc">`+playerLegsArray[data.player.legsVal].desc+playerAssArray[data.player.assVal].desc+playerTailArray[data.player.tailVal].desc+`</p>
			<p class = "selfDesc">`+playerChestArray[data.player.chestVal].desc+playerGenitalsArray[data.player.genitalsVal].desc+data.player.dick+playerGenitalsArray2[data.player.genitalsVal].desc+`</p>
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
// function cheat() {
// 	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
// 	var goof = document.getElementById('cheatSubmission').value;
// 	goof = goof.toLowerCase();
// 	var goofMessage = "Code does not exist";
// 	console.log("Testing cheat code " + goof);
// 	switch (goof) {
// 		case "swallows999": {
// 			goofMessage = "Welcome, Swallows."
// 			if (checkBody("swallows") != true) {
// 				var goof = {index: "swallows", name: "Anomaly Vault's Sponsor",};
// 				data.bodytypes.push(goof);
// 				var target = data.bodytypes.length - 1;
// 				changeBody(target);
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "new name": {
// 			data.player.currentScene = "renamingRoom";
// 			goofMessage = ""
// 			break;
// 		}
// 		case "scp": {
// 			if (data.player.color.includes('scp') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'scp';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "securecontainprotect": {
// 			if (data.player.color.includes('scp') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'scp';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "secure contain protect": {
// 			if (data.player.color.includes('scp') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'scp';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "lobotomy": {
// 			if (data.player.color.includes('lobotomy') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'lobotomy';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "lobotomycorp": {
// 			if (data.player.color.includes('lobotomy') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'lobotomy';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "lobotomy corporation": {
// 			if (data.player.color.includes('lobotomy') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'lobotomy';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "umbrella": {
// 			if (data.player.color.includes('umbrella') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'umbrella';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "resident evil": {
// 			if (data.player.color.includes('umbrella') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'umbrella';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "silent hill": {
// 			if (data.player.color.includes('silent') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'silent';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "warehouse13": {
// 			if (data.player.color.includes('warehouse') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'warehouse';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "warehouse 13": {
// 			if (data.player.color.includes('warehouse') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'warehouse';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "fringe": {
// 			if (data.player.color.includes('fringe') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'fringe';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "ethics": {
// 			if (data.player.color.includes('ethics') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'ethics';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "welcome to ethics": {
// 			if (data.player.color.includes('ethics') == false) {
// 				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
// 				data.player.color += 'ethics';
// 			}
// 			else {
// 				goofMessage = "You've already used this code."
// 			}
// 			break;
// 		}
// 		case "noodlemaster": {
// 			for (x = 0; x < galleryArray.length; x++) {
// 				if (galleryCheck(galleryArray[x].index)== false) {
// 					unlockScene(galleryArray[x].index);
// 				}
// 			}
// 			goofMessage = "Master code accepted. All scenes unlocked."
// 			break;
// 		}
// 		case "haa": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 		case "human alteration app": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 		case "rainy dayz": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 		case "princess quest": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 		case "bitch medicenter": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 		case "hentai university": {
// 			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
// 			break;
// 		}
// 	}
// 	sceneTransition(data.player.currentScene);
// 	writeText(goofMessage);
// }

// function listCheats() {
// 	if (data.player.color.includes('scp') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/doctor.jpg">
// 			<p class = "textName">'Plague' Doctor</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('doctorResearch')">Research</span>   
// 			</p>
// 			<p class = "textName">A mysterious woman dressed in a skimpy version of a medieval plague doctor's uniform. Very dangerous.</p>
// 		</div>
// 		<br>
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/talisman.jpg">
// 			<p class = "textName">Talisman</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('talismanResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A possessed talisman. There's a sticky note on it saying 'DO NOT TOUCH'</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('lobotomy') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/magical.jpg">
// 			<p class = "textName">Magical Girl</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('magicalResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A woman proclaiming herself to be a champion of justice. You're pretty sure she was fished up from a river somewhere.</p>
// 		</div>
// 		<br>
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/blue.jpg">
// 			<p class = "textName">Blue Star</p>
// 			<p class = "textName">Blue Star</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('blueResearch')">Blue Star</span>
// 			</p>
// 			<p class = "textName">Blue Star</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('warehouse') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/kettle.jpg">
// 			<p class = "textName">Wish-granting Kettle</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('kettleResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A rusty old kettle. It showed some promise at one point, but it's creators clearly had the wrong focus and it just isn't as shiny as everything else.</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('fringe') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/fringe.jpg">
// 			<p class = "textName">Ultra Top Secret Room</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('fringeResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A super locked room, you aren't allowed to go in here. The end of the door's paint job is much, much more lazily done than the rest.</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('umbrella') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/umbrella.jpg">
// 			<p class = "textName">Zombie Virus</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('umbrellaResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A vial containing a zombification virus. Hopefully it makes hot zombies, not gross ones.</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('silent') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/silent.jpg">
// 			<p class = "textName">Nurse's Room</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('silentResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A room full of strange creatures, which probably symbolize a really deep message about sexuality or something.</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// 	if (data.player.color.includes('ethics') == true) {
// 		document.getElementById('output').innerHTML +=`
// 		<div class = "textBox">
// 			<img class = "textThumb" src = "scripts/gamefiles/items/ethics.jpg">
// 			<p class = "textName">Ethics Rock</p>
// 			<p class = "textName">Research Status: N/A</p>
// 			<p>
// 				<span class = "choiceText" onclick = "sceneTransition('ethicsResearch')">Research</span>
// 			</p>
// 			<p class = "textName">A rock that dispenses lines of  ethical ramblings. It's a rock though, so it probably doesn't know what its talking about.</p>
// 		</div>
// 		<br>
// 		`;
// 	}
// }

// function kettleWish() {
// 	var goof = document.getElementById('kettleSubmission').value;
// 	sceneTransition(data.player.currentScene);
// 	if (goof == "ferret" || goof == "ferrets") {
// 		kettleCounter +=2;
// 		writeText("A good wish! For this, you get two ferrets. You have "+kettleCounter+" ferrets.");
// 	}
// 	else {
// 		kettleCounter +=1;
// 		writeText("Suddenly, out of nowhere, a ferret is here. You have "+kettleCounter+" ferret(s).");
// 	}
// 	switch (kettleCounter) {
// 		case 5:
// 			writeText("You have a dazzle of ferrets now, they're very cute.");
// 		break;
// 		case 7:
// 			writeText("You might be making too many ferrets. Maybe try wishing for something else?");
// 		break;
// 		case 9:
// 			writeText("Soon you will have too many ferrets.");
// 		break;
// 		case 10:
// 			writeText("You feel like if you keep making ferrets, nothing but ferrets will exist.");
// 		break;
// 		case 12:
// 			writeText("The kettle rumbles a little this time, as if saying 'If this many ferrets do not satisfy you, no wish will.'");
// 		break;
// 		case 13:
// 			writeText("The ferret making will continue forever. When you are satisfied, please scream the number to the heavens.");
// 		break;
// 	}
// }

// function writeWardrobe() {
// 	for (i = 0; i < data.bodytypes.length; i++) {
// 		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
// 		writeFunction("changeBody('"+i+"')", data.bodytypes[i].name);
// 	}
// }

// function checkBody(n) {
// 	console.log("Now checking for bodytype " + n);
// 	for (i = 0; i < data.bodytypes.length; i++) {
// 		if (data.bodytypes[i].index.includes(n)) {
// 			return true;
// 			break;
// 		}
// 	}
// 	return false;
// }

// function changeBody(n) {
// 	data.player.character = data.bodytypes[n].index;
// 	data.player.characterArtist = data.bodytypes[n].artist;
// 	updateMenu();
// }
