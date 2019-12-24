function writeScene(scene) {
	console.log("Now writing scene ID " + scene + ", the time is " + data.player.time);
	switch(scene) {
		//System Locations
		case "start" : {
			writeText("<i><b>Dare(d) to Change</i></b> is a text-based adult game written by Cryptogreek/CaptainCryptogreek, built in NoodleJacuzzi's custom engine with his permission. Given that I'm not a fan of Twine, I'm thankful that he let me <s>steal</s> use his engine. If you haven't checked out his content, you can keep up with it all at his <a href='https://noodlejacuzzi.github.io/index.html'>master index by clicking here.</a>");
			writeText("This game does contain what some people would consider <i>bizarre</i> fetishes, so here's a content warning:");
			writeText("<font size+='2'>This game contains themes of <i><b>physical transformation</b> (including manifestation of some animal features, body-swapping, sex-changing, and growth/shrinking of genitalia)</i> and <i><b>mental transformation</b> (induced heat/rut, sissification, subservience, and brain-drain). </i>If you find this content objectionable, you probably won't have a fun time playing this.</font>");

			writeText("With that in mind, you can scroll further down for a bit more information on the game, or you can jump right into by pressing the button below!");
			writeTransition("prologue", "Start the game");
			writeTransition("test", "Test the game");
			//writeTransition("prologueSkip", "Skip the prologue");
			writeText("Other notes:");
			writeText("This game was made for the <a href='https://tfgames.site/phpbb3/viewtopic.php?f=12&t=12799'>Game-Night Contest on TFGames.</a>");
			writeText("You can open a character's description by clicking on their icon - do this often to see a lot of the changes that occur, both of the person and how you view them in the game.");
			writeText("My Discord is corenkeitaro#7169. If you see anything that needs fixing in the game, you can message me there or email me at cryptogreekcaptions@gmail.com.");
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
			writeTransition("golemAccBack", "Show Humility to the Golems (give opponent back massage)");
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
			data.story[0].met = true;
			writeText("Nearly every Saturday, you have Game Night. It's a simple, easy way to relax and quit worrying about whatever looming deadline threatens your mental well-being <i>this</i> week. Last time, you chose the game and, as usual, Meg called a few of her friends to join.");
			writeText("Given that you two switch out between who chooses the next game, that makes it Meg's turn, and she hasn't hesitated about hyping up the game that she found. And since whoever <i>doesn't</i> choose the game hosts, you're finishing up with the prep-work.");
			writeText("Most people would probably just laugh off the idea of a board game that advertised itself as 'transforming your mind and body' over the course playing it, but those people clearly didn't watch Jumanji enough times.");
			writeText("According to Meg, she bought it at a junk-shop that she swears wasn't on Google Maps, run by a <i>'hilariously big-tittied lady that spoke exclusively in ominous riddles'.</i> Given that the title apparently has the word <i>Dare</i> in the title, you doubt this game will stay all-ages for very long.");
			writeText("With the last of the snacks set up, you check your phone while waiting for Meg. She said she'd bring the game over, refusing to send any pictures of the box, and promised to bring over a friend, since it's a three-player game.");
			writeText("In the meantime, you should probably think about how you'll introduce yourself to the person she's bringing over...");
			writeTransition("prologueName", "Continue");
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
			writeText("With that out of the way, everything should be fine. Drinks, snacks, clear and open space on the carpet, etc...");
			writeSpeech("player","","Alright, that's basically everything. Nothing left to do but wait...");
			writeText("You throw yourself onto a nearby beanbag, relishing the feeling as you pull out your phone.");
			writeText("You don't actually end up <i>waiting</i> for her, though, with a hefty <font size='+1' color='white'><i><b>SLAM</b></i></font> coming from the front door.");
			writeText("Sounds like she might've knocked by kicking the door.");
			writeText("Again.");
			writeTransition("prologueSub", "Rush to the door. It's probably better to not keep her waiting...");
			writeTransition("prologueDom", "Make her wait a bit. Kicking your door was rather rude.");
			break;
		}
		case "prologueSub": {
			if(data.player.will > 0)
				data.player.will -= 1;
			data.story[0].met = true;
			writeText("You move quickly, hoping to prevent her from kicking it a second time, and swiftly open the door.");
			writeText("You can see Meg standing there, smugly grinning to the guy beside her.");
			writeSpeech("meg","","See? A quick kick got him here way faster.");
			writeText("She turns to look at you, her arms holding onto what you assume is the game box. It's not the largest, but it helps highlight certain... assets.");
			writeText("You can't read the full name, obscured as it is by her chest as she moves past you.");
			writeText("She's wearing a shorter, tighter skirt this time, highlighting her black stockings. And you could swear she skipped out on the bra...");
			writeSpeech("player","","You probably shouldn't kick the door, though...?");
			writeSpeech("meg","","Ah, it's fine! You ready for Game Night? I brought a friend!");
			writeText("Looking back to the new guy, you have to pivot your head up a bit. He's a pretty tall guy.");
			writeText("Short-cut blond hair, a bit of scruff - he kinda makes you think of a background actor, in a weird way.");
			writeText("He smiles wide, offering you his hand.");
			writeSpeech("dale","","It's Dale. Nice to meet you - Meg says you're pretty good at games.");
			writeText("You shake his hand.");
			writeSpeech("player","","Not to brag, but I'd probably agree. Make yourself at home.");
			writeText("You shut the door behind him, the tell-tale <font color='white'><i>Floomf</i></font> sound telling you that Megan just sniped your seat.");
			writeText("Given that you set out three of them already, though, it's not like it matters too much.");
			writeText("You and Dale sit down, Megan crossing her legs as she leans back.");
			writeSpeech("meg","","So, Mr. Host - you wanna jump right into the game, or should we shoot the shit for a bit?");
			writeTransition("gameStart", "It <i>is</i> Game Night. Open it up and get started.");
			writeTransition("prologue3", "Chat with the players before getting into the game.");
			break;
		}
		case "prologueDom": {
			if(data.player.will < 10)
				data.player.will += 1;
			data.story[0].met = true;
			writeText("You relax a bit more on the beanbag, checking your notifications for a few seconds.");
			writeText("You've just finished checking your email when you hear a far more restrained knock on the door.");
			writeText("<i>Now</i> you head over, opening it up with a smile.");
			writeText("In front of you is guy a bit taller than you - blond hair, little bit scruffy. He gives you a small smile.");
			writeSpeech("dale","","Sorry about that - I'm Dale. Meg said kicking it was normal, so...");
			writeSpeech("player","","No problem. Unfortunately, it <i>is</i> normal.");
			writeText("You step aside, gesturing for him to come in.");
			writeSpeech("meg","","Ugh... Totally thought that'd make you rush over.");
			writeSpeech("player","","If you really needed to get in, you wouldn't have stopped at one kick.");
			writeSpeech("meg","","Eh, fair point.");
			writeText("She strides inside, her brown hair bouncing about as she almost skips towards the main living-space.");
			writeText("Looks like she's carrying the game box. It's not the largest, but the way she's carrying it helps to highlight certain... assets.");
			writeText("You can't read the full name, obscured as it is by her chest as she moves past you.");
			writeText("She's wearing a shorter, tighter skirt this time, and you could swear she skipped out on the bra...");
			writeSpeech("dale","","Ah, right.");
			writeText("Dale turns to you, smiling as he offers his hand.");
			writeSpeech("dale","","Forgot to say, but thanks for having me. Meg said you're pretty good at these kinds of games, so I'm looking forward to it.");
			writeText("You shake his hand, smiling back.");
			writeSpeech("player","","Glad to have you. Not sure <i>what</i> kind of game she brought this time, but with her, half the fun is figuring it out.");
			writeSpeech("meg","","You're making it sound like I'm always bringing weird things over...");
			writeSpeech("player","","Where did you get that game again?");
			writeText("She flushes slightly, scoffing.");
			writeSpeech("meg","","Looks like <i>someone's</i> feeling extra confident today. You looking to skip past the chat and get right to the game?");
			writeTransition("gameStart", "It <i>is</i> Game Night. Open it up and get started.");
			writeTransition("prologue3", "Shoot the shit for a little bit - Game Night is about the players, too.");
			break;
		}
		case "prologue3": {
			writeSpeech("player","","We've got all night, and it's not like Dale and I have met.");
			writeSpeech("dale","","Yeah. The only thing I really know is your name, and that this's a weekly thing.");
			writeSpeech("meg","","Eh, alright. We'll go round-circle, then. Let's go with full name, three facts about ourselves, and...");
			writeText("She pauses to think.");
			writeSpeech("meg","","...how seriously we're taking this whole 'transformation game' thing. Since I know both of you already, I might as well start.");
			writeSpeech("dale","","Actually... Why not make it two statements and a question? That'd be a bit more fun.");
			writeText("Meg thinks for a moment before nodding.");
			writeSpeech("meg","","Good point. I'd probably just say my favorite game and pull a blank on the rest...");
			writeSpeech("dale","","Alright, then let's start with you, to set a solid example.");
			writeText("Her eyes roll over the both of you, before saying dryly,");
			writeSpeech("meg","","Sure. Megan Howzer, and welcome to my AMA. For my two facts... Let's see.");
			writeText("Her hand toys with her chin for a moment.");
			writeSpeech("meg","","My favorite animals are probably ferrets or foxes, though I have a pretty serious soft-spot for those extra-fluffy dogs. And... My favorite game is Monopoly, <i>especially</i> with people who take it as seriously as me.");
			writeSpeech("player","","You know, we'd play more Monopoly on Game Night if you'd stop homebrewing rules about compound interest, loans, and deferred payments.");
			writeSpeech("meg","","Hah. I'd sooner sell my soul than play <i>commoner's Monopoly</i>.");
			writeText("She pouts a bit.");
			writeSpeech("meg","","I guess it's question time, now?");
			writeText("Dale looks at you for a moment.");
			writeTransition("prologueQ1", "Ask how she and Dale know each other.");
			writeTransition("prologueQ2", "Ask where she's most <i>sensitive.</i>");
			writeTransition("prologueQ3", "Let Dale ask the question.");
			break;
		}
		case "gameStart" : {
			break;
		}
		case "prologueQ1" : {
			data.story[1].desc = "Meg's coworker at the coffee shop. Meg said they spend their breaks complaining about customers.";
			writeSpeech("player","","How do you two know each other?");
			writeSpeech("meg","","Work!");
			writeText("Megan sits up straighter, (probably) pushing her tits out inadvertantly.");
			writeSpeech("dale","","Yeah. We work at the same coffee place, so we got to talking.");
			writeSpeech("meg","","A couple of conversations on break turned into a habit of bitching at each other and last week we talked about games.");
			writeSpeech("dale","","Yup. Not exactly the most interesting story, honestly.");
			writeText("He shifts slightly after saying that.");
			writeSpeech("meg","","Yeah. We usually just spent time talking about some of the customers.");
			writeText("Megan sits up a bit straighter.");
			writeSpeech("meg","","And with that said, time for my final question... How seriously I'm taking the idea of a game that can change your body!");
			writeText("She nods firmly.");
			writeSpeech("meg","","I think that big-tittied riddle lady scammed me out of eighty bucks! Kinda hope it is real but, much like when offering a loan in Monopoly, it's best to keep things realistic.");
			writeSpeech("meg","","Now, let's go with Dale next!");
			writeScene("prologueQDale");
			break;
		}
		case "prologueQ2" : {
			data.player.will += 1;
			data.player.flags += "feet";
			writeSpeech("player","","Where would you say you're the most... <i>sensitive?</i>");
			writeText("You see Dale's eyebrows climb a bit.");
			writeSpeech("meg","","Good question! And considering what I have planned for the game, probably the tamest one tonight!");
			writeText("Grinning, she extends her stocking-clad legs out, pointing her toes.");
			writeSpeech("meg","","Being a barista, I'm always on my feet, which makes everything from the thighs down <i>crazy</i> tender.");
			writeSpeech("dale","","Huh. You two are pretty open, aren't you?");
			writeSpeech("player","","A bit, but it's part of Game Night. The whole point is being open about things.");
			writeSpeech("meg","","True true~! I remember last summer, during that heat wave, we had to strip down in the middle of Risk!");
			writeText("Dale relaxes a bit.");
			writeSpeech("meg","","And with that said, time for my final question... How seriously I'm taking the idea of a game that can change your body!");
			writeText("She nods firmly.");
			writeSpeech("meg","","I think that big-tittied riddle lady scammed me out of eighty bucks! Kinda hope it is real but, much like when offering a loan in Monopoly, it's best to keep things realistic.");
			writeSpeech("meg","","Now, let's go with Dale next!");
			writeScene("prologueQDale");
			break;
		}
		case "prologueQ3" : {
			if(data.player.will > 5)
				writeText("You stay quiet, letting Dale speak.");
			else
				writeText("You stay quiet, looking at Dale.");
			writeSpeech("dale","","Hm... Alright. I've been wondering for a while, but are you actually wearing a bra?");
			writeText("There's a moment of silence...");
			writeSpeech("meg","","Ha. Nah, man!");
			writeText("She shifts on the beanbag, repositioning her tits.");
			writeSpeech("meg","","The point of Game Night is to be comfortable and open. Hell, we played Risk without any pants during a heat wave last summer.");
			writeSpeech("dale","","...Noted.");
			writeSpeech("meg","","Good question, though! Given the game we're playing, it'll probably be the tamest one of the night!");
			writeText("Speaking of, it looks like she snuck the box behind her beanbag.");
			writeSpeech("meg","","And with that said, time for my final question... How seriously I'm taking the idea of a game that can change your body!");
			writeText("She nods firmly.");
			writeSpeech("meg","","I think that big-tittied riddle lady scammed me out of eighty bucks! Kinda hope it is real but, much like when offering a loan in Monopoly, it's best to keep things realistic.");
			writeSpeech("meg","","Now, let's go with Dale next!");
			writeScene("prologueQDale");
			break;
		}
		case "prologueQDale" : {
			writeSpeech("dale","","Me, huh? Alright.");
			writeText("He crosses his arms, looking up at the ceiling as he hums in thought.");
			if(data.story[1].desc == "Meg's coworker at the coffee shop. Meg said they spend their breaks complaining about customers."){
				writeSpeech("dale","","You already know I work with Meg, so that's out... I guess my favorite game is Blackjack? It's the only card game I played much of.");
			}
			else{
				data.story[1].desc = "Meg's coworker at the coffee shop. Meg said they spend their breaks complaining about customers.";
				writeSpeech("dale","","Fact number one is that Meg and I work together at the coffee shop. We started getting along while complaining about one particularly annoying customer, and last week, we started talking about board games.");
				writeSpeech("meg","","Yup! We ended up talking about Game Night, and <i>boom</i>, here we are!");
			}
			writeSpeech("dale","","And for a second fact... I dunno. I guess just ask two questions?");
			writeText("Meg starts grinning widely, looking right at you with what you can only describe as a lewd twinkle in her eye. It wouldn't take a genius to realize where she's about to take this...");
			writeSpeech("meg","","You take the first one, playerF - I've got second~!");
			writeTransition("prologueQDale1", "Ask what convinced him to actually join for Game Night.");
			writeTransition("prologueQDale2", "Ask if he's a top or a bottom.");
			writeTransition("prologueQDale3", "Ask about his dick size before Megan does.");
			break;
		}
		case "prologueQDale1" : {
			writeSpeech("player","","What convinced you to come and join Game Night? Just boredom or something?");
			writeSpeech("dale","","Something like that, yeah. Feels like I'm kinda stuck in a rut nowadays, doing the same thing every day. When Megan suggested coming over and playing some raunchy dare-game she found, I thought, \"Hey, why not?\"");
			writeSpeech("player","","Well, I can promise that with Megan involved, it won't be boring, at least.");
			writeText("She pouts at that, placing her hands on her hips.");
			writeSpeech("meg","","I'm not sure I like those implications, friend-o! Still, I wasn't expecting a serious question, so lemme balance things out!");
			writeText("Her body pitches forward, nearly falling off her chair as bounces forward.");
			break;
		}
		case "prologueQDale2" : {
			writeSpeech("player","","Are you more of a top, or a bottom?");
			writeText("He pauses for just a second, before smirking.");
			writeSpeech("dale","","Top, through and through. If you want to trip me up, you'll need to try harder.");
			writeText("You hear Megan barely stifle a laugh.");
			writeSpeech("meg","","Try harder, huh? Well, give me a shot, then!");
			break;
		}
		case "prologueQDale3" : {
			writeSpeech("player","","Dick size, go.");
			writeText("He pauses, blinking once. Then twice.");
			writeText("Megan exhales sharply out of her nose, pouting again.");
			writeSpeech("meg","","Ah, man! I wanted to be the one to-");
			writeSpeech("dale","","Seven and a half long, five around. How 'bout you?");
			writeText("He leans back, the sound of the beanbag shifting filling the air. His eyes lock onto yours, looking amused.");
			if(data.player.dick < 8){
				writeTransition("prologueQDale3A", "Lie and say you're eight inches.");
				writeTransition("prologueQDale3B", "Tell him you don't quite match up.");
			}
			else{
				writeTransition("prologueQDale3C", "Tell him your actual length.");
				writeTransition("prologueQDale3D", "Spare his feelings and lie.");
			}
			writeTransition("prologueQDale3E", "\"Is that your one question for me?\"");
			break;
		}
		case "prologueQDale3A" : {
			data.story.flags.introLieShort = true;
			writeSpeech("player","","I'm eight inches. That's pretty close.");
			writeText("Dale scoffs, a small smirk on his face.");
			writeSpeech("dale","","Right. I'll take your word for it.");
			writeScene("prologueQDale3E1");
			break;
		}
		case "prologueQDale3B" : {
			writeSpeech("player","","Huh. That's pretty neat - longer than I am, at least.");
			writeText("He chuckles.");
			writeSpeech("dale","","Yeah, that's usually the case.");
			writeScene("prologueQDale3E1");
			break;
		}
		case "prologueQDale3C" : {
			if(data.player.dick == 8)
				writeSpeech("player","","Eight inches. It's close, though.");
			else if(data.player.dick == 9)
				writeSpeech("player","","Nine inches. It's pretty good for what it is.");
			else if(data.player.dick == 10)
				writeSpeech("player","","Ten inches. If anything, it gets in the way.");
			else if(data.player.dick == 11)
				writeSpeech("player","","Eleven inches. It, uh... It's actually more of a problem than you'd think.");
			else if(data.player.dick == 12)
				writeSpeech("player","","It's a foot long. It, uh... It's actually more of a problem than you'd think.");
			writeText("Dale scoffs, a small smirk on his face.");
			writeSpeech("dale","","Right. I'll take your word for it.");
			writeScene("prologueQDale3E1");
			break;
		}
		case "prologueQDale3D" : {
			data.story.flags.introLieLong = true;
			writeSpeech("player","","Huh. Longer than me, at least.");
			writeText("He chuckles.");
			writeSpeech("dale","","Yeah, that's usually the case.");
			writeScene("prologueQDale3E1");
			break;
		}
		case "prologueQDale3E" : {
			writeSpeech("player","","Is that your one question for me?");
			writeText("He laughs.");
			writeSpeech("dale","","Nah, it's fine. Megan'll probably have a better question anyway.");
			writeScene("prologueQDale3E1");
			break;
		}
		case "prologueQDale3E1" : {
			writeText("Meg shifts a bit, nodding.");
			writeSpeech("meg","","Well, first time witnessing an <i>actual</i> dick-measuring contest... and I love it. But we've still got one more question! I *was* gonna ask if you ever did butt-stuff, but <i>someone</i> beat me to the embarrasing-question-punch.");

			writeText("<input type='radio' name='gender' value='male'> Male</input>");


			break;
		}
		case "prologueQDale4" : {
			writeText("Her body pitches forward, nearly falling off her chair as bounces forward.");
			writeSpeech("meg","","You ever done butt-stuff?");
			writeText("You expect Dale to get embarrassed, but...");
			writeSpeech("dale","","Once, but my ex wasn't a fan of it, and we couldn't get rough without thinking it might mess something up. How 'bout you?");
			writeSpeech("meg","","Nice try, but I already answered my question!");
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




















		//NEW SCENES FOR DARED TO CHANGE START HERE
		case "fairyKingStart" : {
			addFlag("fairy");
			writeText("After weighing your options for a moment, you decide to move your piece forward and place it firmly on the forested tile. After removing your hand, there's a faint <i>click</i> sound as a card pops out of the side of the game board.");
			writeText("The front is labeled with the name of the game, and turning it around-");
			writeSpeech("card","none.jpg","You received your first card~!");
			writeText("You jump sharply at the sound of a chipper feminine voice, oppF hiding a smile behind oppHer hand.");
			writeSpeech("card","none.jpg","Don't worry about reading the cards out loud - I can do that for ya!");
			writeText("oppF shifts in place, leaning back a bit more.");
			writeSpeech("opp","","Don't worry, I jumped the first time I heard it too. Just focus on the card, and it'll read the whole thing out for you.");
			writeSpeech("player","","Huh. Little weird, but alright.");
			writeText("You look back at the card, a faint shimmer rolling across its surface.");
			writeSpeech("card","none.jpg","Any forest that houses the Fae can be a tricky place to get lost in, and there are no forests harder to navigate than those of the Fairy King. You get hopelessly lost, but rejoice! A friendly elf can lead you out of the forests, though oppShe seems rather curious about humans...");
			writeSpeech("card","none.jpg","Challenge: Let the other player toy with your tongue for as long as they want, even if you start drooling all over yourself!");
			writeText("oppF looks at you with a slightly raised eyebrow. You can accept the challenge and get a pair of tokens, or reject it and get just one along with some sort of punishment effect...");
			writeTransition("fairyAccEnthused", "Accept the challenge - enthusiastically open wide");
			writeTransition("fairyAccReluctant", "Accept the challenge - reluctantly open wide");
			if(data.player.fName == "Testing"){
				writeTransition("fairyRejSub", "Discard the card and take a punishment instead (Submissive)");
				writeTransition("fairyRejDom", "Discard the card and take a punishment instead (Dominant)");
				writeTransition("fairyRej", "Discard the card and take a punishment instead (Switch)");
			}
			else
				writeTransition("fairyRej", "Discard the card and take a punishment instead");
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
			writeText("Putting the card back, it quickly gets pulled back into the board... only for another to pop out in its place. Pullin that one out, you hear the card's voice:");
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
			writeSpeech("card","none.jpg","You received your first card~!");
			writeText("You jump sharply at the sound of a chipper feminine voice, oppF hiding a smile behind oppHer hand.");
			writeSpeech("card","none.jpg","Don't worry about reading the cards out loud - I can do that for ya!");
			writeText("oppF shifts in place, leaning back a bit more.");
			writeSpeech("opp","","Don't worry, I jumped the first time I heard it too. Just focus on the card, and it'll read the whole thing out for you.");
			writeSpeech("player","","Huh. Little weird, but alright.");
			writeText("You look back at the card, a faint shimmer rolling across its surface.");
			writeSpeech("card","none.jpg","The caverns created by the ancient golems are far-reaching and expansive, but they're also fiercely protected by their creators, the golems themselves. If you want to gain access, it's said that the golems will respect and help those who are willing to show great humility...");
			writeSpeech("card","none.jpg","Challenge: Give the opponent a foot or back massage. It's alright if you don't know how - it's the thought that counts!");
			writeText("oppF looks at you with a slightly raised eyebrow.");
			writeSpeech("opp","","You actually get a choice in how you do it, huh? That's actually pretty rare, but I guess it's 'cause it's the first round.");
			writeText("You can accept the challenge and get a pair of tokens, or reject it and get just one along with some sort of punishment effect...");
			writeTransition("golemAccFoot", "Accept the challenge and give your opponent a foot massage");
			writeTransition("golemAccBack", "Accept the challenge and give your opponent a back massage");
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
		case "golemAccBack" : {
			addFlag("AccBack");
			if(data.player.pref == "dom"){
				writeSpeech("player","","Let's get that shirt off of you - it'll end up getting in the way.");
				writeSpeech("opp","","Taking the lead, then? Well, can't say I mind too much.");
				if(data.story[0].sex == "M")
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and chest before oppShe turns oppHer back to you.");
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
				writeSpeech("player","","Well, it's not like it's the dirtiest thing we could be doing, so... I guess a back massage it is?");
				writeText("oppF smiles a bit, sitting up straighter as oppShe grabs the bottom of oppHer shirt.");
				writeSpeech("opp","","In that case, why don't we get right to it?");
				if(data.story[0].sex == "M")
					writeText("OppShe pulls oppHer shirt upwards slowly, giving you a nice little show as the fabric goes up past oppHer toned stomach and chest, before oppShe ultimately pulls it completely off and drops it beside oppHim.");





			}
			if(data.story[0].sex=="M"){
				if(data.player.pref == "dom"){
					writeSpeech("player","","Let's get that shirt off of you - it'll end up getting in the way.");
					writeSpeech("opp","","Taking the lead, then? Well, can't say I mind too much.");
					writeText("oppF smirks a bit as oppShe reaches down, pulling oppHer shirt over oppHer head. You end up getting a <i>really</i> good look at oppHer toned stomach and chest before oppShe turns oppHer back to you.");
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
			if(data.player.flags.includes("golemRej")!=true)
				addFlag("Rej");
			break;
		}























		case "gallery" : {
			generateGalleryNav();
			writeTransition("room", "Finish up");
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