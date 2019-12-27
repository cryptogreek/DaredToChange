function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		//System Locations
		case "start" : {
			writeText("<i><b>Dare(d) to Change</i></b> is a text-based adult game written by Cryptogreek/CaptainCryptogreek, built in NoodleJacuzzi's custom engine with his permission. Learning to use it basically meant teaching myself JavaScript but, given that I'm not a fan of Twine, I'm glad to just be coding rather than working with a GUI. If you haven't checked out his content, you can keep up with it all at his <a href='https://noodlejacuzzi.github.io/index.html'>master index by clicking here.</a>");
			writeText("This game does contain what some people would consider <i>bizarre</i> fetishes, so here's a content warning:");
			writeText("This game contains themes of <i><b>physical transformation</b> (including manifestation of some animal features and growth/shrinking of genitalia)</i> and <i><b>mental transformation</b> (induced heat/rut and sissification). </i>If you find this content objectionable, you probably won't have a fun time playing this.");

			writeText("With that in mind, you can scroll further down for a bit more information on the game, or you can jump right into by pressing the button below!");
			writeTransition("prologue", "Start the game [The tutorial and 70% of round one have been implemented]");
			writeTransition("test", "Test the game [Expect everything to break]");
			//writeTransition("prologueSkip", "Skip the prologue");
			writeText("Other notes:");
			writeText("This game was made for the <a href='https://tfgames.site/phpbb3/viewtopic.php?f=12&t=12799'>Game-Night Contest on TFGames.</a>");
			writeText("You can open a character's description by clicking on their icon - do this often to see a lot of the changes that occur, both of the person and how you view them in the game.");
			writeText("The game is currently fairly limited in terms of content. As of Version 0.2, it includes physical transformation (body shrinking and animal ears), tongue-play, massage-play (shoulder or foot), oral sex, watersports, and butt plugs. All watersports and foot content can be avoided if you choose, and they're pretty obvious about it.");
			writeText("Future fetishes currently planned include sissification, bimbofication, more animal parts (particularly tail-play and knotting), breast-growth, feminization, and masculinization.");
			writeText("My Discord is corenkeitaro#7169. If you see anything that needs fixing in the game, you can message me there or email me at cryptogreekcaptions@gmail.com. I also am pretty active on the Discord server <a href='https://discord.gg/8SgGSMm'>Noodle's Jacuzzi</a>, which has information on both my current projects and on Noodle's.");
			writeText("If you enjoyed the writing in this game, you might want to check out <a href='https://noodlejacuzzi.github.io/Hentai%20University/Hentai%20University.html'>Hentai University</a>, another game that I write for! It's hypnotism-focused, though, rather than transformation.");
			writeText("You can click on the title of a window to close it. For example, if you click 'STATUS' on the left, you can close the new window by clicking anywhere in the 'STATUS' section at the top.");
			break;
		}
		case "test" : {
			data.player.fName = "Testing";
			data.story[0].sex = "H";
			data.story[0].met = true;
			data.story[0].fName = "Felicity";
			data.story[0].lName = "Lenore";
			data.story[0].height = 75;
			data.story[0].buildVal = 1;
			data.story[0].clothesVal = 2;
			data.story[0].hairVal = 3;
			data.story[0].legsVal = 1;
			data.story[0].assVal = 1;
			data.story[0].chestVal = 2;
			data.story[0].genitalsVal = 2;
			writeSpeech("player","","Some test dialogue. The player is currently a man.");
			writeSpeech("opp","","And I'm oppF! I'll be your opponent in tonight's game!");
			data.player.character = "pink";
			writeSpeech("player","","And now, the player should be a woman and/or sissy!");
			data.player.character = "red";
			writeSpeech("player","","But now, for testing reasons, the player is a man again.");
			updateMenu();
			writeTransition("fairyKingStart", "Test the Fairy King's Forest");
			writeTransition("fairyAccEnthused", "Accept the Fairy's Help Enthusiastically");
			writeTransition("fairyAccReluctant", "Accept the Fairy's Help Reluctantly");
			writeTransition("fairyRejDom", "Reject the Fairy's Help (Dom)");
			writeTransition("fairyRejSub", "Reject the Fairy's Help (Sub)");
			writeTransition("fairyRej", "Reject the Fairy's Help (Switch)");
			writeTransition("golemCaveStart", "Test the Cavern of the Golems");
			writeTransition("golemAccFoot", "Show Humility to the Golems (give opponent foot massage)");
			writeTransition("golemAccShoulder", "Show Humility to the Golems (give opponent shoulder massage)");
			writeTransition("golemRej", "Reject the Golem's Challenge");
			writeTransition("androStart", "Watch your opponent go to Andro-Spring");
			writeTransition("cafeStart", "Watch your opponent go to the Shadow Elf Cafe");
			writeTransition("titanStart", "Go to the Titan's Gate");
			writeTransition("driderStart", "Go to the Drider's Nest");
			break;
		}
		case "startWardrobe": {
			writeWardrobe();
			writeTransition("start", "Go back");
			break;
		}
		case "demo": {
			// writeText("So that's all I've got for now. You should have a decent idea of the game's structure at this point. With the engine good to go each actual release would include 8-10 scenes, probably introducing two new artifacts with each version.");
			// writeText("I'd be splitting my focus between this and other projects, but I think I could reliably get a new release for this game out every month.");
			// writeText("Between work research, home use, and dream sequences there are quite a few directions to take each artifact. One thing you could do is let me know directly what you'd do with the artifact and I can implement that in game. 'I'd use the bracelet at the beach!' Then I write a beach scene.");
			// writeText("I only showed off two of the girls, so here's a list of each girl I have images / code prepared for, I can use any of them pretty freely:");
			// for (i = 0; i < data.story.length; i++) {
			// 	writeMed(`scripts/gamefiles/characters/`+data.story[i].index+data.story[i].image+`.jpg`);
			// 	document.getElementById('output').innerHTML += `
			// 	<p class="centeredText">`+data.story[i].fName+` `+data.story[i].lName+`</p> 
			// 	<p class="centeredText">`+data.story[i].desc+`</p> 
			// 	`;
			// }
			// writeText("And with that everything I have to present is finished.");
			// break;
		}
		case "prologue": {
			writeText("A fairly nice-looking, if not very eye-catching, four-story building is in front of you. Given the sign in the window, \"D.T.C.\", you're pretty confident that the address must be correct.");
			writeText("You were always at least a bit of a fan of games, playing all sorts back in your teens, but nowadays, there are a lot fewer opportunities to play. So, when a friend from back then sent you a message about the place that hosts private Game Nights, you couldn't really help but feel curious.");
			writeText("...That, and the fact that the website was very explicit about the games having sexual content caught your attention. Sure, the way they talked about the game transforming the players seemed a bit ridiculous, but to be entirely honest... Being able to change your body might actually be a pretty welcome way to break the monotony for a night.");
			writeText("Still, standing in front of the place won't get you anywhere, so...");
			writeTransition("prologue1", "Go inside");
			break;
		}
		case "prologue1" : {
			writeText("Stepping into the building, you can see that it's well-kept, but is about as uninteresting as the outside. The only thing that stands out is the woman at the desk, whose eyes lock on yours immediately.");
			writeText("She smiles widely, standing up a bit straighter.");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Good evening, sir! Are you here for one of our Game Nights?");
			writeText("You pause for just a moment, before walking towards her with a nod.");
			writeSpeech("player","","Yeah. I signed up on the website?");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Ah, good! Drop-ins are a lot harder to pair up, but you should already have a partner assigned to you by now.");
			writeText("She reaches underneath her desk and quickly pulls out a sheet of paper. A second later, you're handed it, a clipboard, and a pen.");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Just write down your personal information on this, and we'll use it to look you up and find your room and partner. Ah, and don't worry!");
			writeText("She leans forward half-conspiratorily, smiling wider.");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","We don't tell your partner what you write, so don't worry about that. Of course, given the <i>services</i> our game provides, they'll probably know a whole lot more than's on that sheet by the end of the night!");
			writeSpeech("player","","...Is that so?");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Yup! So don't worry about judgement and just get ready to have some fun!");
			writeText("At that, she shifts back in her seat and starts typing on the computer, probably getting ready to look you up.");
			writeText("Speaking of...");
			writeTransition("prologueName", "Fill out the sheet");
			break;
		}
		case "prologueName": {
			writeText("First Name: <input type='text' id='nameSubmission' value='Kevin'>");
			writeText("Last Name: <input type='text' id='lastSubmission' value='Rascals'>");
			writeText("Age: <input type='text' id='ageSubmission' value='25'> <font size='-2'>(18+)</font>");
			writeText("Dick (in): <input type='text' id='dickSubmission' value='6'> <font size='-2'>(1-12)</font>");
			writeText("Height (in): <input type='text' id='heightSubmission' value='66'> <font size='-2'>(60-78)</font>");
			writeText("Build: &nbsp <input type='radio' id='build0' name='build' value='average' checked='true'> Average &nbsp &nbsp <input type='radio' id='build1' name='build' value='stocky'> Stocky &nbsp &nbsp <input type='radio' id='build2' name='build' value='slim'> Slim &nbsp &nbsp <input type='radio' id='build3' name='build' value='fit'> Fit");
			writeText("Preferred Role: &nbsp <input type='radio' id='role0' name='pref' value='switch' checked='true'> Switch &nbsp &nbsp <input type='radio' id='role1' name='pref' value='sub'> Sub &nbsp &nbsp <input type='radio' id='role2' name='pref' value='dom'> Dom");
			writeText("Sexual Preference: &nbsp <input type='radio' id='gender0' name='gender' value='M' checked='true'> Male &nbsp &nbsp <input type='radio' id='gender1' name='gender' value='F'> Female &nbsp &nbsp <input type='radio' id='gender2' name='gender' value='H'> Shemale");
			//writeTransition("prologue3", "Finish");
			writeFunction("renamePlayer()", "Finish");
			break;
		}
		case "prologue2" : {
			if(data.player.fName == "Testing")
				writeSpecial("Your name is Testing. Debug mode has been activated.");
			if(data.player.age < 18){
				writeText("It was at that moment that you realized that you totally forgot you were underaged.");
				writeText("Meg brings over a friend and you play Uno while eating junk food. You have a lot of wholesome, non-sexual fun.");
				writeTransition("prologueName", "That was a joke, I'm actually 18+.");
				break;
			}
			if(data.player.dick > 7){
				if(data.player.dick > 12){
					writeText("Sir, if your gut-puncher is over a foot long, you need to stop playing porn and start <i>doing</i> it.");
					writeTransition("prologueName", "Go smaller.");
					break;
				}
				else{
					data.player.genitalsVal = 1;
					writeSpecial("You have an abnormally large cock, which makes you feel more confident in your masculinity.");
					data.player.will += 1;
				}
			}
			if(data.player.dick < 4){
				if(data.player.dick < 1){
					writeText("At least in this version, there's no option to start as either a woman or a eunuch.");
					writeTransition("prologueName", "Go back.");
					break;
				}
				else{
					data.player.genitalsVal = 2;
					writeSpecial("You have an abnormally small penis, which makes you a bit more insecure about your masculinity.");
					data.player.will -= 1;
				}
			}
			if(data.player.height < 60 || data.player.height > 78){
				writeText("For reasons of height-based transformations, your starting height has to be between 5' (60in) and 6'6\" (78in). Sorry!");
				writeTransition("prologueName", "Go back.");
				break;
			}
			if(data.player.pref == "dom"){
				writeText("With your sheet all filled out, you hand it over to the desk-girl. She looks over it quickly, holding the clipboard with one hand and typing with the other.");
				writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Heh, no hesitation, huh? You and your partner are sure to have fun. Hopefully enough to keep coming back - we might even get matched up some time.");
				writeText("She flashes you a smile before she finishes typing.");
			
			}
			else if(data.player.pref == "sub"){
				writeText("With your sheet filled out, you're a little hesitant to hand it over and let the desk-girl read it, but...");
				writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Ah, sorry! Forgot that your first can be embarrassing... I've actually played this loads of times, so I won't judge.");
				writeText("You take a moment before nodding and handing over the clipboard, which she quickly uses to look you up.");
			}
			else{
				writeText("You fill out the sheet and hand it over to the desk girl, though your face does get a bit red as you see her looking it over and looking you up.");
				writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","Don't worry about it being your first time, by the way. Everyone starts out somewhere, and I hope you have a good enough time to keep coming back.");
				writeText("She flashes you a winning smile before she finishes typing and glances at the screen.");
			}
			var roomNum = (getRandomInt(4)+3);
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","And... Yup, there you are. You're in Room "+ roomNum +", and your partner's name is oppF. If you just head down the hallway and look for your number, oppShe should already be there! Just take this card and you're on your way!");
			writeText("She pulls out a little plastic ID-card and hands it to you - the back is stamped with <i>Dare(d) to Change</i>, while the front is just your first name in a fancy font.");
			writeSpeech("player","","Alright, thanks.");
			writeSpeech("Desk Girl","scripts/gamefiles/profiles/desk.jpg","No problem, sweetheart. Have fun!");
			writeText("With that, she goes back to typing on the computer while you head down the hallway. It's a pretty short walk, and you can hear incredibly faint sounds from a few doors that were left open just a crack.");
			writeText("Despite that fact, they're still muffled enough that you can't make anything out without actually trying. Seems like D.T.C. takes players' privacy pretty seriously... and like some of the players don't really care that much.");
			writeText("If you wanted, you could probably take a peek in one of these rooms... Who knows what you might see?");
			writeTransition("prologueMeet", "It would be rude to make your partner wait on you");
			writeTransition("prologuePeek", "Well, maybe just a quick look...");
			break;
		}
		case "prologueMeet": {
			if(data.player.flags.includes("Peek"))
				writeText("Moving quickly and trying not to focus on what you just watched, you find room "+roomNum+" and pause for a moment.");
			else
				writeText("Peeking on someone without their consent feels a bit off, so you head to find your designated room instead. It doesn't take long for you to get to it, though you pause when you get there.");
			writeText("A small silver tag is hanging from the handle, reading <i>\"Occupied - Waiting for playerF\"</i>. It's rather fancily designed, actually...");
			writeText("Still, you move your hand forward and turn the knob, with the tag shimmering for a moment before turning a deep azure, the text now reading, <i>\"Game in Progress\".</i>");
			writeSpeech("player","","Whoa...");
			writeSpeech("opp","","Pretty neat, right?");
			writeText("Looking into the room, you see your partner for the game sitting down on the couch, smiling pretty wide.");
			if(data.story[0].sex == "M"){
				writeText("OppShe is leaning against the back of the couch, both oppHer arms and legs spread out casually. OppShe raises oppHer hand to give a casual wave, oppHer tight shirt highlighting oppHer toned chest.");
				writeSpeech("opp","","playerF, right? I'm oppF. Looks like we'll be in each other's care for this one.");
				writeText("He extends his hand out to shake, which you quickly move to take.");
				writeSpeech("player","","It's good to meet you. It's my first time playing, so...");
				writeText("OppShe nods understandingly.");
				writeSpeech("opp","","Yeah, the owner said as much - first-timers often get cold feet and never show up, so she wanted to make sure I was prepped for that. Good to see you came, though!");
				writeText("OppShe claps oppHis hand against your shoulder gently.");
				writeSpeech("opp","","Take all this at whatever speed you like. A game's only fun if everyone's into it, y'know?");
				writeSpeech("player","","Heh. Alright, thanks.");
				writeText("At that, oppShe leans back into the couch again.");
				writeSpeech("opp","","If you want, we can go over the rules a bit before we start. You might already know 'em, though, so if you'd rather we jumped right into the first-hand experience, I'm up for that too.");
			}
			else if(data.story[0].sex == "F"){
				writeText("OppShe is leaning against the back of the couch, oppHer legs neatly folded over and her hands resting on her thigh. She gives you a confident smile and sits up a bit straighter, which does <i>things</i> to her assets.");
				writeSpeech("opp","","playerF, right? I'm oppF. Looks like we'll be getting to have a whole lot of fun with each other!");
				writeText("She extends her hand out, which you quickly move to shake.");
				writeSpeech("player","","It's good to meet you. It's actually my first time playing, so...");
				writeText("OppShe nods understandingly.");
				writeSpeech("opp","","Yeah, the owner said as much - first-timers often get cold feet and never show up, so she wanted to make sure I was prepped for that. Good to see you came, though!");
				writeText("She smiles a bit more, brushing her hand against yours.");
				writeSpeech("opp","","You can take this as slow as you need. I want this to be fun enough that you come back and see everything, after all!");
				writeSpeech("player","","Heh. Alright, thanks.");
				writeText("At that, oppShe leans back into the couch again.");
				writeSpeech("opp","","If you'd like, we can start by going over the rules a bit before we begin. If you already know them, though, we can always jump right into the game and see how things go?");
			}
			else{
				writeText("OppShe is leaning against the back of the couch, but she stands up fully as you walk in - she's rather tall, actually. She gives you a confident smile and offers you her hand.");
				writeSpeech("opp","","I'm oppF. You're playerF, right? It's a pleasure to meet you. Looks like we'll be playing DTC with each other, yeah?");
				writeSpeech("player","","The pleasure's mine, and it looks like it. It is my first time, though, so...");
				writeText("OppShe grins widely, nodding.");
				writeSpeech("opp","","I getcha. The boss told me that, since first-timers can get cold feet sometimes, but I'm glad you decided to come. Go as slow as you need - we can always pick up the pace once you're comfortable with the game!");
				writeSpeech("player","","That sounds like a good idea, thanks.");
				writeText("OppShe takes her seat again, falling against it with a thump.");
				writeSpeech("opp","","Ah, did you want to go over the rules before we start?");
				writeText("She sits up a bit straighter again.");
				writeSpeech("opp","","If you already know them, we can jump right into it, but it might help a bit to hear them if you skimmed them like I did the first time.");
			}
			writeTransition("prologueRules", "Let's go over the rules before we start");
			writeTransition("prologueStart", "I already know them, so let's get started");
			break;
		}
		case "prologuePeek": {
			addFlag("Peek");
			writeText("Well, given that this is a place for sexy sorts of games, them leaving the soundproofed door cracked open could mean that that's what they're into - being heard and seen by other people.");
			writeSpeech("player","","Plus, it might help to see what I'm getting into...");
			writeText("Telling yourself that, you move towards one of the doors and look at it. You actually do spot a small pink tag on the handle.");
			writeText("Your face goes a bit a bit red when you see that it read, <i><b>\"Watch me~\"</b></i>, with a little lipstick-kiss beside it.");
			writeText("You reach out to touch it and, as you do, the door seems to shimmer for just a moment.");
			writeText("Then, you can see through it, with a faint whisper in the back of your head that it's a one-way view, and they can't actually see you... though you note that a faint light flashes on.");
			if(data.story[0].sex == "M"){
				writeText("You can see two people on a couch; at first glance, it looks like a man and a very slim woman, but the sight of something flopping around uselessly quickly corrects your assumption.");
				writeText("The effeminate of the two is completely naked, bouncing up and down on the other man's almost unbelievably thick cock, with frantic and girly moans spilling out of their mouth each time the man bottoms out.");
				writeText("The <i>real</i> man, on the other hand, is almost completely clothed, with his pants barely pulled low enough to reveal the bitch-breaker he keeps driving deep into the boy's ass.");
				writeText("However, it's when you look at the top of the boy's head that you realize that something's a little off.");
				writeText("A pair of fox ears are poking right out the top, one twitching around in blissful pleasure, and the other being bit down on as he squirms and tries to moan despite the hand clamped down on his throat.");
				writeSpeech("Man","none","Fuck... Get <i>bred</i>, you little <i><b>bitch...!</b></i>");
				writeText("With a rough, vicious <i>slamming</i> of his hips, the man thrusts harder as the boy's eyes roll back as his whole body starts to twitch.");
				writeText("Without even touching his still-limp dicklet, he starts dribbling out cum as you watch the bigger man's fat balls visibly tighten up, his entire cock tensing as he pumps a thick load into his boytoy.");
				writeText("After a few seconds of that, he slowly lifts the practically insensate sissy off his cock, a full ten inches sliding out before more cum than you thought possible starts <i>pouring</i> out... And for the man to set the boy down and start gently rubbing his ears.");
				writeText("The door slowly fades back in, obscuring your vision of the aftercare as you realize just how turned on you'd gotten.");
			}
			else if(data.story[0].sex == "F"){
				if(data.player.pref == "sub"){
					writeText("You're immediately greeted with the sight of a man pinned face-up to a coffee table, his legs pointed to the door, and a woman sitting on his face.");
					writeText("A sadistic look plays across her face as she grinds down onto his, her pussy pressed against his mouth as she gropes her chest.");
					writeSpeech("Woman","none","Ooh, <i>fuck,</i> love... Keep going~ The sooner I cum, the sooner you <i>breathe~!</i>");
					writeText("You can clearly see the man's cock get harder as she says that, a throaty moan spilling out of her mouth as she leans forward.");
					writeSpeech("Woman","none","Ah...? Oh my~");
					writeText("She grins widely, staring right at the door now.");
					writeSpeech("Woman","none","The light above the door lit up... I wonder what that could possibly mean~");
					writeText("The man seems to freeze for a moment, before bucking against her a bit harder.");
					writeSpeech("Woman","none","Oh, <i>hush.</i> You were the one who put the tag up, darling, so you don't get to complain about an <i>audience.</i>");
					writeText("She shakes her head a bit before sending a gentle smile your way, winking.");
					writeText("Then, she slowly lowers her body forward, her breasts pressing against her toy's hips as she starts to slowly jerk him off.");
					writeText("She spreads around his precum before taking a slow, deep-breath...");
					writeText("And throats him balls-deep in a swift movement.");
					writeText("You can see the man's hips buck forward, but she pulls up just as quickly and leaves him swinging wildly.");
					writeSpeech("Woman","none","Your challenge is edging until I cum, love. You'd better not pop before I do~");
					writeText("Her hand keeps teasing the tip a bit more, a pathetic mewling coming from the man before she laughs and takes another deep breath.");
					writeText("She does the same move, taking him balls-deep and pulling back, a trail of spit connecting his tip and her lips, but it goes differently this time.");
					writeText("His cock starts bouncing frantically, tightening up as he spurts wildly. It spatters across her chest as she gasps in surprise, before a disappointed look flashes across her face.");
					writeSpeech("Woman","none","And you were doing so well... Almost half an hour of edging, and being watched makes you cum in under a minute. Looks like you'll have to take a punishment, hun.");
					writeText("An apologetic look flashes across her face as she looks to the door.");
					writeSpeech("Woman","none","Sorry it was so short. Have fun with your own game, whoever you are!");
					writeText("The door starts to fade back in, obscuring the room as she wipes some of the cum from her body and starts raising it to her lips.");
					writeText("It takes you a moment to catch your breath, your pants feeling very, <i>very</i> tight now.");
				}
				else{
					writeText("You're immediately greeted with the sight of a woman pinned down to a coffee table, her ankles pressed down next to her ears as a <i>very</i> well-hung man pounds into her cunt.");
					writeText("She's moaning like a porn star, her fluttering eyes hazed over as she paws at a truly massive pair of tits hanging down.");
					writeText("As the man continues to fuck her, though, you can't help but notice something large and fluffy waving behind them.");
					writeSpeech("Man","none","Moan <i>louder, <b>whore.</b></i>");
					writeText("He <i>slams</i> his hips against hers, the wet slapping almost as loud as the high-pitched squeal of pleasure that came from her mouth.");
					writeSpeech("Woman","none","F-Fuck me harder...~! You've still got another hole to <i><b>break</b></i> or you'll get <i>punished~!</i>");
					writeSpeech("Man","none","Are you really <i>that fucking cum-hungry,</i> bitch?");
					writeText("Instead of answering, she just keeps moaning as he saws into her cunt with reckless abandon, her eyes lingering on the door for a moment.");
					writeSpeech("Woman","none","O-Oh fuck...~! The light above the door it-");
					writeText("A moan interrupts her thought as he <i>slams</i> his hips into her ass again, her whole body starting to shudder.");
					writeSpeech("Man","none","<i>Fuck...</i> What'd you say?");
					writeSpeech("Woman","none","...Nothing~ Just that I bet your load this time won't be half as thick~!");
					writeText("The man lets out a deep growl, but grins as he lets go of one of her ankles.");
					writeSpeech("Man","none","You're just <i>begging</i> for this, aren't you?");
					writeSpeech("Woman","none","Fuck me stupid, darling~");
					writeText("Hearing that, he grasps onto one of her massive tits and forces it in front of her own face.");
					writeSpeech("Man","none","Better bite down, slut.");
					writeText("Pulling out of her pussy, he aims a little lower as her eyes go wide.");
					writeSpeech("Woman","","<i><b>Yes sir~!</b></i>");
					writeText("He pushes into her ass as she sucks on her own tit, her eyes rolling back as he starts picking up speed and pounds her deeper.");
					writeText("You're not even sure how long he spends fucking her ass as she suckles on one breast and gropes the other, but you can tell from the groans when he's about finished.");
					writeText("Clearly, she can too, as she quickly wraps her free leg around his back and pulls him balls-deep and keeps him there as he grunts,");
					writeSpeech("Man","","Fucking <i>take it, bitch...!</i>");
					writeText("After a few seconds of that, he starts to pull out, but she keeps him in place.");
					writeSpeech("Woman","","No need to rush... I want to enjoy the <i>fullness</i> a little longer...");
					writeText("He pauses, before sighing with a smile.");
					writeSpeech("Man","","Sure.");
					writeText("The door starts to fade back in, obscuring the room as he leans into her chest and she runs her hands through his hair.");
					writeText("It takes you a moment to catch your breath, your pants feeling very, <i>very</i> tight now.");
				}
			}
			else{
				writeText("You're immediately greeted with the sight of a woman laying face-up on the couch and another woman standing above her... for a certain definition of woman, seeing as what she's currently got crammed down the girl's throat.");
				writeText("From here, you can clearly see the girl's throat distending while the dickgirl roughly saws into her throat... though, clearly not rough enough for the woman's liking, seeing as she keeps grabbing her partner's ass to pull her deeper.");
				writeSpeech("Dickgirl","","Holy <i>shit,</i> you weren't kidding about your throat...!");
				writeText("The woman lets out a low hum, making her partner's back curl as he breathing hitches.");
				writeText("There's a pause, before the low hum turns into a soft melody as the herm does her best to thrust at a steady rate.");
				writeSpeech("Dickgirl","","Fuck, fuck, fuck, fuck, <i><b>FUCK!</b></i>");
				writeText("She leans her entire body forward, grabbing onto the woman's tits and squeezing them roughly, only for the humming to get louder and more wild as she does.");
				writeSpeech("Dickgirl","","That's <i>so</i> not fair...! Are you seriously humming the <i>national anthem around my <b>dick!?</b></i>");
				writeText("The woman's body clearly shakes with laughter, before one of her hands goes to her neck.");
				writeSpeech("Dickgirl","","Oh, <i>Hell</i> no!");
				writeText("It quickly gets swatted away.");
				writeSpeech("Dickgirl","","The challenge is no hands, hun, and I'm not letting this end early just 'cause you got impatient!");
				writeText("Instead, she puts her own hands around the woman's throat, tightening down as they both start to moan, muffled as the woman's grunts were.");
				writeSpeech("Dickgirl","","Is this what you wanted? Then <i>fucking take it!</i>");
				writeText("She starts pulling out all the way to the head before roughly fucking her throat like a sex toy, even as the woman uses her hands to finger herself and toy with her clit.");
				writeText("Neither of them are able to last long, with the bodily shaking clueing you into the woman's orgasm, and the wild shaking pushing the dickgirl over.");
				writeText("You hear a low, primal moan as you watch see the woman's throat distend a bit more as a thick, almost impossibly large load spurts into her stomach. When the dick is finally pulled out of her throat, she rolls over and gasps desperately for air.");
				writeSpeech("Dickgirl","none","S-Shit, are you oka-");
				writeText("The woman's hand limply lashes out, grabbing the dickgirl's shirt and pulling her down... Or, more accurately, trying to.");
				writeSpeech("Woman","none","F-Fuckin'... What'dya take me for, ya fuckin' quickshot...?");
				writeText("There's a brief pause, before they both start laughing.");
				writeSpeech("Woman","none","N-Next time, pull out a bit when you cum... I wanna taste it, 'kay?");
				writeSpeech("Dickgirl","none","...We are <i>so</i> coming back her sometime.");
				writeText("The door starts to fade back in, obscuring the room as she helps the girl sit up a bit straighter, her cock still dripping with spit.");
				writeText("It takes you a moment to catch your breath, your pants feeling very, <i>very</i> tight now.");
			}
			writeSpeech("player","","...Wow. I, uh... should probably get to my own room...");
			writeTransition("prologueMeet", "Meet up with your partner");
			break;
		}
		case "prologueRules": {
			addFlag("Rules");
			writeSpeech("player","","Let's go over the rules, just to make we're on the same page.");
			writeSpeech("opp","","Got it.");
			writeText("OppShe starts off by gesturing to a large game-board built into a mini-table in the center of the room. It's completely flat and featureless now, save for two thing.");
			writeText("Two colored pieces are sitting near one end - a red one and a "+data.story[0].piece+" one right next to it.");
			writeSpeech("opp","","The "+data.story[0].piece+" one is me. The board is blank now, but that's because it reveals bits of itself as the game goes on and it lets us choose tiles to go to.");
			writeText("OppShe gestures to the side, where a card-slot appears to be situated.");
			writeSpeech("opp","","You'll get your challenges, punishments, and rewards out of there. Every round, we both choose one of two places to go, starting with the newer player, and we either have to do what the card tells us, or we face some kind of punishment.");
			writeSpeech("opp","","The punishments can be all sorts of things, from having a sex toy wrapped around your cock for a few rounds to actual physical and mental changes.");
			writeSpeech("opp","","The main thing you'll want to know about is tokens. You get one every round, even if you get punished, but you get another when you complete a challenge. You can use these to do some of the things the website mentioned.");
			writeSpeech("player","","The magical transformation stuff?");
			writeSpeech("opp","","Exactly. The person who made the game and runs this place calls herself a <i>Conveniomancer</i> whose purpose in life is using her magic to let people have comfy games when they're not working.");
			writeSpeech("player","","And... I should just believe in a magical wizard lady?");
			writeSpeech("opp","","It goes a lot smoother that way, yeah. Besides, you already met her - she's the girl behind the desk.");
			writeSpeech("player","","Oh. Neat.");
			writeSpeech("opp","","Yup. Anyway, you can spend tokens on transformations like getting a pair of fox ears or something. Feel free to save them up or spend them how you like - they're just there to make the game a bit more fun if you want to add some spice to the challenges.");
			writeText("oppF pauses.");
			writeSpeech("opp","","Though, I should say that you can only do it in between rounds, not during them. Probably for balance reasons, if I had to guess.");
			writeSpeech("player","","Makes sense. Wouldn't want weird interactions causing some problems after the challenge has already been chosen.");
			writeSpeech("opp","","Exactly. With that, though... I think we're actually pretty good on rules. We have the round, where we trade off moving our pieces; the challenge-portion, where we do something sexy or embarrassing; and the post-round, where we can use tokens.");
			writeSpeech("player","","Alright, makes sense to me... Probably.");
			writeSpeech("opp","","It'll be clearer during the game, I promise - actually experiencing it is different from having someone describe it.");
			writeTransition("prologueStart", "Then let's start experiencing it");
			break;
		}
		case "prologueStart": {
			data.player.round = 1;
			document.getElementById("day").innerHTML = "Round: "+data.player.round; 
			if(data.player.flags.includes("Rules")){
				writeSpeech("player","","Then let's go ahead and get this game started.");
				writeText("OppShe grins, nodding.");
			}
			else{
				writeSpeech("player","","I'm fine with the rules - anything I missed, I'll probably be able to figure out while we play.");
				writeSpeech("opp","","Fair enough - it'll probably be more fun that way.");
			}
			writeText("oppF grabs oppHer ID-card and lightly taps it against the board, a ripple-effect spreading out from the contact point. Following suit, you do the same, though yours is accompanied by a faint <i>ping</i> ringing out.");
			writeSpeech("opp","","Cool-cool, we're both in. Now, for the weird bit...");
			writeText("You open your mouth to ask what oppShe means by that, but a tingling sensation suddenly surges throughout your body and answers that question.");
			writeText("It's not a <i>bad</i> feeling by any means, but it's a lot like feeling a gentle breeze across every pore at once, while still being very... <i>tingly.</i>");
			writeText("A few seconds later, though, and the sensation passes, leaving you feeling a lot more sensitive across your body than you felt a second ago.");
			writeSpeech("opp","","Still not sure how I feel about that, but it's definitely interesting.");
			writeSpeech("player","","I'll say...");
			writeText("You rub at your forearm a bit, before something else catches your eye.");
			writeText("The board shimmers for a moment, an incandescent white covering everything before colors start to slowly fade back in, revealing that both of your pieces are still sitting at the same spot, but there are now two large tiles that you can choose from.");
			writeSpeech("opp","","Looks like the game's all prepped. Newest player goes first, so...");
			writeText("OppShe gestures for you to move your piece, leaning back in oppHer position on the couch. There's something smug about that smirk...");
			writeText("For now, though, it might be better to take a look at those tiles.");
			writeText("The first is a forest, with tiny trees popping out of the board around it. A sparkly cloud seems to hover above it, but it's thin enough to be able to see the name of the tile - The Fairy King's Forest.");
			writeText("The second is a large cave-mouth of carved brown-orange stone with some type of rock-creature standing in front of it. Engraved into the top of the cave-mouth, the tile's name shines slightly in the light - Cavern of the Golems.");
			writeText("You can choose between either one, but you could also ask oppF about them. He/She might have seen them before in another game.");
			writeTransition("fairyKingStart", "Go to The Fairy King's Forest");
			writeTransition("fairyKingStart", "Go to The Cavern of the Golems");
			writeTransition("advice1", "Ask about the two options");
			break;
		}
		case "advice1" : {
			addFlag("advice1");
			writeSpeech("player","","Actually... You've played this before, right?");
			writeSpeech("opp","","A couple of times, yeah. What's up?");
			writeSpeech("player","","Have you seen these tiles before? Or maybe you've got an idea what they'll do?");
			writeText("You can practically see the amount of smug coming off of oppHer increase, but oppShe gives a small shrug.");
			writeSpeech("opp","","Well, fairy-related things tend to have punishments that make you more fairy-like, and their challenges usually use curiosity as a theme? I don't know exactly what it'll be, but anything that says fairy will probably do something to make you smaller or more lithe.");
			writeSpeech("player","","Makes sense. And what about golems?");
			writeSpeech("opp","","They're big, burly, stone creatures. If I had to guess, the punishment would probably make you bigger. No clue about the challenge, though - I've only ever seen one Golem-themed event, and it was in the fourth round, so it was a bit extreme.");
			writeSpeech("opp","","...And no, I won't explain further on what that was, just in case it comes up in our game.");
			//If you're actually reading through this code, props to you! Your secret piece of information is that it involved a chastity cage.
			writeSpeech("player","","Alright. Thanks for the advice.");
			writeSpeech("opp","","No problem. So, what're you thinking about choosing?");
			writeTransition("fairyKingStart", "Go to The Fairy King's Forest");
			writeTransition("fairyKingStart", "Go to The Cavern of the Golems");
			break;
		}
		case "cheat": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.</p>
				<p class='centeredText'>Enter cheat code: <input type="text" id="cheatSubmission" value=""></p>
				<p class='choiceText' onclick='cheat()'>Submit</p>
			`;
			writeTransition("room", "Go back");
			break;
		}
		case "fairyKingStart" : {
			addFlag("fairy");
			writeText("After weighing your options for a moment, you decide to move your piece forward and place it firmly on the forested tile. After removing your hand, there's a faint <i>click</i> sound as a card pops out of the side of the game board.");
			writeText("The front is labeled with the name of the game, and turning it around-");
			writeSpeech("card","none","You received your first card~!");
			writeText("You jump sharply at the sound of a chipper feminine voice, oppF hiding a smile behind oppHer hand.");
			writeSpeech("card","none","Don't worry about reading the cards out loud - I can do that for ya!");
			writeText("oppF shifts in place, leaning back a bit more.");
			writeSpeech("opp","","Don't worry, I jumped the first time I heard it too. Just focus on the card, and it'll read the whole thing out for you.");
			writeSpeech("player","","Huh. Little weird, but alright.");
			writeText("You look back at the card, a faint shimmer rolling across its surface.");
			writeSpeech("card","none","Any forest that houses the Fae can be a tricky place to get lost in, and there are no forests harder to navigate than those of the Fairy King. You get hopelessly lost, but rejoice! A friendly elf can lead you out of the forests, though oppShe seems rather curious about humans...");
			writeSpeech("card","none","Challenge: Let the other player toy with your tongue for as long as they want, even if you start drooling all over yourself!");
			writeText("oppF looks at you with a slightly raised eyebrow. You can accept the challenge and get a pair of tokens, or reject it and get just one along with some sort of punishment effect...");
			writeTransition("fairyAccEnthused", "Accept the challenge - enthusiastically open wide");
			writeTransition("fairyAccReluctant", "Accept the challenge - reluctantly open wide");
			writeTransition("fairyRej", "Discard the card and take a punishment instead");
			if(data.player.fName == "Testing"){
				writeSpecial("Debug mode is active. Debug choices are available.")
				writeTransition("fairyRejSub", "Discard the card and take a punishment instead (Submissive)");
				writeTransition("fairyRejDom", "Discard the card and take a punishment instead (Dominant)");
				writeTransition("fairyRej", "Discard the card and take a punishment instead (Switch)");
			}
			break;
		}
		case "fairyAccEnthused" : {
			if(data.player.flags.includes("AccEnthused")!=true)
				willDown();
			addFlag("AccEnthused");
			writeText("You smile at oppF, licking your lips a bit.");
			writeSpeech("player","","Sounds like a pretty good start.");
			writeSpeech("opp","","Hah. Looks like someone's getting excited; do I even need to ask if you're up for the challenge?");
			writeText("In response, you just open your mouth wide, letting out a soft \"<i>Ahh~</i>\" as you do.");
			writeText("oppF slides up close to you with a grin, oppHer fingers very quickly reaching towards your mouth... but not going in just yet.");
			writeText("OppShe starts off with just rubbing the pads of oppHer fingers along your lips, sending a tingling sensation along them and through your entire mouth.");
			writeText("You can feel your face flushing as oppF's own face turns a little red, though that only seems to make oppHim lean oppHer face in even closer.");
			writeText("A moment later, you feel a finger finally go past your lips as oppShe starts exploring around, pressing gently against your tongue with just the tip.");
			writeSpeech("opp","","Did you notice?");
			writeText("You reflexively move to speak, but oppHer fingers make it a bit difficult to reply.");
			writeSpeech("opp","","The game increases your sensitivity all over the place... It's why the first round is always something tame, but sensual. It's to get you accustomed to...");
			writeText("A finger softly caresses the underside of your tongue, feeling far better than it should as your body shudders slightly.");
			writeSpeech("opp","","...Well, to all of <i>this.</i>");
			writeText("Even as oppHer fingers tease your tongue, you can feel another slowly gliding across your gums, spreading your spit all around as it starts flowing past your lips and down your chin.");
			writeText("Every teasing prod makes it harder to control your breathing, and despite how far back oppShe slides oppHer fingers, you never feel the urge to gag - just a strong feeling of wanting oppHer to push them even further.");
			writeText("OppShe gently pulls on your tongue, pulling it all the way out of your mouth as a bit of drool starts to dribble from the tip, the pad of oppHer thumb sliding across the slick top...");
			writeSpeech("opp","","...Neat.");
			writeText("Before oppShe pulls oppHer hand away suddenly, leaving your mouth feeling dreadfully empty as oppShe takes oppHer seat again leans back.");
			writeText("You're stuck halfway in a haze for a few seconds before you can refocus, the smug look on oppF's face as oppShe looks at your spit-covered chin only making your face feel redder.");
			writeText("You feel the urge to wipe away the loose spit, but suppress it as you smirk at oppF.");
			writeSpeech("player","","I'm gonna get you back for that, you know.");
			writeSpeech("opp","","Threatening me with a good time, are you?");
			writeText("oppF grins wolfishly.");
			writeSpeech("opp","","I'll be looking forward to it... But for now, collect your prize.");
			writeText("The sound of a faint <i>clink</i> from the gameboard pulls your attention to the same little port that the card came out of. Despite definitely not having been large enough to fit quarter-sized tokens, the slot still popped a pair of them out.");
			addTokens(2);
			writeSpeech("opp","","It stretches. Magically.");
			writeText("oppF points to the slot, an amused look playing across oppHer face.");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "fairyAccReluctant" : {
			addFlag("AccReluctant");
			writeText("You shift around a bit, before taking a deep breath and nodding.");
			writeSpeech("player","","Well... It's not like it's the <i>most</i> embarrassing challenge I could do.");
			writeSpeech("opp","","So you're taking the challenge, then?");
			writeSpeech("player","","Yeah. Besides, this is probably pretty tame compared to what's coming, right?");
			writeText("oppF smirks a bit.");
			writeSpeech("opp","","We'll get to that when we get to that. But if you're going to take the challenge...");
			writeText("OppShe trails off, oppHer tongue playing with oppHer lips for just an instant.");
			writeText("You hesitantly open your mouth wide, oppF leaning in close and bringing oppHer fingers to bear.");
			writeSpeech("player","","Hn...!?");
			writeText("From the moment oppShe touches the inside of your mouth, a soft jolt spreads throughout your body. OppHer thumb traces along your gums just for a moment before you feel oppHer pointer finger start gently pressing against the middle of your tongue.");
			writeText("A faint blush spreads across oppF's face, probably just as red as your own, as oppShe starts pushing against it. That you can feel the smallest movements of oppHer fingers is almost unreal...");
			writeSpeech("opp","","Did you notice?");
			writeText("You reflexively move to speak, but oppHer fingers make it a bit difficult to reply.");
			writeSpeech("opp","","The game increases your sensitivity all over the place... It's why the first round is always something tame, but sensual. It's to get you accustomed to...");
			writeText("A finger softly caresses the underside of your tongue, feeling far better than it should as your body shudders slightly.");
			writeSpeech("opp","","...Well, to all of <i>this.</i>");
			writeText("OppShe gently pulls on your tongue, pulling it all the way out of your mouth as a bit of drool starts to dribble from the tip, the pad of oppHer thumb sliding across the slick top...");
			writeSpeech("opp","","...Neat.");
			writeText("Before oppShe pulls oppHer hand away, taking oppHer seat again as oppShe leans back.");
			writeText("You're stuck halfway in a haze for a few seconds before you can refocus, the smug look on oppF's face as oppShe looks at your spit-covered chin only making your face feel redder.");
			writeText("Wiping the loose spit from your face, you quickly say,");
			writeSpeech("player","","I'm gonna get you back for that, you know.");
			writeSpeech("opp","","Threatening me with a good time, are you?");
			writeText("oppF grins wolfishly.");
			writeSpeech("opp","","I'll be looking forward to it... But for now, collect your prize.");
			writeText("The sound of a faint <i>clink</i> from the gameboard pulls your attention to the same little port that the card came out of. Despite definitely not having been large enough to fit quarter-sized tokens, the slot still popped a pair of them out.");
			addTokens(2);
			writeSpeech("opp","","It stretches. Magically.");
			writeText("oppF points to the slot, an amused look playing across oppHer face.");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "fairyRejSub" : {
			data.player.pref = "sub";
			writeScene("fairyRej");
			break;
		}
		case "fairyRejDom" : {
			data.player.pref = "dom";
			writeScene("fairyRej");
			break;
		}
		case "fairyRej" : {
			if(data.player.flags.includes("fairyRej"!=true)){
				willUp();
				addFlag("Rej");
			}
			writeSpeech("player","","Yeah, I... don't think I'm gonna do that. No offense or anything, I'd just rather not have someone's fingers in my mouth.");
			writeText("oppF shrugs.");
			writeSpeech("opp","","I get that - to each their own. Plus, since it's the first round, it's not like the punishment will be <i>too</i> bad. Push the card back in the slot if you're sure about it.");
			writeText("Putting the card back, it quickly gets pulled into the board... only for another to pop out in its place. Pulling that one out, you hear the card's voice:");
			writeSpeech("card","","You rejected the elf's help, huh? Well, unfortunately for you, it looks like oppShe isn't taking the rejection well. You don't recognize the words that oppShe's saying, but you recognize the tones of spellcraft easily. You don't have time to do anything before blacking out!");
			writeSpeech("card","","When you wake up, you're outside of the forest but, standing up, you realize that something happened to you... Your whole body shrank! Not just in height, but you're also a lot more slim and feel pretty fragile now. It'll take a while to get used to your new, small frame!");
			writeText("There's a moment of silence after the card finishes, before you feel <i>something.</i> You feel breathless, but not in a painful way, and an almost fuzzy sensation plays across your skin.");
			writeText("Your muscles tighten up sharply as you let out a gasp at a much higher-pitch than you should have, and your vision goes white.");
			writeText("Only for a second, though. After that, you can see normally again, though everything around you seems predictably larger from your new height.");
			writeSpeech("card","","Congratulations on your first transformation! A shame it had to be through a punishment, but that's just the way the game goes!");
			writeSpecial("Your entire body is now smaller and more lithe! To see your new appearance (and any future changes), click either STATUS on the sidebar or click your character's portrait when you speak.");
			data.player.height = 50;
			data.player.heightVal = 1;
			data.player.buildVal = 7;
			data.player.clothesVal = 5;
			data.player.legsVal = 4;
			data.player.assVal = 3;
			data.player.chestVal = 5;
			if(data.player.dick > 5){
				data.player.dick -= 1;
				data.player.genitalsVal = 3;
			}
			writeText("oppF takes a moment to look you over, taking in your smaller body with an amused look.");
			writeSpeech("opp","","If I didn't know any better, I'd say you lost some weight since I last saw you.");
			writeSpeech("player","","Funny. My skin feels weird, though - and not just because of the size difference...");
			writeSpeech("opp","","Ah, yeah. The game increases your sensitivity all over the place... It's why the first round is always something tame, but sensual. It's to get you accustomed to...");
			writeText("OppShe gestures vaguely at your body.");
			writeSpeech("opp","","To all of that, really. It really helps make some things you wouldn't normally be into feel pretty damn good, especially in the later rounds.");
			writeSpeech("player","","That makes sense. Still a little weird, though.");
			writeSpeech("opp","","Eh, that's magic for ya. I find it's a lot more fun if you just roll with it and have some fun with whatever gets thrown at you.");
			writeText("A clink from the side of the board pulls your attention to the card-slot, which, despite clearly not being large enough to fit a token through, just spat one out.");
			addTokens(1);
			writeText("oppF loosely points to it, still looking amused.");
			writeSpeech("opp","","It stretches. One of the tiles actually can make <i>people</i> a little stretchy too.");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "golemCaveStart" : {
			addFlag("golem");
			writeText("After weighing your options for a moment, you decide to move your piece forward and place it in front of the cavern's opening. After moving your hand away, there's a faint <i>click</i> sound as a card pops out of the side of the game board.");
			writeText("The front is labeled with the name of the game, and turning it around-");
			writeSpeech("card","none","You received your first card~!");
			writeText("You jump sharply at the sound of a chipper feminine voice, oppF hiding a smile behind oppHer hand.");
			writeSpeech("card","none","Don't worry about reading the cards out loud - I can do that for ya!");
			writeText("oppF shifts in place, leaning back a bit more.");
			writeSpeech("opp","","Don't worry, I jumped the first time I heard it too. Just focus on the card, and it'll read the whole thing out for you.");
			writeSpeech("player","","Huh. Little weird, but alright.");
			writeText("You look back at the card, a faint shimmer rolling across its surface.");
			writeSpeech("card","none","The caverns created by the ancient golems are far-reaching and expansive, but they're also fiercely protected by their creators, the golems themselves. If you want to gain access, it's said that the golems will respect and help those who are willing to show great humility...");
			writeSpeech("card","none","Challenge: Give the opponent a foot or shoulder massage. It's alright if you don't know how - it's the thought that counts!");
			writeText("oppF looks at you with a slightly raised eyebrow.");
			writeSpeech("opp","","You actually get a choice in how you do it, huh? That's actually pretty rare, but I guess it's 'cause it's the first round.");
			writeText("You can accept the challenge and get a pair of tokens, or reject it and get just one along with some sort of punishment effect...");
			writeTransition("golemAccFoot", "Accept the challenge and give your opponent a foot massage");
			writeTransition("golemAccShoulder", "Accept the challenge and give your opponent a shoulder massage");
			writeTransition("golemRej", "Discard the card and take a punishment instead");
			break;
		}
		case "golemAccFoot" : {
			addFlag("AccFoot");
			if(data.story[0].sex=="M"){
				if(data.player.pref == "dom"){
					writeSpeech("player","","Let's get those shoes off, oppF.");
					writeSpeech("opp","","Taking the lead, then? Well, can't say I mind too much.");
					writeText("OppShe deftly undoes the laces before pulling both the shoe and sock off.");
				}
				else{
					writeSpeech("player","","Well, it's not like it's the dirtiest thing we could be doing, so... I guess a foot massage it is?");
					writeText("oppF smiles a bit, leaning back as oppShe lifts a shoe.");
					writeSpeech("opp","","In that case, why don't we get right to it?");
					writeText("You move forward, undoing the laces carefully before taking both the shoe and sock off.");
				}
			}
			else{
				if(data.player.pref == "dom"){
					writeSpeech("player","","Let's get those heels off, oppF.");
					writeSpeech("opp","","Taking the lead, then? I certainly don't mind.");
					writeText("OppShe carefully tugs at the heel of the shoe, sliding it off to reveal a slender foot as oppShe smiles.");
				}
				else{
					writeSpeech("player","","Well, it's not like it's the dirtiest thing we could be doing, so... I guess a foot massage it is?");
					writeText("oppF smiles a bit, leaning back as oppShe lifts a shoe.");
					writeSpeech("opp","","In that case, why don't we get right to it, hun?");
					writeText("You move forward, undoing the laces carefully before taking both the shoe and sock off.");
				}
			}
			writeText("You quickly get to work, not <i>entirely</i> sure how it's supposed to work, but starting with a gentle kneading around the middle of the foot with your thumbs.");
			writeText("oppF lets out a gentle groan as you do, clearly relaxing further into oppHer seat as oppShe does.");
			writeSpeech("player","","That was fast.");
			writeText("Weirdly, it actually feels pleasant to be moving your hands like this...");
			writeSpeech("opp","","Sensitivity...");
			writeText("You pause for just a moment before looking up and continuing.");
			writeSpeech("player","","What?");
			writeSpeech("opp","","The game... It amps up your body's sensitivity while you play. Part of it's to help players enjoy things they might not be into, and another part is to make <i>giving</i> feel as good as <i>getting.</i>");
			writeText("That explains your fingers feeling tingly...");
			writeSpeech("opp","","That's also why the first round is always something tame, but sensual, like this. It's to get you accustomed to...");
			writeText("oppF pauses to grunt, one of your hands sliding along oppHer foot as you press in.");
			if(data.story[0].sex=="M"){
				writeSpeech("opp","","...to the game. Christ, game or not, this feels damn good...");
				writeText("While pressing down a bit harder, rolling around oppHer foot in your hand, you can't help but notice the angle you're sitting at and the view it's affording you.");
				writeText("You can see the faint bulge in oppHer pants become a stronger outline as oppHer arms stretch out and oppShe rolls oppHer neck back, and your mouth is starting to water despite yourself.");
			}
			else if(data.story[0].sex=="F"){
				writeSpeech("opp","","...to the game. God, those heels can be a bitch to walk in, so what you're doing feels <i>wonderful,</i> hun...");
				writeSpeech("player","","Thanks, I think. Sounds like the game's doing most of the work, though.");
				writeSpeech("opp","","Mm. Doesn't matter to me - they're your hands. And if they feel that good down there, I can't wait for what the next rounds will make you do with them...");
				writeText("OppShe gives a quick wink before leaning oppHer head back, relishing the gentle pressure along oppHer foot.");
			}
			else{
				writeSpeech("opp","","...to the game. God, those heels can be a bitch to walk in, so what you're doing feels <i>wonderful,</i> hun...");
				writeText("While pressing down a bit harder, rolling around oppHer foot in your hand, you can't help but notice the angle you're sitting at and the view it's affording you.");
				writeText("You can see the faint bulge in oppHer pants become a stronger outline as oppHer arms stretch out and oppShe rolls oppHer neck back, and your mouth is starting to water despite yourself.");
			}
			writeText("Feeling a bit more confident, you start applying a bit more pressure and moving your hands a bit more, using oppHer grunts and groans as a roadmap for where to go next.");
			writeText("Despite barely moving much at all, you can feel your breathing get heavier from arousal as you handle oppHer foot - the game really does seem to want to make giving pleasure just as good as getting it...");
			writeText("A few seconds later, though, oppF pulls oppHer foot away, smiling down at you with a look of satisfaction.");
			writeSpeech("opp","","You're good at this, but I think I'd like to see what my turn will have me do. Though if it's particularly boring, I might ask you to do the same to the other foot. For now, though?");
			writeText("A clink from the side of the board pulls your attention to the card-slot, which, despite clearly not being large enough to fit a token through, just spat one out.");
			writeSpeech("opp","","Go ahead and take that reward of yours, playerF. You earned it.");
			addTokens(2);
			writeSpeech("player","","Huh. How do the tokens fit?");
			writeText("oppF loosely points to it, still looking amused.");
			writeSpeech("opp","","It stretches. One of the tiles actually can make <i>people</i> a little stretchy too, though I don't remember the name off the top of my head.");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "golemAccShoulder" : {
			addFlag("AccShoulder");
			if(data.player.pref == "dom"){
				writeSpeech("player","","Let's get that shirt off of you - it'll end up getting in the way.");
				writeSpeech("opp","","Taking the lead, then? Well, can't say I mind too much.");
				if(data.story[0].sex == "M"){
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and chest before oppShe turns oppHer back to you.");
				}
				else if(data.story[0].sex == "F"){
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and some clear evidence that she really did skip out on a bra as her tits bounce down.");
					writeSpeech("opp","","Hope you don't mind, but during the last few games, my bras really just got in the way. I still brought them, just not <i>on</i> me.");
					writeText("With that, oppShe turns her back to you with an over-the-shoulder smirk.");
				}
				else{
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and a nice look at the lacy light-violet bra supporting her breasts.");
					writeSpeech("opp","","Honestly, I thought about skipping the bra completely, but I really do need the support outside of this place.");
					writeText("She raises her hands to her chest, hefting her tits up for a moment while smirking.");
					writeSpeech("opp","","If it helps, though... I <i>am</i> wearing a matching pair~!");
					writeText("OppShe gives you a quick wink before turning her back to you, pulling oppHer hair past her shoulder to expose her back.");
				}
			}
			else{
				writeSpeech("player","","Well, it's not like it's the dirtiest thing we could be doing, so... I guess a shoulder massage it is?");
				writeText("oppF smiles a bit, sitting up straighter as oppShe grabs the bottom of oppHer shirt.");
				writeSpeech("opp","","In that case, why don't we get right to it?");
				if(data.story[0].sex == "M"){
					writeText("OppShe pulls oppHer shirt upwards slowly, giving you a nice little show as the fabric goes up past oppHer toned stomach and chest, before oppShe ultimately pulls it completely off and drops it beside oppHim.");
					writeText("OppShe turns oppHer back to you casually, though you can see a hint of a smirk as oppShe faces away.");
					writeSpeech("opp","","Let's see how you do, hm?");
				}
				else if(data.story[0].sex == "F"){
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and some clear evidence that she really did skip out on a bra as her tits bounce down.");
					writeSpeech("opp","","Hope you don't mind, but during the last few games, my bras really just got in the way. I still brought them, just not <i>on</i> me.");
					writeText("With that, oppShe turns her back to you with an over-the-shoulder smirk.");
				}
				else{
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and a nice look at the lacy light-violet bra supporting her breasts.");
					writeSpeech("opp","","Honestly, I thought about skipping the bra completely, but I really do need the support outside of this place.");
					writeText("She raises her hands to her chest, hefting her tits up for a moment while smirking.");
					writeSpeech("opp","","If it helps, though... I <i>am</i> wearing a matching pair~!");
					writeText("OppShe gives you a quick wink before turning her back to you, pulling oppHer hair past her shoulder to expose her back.");
				}
			}
			writeText("You quickly get to work, not <i>entirely</i> sure how it's supposed to work, but starting with a gentle kneading around the bigger muscles of the shoulders.");
			writeText("oppF lets out a quiet groan as you push, relaxing a bit under your hands.");
			writeSpeech("player","","That was fast.");
			writeText("Weirdly, it actually feels pleasant to be moving your hands like this...");
			writeSpeech("opp","","Sensitivity...");
			writeText("You pause for just a moment before looking up and continuing.");
			writeSpeech("player","","What?");
			writeSpeech("opp","","The game... It amps up your body's sensitivity while you play. Part of it's to help players enjoy things they might not be into, and another part is to make <i>giving</i> feel as good as <i>getting.</i>");
			writeText("That explains your fingers feeling tingly...");
			writeSpeech("opp","","That's also why the first round is always something tame, but sensual, like this. It's to get you accustomed to...");
			writeText("oppF pauses to grunt, one of your hands sliding along one particularly hard-feeling muscle knot as you press in.");
			if(data.story[0].sex=="M"){
				writeSpeech("opp","","...to the game. Christ, game or not, this feels damn good...");
				writeText("While pressing down a bit harder, rolling the butt of your hand across whatever feels tough, you can feel the faint grumble from oppHer chest as oppShe groans in satisfaction.");
				writeText("As you keep sliding your hands along oppHer body, you can feel your own body warming up as lean into oppHim and as you feel oppHim lean back oppHimself.");
			}
			else if(data.story[0].sex=="F"){
				writeSpeech("opp","","...to the game. God, it's easy to forget how <i>tense</i> a girl can get these days, so what you're doing feels <i>wonderful,</i> hun...");
				writeSpeech("player","","Thanks, I think. Sounds like the game's doing most of the work, though.");
				writeSpeech("opp","","Mm. Doesn't matter to me - they're your hands. And if they feel that good back there, I can't wait for what the next rounds will make you do with them...");
				writeText("OppShe turns her head to give a quick wink before leaning oppHer head forward, relishing the gentle pressure along oppHer her shoulders.");
			}
			else{
				writeSpeech("opp","","...to the game. God, it's easy to forget how tense a girl gets carrying a pair of tits like mine, so what you're doing feels <i>wonderful,</i> hun...");
				writeText("While pressing down a bit harder, rolling the butt of your hand across whatever feels tough, you can feel the faint grumble from oppHer chest as oppShe groans in satisfaction.");
				writeText("As you keep sliding your hands along oppHer body, you can feel your own body warming up as lean into oppHim and as you feel oppHim lean back oppHimself.");
			}
			writeText("Feeling a bit more confident, you start applying a bit more pressure and moving your hands a bit more, using oppHer grunts and groans as a roadmap for where to go next.");
			writeText("Despite barely moving much at all, you can feel your breathing get heavier from arousal as you saw into oppHer body - the game really does seem to want to make giving pleasure just as good as getting it...");
			writeText("A few seconds later, though, oppF moves oppHer hand to stop yours, smiling back at you with a look of satisfaction.");
			writeSpeech("opp","","You're good at this, but I think I'd like to see what my turn will have me do. Though if it's particularly boring, I might ask if I can return the favor... For now, though?");
			writeText("A clink from the side of the board pulls your attention to the card-slot, which, despite clearly not being large enough to fit a token through, just spat one out.");
			writeSpeech("opp","","Go ahead and take that reward of yours, playerF. You earned it.");
			addTokens(2);
			writeSpeech("player","","Huh. How do the tokens fit?");
			writeText("oppF loosely points to it, still looking amused.");
			writeSpeech("opp","","It stretches. One of the tiles actually can make <i>people</i> a little stretchy too, though I don't remember the name of the top of my head..");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "golemRej" : {
			if(data.player.flags.includes("golemRej")!=true){
				willUp();
				addFlag("Rej");
			}
			writeSpeech("player","","Yeah, I... don't think I'm gonna do that. No offense or anything, it's just not really my thing.");
			writeText("oppF shrugs.");
			writeSpeech("opp","","I get that - to each their own. Plus, since it's the first round, it's not like the punishment will be <i>too</i> bad. Push the card back in the slot if you're sure about it.");
			writeText("Putting the card back, it quickly gets pulled into the board... only for another to pop out in its place. Pulling that one out, you hear the card's voice:");
			writeSpeech("card","","You chose not to humble yourself in front of the golems, huh? Well, it's not an impossible journey without the use of their caverns, just a long and tiring one. And, worst of all, it doesn't even make for a good story to use in seducing the pants off of other people!");
			writeSpeech("card","","By the time you make it to your destination, your journey has hardened you... Literally. The stresses made your body larger and stronger, but the pride that got you stuck on this journey didn't let you develop any sort of thick skin, leaving you even more sensitive than before!");
			writeText("There's a moment of silence after the card finishes, before you feel <i>something.</i> You feel breathless, but not in a painful way, and an almost fuzzy sensation plays across your skin.");
			writeText("Your muscles tighten up sharply as you let out a gasp, which you could swear practically booms at a much lower pitch than you're used to hearing from yourself, and your vision goes white.");
			writeText("Only for a second, though. After that, you can see normally again, but everything in the area seems a little bit smaller from your body's new position nearly up to the ceiling.");
			writeSpeech("card","","Congratulations on your first transformation! A shame it had to be through a punishment, but that's just the way the game goes!");
			writeSpecial("Your entire body is now a lot larger! To see your new appearance (and any future changes), click either STATUS on the sidebar or click your character's portrait when you speak.");
			data.player.height = 86;
			data.player.heightVal = 4;
			data.player.buildVal = 8;
			data.player.clothesVal = 6;
			data.player.legsVal = 5;
			data.player.assVal = 4;
			data.player.chestVal = 5;
			data.player.genitalsVal = 5;
			writeText("oppF takes a moment to look you over, taking in your much larger body with an amused look.");
			writeSpeech("opp","","Wait, don't tell me - you put on a little weight.");
			writeSpeech("player","","Funny. My skin feels weird, though - and not just because of the size difference...");
			writeSpeech("opp","","Ah, yeah. The game increases your sensitivity all over the place... It's why the first round is always something tame, but sensual. It's to get you accustomed to...");
			writeText("OppShe gestures vaguely at your body.");
			writeSpeech("opp","","To all of that, really. It really helps make some things you wouldn't normally be into feel pretty damn good, especially in the later rounds.");
			writeSpeech("player","","That makes sense. Still a little weird, though.");
			writeSpeech("opp","","Eh, that's magic for ya. I find it's a lot more fun if you just roll with it and have some fun with whatever gets thrown at you.");
			writeText("A clink from the side of the board pulls your attention to the card-slot, which, despite clearly not being large enough to fit a token through, just spat one out.");
			addTokens(1);
			writeText("oppF loosely points to it, still looking amused.");
			writeSpeech("opp","","It stretches. One of the tiles actually can make <i>people</i> a little stretchy too.");
			writeText("A second later, though, and the entire board seems to shimmer sharply - the only part that doesn't turn white is your tile.");
			writeText("It barely lasts a moment before settling, revealing a path forward for oppF's token.");
			writeSpeech("opp","","And with that, it looks like it's my turn.");
			if(data.story[0].sex == "F")
				writeTransition("cafeStart", "She calmly slides her piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides her piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "androStart" : {
			writeText("The tile itself looks like a small pool of water surrounded by grass and a few colorful flowers, and you can hear (and even feel a drop from) a small splash of water as oppShe puts her piece down.");
			writeText("After a second, a slot near oppF pushes out a card just like yours, though oppShe doesn't actually grab it, just lightly tapping it once before listening close.");
			writeSpeech("card","","Ah, the Spring of Andros! It's said that these waters were blessed in ancient times, blessing those who had the confidence to bare themselves before both their peers and the gods! A small group of people are always present to maintain the springs and witness anyone that seeks to bare themselves to Andros... though some of them do occasionally break off to fuck on the plush grass.");
			writeSpeech("card","","Challenge: You have to take off any clothing that covers your lower body and leave them off until either the game ends, or until another card overrides this one. And try to make it look <i>good,</i> alright?");
			writeText("oppF scoffs.");
			writeSpeech("opp","","Jokes on them - I <i>always</i> make it look good.");
			if(data.player.flags.includes("fairyRej"))
				writeText("OppShe stands up, grinning down at you. Especially while you're sitting, your smaller body makes oppHim look absolutely <i>massive</i> next to you...");
			else if(data.player.flags.includes("golemRej"))
				writeText("OppShe stands up, grinning at you. Despite the fact that you're sitting down, you're actually not that much shorter than oppHer...");
			else
				writeText("OppShe stands up, grinning down at you as oppShe rolls oppHer shoulders a little bit.");
			if(data.story[0].sex == "M"){
				writeText("He slowly reaches down to his pants, smoothly undoing his belt. It slides along his jeans, the sound of it pulling across the denim softly filling the air before he lets it go, the belt flopping down onto the couch.");
				writeText("It's clearly obvious that he's enjoying this just as much, if not <i>more</i> than you, seeing as he's starting to tent his pants.");
				writeSpeech("opp","","It's a shame that the challenge is that <i>I</i> have to take it all off...");
				writeText("He undoes the button and pulls down his zipper, winking playfully.");
				writeSpeech("opp","","I'd've liked to see <i>you</i> pulling all this off of me.");
				if(data.player.pref == "dom"){
					writeText("You smirk, leaning back in your seat.");
					writeSpeech("player","","Sounds like a pretty good time.");
					writeText("His grin widens.");
					writeSpeech("opp","","Well, if you get a card like this one, just ask and I'll help you out. For now, though...");
				}
				else{
					writeText("You can feel your face flush, your eyes lingering on the tent for a moment before oppF lets out a barking laugh.");
					writeSpeech("opp","","Seems like you would've enjoyed it too! Hope this little show makes up for it...");
				}
				writeText("His hand drifts further down, his thumb hooking onto his jeans and pulling them down. His tight, steely-gray underwear does nothing to hide his erection as he pulls his jeans all the way off.");
				writeText("Finally, he puts his hands on his underwear and pulls it down, going slow as it slides low enough to reveal inch after inch after inch... until seven inches down, his head <i>swings</i> up, no longer held by the elastic.");
				writeText("You could swear the <i><b>THWAP</b></i> of it impacting against his lower stomach echoed for a second as it twitches under your gaze.");
			}
			else{
				writeText("She slowly reaches down, hooking a thumb into her jeans and runs it along her hip.");
				writeSpeech("opp","","I hope you don't mind if I take this slow; last game I played turned into a horny fuck-frenzy real fast, so I didn't have as much time to <i>enjoy</i> things like these.");
				if(data.player.pref == "dom"){
					writeSpeech("player","","Take your time - we've got all night, and I know I'll be enjoying the show too.");
					writeText("She smiles sweetly.");
					writeSpeech("opp","","Flirt. Keep talking like that, and I won't be the only one whose pants end up on the floor~");
				}
				else{
					writeSpeech("player","","It's fine. We have all night, don't we?");
					writeText("She smiles, nodding gently.");
					writeSpeech("opp","","We do indeed... And something tells me that it won't be long before your pants end up on the floor next to mine~");
				}
				writeText("Her jeans have just the littlest bit of stretch as she pulls them down, squeezing down on her thighs as she shimmies them lower. Her whole body is bent over as she does, giving you a <i>very</i> clear view of her cleavage as she carefully steps out of her jeans.");
				writeText("She then looks up into your eyes, rolling her back upwards in a graceful, practiced motion as her hands toy with her tits for a moment before both of your attentions go to her straining panties.");
				writeSpeech("opp","","Mm, even if my challenge <i>didn't</i> involve stripping, I don't think the poor things can take much more...");
				writeText("With a sly smile, she takes a few steps towards you, standing within arm's-reach as she hooks her thumb down the center of her panties.");
				writeText("Her other hand reaches into them, her middle finger sliding just underneath her rapidly hardening shaft as she slids her panties down.");
				writeText("Her thick, hefty cock swings upwards close enough that you can feel the displaced air, but not quite touch it. A single wet bead of precum shines at the tip as she starts sliding her panties off the rest of the way.");
				writeText("A moment later, she's wearing only her T-shirt and heels as she winks at you, her hand tracing a line across the top of her dick.");
				writeSpeech("opp","","Now <i>this</i> feels a lot more comfortable~!");
			}
			writeText("There's a part of you that thinks it might be rude to stare, but...");
			writeTransition("androAway", "Pull your gaze back up");
			writeTransition("androLook", "Try to be subtle about your glances");
			writeTransition("androAdmire", "Fuck subtlety");
			break;
		}
		case "androAway" : {
			if(data.story[0].sex == "M"){
				data.story[0].clothesVal = 3;
				data.story[0].genitalsVal = 6;
				data.story[0].genitalsVal2 = 1;
			}
			else{
				data.story[0].clothesVal = 4;
				data.story[0].genitalsVal = 7;
				data.story[0].genitalsVal2 = 1;
			}
			addFlag("androAway");
			writeText("You quickly try and look away from oppHer cock, but you could swear that oppF only looks smugger as you do.");
			writeText("OppShe doesn't say anything about it, though, content to just smile and sit back on the couch, oppHer finger casually running up and down the underside from the balls up to the tip.");
			writeText("A moment later, there's the same clink sound from the slot as before, a pair of tokens bouncing out for oppF to take.");
			writeSpeech("card","","Looks like you finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF grabs oppHer tokens, rolling them around between oppHer fingers.");
			writeSpeech("opp","","That makes this the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");

			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "androLook" : {
			if(data.story[0].sex == "M"){
				data.story[0].clothesVal = 3;
				data.story[0].genitalsVal = 6;
				data.story[0].genitalsVal2 = 1;
			}
			else{
				data.story[0].clothesVal = 4;
				data.story[0].genitalsVal = 7;
				data.story[0].genitalsVal2 = 1;
			}
			addFlag("androLook");
			writeText("You try to be at least a little subtle, sneaking a few quick glances at oppHer length without coming off too strongly.");
			writeSpeech("opp","","");

			writeText("A moment later, there's the same clink sound from the slot as before, a pair of tokens bouncing out for oppF to take.");
			writeSpeech("card","","Looks like you finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF grabs oppHer tokens, rolling them around between oppHer fingers.");
			writeSpeech("opp","","That makes this the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "androAdmire" : {
			if(data.story[0].sex == "M"){
				data.story[0].clothesVal = 3;
				data.story[0].genitalsVal = 6;
				data.story[0].genitalsVal2 = 1;
			}
			else{
				data.story[0].clothesVal = 4;
				data.story[0].genitalsVal = 7;
				data.story[0].genitalsVal2 = 1;
			}
			addFlag("androAdmire");
			writeSpeech("player","","I want that thing inside of me.");
			if(data.story[0].sex == "M"){
				writeText("There's a clear, visible twitch as the cock hardens further, oppF's face flushing for a second.");
				writeSpeech("opp","","...You know, that's the fastest I've ever had someone say that to me. You really know what to say to get a guy going, don't you?");
			}
			else{
				writeText("There's a clear, visible twitch as the cock hardens further, oppF's face flushing.");
				writeSpeech("opp","","...You know, that's the fastest I've ever had someone say that to me. You really know what to say to make a girl feel wanted, don't you?");
			}
			if(data.player.pref == "sub"){
				writeSpeech("player","","Ah, sorry. That was-");
				writeSpeech("opp","","No, no, I actually appreciate it! Just... caught me off guard, is all. Thanks.");
			}
			else{
				writeSpeech("player","","I certainly try.");
				writeText("oppF laughs a little, shaking oppHer head.");
				writeSpeech("opp","","Well, it caught me off guard, but it's working.");
			}
			writeText("The sound of the same clink sound from the slot as before interrupts you two, a pair of tokens bouncing out as oppF's reward.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF grabs oppHer tokens, rolling them around between oppHer fingers.");
			writeSpeech("opp","","That makes this the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeStart" : {
			writeText("The tile itself looks like one of those open-air cafes with the awnings over the tables, with a small figurine of a tan elf-girl in a uniform standing near one of them.");
			writeText("After a second, a slot near oppF pushes out a card just like yours, though oppShe doesn't actually grab it, just lightly tapping it once before listening close.");
			writeSpeech("card","","The Shadow-Elf Cafe, a magical place that's said to serve not just amazing tea and cakes, but some delectable and <i>powerful</i> potions brewed in the backrooms! You've just been invited in for a drink with one of the servers, totally on the house. Shadow-Elves don't have the best reputation, but their society is largely based around mutual respect, so everything should be fine as long as you don't do anything insulting...");
			writeSpeech("card","","Challenge: You have to taste your opponent's saliva. We're not picky about how - we recommend a nice little bout of tongue-fencing ourselves~!");
			writeText("oppF nods calmly, looking at you.");
			if(data.player.flags.includes("Rej")){
				if(data.player.flags.includes("fairy"))
					writeSpeech("opp","","How do you feel about this one? You weren't comfortable with me touching your tongue with my fingers, so...");
				else
					writeSpeech("opp","","How do you feel about this one? You weren't comfortable with a massage and this is a bit more <i>direct</i>, so...");
				writeTransition("cafeAcc", "Pull her in for a kiss");
				writeTransition("cafeAccTongue", "Let your tongue hang out of your mouth");
				break;
			}
			else if(data.player.flags.includes("AccEnthused")){
				writeText("Or, to be more accurate, looking at your <i>chin</i>, which is still a little slick from when oppShe played with your tongue.");
				writeText("It's pretty obvious where she's going with this...");
				writeTransition("cafeAccEnthused", "Let her control the pace");
				writeTransition("cafeAcc", "Pull her in for a kiss");
				break;
			}
			else{
				if(data.player.flags.includes("fairyAccReluctant"))
					writeSpeech("opp","","Well, we're off to a good start, aren't we? Shame you went and wiped that spit off your chin - could've made for a fun way to solve the challenge.");
				else
					writeSpeech("opp","","Well, we're off to a good start, aren't we? Of course, I'll need you to stay sitting to actually reach those lips of yours...");
				if(data.player.pref == "dom"){
					writeTransition("cafeAccEnthused", "Let her control the pace");
					writeTransition("cafeAcc", "Pull her in for a kiss");
					writeTransition("cafeAccSpit", "Stop her and tell her to open her mouth wide");
					break;
				}
				else{
					writeText("Standing, oppF walks over to you with a confident smile, oppHer hand moving slowly to your face.");
					writeTransition("cafeAccEnthused", "Let her control the pace");
					writeTransition("cafeAcc", "Pull her in for a kiss");
				}

			}
			break;
		}
		case "cafeAcc" : {
			break;
		}
		case "cafeAccEnthused" : {
			break;
		}
		case "cafeAccSpit" : {
			writeSpeech("player","","Actually, it says you have to taste my spit, right?");
			writeText("She pauses, a look of confusion crossing her face.");
			writeSpeech("opp","","I mean, yeah? Kinda thought that was what I was going for.");
			writeSpeech("player","","Then make sure to hold still, and <i>open wide.</i>");
			writeText("It takes a good few seconds for it to click but, when it does, a playful spark seems to fly through her eyes.");
			writeSpeech("opp","","You got it, hun~!");
			if(data.player.flags.includes("golemRej"))
				writeText("She steps right up to where you're sitting, just barely bending at the hips to put her mouth a little bit below yours.");
			else if(data.player.flags.includes("fairyRej"))
				writeText("She walks up to where you're sitting, getting down on her knees so she's low enough that her mouth is below yours when you stand up.");
			else
				writeText("She walks up to where you're sitting, getting down on her knees so she's low enough that her mouth is below yours.");
			writeText("Her hands go up to her lips, spreading them wide and holding them open as she sticks out her tongue and playfully goes,");
			writeSpeech("opp","","<i>Ahhhhh~!</i>");
			writeText("Aiming carefully, you feel yourself salivating before you bring your head close to hers.");
			writeText("You spit sharply, some of it spattering against her cheek as she flinches slightly, before letting out a little giggle.");
			writeText("She keeps her mouth open while rolling around her tongue, before closing it, swallowing deeply, and winking.");
			writeSpeech("opp","","You're pretty fun, playerF. Maybe the next thing you make me swallow can be a bit more <i>fun</i> getting into my mouth~?");
			writeSpeech("player","","You keep teasing me, and it just might...");
			writeSpeech("opp","","Then I'll be sure not to stop~");
			if(data.player.flags.includes("golemRej"))
				writeText("She stands up straighter, rolling her back as she does before she pauses again with a smirk.");
			else
				writeText("She stands up from her knees, stretching out her back before she pauses again and smirks.");
			writeSpeech("opp","","One more thing, though.");
			writeText("Dragging a finger across her cheek, she collects most of the spit.");
			writeSpeech("opp","","I don't plan on letting you miss a <i>drop</i> next time.");
			writeText("She brings the finger to her mouth, sensually licking it before plopping down onto the couch with a satisfied look, before the same <i>clink</i> sound from before rings out.");
			writeText("oppF picks up the reward, contentedly rolling them between oppHer fingers before the card's voice rings out again.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeSpeech("opp","","Well, I guess that makes this the start of the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeAccTongue" : {
			writeText("Instead of answering her, you lean forward a little bit and open your mouth, letting your tongue loll out.");
			writeSpeech("opp","","Mn. Good answer...");
			writeText("She moves close to you, her hand gently grabbing onto your chin as she brings her face close to yours.");
			writeText("The moment you feel her lips press against your tongue, an electric shiver runs through your body, before her other hand goes to rest on your hip.");
			writeText("After another moment, she ");
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Tried to access:" + tempScene + "");
			writeText("" + JSON.stringify(data) + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeBig("images/butts.jpg");
			writeTransition("room", "Go back");
			break;
		}
	}
}

function writeEvent(scene) {
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	console.log('now writing event '+scene);
	if (data.player.currentScene == "darkVault") {
		tempScene = 'work';
	}
	switch (scene) {
		case "prologue1": {
			writeSpeech("roommate", "", "Oh hey, feeling better?");
			writeSpeech("player", "", "A little. Anything new with you?");
			writeSpeech("roommate", "", "Hell yeah, I got a date! I'm going out with the home ecc teacher, that Asian girl you met at Tiffany's?");
			writeSpeech("player", "", "Right, right, of course I remember. You both work at uh...");
			writeSpeech("roommate", "", "St. Prince's University.");
			writeSpeech("player", "", "Yeah, that place. Good for you, she's a catch.");
			writeSpeech("roommate", "", "Thanks. You really should get some rest by the way, you still look like you've gone a week without sleep.");
			break;
		}

		default: {
			writeText("You've encountered an error! Please let me know about this, the errorcode is:");
			writeText("writeScene "+scene);
			break;
		}
	}
	if (data.player.currentScene != 'gallery') {
		console.log('passing time');
		passTime();
	}
	var girl = "pepsimuyo";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == scene) {
			girl = galleryArray[i].girl;
		}
	}
	if (girl != "") {
		console.log('attempting to unlock logbook for '+girl);
		for (i = 0; i < data.story.length; i++) {
			if (data.story[i].index.includes(girl) == true) {
				data.story[i].met = true;
			}
		}
		
	}
	if (galleryCheck(scene) != true) {
		unlockScene(scene);
	}
	writeTransition(tempScene, "Finish");
}

function checkDay() { //For checking for holidays, payday, and for new text messages, alt-2 to close
	var specialEvent = false;
	timeSince = 0;
	console.log("Now checking for special events for on day " + data.player.day);
	if (data.player.day == 3) {
		//specialEvent = true;
		//writeFunction("writeEvent('specialDay')", "Go to the special event");
		//writeTransition("home", "Skip the event");
	}
	specialEvent = dreamCheck();
	switch (data.player.artifact2) {
		case "coin": {
			break;
		}
	}
	if (specialEvent == false) {
		console.log("No events found");
		sceneTransition('room');
	}
	else {
		writeEvent(specialEvent);
	}
	data.player.time = "Morning";
}

function checkForEvents() {
	switch (tempScene) {
		case "work": {
			writeArtifact("bracelet");
			writeArtifact("erotibox");
			if (data.player.color.includes('mirror') == true) {
				writeArtifact("mirror");
				if (data.player.color.includes('stopwatch') == true) {
					writeArtifact("stopwatch");
					if (data.player.color.includes('coin') == true) {
						writeArtifact("coin");
					}
					else {
						if (timeSince != 1) {
							writeSpeech("assistant", "", "New artifact in, boss! Some old coin from Ancient Greece. Management says 'careful not to spend it in a vending machine'.");
							writeArtifact("coin");
							data.player.color += 'coin';
							timeSince = 1;
						}
					}
				}
				else {
					if (timeSince != 1) {
						writeSpeech("assistant", "", "New artifact in, boss! We've got a stopwatch from Romania, safe to handle.");
						writeArtifact("stopwatch");
						data.player.color += 'stopwatch';
						timeSince = 1;
					}
				}
			}
			else {
				if (timeSince != 1) {
					writeSpeech("assistant", "", "New artifact in, boss! This one's some kind of fancy mirror from England.");
					writeArtifact("mirror");
					data.player.color += 'mirror';
					timeSince = 1;
				}
			}
			if (data.player.color.includes('serum') == true) {
				writeArtifact("serum");
			}
			else {
				if (galleryCheck('braceletResearch5') == true) {
					writeText("There's a note on your desk. It reads 'For the curious researcher. Thanks for a good time.'<br>Beside it is a case of vials of green fluid, with an artifact file next to them.");
					data.player.color += 'serum';
					writeArtifact("serum");
				}
			}
			if (data.player.color.includes('katya') != true) {
				writeTransition("katyaIntro", "It seems like assistantF wants to ask you something.");
			}
			writeTransition("vault", "Request a Dark Vault artifact");
			break;
		}
		case "home": {
			if (data.player.artifact1 == "bracelet") {
				if (galleryCheck('braceletHome1') == false) {
					writeFunction("writeEvent('braceletHome1')", "Use the bracelet on " + data.story[0].fName);
				}
				else {
					if (galleryCheck('braceletHome2') == false) {
						writeFunction("writeEvent('braceletHome2')", "Use the bracelet on " + data.story[0].fName + " again");
					}
					else {
						if (galleryCheck('braceletHome3') == false) {
							writeFunction("writeEvent('braceletHome3')", data.story[0].fName + "'s girlfriend is coming over, use the bracelet on her");
						}
						else {
							if (galleryCheck('braceletHome4') == false) {
								//writeFunction("writeEvent('braceletHome4')", "Use the bracelet on " + data.story[0].fName + " and " + data.story[2].fName);
							}
						}
					}
				}
				if (galleryCheck('braceletOutdoor1') == false) {
					writeFunction("writeEvent('braceletOutdoor1')", "Take the bracelet to the gym");
				}
				else {
					if (galleryCheck('braceletOutdoor2') == false) {
						writeFunction("writeEvent('braceletOutdoor2')", "Take the bracelet to the gym again");
					}
				}
				if (data.player.color.includes('katyaIntro') == true) {
					if (galleryCheck('braceletHome4') == false) {
						writeFunction("writeEvent('braceletHome4')", "sisterF brought some friends over");
					}
				}
				if (galleryCheck('braceletOutdoor4') == false) {
					writeFunction("writeEvent('braceletOutdoor4')", "Head out to a bar for some fun");
				}
			}
			switch (data.player.artifact2) {
				case "stopwatch": {
					if (galleryCheck('stopwatchHome1') == false) {
						writeFunction("writeEvent('stopwatchHome1')", "Use the stopwatch on " + data.story[0].fName + " at the school");
					}
					else {
						if (galleryCheck('stopwatchHome2') == false) {
							writeFunction("writeEvent('stopwatchHome2')", "Use the stopwatch on " + data.story[0].fName + " at the school again");
						}
					}
					if (galleryCheck('stopwatchOutdoor1') == false) {
						writeFunction("writeEvent('stopwatchOutdoor1')", "Start a strip-show on the street");
					}
					break;
				}
				case "coin": {
					if (galleryCheck('coinHome1') == false) {
						writeFunction("writeEvent('coinHome1')", "Flaunt your new 'wealth' in public");
					}
					if (galleryCheck('coinOutdoor1') == false) {
						writeFunction("writeEvent('coinOutdoor1')", "Go buy something with the Midas Coin");
					}
					break;
				}
				case "serum": {
					if (galleryCheck('serumHome1') == false) {
						//writeFunction("writeEvent('serumHome1')", roommateF+" is getting dressed");
					}
					if (galleryCheck('serumOutdoor1') == false) {
						//writeFunction("writeEvent('serumOutdoor1')", "Drink the serum and go for a walk");
					}
					if (galleryCheck('serumOutdoor2') == false) {
						//writeFunction("writeEvent('serumOutdoor2')", "Find someone to test the serum on");
					}
					if (galleryCheck('serumOutdoor3') == false) {
						//writeFunction("writeEvent('serumOutdoor3')", "Drink the serum and go to the beach");
					}
					break;
				}
			}
			if (data.player.color.includes('katya') == true) {
				if (data.player.color.includes('katyaIntro') != true) {
					sceneTransition('katyaMeeting');
				}
			}
		}
		break;
	}
}