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
		newChange:"",
		flags: "",
		round:0,
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
	],
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
	{desc: " and you're probably pretty-average weight-wise.",},
	{desc: " and you're just a little heavier than average.",},
	{desc: " and you're just a bit more slim and light than average.",},
	{desc: " and you're pretty muscular compared to most people.",},
	{desc: " and you've got a bit more in the curves-department compared to most people.",},
	{desc: " and you are practically an Adonis when it comes to your body and muscles.",},
	{desc: " and you are a <i>lot</i> curvier than most people.",},
	{desc: " and you're a lot slimmer than you were at the start of the game. Plus, your ears almost seem pointed, now...",},
	{desc: " and you're body is a whole lot more sturdy and barrel-like than at the start of the game. Doesn't make your skin any less sensitive, though...",},
];

var oppClothesArray = [
	{desc: " He's wearing a tight-fitting T-shirt that hides nothing, and a pair of loose jeans that you could swear shouldn't be as tight around the crotch as they look.",},
	{desc: " She's wearing a tight-fitting T-shirt that does nothing to hide the fact that she skipped putting on a bra, and a pair of just-as-tight jeans that hug her ass and hips in ways that can really <i>do things</i> to a man.",},
	{desc: " She's wearing a tight-fitting T-shirt that's just thin enough for you to see the the color of her light-violet bra, and a pair of loose jeans that you could swear shouldn't be as tight around the crotch as they look.",},
	{desc: " He's wearing a tight-fitting T-shirt and absolutely nothing else, exposing everything below his stomach with no shame and even a bit of pride.",},
	{desc: " She's wearing a tight-fitting T-shirt that's just thin enough for you to see the the color of her light-violet bra, a pair of four-inch heels, and not a thread more. She's clearly proud of what she's showing off.",},

];
var playerClothesArray = [
	{desc: " You're wearing some normal, fairly-comfortable clothes - nothing to write home about.",},
	{desc: " You have some rather racy, feminine clothes on right now; it's a bit embarrassing to wear, though.",},
	{desc: " You have some rather racy, feminine clothes on right now; if you're being honest, it's a little bit of a turn-on...",},
	{desc: " You're wearing some nice, loose clothes that can accomodate for your changing body.",},
	{desc: " You're wearing a <i>very</i> tight outfit that hugs every part of your body, hiding absolutely nothing from your opponent.",},
	{desc: " You're wearing some normal, fairly-comfortable clothes - though, they're a bit big for your body now.",},
	{desc: " You're wearing some normal, fairly-comfortable clothes - though, they're a lot tighter than they normally would be. It's probably just the magic that's keeping them from tearing or digging into your skin.",},
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
	{desc: " A pair of adorable cat ears poke out from the top of your head, just sensitive enough that you can feel the very faint breeze caressing the fur. ",},
	{desc: " A pair of adorable dog ears droop out from the sides of your head. They don't seem to be able to hear much, but you could swear you can hear your own heartbeat through them. ",},
	{desc: " A pair of twitchy bunny ears spring out from the top of your head. Despite your best efforts, you can't seem to control how they move, especially when your opponent takes a good look at them. ",},
	{desc: " A pair of sensitive fox ears pop out from the top of your head. You can't seem to stop them from twitching slightly whenever you hear a noise, even if it's as quiet as the drop of a pin. ",},
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
	{desc: "Your legs are shaped like tree trunks and you could swear are just as strong, which you're not sure how you feel about.",},
	{desc: "Your legs are incredibly plush now, like extra-soft, extra-thick pillows that are completely soft and smooth from top to bottom.",},
	{desc: "Your legs are pretty slim. They don't look fragile or anything, but your legs definitely aren't the strongest-looking.",},
];

var oppAssArray = [
	{desc: "And of course, those legs lead right up into a well-toned ass that pulls your attention to it. Looking at it, you can't help but feel curious about how firm it would feel in your hands...",},
	{desc: "And of course, those legs lead right up into a well-toned ass that pulls your attention to it. Despite how firm you would <i>swear</i> it has to be, there always seems to be just enough jiggle that it shakes with every movement.",},
	{desc: "And of course, those legs lead right up into a thick, fat ass that threatens to spill over the seat. Whenever your opponent shifts in place, you could swear it practically ripples.",},
	{desc: "And of course, those legs lead right up into a taut little bubble-butt that you definitely won't see on a real man. It must be really sensitive, too, if your opponent's gentle squirming is anything to go by.",},

];
var playerAssArray = [
	{desc: " When it comes to your ass, it's not like it's boney or anything, but you have to admit that it's fairly average.",},
	{desc: " Then there's your ass, which has just enough body to it that you can't blame your opponent for stealing the occasional glances at your backside.",},
	{desc: " And then, there's your ass. Thanks to the transformation, it's thick enough that you can feel it bounce when you move, and it's far more sensitive than you expected.",},
	{desc: " And of course, then comes your ass. Your butt is smaller and more lithe than before, but it's sensitive enough that just sitting down feels like someone started to massage it.",},
	{desc: " And of course, then comes your ass. Your butt is a lot bigger and firmer than before, but it's still sensitive enough that just sitting down feels like someone started to massage it.",},
	{desc: " At this point, your ass is just a beautifully big, rippling mound of fuckmeat. It's so sensitive that you could probably be made to come with just an intimate massage.",},
	{desc: " Then there's your ass, which, thanks to the transformation, Has a very firm and tight shape to it - it's toned enough that it practically looks chiseled.",},
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
	{desc: "You have a pretty normal, somewhat firm chest. You're in pretty good shape compared to most people, though you probably won't be winning any body-building contests anytime soon. ",},
	{desc: "You you have a pair of teeny-titties pushing out from your chest, highlighting your slim sissy figure. ",},
	{desc: "Having shrunk down, your chest is similarly slimmer, with your shoulders less broad now than before. ",},
	{desc: "Your chest and shoulders are a lot broader now, though they look (and feel) pretty toned. ",},
	{desc: "Your tits have expanded even further, jumping right past Double-Ds and straight into '<i>huge</i>' territory. They're actually even more sensitive now than they were before! ",},
];

var oppGenitalsArray = [
	{desc: "",},
	{desc: "You can see signs of a bulge at his crotch, though his pants are loose enough that that's all you can see.",},
	{desc: "You can see clear signs of a rather large bulge at her crotch, though her pants are loose enough that you can't really make much else out.",},
	{desc: "She has a pair of violet panties on, just sheer enough for you to see the shape of her pussy.",},
	{desc: "His cock is hanging down between his legs, not quite fully erect but still at least ",},
	{desc: "Her cock is hanging down between her legs, not quite fully erect but still at least ",},
	{desc: "His cock is standing tall between his legs, fully erect and obviously at least ",},
	{desc: "Her cock is standing tall between her legs, fully erect and obviously at least ",},
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
	{desc: "Despite your body growing, your cock is still ",},
	{desc: "A thick, heavy, ",},
	{desc: "A ruby-red, ",},
	{desc: "Your cock grew a fair bit, now ",},
	{desc: "Your gargantuan cock is a solid ",},
];
var playerGenitalsArray2 = [
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inch long cock. Since starting the game, it's been feeling a lot more sensitive than you remember.",},
	{desc: "-inches long. Despite that, it feels even <i>more</i> sensitive now than it did before...",},
	{desc: "-inches long. At this point, it doesn't even get hard, but the tip is always dribbling just a little bit of pre.",},
	{desc: "-inches long. It almost makes it look shorter than it used to be when compared to you now.",},
	{desc: "-inch long horsecock is hanging down loosely. It's not as stiff as a normal dick, but that isn't really the appeal, is it?",},
	{desc: "-inch long doggy-dick is hanging down between your thighs. You could swear it feels far warmer than it should, <i>especially</i> the knot.",},
	{desc: "-inches long and fairly intimidating in terms of girth.",},
	{desc: "-inches long, and probably the upper limit of what you should really have it if you value having blood pumping through the rest of your body.",},
];

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
		loadSlot(191);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	// hideSelf();
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

function addTrans(){
	if(data.player.flags.includes("trans1"))
		return;
	else
		addFlag("trans1");
}

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
	if(data.player.fName == "Testing"){
		writeSpecial(num+" tokens have been spent.");
		if(data.player.tokens > 1)
			data.player.tokens -= num;
	}
	else if(data.player.tokens < 1)
		writeSpecial("You are out of tokens. How in the world did you do that...?")
	else
		data.player.tokens -= num;
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
	else if(data.player.fName == "Testing")
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
	document.getElementById('day').innerHTML = "Round: "+data.player.round;
	document.getElementById('tokens').innerHTML = "Tokens: "+data.player.tokens;
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
	saveSlot(190);
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
		data.story[0].dick = 8;
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
	for (i = 181; i < 189; i++) {
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