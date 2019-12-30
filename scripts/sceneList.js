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
			writeTransition("adviceTokens", "Test the post-round");
			writeTransition("oppChat", "Test opp-chat");
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
				writeText("OppShe is leaning against the back of the couch, oppHer legs neatly folded over and oppHer hands resting on oppHer thigh. She gives you a confident smile and sits up a bit straighter, which does <i>things</i> to oppHer assets.");
				writeSpeech("opp","","playerF, right? I'm oppF. Looks like we'll be getting to have a whole lot of fun with each other!");
				writeText("She extends oppHer hand out, which you quickly move to shake.");
				writeSpeech("player","","It's good to meet you. It's actually my first time playing, so...");
				writeText("OppShe nods understandingly.");
				writeSpeech("opp","","Yeah, the owner said as much - first-timers often get cold feet and never show up, so she wanted to make sure I was prepped for that. Good to see you came, though!");
				writeText("She smiles a bit more, brushing oppHer hand against yours.");
				writeSpeech("opp","","You can take this as slow as you need. I want this to be fun enough that you come back and see everything, after all!");
				writeSpeech("player","","Heh. Alright, thanks.");
				writeText("At that, oppShe leans back into the couch again.");
				writeSpeech("opp","","If you'd like, we can start by going over the rules a bit before we begin. If you already know them, though, we can always jump right into the game and see how things go?");
			}
			else{
				writeText("OppShe is leaning against the back of the couch, but she stands up fully as you walk in - she's rather tall, actually. She gives you a confident smile and offers you oppHer hand.");
				writeSpeech("opp","","I'm oppF. You're playerF, right? It's a pleasure to meet you. Looks like we'll be playing DTC with each other, yeah?");
				writeSpeech("player","","The pleasure's mine, and it looks like it. It is my first time, though, so...");
				writeText("OppShe grins widely, nodding.");
				writeSpeech("opp","","I getcha. The boss told me that, since first-timers can get cold feet sometimes, but I'm glad you decided to come. Go as slow as you need - we can always pick up the pace once you're comfortable with the game!");
				writeSpeech("player","","That sounds like a good idea, thanks.");
				writeText("OppShe takes oppHer seat again, falling against it with a thump.");
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
					writeText("A sadistic look plays across oppHer face as she grinds down onto his, oppHer pussy pressed against his mouth as she gropes oppHer chest.");
					writeSpeech("Woman","none","Ooh, <i>fuck,</i> love... Keep going~ The sooner I cum, the sooner you <i>breathe~!</i>");
					writeText("You can clearly see the man's cock get harder as she says that, a throaty moan spilling out of oppHer mouth as she leans forward.");
					writeSpeech("Woman","none","Ah...? Oh my~");
					writeText("She grins widely, staring right at the door now.");
					writeSpeech("Woman","none","The light above the door lit up... I wonder what that could possibly mean~");
					writeText("The man seems to freeze for a moment, before bucking against oppHer a bit harder.");
					writeSpeech("Woman","none","Oh, <i>hush.</i> You were the one who put the tag up, darling, so you don't get to complain about an <i>audience.</i>");
					writeText("She shakes oppHer head a bit before sending a gentle smile your way, winking.");
					writeText("Then, she slowly lowers oppHer body forward, oppHer breasts pressing against oppHer toy's hips as she starts to slowly jerk him off.");
					writeText("She spreads around his precum before taking a slow, deep-breath...");
					writeText("And throats him balls-deep in a swift movement.");
					writeText("You can see the man's hips buck forward, but she pulls up just as quickly and leaves him swinging wildly.");
					writeSpeech("Woman","none","Your challenge is edging until I cum, love. You'd better not pop before I do~");
					writeText("Her hand keeps teasing the tip a bit more, a pathetic mewling coming from the man before she laughs and takes another deep breath.");
					writeText("She does the same move, taking him balls-deep and pulling back, a trail of spit connecting his tip and oppHer lips, but it goes differently this time.");
					writeText("His cock starts bouncing frantically, tightening up as he spurts wildly. It spatters across oppHer chest as she gasps in surprise, before a disappointed look flashes across oppHer face.");
					writeSpeech("Woman","none","And you were doing so well... Almost half an hour of edging, and being watched makes you cum in under a minute. Looks like you'll have to take a punishment, hun.");
					writeText("An apologetic look flashes across oppHer face as she looks to the door.");
					writeSpeech("Woman","none","Sorry it was so short. Have fun with your own game, whoever you are!");
					writeText("The door starts to fade back in, obscuring the room as she wipes some of the cum from oppHer body and starts raising it to oppHer lips.");
					writeText("It takes you a moment to catch your breath, your pants feeling very, <i>very</i> tight now.");
				}
				else{
					writeText("You're immediately greeted with the sight of a woman pinned down to a coffee table, oppHer ankles pressed down next to oppHer ears as a <i>very</i> well-hung man pounds into oppHer cunt.");
					writeText("She's moaning like a porn star, oppHer fluttering eyes hazed over as she paws at a truly massive pair of tits hanging down.");
					writeText("As the man continues to fuck oppHer, though, you can't help but notice something large and fluffy waving behind them.");
					writeSpeech("Man","none","Moan <i>louder, <b>whore.</b></i>");
					writeText("He <i>slams</i> his hips against oppHers, the wet slapping almost as loud as the high-pitched squeal of pleasure that came from oppHer mouth.");
					writeSpeech("Woman","none","F-Fuck me harder...~! You've still got another hole to <i><b>break</b></i> or you'll get <i>punished~!</i>");
					writeSpeech("Man","none","Are you really <i>that fucking cum-hungry,</i> bitch?");
					writeText("Instead of answering, she just keeps moaning as he saws into oppHer cunt with reckless abandon, oppHer eyes lingering on the door for a moment.");
					writeSpeech("Woman","none","O-Oh fuck...~! The light above the door it-");
					writeText("A moan interrupts oppHer thought as he <i>slams</i> his hips into oppHer ass again, oppHer whole body starting to shudder.");
					writeSpeech("Man","none","<i>Fuck...</i> What'd you say?");
					writeSpeech("Woman","none","...Nothing~ Just that I bet your load this time won't be half as thick~!");
					writeText("The man lets out a deep growl, but grins as he lets go of one of oppHer ankles.");
					writeSpeech("Man","none","You're just <i>begging</i> for this, aren't you?");
					writeSpeech("Woman","none","Fuck me stupid, darling~");
					writeText("Hearing that, he grasps onto one of oppHer massive tits and forces it in front of oppHer own face.");
					writeSpeech("Man","none","Better bite down, slut.");
					writeText("Pulling out of oppHer pussy, he aims a little lower as oppHer eyes go wide.");
					writeSpeech("Woman","","<i><b>Yes sir~!</b></i>");
					writeText("He pushes into oppHer ass as she sucks on oppHer own tit, oppHer eyes rolling back as he starts picking up speed and pounds oppHer deeper.");
					writeText("You're not even sure how long he spends fucking oppHer ass as she suckles on one breast and gropes the other, but you can tell from the groans when he's about finished.");
					writeText("Clearly, she can too, as she quickly wraps oppHer free leg around his back and pulls him balls-deep and keeps him there as he grunts,");
					writeSpeech("Man","","Fucking <i>take it, bitch...!</i>");
					writeText("After a few seconds of that, he starts to pull out, but she keeps him in place.");
					writeSpeech("Woman","","No need to rush... I want to enjoy the <i>fullness</i> a little longer...");
					writeText("He pauses, before sighing with a smile.");
					writeSpeech("Man","","Sure.");
					writeText("The door starts to fade back in, obscuring the room as he leans into oppHer chest and she runs oppHer hands through his hair.");
					writeText("It takes you a moment to catch your breath, your pants feeling very, <i>very</i> tight now.");
				}
			}
			else{
				writeText("You're immediately greeted with the sight of a woman laying face-up on the couch and another woman standing above oppHer... for a certain definition of woman, seeing as what she's currently got crammed down the girl's throat.");
				writeText("From here, you can clearly see the girl's throat distending while the dickgirl roughly saws into oppHer throat... though, clearly not rough enough for the woman's liking, seeing as she keeps grabbing oppHer partner's ass to pull oppHer deeper.");
				writeSpeech("Dickgirl","","Holy <i>shit,</i> you weren't kidding about your throat...!");
				writeText("The woman lets out a low hum, making oppHer partner's back curl as he breathing hitches.");
				writeText("There's a pause, before the low hum turns into a soft melody as the oppHerm does oppHer best to thrust at a steady rate.");
				writeSpeech("Dickgirl","","Fuck, fuck, fuck, fuck, <i><b>FUCK!</b></i>");
				writeText("She leans oppHer entire body forward, grabbing onto the woman's tits and squeezing them roughly, only for the humming to get louder and more wild as she does.");
				writeSpeech("Dickgirl","","That's <i>so</i> not fair...! Are you seriously humming the <i>national anthem around my <b>dick!?</b></i>");
				writeText("The woman's body clearly shakes with laughter, before one of oppHer hands goes to oppHer neck.");
				writeSpeech("Dickgirl","","Oh, <i>Hell</i> no!");
				writeText("It quickly gets swatted away.");
				writeSpeech("Dickgirl","","The challenge is no hands, hun, and I'm not letting this end early just 'cause you got impatient!");
				writeText("Instead, she puts oppHer own hands around the woman's throat, tightening down as they both start to moan, muffled as the woman's grunts were.");
				writeSpeech("Dickgirl","","Is this what you wanted? Then <i>fucking take it!</i>");
				writeText("She starts pulling out all the way to the head before roughly fucking oppHer throat like a sex toy, even as the woman uses oppHer hands to finger oppHerself and toy with oppHer clit.");
				writeText("Neither of them are able to last long, with the bodily shaking clueing you into the woman's orgasm, and the wild shaking pushing the dickgirl over.");
				writeText("You hear a low, primal moan as you watch see the woman's throat distend a bit more as a thick, almost impossibly large load spurts into oppHer stomach. When the dick is finally pulled out of oppHer throat, she rolls over and gasps desperately for air.");
				writeSpeech("Dickgirl","none","S-Shit, are you oka-");
				writeText("The woman's hand limply lashes out, grabbing the dickgirl's shirt and pulling oppHer down... Or, more accurately, trying to.");
				writeSpeech("Woman","none","F-Fuckin'... What'dya take me for, ya fuckin' quickshot...?");
				writeText("There's a brief pause, before they both start laughing.");
				writeSpeech("Woman","none","N-Next time, pull out a bit when you cum... I wanna taste it, 'kay?");
				writeSpeech("Dickgirl","none","...We are <i>so</i> coming back oppHer sometime.");
				writeText("The door starts to fade back in, obscuring the room as she helps the girl sit up a bit straighter, oppHer cock still dripping with spit.");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
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
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and some clear evidence that she really did skip out on a bra as oppHer tits bounce down.");
					writeSpeech("opp","","Hope you don't mind, but during the last few games, my bras really just got in the way. I still brought them, just not <i>on</i> me.");
					writeText("With that, oppShe turns oppHer back to you with an over-the-shoulder smirk.");
				}
				else{
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and a nice look at the lacy light-violet bra supporting oppHer breasts.");
					writeSpeech("opp","","Honestly, I thought about skipping the bra completely, but I really do need the support outside of this place.");
					writeText("She raises oppHer hands to oppHer chest, hefting oppHer tits up for a moment while smirking.");
					writeSpeech("opp","","If it helps, though... I <i>am</i> wearing a matching pair~!");
					writeText("OppShe gives you a quick wink before turning oppHer back to you, pulling oppHer hair past oppHer shoulder to expose oppHer back.");
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
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and some clear evidence that she really did skip out on a bra as oppHer tits bounce down.");
					writeSpeech("opp","","Hope you don't mind, but during the last few games, my bras really just got in the way. I still brought them, just not <i>on</i> me.");
					writeText("With that, oppShe turns oppHer back to you with an over-the-shoulder smirk.");
				}
				else{
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and a nice look at the lacy light-violet bra supporting oppHer breasts.");
					writeSpeech("opp","","Honestly, I thought about skipping the bra completely, but I really do need the support outside of this place.");
					writeText("She raises oppHer hands to oppHer chest, hefting oppHer tits up for a moment while smirking.");
					writeSpeech("opp","","If it helps, though... I <i>am</i> wearing a matching pair~!");
					writeText("OppShe gives you a quick wink before turning oppHer back to you, pulling oppHer hair past oppHer shoulder to expose oppHer back.");
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
				writeText("OppShe turns oppHer head to give a quick wink before leaning oppHer head forward, relishing the gentle pressure along oppHer oppHer shoulders.");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
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
				writeTransition("cafeStart", "She calmly slides oppHer piece over to a tile labeled, \"The Shadow-Elf Cafe\"");
			else if(data.story[0].sex == "M")
				writeTransition("androStart", "He confidently slides his piece over to the tile labeled \"Spring of Andros\"");
			else
				writeTransition("androStart", "She confidently slides oppHer piece over to the tile labeled \"Spring of Andros\"");
			break;
		}
		case "androStart" : {
			writeText("The tile itself looks like a small pool of water surrounded by grass and a few colorful flowers, and you can hear (and even feel a drop from) a small splash of water as oppShe puts oppHer piece down.");
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
				writeText("She slowly reaches down, hooking a thumb into oppHer jeans and runs it along oppHer hip.");
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
				writeText("Her jeans have just the littlest bit of stretch as she pulls them down, squeezing down on oppHer thighs as she shimmies them lower. Her whole body is bent over as she does, giving you a <i>very</i> clear view of oppHer cleavage as she carefully steps out of oppHer jeans.");
				writeText("She then looks up into your eyes, rolling oppHer back upwards in a graceful, practiced motion as oppHer hands toy with oppHer tits for a moment before both of your attentions go to oppHer straining panties.");
				writeSpeech("opp","","Mm, even if my challenge <i>didn't</i> involve stripping, I don't think the poor things can take much more...");
				writeText("With a sly smile, she takes a few steps towards you, standing within arm's-reach as she hooks oppHer thumb down the center of oppHer panties.");
				writeText("Her other hand reaches into them, oppHer middle finger sliding just underneath oppHer rapidly hardening shaft as she slids oppHer panties down.");
				writeText("Her thick, hefty cock swings upwards close enough that you can feel the displaced air, but not quite touch it. A single wet bead of precum shines at the tip as she starts sliding oppHer panties off the rest of the way.");
				writeText("A moment later, she's wearing only oppHer T-shirt and heels as she winks at you, oppHer hand tracing a line across the top of oppHer dick.");
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
			writeText("The sound of the same clink as before interrupts you two, a pair of tokens bouncing out of the slot as oppF's reward.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF grabs oppHer tokens, rolling them around between oppHer fingers.");
			writeSpeech("opp","","That makes this the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeStart" : {
			if(data.story[0].sex != "F"){
				writeSpecial("Probably for testing reasons, oppF wasn't a woman at the start of this woman-only event. She has now been changed.");
				data.story[0].sex == "F";
			}
			writeText("The tile itself looks like one of those open-air cafes with the awnings over the tables, with a small figurine of a tan elf-girl in a uniform standing near one of them.");
			writeText("After a second, a slot near oppF pushes out a card just like yours, though oppShe doesn't actually grab it, just lightly tapping it once before listening close.");
			writeSpeech("card","","The Shadow-Elf Cafe, a magical place that's said to serve not just amazing tea and cakes, but some delectable and <i>powerful</i> potions brewed in the backrooms! You've just been invited in for a drink with one of the servers, totally on the house. Shadow-Elves don't have the best reputation, but their society is largely based around mutual respect, so everything should be fine as long as you don't do anything insulting...");
			writeSpeech("card","","Challenge: You have to taste your opponent's saliva. We're not picky about how - we recommend a nice little bout of tongue-fencing ourselves~!");
			writeText("oppF nods calmly, looking at you for a moment.");
			if(data.player.flags.includes("Rej")){
				if(data.player.flags.includes("fairy"))
					writeSpeech("opp","","How do you feel about this one? You weren't comfortable with me touching your tongue with my fingers, so...");
				else
					writeSpeech("opp","","How do you feel about this one? You weren't comfortable with a massage and this is a bit more <i>direct</i>, so...");
				writeTransition("cafeAcc", "Pull oppHer in for a kiss");
				writeTransition("cafeAccTongue", "Let your tongue hang out of your mouth");
				break;
			}
			else if(data.player.flags.includes("AccEnthused")){
				writeText("Or, to be more accurate, looking at your <i>chin</i>, which is still a little slick from when oppShe played with your tongue.");
				writeText("It's pretty obvious where she's going with this...");
				writeTransition("cafeAccEnthused", "Let oppHer control the pace");
				writeTransition("cafeAcc", "Pull oppHer in for a kiss");
				break;
			}
			else{
				if(data.player.flags.includes("fairyAccReluctant"))
					writeSpeech("opp","","Well, we're off to a good start, aren't we? Shame you went and wiped that spit off your chin - could've made for a fun way to solve the challenge.");
				else
					writeSpeech("opp","","Well, we're off to a good start, aren't we? Of course, I'll need you to stay sitting to actually reach those lips of yours...");
				if(data.player.pref == "dom"){
					writeTransition("cafeAccEnthused", "Let oppHer control the pace");
					writeTransition("cafeAcc", "Pull oppHer in for a kiss");
					writeTransition("cafeAccSpit", "Stop oppHer and tell oppHer to open oppHer mouth wide");
					break;
				}
				else{
					writeText("A second later, oppF walks over to you with a confident smile, oppHer hand moving slowly to your face.");
					writeTransition("cafeAccEnthused", "Let oppHer control the pace");
					writeTransition("cafeAcc", "Pull oppHer in for a kiss");
					break;
				}
			}
			break;
		}
		case "cafeAcc" : {
			addFlag("cafeAcc");
			writeText("Rather than waiting for oppHer, you reach out first as she approaches. You can see one eyebrow raise a bit before she smiles and rolls with it, letting you guide oppHer face to yours.");
			writeText("The first thing you notice about the kiss is the sensitivity spike from the game, the feeling of oppHer lips pressing against yours almost feeling like a jolt of pleasure through your body as oppF lets out a gentle laugh and pulls back just a fraction of an inch.");
			writeSpeech("opp","","Yeah, the first time always messes with people, myself included. I know I really developed an oral fixation thanks to this game...");
			writeText("She gently kisses your cheek once, oppHer breath faintly tickling your skin as she raises oppHer knee up to the couch and leans forward a bit.");
			writeText("Just as you feel oppHer thigh press against your crotch, she kisses you fully, oppHer tongue pressing against yours as you feel oppHer breasts push against you. Given the thin shirt and oppHer lack of a bra, you can actually feel oppHer nipples press against you.");
			writeText("She can too, if the throaty moan is anything to by.");
			writeSpeech("player","","Sounds like your mouth isn't the only sensitive thing here...");
			writeText("She's about to reply when your hand goes up and grabs at oppHer tit from below, your thumb flicking across the sensitive nub as oppHer words turn into a low groan of pleasure.");
			writeSpeech("opp","","F-Fuckin'... Game amps <i>everything...</i>");
			if(data.player.pref=="dom")
				writeSpeech("player","","More fun for me.");
			writeText("Groping oppHer chest more, you use oppHer moans as a roadmap for what's making oppHer feel better, along with the writhing that causes oppHer thigh to press more and more against your clothed cock.");
			writeText("Not that it <i>feels</i> that restrained...");
			writeSpeech("opp","","Nn~! We're supposed to be getting ready for the next round, y'know~...");
			writeText("Despite saying that, she presses oppHer lips to your neck, oppHer thigh still rubbing against you.");
			writeText("But she pauses at the sound of the same <i>clink</i> as before, letting out a slightly disappointed hum as she pulls away.");
			writeSpeech("opp","","You know, you can make it pretty hard to hold out until the <i>good</i> rounds, hun.");
			if(data.player.pref=="dom")
				writeSpeech("player","","I aim to please.");
			else
				writeSpeech("player","","I'm taking that as a compliment.");
			writeText("She rolls oppHer eyes with a light laugh, moving over to collect oppHer reward.");
			writeText("As she rolls the tokens around between oppHer fingers, you hear the sound of the card's voice... clear its throat?");
			writeSpeech("card","","Ahem! Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF looks down at the shiny tokens in oppHer hand for a moment before looking back at you.");
			writeSpeech("opp","","That makes this your first post-round, then. Do you want to go over how the whole 'token purchasing' works, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeAccEnthused" : {
			addFlag("cafeAccEnthused");
			writeText("You just jut your chin out with a small, cheeky smile, and oppF laughs and moves right in front of you.");
			writeSpeech("opp","","You really didn't come here to hesitate, did you~?");
			writeText("She playfully runs oppHer hands along your chin before pushing oppHer fingers into your mouth.");
			writeText("Her other hand forces your head to look straight up before you feel oppHer tongue run along your jawline, the tip tracing a line that sends a shiver down your back.");
			writeText("As she goes up, you feel oppHer just barely nibble on your ear, oppHer breath warm and heavy against it.");
			if(data.player.pref == "sub"){
				writeSpeech("opp","","God, you are such a dirty little <i>bitch,</i> aren't you...?");
				writeText("You can't hold back the moan that spills out as one of oppHer hands presses down against your crotch, oppHer palm putting a careful amount of pressure that makes your hips buck.");
			}
			else{
				writeSpeech("opp","","You're making it <i>so</i> hard to hold out until the later rounds, hun...!");
				writeText("Your body shudders as oppHer hand presses down against your crotch, oppHer tits pressing against your chest as she starts gently kissing oppHer way to your mouth.");
			}
			writeText("Just a second later, the fingers in your mouth get pulled out, quickly replaced with oppHer tongue as she leans into the kiss.");
			writeText("The way she moves oppHer tongue has you shuddering more than you expected, careful movements making it harder and harder to keep from moaning into oppHer mouth.");
			writeText("Then there's oppHer hand, dragging along in an over-the-pants handjob that feels <i>far</i> more sensitive than it should, your own spit soaking into the fabric from oppHer fingers as she grinds gently against your thigh.");
			if(data.player.pref == "dom"){
				writeText("Not to be outdone, you put your own hands to work, one hand grasping onto a tit while the other goes to oppHer hip, helping push oppHer against your thigh as she moans sharply.");
				writeSpeech("opp","","Oooh God... You'd better squeeze <i>hard~!</i>");
			}
			else{
				writeText("Pulling back for just a moment, oppF playfully presses oppHer chest against you harder.");
				writeSpeech("opp","","Don't let <i>me</i> have all the fun - go ahead and grab a nice handful~!");
				writeText("You quickly do, a throaty moan shaking the both of you as she shudders and grinds oppHer pussy down harder against your leg.");
			}
			writeText("You can feel oppHer shuddering pick up suddenly as you grasp tightly and feel your thumb press against a nub, oppHer eyes suddenly shooting open wide, oppHer breathing heavy.");
			writeSpeech("opp","","F-Fuck, my...");
			writeText("Taking a few deep breaths, she collects oppHerself quickly.");
			writeSpeech("opp","","Sorry, my nipples are really, <i>really</i> sensitive, and I almost... Ahem. We should probably, uh. Keep playing?");
			if(data.player.pref == "dom")
				writeSpeech("player","","If that's just round one, I can hardly wait for the next challenge.");
			else
				writeSpeech("player","","Oh, right. We should probably keep going, yeah...");
			writeText("oppF lets out a little laugh before giving you a quick peck on the cheek and going back to oppHer seat.");
			writeSpeech("opp","","Honestly, I mostly want to show you the whole 'transformation' thing before we actually get <i>started.</i> Otherwise...");
			writeText("She drags a finger across oppHer ruby-red lips for a moment.");
			writeSpeech("opp","","...I'd probably smear this lipstick down to your base.");
			writeText("The sound of the same clink as before suddenly rings out interrupts you two, a pair of tokens bouncing out of the slot as oppF's reward.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeText("oppF grabs oppHer tokens, rolling them around between oppHer fingers.");
			writeSpeech("opp","","That makes this the post-round, then. Do you want to go over how the whole 'token purchasing' works, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeAccSpit" : {
			addFlag("cafeAccSpit");
			writeSpeech("player","","Actually, it says you have to taste my spit, right?");
			writeText("She pauses, a look of confusion crossing oppHer face.");
			writeSpeech("opp","","I mean, yeah? Kinda thought that was what I was going for.");
			writeSpeech("player","","Then make sure to hold still, and <i>open wide.</i>");
			writeText("It takes a good few seconds for it to click but, when it does, a playful spark seems to fly through oppHer eyes.");
			writeSpeech("opp","","You got it, hun~!");
			if(data.player.flags.includes("golemRej"))
				writeText("She steps right up to where you're sitting, just barely bending at the hips to put oppHer mouth a little bit below yours.");
			else if(data.player.flags.includes("fairyRej"))
				writeText("She walks up to where you're sitting, getting down on oppHer knees so she's low enough that oppHer mouth is below yours when you stand up.");
			else
				writeText("She walks up to where you're sitting, getting down on oppHer knees so she's low enough that oppHer mouth is below yours.");
			writeText("Her hands go up to oppHer lips, spreading them wide and holding them open as she sticks out oppHer tongue and playfully goes,");
			writeSpeech("opp","","<i>Ahhhhh~!</i>");
			writeText("Aiming carefully, you feel yourself salivating before you bring your head close to oppHers.");
			writeText("You spit sharply, some of it spattering against oppHer cheek as she flinches slightly, before letting out a little giggle.");
			writeText("She keeps oppHer mouth open while rolling around oppHer tongue, before closing it, swallowing deeply, and winking.");
			writeSpeech("opp","","You're pretty fun, playerF. Maybe the next thing you make me swallow can be a bit more <i>fun</i> getting into my mouth~?");
			writeSpeech("player","","You keep teasing me, and it just might...");
			writeSpeech("opp","","Then I'll be sure not to stop~");
			if(data.player.flags.includes("golemRej"))
				writeText("She stands up straighter, rolling oppHer back as she does before she pauses again with a smirk.");
			else
				writeText("She stands up from oppHer knees, stretching out oppHer back before she pauses again and smirks.");
			writeSpeech("opp","","One more thing, though.");
			writeText("Dragging a finger across oppHer cheek, she collects most of the spit.");
			writeSpeech("opp","","I don't plan on letting you miss a <i>drop</i> next time.");
			writeText("She brings the finger to oppHer mouth, sensually licking it before plopping down onto the couch with a satisfied look, before the same <i>clink</i> sound from before rings out.");
			writeText("oppF picks up the reward, contentedly rolling them between oppHer fingers before the card's voice rings out again.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeSpeech("opp","","Well, I guess that makes this the start of the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "cafeAccTongue" : {
			addFlag("cafeAccTongue");
			writeText("Instead of answering oppHer, you lean forward a little bit and open your mouth, letting your tongue loll out.");
			writeSpeech("opp","","Mn. Good answer...");
			writeText("She moves close to you, oppHer hand gently grabbing onto your chin as she brings oppHer face close to yours.");
			writeText("The moment you feel oppHer lips press against your tongue, an electric shiver runs through your body, before oppHer other hand goes to rest on your hip.");
			writeText("After another moment, she teases oppHer own tongue forward, dragging the tip along yours as you feel the faint shift in the air of oppHer breathing.");
			writeText("Her hand pulls your chin forward, pressing oppHer lips against yours as oppHer tongue pushes into your mouth, the heightened sensitivity of your mouth getting you to moan into oppHers.");
			writeText("For a moment, she pulls away, oppHer face clearly flushed as she grins.");
			writeSpeech("opp","","Breathe deep, <i>stud.</i>");
			writeText("Her hand goes from your chin to the back of your head, pulling you close as she presses oppHer whole body into you.");
			if(data.player.pref != "dom"){
				writeText("You can't help but shudder pleasantly as she forcefully pulls you tight, oppHer breasts pressing against your chest as she thoroughly explores your mouth.");
				writeText("You try to keep pace with the kiss, but she seems to know just how to use the game's sensitivity enhancement to have you quivering in place as oppHer other hand slides along your thigh.");
			}
			else{
				writeText("You push back a bit, your own hands getting to work and running up oppHer thighs. You can feel oppHer tits press harder against you as she moans into your mouth, oppHer body practically grinding against yours.");
				writeText("Her free hand slides up your thigh too, though she doesn't bother stopping when she reaches the top, oppHer palm pressing firmly against your crotch to get a good feel for your erection.");
				if(data.player.dick < 4){
					writeText("She pauses a little as she does, though not for long as you hear oppHer giggle and pull oppHer head away for a moment.");
					writeSpeech("opp","","Sorry, I don't mean to laugh~! I'm sure we can still have a <i>lot</i> of fun with what you've got.");
				}
				else if (data.player.dick > 7){
					writeText("She pauses a little as she does though, oppHer body shuddering in arousal as she pulls away and looks down.");
					writeSpeech("opp","","Oh, you are going to be <i>so</i> much fun when we get to the good stuff...!");
				}
				else
					writeSpeech("opp","","We're gonna have some <i>fun</i> with this when we get to the later rounds...");
			}
			writeText("She pushes into you again, oppHer lips pressing against yours for a moment, but then she pulls away with a soft smile.");
			writeSpeech("opp","","I think that was a pretty good <i>taste,</i> don't you think?");
			writeText("Before you can respond, the same <i>clink</i> sound from when you finished your challenge rings out as a pair of tokens pop out of the slot.");
			writeText("oppF picks up the reward, contentedly rolling them between oppHer fingers before the card's voice rings out again.");
			writeSpeech("card","","Looks like you two finished your first round - good job! When you're ready for the next one, just tap your cards against the table again and we'll get right to it!");
			writeSpeech("opp","","Well, I guess that makes this the start of the post-round. Do you want to go over the whole 'token purchases' thing, or do you think you've got it?");
			writeTransition("adviceTokens", "Ask how buying a transformation works");
			writeTransition("postRound1", "Say you've got this");
			break;
		}
		case "adviceTokens" : {
			addFlag("adviceTokens");
			writeSpeech("player","","Can you walk me through it? I don't want to accidentally use up all my tokens on the wrong purchase or something like that.");
			writeSpeech("opp","","Sure thing. It's actually pretty simple for most things - one token for one trait. Just focus on the trait you want, or that you want to give if you'd prefer, and flip the coin.");
			writeText("oppF closes oppHer eyes for a moment, before grinning. With the ringing sound of the token getting flipped by oppHer thumb, it flies up quickly and lets off a brief, sharp <i>spark</i> before disappearing entirely.");
			if(data.story[0].sex == "M"){
				writeText("A second later, you hear oppF inhale sharply, sitting up straighter as you see him visibly grow a few inches and put on a little bulk. Plus, without his clothes in the way, you can see his cock gain a solid inch in length and get just a little thicker...");
				data.story[0].height = 80;
				data.story[0].dick = 8;
				if(data.player.flags.includes("golemRej")){
					writeText("He smirks up at you, still a bit shorter but a lot closer to you.");
					writeSpeech("opp","","I can't go letting you stay that much bigger than me, now can I?");
				}
				else{
					writeText("He smirks down at you, rolling his neck.");
					if(data.player.flags.includes("fairyRej"))
						writeSpeech("opp","","Heh, I'll have to be careful not to go getting <i>too</i> big for you.");
				}
				writeText("Shifting his position a bit, he takes a deep breath, his chest rising as he shudders a bit.");
				writeSpeech("opp","","Right... Probably a good idea to tell you that anytime something changes or you get something new, it's always pretty sensitive. Doesn't matter if it's muscles, tits, or a tail - this game wants players squirming at a <i>touch</i> whenever something changes.");
				writeSpeech("player","","Alright, thanks. I'll keep that in mind while spending tokens...");
			}
			else if (data.story[0].sex == "F"){
				data.story[0].chestVal = 2;
				writeText("A second later, she arches oppHer back and lets out a throaty moan, oppHer shirt clearly starting to strain more as you watch oppHer breasts start to expand out. A moment ago, they were a pretty solid handful, but now...");
				writeText("She rolls oppHer shoulders around, oppHer lightly heaving chest accentuating the large pair of Double-Ds held behind oppHer stretched shirt. oppF uses oppHer hands to heft them up with a grin, shifting them around to find a more comfortable fit.");
				writeSpeech("opp","","Most changes only last as long as the game, unless you can make a deal with the owner or something. No consequences means a <i>lot</i> more fun, in my opinion.");
				writeText("Taking a deep breath, she finally pulls oppHer hands away from oppHer chest.");
				writeSpeech("opp","","Ah, right. Forgot to mention, but you'll want to keep in mind that anytime something changes or you get something new, the game kinda 'resets' your sensitivity, almost? New parts, new nerves. It makes things like tails or ears really, <i>really</i> nice to play with.");
				writeSpeech("player","","Sounds like something to keep in mind... Thanks.");
				writeSpeech("opp","","No problem! Once you've figured out what you want to get, just flip a token and have some fun with it!");
			}
			else{
				data.story[0].assVal = 2;
				writeText("A second later, she stands up just a bit, raising oppHer rear off of the couch and supporting oppHerself with oppHer hands as she bites oppHer lip.");
				writeText("Right in front of you, you can see oppHer ass grow slightly, oppHer barely-loose jeans suddenly starting to strain against oppHer ass, which somehow lokos just as firm despite the increase in volume.");
				writeText("When she sits back down, you can see oppHer the shape of oppHer rear shift with the slow change in pressure, oppF biting oppHer lip as she squirms a bit.");
				writeSpeech("opp","","God, I almost forgot to mention... You'll want to keep in mind that whenever you change something about your body or get anything new, the game likes to 'reset' your sensitivity. The last time I played, a girl grew oppHerself a cock and had to strip down because oppHer panties kept rubbing against it...");
				writeSpeech("player","","Sounds like something I'll want to keep in mind... Thanks.");
				writeSpeech("opp","","No problem, hun. Once you know what you want... Nn~");
				writeText("oppF takes a deep breath, oppHer eyes shutting as she holds back a moan.");
				writeSpeech("opp","","...Once you know, just flip the coin and have some fun.");
			}
			writeTransition("tfScreenAnimal", "Think about some animal-themed options");
			writeTransition("tfScreenMasc", "Think about some masculine transformations");
			writeTransition("tfScreenFem", "Think about some feminine transformations");
			if(data.player.flags.includes("Rej"))
				writeTransition("tfScreenRemove", "Think about removing a transformation");
			if(data.player.fName == "Testing"){
				writeTransition("tfScreenSissy", "Think about some sissification-themed transformations [NONE IMPLEMENTED]");
				writeTransition("tfScreenCow", "Think about some human-cow-themed transformations [NONE IMPLEMENTED]");
				writeTransition("tfScreenDegen", "Think about some very, <i>very</i> degenerate transformations [NONE IMPLEMENTED]");
			}
			writeTransition("postRound1", "Hold off on transformations for now");
			break;
		}
		case "postRound1" : {
			if(data.player.flags.includes("adviceTokens") != true && data.player.flags.includes("noAdvice") != true){
				addFlag("noAdvice");
				writeSpeech("player","","I think I've got this. Worst case scenario, I just end up with something unexpected, right?");
				writeSpeech("opp","","That's a good way to look at it. In that case, I'll just save up my tokens for now and let you test things out.");
			}
			else if(data.player.flags.includes("trans1") != true && data.player.flags.includes("noTrans") != true){
				addFlag("noTrans");
				writeSpeech("player","","Actually, I think I might save my tokens for now. Who knows what might happen, right?");
				writeText("oppF thinks about it for a moment before shrugging.");
				writeSpeech("opp","","That's probably pretty smart. If a punishment gives you something you're really not into, having a spare token can come in handy. Just remember that you have to wait until the end of a round to use them.");
			}
			else if(data.player.flags.includes("trans1") == true && data.player.newChange != ""){
				console.log("earsVal: "+data.player.earsVal+", tailVal: "+data.player.tailVal);
				writeText("oppF looks over the change appraisingly, nodding once.");
				if(data.player.newChange.includes("ears"))
					writeSpeech("opp","","Those ears are pretty cute... Makes me want to rub them between my fingers just to see how you'd react.");
				if(data.player.newChange.includes("tail"))
					writeSpeech("opp","","A tail, huh? Those can be <i>real</i> fun if you know how to use them...");
				if(data.player.newChange.includes("horseCock")){
					writeText("OppHer eyes clearly linger on the fat horse-cock hanging down, oppF not even trying to mask oppHer interest.");
					writeSpeech("opp","","...We're going to have <i>fun</i> making that fit.");
				}
				if(data.player.newChange.includes("dogCock")){
					writeText("OppHer eyes clearly linger on the scarlet knot, not even trying to mask the plain interest across oppHer face.");
					writeSpeech("opp","","...We're going to have <i>fun</i> tonight.");
				}
				if(data.player.newChange.includes("transMascDick") && data.player.dick > 10){
					writeText("OppShe stares quietly at your cock for a moment, before muttering,");
					writeSpeech("opp","","Challenge accepted...");
				}
				else if(data.player.newChange.includes("transMascDick") && data.player.dick > 7){
					writeText("OppHer eyes trace along your length, oppHer tongue going across oppHer lips for a moment.");
					writeSpeech("opp","","...We're going to have <i>fun</i> making that fit.");
				}
				else if(data.player.newChange.includes("transMascDick")){
					writeText("OppShe glances over at your length, just giving an approving nod in silence.");
				}
				if(data.player.newChange.includes("mascBuild")){
					writeText("oppF stares blatantly at your much large body with a smile.");
					writeSpeech("opp","","Looks like someone likes to top.");
				}
				if(data.player.newChange.includes("transFemBreasts") && data.player.chestVal == 1){
					if(data.story[0].sex == "M"){
						writeText("His eyes linger on your chest for a moment, his cock clearly twitching.");
						writeSpeech("opp","","Well, I can imagine the kind of fun we could have with those...");
					}
					else{
						writeSpeech("opp","","Looking to have a bit with a pair of your own, huh?");
						if(data.story[0].sex == "F"){
							writeText("She runs a hand along one of oppHer tits with a grin.");
							writeSpeech("opp","","You won't regret it, hun.");
						}
						else{
							writeText("She uses one hand to tease oppHer nipple, while the other casually strokes oppHer cock.");
							writeSpeech("opp","","Maybe we could have some fun with painting each other's tits, hm?");
						}
					}
				}
				else if(data.player.newChange.includes("transFemBreasts") && data.player.chestVal == 2){
					writeText("OppShe takes in the sight of your larger breasts, smirking.");
					writeSpeech("opp","","Looks like <i>someone's</i> having fun. I know I'm looking forward to playing with those...");
				}
				else if(data.player.newChange.includes("transFemBreasts")){
					writeText("OppShe marvels at the sight of your giant breasts.");
					writeSpeech("opp","","Taking it to the extreme, huh? Glad you're enjoying yourself! But you'd better share the fun of them with me...");
				}
				if(data.player.newChange.includes("transFemAss")){
					if(data.story[0].sex == "F"){
						writeText("She stares at your newly-fat ass with a look of excitement.");
						writeSpeech("opp","","I cannot <i>wait</i> to see how that thing jiggles~!");
					}
					else{
						writeText("OppShe bites oppHer lip while looking at your ass, oppHer cock twitching sharply.");
						writeSpeech("opp","","God, you're making it hard to not just pin you down right here...");
					}
				}
				if(data.player.newChange.includes("transFemDick")){
					if(data.story[0].sex == "F"){
						writeText("A look of amusement flies across oppF's face.");
						writeSpeech("opp","","There's easier ways to make a girl tease you, hun... But this might be my favorite. I'd love for you to put on a little show for me later with that <i>little toy</i>...");
					}
					else{
						writeText("oppF smiles, oppHer eyes clearly lingering on your shrunken cock.");
						writeSpeech("opp","","Looks like someone isn't interested in topping... Good thing I have more than enough for you to play with, hm?");
					}
				}
				if(data.player.newChange.includes("transMascChest")){
					if(data.player.flags.includes("transFemBreasts")){
						writeText("oppShe looks a little disappointed, but smiles nonetheless.");
						writeSpeech("opp","","Yeah, I guess they're not for everyone.");
					}
					else{
						if(data.story[0].sex == "M"){
							writeText("He grins, looking over your broader chest.");
							writeSpeech("opp","","You're looking trim... I like it.");
						}
						else{
							writeText("oppF bites oppHer lip as she looks over your chest.");
							writeSpeech("opp","","Looking good, <i>stud.</i>");
						}
					}
				}
				if(data.player.newChange.includes("transMascAss")){
					writeText("oppF takes a nice, long look at your now-firm ass.");
					writeSpeech("opp","","I'm looking forward to put my hands on <i>that...</i>");
				}
				if(data.player.newChange.includes("remGolemPun"))
					writeSpeech("opp","","Prefer the smaller look, huh? Can't blame you - I think you look better this way, too.");
				if(data.player.newChange.includes("remFairyPun"))
					writeSpeech("opp","","Not a fan of the fairy-look, huh? Well, you do look pretty hot like this, so I'm not complaining.");
				
				console.log(data.player.newChange+" will now be blank");
				data.player.newChange = "";
				console.log(data.player.newChange)
			}
			writeText("OppShe stretches out oppHer arms, relaxing and watching you with an interested look. OppShe's probably thinking about what you might choose to do...");
			writeTransition("round2", "Start the next round [NOT IMPLEMENTED]");
			writeTransition("tfScreen", "Think about some transformations");
			writeTransition("oppChat", "Chat with your opponent");
			
			break;
		}
		case "tfScreen" : {
			if(data.player.tokens < 1 && data.player.fName != "Testing"){
				writeText("Unfortunately, you're out of tokens, so you can't really buy any transformations right now.");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			writeText("There's a couple different kinds of transformations you could think about...");
			writeTransition("tfScreenAnimal", "Think about some animal-themed options");
			writeTransition("tfScreenMasc", "Think about some masculine transformations");
			writeTransition("tfScreenFem", "Think about some feminine transformations");
			if(data.player.flags.includes("Rej"))
				writeTransition("tfScreenRemove", "Think about removing a transformation");
			if(data.player.fName == "Testing"){
				writeTransition("tfScreenSissy", "Think about some sissification-themed transformations [NONE IMPLEMENTED]");
				writeTransition("tfScreenCow", "Think about some human-cow-themed transformations [NONE IMPLEMENTED]");
				writeTransition("tfScreenDegen", "Think about some very, <i>very</i> degenerate transformations [NONE IMPLEMENTED]");
			}
			writeTransition("postRound1", "Hold off on transformations for now");
			break;
		}
		case "tfScreenAnimal" : {
			writeText("oppF mentioned that you could grow animal ears if you wanted...");
			writeTransition("transCatEars", "Grow a pair of sleek cat ears");
			writeTransition("transDogEars", "Grow a pair of floofy dog ears");
			writeTransition("transFoxEars", "Grow a pair of fluffy fox ears");

			writeText("And of course, oppShe mentioned tails, too...");
			writeTransition("transCatTail", "Grow a nice, thin cat tail");
			writeTransition("transDogTail", "Grow a floofy dog tail");
			writeTransition("transFoxTail", "Grow an absurdly fluffy fox tail");

			writeText("But if you were feeling a little more frisky, there's always...");
			writeTransition("transHorseCock", "Get yourself a fat horse-cock");
			writeTransition("transDogCock", "Grow a knotty doggy dick");

			writeText("Of course, there are always other things to do, too...");
			writeTransition("tfScreen", "Think about another transformation");
			writeTransition("postRound1", "Go back to the game");
			break;
		}
		case "tfScreenMasc" : {
			if(data.player.flags.includes("transMascBuild") != true || (data.player.flags.includes("golemRej") && data.player.flags.includes("transGolemRem"))){
				writeText("If you wanted, you could probably make your body look a bit more muscular...");
				writeTransition("transMascChest", "Change to look a bit more manly");
			}
			else if(data.player.fName == "Testing")
				writeTransition("transMascChest", "Change to look a bit more manly");
			else
				writeText("Your body is already pretty broad and stocky, so it'd be a waste of a coin to try again.");
			if(data.player.flags.includes("transMascAss") != true){
				if(data.player.flags.includes("transFemAss")){
					writeText("Using tokens to make your ass both more firm and more jiggly has caused some small compatibility issues, but you can still try and firm up.");
					writeTransition("transMascAss", "Firm up that rear");
				}
				else{
					writeText("You could also firm up that ass of yours specifically...");
					writeTransition("transMascAss", "Firm up that rear");
				}
			}
			else
				writeText("You've already firmed up your ass a lot, so doing the same thing would probably be a waste of a coin.");

			if(data.player.dick > 11){
				writeText("Unfortunately, with a foot-long gut-puncher, growing any further is probably a bad idea for oppF's health...");
				if(data.player.fName == "Testing")
					writeTransition("transMascCock", "Add a bit of length down there");
			}
			else{
				writeText("And of course, if you're feeling like you want to pump up your length down there...");
				writeTransition("transMascCock", "Add a bit of length down there");
			}
			writeText("Of course, there are always other things to do, too...");
			writeTransition("tfScreen", "Think about another transformation");
			writeTransition("postRound1", "Go back to the game");
			break;
		}
		case "tfScreenFem" : {
			writeText("If you wanted, you could probably grow a nice pair of breasts with one of these tokens...");
			writeTransition("transFemBreasts", "Grow out your chest a little");

			if(data.player.flags.includes("transFemAss"))
				if(data.player.flags.includes("transMascAss")){
					writeText("Using tokens to make your ass both more firm and more jiggly has caused some small compatibility issues, but you can still try and firm up.");
					writeTransition("transMascAss", "Firm up that rear");
				}
				else{
					writeText("Alternatively, you could round out that booty of yours and get it nice and <i>fat...</i>");
					writeTransition("transFemAss", "Get that ass nice and jiggly");
				}
				if(data.player.dick < 2)
					writeText("Of course, you can't really shrink your tiny little dicklet down any further without growing yourself a pussy, which isn't really an option yet...");
				else{
					writeText("And then, if you're feeling a little unfeminine because of your length <i>down there</i>, you could always...");
					writeTransition("transFemDick", "Shrink that cock down");
				}
				writeText("Of course, there are always other things to do, too...");
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "tfScreenRemove" : {
				if(data.player.flags.includes("fairyRej"))
					writeTransition("transFairyRem", "Remove the Fae-Form punishment");
				else if (data.player.flags.includes("golemRej"))
					writeTransition("transFairyRem", "Remove the Golem's Shape punishment");
				else
					writeSpecial("You have no punishments currently affecting you.");
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transCatEars" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="ears";
				console.log("catEarsAdded");
				console.log(data.player.newChange)
				addTrans();
				data.player.earsVal = 1;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("Almost immediately, a sweet-smelling haze seems to settle over your head, heat feeling like it's radiating down into your body for a few seconds before it stops.");
				writeText("You're not sure how you know for sure, but you have a pair of jet-black cat ears poking out of your head, which you can kinda almost move if you focus.");
				writeText("They do seem to twitch on their own every few seconds, but aside from that, they just feel sensitive to the air around you.");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transDogEars" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="ears";
				console.log(data.player.newChange)
				addTrans();
				data.player.earsVal = 2;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("Almost immediately, a sweet-smelling haze seems to settle over your head, heat feeling like it's radiating down into your body for a few seconds before it stops.");
				writeText("You're not entirely sure how you know, but you have a pair of droopy dog ears coming out from your head. You can flop them around by bouncing your hair about, but can't really control them.");
				writeText("They do seem to twitch on their own every few seconds, but aside from that, they just feel sensitive to the air around you.");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFoxEars" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="ears";
				console.log(data.player.newChange)
				data.player.earsVal = 4;
				addTrans();
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("Almost immediately, a sweet-smelling haze seems to settle over your head, heat feeling like it's radiating down into your body for a few seconds before it stops.");
				writeText("You're not entirely sure how you know, but you definitely have a pair of fluffy fox ears poking out of your head. The fur is almost absurdly soft...");
				writeText("They do seem to twitch on their own every few seconds, but aside from that, they just feel sensitive to the air around you.");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transCatTail" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="tail";
				console.log(data.player.newChange)
				addTrans();
				data.player.tailVal = 1;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, a warm surge of energy seems to flow down from your head through your spine, causing your whole body to jolt.");
				writeText("It fades quickly, leaving you with a long, sleek cat's tail coming out from right above your ass. Jet black and glossy, you can make it move with just a little bit of focus.");
				writeText("Of course, it does feel pretty sensitive, even to the gentle airflow of the room...");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transDogTail" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="tail";
				console.log(data.player.newChange)
				console.log("dogTailAdded");
				addTrans();
				data.player.tailVal = 2;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, a warm surge of energy seems to flow down from your head through your spine, causing your whole body to jolt.");
				writeText("It fades quickly, leaving you with a big and fluffy dog's tail, wagging around. You can get it to be still with a little bit of focus, but you know that it'll start wagging uncontrollably if you go getting <i>too</i> excited.");
				writeText("Of course, it does feel pretty sensitive, even to the gentle airflow of the room...");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFoxTail" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="tail";
				console.log(data.player.newChange)
				addTrans();
				data.player.tailVal = 4;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, a warm surge of energy seems to flow down from your head through your spine, causing your whole body to jolt.");
				writeText("It fades quickly, leaving you with a titanic mound of the fluffy substance known to man - a fox's tail. With a bit of focus, you can move it, though you note that when it's behind you, it actually makes a really good cushion/");
				writeText("Of course, it does feel pretty sensitive, even to the gentle airflow of the room...");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transHorseCock" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="horseCock";
				data.player.flags +="horseCock";
				console.log(data.player.newChange)
				addTrans();
				data.player.genitalsVal = 6;
				data.player.dick = 12;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, you feel a powerful heat <i>surge</i> through your body, focusing on your crotch.");
				writeText("Seeing as you lack a sheathe and this big guy swings low, there's no way you'll be wearing anything below the hips for a while.");
				writeText("You now have a long, heavy, speckled shaft with a medial ring swelling out halfway down, and a fat, blunt head that promises to <i>stretch</i> anything it enters...");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transDogCock" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange +="dogCock";
				data.player.flags +="dogCock";
				console.log(data.player.newChange)
				addTrans();
				data.player.genitalsVal = 7;
				data.player.dick = 8;
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, you feel a powerful heat <i>surge</i> through your body, focusing on your crotch.");
				writeText("Without any sort of natural sheathe, the feeling of wearing anything below your hips sets your mind aflame as you see it.");
				writeText("You now have a fat, ruby-red cock covered in veins and shining sleekly, sitting atop an even <i>fatter</i> knot. It feels so warm, even now...");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transMascChest" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.buildVal = 3;
				data.player.newChange += "transMascChest";
				data.player.flags += "transMascChest";
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, you feel a powerful heat <i>surge</i> through your body, before rapidly collecting around your torso.");
				writeText("It feels like little sparks of pleasure dancing across your skin before a sharp pang of pleasure shoots through you.");
				writeText("Looking down, you can see your torso is a lot broader and more toned, and definitely stronger looking.");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transMascAss" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.assVal = 1;
				data.player.newChange += "transMascAss";
				data.player.flags += "transMascAss";
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("A second later, you feel a powerful heat <i>surge</i> through your body, though it very quickly fixates on your rear.");
				writeText("Sparks of pleasure dart along the surface, feeling like a fast, sharp massage across the skin before it suddenly stops.");
				writeText("Looking down, you can see your ass is looking a lot firmer, more toned, and damn-fine-looking.");

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transMascCock" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange += "transMascDick";
				if(data.player.dick < 5){
					data.player.dick = 7;
					data.player.genitalsVal = 1;
					writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
					writeText("A flash of pleasant heat surges through your crotch, forcing a moan out of you as your less-than-large cock grows quite a bit. Not that anyone would be able to tell if they hadn't seen you beforehand...");
				}
				else if (data.player.dick < 8){
					data.player.dick = 9;
					data.player.genitalsVal = 8;
					writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
					writeText("A flash of pleasant heat surges through your crotch, forcing a moan out of you as your already above-average cock grows. At this point, you're probably around where most people would want to stop...");
				}
				else if (data.player.dick < 10){
					data.player.dick = 10;
					data.player.genitalsVal = 8;
					writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
					writeText("A flash of almost burning, pleasureful heat surges through your crotch, the moan not even able to spill out out of you as your already large cock grows even more. By the time the heat-haze over your head clears, it's pretty obvious that most people wouldn't be comfortable taking your full length...");
				}
				else{
					data.player.dick = 12;
					data.player.genitalsVal = 9;
					writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
					writeText("As it shatters, you feel an absurdly hot surge of pleasure flash through your body, nearly making you cum on the spot as you feel your cock grow to reach a foot long, every inch more sensitive than the last as you try not to pop.");
					writeText("When the heat finally fades, your shaft feels a lot less likely to spurt with a strong breeze, but it's still pretty sensitive.");
				}
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFairyRem" : {
				addFlag("trans1");
				data.player.newChange += "transFairyRem";
				loseTokens(1);
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("It only takes a moment for a feeling like a cold breeze to settle over your body, leaving you without breath as everything goes white.");
				writeText("When your vision clears up, you can see that you're back to a pretty normal, average-sized body.");
				data.player.heightVal = 0;
				data.player.buildVal = 0;
				data.player.clothesVal = 0;
				data.player.legsVal = 0;
				data.player.assVal = 0;
				data.player.chestVal = 0;
				data.player.genitalsVal = 0;
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transGolemRem" : {
				addFlag("trans1");
				data.player.newChange += "transGolemRem";
				loseTokens(1);
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("It only takes a moment for a feeling like a cold breeze to settle over your body, leaving you without breath as everything goes white.");
				writeText("When your vision clears up, you can see that you're back to a pretty normal, average-sized body.");
				data.player.heightVal = 0;
				data.player.buildVal = 0;
				data.player.clothesVal = 0;
				data.player.legsVal = 0;
				data.player.assVal = 0;
				data.player.chestVal = 0;
				data.player.genitalsVal = 0;
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFemBreasts" : {
				addFlag("trans1");
				loseTokens(1);
				data.player.newChange += "transFemBreasts";
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				if(data.player.chestVal == 0){
					data.player.flags += ("transFemBreasts");
					data.player.chestVal = 1;
					writeText("A gentle surge of warmth pushes into your chest, turning you on as the phantom sensation of hands groping at your chest pull a moan from your throat.");
					writeText("The sensations fade quickly, leaving you with a small pair of breasts that are sensitive to the touch.");
				}
				else if(data.player.chestVal == 1){
					writeText("The surge of warmth is stronger this time, leaving you gasping as the phantom hands feel stronger and squeeze tighter around your tits.");
					writeText("When the sensations fade and your chest isn't heaving from arousal <i>quite</i> as much, you can see that your tits are at least C-cups now.");
					data.player.chestVal = 2;
				}
				else if(data.player.chestVal == 2){
					data.player.flags += ("hugeBreasts");
					writeText("The heat completely overwhelms you, your whole body tensing up as you moan throatily right in front of oppF, but not really able to care as the phantom hands run wild.");
					writeText("You could swear you feel them across your entire body this time, forcing you to the edge of orgasm and holding you there until the suddenly stop, leaving you pent-up and gasping for air.");
					writeText("Your tits are huge now, each one at least the size of your head and both of them sensitive enough that a strong breeze would make you moan uncontrollably.");
					data.player.chestVal = 7;
				}
				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFemAss" : {
				addFlag("trans1");
				data.player.newChange += "transFemAss";
				loseTokens(1);
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				writeText("There's a faint sensation of warmth in your ass for a moment, before it suddenly <i>spikes</i> in heat, feeling like a sharp slap on the ass that makes you yelp.");
				writeText("Checking your ass, you can quickly tell that it got <i>very</i> juicy, straining against your pants rather clearly.");
				data.player.newChange += "transFemAss";
				data.player.assVal = 2;

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "transFemDick" : {
				addFlag("trans1");
				loseTokens(1);
				writeText("You flip the coin in the air, a bright spark flashing out of it at its highest point.");
				data.player.newChange += "transFemDick";
				data.player.dick = 3;
				data.player.genitalsVal = 3;

				writeTransition("tfScreen", "Think about another transformation");
				writeTransition("postRound1", "Go back to the game");
				break;
			}
			case "oppChat" : {
				writeSpeech("player","","Actually, I had a few questions I wanted to ask.");
				writeSpeech("opp","","Oh yeah? Ask away, then! I'm always happy to help out.");
				writeTransition("oppChatPlayedBefore", "You said you've played this before?");
				writeTransition("oppChatSex", "Wanna fuck?");
				writeTransition("postRound1", "Never mind");
				break;
			}
			case "oppChatPlayedBefore" : {
				data.player.flags += "asked";
				writeSpeech("player","","You mentioned that you played this before, and I was wondering how those games went.");
				writeText("oppF pauses to think.");
				writeSpeech("opp","","I actually thought you meant questions about the game, but I'm good to answer that, too. My first time was a lot of fun, with this one girl that really took the lead and helped me out. Lot of fun to play with, and probably the dirtiest bitch I've played against.");
				writeText("OppShe pauses to grin.");
				writeSpeech("opp","","Well, <i>thus far,</i> I mean. She purposefully rejected a few challenges just because she wanted to see what the punishments were. By round four, she was two feet tall, hyper-elastic, and gave me a stomach-deformation fetish. She was a <i>freak.</i>");
				writeText("oppF thinks a bit more, before breaking out into a grin.");
				writeSpeech("opp","","After that, I got paired up with this guy that got me completely <i>hooked </i>on anal. It wasn't like it was some huge sequence of challenges and punishments or anything - it was just that he was really into making it feel as good as possible for the both of us. He was a really adorable little guy.");
				writeSpeech("opp","","And my last game... was different. I loved it, but the girl was a total S, and it took me a few rounds to really get into it. Honestly, I'm still not entirely sure how I feel about orgasm control. It was definitely an interesting experience, though, and I wouldn't trade it for the world.");
				writeText("oppF leans back, crossing oppHer arms with an even wider grin.");
				writeSpeech("opp","","That makes this my fourth time playing. I'm <i>far</i> from the most experienced player, but I guess they think I'm good enough to walk someone new through it, yeah?");
				writeText("OppShe shakes oppHer head, oppHer hair shifting a bit.");
				writeSpeech("opp","","Was that all?");
				writeTransition("oppChat", "Keep chatting");
				writeTransition("postRound1", "Return to the game");
				break;
			}
			case "oppChatSex" : {
				if(data.player.pref == "dom")
					writeSpeech("player","","Wanna fuck before the start of the next round?");
				else
					writeSpeech("player","","I was wondering if maybe you wanted to get off before the start of the next round...?");
				writeText("oppF laughs, shrugging.");
				writeSpeech("opp","","I mean... Sure, why not? The challenges have their own appeal, but there's no reason we can't fuck between them. What did you have in mind?");


			//Current Version:
			if(data.story[0].sex == "M"){
				writeTransition("oppChatSexAnal", "Fuck his ass");
				writeTransition("oppChatSexCatch", "Ride his cock");
			}
			else if(data.story[0].sex == "F"){
				writeTransition("oppChatSexAnal", "Fuck her ass");

			}
			else{
				writeTransition("oppChatSexAnal", "Fuck her ass");
				writeTransition("oppChatSexCatch", "Ride her cock");
			}


			//Complete list:
			// if(data.story[0].sex == "M"){
			// 	writeTransition("oppChatSexAnal", "Fuck his ass");
			// 	writeTransition("oppChatSexCatch", "Ride his cock");
			// 	writeTransition("oppChatSexHJ", "Jerk each other off");
			// 	if(data.player.genitalsVal == 7)
			// 		writeTransition("oppChatSexAnalKnot", "Knot him");
			// 	if(data.player.tailVal != 0)
			// 		writeTransition("oppChatSexTail", "Give him a tailjob");
			// 	if(data.player.chestVal == 1 || data.player.chestVal == 2 || data.player.chestVal == 7)
			// 		writeTransition("oppChatSexGiveTitjob", "Give him a titjob");
			// }
			// if(data.story[0].sex == "F"){
			// 	writeTransition("oppChatSexVaginal", "Fuck oppHer");
			// 	writeTransition("oppChatSexAnal", "Fuck oppHer ass");
			// 	writeTransition("oppChatSexTitjob", "Get a titjob");
			// 	if(data.player.genitalsVal == 7){
			// 		writeTransition("oppChatSexFemKnot", "Knot oppHer");
			// 		writeTransition("oppChatSexAnalKnot", "Knot oppHer ass");
			// 	}
			// }
			// if(data.story[0].sex == "H"){
			// 	writeTransition("oppChatSexAnal", "Fuck oppHer ass");
			// 	writeTransition("oppChatSexCatch", "Ride oppHer cock");
			// 	writeTransition("oppChatSexHJ", "Jerk each other off");
			// 	writeTransition("oppChatSexTitjob", "Get a titjob");
			// 	if(data.player.chestVal == 1 || data.player.chestVal == 2 || data.player.chestVal == 7)
			// 		writeTransition("oppChatSexGiveTitjob", "Give oppHer a titjob");
			// 	if(data.player.genitalsVal == 7)
			// 		writeTransition("oppChatSexAnalKnot", "Knot oppHer");
			// 	if(data.player.tailVal != 0)
			// 		writeTransition("oppChatSexTail", "Give oppHer a tailjob");
			// }
			writeTransition("postRound1", "Never mind - return to the game");
			break;
		}
		case "oppChatSexAnal" : {
			if(data.player.flags.includes("asked")){
				if(data.player.pref == "dom")
					writeSpeech("player","","You said that another player got you totally hooked on anal, so let's see you bend over.");
				else
					writeSpeech("player","","You mentioned that another player got you hooked on anal, and I'm getting pretty hard...");
			}
			else{
				if(data.player.pref == "dom")
					writeSpeech("player","","I was thinking you could bend over for a bit of <i>fun</i>.");
				else
					writeSpeech("player","","Well, I'm getting pretty hard, and you have an <i>amazing</i> ass...");
			}
			writeText("oppF laughs, nodding.");
			writeSpeech("opp","","Well, when you put it like that, how am I supposed to say no?");
			writeText("OppShe stands up and turns around, bending at the hip to put one hand on the couch, and the other grasping at oppHer ass.");
			writeSpeech("opp","","I keep myself nice and ready before I start a game now, so don't think you have to go gentle if you don't want to.");
			if(data.player.genitalsVal == 6){
				if(data.story[0].sex == "F")
					writeText("Looking over your thick horsecock, oppShe does take a moment to rub oppHer clit in excitement.");
				else
					writeText("Looking over your thick horsecock, oppShe does give oppHer cock a few tentative strokes.");
				writeSpeech("opp","","Be as rough as you like and <i>ride me like your horsie.</i>");
			}
			else if(data.player.genitalsVal == 7){
				if(data.story[0].sex == "F")
					writeText("Looking at your red rocket, particularly the thick knot, oppShe smirks and fingers her pussy for a second.");
				else{
					writeText("Looking at your red rocket, particularly the thick knot, oppShe smirks and strokes oppHer dick a few times.");
					writeSpeech("opp","","Be as rough as you have to be to <i>knot me like a bitch.</i>");
				}
			}
			else if(data.player.genitalsVal == 8 || data.player.genitalsVal == 9){
				writeText("oppF takes a moment to look over your huge cock, before grinning even wider.");
				writeSpeech("opp","","And feel free to take that as a challenge, if you want to see how long it takes for me to take you <i>balls-deep.</i>");
			}
			if(data.player.buildVal == 7 || data.player.buildVal == 8){
				writeText("You approach oppHer quickly, your hands grabbing onto oppHer ass... and realizing that your height makes for just a little bit of a problem.");
				if(data.player.buildVal == 7){
					writeText("Laughing a bit, oppF shakes oppHer head.");
					writeSpeech("opp","","Here you go, <i>little guy~!</i>");
					writeText("Spreading oppHer legs further out, oppShe lowers her ass down enough that it's around your level. It's a bit demeaning, but...");
					if(data.player.pref == "sub")
						writeText("...if anything, it's even more of a turn-on.");
					else{
						writeSpeech("opp","","<font size='+2'><i><b>F-FUCK~!</b></i></font>");
						writeText("A red imprint from your hand is left on oppHer ass as oppShe gasps a bit.");
					}
					writeText("Your cock throbs against oppHer ass, rubbing against it as your precum spreads around oppHer hole.");
				}
				else if(data.player.buildVal == 8){
					writeText("You actually have to crouch down a bit, even as oppShe stands up onto oppHer toes.");
					writeSpeech("opp","","Let's see you put that new body of yours through its paces, hm?");
					writeText("Your cock throbs against oppHer ass, rubbing against it as your precum spreads around oppHer hole.");
				}
			}
				writeText("A moment later and, rather than waiting on you to thrust, oppF lets out a low hum...");
				writeText("...and sharply bobs oppHer hips back, the tip of of your cock sliding into oppHer ass as oppShe lets out a groan of pleasure.");
				if(data.player.genitalsVal == 7){
					writeText("The thinner tip of your dog-cock makes it easier to slide in, slipping most of your length in with a single long, slow thrust.");
					if(data.story[0].sex == "F")
						writeText("OppShe lets out a low groan, oppHer free hand going to finger herself as oppShe arches oppHer back and bounces against your knot.");
					else
						writeText("OppShe lets out a low groan, oppHer free hand pawing at oppHer ass and spreading oppHer cheeks while bouncing back against your knot.");
				}
				if(data.player.genitalsVal == 6){
					writeText("oppF has to hold still for a moment to get a bit more used to the fat, flared tip before oppShe starts to slowly slide back.");
					writeSpeech("opp","","Christ, you're big...!");
					writeText("Despite the complaint, oppShe keeps backing up further and further, more and more of your horsecock disappearing into oppHer ass.");
				}
				if(data.player.dick < 4){
					writeText("Your hips immediately clap against oppHers as oppShe shifts around.");
					writeSpeech("opp","","Ah, you bottomed out...");
					if(data.story[0].sex == "F"){
						writeText("OppShe brings oppHer hand to oppHer pussy again, toying with it idly.");
					}
					else{
						writeText("OppShe brings oppHer hand to oppHer dick, stroking it slowly from top to bottom.");
					}
					writeSpeech("opp","","Go ahead and start thrusting. We might as well try to have fun, right?");
					writeText("OppShe keeps toying with herself while you pound into oppHer ass, not really able to pull out too much without actually pulling out.");
					writeText("After around a minute of this, oppF starts shifting around, arching oppHer back more and panting as oppHer hand picks up speed.");
					writeText("Unfortunately, since the game is making your cock even more sensitive as it gets smaller...");
					writeSpeech("opp","","H-Huh...?");
					writeText("oppF's hand stops, curiosity evident in oppHer voice as you start spurting inside of oppHer.");
					writeSpeech("opp","","A quickshot...? Well, I guess that's fine.");
					writeText("OppShe pulls oppHimself off of you, standing up straight.");
					writeSpeech("opp","","Err... No offense, but maybe next time, you should catch?");
					writeTransition("postRound1", "Go back");
					break;
				}
				writeText("oppF keeps bouncing back against you, oppHer moans getting louder as oppShe uses a hand to tease oppHimself.");
				writeText("Your hands on oppHer hips, you keep pulling oppHer into your thrusts, gradually putting more force behind each one.");
				writeSpeech("opp","","C-Come on, you can do better than that...!");
				writeText("OppHer free hand gives oppHimself a swift slap on the ass, looking back at you with a grin.");
				writeSpeech("opp","","Get <i>rough~!</i>");
				writeSpeech("player","","If you say so...");
				if(data.player.genitalsVal != 6 && data.player.genitalsVal != 7 && data.player.genitalsVal != 8 && data.player.genitalsVal != 9){
					if(data.story[0].sex == "M")
						writeText("You tighten your grip around oppHer, pistoning in and out of oppHer ass as quickly as you can, the echo of your hips against oppHer ringing out nearly as loud as the moaning.");
					else
						writeText("You tighten your grip around oppHer, pistoning in and out of oppHer ass as quickly as you can, the echo of your hips against oppHers ringing out nearly as loud as the moaning.");
					writeSpeech("opp","","F-Fuck yeah...! Fuck me <i><b>up,</b></i> stud~!");
					writeText("Thrusting harder, you push oppF forward onto the couch, oppHer arm giving out as oppHer face gets shoved into it.");
					writeText("The lower angle makes it a lot easier to put more force into each thrust, which only makes oppHer groaning even louder.");
					if(data.story[0].sex == "F"){
						writeText("Her hand keeps toying with her pussy, occasionally rubbing at her clit as she groans.");
						writeSpeech("opp","","F-Fuck, that's more like it...!");
					}
					else{
						writeText("His hand keeps toying with his cock, jerking off quickly as you thrust into him.");
						writeSpeech("opp","","That's- That's fuckin' better...!");
					}
					writeText("OppHer hand moving almost frantically, you can feel oppF's ass tighten around you almost rhythmically, oppHer moaning getting louder with every thrust.");
					writeText("You can tell from that that oppShe's getting close, and it's bringing you to the edge too...!");
					writeSpeech("player","","I'm about to...!");
					writeSpeech("opp","","Inside!");
					writeText("OppShe tries to turn oppHer head to you, though the way you're fucking oppHer into the couch makes that a bit difficult.");
					writeSpeech("opp","","Fill me up~!");
					writeText("Unable to hold back, you completely let loose, forcing your cock as deep as it could go and cumming.");
					writeText("You cum deep into oppHer ass, spurting as oppShe lets out a long groan.");
					writeText("After a few seconds, you start pulling out, finally sliding your head out with a POP.");
				}
				else{
					writeText("Letting go of oppHer hips, you reach forward and try to grab at oppHer's wrists, leaving oppHer face to fall into couch.");
					writeSpeech("opp","","Nn~");
					writeText("Not that oppShe seems to mind. Grasping tightly, you pull your hips back and...");
					if(data.player.genitalsVal == 6){
						writeText("...you <i><b>slam</b></i> your horsecock into oppHer ass, oppF letting out a throaty moan as the medial ring pushes well past oppHer entrance.");
						writeSpeech("opp","","F-Fuck...~!");
						writeText("Holding onto oppHer wrists, you start bucking into oppHer as you both let out louder and louder moans.");
						writeSpeech("opp","","It's stretching me out so much...! Come on, I want your <i>delicious fucking horsecock <b>balls-deep!</b></i>");
						writeText("Seeing as that was already the plan, you keep pounding into oppHer, the lower angle causing your thrusts to finally go all the way.");
						writeText("You can feel oppHer squeezing around tightly, oppHer words starting to slur into each other as oppShe descends into wordless moaning.");
						writeText("The rapid tensing is actually bringing you to the edge...");
						writeSpeech("player","","I'm getting close...!");
						writeText("Immediately, you feel oppHer ass tighten.");
						writeSpeech("opp","","God, yes...! Fill me up! Fuck my ass and <i>fill me up like a <b>stable whore!</b></i>");
						writeText("Unable to hold back, you completely let loose, your heavy balls slapping against oppHer thighs as you cum.");
						writeText("You start shooting rope after rope, your body shaking as you cum, but it just doesn't stop - nearly a solid minute of just spurting inside of oppHer goes by before you finally collapse.");
						writeText("It takes a bit for your entire cock to slide out with a loud, wet <i><b>pop</b></i>, but when it does, a small wave of watery cum spilling out onto the floor as oppHer knees give out.");
					}
					else if(data.player.genitalsVal == 7){
						writeText("...you <i><b>slam</b></i> your hips forward, oppF letting out a throaty moan as the knot <i>pops</i> into oppHer ass and starts rhythmically squeezing around you.");
						writeSpeech("opp","","F-Fuck...~!");
						writeText("Holding onto oppHer wrists, you start bucking into oppHer as you both let out louder and louder moans.");
						writeSpeech("opp","","G-God, this knot is so <i>unfair~!</i> It's rubbing all the right spots...!");
						writeText("You can feel oppHer squeezing around tightly, oppHer words starting to slur into each other as oppShe descends into wordless moaning.");
						writeText("The rapid tensing is actually bringing you to the edge...");
						writeSpeech("player","","I'm getting close...!");
						writeText("Immediately, you feel oppHer ass tighten.");
						writeSpeech("opp","","Inside...! Fill me up! Knot me, and make me your <i>fucking bitch!</i>");
						writeText("Unable to hold back, you completely let loose, forcing your knot as deep as it could go and cumming.");
						writeText("You start shooting rope after rope, your body shaking as you cum, but it just doesn't stop - nearly a solid minute of just spurting inside of oppHer goes by before you finally collapse.");
						writeText("A loud, wet <i><b>pop</b></i> rings out as your knot slides out of oppHer hole, a small wave of watery cum spilling out onto the floor as oppHer knees give out.");
					}
					else if(data.player.genitalsVal == 8 || data.player.genitalsVal == 9){
						writeText("...you <i><b>slam</b></i> your hips forward, oppF letting out a throaty moan as you sink your cock balls-deep into oppHer ass.");
						writeSpeech("opp","","F-Fuck...~!");
						writeText("Holding onto oppHer wrists, you start bucking into oppHer as you both let out louder and louder moans.");
						writeSpeech("opp","","F-Fuck yeah, <i>pound</i> me with that monstercock! <i>Break me~!</i>");
						writeText("Seeing as that was already the plan, you keep pounding into oppHer, the lower angle causing your thrusts to finally go all the way.");
						writeText("You can feel oppHer squeezing around tightly, oppHer words starting to slur into each other as oppShe descends into wordless moaning.");
						writeText("The rapid tensing is actually bringing you to the edge...");
						writeSpeech("player","","I'm getting close...!");
						writeText("Immediately, you feel oppHer ass tighten.");
						writeSpeech("opp","","Don't you <i>dare</i> pull out...! Fill me up and <i><b>cum inside!</b></i>");
						writeText("Unable to hold back, you completely let loose, forcing your cock as deep as it could go and cumming.");
						writeText("You cum deep into oppHer ass, spurting as oppShe lets out a long groan.");
						writeText("After a few seconds, you start pulling out, finally sliding your head out with a POP.");
					}
				}
			writeText("Both of you take a minute to collect yourselves before oppF speaks.");
			writeSpeech("opp","","You were incredible...");
			writeSpeech("player","","Th-Thanks... You too...");
			writeText("You two have to rest for a little while longer, but once you're ready, you can return to the game.");
			writeTransition("postRound1","Go back");
			break;
		}
		case "oppChatSexCatch" : {
			if(data.player.flags.includes("androAdmire")){
				writeSpeech("player","","Remember when I said I want that thing inside me?");
				writeText("oppF grins, oppHer cock twitching once as oppShe leans back and spreads out a bit.");
			}
			else{
				if(data.player.pref == "dom")
					writeSpeech("player","","Full disclosure: I want your cock inside of me.");
				else
					writeSpeech("player","","I want you inside me.");
				writeText("oppF smiles, nodding as oppShe leans back and spreads out of bit.");
			}
			writeSpeech("opp","","If you want it that bad, <i>come and get it.</i>");
			if(data.player.flags.includes("fairyRej") == true && data.player.flags.includes("remFairyPun") != true){
				writeText("You quickly move to straddle oppF, your smaller body making it a bit harder to climb up at first, but you're soon kneeling over oppHer length.");
				writeSpeech("opp","","You know, you look pretty good at this size...");
				writeText("OppHer smile widens sharply as you feel oppHer hands rest down on your hips.");
				writeSpeech("opp","","...and you look pretty light, too.");
				writeSpeech("player","","Thank-");
				writeText("Your voice cuts out as you feel oppHer head press against your hole, the feeling against your hyper-sensitive skin causing you to gasp sharply.");
				writeText("Instead of pushing it in, though, oppF rolls oppHer hips forward and pulls you close, oppHer shaft sliding against your ass as oppShe smears oppHer precum up to your lower back.");
				writeSpeech("player","","F-Fuck...!");
				writeText("Seated firmly on oppF's stomach, you suddenly realize just how long oppHer cock is compared to your tinier frame.");
				writeText("Maybe it's just the game, but it only makes you harder.");
				writeSpeech("opp","","Hah, I could probably get off just with this ass of yours~!");
				writeText("You shiver slightly as oppF shifts underneath you, sliding oppHer length against your cheeks.");
				if(data.player.pref == "dom"){
					writeText("Unable to hold back, you sharply raise your hips, putting your hands down on oppHer stomach with a smirk.");
					writeText("This time, when you're hole presses against oppHer head, <i>oppShe's</i> the one that has to bite back a moan.");
					writeText("And when you drop your hips back down, neither of you can keep quiet as you feel oppF's fingers squeezing down on your hips.");
				}
				else{
					writeText("oppF smirks as oppShe looks at you, oppHer hands holding yours tighter as oppShe raises you further up, every inch of oppHer shaft teasing your ass.");
					writeSpeech("player","","Let's see how much you can take.");
					writeText("You only feel the pressure against your hole for a moment, before oppHer slick length <i>pops</i> in and makes it impossible to keep from moaning.");
				}
				writeText("OppHer hands shift against you, twisting you around a bit to find an easier and deeper fit, even as you bob up and down on oppHer cock.");
				writeSpeech("player","","You're splitting me apart...!");
				writeSpeech("opp","","Try saying that after the next few inches.");
				writeText("Angling it just right, oppF pulls you down enough to slide further inside, oppHer head scraping against your prostate as you fail to even gasp properly, your body falling forward as you try to support yourself with your hands on oppHer chest.");
				if(data.story[0].sex == "H"){
					writeSpeech("opp","","If you need some handles to hold onto, I've got a nice pair right here~");
					writeText("Moving oppHer chest closer to you, you can feel a bit of oppHer cock slide out as she shifts. As you grab oppHer tits, though, she <i>bucks</i> forward.");
				}
				else{
					writeSpeech("opp","","You're making this ride look <i>real</i> fun, y'know...");
					writeText("Shifting forward, you can feel a bit of his cock slide out for a moment, before one of his hands goes to the small of your back and he <i>bucks</i> forward.");
				}
				writeText("You squeal as oppShe hits your prostate again, your cock dribbling precum down from the tip as oppF <i>fucks</i> it out of you.");
				if(data.player.genitalsVal == 6){
					writeText("OppShe moans sharply at the sight of your fat horsecock and the feeling of it dragging across oppHer chest and spreading the slick fluid.");
					writeSpeech("opp","","Such a huge fucktoy on such a <i>tiny little body</i>... At least it's good for telling me how much you're <i>loving this.</i>");
				}
				else if(data.player.genitalsVal == 7){
					writeText("OppShe moans sharply as your knot slides against oppHer abdomen, the tip drooping low enough to smear your fluids wildly.");
					writeSpeech("opp","","Such a <i>fat</i> knot, and all you're using it for is to show me just how much you love getting fucked like a <i>bitch...</i> I'd say it's a shame, if it weren't such a <i><b>turn-on.</b></i>");
				}
				else if(data.player.genitalsVal == 8 || data.player.genitalsVal == 9){
					writeText("OppShe moans sharply as your cockhead smears your fluid across oppHer abdomen, the fat slab of cockmeat almost reaching oppHer chest.");
					writeSpeech("opp","","You have a nice, fat <i>bitch-breaker</i> like that, and you're riding <i>me...</i> You really do know how to make someone feel wanted~!");
				}
				else{
					writeText("OppShe moans as your cockhead smears your fluid across oppHer lower abdomen, oppHer skin feeling slick and sweet as you grind against it.");
					writeSpeech("opp","","God, you feel <i>amazing...</i> And it looks like you're having fun too. But let's try stepping things up...");
				}
				writeText("With that, oppF's hands go to your thighs as oppShe grins.");
				writeText("Before you can even ask, oppShe grips you tightly and stand up suddenly.");
				writeText("Completely losing the stable ground of oppHer thighs, you can't help but grab on tightly to oppF's shoulders as finally slide all the way down.");
				writeText("Pleasure shoots through your entire body, your legs going around oppHer back as you feel it.");
				if(data.player.pref == "sub" || data.player.dick < 4){
					writeText("Your ass rapidly squeezes down on oppHer cock as your dick spasms uncontrollably, a soft moan spilling out as you shoot your load onto oppHer stomach.");
					writeSpeech("opp","","Holy shit, did you just...?");
					writeText("The pause only lasts for a second, though, before oppShe pulls you even tighter to oppHer body.");
					writeSpeech("opp","","Seeing that, there's no way I can hold back...!");
				}
				else{
					writeText("OppShe bottoms out completely, oppHer balls slapping against your ass once before oppShe pauses, giving you a chance to accomodate the fat cock stretching you out.");
					writeSpeech("opp","","F-Fuck, your ass is <i>tight</i>... I can't...!");
					writeText("OppShe pulls you tighter against oppHer, dragging oppHer cock only an inch out before thrusting back in, sawing into you gently for a few thrusts, before pulling out further with every movement.");
				}
				writeText("After a few more seconds, you're doing your best to just hold on tight while oppShe pounds into your ass, the pleasure searing through your entire body as oppHer hands support you by your ass.");
				writeText("OppHer nails just barely dig into your skin as oppShe bounces you up and down on oppHer cock, using oppHer hips to pound into you hard enough that you end up going from just the tip to balls-deep every second.");
				if(data.player.pref == "sub" || data.player.dick < 4){
					writeSpeech("player","","A-Again...! <i>I'm cumming again~!</i>");
				}
				else{
					writeText("The feeling of your cock sliding against oppHer stomach mixed with the brutal ass-fucking is causing you to hit the edge, your legs around oppHer back as you groan,");
					writeSpeech("player","","I'm gonna cum...!");
				}
				writeSpeech("opp","","I can't hold out either...!");
				writeText("You feel oppHer fingers dig in even tighter, oppHer hips somehow going even faster as you feel oppHer bring oppHer mouth to your neck.");
				writeSpeech("opp","","I'm...!");
				writeText("She can't even finish the phrase before the white-hot load spurts inside of you, oppHer stomach rapidly tensing against your cock and pushing you over.");
				if(data.player.pref == "sub" || data.player.dick < 4)
					writeText("A smaller, thinner load joins the globs from your last orgasm, but they quickly flow back down onto your own dick, dribbling down to your balls.");
				else
					writeText("You spurt a thick load onto oppHer stomach, painting it white before oppShe pulls you even tighter and you can feel it smear across your own body.");
				writeText("It takes a second for the two of you to collect yourselves, oppHer cock softening a bit before she gently lifts you off of it.");
				writeText("Some of oppHer cum dribbles out of your gaping hole, futilely trying to squeeze itself tight as it drips onto oppHer thighs.");
				writeSpeech("opp","","You were incredible...");
				writeSpeech("player","","Th-Thanks... You too...");
				writeText("You two have to rest for a little while longer, but once you're ready, you can return to the game.");
			}
			if(data.player.flags.includes("golemRej") == true && data.player.flags.includes("remGolemPun") != true){
				writeText("You move to straddle oppF, but very quickly realize the size difference could make things a bit... troublesome.");
				writeSpeech("player","","Er, how should we-?");
				writeSpeech("opp","","Here, lean back on the couch...");
				writeText("oppF guides you into position, standing between your legs with a grin...");
				writeText("...before grabbing onto those legs and lifting.");
				writeText("This new body is clearly more flexible than you expected, as oppF can push your ankles to the back of the couch as oppHer girthy cock flops down on top of yours.");
				if(data.player.genitalsVal == 6){
					writeText("OppShe grins and shifts oppHer hips, slapping oppHer own shaft across your fat horsecock.");
					writeSpeech("opp","","Such a huge fucktoy, all ready to just flop around while I fuck you... At least it's good for telling me how much you're <i>loving this.</i>");
				}
				else if(data.player.genitalsVal == 7){
					writeText("OppShe grins, oppHer shaft rubbing along your knot and getting you to moan from the warmth. ");
					writeSpeech("opp","","Such a <i>fat</i> knot, and all you're using it for is to show me just how much you love getting fucked like a <i>bitch...</i> I'd say it's a shame, if it weren't such a <i><b>turn-on.</b></i>");
				}
				else if(data.player.genitalsVal == 8 || data.player.genitalsVal == 9){
					writeText("OppShe shifts oppHer hips, oppHer head rubbing up against your longer, thicker shaft");
					writeSpeech("opp","","You have a nice, fat <i>bitch-breaker</i> like that, and you're the one getting <i>fucked...</i> You really do know how to make someone feel wanted~!");
				}
				else{
					writeText("OppShe smirks as your cockhead smears your precum across your lower abdomen, your skin feeling slick as oppShe rubs against you.");
					writeSpeech("opp","","God, you look <i>amazing...</i> And it looks like you're having fun too. But let's try stepping things up...");
				}
				writeText("Bringing both of your ankles up and holding them with one of oppHer hands, the other glides down your thigh and spreads your ass, oppHer thumb pressing gently against your hole.");
				writeSpeech("opp","","When someone <i>this much bigger</i> is underneath me...");
				writeText("You feel oppHer cockhead press into you, the warmth of oppHer precum smearing around.");
				writeSpeech("opp","","...I just don't know <i>how to hold back~!</i>");
				writeSpeech("player","","<font size='+2'><i><b>AAHN~!</b></i></font>");
				writeText("Held underneath oppHer, you can feel oppHer cock push inch after inch in, stretching you out as oppShe leans into you, biting oppHer lip.");
				writeSpeech("opp","","For someone so big, you're <i>so fucking tight...!</i>");
				writeText("Only halfway in, oppShe moans as oppShe grinds to a stop, looking into your eyes with a flushed grin.");
				writeSpeech("opp","","Looks like I'll have to get you used to me~!");
				writeText("You try to speak but can't, the game amping your sensitivity too high to think straight as oppF starts sawing into you, oppHer cock scraping against your prostate with every subtle shift.");
				writeText("Within seconds, you're practically dripping precum onto your stomach as each thrust takes oppHer just a bit deeper inside of you.");
				writeText("OppHer other hand moves away from your ass to grab onto your leg again, oppHer breathing heavy from arousal as oppShe starts pulling out more and mroe with each thrust.");
				writeText("After just a few seconds, oppShe's getting almost oppHer whole length in with each measured thrust, before suddenly...");
				writeText("OppShe stops, just oppHer cockhead inside, your body feeling unbelievably empty now.");
				writeSpeech("player","","F-Fuck... Is something wro-");
				writeText("-and she bucks forward, grinning as your words turn into a sharp moan.");
				writeSpeech("opp","","God, I love that...!");
				writeText("You start squirming in place, oppHer hips practically slamming into yours now as oppShe picks up speed, finally bottoming out as oppHer balls slap rythmically against your ass.");
				writeText("Pinning your ankles completely behind your head, oppShe grins.");
				writeSpeech("opp","","Hold these for me.");
				writeText("As oppShe lets go, your legs end up held back by your arms as you use your hands to press down against your thighs.");
				writeText("OppHer hands go to your waist, now putting more strength behind every thrust while still <i>pounding</i> your prostate.");
				writeText("Pleasure shoots through your entire body, your entire body tensing sharply as you feel it.");
				if(data.player.pref == "sub" || data.player.dick < 4){
					writeText("Your ass rapidly squeezes down on oppHer cock as your dick spasms uncontrollably, a soft moan spilling out as you shoot your load onto your own stomach.");
					writeSpeech("opp","","Holy shit, did you just...?");
					writeText("The pause only lasts for a second, though, before oppShe grasps your hips even tighter.");
					writeSpeech("opp","","Seeing that, there's no way I can hold back...!");
					writeText("Just seconds later, a wordless shout spills out of oppF's mouth as oppShe slams as deep inside as oppShe can go.");
				}
				else{
					writeText("Coils of pleasure shoot through your body, holding you on the edge as your cock bounces around, oppHer balls slapping against your ass as you feel your orgasm just barely out of reach.");
					writeSpeech("opp","","F-Fuck, your ass is <i>tight</i>... I'm about to...!");
					writeText("OppShe pulls you tighter against oppHer, oppHer balls tensing up as oppShe goes even faster as you feel oppHer stomach start sliding against your shaft and finally push you over.");
				}
				writeText("You feel white-hot jets of cum blast into your ass, your own cock spurting more and more across your stomach as the both of you finish climaxing together.");
				writeText("It takes a second for the two of you to collect yourselves, oppHer cock softening a bit before she slowly draws it out of you.");
				writeText("Some of oppHer cum dribbles out of your gaping hole, futilely trying to squeeze itself tight as it drips onto oppHer thighs.");
				writeSpeech("opp","","You were incredible...");
				writeSpeech("player","","Th-Thanks... You too...");
				writeText("You two have to rest for a little while longer, but once you're ready, you can return to the game.");
			}
			else{
				writeText("You move smoothly over to where oppShe's sitting, kneeling onto the couch above oppHer cock.");
				writeText("OppHer hands move to grab onto your ass, squeezing it tightly as oppShe grins.");
				writeSpeech("opp","","God, you look incredible right now...");
				writeText("OppHer smile widens sharply as you feel oppHer hands move to your hips.");
				writeSpeech("opp","","But I bet you <i>feel</i> even better.");
				if(data.player.pref == "dom"){
					writeText("You roll your eyes a bit and grin down teasingly.");
					writeSpeech("player","","Let's test that out, shall we?");
					writeText("You bob down, your hole pressing against oppHer cockhead as you roll your hips around, smearing oppHer precum across your ass.");
					writeText("And then, you lower your hips even further, relishing in the low groan that comes out of oppF's mouth as oppHer head <i>pops</i> into your tight ass.");
				}
				else{
					writeText("OppShe rolls her hips forward, oppHer cockhead smearing around oppHer precum across your ass as the pleasure sends jolts up your spine.");
					writeSpeech("player","","W-Well, why not test that out?");
					writeText("Supporting yourself with your hands on oppHer chest, you bob down, your hole pressing against oppHer cockhead again but, this time, not sliding around.");
					writeText("You both moan as oppHer dick spreads you open, oppF's hands tightening around your hips for a second.");
				}
				writeText("OppHer hands shift against you, twisting you around a bit to find an easier and deeper fit, even as you bob up and down on oppHer cock.");
				writeSpeech("player","","You're splitting me apart...!");
				writeSpeech("opp","","Try saying that after the next few inches.");
				writeText("Angling it just right, oppF pulls you down enough to slide further inside, oppHer head scraping against your prostate as you fail to even gasp properly, your body falling forward as you keep try ingto support yourself with your hands on oppHer chest.");
				if(data.story[0].sex == "H"){
					writeSpeech("opp","","If you need some handles to hold onto, I've got a nice pair right here~");
					writeText("Moving oppHer chest closer to you, you can feel a bit of oppHer cock slide out as she shifts. As you grab oppHer tits, though, she <i>bucks</i> forward.");
				}
				else{
					writeSpeech("opp","","You're making this ride look <i>real</i> fun, y'know...");
					writeText("Shifting forward, you can feel a bit of his cock slide out for a moment, before one of his hands goes to the small of your back and he <i>bucks</i> forward.");
				}
				writeText("You squeal as oppShe hits your prostate again, your cock dribbling precum down from the tip as oppF <i>fucks</i> it out of you.");
				if(data.player.genitalsVal == 6){
					writeText("OppShe moans sharply at the sight of your fat horsecock and the feeling of it dragging across oppHer chest and spreading the slick fluid.");
					writeSpeech("opp","","Such a huge fucktoy on such a <i>tiny little body</i>... At least it's good for telling me how much you're <i>loving this.</i>");
				}
				else if(data.player.genitalsVal == 7){
					writeText("OppShe moans sharply as your knot slides against oppHer abdomen, the tip drooping low enough to smear your fluids wildly.");
					writeSpeech("opp","","Such a <i>fat</i> knot, and all you're using it for is to show me just how much you love getting fucked like a <i>bitch...</i> I'd say it's a shame, if it weren't such a <i><b>turn-on.</b></i>");
				}
				else if(data.player.genitalsVal == 8 || data.player.genitalsVal == 9){
					writeText("OppShe moans sharply as your cockhead smears your fluid across oppHer abdomen, the fat slab of cockmeat almost reaching oppHer chest.");
					writeSpeech("opp","","You have a nice, fat <i>bitch-breaker</i> like that, and you're riding <i>me...</i> You really do know how to make someone feel wanted~!");
				}
				else{
					writeText("OppShe moans as your cockhead smears your fluid across oppHer lower abdomen, oppHer skin feeling slick and sweet as you grind against it.");
					writeSpeech("opp","","God, you feel <i>amazing...</i> And it looks like you're having fun too. But let's try stepping things up...");
				}
				writeText("With that, oppF's hands go to your thighs as oppShe grins.");
				writeText("OppShe raises her hips while pulling you down, the sensation of her and gravity pushing oppHer cock as deep as it can go making your insides feel incredibly warm.");
				writeSpeech("opp","","Let's see how well you can handle this...!");
				writeText("Quickly bouncing you up and down with oppHer thrusts, the loud clap of oppHer hips against your ass rings out as oppShe practically <i>slams</i> into your prostate with every thrust, the dribbling precum practically shooting across oppHer chest.");
				writeText("Then, rising up like the tide inside of you, pleasure shoots through your entire body as you tense up, feeling something coming.");
				if(data.player.pref == "sub" || data.player.dick < 4){
					writeText("Your ass rapidly squeezes down on oppHer cock as your dick spasms uncontrollably, a soft moan spilling out as you shoot your load onto oppHer stomach.");
					writeSpeech("opp","","Holy shit, did you just...?");
					writeText("The pause only lasts for a second, though, before oppShe pulls you even tighter to oppHer body.");
					writeSpeech("opp","","Seeing that, there's no way I can hold back...!");
				}
				else{
					writeText("Coils of pleasure shoot through your body, holding you on the edge as your cock bounces around, oppHer balls slapping against your ass as you feel your orgasm just barely out of reach.");
					writeSpeech("opp","","F-Fuck, your ass is <i>tight</i>... I'm about to...!");
					writeText("OppShe pulls you tighter against oppHer, oppHer balls tensing up as oppShe goes even faster as you feel oppHer stomach start sliding against your shaft and finally push you over.");
				}
				writeText("You feel white-hot jets of cum blast into your ass, your own cock spurting more and more across your stomach as the both of you finish climaxing together.");
				writeText("It takes a second for the two of you to collect yourselves, oppHer cock softening a bit before she slowly draws it out of you.");
				writeText("Some of oppHer cum dribbles out of your gaping hole, futilely trying to squeeze itself tight as it drips onto oppHer thighs.");
				writeSpeech("opp","","You were incredible...");
				writeSpeech("player","","Th-Thanks... You too...");
				writeText("You two have to rest for a little while longer, but once you're ready, you can return to the game.");
			}
			writeTransition("postRound1", "Go back");
			break;
		}
		case "oppChatSexHJ" : {
			break;
		}
		case "oppChatSexFemKnot" : {
			break;
		}
		case "oppChatSexAnalKnot" : {
			break;
		}
		case "oppChatSexTail" : {
			break;
		}
		case "oppChatSexTitjob" : {
			break;
		}
		case "oppChatSexGiveTitjob" : {
			break;
		}
		default: {
			writeText("Something went wrong, and you've encountered a bug. Keep in mind where you just where and what you did, and let me know so I can fix it.");
			writeText("Here's a list of important details. If you message me directly with these jams, I should have a better idea of what caused the problem:");
			writeText("Tried to access:" + tempScene + "");
			writeText("" + JSON.stringify(data) + "");
			writeText("Browser:" + navigator.appCodeName  + "");
			writeText("OS:" + navigator.platform  + "");
			writeTransition("postRound1", "Go back");
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
							writeFunction("writeEvent('braceletHome3')", data.story[0].fName + "'s girlfriend is coming over, use the bracelet on oppHer");
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