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
			writeText("The following is a more in-depth listing of fetishes, for the people who want to know <i>exactly</i> what they're getting into:");
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
			writeText("oppF looks at you with a slightly raised eyebrow. You can accept the challenge and get a pair of tokens, or reject it and get just one along with some sort of punishment effect...");
			writeTransition("golemAccFoot", "Accept the challenge and give your opponent a foot massage");
			writeTransition("golemAccBack", "Accept the challenge and give your opponent a back massage");
			writeTransition("golemRej", "Discard the card and take a punishment instead");
			break;
		}
		case "golemAccFoot" : {
			addFlag("AccFoot");
			break;
		}
		case "golemAccBack" : {
			addFlag("AccBack");
			break;
		}
		case "golemRej" : {
			if(data.player.flags.includes("golemRej")!=true)
				addFlag("Rej");
			break;
		}






















		case "newDay": {
			if (data.player.currentScene != scene) {
				data.player.day += 1;
			}
			data.player.time = "Morning";
			updateMenu();
			checkDay();
			break;
		}
		case "laptop": {
			writeTransition("porn", "Look up porn");
			writeTransition("gallery", "View the gallery");
			writeTransition("home", "Finish up");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
				writeTransition("home", "Go back");
			}
			else {
				writePorn();
				writeTransition("laptop", "Go back");
			}
			break;
		}
		case "gallery" : {
			generateGalleryNav();
			writeTransition("room", "Finish up");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeTransition("room", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed(`scripts/gamefiles/characters/`+data.story[i].index+data.story[i].image+`.jpg`);
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeTransition("home", "Cancel and leave");
			break;
		}
		case "drive": {
			if (data.player.day > 1) {
				sceneTransition('work');
			}
			else {
				writeText("The car ride is silent and quick. The windows are kept blacked out to keep your identity hidden from the outside world.");
				writeText("Not only that, but you're completely cut off from the driver. It's a shame too, since some conversation might help pass the time.");
				writeTransition("work", "You've arrived");
			}
			break;
		}
		//Locations
		case "room": {
			if (data.player.time == "Morning") {
				writeBig("scripts/gamefiles/locations/morning.jpg");
			}
			else {
				writeBig("scripts/gamefiles/locations/room.jpg");
			}
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					writeText("You're feeling way too tired to do anything right now.");
					writeTransition("newDay", "Go to bed");
					break;
				}
				case 1: {
					if (data.player.time == "Morning") {
						writeText("A soft knocking on your door wakes you up.");
						writeSpeech("roommate", "", "Hey, your ride's here. Black SUV with scary sunglass people.");
						writeText("You stretch out, a good night of sleep did wonders for you.");
						writeSpeech("player", "", "Be right out!");
						writeText("Unfortunately you can't skip out on work. Working with artifacts is great, but the option to stay and chill at home would be nice some days.");
						writeTransition("home", "Get out of bed");
					}
					else {
						writeTransition("wardrobe", "Open the wardrobe");
						writeTransition("gallery", "Review your research notes");
						writeTransition("cheat", "Cheat");
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
					}
					break;
				}
				default: {
					if (data.player.time == "Morning") {
						if (data.player.day == 2) {
							writeSpecial("From now on, the drive to work, and dreamless nights will both be skipped.");
							writeText("The alarm is going off. Using the bracelet you could get out of it if you wanted.");
							writeText("Although if you decide to skip, your ride will leave without you.");
						}
						else {
							writeText("The alarm is going off.");
						}
						writeTransition("drive", "Get up and head to work.");
						writeFunction("nap()", "Sleep in till noon, skip work");
					}
					else {
						writeTransition("wardrobe", "Open the wardrobe");
						writeTransition("gallery", "Review your research notes");
						writeTransition("cheat", "Cheat");
						writeTransition("newDay", "Go to sleep");
						writeTransition("home", "Leave your room");
					}
					break;
				}
			}
			break;
		}
		case "home": {
			writeBig("scripts/gamefiles/locations/home.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					writeText("You're still feeling groggy from the amnestics, you should probably head to bed once you're ready to sleep it off.");
					writeFunction("writeEvent('prologue1')", "Talk to "+roommateF);
					writeFunction("writeEvent('prologue2')", "Call the office");
					writeTransition("room", "Go to your room");
					break;
				}
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("roommate", "", "Morning. Sleep well?");
							writeSpeech("player", "", "Like a drunk rock. Thanks for the food.");
							writeSpeech("roommate", "", "No problem. You should probably get going soon.");
							writeText("She's already packing her bags, not much more you can do right now aside from make yourself presentable and leaving.");
							writeTransition("drive", "Head to work");
							break;
						}
						case "Evening": {
							writeText("Your drive home goes without incident. You keep the bracelet hidden, allowing you to smuggle it home.");
							writeText("If what you've done is discovered, a fate worse than death potentially awaits you.");
							writeText("But the bracelet also lets you dodge consequences too, so what you do with it is up to you. The freedom in your hands is tempting, but what to do with it?");
							writeSpeech("roommate", "", "Oh, hey! You're home a little early.");
							writeText(data.story[0].fName + " tosses a lipstick container into her purse.");
							writeSpeech("roommate", "", "I was just about to take a shower and head out. I think we've got some leftovers in the fridge.");
							writeText("An opportunity presents itself, test the artifact even further and live life with no consequences.");
							writeFunction("writeEvent('braceletHome1')", "Use the bracelet on " + data.story[0].fName);
							writeFunction("nap()", "Let her go and take a nap");
							break;
						}
						case "Night": {
							writeText("It's dark out and every sane person around has gone to sleep. It'd be best to head to bed now.");
							writeTransition("room", "Head to your room");
							break;
						}
					}
					break;
				}
				default: {
					switch (data.player.time) {
						case "Morning": {
							writeTransition("room", "Head to your room");
							break;
						}
						case "Noon": {
							checkForEvents();
							writeTransition("room", "Head to your room");
							break;
						}
						case "Evening": {
							checkForEvents();
							writeTransition("room", "Head to your room");
							break;
						}
						case "Night": {
							writeTransition("room", "Head to your room");
							break;
						}
					}
					break;
				}
			}
			break;
		}
		case "work": {
			writeBig("scripts/gamefiles/locations/work.jpg");
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.day) {
				case 0: {
					break;
				}
				case 1: {
					switch (data.player.time) {
						case "Morning": {
							writeSpeech("assistant", "", "Hey boss! I've got the new artifact in testing room A. " + data.story[3].lName + " said to get on it right away.");
							writeArtifact("bracelet");
							break;
						}
						case "Noon": {
							writeFunction("writeEvent('prologueMemo')", data.story[2].lName+"'s Memo");
							writeArtifact("bracelet");
							writeArtifact("erotibox");
							writeTransition("vault", "Request a Dark Vault artifact");
							break;
						}
						case "Evening": {
							writeText("You tug at the artifact on your wrist, but the bracelet isn't budging.");
							writeSpeech("player", "", "Fuck.");
							writeText("This thing isn't coming off, period. It's getting a bit late, so you should probably head home.");
							writeTransition("home", "Head home");
							break;
						}
						case "Night": {
							writeTransition("home", "Head home");
							break;
						}
					}
					
					//writeArtifact("coin");
					break;
				}
				default: {
					switch (data.player.time) {
						case "Morning": {
							checkForEvents();
							writeFunction("nap()", "Waste time");
							break;
						}
						case "Noon": {
							checkForEvents();
							writeTransition("home", "Go home early");
							break;
						}
						case "Evening": {
							checkForEvents();
							writeTransition("home", "Go home early");
							break;
						}
						case "Night": {
							writeTransition("home", "Head home");
							break;
						}
					}
					break;
				}
			}
			break;
		}
		case "newtown": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 50%; left: 40%; max-width: 30%;">Anomaly Vault</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('studio')" style="top: 40%; left: 20%; max-width: 30%;">Gym</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('home')" style="top: 50%; left: 70%; max-width: 30%;">Go Home</div>
					`;
				}
			}
			break;
		}
		case "newhome": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%;
						">Your Room</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 20%; left: 55%;
						">Your Room</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 75%; left: 75%; max-width: 30%;">Leave</div>
					`;
					writeTab('roommate', "roommateF's room");
					writeTab('girlfriend', "girlfriendF is on the couch");
					writeTab('sister', "sisterF's room");
				}
			}
			break;
		}
		case "newroom": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('home')" style="top: 70%; left: 10%; max-width: 30%;">Leave</div>
					`;
				}
			}
			break;
		}
		case "newstudio": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 70%; left: 50%; max-width: 30%;">Leave</div>
					`;
					writeTab('gym', "Go to the receptionist's desk");
				}
			}
			break;
		}
		case "newwork": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('office')" style="top: 40%; left: 50%;">Your Office</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('vault')" style="top: 70%; left: 15%;">Dark Vault</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('basement')" style="top: 40%; left: 15%;">Basement</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('town')" style="top: 70%; left: 50%;">Leave</div>
					`;
					writeTab('boss', "Mrs. bossL's office");
					writeTab('chair', "Go to top floor");
				}
			}
			break;
		}
		case "newoffice": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 70%; left: 75%;
						">Leave</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('lab')" style="top: 35%; left: 35%;">Research Artifacts</div>
					`;
					writeTab('assistant', "Your assistant's desk");
				}
			}
			break;
		}
		case "newbasement": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
			switch (data.player.time) {
				case "Night": {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('room')" style="top: 40%; left: 40%; max-width: 30%;">Go Home</div>
					`;
					break;
				}
				default: {
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('storage')" style="top: 40%; left: 70%;">Storage Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('toolkit')" style="top: 70%; left: 15%;">Toolkit Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('prison')" style="top: 40%; left: 15%;">Prison Department</div>
					`;
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<div class="pictureButton" onclick="sceneTransition('work')" style="top: 70%; left: 70%;">Back</div>
					`;
				}
			}
			break;
		}
		case "newmorning": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="scripts/gamefiles/locations/`+scene+`.jpg" usemap="#roomMap">
				</div>
			`;
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick="sceneTransition('home')" style="top: 70%; left: 10%; max-width: 30%;">Get Out of Bed</div>
			`;
			break;
		}
		case "vault": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("Request authorized. Which artifact will you requisition?");
				writeText("WARNING: Dark Vault artifacts pose a significant risk to the researcher and, by extension, to Anomaly Vault. Great care has been taken to ensure that these artifacts cannot be removed from their testing area under any circumstance.");
				writeText("In the event of misuse, onstaff security will seal the testing rooms and the researcher inside. Great care must be taken with these items.");
				var researchStatus = 0;
				var researchTotal = 0;
				for (i = 0; i < galleryArray.length; i++) {
					if (galleryArray[i].dark == true) {
						researchTotal += 1;
						if (galleryCheck(galleryArray[i].index) == true) {
							researchStatus += 1;
						}
					}
				}
				writeText(researchStatus+" of "+researchTotal+" total dark vault scenes obtained.");
				writeArtifact("gas");
				writeArtifact("gummy");
				writeArtifact("cage");
				writeArtifact("onahole");
				writeArtifact("toolkit");
				listCheats();
				writeTransition("work", "Go back");
			}
			break;
		}
		case "newlab": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("The iron door of the Testing Lab closes behind you. The file registry shows a list of available artifacts.");
				checkForEvents();
				writeTransition("office", "Go back");
			}
			break;
		}
		case "newprison": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("With a buzz, the prison department's door opens.");
				writeSpeech("Security", "none", "Entry granted to playerF. Proceed with caution.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		case "newtoolkit": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("With a buzz, the prison department's door opens.");
				writeSpeech("Department Head", "none", "Yo. Help yourself.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		case "newstorage": {
			if (data.player.time == "Night") {
				writeText("<p class='centeredText'>It's currently <b>"+data.player.time+"</b></p>");
				writeTransition("room", "Go Home");
			}
			else {
				writeText("You press the small button and the storage department monitor comes alive.");
				writeText("Scores of artifacts are kept underground either for safety or storage purposes. After authenticating yourself you're free to choose one to bring up.");
				writeTransition("basement", "Go back");
			}
			break;
		}
		//Characters
		case "roommate": {
			writeText("After a knock on the door, roommateF answers.");
			writeSpeech("roommate", "", "Hey, what's up?");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "sister": {
			writeText("You knock, and quickly enough sisterF shouts through the door.");
			writeSpeech("roommate", "", "Yeah?");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "girlfriend": {
			writeText("girlfriendF is relaxing on the couch, waiting for roommateF to get ready.");
			checkForEvents();
			writeTransition("home", "Go back");
			break;
		}
		case "assistant": {
			writeText("assistantF's desk is meticulously organized.");
			writeSpeech("asssitant", "", "'Did not show any...' Hmm. I might need to put a pin in this one. Need something?");
			checkForEvents();
			writeTransition("office", "Go back");
			break;
		}
		case "boss": {
			writeText("The door to Mrs. bossL's office is closed. She prefers scheduled appointments, but you can knock in case of emergency.");
			checkForEvents();
			writeTransition("work", "Go back");
			break;
		}
		case "chair": {
			writeText("The elevator is open, you could head up if you needed something.");
			checkForEvents();
			writeTransition("work", "Go back");
			break;
		}
		case "gym": {
			writeText("gymF is currently talking to a patron, but it seems like they're just finishing up.");
			checkForEvents();
			writeTransition("gym", "Go back");
			break;
		}
		case "katyaIntro": {
			writeSpeech("player", "", "What's up?");
			writeSpeech("assistant", "", "The other day I got a text from my sister, she's getting into college nearby.");
			writeSpeech("player", "", "Nice!");
			writeSpeech("assistant", "", "Yeah it's great. It's just that I commute pretty far to get here, and she doesn't have a car, so...");
			writeSpeech("player", "", "We work for a shadowy corporation dealing in mystical artifacts. You can't just get her a driver?");
			writeSpeech("assistant", "", "I considered that, but since Mrs. bossL is in charge of the budget, I'd need to get her to sign off.");
			writeSpeech("player", "", "Ah. So you want me to...?");
			writeSpeech("assistant", "", "I was wondering if my sister could stay at your place, just for a little while until she gets her footing.");
			writeSpeech("player", "", "<i>Another woman living with me could be a pretty good target for some fun...</i>");
			writeTransition("katyaYes", "No problem");
			writeTransition("work", "I'll get back to you on that");
			break;
		}
		case "katyaYes": {
			var goof = {index: "sister", image: "", met: false, fName: "Katya", lName: "Rodriguez", desc:"Your assistant's sister, she'll be rooming with you.",};
			data.story.push(goof);
			data.player.color += "katya";
			writeSpeech("player", "", "I'll need to run it by roommateF first, but there shouldn't be a problem.");
			writeSpeech("assistant", "", "Yes! Thank you so much!");
			writeText("She gives you a big hug before pulling out her phone and calling her sister.");
			writeSpeech("assistant", "", "Katya! Great news!");
			writeText("Likewise, you call up roommateF. She gives the okay for assistantF's sister to use the spare room.");
			writeTransition("work", "Finish");
			break;
		}
		case "katyaMeeting": {
			writeText("There's a knock at your door. You go to answer it and a young woman is standing in your doorway.");
			writeBig("scripts/gamefiles/characters/sister.jpg");
			writeSpeech("sister", "", "You must be the guy, yeah? Thanks for the room!");
			writeSpeech("player", "", "The guy? Oh, you're assistantF's sister?");
			writeText("She pushes past you and takes a look around.");
			writeSpeech("sister", "", "Hey, not bad. assistantF said I had a guest room? It upstairs?");
			writeSpeech("player", "", "Yep, first door on the left. Bathroom's on the right, dinner's-");
			writeSpeech("sister", "", "Thanks!");
			writeText("She runs off, ignoring you. Oh well, at least she's cute.");
			data.player.color += "katyaIntro";
			break;
		}
		//Artifacts
		case "mirrorResearch": {
			writeBig("scripts/gamefiles/items/mirror.jpg");
			writeText("There are engravings on the mirror, when you look at one the reflection shifts.");
			writeText("The first engraving reads 'Little Men are Fun Toys'. In the reflection, you can see a younger, springier, yet more meek looking version of yourself.");
			writeText("The second engraving reads 'Public Fun Is Not Unusual'. In the reflection you're standing completely nude, yet you don't look embarassed about it at all.");
			writeTransition("mirrorResearch1", "Enter the 'Little Men Are Fun Toys' dimension");
			writeTransition("mirrorResearch2", "Enter the 'Public Fun Is Not Unusual' dimension");
			writeTransition("work", "Go back");
			break;
		}
		case "mirrorResearch1": {
			tempScene = 'work';
			if (galleryCheck('mirrorResearch1-1') == true) {
				writeSpeech("assistant", "", "Alright, you're clear. Try not to get felt up on a bus or something, the last few guests we've had underestimated daily life here.");
				if (galleryCheck('mirrorResearch1-2') == false) {
					writeFunction("writeEvent('mirrorResearch1-2')", "Take a train around town");
				}
				if (galleryCheck('mirrorResearch1-3') == false) {
					writeFunction("writeEvent('mirrorResearch1-3')", "Go see a movie");
				}
				if (galleryCheck('mirrorResearch1-4') == false) {
					writeFunction("writeEvent('mirrorResearch1-4')", "Go to a bar");
				}
				if (galleryCheck('mirrorResearch1-5') == false) {
					writeFunction("writeEvent('mirrorResearch1-5')", "Go to the red light district");
				}
				writeTransition("work", "Head back to your dimension");
				var mirrorTotal = 0;
				var mirrorUnlocks = 0;
				for (a = 0; a < galleryArray.length; a++) {
					if (galleryArray[a].index.includes('mirrorResearch1')) {
						mirrorTotal += 1;
						if (galleryCheck(galleryArray[a]) == true) {
							mirrorUnlocks += 1;
						}
					}
				}
				console.log("mirror unlocks is " +mirrorUnlocks);
				console.log("mirror total is " +mirrorTotal);
				if (mirrorUnlocks == mirrorTotal) {
					sceneTransition('mirrorFailed1');
				}
			}
			else {
				writeEvent('mirrorResearch1-1');
			}
			break;
		}
		case "mirrorFailed1": {
			writeText("With how many times you've been in this dimension, the room almost seems to blur just by looking at the mirror.");
			writeText("The blur period has been lasting longer each time, a nagging feeling in your gut tells you that if you go through again, the jump could be permanent.");
			writeText("That might not be a bad thing, but it's a big descision you should leave for later.");
			writeSpecial("You've finished all of this dimension's content for now!");
			writeTransition("mirrorResearch", "Go back");
			break;
		}
		case "mirrorResearch2": {
			tempScene = 'work';
			if (galleryCheck('mirrorResearch2-1') == true) {
				writeSpeech("assistant", "", "Alright babe, forms are filled. Get those clothes off and you're free to roam the city. Stay clean, and stay away from sharp stuff. You don't have the instincts that come with the nudist lifestyle.");
				if (galleryCheck('mirrorResearch2-2') == false) {
					writeFunction("writeEvent('mirrorResearch2-2')", "Talk to some locals");
				}
				if (galleryCheck('mirrorResearch2-3') == false) {
					writeFunction("writeEvent('mirrorResearch2-3')", "Walk around the city");
				}
				if (galleryCheck('mirrorResearch2-5') == false) {
					writeFunction("writeEvent('mirrorResearch2-5')", "Check out a nearby gym");
				}
				if (galleryCheck('mirrorResearch2-4') == false) {
					writeFunction("writeEvent('mirrorResearch2-4')", "Check out public education");
				}
				writeTransition("work", "Head back to your dimension");
				var mirrorTotal = 0;
				var mirrorUnlocks = 0;
				for (a = 0; a < galleryArray.length; a++) {
					if (galleryArray[a].index.includes('mirrorResearch2')) {
						mirrorTotal += 1;
						if (galleryCheck(galleryArray[a]) == true) {
							mirrorUnlocks += 1;
						}
					}
				}
				if (mirrorUnlocks == mirrorTotal) {
					sceneTransition('mirrorFailed2');
				}
			}
			else {
				writeEvent('mirrorResearch2-1');
			}
			break;
		}
		case "mirrorFailed2": {
			writeText("With how many times you've been in this dimension, the room almost seems to blur just by looking at the mirror.");
			writeText("The blur period has been lasting longer each time, a nagging feeling in your gut tells you that if you go through again, the jump could be permanent.");
			writeText("That might not be a bad thing, but it's a big descision you should leave for later.");
			writeSpecial("You've finished all of this dimension's content for now!");
			writeTransition("mirrorResearch", "Go back");
			break;
		}
		case "stopwatchResearch": {
			tempScene = 'work';
			researchLevel('stopwatch');
			break;
		}
		case "stopwatchFailed": {
			writeText("*CLICK*");
			writeText("Time is stopped.");
			writeText("*CLICK*");
			writeText("Time resumes.");
			writeText("In such a clinical setting this watch seems like such a simple object. And yet if this watch were in the outside world, whoever held it would have godlike power.");
			writeText("If society were built around only two dimensions, then the man who could move in the third dimension would be king. The same is true here.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "braceletResearch": {
			tempScene = 'work';
			researchLevel('bracelet');
			break;
		}
		case "braceletFailed": {
			writeText("Wracking your brain, you just don't have any more ideas for how to research the bracelet in a clinical setting.");
			writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "coinResearch": {
			tempScene = 'work';
			researchLevel('coin');
			break;
		}
		case "coinFailed": {
			writeText("");
			writeText("You've already finished researching this artifact, but there might be more to do with it if you bring it home, if you haven't already.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "serumResearch": {
			tempScene = 'work';
			researchLevel('serum');
			break;
		}
		case "serumFailed": {
			writeText("");
			writeText("You've already finished researching this artifact, but there might be more to do with it in the future.");
			writeText("Maybe you'll be hit with inspiration soon.");
			writeTransition("work", "Go back");
			break;
		}
		case "erotiboxResearch": {
			tempScene = 'work';
			if (galleryCheck('erotiboxResearch1') != true) {
				writeFunction("writeEvent('erotiboxResearch1')", "Test an actress's interview recording");
			}
			if (galleryCheck('erotiboxResearch2') != true) {
				//writeFunction("writeEvent('erotiboxResearch2')", "Test a pocket watch");
			}
			if (galleryCheck('erotiboxResearch3') != true) {
				writeFunction("writeEvent('erotiboxResearch3')", "Test a copy of the Mona Lisa");
			}
			if (galleryCheck('erotiboxResearch4') != true) {
				writeFunction("writeEvent('erotiboxResearch4')", "Test a chessboard");
			}
			if (galleryCheck('erotiboxResearch5') != true) {
				writeFunction("writeEvent('erotiboxResearch5')", "Test $20");
			}
			if (galleryCheck('erotiboxResearch7') != true) {
				//writeFunction("writeEvent('erotiboxResearch7')", "Test a buttplug");
			}
			if (galleryCheck('erotiboxResearch6') != true) {
				writeFunction("writeEvent('erotiboxResearch6')", "Test a water bottle");
			}
			var erotiboxScenes = 0;
			var erotiboxTotal = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes('erotibox')) {
					erotiboxTotal += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						 erotiboxScenes += 1;
					}
				}
			}
			if (erotiboxScenes == erotiboxTotal - 1) {
				if (galleryCheck('erotiboxResearch8') != true) {
					writeText("There's nothing left in the testing room to use... Or maybe...");
					writeText("You've got a dangerous idea in mind. Following this train of thought could cause things to go poorly and take control out of your hands. It could be fun though.");
					writeFunction("writeEvent('erotiboxResearch8')", "Test your assistant");
				}
			}
			if (erotiboxScenes == erotiboxTotal) {
				sceneTransition('erotiboxFailed');
			}
			writeTransition("work", "Go back");
			break;
		}
		case "erotiboxFailed": {
			writeText("You barely escaped with your life last time, you shouldn't do anything as risky as human tests again.");
			writeText("But at the moment you can't think of anything else to put in the box. Maybe inspiration will strike you again some day in the future?");
			writeTransition("work", "Go back");
			break;
		}
		case "gasResearch": {
			tempScene = 'work';
			researchLevel('gas');
			break;
		}
		case "gasFailed": {
			tempScene = "work";
			writeEvent('gasResearch3');
			break;
		}
		case "toolkitResearch": {
			tempScene = 'work';
			researchLevel('toolkit');
			break;
		}
		case "toolkitFailed": {
			tempScene = "work";
			writeEvent('toolkitResearch3');
			break;
		}
		case "gummyResearch": {
			tempScene = 'work';
			researchLevel('gummy');
			break;
		}
		case "gummyFailed": {
			tempScene = "work";
			writeEvent('gummyResearch2');
			break;
		}
		case "onaholeResearch": {
			tempScene = "work";
			writeEvent('onaholeResearch1');
			break;
		}
		case "cageResearch": {
			tempScene = "work";
			writeEvent('cageResearch1');
			break;
		}
		case "doctorResearch": {
			writeBig("images/cheats/doctor1.jpg");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Ah, wonderful! Finally, another one. Doctor, spectator, or test subject?");
			writeSpeech("player", "", "Spectator.");
			writeText("You're carefully to respond quickly and directly. The good doctor tends to 'lecture' fellow medical practitioners. As for what she does to test subjects...");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Wonders abound! Very good then. This one is nearly finished!");
			writeText("Her gloves secret some unknown substance, when the substance makes contact with someone who's been injected with her syringe, the results are... Interesting.");
			writeBig("images/cheats/doctor2.gif", "Art by");
			writeSpeech("'Plague' Doctor", "scripts/gamefiles/items/doctor.jpg", "Look, he's almost cured. Soon his life will be an unending climax! Unneeded organs be damned!<br>Now, you've come to report this, yes? Head on to your superiors and let them know of my progress! Quickly man!");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "talismanResearch": {
			writeBig("scripts/gamefiles/items/talisman.jpg");
			writeText("There are many things you are not allowed to do here at the facility, but at the top of that list is that you are not allowed to touch the talisman.");
			writeText("That one. The one just two lines up (if you're playing with images of course). That talisman specifically.");
			writeText("But oh, you're a curious one. So you touch it. You touch it <b>real good.</b>");
			writeText("And then everything goes black. You fucked up!");
			writeText("Faintly, as if through some thin mortal coil, you can hear someone very excited to be in a new body. They're pretty excited to have a dick too, but that's neither here nor there.");
			writeText("Still, could've been worse. You could've been fed to some giant lizard, gotten lost in a slightly-larger-than-average IKEA, or had to clean the room of a big peanut.");
			writeText("Oh, right. Bad end. Wake up or whatever.");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "blueResearch": {
			writeBig("scripts/gamefiles/items/blue.jpg");
			writeText("Warning messages blare as you disable the security systems.");
			writeText("Desperate voices play over the loudspeakers as the blast door opens.");
			writeText("Familiar faces try to rush in to stop you, but it's too late.");
			writeSpeech("player", "", "We will meet again as stars.");
			writeText("And the lord escapes. All will become one.");
			writeTransition("darkVault", "Blue Star");
			break;
		}
		case "fringeResearch": {
			writeText("You slide open the viewport on the very secret and secure door. Inside, you can see...");
			writeText("Yourself?");
			writeSpeech("player", "", "If this is about my last meal, I want-");
			writeText("You could hear a pin drop as the two of <b>you</b> make eye contact.");
			writeSpeech("player", "", "Shit. Fuck. Okay, don't panic, me. Listen, you need to get out. They never actually erased your mem-");
			writeText("There's a blinding white flash in the room. When your eyes are un-fucked by the bloom, you can see the room is empty save for a pile of dust where... you... were standing.");
			writeSpeech("Intercom Voice", "none", "Consider this a warning. We have insurance in case of a bad end, you are not irreplaceable.");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "magicalResearch": {
			writeText("There's a woman in a strange outfit bouncing on a dildo inside a padded room.");
			writeBig("images/cheats/magical1.gif");
			writeText("Over a speaker a woman's soothing, yet robotic voice is repeating a mantra. 'I am a good girl. I will behave. I am happy here.'");
			writeText("She gleefully repeats the phrase as she bounces up and down. She needs to go through 'therapy' every day, otherwise she'll turn into a snake demon and kill everyone in the building.");
			writeText("Probably not a good idea to stick your dick in that.");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "umbrellaResearch": {
			writeText("I'll be honest with you, zombies add some rad design space. I don't want to just do them as a one-off joke. The scenes I have planned will take some time, please be patient (and send me any zombie porn vids you have ty).");
			writeText("Rainy DayZ has zombies btw. Probably not your kinda thing but if it is, check it out.");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "silentResearch": {
			writeText("HA HA FUCK YOU, ALL YOU GET ARE PACHINKO MACHINES.");
			writeText("PACHINKOOOOOOOOO");
			writeText("HERE'S A RAD PLAYABLE TEASER WITH A SWEET TRAILER");
			writeText("MONEEEEEEEEEEEY!!!!!");
			writeText("AND NOW IT'S GONE HAHAHAHAHAHA");
			writeText("BET YOU WANTED REAL CONTENT HUH?");
			writeText("...");
			writeText("Oh, okay then. I'll add an actual nurse scene in the next version.");
			writeText("Somebody! Anybody! Cry out for a silent-hill themed text-based horror porn game!");
			writeText("Btw, I liked the first movie. It wasn't A+ or anything, but I still had a good time.");
			writeTransition("darkVault", "Finish");
			break;
		}
		case "kettleResearch": {
			writeText("The instructions say to hold the kettle in your hand, then think of anything your mind desires. There's several notes complaining that all they got was a ferret.");
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>What do you wish for?: <input type="text" id="kettleSubmission" value=""></p>
				<p class='choiceText' onclick='kettleWish()'>Wish</p>
			`;
			writeTransition("darkVault", "Finish");
			break;
		}
		case "ethicsResearch": {
			ethicsCounter += 1;
			switch (ethicsCounter) {
				case 1:
					writeText("Sometimes the best thing for you to do is forgive someone. Not because they deserve it, but because you do. Letting that hate out of your heart can make your life a happier one.");
				break;
				case 2:
					writeText("If you act a certain way to please someone, you're letting that person control you. If you act against them put of spite, you're still letting them control you. If you don't let yourself care about them, don't use their actions to justify yours, is what you're doing 'correct'? If not, then you are doing the wrong thing.");
				break;
				case 3:
					writeText("No animal kills itself to escape pain, and neither do any humans. You contemplate suicide to escape 'dread', the thought of a future living with the pain every day. 'Dread' is a force thay has killed many, you are not weak because you feel it. You are strong because you can keep living in spite of 'dread'.");
				break;
				case 4:
					writeText("A man experiences loneliness every day, he has no friends or lover. Every day he sees a familiar face who smiles at him, always genuinely glad to see him. Who is that man? No one. You could be that man to the next person you meet.");
				break;
				case 5:
					writeText("All your opinions and facts come from experience, from people and sources you respect. But everyone else's opinions and facts come from places they respect just as much. You are a stranger to them, why trust you over the people they respect? To understand that others have just as much clout as you do, that is what it means to know nothing, and to be humbled.");
				break;
				case 6:
					writeText("If I gave you a coin right now, what would you do with it? Study it? Accept it cautiously? What if I gave you live-saving medicine you didn't need? Would you be greedy to keep or sell it? Or would I be greedy to give it away to someone who did not need it?");
				break;
				case 7:
					writeText("The face you show every day isn't your true one. No one will ever know who you really are inside. Yet, all it would take is complete honesty about every thought and the perfect words to describe them, and you would be understood by everyone. If you could, would you speak those words to someone?");
				break;
				case 8:
					writeText("Wake up. You've been living your life on autopilot. You don't appreciate a clear airway until you are sick, the same is true here. If you appreciate yourself, then take time to enjoy this moment. ");
				break;
				case 9:
					writeText("To say 'I love you' would mean nothing in this context. I am a rock speaking meaningless words. Yet, if I could fill my words with the meaning of an honest 'I love you', I certainly would.");
				break;
				case 10:
					writeText("Think about what you ate today. If you were sent back in time to that moment without keeping any knowledge, you would eat that same meal again. There are no branching points. Given the same circumstance and knowledge, you would end up here in this moment no matter how many times you replayed your life.");
				break;
				case 11:
					writeText("The last time you cried, for how long did you feel sad? The next time you feel angry or hurt, remember how long it stuck with you last time. Please, wait at least that long to make a major decision.");
				break;
				case 12:
					writeText("When faced with a choice, always make the decision you can live with given the worst-case scenario. If you cannot afford a car should you crash it, you cannot afford a car.");
				break;
				case 13:
					writeText("How many snowflakes in an avalanche are responsible for a person's death? All of them? Just the ones that crushed a person? Perhaps it is mountain's fault for catching too much snow, or the snow's fault for falling at all.");
				break;
				case 14:
					writeText("Two men cross the street. One only gives out one hundred dollars to charity every year, you do not know why. The second gives out thousands. But, he confesses, he only gives because it is his fetish. Which man can be considered more 'good'?");
				break;
				case 15:
					writeText("You can justify an action based on the circumstance. Violence can become self-defense. Public urination can become saving someone from a jellyfish sting. What is more valuable, the motivation, the circumstance, or the result? What if one is positive while the others negative?");
				break;
				case 16:
					writeText("A ship named 'The Argo' is rebuilt over three years, and its broken pieces put into one pile. Eventually not a single original piece remains in the sailing ship, and every original piece is in the pile. The ship that still sails is 'The Argo' , because that identity is given to it by the people. The ship has no identity before the shipwrights and the sailors give it one.");
				break;
				default:
					writeText("The rock is silent. If you speak to it, it might repeat what you have to say. Try to take its words with a grain of salt though.");
				break;
			}
			writeTransition("ethicsResearch", "Another");
			writeTransition("darkVault", "Finish");
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
		case "prologue2": {
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Identification?");
			writeSpeech("player", "", "playerF playerL, Aleph.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed. Line secured, recipient?");
			writeSpeech("player", "", "playerL's office.");
			writeSpeech("Security", "scripts/gamefiles/logo.png", "Confirmed, hold.");
			writeText("...");
			writeSpeech("assistant", "", "playerL's office.");
			writeSpeech("player", "", "Hey Veronica, just letting you know I'm home safe.");
			writeSpeech("assistant", "", "Oh good! I'm just cleaning up and prepping, we've got a new artifact tomorrow.");
			writeSpeech("player", "", "We're not working on the earings?");
			writeSpeech("assistant", "", "Nope! Mrs. Jensen says you've fried your brain too many times, so we're shelving the lovey-doves. We've got some kind of invisibility bracelet up next.");
			writeSpeech("player", "", "Invisibility?");
			writeSpeech("assistant", "", "Well, not really. It says it makes you unpercievable, we had to bake the room to get it off the last subject.");
			writeSpeech("player", "", "Alright, thanks for the heads up. See you tomorrow.");
			writeSpeech("assistant", "", "Bye!");
			break;
		}
		case "prologueMemo": {
			writeText(data.player.lName+",");
			writeText("While your resistance to the lovey-doves yesterday showed you have room for improvement, the fact that you're sane enough to talk now shows you have enough mental fortitude to warrant an increase in authority.");
			writeText("For this reason, combined with our current staff shortage, I've authorized you to perform research on artifacts as you deem fit. All class-C low-lethality artifacts, including the 'erotibox' are at your disposal.");
			writeText("In addition you should now be able to submit requests for Dark Vault artifacts.");
			writeText("The Dark Vault is a storage site for artifacts which have already been heavily researched and have been deemed potentially dangerous to researchers. Take great care not to threaten the company through inappropriate handling.");
			writeText("Research into these items is not considered mandatory by company policy, so take great care to understand the risks of these items before you submit any requests for them.");
			writeText("It should not be a surprise to you that Anomaly Vault will not prioritize your health over scientific progress. If you are unable to work, report immediately for termination.");
			writeText("Sincerely,");
			writeText(data.story[3].fName + " " + data.story[3].lName);
			//writeSpeech("player", "", "Geez, blunt much?");
			//writeText("The memo is from Mrs. " + data.story[3].lName+", your direct superior. She's known around the office for being a hard-ass. It's best to comply at times like these though. You wouldn't want to get transferred to the aviary department to work with the man-hunting birds.");
			data.player.time="Morning";
			//data.story[3].met = true;
			break;
		}
		case "dream1": {
			writeText("Each time you close your eyes visions flash before you.");
			writeBig("images/misc/dream1-1.gif");
			writeText("Memories of a pair of earings that messed with your head and voice.");
			writeBig("images/misc/dream1-2.gif");
			writeText("Making people listen to your commands, but you had no control over yourself.");
			writeBig("images/misc/dream1-3.gif");
			writeText("Some artifacts have had a proven history of danger to the user and the people around them.");
			writeText("Eventually sleep takes you. You'll need to be careful not to get turned into a puppet in the future.");
			break;
		}
		case "dream2": {
			writeText("You flop down onto the bed, memories of a good day behind you.");
			writeText("You can feel your mind becoming sluggish, and it gets harder to focus. The cold of the bracelet doesn't bother you too much anymore.");
			writeText("But as you approach the boundary of being awake, you feel a cool wind on your skin, and the voices of people around you.");
			writeText("You jolt awake, snapping yourself out of it. You're still in your room.");
			writeText("The bracelet's image is hanging in your mind, are you somehow connected to it? Those might have been memories of the previous owner of the artifact.");
			writeText("From now on you'll keep careful track of any new developments in your dreams.");
			break;
		}
		case "braceletResearch1": {
			data.player.artifact1 = "bracelet";
			updateMenu();
			writeBig("scripts/gamefiles/items/bracelet.jpg");
			writeSpeech("player", "", "This is experiment log RB-01, now commencing.");
			writeText("You slip on the bracelet and turn towards assistantF.");
			writeSpeech("player", "", "So? Anything?");
			writeSpeech("assistant", "", "No sir, no immediate effect.");
			writeSpeech("player", "", "Interesting. Maybe it's something that needs to be activated to work. Huh, I can't get this off.");
			writeText("assistantF looks up from her notes before looking around with a confused look on her face.");
			writeSpeech("assistant", "", "What was I...?");
			writeSpeech("player", "", "assistantF?");
			writeSpeech("assistant", "", "Ah! Oh, Mr. playerL, sorry. I must've been distracted for a moment.");
			writeSpeech("player", "", "Interesting.");
			writeText("...");
			writeSpeech("player", "", "I just smashed your favorite mug, and you don't even remember it?");
			writeSpeech("assistant", "", "You did what?!");
			writeText("She's obviously mad, but once you focus on the memory of dropping the cup, she takes on a more neutral expression.");
			writeSpeech("assistant", "", "Hey, have you seen my coffee cup anywhere?");
			writeText("...");
			writeSpeech("player", "", "Huh, it isn't coming off.");
			writeSpeech("assistant", "", "Oh boy. Well, the last person was dead, maybe it doesn't come off while the wearer is still alive?");
			writeSpeech("player", "", "... Just forget I said anything.");
			writeSpeech("assistant", "", "Anything about what?");
			writeText("...");
			writeSpeech("player", "", "Hey! Bitch!");
			writeBig("images/bracelet/research1-1.gif");
			writeText("You slap assistantF hard on the ass, and she does a little jump on the spot while letting out a squeak. But instead of getting mad she just rubs her ass and looks around to see if anyone saw.");
			writeText("...");
			writeSpeech("notes", "", "Findings:<br>The bracelet allows the wearer to be unperceived by others but only when the wearer desires to go unnoticed.<br>If the wearer wishes, any action they take will go unnoticed, including physical actions such as pinching and molesting. People affected by these actions will still feel the repercussions, but they will ignore the actions as if they were run of the mill occurrences.<br>The wearer can erase memories from other people's minds. This effect is limited to memories of the wearer or the wearer's indirect actions.");
			break;
		}
		case "braceletResearch2": {
			writeText("It takes some time to get used to, but walking around completely unnoticed is actually pretty nice. You need to actively want to be seen for anyone to notice you, so you accidentally bump into a few people as a result of not paying attention.");
			writeText("You walk into your office and can see assistantF leaning back on her chair, her face looking a little flushed.");
			writeSpeech("player", "", "No way...");
			writeBig("images/bracelet/research2-1.gif");
			writeSpeech("player", "", "Holy shit, you are! You little slut, you're trying to get off at work!");
			writeSpeech("assistant", "", "Mmm...");
			writeSpeech("player", "", "Damn. I wonder how long you've been doing this. Well, if you're gonna put on a show, you should at least go all the way.");
			writeText("You grab her underwear and pull it down her leg. She seems confused for a second, but her brain begins to rationalize it away as a result of the bracelet.");
			writeSpeech("assistant", "", "When did I...?<br>Mmm~, gotta hide.");
			writeText("On her own accord she gets down on the floor to hide her body better in case you walk in. She pulls her clothes off and hides them underneath her desk.");
			writeBig("images/bracelet/research2-2.gif");
			writeSpeech("assistant", "", "Mmm~, I really need to stop this... Soon it'll be every day...");
			writeSpeech("player", "", "Damn right it will. I wonder if I can...");
			writeText("You push her down onto the floor while she strokes her clit. She doesn't seem to notice, instead trying to get her watch off with her free hand until you take it.");
			writeSpeech("player", "", "Here, and...");
			writeText("You push your cock into assistantF's mouth and make her start stroking the base with her free hand. In just a moment she's doing it  of her own volition, happily sucking on your head while she pleasures herself.");
			writeSpeech("assistant", "", "Mmm~... Mmm~...<br><i>God, he feels so real today... I'm going to get caught if I keep this up.</i>");
			writeBig("images/bracelet/research2-3.gif");
			writeSpeech("player", "", "Nggh... Gonna-");
			writeText("You can hear the sound of a door closing across the hallway, and assistantF jerks up at the sound.");
			writeSpeech("assistant", "", "Shit... Fuck, he'll be back any second.");
			writeText("Leaving you tragically unfinished, assistantF quickly starts putting her clothes back on and leans out into the hallway to see if you're coming. Which you aren't.");
			writeSpeech("player", "", "Fuck, oh well. I should get to work anyway. I'll work faster next time, I guess.<br>assistantF?");
			writeSpeech("assistant", "", "Aaaah! Oh my god, you scared me! How'd you get over there?");
			break;
		}
		case "braceletResearch3": {
			writeText("With some time and practice, you've found a new trick. You can get someone to register your presence without them registering what you're doing.");
			writeSpeech("assistant", "", "It's a shame that the bracelet didn't work. I guess it must have broken when the last user died.");
			writeSpeech("player", "", "Oh? Any particular reason why it's a shame?");
			writeSpeech("assistant", "", "Well, I-Nnngh... Sorry. It's just that if you could go unnoticed, you could do just about anything. You could rob a bank, Mmm~! S-sorry, I don't know what's going on with me. You c-could-");
			writeBig("images/bracelet/research3-1.gif");
			writeSpeech("player", "", "Have sex with someone mid conversation?");
			writeSpeech("assistant", "", "Y-yeah I suppose. You couldddd~!<br><i>Cumming... God what's going on with me? Did I just... No, maybe I'm just pent up.");
			writeSpeech("player", "", "You okay? I'm almost finished, so you should be able to go soon.");
			writeSpeech("assistant", "", "N-no problem, it's my pleasure. O-ooh~, and you could do a lot more too. If you could do it any time, you could mmm~make someone associate pleasure with something, you know?");
			writeSpeech("player", "", "That's a pretty good idea, actually. Maybe I'll give that a shot. Speaking of which...");
			writeBig("images/bracelet/research3-2.gif");
			writeSpeech("assistant", "", "Mmmm~! Ah~!<br><i>It happened again, I definitely just came...</i>");
			writeSpeech("player", "", "I'll let you soak in the afterglow, you won't notice if I just go ahead and leave will you? Didn't think so.");
			writeText("She gave you a pretty neat idea, but assistantF is already on a pretty hair trigger. It'd be more fun to push someone else, but who?");
			writeSpeech("assistant", "", "Mmm~... B-boss? Where'd you go?");
			break;
		}
		case "braceletResearch4": {
			writeText("As you disrobed to enjoy bossL with the bracelet's power, she surprised you by calling assistantF into her office. She started chewing out assistantF over something about report formatting.");
			writeText("You didn't pay too much attention to what she was saying.");
			writeBig("images/bracelet/research4-1.gif");
			writeSpeech("boss", "", "Do... Do I make myself clear, assistantL?");
			writeSpeech("assistant", "", "Yes ma'am! <br><i>Fuck, I screwed up on this one. She's red in the face... I wanna go home... </i>");
			writeText("You do feel a little bad for assistantF for a moment though, with the way you're pounding bossL's cunt, it looks like bossL is trying to get up in assistantF's face and intimidate her.");
			writeSpeech("player", "", "Acting so tough while you're getting fucked, you really do have an iron spirit, huh? How about... This!");
			writeBig("images/bracelet/research4-2.gif");
			writeSpeech("boss", "", "Ggghh~!");
			writeText("A hard spank causes bossL's cunt walls to suddenly clench around you.");
			writeSpeech("assistant", "", "<i>Did... Did she just have an orgasm from yelling at me? </i><br>I'll be... Be sure not to let it happen again, Mrs. bossL.");
			writeText("assistantF slowly eases her way out of the room as you push bossL's head down onto the desk, making sure she feels every inch of you.");
			writeSpeech("player", "", "Gonna cum, bitch! Take it all!");
			writeBig("images/bracelet/research4-3.gif");
			writeText("bossL's eyes roll back at her body shudders, but she doesn't make a sound as she tries to maintain her dignity.");
			break;
		}
		case "braceletResearch5": {
			writeText("The top floor, where the head honcho of Anomaly Vault spends her time. She's not super involved with most of the daily events, she's less CEO and more Majority Shareholder.");
			writeText("Rumors abound that she actually reports to a shadowy council, like the Illuminati but a cube, not a pyramid.");
			writeText("In any case it's no big deal to use the bracelet to sneak in. You slide past someone leaving and walk into her... Office?");
			writeBig("scripts/gamefiles/characters/chair.jpg");
			writeText("She looks right at you as the door closes, but she's probably just looking at the door behind you.");
			writeText("This place looks nothing like any office you've ever been in. There's no desk, and several walls give way to stunning balconies over large jungles. It's more like a botanical garden in here.");
			writeText("chairF chairL, the head of Anomaly Vault, takes a seat on a nearby chair. It doesn't seem like she notices you.");
			writeSpeech("player", "", "It's now or never.");
			writeText("...");
			writeBig("images/bracelet/research5-1.gif");
			writeText("You stripped off her fancy robes and got to work enjoying yourself with your new fleshlight. Her plump lips make good padding for your pelvis as you slam your cock down her throat.");
			writeText("Your hands are on her neck, enjoying the bulge your dick makes as you thrust in and out.");
			writeBig("images/bracelet/research5-2.gif");
			writeSpeech("player", "", "Gah! What the hell are you-");
			writeText("You jump in place as chairF grabs you by the ass to pull you deeper, taking you down to the balls. You feel her tongue slide out to run along your balls as she moans, clearly enjoying her prize.");
			writeSpeech("player", "", "F-fuck~<br>Can you see me?");
			writeText("She pulls back for a moment then slams her face down onto your crotch again.");
			writeSpeech("player", "", "God damn! Gonna cum!");
			writeText("This finally breaks her rhythm. She pulls herself off your dick, not even so much as a gag or *glch* and starts stroking your length.");
			writeSpeech("chair", "", "Do it. Give it to me.");
			writeBig("images/bracelet/research5-3.gif");
			writeText("She sighs appreciatively as your cock spurts its thick cream out onto her hand and arm.");
			writeText("You stumble back as you finish, chairF lewdly licks her fingers clean of your jizz.");
			writeSpeech("chair", "", "Well, I see you certainly enjoyed yourself. It was a lovely distraction for me as well.");
			writeSpeech("player", "", "How-?");
			writeSpeech("chair", "", "I am the chairwoman of the most powerful institution of the world. Even if I didn't have a bevy of reality-bending power sources in my possession, I still have ways to deal with perception alteration.");
			writeSpeech("player", "", "Oh.");
			writeSpeech("chair", "", "There's no need to worry. Neither your life or your job are in danger. If you were the type of person to use the bracelet for murder or something wasteful like that, we would have fried you the moment you touched it.");
			writeSpeech("player", "", "Do you mean 'fired'?");
			writeSpeech("chair", "", "No. <br>You should be getting back to work. The artifacts can get antsy when they feel ignored.");
			break;
		}
		case "braceletHome1": {
			writeSpeech("player", "", "Alright, I'm crossing a line here. No going back now.<br>roommateF? You finished?");
			writeText("You don't hear an answer, but after a quick search you hear the shower to roommateF's room shut off.");
			writeSpeech("player", "", "Hey, roommateF?");
			writeSpeech("roommate", "", "Just out of the shower, what's up?");
			writeText("She calls back faintly through the multiple sets of doors.");
			writeSpeech("player", "", "Just saying hey. You going somewhere today?");
			writeSpeech("roommate", "", "Yeah, I'm meeting girlfriendF later today. I'll be out late.");
			writeSpeech("player", "", "No problem, have fun.");
			writeText("You push open the door to her room, using the bracelet to hide your presence.");
			writeBig("images/bracelet/home1-1.gif");
			writeText("She's just finished drying, and lets down her towel as her phone buzzes on her nightstand.");
			writeText("She picks it up to see who's texting her and...");
			writeSpeech("roommate", "", "Oh!");
			writeText("She quickly turns off the screen. She's always been a bit of a prude, so her girlfriend is probably trying to get her to open up.");
			writeText("She takes a deep breath as she sits on her bed, you're enjoying the bizarre, voyeuristic thrill. After making sure her window's closed, she lays back on the bed naked and opens her messages again.");
			writeBig("images/bracelet/home1-2.gif");
			writeSpeech("roommate", "", "girlfriendF, you perv...");
			writeText("She must be really sensitive, she's already blushing hard and getting into it just from running her finger along her folds.");
			writeText("You take a few careful steps forwards, but even when you look right into her eyes it's like you aren't even there.");
			writeSpeech("roommate", "", "Mmm... girlfriendF...");
			writeText("Deciding to push you luck, you slide your pants off and start jerking off right in front of roommateF's face. She's jilling herself to a picture of her girlfriend in only lingerie, all while she's got a cock inches from her face.");
			writeText("But instead of being off guard, her eyes unfocus, her breathing gets deeper, and she starts rubbing her twat faster.");
			writeSpeech("roommate", "", "<i>God.. I can almost smell...</i><br>No!");
			writeText("She stops right on the verge of an orgasm and sits up.");
			writeSpeech("roommate", "", "N-no more of that, focus... You have girlfriend now... What would she think if she knew you were masturbating to the thought of the smell of a d-d... Dick...");
			writeText("Meanwhile you're about to get off. The admission that she could get off on your cock stink is almost pushing you over the edge. So, as she begins to get dressed you step forwards. She's putting on her bra now, so you slip down her fresh pair of panties and...");
			writeBig("images/bracelet/home1-3.gif");
			writeText("Start depositing a load of cum into her underwear.");
			writeText("She does a few confused sniffs, but doesn't otherwise notice. She grabs her underwear and pulls them up, and you can <b>hear</b> the sound of your jizz being smushed against her pussy.");
			writeText("Having had your fun, you exit her room satisfied in the knowledge that she'll go on a date with a load of your cum covering her twat.");
			break;
		}
		case "braceletHome2": {
			writeText("Just as you're about to start messing with roommateF, her phone starts ringing. It's from her girlfriend, "+data.story[2].fName+".");
			writeText("...");
			writeSpeech("girlfriend", "", "So? What did she say?");
			writeSpeech("roommate", "", "She uh... Um... Nnn...");
			writeSpeech("girlfriend", "", "Hey, are you alright? You sound kind of strange.");
			writeBig("images/bracelet/home2-1.gif");
			writeSpeech("roommate", "", "Y-yeah, I'm fine. I've just been a bit... B-bit...!");
			writeText("roommateF clasps her hand over her mouth as she cums, her legs shaking.");
			writeSpeech("roommate", "", "<i>What the hell is going on? Did I just cum?</i><br>Sorry, I uh-");
			writeSpeech("girlfriend", "", "Don't lie to me, I know what's going on you little slut.");
			writeSpeech("roommate", "", "W-what?");
			writeSpeech("girlfriend", "", "You're jilling off! God, you can't wait until tonight, can you?");
			writeSpeech("roommate", "", "O-oh! Haha! You got me, I'm just thinking of you-");
			writeBig("images/bracelet/home2-2.gif");
			writeSpeech("roommate", "", "C-cumming! Coming over! Tonight! I just can't focus on anything else!");
			writeSpeech("girlfriend", "", "Well you'd better not tire yourself out before tonight. I've got magic fingers, you'll never be satisfied with anyone else, you hear me?");
			writeSpeech("roommate", "", "N-never be satisfied... With anyone else...");
			writeBig("images/bracelet/home2-3.gif");
			writeText("Her eyes roll back as she cums again on your dick.");
			writeSpeech("girlfriend", "", "Well you have fun alright? Love you!");
			writeSpeech("roommate", "", "Lov-");
			writeText("You grab roommateF's phone and throw it aside before grabbing roommateF by the hair so you can finish yourself off with her mouth.");
			break;
		}
		case "braceletHome3": {
			writeSpeech("girlfriend", "", "Oh hey! You must be playerF!");
			writeSpeech("player", "", girlfriendF+", I assume? roommateF talks about you all the time. Nice to meet you finally.");
			writeSpeech("girlfriend", "", "All good I hope, nice to meet you too.");
			writeText("She goes in for a handshake, and you take it. You also use the bracelet to lean in and rub your hand against her twat. Seeing her frazzled ought to be interesting.");
			writeSpeech("girlfriend", "", "So what do you do?");
			writeSpeech("player", "", "Huh? Oh, uh, I work as a warehouse manager of sorts.");
			writeText("You get more into it. Maybe she just... Didn't notice? Maybe you were too gentle by accident. You start rubbing vigorously against her clit, ready to see her start to fumble her words as roommateF walks in.");
			writeSpeech("roommate", "", "Welcome back. girlfriendF, have you met playerF?");
			writeSpeech("girlfriend", "", "We were just introducing ourselves. He was telling me about his warehouse job.");
			writeSpeech("roommate", "", "Good luck, he's never spilt any details to me.");
			writeSpeech("girlfriend", "", "Really? It like a 'national defense classified' sort of thing?");
			writeText("You're at a loss, nothing? No 'oohs' or 'mmmyah~!'s");
			writeSpeech("player", "", "Y-yeah. It pays well though.");
			writeText("Well, you aren't about to take this challenge lying down.");
			writeText("...");
			writeSpeech("girlfriend", "", "And so then what did he say?");
			writeSpeech("roommate", "", "He said he'd have the grades done by Tuesday. Hey, are you alright?");
			writeBig("images/bracelet/home3-1.gif");
			writeSpeech("player", "", "Fucking. Break. You. Whore!");
			writeText("You're slamming balls deep into her asshole, you've felt her clench and quiver a few times now, but there hasn't been a single lull in the conversation.");
			writeSpeech("girlfriend", "", "I feel fine, why?");
			writeSpeech("roommate", "", "It's just... I don't know. Something seems a bit off.");
			writeText("You've had enough games. You pull yourself out with a *POP*! and line yourself up for a single thrust into her twat.");
			writeSpeech("player", "", "Let's see you keep a straight face when you're getting your womb filled!");
			writeSpeech("girlfriend", "", "You worry too much. I... Um~... Come here.");
			writeText(girlfriendF+" pulls roommateF close as you give a few thrusts, your balls clench as you feel yourself going over the edge.");
			writeBig("images/bracelet/home3-2.gif");
			writeText(girlfriendF+" leans as far forwards as she can beneath you and pulls roommateF into a deep kiss. You can feel girlfriendF's pussy clench. She's french-kissing her girlfriend while a man pumps jizz into her womb.");
			writeText("You pull out, spent, and watch as girlfriendF's hole gapes a little open once you pull out. She must've cum at least twelve times by your count, but she's damn good at hiding it.");
			break;
		}
		case "braceletHome4": {
			writeSpeech("sister", "", "What the fuck, you left the door open!");
			writeSpeech("Ashley", "none", "Huh...? I thought I closed it.");
			writeSpeech("Molly", "none", "Get your head in the game Ash, otherwise you're going to get destroyed tonight.");
			writeText(" You stand awkwardly in the corner as the girls filter into the living room and up the stairs. Slipping inside the room with the bracelet, you ware essentially invisible; Ashley didn't even notice as you followed right behind her. sisterF opens her bedroom door and the three teens pile onto the bed in front of the television.");
			writeBig("images/bracelet/katya1-1.gif");
			writeSpeech("Ashley", "none", "Aw, did you start playing already?");
			writeSpeech("Molly", "none", "Yup, I forgot to bring my controller so you're playing the winner.");
			writeText(" While the girls chit-chat, you salivate at the spread of teen pussy in front of you.");
			writeSpeech("player", "", " Hey girls, mind if I help you get comfortable?");
			writeText(" It takes you no time at all to strip sisterF and her friends completely bottomless; the three of them are totally unaware of your presence even as their jeans slip off their shapely legs, revealing their shaved slits ripe for the taking.");
			writeBig("images/bracelet/katya1-2.gif");
			writeText(" You easily push your cock inside, enjoying the new sensation of sisterF's pussy...");
			writeSpeech("sister", "", "O-oh! Fu-fuck...");
			writeSpeech("Molly", "none", "What's up sisterF, you're really going to choke and let Ash play me next?");
			writeSpeech("sister", "", "Hah... n-not on your life!");
			writeBig("images/bracelet/katya1-3.gif");
			writeText(" After a few minutes of Heaven, you pull out and fuck another blissfully unaware teen...");
			writeSpeech("Molly", "none", "Ah! Uh, um, y-you scared me with that attack.");
			writeSpeech("Ashley", "none", "Yeah, right! Excuses, excuses, excuses.");
			writeBig("images/bracelet/katya1-4.gif");
			writeText(" Prodding their mouth, with a little effort you even get them tasting each other with your dick...");
			writeSpeech("Ashley", "none", "Mmmph... hmph!");
			writeSpeech("Molly", "none", "I can't believe you said that in class!");
			writeSpeech("sister", "", "Haha, yeah, that was pretty funny today.");
			writeSpeech("player", "", " Huh, now I want to know what she said...");
			writeBig("images/bracelet/katya1-5.gif");
			writeText(" By the time you round back to your neighbor's barely legal daughter, you only manage a few thrusts...");
			writeText(" ... before your throbbing cock slams inside her wet pussy and floods it with thick cum.");
			writeBig("images/bracelet/katya1-6.gif");
			writeText(" After you pull out, the girls are still completely unaware, albeit out of breath and blushing red. The room reeks of hardcore sex and their bodies glisten with sweat, but they don't seem to mind. Their eyes are still glued to the TV as they play their game, even as sisterF's used pussy steadily oozes out your semen.");
			//writeText(" In the end, they have a sleepover... and so do you.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</span>");
			break;
		}
		case "braceletOutdoor1": {
			writeText("You don't come here often, work usually keeps you busy, but there's plenty here to enjoy.");
			writeSpeech("gym", "", "No problem, head on back.");
			writeBig("scripts/gamefiles/characters/gym.jpg");
			writeText("This woman is "+data.story[6].fName+" "+data.story[6].lName+", she works as a trainer and at the reception desk infrequently.");
			writeSpeech("gym", "", "Hi, you new here?");
			writeSpeech("player", "", "Yeah, actually I was hoping to hire a trainer. I felt like trying out something new today.");
			writeSpeech("gym", "", "No problem! If I can just get your details down you can be working out today. What kind of exercise did you have in mind?");
			writeText("...");
			writeBig("images/bracelet/outdoor1-1.gif");
			writeText("*SLAP*");
			writeSpeech("gym", "", "Glruk~! Mmmph~!<i><br>What's happening? How did I get up...? Why can't I close my mouth? Why do my tits feel like they're getting slapped?</i>");
			writeText("Her body on autopilot, she lifts her hands to slide it betwen her legs. Her perception of reality so damaged by the bracelet's effect she isn't even sure where she is anymore.");
			writeSpeech("player", "", "Damn you have a tight throat. How many patrons are gonna smell the jizz on your breath before the day is over? Or maybe you'll head home and start bouncing on a dildo right away to satisfy yourself?");
			writeSpeech("???", "scripts/gamefiles/none.png", "Hey, anyone here?");
			writeText("Someone calls out from the reception desk.");
			writeSpeech("player", "", "In here!");
			writeText("The customer opens the office door and stops in his tracks.");
			writeSpeech("gym", "", "Glark~! Glk~!<i><br>Hi! Can I help you?</i>");
			writeText("She tries to greet him, but the words come out muffled through your cock.");
			writeSpeech("player", "", "You need something?");
			writeSpeech("???", "scripts/gamefiles/none.png", "I'll uh, I'll just go.");
			writeSpeech("player", "", "Aaand he's gone. Shame, he'll miss the big finish. You ready to finally see me?");
			writeText("You feel your cock ready to burst, so hilt yourself in her throat and finally let her see you.");
			writeBig("images/bracelet/outdoor1-2.gif");
			writeSpeech("gym", "", "Glk, glk, glk~!?");
			writeText("She finally comes to the realization that she's been getting throatfucked as you pump cum down her throat.");
			writeText("She's starting to panic, finding it hard to breath, but once you're done with her she won't remember you were even here.");
			break;
		}
		case "braceletOutdoor2": {
			writeSpeech("player", "", "Alright, time for another day of fun~<br>Huh. The receptionist's a guy this time. Where's...?");
			writeText("After a bit of looking around, you find "+data.story[6].fName+" chatting with someone near the backdoor.");
			writeSpeech("gym", "", "I was supposed to meet you at your place, doofus.");
			writeSpeech("???", "scripts/gamefiles/none.png", "What can I say? I wanted to see you again, honey.");
			writeSpeech("gym", "", "Shh! I'll lose all my cred as a tough girl if you call me that here! Come on.");
			writeText("As the two of them leave, some other workers talk amongst themselves. 'I heard they're getting married next month', 'They're already acting like newlyweds' and so on. With the power of the bracelet, you might as well have some fun with this.");
			writeText("...");
			writeText("After a pretty uninteresting car ride, you've arrived at "+data.story[6].fName+"'s place.");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Listen, maybe it's finally time for us to go all the way.");
			writeSpeech("gym", "", "I... Nnn... I'm not some slut. I'm saving myself for m-marriage. We both agreed.");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Fine, fine. Hey, I love you.");
			writeBig("images/bracelet/outdoor2-1.gif");
			writeSpeech("gym", "", "I l-... Love you too.");
			writeSpeech("player", "", "<i>Poor guy, putting up with waiting so long. Might as well put on a show for him, even if he can't really 'see' it.<br>Nggh, damn, you have a tight ass. you must work out!</i>");
			writeBig("images/bracelet/outdoor2-2.gif");
			writeSpeech("gym", "", "Hah... Mmmn, I feel really off today.<br><i>This is weird... It almost feels like someone's... No, no way. I've been doing too much anal with Tommy and the boys lately, my head's going funny.</i>");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "Hey, you want anything from the store?");
			writeText("You give her a good slap on the ass to tighten her up.");
			writeSpeech("gym", "", "G-gaaah~!<br><i>Cumming~! God, it feels just like I'm getting pounded in the ass!</i>");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", data.story[6].fName+"?");
			writeSpeech("gym", "", "I-I'm fine. I guess I'm a little pent up too. Can't wait for March. You haven't been... Nngh... Getting second thoughts, have you?");
			writeSpeech(data.story[6].fName+"'s Boyfriend", "scripts/gamefiles/none.png", "I'd never hurt you like that. I love you, and I always will.");
			writeBig("images/bracelet/outdoor2-3.gif");
			writeSpeech("gym", "", "Ggghg~! L-love y-NNNh~!<br><i>Again! I'm cumming while fantasizing about getting fucked in the ass!</i>");
			writeSpeech("player", "", "Hope you're ready for round two, slut!");
			writeBig("images/bracelet/outdoor2-4.gif");
			break;
		}
		case "braceletOutdoor4": {
			writeText("You decide to head down to a local upscale wine bar that only allowed women, named 'Madam Pompadour'. It was a popular evening hangout for the more affluent women in the city:  like business executives off work for the night, lawyers desiring some stress relief and wealthy trophy wives with nothing to do. Tonight was your night to get lucky!");
			writeText("When you arrive, you simply walk past the bouncer and enter the exclusive pub. You quickly spot two lovely ladies at the bar, you imagine chatting about something unimportant. With an eager grin, you walk up right behind the black woman wearing a sexy red dress.");
			writeSpeech("player", "", "Hey slut, I'm going to fuck you in the ass in a second if you don't stop me.");
			writeBig("images/bracelet/outdoor4-1.gif");
			writeText("You unceremoniously lift up the hem of her dress and begin pounding her asshole, taking the gorgeous black woman from behind on her barstool. She gasps and grunts at the sudden intrusion, her confused body tensing as she was suddenly forced into anal sex… but she otherwise has no idea you're there. She bravely continues her conversation with her coworker.");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "O-oh, oh fuck…! Agh… t-that's crazy…");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Thank you! That's what I said, but does Michael ever listen to me? Of course not.");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Ungh! Uh-huh… y-yeah.");
			writeBig("images/bracelet/outdoor4-2.gif");
			writeText("It's almost impressive watching the ebony beauty struggle to speak, her wild eyes shifting around her as she searches for the cause of her discomfort. You give it to her hard and fast, railing her tight ass with your throbbing cock, all the while patrons drink and chat around you, as if the erotic scene so completely and utterly normal, it wasn't even worth their attention.");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "What about you? How's has the promotion been?");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Ah! Uh, w-well, you know. It's been alright. Hnngh…! J-just a lot of stress, I guess.");
			writeText("Your hands leave her smooth hips and travel around to her heavy chest, groping her bouncing tits through her skimpy red dress. The blonde bimbo in front of her continues blabbering as if nothing was happening, her friend was getting her tits massaged in front of her while having anal sex and no one in the bar is any the wiser.");
			writeBig("images/bracelet/outdoor4-3.gif");
			writeSpeech("Black Woman", "scripts/gamefiles/none.png", "Jesus! Ah, god! Yes, fuck…!");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Damn, I had no idea it was so bad. I could always try to find you a new position at my place?");
			writeText("It was easy to tell that the girl you were fucking was starting to enjoy it… well, easy for you. To the rest of the bar, she just seemed like an over-worked office girl loudly voicing her stress out. With your balls churning, you grab the blonde and roughly pull her to the ground to blow your load on her face.");
			writeBig("images/bracelet/outdoor4-4.gif");
			writeText("After you finish coating the unaware blonde with a layer of fresh sperm, you watch in amusement as she stumbles back up to her seat, wiping the gooey strings of spunk from her eyes.");
			writeSpeech("Blonde Woman", "scripts/gamefiles/none.png", "Shit, sorry, maybe I've had too much… I can't believe I fell out of my chair in front of everyone.");
			writeText("You head behind the bar and grab a bottle of wine, taking sips right from the bottle like a barbarian as you people-watch and observe the other patrons. After an hour or two you head home for the night.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.patreon.com/swallows999`'>Swallows999</span>");
			break;
		}
		case "braceletDream1": {
			writeText("Visions float through your mind, spinning through your psyche.");
			writeBig("images/bracelet/dream1-1.gif");
			writeText("Familiar faces you've never seen before writhe in barely contained pleasure. The bracelet is on your arm and you're taking advantage of the women who spurned you.");
			writeText("But at the end of a long day you begin your walk home. As you're crossing the street a car doesn't hit the brakes and is headed right for you.");
			writeText("Too late, you realize you'd been invisible to the world.");
			break;
		}
		case "erotiboxResearch1": {
			writeSpeech("player", "", "Now beginning test EB-01, I've got an interview recording with actress Emma Watson.");
			writeText("You place the flash drive with the recordings in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is the same flash drive, untouched.");
			writeSpeech("assistant", "", "Did it work?");
			writeSpeech("player", "", "Dunno. Let's load it up and see what's on it.");
			writeText("...");
			writeBig("images/erotibox/research1-1.gif");
			writeSpeech("player", "", "Whoa, is that really her?");
			writeSpeech("assistant", "", "This is pretty fucked up. Could we make porn of anyone with this thing?");
			writeSpeech("player", "", "Wanna give it a shot? We could use your ID.");
			writeBig("images/erotibox/research1-2.gif");
			writeSpeech("assistant", "", "No wa-Oh wow, she's really getting into it.<br>Wanna do another test? For science?");
			writeSpeech("notes", "", "Findings:<br>The files of the interview were replaced with a detailed, but most likely fake, porn shoot involving Emma Watson.");
			break;
		}
		case "erotiboxResearch2": {
			writeSpeech("player", "", "Now beginning test EB-02, I've got an ordinary clockwork pocket watch, made primarily from silver and steel.");
			break;
		}
		case "erotiboxResearch3": {
			writeSpeech("player", "", "Now beginning test EB-03, I've got a recreation of Leonardo Da Vinci's Mona Lisa.");
			writeText("You place the painting in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/research3-1.jpg");
			writeSpeech("player", "", "Well, uh...");
			writeSpeech("assistant", "", "I like it better this way, actually. I thought it'd be more erotic though.");
			writeSpeech("player", "", "Yeah... Uh huh...");
			writeSpeech("assistant", "", "You alright?<br>Shit! Is it memetic? What's your name?");
			writeText("You're lost in the painting. Something about it... The hands are...");
			writeBig("images/erotibox/research3-2.gif");
			writeText("You can't look away, the voices around you are growing more faint.");
			writeSpeech("assistant", "", "Security! Security! We need a female guard!");
			writeSpeech("notes", "", "Findings:<br>The painting was replaced with a stylized painting. Upon looking at it, male subjects would become distracted. After being separated from the painting they return to normal, and claim they remember receiving a 'divine' hand job from an unknown woman.");
			break;
		}
		case "erotiboxResearch4": {
			writeSpeech("player", "", "Now beginning test EB-04, I've got a chessboard made from wood and ivory.");
			writeText("You place the board in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeBig("images/erotibox/research4-1.jpg");
			writeSpeech("assistant", "", "Well, that's a bit tasteless.");
			writeSpeech("player", "", "We're both adults here, we can handle some nudity. Wanna play?");
			writeText("...");
			writeSpeech("assistant", "", "And... And that takes your bishop... Ngh...");
			writeSpeech("player", "", "And... Here.");
			writeSpeech("assistant", "", "Shhhhame the board doesn't have any special effects, huh?");
			writeSpeech("player", "", "Yeah. Thats... That's checkmate.");
			writeBig("images/erotibox/research4-2.gif");
			writeSpeech("assistant", "", "Aaah~! Cumming~!");
			writeSpeech("notes", "", "Findings:<br>The chessboard and pieces were replaced with a version of chess using highly sexualized versions of the pieces. Upon reviewing the footage, it becomes clear that players unknowingly begin to have sex with each other during the game, their ability in the game deciding how dominant they are during the sex. Upon checkmate, both players will climax.");
			break;
		}
		case "erotiboxResearch5": {
			writeSpeech("player", "", "Now beginning test EB-05, I've got twenty dollars in American single dollar bills.");
			writeSpeech("assistant", "", "I wonder if it'll be like, a sexy George Washington.");
			writeText("You place the bills in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is...");
			writeSpeech("player", "", "They haven't changed?");
			writeSpeech("assistant", "", "What? Aw man, that's lame. Hey, what're you doing?");
			writeSpeech("player", "", "I mean, they're singles. Kinda feels like they were made for this.");
			writeText("You toss bills into the air, 'making it rain' over assistantF.");
			writeSpeech("assistant", "", "That's degrading, I'm not going... to...");
			writeText("...");
			writeBig("images/erotibox/research5-1.gif");
			writeSpeech("assistant", "", "You like that, big boy?");
			writeSpeech("player", "", "Y-yeah, I like it...");
			writeSpeech("assistant", "", "You wanna go all the way? Just a little more for me, baby.");
			writeBig("images/erotibox/research5-2.gif");
			writeSpeech("player", "", "But... But I'm out of bills...");
			writeText("With that, assistantF's eyes light up in confusion and anger. She's baffled for a second as she looks around, before she slaps you in the face and covers herself with her arms.");
			writeSpeech("notes", "", "Findings:<br>The bills were replaced with a visually identical set of bills, titled 'Stripper Money' by researcher playerL. When thrown in the air above someone's head, that person will begin to put on a strip show. The length of this show and the energy of the stripper is determined by how quickly the money is thrown, until the thrower runs out of bills.");
			break;
		}
		case "erotiboxResearch6": {
			writeSpeech("player", "", "Now beginning test EB-06, I've got a plastic bottle filled with tapwater.");
			writeText("You place the bottle in the box, then shut the front gate.");
			writeText("Within seconds a bright purple light illuminates the room, before quickly dying down again.");
			writeText("Inside the box is the same bottle, but the water inside seems to be colored slightly pink.");
			writeSpeech("assistant", "", "Huh. My favorite color. So, how do we test it?<br>Fuck you, you aren't going to make me drink it, are you?");
			writeSpeech("player", "", "I would never do such a thing.");
			writeText("...");
			writeText("You do such a thing, putting some into her coffee while and hiding it using the bracelet.");
			writeSpeech("assistant", "", "Aaah~!");
			writeBig("images/erotibox/research6-1.gif");
			writeSpeech("assistant", "", "G-gawd, I can't... Ohmigawd! Fuck meeee~!");
			writeBig("images/erotibox/research6-2.gif");
			writeSpeech("notes", "", "Findings:<br>The water inside the bottle was replaced with a highly arousing fast-acting aphrodisiac. Upon drinking subjects nearly immediately experience a massive drop in intelligence and vocabulary, ending with the subject becoming a 'squirting mess' as researcher playerL described it.");
			break;
		}
		case "erotiboxResearch7": {
			writeSpeech("player", "", "Now beginning test EB-07, I've got a plastic buttplug made of plastic, ordered online.");
			break;
		}
		case "erotiboxResearch8": {
			writeSpeech("player", "", "<span id='ero10'>Now beginning test EB-08, I've got a uh...</span>");
			writeText("<span id='ero9'>You look over to assistantF.</span>");
			writeSpeech("assistant", "", "<span id='ero8'>Are you gonna put in your clipboard? We could use that flowerpot too if you want.</span>");
			writeText("<span id='ero7'>You use the bracelet to push assistantF into the box without her realizing what's happening.</span>");
			writeSpeech("player", "", "<span id='ero6'>Here's hoping this goes well.</span>");
			writeSpeech("assistant", "", "<span id='ero5'>Huh? Here's hoping what-<br>Wait, what? What're-</span>");
			writeText("<span id='ero4'>The bright purple flash is blinding, it's way more bright than usual, and lasts for almost half a minute before the light dims and assistantF steps out.</span>");
			writeText("<span id='ero3'>You can hear an alarm go off and the door clicks behind you, but...</span>");
			writeBig("images/erotibox/research8-0.jpg");
			writeText("<span id='ero1'>There's a scent in the air... It's intoxicating. Rescue is coming, but...</span>");
			document.getElementById('output').innerHTML += `
				<p style='color:red'>You have no choice but to take a breath</p>
			`;
			writeText("Pheromones fill the air, a single lungful has you broken.");
			writeBig("images/erotibox/research8-1.gif");
			writeSpeech("assistant", "", "Come here... Come to me...");
			writeText("You can't control your body.");
			writeSpeech("player", "", "I... I need to...");
			writeBig("images/erotibox/research8-2.gif");
			writeText("She is a machine, hungrily slurping on your balls.");
			writeText("Memories are fading away, nothing matters any more.");
			writeBig("images/erotibox/research8-3.gif");
			writeSpeech("assistant", "", "Yes! Fuck me! Worship me with your cock!");
			writeSpeech("player", "", "Cumming! I'm cumming again for you!");
			writeBig("images/erotibox/research8-4.gif");
			writeText("Her thirst is unending, you've already given her all you have but she wants more.");
			writeSpeech("assistant", "", "More! Harder! Break me!");
			writeSpeech("player", "", "I can't... I can't cum any more... I don't have any-");
			writeText("She grabs you by the chin and stares into your eyes.");
			document.getElementById('output').innerHTML +=`
			<div class = "textBox">
				<img class = "textThumb" src = "scripts/gamefiles/profiles/assistant.jpg">
				<p class = "textName">`+ data.story[0].fName + `</p>
				<p style='color:red'>Cum. Now.</p>
			</div>
			<br>
			`;
			writeBig("images/erotibox/research8-5.gif");
			writeText("...");
			writeText("You wake up in the hospital wing, you don't know how much time has passed.");
			writeText(assistantF+" was fine, there's an artifact here that can undo any changes.");
			writeText("Luckily, the bracelet can allow you to sweep all this under the rug, but you came dangerously close to a very bad ending for yourself.");
			break;
		}
		case "gasResearch": {
			break;
		}
		case "gasResearch1": {
			writeSpeech("player", "", "Now commencing research on the dark vault artifact A-05-99, aka Exchange Gas.");
			writeSpeech("assistant", "", "Good luck!");
			writeText("Her voice is a bit staticy through the speaker. These items are more dangerous than the usual artifacts you deal with, so you don't have the authority to force assistantF to work with you. Not to mention all the cameras in the testing bay, the trackers, and the security guards outside the giant metal door.");
			writeText("But if this works properly, all this hassle should be worth it, even if the gas's effects are temporary.");
			writeText("You pull the pin on the gas grenade and toss it away from you. Soon the mixed pink and blue cloud of gas fills the room.");
			writeText("It isn't hard to breath like you expected, but a different problem soon arises as you double over.");
			writeSpeech("player", "", "Ggghg, gaaagh!!");
			writeSpeech("assistant", "", "Are you okay? Can you hear me?!");
			writeText("The vents activate, but that's secondary to you right now. Right now you're in... pain?");
			writeText("It hurt at first, but it feels like your mind is being filled with cotton. The pain is soon gone, and so is your vision. You can hear fabric tearing and dissolving before that goes out too.");
			writeText("...");
			writeSpeech("gasF", "", "Mmm... What-");
			writeBig("images/gas/research1-1.gif");
			writeSpeech("gasF", "", "Oooh~!");
			writeText("The gas worked, your entire body has been changed!");
			writeText("Thousands of new nerves are sending electric signals through your body.");
			writeSpeech("gasF", "", "Nnngh... Not enough, I need more...");
			writeText("You get up and walk naked out of the recovery room, the bracelet keeping you hidden from any unwanted eyes. The air on your new naked body has you tingling all over as you make your way towards your office.");
			writeText("...");
			writeBig("images/gas/research1-2.gif");
			writeSpeech("gasF", "", "*Mwah*!<br>Mmm... It's still not enough. How does roommateF manage all day?");
			writeText("The female orgasm isn't quite what you'd imagined. It's like a pleasant buzz flowing through your body, and it lasts a lot longer than your old ones did. You've been jilling off while making out with assistantF for a while now, it's probably time to finish up. The gas's effects won't last much longer since you got such a small dose.");
			writeText("...");
			writeBig("images/gas/research1-3.gif");
			writeSpeech("gasF", "", "Mmm~! They feel so nice!");
			writeText("You enjoy a nice shower until the effects wear off. Just like before it starts with a pain, then a mind-wiping fuzz, then blackness until you wake up again in your old body.");
			writeSpeech("player", "", "That was pretty fun. I should be careful not to go too far though.");
			break;
		}
		case "gasResearch2": {
			writeSpeech("player", "", "Now commencing research on the dark vault artifact A-05-99, aka Exchange Gas.");
			writeSpeech("assistant", "", "So, it won't hurt too much right? You looked awful last time...");
			writeSpeech("player", "", "It's perfectly safe, I went back to normal, right? Besides, you volunteered.");
			writeSpeech("assistant", "", "<i>Only because you wouldn't stop talking about how fun it was...</i>");
			writeSpeech("assistant", "", "Y-yeah, I guess...");
			writeText("You pull the pin on the gas grenade and toss it away from you. Soon the mixed pink and blue cloud of gas fills the room.");
			writeText("This time, the mind-fuzz hits you before the pain does. You tip over, but manage to catch yourself.");
			writeSpeech("assistant", "", "Aaah! Aaagh!");
			writeText(assistantF+"writhes on the ground as your vision blinks in and out, your body changing more and more between each short blackout.");
			writeText("Your clothes have torn apart and dissolved, and within moments you're in your new body. The vents kick on and the gas clears up.");
			writeText("But assistantF is still writhing on the ground. The process must be slower for women. Her clit has grown at least three inches, and her pussy is spasming open and closed.");
			writeText("Her back arches as she thrusts her hips in the air, trying to push something out.");
			writeSpeech("assistant", "", "Ghh... Ghhhg!");
			writeText("*POP*!");
			writeText("Her clit has grown into a full sized cock now, and spurts out a jet of clear fluid as two heavy balls plop out of what used to be her vagina, dangling down until she slumps onto the floor.");
			writeText("Over the course of the next few minutes, the rest of her body begins to change to match her new equipment.");
			writeText("...");
			writeSpeech("gasM", "", "It's... It's so...");
			writeSpeech("gasF", "", "Pretty cool right? How's it feel now that you're on the other side?");
			writeSpeech("gasM", "", "It feels pretty damn good. And you... You look...");
			writeText("There's a hunger in her... his? His eyes as he takes in your body.");
			writeBig("images/gas/research2-1.gif");
			writeSpeech("gasF", "", "Somebody's excited.");
			writeSpeech("gasM", "", "Sorry! God, it has a mind of its own.");
			writeSpeech("gasF", "", "Don't be sorry, I look good. Just don't get too curious, the change becomes unstable if we take in DNA from our old gender.");
			writeSpeech("gasM", "", "Right, okay. I wanna go back to normal later. It's just that you look really, really good.");
			writeText("He walks up to you, cock fully engorged.");
			writeBig("images/gas/research2-2.gif");
			writeSpeech("gasF", "", "It sure does look that way. Here.");
			writeText("You grasp her thick, meaty cock in your hands. Is this gay? No, you're a girl now, so this is totally straight of course.");
			writeSpeech("gasM", "", "A-aaah~! Your hand feels really good!");
			writeSpeech("gasF", "", "Y-yeah... You're still a quick shot, huh?<br><i>Holy crap, what is this doing to me? I feel like I could cum just from having this cock swinging in front of my face...</i>");
			writeSpeech("gasM", "", "G-gonna...!");
			writeBig("images/gas/research2-3.gif");
			writeText("You point her cock away from you, your eyes locked on every strand of cum that goes flying through the air.");
			writeText("The electricity running through you right now is a hundred times more intense than it was last time, and you aren't even touching your pussy right now.");
			writeText("This artifact really is dangerous...");
			writeText("...");
			writeSpeech("player", "", "Everything alright?");
			writeSpeech("assistant", "", "Yeah, everything's back to normal. Do... Do you want to test it again?");
			writeText("You don't give an answer. It feels like if you do it again, you might not want to go back.");
			break;
		}
		case "gasResearch3": {
			writeText("The transformation went even smoother this time, you're getting used to this. You didn't even black out.");
			writeText("And the transformation wasn't the only thing that got smoother.");
			writeBig("images/gas/research3-1.gif");
			writeSpeech("gasF", "", "Ooooh~!");
			writeSpeech("gasM", "", "See? And if I put pressure here, I can do this-!");
			writeSpeech("gasF", "", "Nnngh! More~!");
			writeText("But to your dissapointment he pulls his hands away.");
			writeSpeech("gasM", "", "This is the third time you've cum already. You're going to teach me how to do it properly too, right?");
			writeSpeech("gasF", "", "Y-yeah. I'll show you how to cum... I promise.");
			writeText("...");
			writeBig("images/gas/research3-2.gif");
			writeSpeech("gasF", "", "Yes, deeper~!");
			writeSpeech("gasM", "", "Nghh, you're so fucking tight...<br>But we need to stop! We shouldn't be-<br>Oooh~! I can't hold it back!");
			writeSpeech("gasF", "", "Do it! I don't care anymore, cum in me!");
			writeBig("images/gas/research3-3.gif");
			writeText("Hours go by, the two of you lost in an endless sexual frenzy.");
			writeText("As the evening arose, you notice that no one's come in to check up on you, but that doesn't matter. You and assistantF never turned back to normal, but that didn't matter either.");
			writeText("This is the rest of your life, spending everything for the sake of a cock in your twat.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "stopwatchResearch1": {
			writeBig("scripts/gamefiles/items/stopwatch.jpg");
			writeSpeech("player", "", "Alright, now beginning test TS-01. No obvious method aside from pressing the button at the top, so here we go.");
			writeSpeech("assistant", "", "It seems pretty old, ma-");
			writeText("*CLICK*");
			writeSpeech("player", "", "Sorry, what was that?");
			writeText("The room is silent. Dead silent. assistantF is motionless, the ventilation is off, every noise that filled the room stops except for a light ticking.");
			writeText("It seems like time has stopped. The second hand on the stopwatch is moving freely now, and the watch is functional.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-ybe we should clean it first?");
			writeSpeech("player", "", "That was awesome. Here, give it a shot.");
			writeText("You hand the stopwatch to assistantF who meekly accepts it.");
			writeSpeech("assistant", "", "Huh? Oh, sure. Did it work?");
			writeText("*CLICK*");
			writeText("After she clicks the button she's standing in a completely different spot, looking quite excited. You suddenly feel a rush of sensation to your crotch, as if someone rubbed it once or twice very quickly.");
			writeText("...");
			writeSpeech("player", "", "Hmm~ Hmm~ Just one more~");
			writeText("You set down the final piece to your house of cards, the whole of the ensemble atop assistantF's head.");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "Eeeeek!");
			writeText("The cards come tumbling down. An hour of progress falling apart before you, but you got a good reaction out of it so whatever.");
			writeText("...");
			writeText("After about ten full minutes of rubbing a spot on bossL's hand, you decide that that's enough testing.");
			writeSpeech("player", "", "It's so weird for her to be so quiet.");
			writeSpeech("assistant", "", "And so still. She's still intimidating though, even though she can't move.");
			writeText("*CLICK*");
			writeText("As time resumes bossL suddenly pulls back her hand, clutching it.");
			writeSpeech("player", "", "How does it feel?");
			writeSpeech("boss", "", "It... It felt like you spent an hour rubbing it. Why exactly couldn't you have tested this on assistantF?");
			writeSpeech("notes", "", "Findings:<br>When the button at the top of the Time Stopwatch is depressed time stops for everyone except for anyone in direct contact with the stopwatch. Machines cease to function, causing near complete silence.<br>After time resumes, any actions done to someone who has been 'time-stopped' will be felt all at once, creating a sensory overload sensation.");
			break;
		}
		case "stopwatchResearch2": {
			writeSpeech("player", "", "Excuse me, Mrs. bossL?");
			writeText("It's nice that we have a gym here in the facility. What isn't great is how bossL tends to be the reason it isn't used very frequently.");
			writeSpeech("boss", "", "What is it?");
			writeText("bossL is working out. She's got a fantastic body and is a treat to see in her workout pants. The problem is that she's just got such an intimidating aura that most people just try to avoid her.");
			writeText("As one of the top-level supervisors, a single word from her can have you switching departments by the end of the day. Nobody wants to be transferred to the soul-vampire department.");
			writeSpeech("player", "", "Ah, I just had something I wanted to show you. It has to do with the stopwatch.");
			writeSpeech("boss", "", "And it couldn't wait? You really need me to do your job for you while I'm on my brea-");
			writeText("*CLICK*");
			writeSpeech("player", "", "'While I'm on my break?'<br>Good god, you're always on a break. You pick a different time every day, nobody knows when it's safe to...<br>Fuck. I didn't come here to bitch and moan. I'm here to relieve frustration another way.");
			writeText("It's neat to just spend awhile fucking around in the stopped time. As you move her head around, her ponytail swings around as if time were progressing normally. Then when you let go it freezes mid-movement.");
			writeText("You grab her by the throat and you can feel muscles moving instinctively, but her mouth hangs open and her eyes are totally still. It's almost like playing with a doll.");
			writeSpeech("player", "", "Well, don't mind me. Just getting in a... Workout!");
			writeText("You open her mouth a little further, then slide your dick past her lips.");
			writeText("Getting a time-stopped blowjob feels... Different. You can still feel her throat clenching back up after you pull your dick out, but there's no sign of a gag reflex. She's still building up saliva, but her tongue is completely still.");
			writeText("Really, there's only one thing for it. Pummeling her throat like the stress-relief bitch she is.");
			writeBig("images/stopwatch/research2-1.gif");
			writeText("If your research is right, then after you finish she'll feel the entirety of the blowjob all at once when you click the stopwatch again. There's a decent chance she'll actually choke on your cum if you finish in her mouth though.");
			writeText("You pull out. You're just a little too late though, and you end up painting her face.");
			writeText("But you obviously aren't satisfied.");
			writeSpeech("player", "", "Lucky for me you've got another hole~<br>Mr. bossL won't mind will he? Do you think we should stop?");
			writeSpeech("boss", "", "...");
			writeText("The silence answers your question for you. You begin getting her out of her clothes.");
			writeText("Her mouth still open and her eyes still mid-blink, you push her down to the ground and push her legs against her shoulders.");
			writeText("It's strange seeing her muscles clench, but if they couldn't it'd be like trying to pose a statue. Really, the more interesting reflex is...");
			writeSpeech("player", "", "Holy shit! You're wet! It's like a faucet down here. Mr. bossL not satisfying you anymore?");
			writeSpeech("boss", "", "...");
			writeSpeech("player", "", "Poor bitch. Well, I do owe you for everything you've done for me!");
			writeBig("images/stopwatch/research2-2.gif");
			writeSpeech("player", "", "Fuck yeah! Take it! I should drag your ass down the office, leave you in the hallway with a cum-covered face and unfreeze time!");
			writeText("With your hate-powered boner you put her in here place. The only sound in the entire world right now is the sound of flesh on flesh.");
			writeBig("images/stopwatch/research2-3.gif");
			writeText("And you finish with a creampie. You can erase her memory of this with the bracelet, and she'll be leaving work today with your cum in her snatch.");
			writeText("*CLICK*");
			writeSpeech("boss", "", "k-NGGGHHhhH~!");
			break;
		}
		case "stopwatchResearch3": {
			writeSpeech("player", "", "Thanks again for volunterring to test this with me.");
			writeSpeech("assistant", "", "It's fine. You don't really need my permission, you know?");
			writeSpeech("player", "", "Yeah, but this'll be more fun knowing you wanted this.");
			writeSpeech("assistant", "", "Wanted what? H-hey, don't get any-");
			writeText("*CLICK*");
			writeSpeech("player", "", "Alright, research log TS-02. Time to test this thing's limits.");
			writeText("...");
			writeBig("images/stopwatch/research3-1.gif");
			writeSpeech("player", "", "Two hours into the test. She's still getting wet, and is showing no signs of dehydration or abrasion. She hasn't cum yet, it seems like orgasms all happen at once, and only when time resumes.");
			writeText("...");
			writeBig("images/stopwatch/research3-2.gif");
			writeSpeech("player", "", "Three... Ngh... Three hours into the test. Still no orgasm reaction, although I've already cum a few times with her ass. This is my fourteenth round, and I've started taking breaks and having snacks between them to avoid exhaustion.");
			writeText("...");
			writeBig("images/stopwatch/research3-3.gif");
			writeSpeech("player", "", "This makes hour number fifteen, I went to sleep earlier so the time might be off. I'm on the... Uh... Fifty second round of sex. I'm starting to wonder if she'll break after I resume. I figure if she can take fifty, fifty one should be fine too, right?");
			writeText("...");
			writeSpeech("player", "", "Happy birthday to you~ Happy birthday to you~ Happy birthday dear assistantF, happy birthday to you~.<br>I decided to give her a break for today. I think this is hour seventy-two? The clock only goes from one to twelve.");
			writeText("...");
			writeBig("images/stopwatch/research3-4.gif");
			writeSpeech("player", "", "Ghh... Ahh... Alright. That's an even three hundred. Got the restorer right here in case she actually breaks from this. Gotta get clothed... And...");
			writeText("*CLICK*");
			writeSpeech("assistant", "", "-Thi-");
			writeText("Her word stops behind clenched teeth, you expected a scream. Instead she seizes up as her back arches, hundreds of orgasms firing through her body at once. Her cunt and womb clench around three hundred loads of your jizz that weren't there before.");
			writeSpeech("player", "", "Oh fuck! Fucking hell, no!");
			writeText("It turns out that the recorder didn't work in the stopped time.");
			writeSpeech("player", "", "Fuck, we'll need to do it again. I'll get a notepad, you want a sandwich or anything?");
			writeSpeech("assistant", "", "...");
			writeText("Once all the seizing and squirting has stopped she flops onto the floor, twitching occasionally as she squirts again.");
			break;
		}
		case "stopwatchHome1": {
			writeText("You decide to follow " +roommateF+ " to the university she works at. It's loud and there are just way too many people rushing by in a hurry to make it to class.");
			writeText("*CLICK*");
			writeText("And now it's quiet.");
			writeText("It doesn't take too long to find " +roommateF+ "'s office. She's in a meeting with a student, and an evil idea crosses your mind.");
			writeText("...");
			writeBig("images/stopwatch/home1-1.gif");
			writeText("Once you're finishing groping her breasts, you slide her clothes back on, head back out to the hallway, and...");
			writeText("*CLICK*");
			writeSpeech("roommate", "", "-lookinggggh~");
			writeSpeech("Student", "none", "Professor? Are you alright? That's the third time now...");
			writeSpeech("roommate", "", "I... I'm fine. As-");
			writeText("*CLICK*");
			writeText("And you're right back at it. Slowly, you're pushing her closer and closer to the edge.");
			writeBig("images/stopwatch/home1-2.gif");
			writeText("Playing with her, teasing her over the course of an hour. Stopping and resuming often enough that she has time to adjust and cool down so that she never quite hits n orgasm.");
			writeText("*CLICK*");
			writeSpeech("roommate", "", "-I wassss~!<br>Was... Saying...");
			writeText("...");
			writeText("After the student leaves you keep teasing her until she finally starts to break.");
			writeText("Hours of slowly teasing her finally pay off as she reaches down into her panties and starts trying to cum, desperate for some release.");
			writeText("*CLICK*");
			writeText("And then you start to subtly push her. Sliding her clothes off further, putting her into more erotic poses. Soon enough she's naked and stroking her clit while standing in front of the door.")
			writeText("*CLICK*");;
			writeSpeech("roommate", "", "Ghh... Wha-? How did I...? F-fuck it... Need to cum...");
			writeBig("images/stopwatch/home1-3.gif");
			writeText("Everything is going according to plan, and hours of teasing are about to pay off. Someone begins knocking on her door as she rubs her cunt. If the door were to open, she'd totally exposed in the middle of the room.");
			writeText("She panics, and goes to put her clothes on, but another time stop and some teasing puts a stop to that.");
			writeText("The door opens as the person begins to worry about her stifled moans.");
			writeSpeech("Student", "none", "Excuse me, is ever-");
			writeSpeech("roommate", "", "C-cumming~!");
			writeBig("images/stopwatch/home1-4.gif");
			writeSpeech("roommate", "", "I'm sorry~!<br>I c-can't stop~!");
			writeText("Her pussy completely exposed, the student has just walked in on his professor openly pleasuring herself, naked, her cunt facing the door.");
			break;
		}
		case "stopwatchHome2": {
			writeSpeech("roommate", "", "Ethics isn't something you'll use in daily life, it's-");
			writeText("*CLICK*");
			writeText("You are genuinely impressed. She's already back to work, you didn't even need to erase any memories to avoid creating a scene after last time.");
			writeText("*RIIIIP*");
			writeText("But you aren't here to be impressed by roommateF's strength of character. You can handle any potential fallout, it's time to enjoy yourself.");
			writeText("It takes a bit of finagling, but you strip roommateF and get her into a half-decent position.");
			writeBig("images/stopwatch/home2-1.gif");
			writeText("The classroom is silent except for the sounds of you railing the teacher. Every student watches with blank expressions as their teacher is fucked mid-word.");
			writeText("But it isn't enough. You drag roommateF to an even more visible spot. You put her down onto a couch where you're surrounded by her frozen colleagues and students.");
			writeBig("images/stopwatch/home2-2.gif");
			writeText("You can live a live free of responsibility with the bracelet and the stopwatch together. The springs of the couch squeak as you slam into roommateF's cunt in a position called the 'Mating Press'.");
			writeBig("images/stopwatch/home2-3.gif");
			writeText("You can feel yourself cumming inside her, she'll feel all this stimulation all at once when you're finished.");
			writeText("But you aren't done yet. You have all the time in the world to enjoy yourself.");
			break;
		}
		case "stopwatchOutdoor1": {
			writeText("'Sharking' was a popular fetish for a while, it involved forcibly stripping people on the streets. With so much potential for being caught it's died down these days.");
			writeText("But with a time-stoping artifact you can do a lot better a lot more safely. Why stop with just pulling a dress down when you can lift up a woman's top, tear off her bra, and restart time with her tits hanging out?");
			writeBig("images/stopwatch/outdoor1-1.gif");
			writeSpeech("Woman", "none", "And I-Aaaah!");
			writeText("And you get a fantastic reaction every time. The panicky ones are the best. One moment someone's having a lovely conversation, then CLICK!");
			writeBig("images/stopwatch/outdoor1-2.gif");
			writeText("They're suddenly flashing their ass and pussy to a stranger on the street, desperately trying to pull down their dress and wondering where their underwear went.");
			writeText("There's a lot of fun to have here. Some women don't realize it at first, they're confused why everyone's staring at them. Some just notice a light breeze as they cross the street bottomless.");
			writeText("But the best reactions are after you put time and effort into posing them. Sure, a woman's clothes simply vanishing? That'd give them some credibility.");
			writeText("But when their hands are pulling apart their shirts, when they suddenly find themselves jutting out their chests to show their bare breasts to the world?");
			writeBig("images/stopwatch/outdoor1-3.gif");
			writeText("All they're seen as are perverts.");
			break;
		}
		case "stopwatchDream1": {
			writeText("As sleep takes you, you suddenly feel free of heavy shackles.");
			writeText("Freedom is in your hands after many long years of struggle. You have a chance for revenge, for justice, for a life where you can take as you please.");
			writeBig("images/stopwatch/dream1-1.gif");
			writeText("Some women are scared, but most revel as you appear and dissapear without warning from their lives.");
			writeText("No place is safe should you desire access. Any threat that comes your way is a matter of time to deal with. And you have all the time in the world.");
			writeBig("images/stopwatch/dream1-2.gif");
			writeText("But at one point you made a mistake. All the power in the world, and you are your own worst enemy.");
			writeText("The stopwatch slips from your grasp and tumbles down into the ocean. The world around you is still frozen.");
			writeText("...");
			writeText("Fifty long years have passed, your body is old and frail. But you've finally found it and taken it from the ocean's depths. Once the button is pressed, the world will spin again. No one will remember you. Your whole life has gone by in the space between two seconds.");
			writeText("*CLICK*");
			break;
		}
		case "mirrorResearch1-1": {
			writeText("As you pass through the mirror you realize that your balance is off. You take a moment to inspect yourself.");
			writeText("In this dimension you're shorter, standing at only five-foot six. Your body is much more toned and lithe, but you're still pretty visibly a guy. You could probably pass for a 16 year old here.");
			writeSpeech("player", "", "So, this is-");
			writeSpeech("assistant", "", "Another reality, yeah. Listen honey, we need to set some ground rules first.");
			writeText(assistantF+" is writing something on a clipboard as she approaches you. Her outfit is more reserved as she has a more confident stance.");
			writeSpeech("player", "", "I think I can-");
			writeSpeech("assistant", "", "First off, this is our thirty-second attempt into dimension exploration. There's no contamination risk, just be sure to keep your actions under wraps.<br>Second off, your bracelet won't work here. Our playerF confessed to stealing it, and we've neutralized its power in this dimension.");
			writeText("It's true. Her eyes follow your body even if you don't want to be seen.");
			writeSpeech("assistant", "", "Our playerF is getting briefed over there just like you are. You're authorized to explore at your leisure, just be sure to follow common standards and not reveal any Anomaly Vault secrets.");
			writeText("It seems like in this dimension assistantF is a lot more confident, and more than a little disrespectful. Without the bracelet you don't have a lot of control over the situation.");
			writeText("You spend the next few hours being briefed on this dimension's details.");
			writeSpeech("notes", "", "Findings:<br>In this dimension gender dynamics, as in the attitude that men and women have towards each other is reversed and heavily exaggerated. Women are considered the dominant gender, while men are viewed to be naturally more submissive. <br>Women are expected to be the breadwinners, to lose their virginity to be considered an adult, and to be able to take charge of the situation.<br>Men are to stay home and to be accepting of sexual harassment.<br>Most notably, the scales are tipped further in a woman's favor than even your world's 1920s. Rape isn't even considered an offense so long as no other crime, like violent assault or pedophilia, are committed.");
			writeText("Without the bracelet in this dimension, you could be in trouble here. You'll be pulled out whenever the playerF of this world touches the mirror though, so you'll never be trapped.");
			break;
		}
		case "mirrorResearch1-2": {
			writeText("It's pretty weird just walking around the city, you almost feel like a piece of meat, to use a cliche.");
			writeText("But for real, you're pretty glad that most people in this dimension are good-looking. The stares actually feel nice coming from all these attractive women.");
			writeText("Although one is a bit... persistent. She forgot to turn the shutter noise off on her phone, and she's been following you for the last block snapping pictures.");
			writeText("You manage to rush onto a train just as its about to depart, a well-dressed woman holds the door for you.");
			writeText("The doors close and you find a seat pretty easily. The woman stalking you realizes she was too late, and actually throws her phone down onto the ground in frustration.");
			writeSpeech("player", "", "Geez, dodged that crazy bullet.");
			writeSpeech("girlfriend", "", "Oh yeah?");
			writeText("The woman who held the door for you takes a seat next to you. It's girlfriendF! You must have been in a rush and didn't recognize her at first.");
			writeText("But it seems like she doesn't recognize you in this dimension, so it's best to play dumb.");
			writeSpeech("player", "", "Yeah. She was follo-.");
			writeSpeech("girlfriend", "", "Shhh. I help you, you give me something in return that's fun for both of us.");
			writeText("Your confused for a second until she puts her hand on your crotch, then you're just conflicted.");
			writeSpeech("player", "", "<i>Well, she is hot... And I don't need to worry about any danger since I'll be pulled out eventually... What the hell.</i>");
			writeText("You decide to put up a little fake resistance as your crotch is unzipped. A 'nooo~...' here, a 'but we're in public...' there.");
			writeText("But as time passes, it's clear to her that you're enjoying yourself.");
			writeText("With everyone else riding public transit, you almost feel like you're being watched by everyone around you. But you relax into the stimulation, and soon enough...");
			writeBig("images/mirror/research1-2-1.gif");
			writeText("You're cumming onto her hand, she's taking a great deal of satisfaction wringing everything she can out of you.");
			writeSpeech("girlfriend", "", "It was nice meeting you. This is my stop.");
			writeText("She hangs around long enough to give you a chance to hide your dick before she leaves. Inside your pocket you find a small piece of paper with her number on it.");
			writeText("But before your eyes reality begins to shimmer, you're being sent back to your reality.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-3": {
			writeText("You opted to go see a movie. Luckily a big-named superhero movie is still showing. It's a bit of a ripoff, there really wasn't infinite war, just like three hours of it.");
			writeText("Most people liked it, a lot of the conversation is dominated by groups of women, or women trying to explain seventeen movies worth of backstory to their boyfriends.");
			writeText("Some people were a little angry, saying things like 'how come the only male avenger dies'? Or 'Did you hear they're making Sif a man? Just make new male characters instead of genderswapping women!'");
			writeText("It's a bit overcast outside, but the walk back to the facility is still cool and pleasant. You're taken out of your train of thought when you notice that a woman wearing a hoodie has been following you for a few minutes now.");
			writeText("Another woman in a hoodie steps out of an alleyway in front of you, leaving you surrounded.");
			writeSpeech("gym", "", "Hey mister, you wanna have some fun?");
			writeText("It's "+data.story[6].fName+", she works at a gym in your dimension. With the body you have in this dimension, there's no way you can take them.");
			writeSpeech("player", "", "... Fuck it, why not. I've got some time to kill.");
			writeText("She's happy to hear this, but you regret your choice when the woman behind you suddenly grabs your arms and "+data.story[6].fName+" pulls a cloth out of her pocket, alongside a bottle of fluid.");
			writeSpeech("player", "", "Okay, now hold on ju-Mmmph!");
			writeText("The cloth has a damp, slightly sweet smell to it.");
			writeText("...");
			writeSpeech("player", "", "Mmm...<br><i>Fuck, my head... How long was I out? Am I gagged?</i>");
			writeBig("images/mirror/research1-3-1.gif");
			writeSpeech("gym", "", "Remember girls, mouths only!");
			writeText("Several woman are crowded around your crotch, some of them pushing at each other to kiss and suck at your head. your arms and legs are bound down to a table.");
			writeSpeech("player", "", "Mmmph~<br><i>Is this some sort of sex dungeon? Do we have these in my dimension?<br>No, probably not. Thank god they didn't want to take my kidneys. Now, how do I get-ooou~</i>");
			writeBig("images/mirror/research1-3-2.gif");
			writeSpeech("gym", "", "The show is starting in a few minutes, get your fill before then but stop before he cums.");
			writeText("Your balls feel packed and sore, they must have been at this while you were out. But all too soon "+data.story[6].fName+" starts pulling them away, wearing some kind of domanatrix gear.");
			writeText("The woman who were sucking you off obediently back away, a hungry look in their eyes as "+data.story[6].fName+" picks up a fleshlight from a nearby table.");
			writeSpeech("gym", "", "Now, are you sluts ready for the show?");
			writeText("The crowd cheers and whoops as "+data.story[6].fName+" slowly slides the fleshlight down your cock.");
			writeSpeech("gym", "", "Look at him squirm... Men like to pretend they're above it all, but they get horny just like we do.");
			writeText("Despite being trapped, you'll have a way out once your double goes back through the mirror. You opt to just enjoy the treatment as "+data.story[6].fName+" picks up the pace.");
			writeBig("images/mirror/research1-3-3.gif");
			writeText("But then suddenly she stops and pulls the fleshlight off.");
			writeSpeech("gym", "", "Now, whenever a man cums, remember that his dick will shrink a little. Always ruin his orgasm if you want him to have a big dick forever.");
			writeSpeech("player", "", "MMmmph!<br><i>That's not fucking true! Let me cum you biii~</i>");
			writeBig("images/mirror/research1-3-4.gif");
			writeText(""+data.story[6].fName+" massages your balls in her hand. Even without touching your shaft, the hours of teasing while you were out and the feeling of being so close are enough to push you over the edge.");
			writeText("There are squeals from the crowd as your eyes roll back. You can hear "+data.story[6].fName+" say something and then you feel tongues running along your abdomen licking up the cum.");
			writeSpeech("gym", "", "And, while it's less satisfying to him, ruining an orgasm means that there's no cooldown period. He's ready to go again right away!");
			writeText("You feel drained, but she is right on that note. You still feel like you're ready to burst and the fleshlight show continues.");
			writeText("...");
			writeSpeech("gym", "", "Now, don't go anywhere okay little mister? I'll take good care of you so you can be our star again tomorrow.");
			writeText("Once the show is over "+data.story[6].fName+" leaves to go get cleaned up, and reality around you starts to blur. Your double is using the mirror, pulling you back into your dimension.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-4": {
			writeSpeech("player", "", "Scotch please. Make it a double.");
			writeSpeech("Bartender", "none", "You sure you can handle it, sir?");
			writeSpeech("player", "", "I think I know my limits, thanks.");
			writeText("...");
			writeText("You did not know your limits. Male bodies in this dimension must be much worse at handling liquor. You underestimated how trashed you'd get since the glasses were smaller than you're used to.");
			writeSpeech("player", "", "Ghhhg... Sorry about this...");
			writeSpeech("librarian", "", "No problem, don't worry about it. Do you live somewhere around here?");
			writeText("A nice lady opted to help you out, she looks kind of familiar.");
			writeText("But now you have a problem. You have no idea where you live in this dimension, and you can't exactly take a public taxi to Anomaly Vault. So, you think a little outside the box.");
			writeSpeech("player", "", "Hey, wanna fuck? We can go back to your place.");
			writeSpeech("librarian", "", "Hah! Hehe, uh...<br>Oh, uh... I think that's just the alchohol talking. Can I call you a taxi?");
			writeSpeech("player", "", "Nah, I've got nowhere to go. I think I saw a bench down the block, you can leave me there if you want.");
			writeSpeech("librarian", "", "Funny guy.<br>You really have nowhere to go? You can come back to my place if you need somewhere to stay for the night.");
			writeText("...");
			writeText("The next few moments are sort of a blur. You passed out on her floor, but wake up in a still-drunk groggy haze.");
			writeBig("images/mirror/research1-4-2.gif");
			writeSpeech("player", "", "Mmmgh... Ggh~");
			writeSpeech("librarian", "", "Mmm~! You're so big!<br>Walking around in clothes like that, getting drunk without anywhere to go. You really were asking for this, weren't you?");
			writeBig("images/mirror/research1-4-1.gif");
			writeSpeech("librarian", "", "Aaaah~!<br>Aah, I can't get enough of that-");
			writeText("Reality starts to get blurry. Well, more blurry than it was before. Your double must be using the mirror.");
			writeSpeech("librarian", "", "W-What's going on? I'm sorry!");
			writeText("As you phase out of reality, you can't help but think that this must be a really strange circumstance for her. Within seconds, you're gone without a trace and standing in front of the mirror in your own dimension again.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch1-5": {
			writeText("You decide to take a stroll around the red light district. It's a different atmosphere than you're used to, it almost feels like you could get attacked at any time. You wouldn't be able to fight someone off, so you're a little on edge.");
			writeText("Standing on the side of a street is a pretty twinky looking guy, leaning against a wall and taking a drag from a cigarette.");
			writeText("If you squint he could pass for 16, but upon closer inspection he's got thick bags under his eyes and his hands are shaking a little.");
			writeSpeech("Streetwalker", "none", "You need something?");
			writeText("You keep walking. Something about that guy just screams wrong.");
			writeText("You're ready to start headed home, this place wasn't built for people like you to have fun. Most of the shops are advertising fit trappish-looking men in briefs.");
			writeText("That is, until you see someone familiar.");
			writeSpeech("player", "", "Holy shit...");
			writeText("Standing in front of one of the seedier looking shops is roommateF! She might not know you in this dimension, so you'll need to keep it subtle.");
			writeSpeech("player", "", "Enjoying the view?");
			writeText("She jumps and turns around.");
			writeSpeech("roommate", "", "I-I was, uh<br>I was just-");
			writeSpeech("player", "", "Don't worry about it, I don't judge. Care for some company?");
			writeSpeech("roommate", "", "It's... I, uh...");
			writeText("...");
			writeText("The two of you spend some awkward moments trying to get a conversation started. Once she's done having a panic attack the two of you talk while walking down the street.");
			writeText("She doesn't recognize you, and it doesn't seem like she's a teacher in this dimension either. You spend a bit of time asking questions until she suddenly stops.");
			writeSpeech("roommate", "", "So-so, you're a uh... You're a... <span style='font-size: 30%'>prostitute?</span>");
			writeSpeech("player", "", "Uhh... Yeah sure, why not. You interested?");
			writeText("Her voice is a whisper now, and she looks around as if feeling judged.");
			writeSpeech("roommate", "", "It... It's my first time. I don't know how much-");
			writeSpeech("player", "", "Twenty bucks.");
			writeSpeech("roommate", "", "T-twenty!?");
			writeText("...");
			writeSpeech("roommate", "", "S-so we're really doing this? For as long as I want for just $20?");
			writeSpeech("player", "", "I mean, I could put my clothes back on.");
			writeSpeech("roommate", "", "No! No, I can do this.<br><i>Is this really happening? $20 is way too cheap, there must be something wrong, but...<br>God he's so hot. And he's taking his clothes off...</i>");
			writeText("She goes quiet once your pants are off.");
			writeBig("images/mirror/research1-5-1.gif");
			writeSpeech("roommate", "", "<i>Aahh~! This is it! This is what I needed...<br>It's so salty... This is what kept me distracted through school... I just want more of this...</i>");
			writeText("She does one long lick from balls to tip and lets out a shuddering breath.");
			writeSpeech("player", "", "You cum already?");
			writeSpeech("roommate", "", "Mmm...~<br>A-ah! Sorry! I can go... I can go again.");
			writeText("You lay back on the bed, giving her a chance to get ready while you relax.");
			writeSpeech("player", "", "Take as long as you need. I'm still hard, so-<br>Oh? Wow, you don't take very long to recuperate.");
			writeSpeech("roommate", "", "I've always... Had a really high drive-<br>Aaah~!");
			writeBig("images/mirror/research1-5-2.gif");
			writeSpeech("roommate", "", "It's here! This is it!");
			writeSpeech("player", "", "Y-Nnng, you're tight.<br>You're a woman now, huh?");
			writeSpeech("roommate", "", "N-not yet! We aren't-Nggh~");
			writeSpeech("player", "", "We almost are... I'm gonna cum soon.");
			writeSpeech("roommate", "", "Ah~! Do it inside!");
			writeBig("images/mirror/research1-5-3.gif");
			writeSpeech("roommate", "", "Cumming~!");
			writeText("And just like that the world begins to blur.");
			writeSpeech("player", "", "Ah, shit. Out of time.");
			writeSpeech("roommate", "", "W-wait, what? What's going on? Why do you look so-");
			writeSpeech("player", "", "Sorry, I gotta go now. Go get that teaching degree, alright?");
			writeText(" Within seconds, you're gone without a trace and standing in front of the mirror in your own dimension again. You've left her panicked look behind, hopefully she'll be alright.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-1": {
			writeText("As you're pulled through the mirror you suddenly feel very exposed. Looking down, you can see that your clothes have disappeared.");
			writeText("On instinct, you move to cover yourself and feel more than a little panicked. That fades once a familiar face comes up to you.");
			writeBig("images/mirror/research2-1-1.jpg");
			writeSpeech("assistant", "", "Hi! Welcome to our dimension, my name is assistantF.");
			writeSpeech("player", "", data.player.fName+". Um...");
			writeSpeech("assistant", "", "Ah, right, sorry. Here you go.");
			writeText("She tosses you a thin-looking bathrobe and you put it on just to have something to wear. It barely covers anything, the hem only going down your thigh. Not only that, but despite it being so thin it feels warm and stuffy.");
			writeText("Looking around you can see that a number of technicians, mostly those working with dangerous tools, are wearing labcoats. Everyone else is going stark naked if possible.");
			writeText("One of the technicians notices you looking, and pulls aside the flap of her coat to show you she's wearing nothing underneath before winking at you.");
			writeText("Everyone looks gorgeous, you recognize some familiar faces and some look vaguely like more attractive versions of people you know.");
			writeSpeech("assistant", "", "Sorry we only had the robe. You're only our second foray into dimension-hopping. Oh! bossF will want to see you, she should be here any minute now.");
			writeSpeech("boss", "", "I'm already here.");
			writeBig("images/mirror/research2-1-2.jpg");
			writeSpeech("boss", "", "You look surprised to see me. Fuck, wait, am I a bitch in your dimension too?");
			writeText("...");
			writeText("You spend the next few hours learning about this dimension. The robe is uncomfortable, but you haven't quite acclimated to total public nudity yet. You'll need to ditch the robe later though.");
			writeSpeech("notes", "", "Findings:<br>In this dimension public nudity and sexuality are considered completely normal, with prudishness being comparable to your dimension's deviancy. Going naked whenever possible is the default, and clothes are typically only worn for the sake of safety or for teasing. A very common fetish is flashing, since wearing clothes giving most people an exotic feeling that makes nudity even more exciting.<br>Public sex is also considered normal. Since women have a lower refractory period, most public sex involves a man using a woman's mouth, pussy, or ass to relieve himself. Society as a whole has been built around the idea of sex being as accessible as asking for directions.");
			break;
		}
		case "mirrorResearch2-2": {
			writeSpeech("player", "", "Alright, time to do some actual research. My bracelet still works here, so... Uh...");
			writeBig("images/mirror/research2-2-1.gif");
			writeText("A woman walks by completely topless. In the distance a man is 'airing out' his junk in public mid-conversation with some women. A man drives by with a fleshlight built into his car.");
			writeText("The world is... Bizzare. Even though you've been using the bracelet for awhile now, this just isn't the public you're used to.");
			writeText("Adult stores are everywhere. Sex shops which proudly display which celebrity their toys are modeled after, TV stores which are showing 4k resolution porn at a high volume.");
			writeText("There's the faint scent of sweat in the air, although it seems like hygene is pretty good overall. You pop into one of the stores for a quick moment.");
			writeBig("images/mirror/research2-2-2.gif");
			writeSpeech("Blonde Woman", "none", "Ah! C-careful! If you go any harder I'll squirt!");
			writeText("The place is really tidy, a couple of people are jerking or jilling off, but they're careful to finish into tissues.");
			writeText("You pop into the bathroom for a quick moment.");
			writeBig("images/mirror/research2-2-3.gif");
			writeText("But it seems like it's occupied. You almost walk back out on instinct, but this is a great chance for some research.");
			writeSpeech("player", "", "Excuse me, miss? Could you tell me how you're feeling right now?");
			writeText("Without missing a beat she sizes you up.");
			writeSpeech("Brunette", "none", "Mmm~ You one of those perverts who likes to watch? You've got a lot of clothes on...<br>How does it look like I'm feeling? I'm getting helped out by a clerk's fat dick~!");
			writeSpeech("player", "", "I see, thank you.");
			writeText("You use the restroom and head out. It doesn't seem like she even knew who she was fucking.");
			writeBig("images/mirror/research2-2-4.gif");
			writeText("There's a sunbathing woman getting fingered by another woman across the way. Does that even count as progressive? Is there any distinction between same-sex relationships if everyone is okay with sex all the time?");
			writeText("Before you have a chance to learn more reality around you begins to shimmer and blur. It seems your double is using the mirror. They probably got cold feet from wearing multiple layers of clothes for once.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-3": {
			writeText("The locals are interesting, but it might be worth it to get a good idea of what society is like here. You take some time to look into what the public utilities are, hoping that your double doesn't get cold feet and pull you back too quickly.");
			writeText("...");
			writeSpeech("player", "", "<i>What the fuck is a 'free use office'? Is it like some kind of restroom?</i>");
			writeBig("images/mirror/research2-3-2.gif");
			writeText("Nope. It's a bunch of naked men and women stuck in restraint.");
			writeText("Even though public use is common here, it seems like they still have dedicated locations where you can relief yourself sexually. Or maybe this is for the more introverted people of society, who'd rather they didn't need to make face-to-face contact with the people they're fucking.");
			writeBig("images/mirror/research2-3-1.gif");
			writeText("You decide to have some fun yourself. Although it goes by too quickly, and too soon reality is blurring around you.");
			writeText("These visits don't last long enough for your taste. You'll probably bring up to assistantF that she should distract your double next time.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-4": {
			writeText("The public transit in this dimension is pretty nice. There are dedicated school buses for university students in addition to a pretty comprehensive transit system overall.");
			writeText("It makes sense. You'd need to keep alert while driving. But on a bus...");
			writeBig("images/mirror/research2-4-1.gif");
			writeSpeech("Blonde Schoolgirl", "none", "Geez Louise, you're pretty excited this morning.");
			writeSpeech("Louise", "none", "Nah, my pussy just needs some rubbing in the morning. I like how new silk feels, got to break it in.");
			writeText("It's pretty strange to see university students so optimistic in the morning.");
			writeText("...");
			writeText("After the bus ride the students are filed off to basement rooms one group at a time.");
			writeBig("images/mirror/research2-4-2.gif");
			writeSpeech("roommate", "", "C-cumming~! No more, I can't keep going~!");
			writeText("Students and teachers need to be able to focus during class, so in the morning they're 'broken'. They're made to cum so many times past their normal limits that they can enter a dazed state perfect for an almost hypnotic lecturing style.");
			writeBig("images/mirror/research2-4-3.gif");
			writeSpeech("roommate", "", "NNNNgh~!!!!");
			writeText("Students are cycled through this room to be tired out once or twice per day depending on their needs, but some teachers need to spend almost half their shift here.");
			writeText("As roommateF is broken down with repeated orgasms, you opt to wander more around the school.");
			writeText("Most classrooms seem pretty normal, with the students having been drained it's not like there are orgies in every room.");
			writeText("A female student drags an instructor into a nearby locker room for some relief.");
			writeBig("images/mirror/research2-4-4.gif");
			writeText("Sometimes needs pop up and its best to resolve these in a way that isn't distracting for other students.");
			writeText("The world around you is shimmering, soon enough you're back home.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "mirrorResearch2-5": {
			writeText("The gym has a very casual and open environment.");
			writeBig("images/mirror/research2-5-1.gif");
			writeText("One of the most commonly used devices is some kind of dildo-bike, it seems to be this dimension's replacement for the treadmill.");
			writeBig("images/mirror/research2-5-2.gif");
			writeText("Some of the fancier looking ones are vibrating based on the speed of the pedaling. Others have built in fleshlights, but it seems like male patrons more commonly use the women instead.");
			writeBig("images/mirror/research2-5-3.gif");
			writeText("As you walk around further you can hear some grunting from one of the back rooms, so you go and investigate.");
			writeBig("images/mirror/research2-5-4.gif");
			writeText("The gym's owner is serving as some sort of group fuckdoll. It might be fun to join, but all too quickly the world around you begins to shimmer again and you're back home.");
			if (tempScene == 'work') {
				tempScene = 'mirrorResearch';
			}
			break;
		}
		case "coinResearch1": {
			writeBig("scripts/gamefiles/items/coin.jpg");
			writeSpeech("player", "", "Now beginning test Md-01.");
			writeSpeech("assistant", "", "Right, so artifacts like this usually activate when held. Do you feel any different?");
			writeSpeech("player", "", "Nope. I mean, it is the 'Midas Coin', so maybe...");
			writeText("You start touching things around you, but nothing happens.");
			writeSpeech("player", "", "Nothing. I thought maybe it'd turn stuff to gold. And it doesn't turn humans either, or else this thing would be kept in the dark vault.<br>Maybe it's a dud? A lot of resources go into obtaining artifacts, it'd be a shame if we wasted them on this.");
			writeSpeech("assistant", "", "I don't know, it is still a historical relic. Probably worth at least three assfucks.");
			writeSpeech("player", "", "... What?");
			writeText("...");
			writeSpeech("player", "", "And this soda?");
			writeSpeech("assistant", "", "Probably worth like, a handjob or something?");
			writeText("You place the coin down onto the desk, then start shaking the can at assistantF.");
			writeSpeech("player", "", "How much, again?");
			writeSpeech("assistant", "", "It's a two dollar soda, have you figured out what the artifact does, or are you messing with me?");
			writeSpeech("notes", "", "Findings:<br>When held, the Midas Coin causes sexual activities performed by the holder to be 'normalized', and not perceived to be socially outrageous no matter how depraved the action. In addition, sexual acts will be seen to have 'value', meaning that the holder can exchange sexual acts as though they had a cash value.");
			break;
		}
		case "coinResearch2": {
			writeSpeech("player", "", "Hey, you gonna drink that?");
			writeSpeech("assistant", "", "Huh? Oh the soda. Yeah, and it's the last from the machine too, sorry.");
			writeSpeech("player", "", "Oh well. Hey, how about I buy it from you?");
			writeText("...");
			writeBig("images/coin/research2-1.gif");
			writeSpeech("assistant", "", "Glllch<br>Fuck, he's huge!");
			writeText("You grab assistantF by the hair and force her down farther. A shiver of pleasure travels up your back as you hear her let out a giggle while deepthroating you.");
			writeSpeech("player", "", "Fuck, how much are you enjoying this?");
			writeText("She doesn't answer with words, not that she can with her face skewered on your dick. Instead she just focuses on rubbing her pussy while trying to pleasure your dick as much as her mouth can.");
			writeSpeech("player", "", "Fuck, cumming~!");
			writeBig("images/coin/research2-2.gif");
			writeText("The room is filled even further with the sounds of a gag-fueled mouthfuck. assistantF doesn't let up even as you start to cum, you actually need to grab her by the hair and pull her off of you to get her to stop sucking, and even then she tries her best to suck down every drop.");
			writeSpeech("assistant", "", "He-*AHEM*<br>Mhmm... Sucker... The soda was only like two bucks...");
			writeText("She rests against the side of her desk as you start drinking the soda you 'paid' for.");
			break;
		}
		case "coinHome1": {
			writeText("In hindsight, it might not have been the most tactful option to go outside and scream, <i>\"We live in a free market economy\"</i> while undoing your belt, but on the other hand...");
			writeBig("images/coin/publicCoin.gif");
			writeText("At this point, you're more worried about undervaluing your currency...");
			writeSpeech("Tongue-Piercing Girl","none","Come on big guy! Shoot that hot, <i>thick</i> capitalism all over our proletariat faces~!");
			writeText("Wait what?");
			writeSpeech("Girl on the Right","none","Ignore her, she's just thirsty for your means of reproduction.");
			writeSpeech("player","","...Okay, so using an artifact that rewrites localized cognition has some unexpected effects. Live and learn.");
			writeText("Could be worse, though. First time you've had four tongues dancing across your cock...");
			writeSpeech("Nose-Piercing Girl","none","Are you getting close? Warn us before the money shot, okay hun?");
			writeText("Maybe it's a side-effect of working at the Vault, but you could swear the puns only turn you on more...");
			writeText("...");
			writeText("As fun as it is to be able to pay for snacks by going down on the cute cashier (and as much as you've learned to appreciate actual money when the cashier isn't your type), coming up with an interesting way of using the coin is... kinda hard.");
			writeText("Well, without having to resort to the Bracelet to keep yourself from getting a life-long ban from the store, anyway.");
			writeText("Standing in front of the door to your place, you eat some more of your sexually-attained snacks and think.");
			writeSpeech("player","","Can't believe I'm saying this, but I think I need some spare work...");
			writeSpeech("girlfriend","","What a coincidence.");
			writeText("You flinch, but keep yourself from jumping.");
			writeSpeech("player","","Hey girlfriendF. Pretty sure roommateF is working.");
			writeSpeech("girlfriend","","I was counting on it - I would like to ask you for a favor.");
			writeText("You slowly slide a chip into your maw.");
			writeSpeech("player","","Go on.");
			writeSpeech("girlfriend","","roommateF is... observant. Particularly when it comes to me, and <i>especially</i> regarding gifts.");
			writeSpeech("player","","Ah. Yeah, I think I see where this is going. You want my help picking something out?");
			writeSpeech("girlfriend","","Yes. I'd rather like my surprise to <i>surprise</i> her for once.");
			writeSpeech("player","","Not too hard. You know her favorite movies?");
			writeSpeech("girlfriend","","Casablanca?");
			writeSpeech("player","","Hah. I'm guessing she told you that on the first date? Her favorites are a little bit different...");
			writeText("...");
			writeText("With a pair Lord of the Rings bookends in tow, the two of you walk quietly to girlfriendF's place. When you get to the door...");
			writeSpeech("girlfriend","","I could've paid for that digitally, you know.");
			writeSpeech("player","","I figured, but why complicate things? You seem like the type to pay a guy back.");
			writeText("She pauses, then smiles.");
			writeSpeech("girlfriend","","Actually, you know what?");
			writeText("Her finger loops around your belt, pulling you with her into her house.");
			writeSpeech("girlfriend","","I think I'll do that now.");
			writeText("The door shuts as she deftly un-does your pants, pulling them down just enough to have your cock flop against her hand.");
			writeSpeech("girlfriend","","My throat for those bookends?");
			writeSpeech("player","","Sounds fair. Do you want to get warmed up, or-");
			writeText("She drops down, her mouth immediately getting to work.");
			writeSpeech("player","","Or not...!");
			writeText("...");
			writeBig("images/coin/asaCoin.gif");
			writeSpeech("player","","Holy <i>crap,</i> your throat is tight...!");
			writeText("She bobs down to the base for a moment before popping back up, one hand jerking your slick shaft.");
			writeSpeech("girlfriend","","If it weren't, it would hardly be worth the gift.");
			writeSpeech("player","","Fair point. You'd better be ready though...!");
			writeText("She smirks, throwing herself back into the blowjob enthusiastically.");
			writeText("Pretty soon, you buck your hips forward <i>hard</i>, bottoming out as you pump your cum down her throat.");
			writeText("When you finish, she pulls away and wipes a bit of cum and spit from her chin, licking it up with a smile.");
			writeSpeech("girlfriend","","Now we're even. Thanks for the help with the gift - I'm sure roommateF will love it.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "coinOutdoor1": {
			writeText("You fiddle with the coin, approaching Karlee at the counter to discuss some membership fees.");
			writeSpeech("gym","","Oh, hey. It's playerF, right? I remember signing you up, but haven't seen you around.");
			writeSpeech("player","","That's me. I was actually planning on discussing those membership fees.");
			writeText("She gives a bit of a tired smile.");
			writeSpeech("gym","","Sorry, but company policy is that I can't give discounts after the fact, even if you haven't been around.");
			writeSpeech("player","","Actually, I'm here to pay them in advance, and maybe even upgrade?");
			writeText("She perks right up, smiling wide.");
			writeSpeech("gym","","In that case, we can talk in the back!");
			writeText("...");
			writeBig("images/coin/karleeCoin.gif");
			writeText("She tightens her ass every time you bottom out, trying not to moan.");
			writeSpeech("gym","","Y-You're not too bad! A l-little more, and you might pay for... for... F-Fuck...! <br> <i>C'mon Karlee, keep it together! You're a closer, not a quitter!</i>");
			writeSpeech("player","","For a personal trainer, aren't you a bit easily distracted?");
			writeSpeech("gym","","Not at all! I'm just... <i>very</i> focused on my client! <br> <i>Focus...! I'm so close to the sale I can practically feel it in my guts!</i>");
			writeText("You roll your hips while thrusting, feeling your head pressing into every fold.");
			writeSpeech("player","","Y'know, I'm just not sure if this is the right gym for me.");
			writeText("Panicking, she clamps down tight on your cock.");
			writeSpeech("gym","","I know this place'll be a <i>perfect fit</i> for you...!");
			writeText("You slap her ass harshly, Karlee moaning sharply as she keeps rythmically tensing up.");
			writeSpeech("gym","","W-We've got the best trainers around, and great equipment! No matter what kind of exercise you're looking for, you'll have people like me r-ready to c-<i>come</i> and help!");
			writeSpeech("player","","That's a pretty good offer, but... Don't you think you should give the price?");
			writeSpeech("gym","","Normally, it's another ten dollars a month, b-but I can make a one-time-deal! All of that, and all you've got to do is cum inside!");
			writeText("You can feel yourself approaching the edge, so might as well...");
			writeSpeech("player","","You've got a deal.");
			writeText("You ram your cock into her ass, the sound ringing out as she muffles a moan.");
			writeText("A few seconds later, you pour your load inside, a wave of relief going through her body.");
			writeBig("images/coin/karleeCoin2.gif");
			writeSpeech("gym","","T-Thank you for cumming...! You won't regret this...");
			writeSpeech("player","","I'm getting that feeling, yeah.");
			writeSpecial("This scene was written by <span class = 'switch' onclick='window.location.href=`https://www.reddit.com/user/CaptainCryptogreek`'>Captain Cryptogreek</span>");
			break;
		}
		case "coinDream1": {
			writeText("A cold wind blows over the land, and you take a powerful breath of the show before you.");
			writeBig("images/coin/dream1-1.gif");
			writeText("More, more! You cry out. For all that it matters, society is your plaything.");
			writeText("You lean back to enjoy the ride, but a single slip causes something precious to roll from your fingers.");
			writeText("The coin rolls along the ground, stopping only for a crow to snatch it.");
			writeText("Around you, confused exclamations are followed by terrified screams.");
			writeText("Your paradise is lost to the ages.");
			break;
		}
		case "serumResearch1": {
			writeSpeech("player", "", "Now beginning test Ts-09. No time like the present!");
			writeText("You take a swig of the liquid, it's very minty. Nothing happens right away, but almost immediately... Nothing continues to happen.");
			writeSpeech("player", "", "No effect?");
			writeSpeech("assistant", "", "Alright, no effect then, a dud.");
			writeText("Without hesitation, assistantF begins logging down 'no effect' onto her clipboard.");
			writeSpeech("player", "", "Slow down, it's too soon to make that kind of call. And Mrs. bossL will get on our case again if we make snap judgements in ink.");
			writeSpeech("assistant", "", "Y-yeah, way too soon, sorry. And she's super anal about it.");
			writeText("assistantF looks a little dazed as she crosses out her notes.");
			writeSpeech("player", "", "... Actually she's really chill about wasting office supplies.");
			writeSpeech("assistant", "", "Right? We're pretty lucky this is the one thing she doesn't care about.");
			writeSpeech("player", "", "But she's actually the nicest person you've ever met.");
			writeSpeech("assistant", "", "Yeah! I feel bad for... for-");
			writeText("assistantF looks wobbly before she almost collapses. You catch her and make sure she can get her footing.");
			writeSpeech("assistant", "", "Sorry. Sorry. It's weird, I just remembered a bunch of times Mrs. bossL was really nice to me, and I lost my balance for some reason.");
			writeText("...");
			writeSpeech("player", "", "So, could you recap all that?");
			writeSpeech("assistant", "", "Of course. Your name is Doctor Pepper, and you're from Alabama, which is in the United States of Russia. You were born without a face, and...<br>Is this really necessary? Does your life story have something to do with the artifact? And some of this stuff seems a little far-fetched, now that I think about it.");
			writeSpeech("notes", "", "Findings:<br><strike>No Effect</strike><br>When drunk, this minty fluid causes everything you say to be perceived as an absolute truth by anyone who can hear and understand you. The effects are temporary and targets develop a resistance over time, but until then the subject has absolute control over anyone in earshot. The effects are even capable of inducing physiological change, such as causing someone to become hungry despite having just eaten.");
			break;
		}
		case "serumResearch2": {
			writeBig("images/serum/research2-1.gif");
			writeSpeech("assistant", "", "N-nggh... What's... It feels like something is wrong...");
			writeSpeech("player", "", "What could be wrong? This is pretty normal for us.");
			writeSpeech("assistant", "", "It is...? I don't remember.<br><i>Something about this feels... Off...</i>");
			writeSpeech("player", "", "Are you not enjoying yourself?");
			writeBig("images/serum/research2-2.gif");
			writeSpeech("assistant", "", "Mmm, no! This is great, but it just feels like something isn't quite right.<br>Like, mmm... Like my brain is saying something is wrong, and right at the same time, you know?");
			writeSpeech("player", "", "Nngh, gonna come. Want me to pull out?");
			writeSpeech("assistant", "", "No, inside me! Please!");
			writeBig("images/serum/research2-3.gif");
			writeSpeech("assistant", "", "Ah~ Feels good~<br><i>Whatever it is, it's probably not important.</i><br>Can we go again soon?");
			break;
		}
		case "serumResearch3": {
			writeSpeech("boss", "", "So, what was so important you needed to interrupt me?");
			writeText("You take a deep breath to compose yourself. The minty aftertaste of the serum does help you feel a little more empowered under her glare.");
			writeSpeech("player", "", "I know your secret. I know you're a complete buttslut who can't even make it through the day without fantasizing about my cock up your ass.<br>I know you can't hold back anymore, that you're at your breaking point.");
			writeText("After a moment of silence, bossF stands up, walks over to the door, shuts, and locks it.");
			writeText("And then immediately pulls you out of your chair by the tie.");
			writeSpeech("boss", "", "How'd you find out!? Who the fuck told you!? Was it chairL!?");
			writeSpeech("player", "", "Uh, n-");
			writeSpeech("boss", "", "Shove it!");
			writeText("She pushes you back onto your chair and opens a drawer on her desk..");
			writeSpeech("boss", "", "Trying to make me look bad in front of management, huh? Right before inspection, I bet. But you're right, I can't hold back.");
			writeText("She pulls something that looks pretty close to a gun out of her desk drawer.");
			writeSpeech("boss", "", "I'll need to throw you in a ditch somewhere afterwards, can't have this getting back to bite my perfect ass. Any last words?");
			writeSpeech("player", "", "Uh, I have a few actually! First, you aren't going to shoot! Next...");
			writeText("...");
			writeBig("images/serum/research3-1.gif");
			writeSpeech("boss", "", "Ah~! Ah~! Harder! Ruin me!");
			writeSpeech("player", "", "You fucking <b>BITCH</b>! Were you seriously about to kill me to get your rocks off!");
			writeSpeech("boss", "", "I'm sorry master~! I don't know what came over me, I just needed to be fucked so bad~! Punish me, please!");
			writeBig("images/serum/research3-2.gif");
			writeSpeech("boss", "", "Ah, yes~! More~!");
			writeSpeech("player", "", "Oh, you'll get more, slut.");
			break;
		}
		case "serumDream": {
			writeText("Test tubes bubble around you. This dream feels a lot more recent than most.");
			writeBig("images/serum/dream1-1.gif");
			writeText("Cold metal keeps you clasped down as Mrs. chairL works your dick.");
			writeText("She mutters to herself, saying she almost has the 'final ingredient'.");
			writeText("The last piece of the puzzle before she has a serum powerful enough to take over Anomaly Vault and instate herself as head chairwoman.");
			break;
		}
		case "cageResearch1": {
			writeSpeech("player", "", "Alright, no problems.");
			writeText("The pink chastity cage slips on without issue. The cage itself seems to adjust itself no matter how large the wearer's dick is, meaning it'll always feel tight and restrictive, but never so far as to cut off blood flow.");
			writeText("There'd been a bit of confusion when you requested access to the cage, but the higher-ups gave the green light on the experiment without hesitation.");
			writeSpeech("player", "", "Huh. I thought it was supposed t-Ghhggg~!");
			writeText("You knees buckle as the effect of the cage triggers. Anyone who cages themselves in the pink plastic ends up with a smaller dick, but the inbetween is the interesting part.");
			writeBig("images/cage/research1-1.gif");
			writeText("Your knees buckle as your dick leaks from inside the cage, your body changing and morphing by the second.");
			writeText("Soon enough it isn't just a few drops of cum, your cock actually begins to <b>squirt</b> a solid stream of cum onto the floor.");
			writeText("Each squirt that splatters onto the floor feels like a hundred orgasms in one, because that's what they are. With each squirt you're permanently converting your cock's mass into the cum you've been spraying onto the ground.");
			writeText("And it isn't just mass. Sexual stamina, confidence, your ability to resist being a pathetic quick-shot, all of those are converted into near-seethrough jizz as well.");
			writeText("There isn't a single sperm cell in your cum anymore, your ability to impregnate is gone now to. Your voice, your moans, every sound you make is going higher and higher as you squeeze out as much sissy cum as you can.");
			writeText("You fall backwards as the stream slows down. Your brain is foggy, thinking in complete sentences is too much for you now. Before you go completely stupid, you at least have the good sense to take off the cage as it *CLICK*s unlocked.");
			writeBig("images/cage/research1-2.gif");
			writeText("You're ruined now. All you've got on your crotch could barely even be called a clit now. All that strength and masculinity is gone. Your cock can never get hard again, but it wouldn't matter since it wouldn't even be two inches long.");
			writeText("What would happen if you put on the cage again? What else could be converted into cum?");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "onaholeResearch1": {
			writeText("But enough of that kinky shit. You press your head against the opening, reports describe 'mind-breaking pleasure' as a common result of the onahole.");
			writeText("You meant to plunge balls-deep in a single thrust, but there's a great deal of resistance once your head slips in.");
			writeSpeech("player", "", "Ghhh-HHHgg~!");
			writeText("The sensation begins hitting you immediately. The toy almost seems to squirm in your grasp as you fight to thrust in, every inch of your cock penetrating the onahole is enwrapped in a white hot pleasure.");
			writeText("You're barely able to stand as you feel your cockhead bump into the back of the sex toy, your eyes roll back as dopamine floods your brain. You start pulling out and thrusting back in.");
			writeBig("images/onahole/research1-1.gif");
			writeText("You're already cumming, paining the insides white. The onahole doesn't distend though, not a drop of cum seems to leak out either.");
			writeText("But the real fun is only beginning as you can feel something press against your cock's lips, slowly testing the opening to your urethra.");
			writeSpeech("player", "", "Nnngh~! M-moooore~!");
			writeBig("images/onahole/research1-2.gif");
			writeText("A tendril slides into your cockhole, nerves that should be lighting up with pain are instead overloading your brain with pleasure. You should be blacking out but an electric energy is pulsing through your body keeping you awake and aware of every second.");
			writeText("The tendril slides down your urethra, you can feel it pushing down into you. Every inch of your insides it touches feels like it's exploding. You should be cumming, but you aren't even subconsciously in control of your body anymore.");
			writeText("The tendril reaches your balls, and you can feel bumps travel down the tentacle's length before depositing some kind of fluid into your balls.");
			writeText("You can see them expanding as you look down, pulsing with some dark, unholy substance. This entire process has felt like one long orgasm.");
			writeText("You're on the ground, your muscles spasming but you're careful to hold the onahole in place until you can feel the 'injection' finish. The tentacle slowly pulls itself out of your now-distended cockhole, and you can feel yourself regaining control of your body.");
			writeText("Once you're able to pull the sex toy off and hold it above your cock the euphoria is stil present, but in the background. Now you feel an all-consuming <b>hunger</b> as you look down.");
			writeBig("images/onahole/research1-3.gif");
			writeText("You feel another rush of pleasure as you clench your balls, a simple tightening is enough to force yourself to piss out a load of jizz from your overpacked sack.");
			writeText("You cover the front of the toy, then you clench again and an arc of cum flies through the air. Again, again, again you cum.");
			writeText("...");
			writeText("Three weeks have passed, you're undergoing one last round of physical therapy.");
			writeSpeech("assistant", "", "I think that about covers it. How do they feel?");
			writeBig("images/onahole/research1-4.gif");
			writeText("You heft your massive balls and watch them jiggle as you let them fall.");
			writeSpeech("player", "", "Incredible. They're so big, I can almost hear the cum being built up inside them.");
			writeSpeech("assistant", "", "Your body has adapted now. You'll be able to safely use the onahole again, and they'll get even bigger.<br>The process will fuck you up mentally though. We'll probably never even have another conversation like this again.");
			writeText("And it'll be completely worth it, too. Anything to feel that all-consuming pleasure again.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "gummyResearch1": {
			writeSpeech("player", "", "No time like the present!");
			writeText("You take one of the dicks made from the candy and start nibbling on the head. You can't bite any off, but instead after some sucking and licking a sweet fluid is discharged from the tip.");
			writeText("It tastes fruity, but the aftertaste is strange... and spreading?");
			writeText("As you swallow the fluid it leaves a tingling sensation in your mouth and down your throat. You absentmindedly keep sucking as the fuzzy warmth travels through your body.");
			writeText("...");
			writeText("You snap out of the stupor, take the dick out of your mouth, and look around. It's been fifteen minutes, you must have blacked out. The more pressing matter though...");
			writeBig("images/gummy/research1-1.gif");
			writeSpeech("player", "", "Whoa...");
			writeText("Your ass could now only be described as a fatty booty, you look like you could star in Backdoor Sluts 9.");
			writeText("Your voice is higher, your hands are softer and the nails are lighter, the gummy dick's fluid must be changing you.");
			writeSpeech("player", "", "Holy shit, I could pass for a girl... A fucking hot girl...");
			writeText("But there's still more candy to test, the gummy dick is still bright and colorful.");
			writeText("...");
			writeSpeech("player", "", "Mmm~... Mmmm~...");
			writeBig("images/gummy/research1-2.gif");
			writeText("Your body keeps changing, but the changes are growing more internal. You feel so on-edge you could cum from just one stroke of your cock, but your dick is completely soft.");
			writeText("The itch, the need to cum, it's coming from your ass now. Your brain doesn't even register your flaccid dick as a source of pleasure anymore.");
			writeText("Every swallow you change further, looking like a pornstar with painted nails and a winking asshole. You roll over, desperate for relief as you deepthroat the dick one last time to try and get out any of the sissifying juice left.");
			writeText("Trying to jerk off does nothing, but just rubbing your fingers along the rim of your ass has you trembling. You feel... enhanced. Aimless tingling running through your nerves.");
			writeSpeech("player", "", "Need... Need to cum~...");
			writeBig("images/gummy/research1-3.gif");
			writeSpeech("player", "", "Oooo-oooh~!!!");
			writeText("As you push your manicured fingers into your fuckhole, they bump up against something soft that sends wonderful sensations through your body.");
			writeText("It's too big to be your prostate... Probably. Unless your prostate grew three times as large and as sensitive.");
			writeText("But there's no point worrying anymore. Each press of your fingers against your bitch-button causes a stream of cum to flow freely from your dick.");
			writeText("You squirm and enjoy you new body until eventually you're wrung dry, and fall asleep.");
			writeText("...");
			writeText("By the time you've woken back up, you're in your old body again. You do feel a little softer all around though, and even when hard your dick seems a little floppier than before. Another usage, and the effects might be permanent.");
			break;
		}
		case "gummyResearch2": {
			writeSpeech("boss", "", data.player.fName+"~? How's the milking going?");
			writeBig("images/gummy/research2-1.gif");
			writeSpeech("player", "", "C-cumming! Cumming again!");
			writeText("It's strange. Here you are, hand on your dick, but all you can focus on is the dildo in your ass as you pump sissy cum out of yourself.");
			writeSpeech("player", "", "T-three! Came three times!");
			writeSpeech("boss", "", "Good boy. It looks like high quality stuff too.");
			writeText("Once your transformation became permanent you no longer came sperm. Instead your jizz is a high-quality sweet that sells pretty well on the black market.");
			writeText("Or so you're told. You're not allowed to have or waste any.");
			writeSpeech("player", "", "M-my reward?");
			writeSpeech("boss", "", "Shhh. Over the mat. You'll get your reward. Harry?");
			writeText("A large man walks into the room, stark naked and dick hanging down slapping against his thighs.");
			writeText("You're giddy with anticipation as you assume the position.");
			writeBig("images/gummy/research2-2.gif");
			writeSpeech("player", "", "Yes! Yes! Yesyesyes~!");
			writeSpeech("boss", "", "Now you know the rules. Don't waste any cum, alright?");
			writeText("But you can't hear her, nor do you care. You have what you need now.");
			writeBig("images/gummy/research2-3.gif");
			writeText("This is your life now, a sissy cum fountain made to be used.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
			break;
		}
		case "toolkitResearch1": {
			writeText("You unclasp the locks on the toolkit. Inside are several different fliers, a large bottle of skin cream, a girl's sweater, and some yoga pants. The fliers get progressively more lewd, starting with women in fashionable outfits and ending with...");
			writeText("Something about this feels wrong, like you're skipping a step. Everything feels hazy as it feels like your body is on autopilot.");
			writeText("You disrobe yourself and squirt some of the cream onto your hand.");
			writeText("A faint part of your mind says to hold on, to figure out what is going on. Another, much louder part of your mind, probably scientific curiosity, pushes you forwards.");
			writeText("You rub the cream into your skin, it tingles. Everywhere it touches feels smooth. Once your finished your whole body is tingling and shivering and you fall over. How clumsy!");
			writeText("As you stand up and look back over yourself, your skin is now completely smooth and hairless. The fliers lay on the floor in a clump, you don't need them anymore.");
			writeText("<i>Still not finished.</i>");
			writeText("You put on the yoga pants and the sweater, they fit perfectly and relax on a nice soft bed.");
			writeBig("images/toolkit/research1-1.gif");
			writeText("You start stroking yourself, nice and slowly. You feel on edge already.");
			writeBig("images/toolkit/research1-2.gif");
			writeText("Already you're cumming, it feels so much thicker than normal. You can barely keep your hands on yourself, it feels like you could cum without touching your cock.");
			writeText("<i>Still not finished.</i>");
			writeText("You keep stroking and rubbing yourself, and you just keep cumming. Some part of you, deep inside, feels like it's getting bigger and stronger, while the rest of your body feels like it's getting weaker and softer.");
			writeBig("images/toolkit/research1-3.gif");
			writeText("<i>Good job.</i>");
			writeText("You snap to, coming out of your daze. You're you again.");
			writeText("You clean yourself off and switch back to our normal clothes. They feel... More loose.");
			break;
		}
		case "toolkitResearch2": {
			writeText("You unclasp the locks on the toolkit. Inside are a bra, some panties, a few wigs, a soft-looking blouse, and a bottle of wine.");
			writeText("You don't feel the same impulsive autopilot you did before. Instead, looking at the contents of the kit, you feel like you're staring off the edge of a cliff. A voice in your mind screams. 'Jump!' 'Jump!'");
			writeText("So you do. You down the wine, it tastes fruity. Your skin tingles like it did before, and now everything around you is slightly blurry. The wine must be very fast acting.");
			writeText("You take the underwear out of the kit. You already have girly skin, it might be fun to see how it feels.");
			writeText("You slide on the bra and the panties, they feel really nice. Everything feels itchy for a moment, but you know better than to scratch! You take a seat on the bed and wait for it to pass, and it does.");
			writeBig("images/toolkit/research2-1.gif");
			writeText("Your cock looks so cute in the panties... And this bra makes your chest look big. Didn't you have a normal-looking chest before?");
			writeText("You rub your little cock through your panties. They're really nice, but it just doesn't feel... Right.");
			writeText("<i>Still not finished.</i>");
			writeText("And then the itching comes back, much stronger. It's so bad, and it doesn't go away! It's right below your navel, and pressing down on your tummy only makes it itch more!");
			writeText("Maybe something in the toolkit will help! You put on the blouse, nothing. You put on the wig, it makes you feel pretty, but now's not the time! You pull of the panties. The itching comes by in pulses, every time it crescendos it feels like you desperately need to masturbate.");
			writeText("You start trying to jerk yourself off, but it doesn't work. You can't get an erection with all this itching!");
			writeText("You try to drink more wine, but the bottle is empty! You press it to your lips, and you don't know why, but you start slobbering all over the bottle. How inappropriate! But, you're desperate, and with desperation comes ideas.");
			writeText("You set the bottle on the floor, it's really tough and solid, and squat over it.");
			writeText("You press your little butthole against the neck of the bottle, and it starts to slide into you. The itching is really bad, you can't hold back anymore!");
			writeText("And then the bottle bumps into something. Your body shivers, your little pecker jumps, and you can't hold back a sigh of relief. The itching finally weakens and you feel so... <i>Nice</i>...");
			writeText("<i>Still not finished.</i>");
			writeBig("images/toolkit/research2-2.gif");
			writeText("Whenever you start to lift yourself off the bottle, the itching comes back. But whenever you thrust yourself back down, the relief washes over you again.");
			writeText("You start going faster. Shallow thrusts, but the thing you're bumping into feels like it keeps getting bigger. The itching gets worse whenever it comes back, but the relief feels so good...");
			writeBig("images/toolkit/research2-3.gif");
			writeText("Part of you is aware that your pecker is squirting, but that doesn't matter. The itching, and the relief. That's all that's on your mind. You keep going, and your pecker keeps squirting. It's squirting alot! And just when it stops, it starts squirting again!");
			writeText("Your legs shake, you can't keep yourself up anymore. Eventually, you need to give up and fall backwards, and you push the bottle out of yourself.");
			writeText("<i>Good job.</i>");
			writeText("You snap to, coming out of your daze. You're you again.");
			writeText("Quickly you grab your pecker, it feels good to touch again, although a bit lacking in size compared to before.");
			writeText("You look undeniably feminine now, but you put your clothes back on and leave. It might be a bad idea to come back here.");
			break;
		}
		case "toolkitResearch3": {
			writeText("With shaking hands you unclasp the locks on the toolkit, telling yourself this will be the last time. Inside is...");
			writeText("Nothing.");
			writeText("But there can't be nothing! You aren't done yet! You almost want to cry, until you feel a hand on your shoulder.");
			writeText("There's a man in the room with you, several in fact! They all look like they want to be your friend, and they all look... So...");
			writeText("They're all naked from the waist down, and all have real dicks. Much larger than yours. You can't help yourself, it's rude to do this without introducing yourself, but they don't seem to mind as you get on your knees.");
			writeBig("images/toolkit/research3-1.gif");
			writeText("You stroke the big, manly dick in front of you. Everyone is smiling, you must be doing it right! They have gifts, pretty lingerie, that must be why the toolbox was empty!");
			writeText("You put on some of the clothes, but the one in front of you seems sad that you stopped. The itching comes back again, and you let out a pretty giggle as you have an idea.");
			writeText("...");
			writeBig("images/toolkit/research3-2.gif");
			writeText("You can't help but squeal as he fucks you, as he pumps his big dick inside of you. There's no more itching, just the nice feeling of relief whenever he squishes your big bitch button with his dick.");
			writeText("You keep squirting onto the sheets! But you promise to lick it clean after, so they aren't mad.");
			writeText("Once the one inside you cums you feel the itching again, spreading throughout your body. But you feel like you can ignore it since it'll be satisfied again soon. All the other helpers want you to try on clothes too!");
			writeText("...");
			writeBig("images/toolkit/research3-3.gif");
			writeText("You're having a lot of fun with your new helpers. Some really mean lady keeps buzzing her voice in the room, but you have your helpers to protect you if she tries to punish you.");
			writeText("<i>Still not finished.</i>");
			writeText("Still not finished! It keeps repeating in your head. Will it ever say 'good job' again? You hope not.");
			writeText("BAD END");
			writeText("...");
			writeText("But there's a ray of hope. You can go on, and awaken from this bad dream, if you like.");
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