var numSquares = 6;
var villains = [];
var pickedVillain;
var pickedQuote;
var squares = document.querySelectorAll(".square");
var colorVillain = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var resultsButton = document.querySelector("#results");
var img1 = document.getElementsByTagName("img")[0];
var img2 = document.getElementsByTagName("img")[1];
var img3 = document.getElementsByTagName("img")[2];
var img4 = document.getElementsByTagName("img")[3];
var img5 = document.getElementsByTagName("img")[4];
var img6 = document.getElementsByTagName("img")[5];
var imgs = [img1, img2, img3, img4, img5, img6];
var score = 0;
var attempt = 0;

/*var villains = [
	"Maleficent", "Ursula", "Hades", "Scar", "QoH", "Mother Gothel", "Cruella", "Jafar", "Yzma",
	"Hook", "Evil Stepmother", "Evil Queen", "Gaston", "Prince John", "Dr. Facilier"
] */

var webImages = [
	"http://www.pinopinion.com/images/topics/t_3031_0.jpg",
	"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/Ursula-in-The-Little-Mermaid.png",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Hades-in-Hercules-1.jpg",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Scar-in-The-Lion-King.jpg",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Queen-of-Hearts-in-Alice-in-Wonderland.jpg",
	"https://ohmy.disney.com/wp-content/uploads/2016/02/Mother-Gothel-Scowling-in-Tangled.jpg",
	"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/Cruella-De-Vil-in-101-Dalmatians.jpg",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Jafar-in-Aladdin.jpg",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Yzma-in-The-Emperors-New-Groove.jpg",
	"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/02/Captain-Hook-in-Peter-Pan.jpg",
	"https://static3.srcdn.com/wordpress/wp-content/uploads/2019/02/Lady-Tremaine-in-Cinderella.jpg",
	"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/Evil-Queen-in-Snow-White-and-the-Seven-Dwarfs.jpg",
	"https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/Gaston-in-Beauty-and-the-Beast.jpg",
	"https://vignette.wikia.nocookie.net/the-many-adventures-of-minecraft-rogers/images/9/9f/Prince_John.jpg/revision/latest/scale-to-width-down/400",
	"https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Doctor-Facilier-in-The-Princess-and-the-Frog.jpg"
]

var quotes = [
[	"Stand back, you Fools!",
	"Oh dear, what an awkward situation",
	"A disgrace to the forces of evil.",
	"Now shall you deal with me o' prince, and all the powers of HELL!",
	"...how quaint - even the rabble."
],
[	"Don't understimate the importance of body language!",
	"It's called a cruel irony.",
	"Yes I’ve had the odd complaint, but on the whole I’ve been a saint.",
	"Fortunately I know a little magic.",
	"I'm a very busy woman and I haven't got all day."
],
[	"I know you know. I get it. I get the concept.",
	"He's a guy.",
	"Memo to me, memo to me: Maim you after my meeting.",
	"So you took care of him, huh?",
	"We dance, we kiss, we schmooze, we carry on, we go home happy. What do you say? Come on."
],
[	"That was today!? Oh, I feel simply awful.",
	"Long Live the king.",
	"I'm surrounded by idiots.",
	"Ooh, I quiver with fear!",
	"Oh, I shall practice my curtsy." 
],
[	"Off with their heads!",
	"Never mind all that! Get to the part where I lose my temper.",
	"What do you know about this unfortunate affair?",
	"Curtsy while you're thinking. It saves time.",
	"I am not a mile high, and I'm not leaving."
],
[	"Look at you, you think that he's impressed?",
	"I see a strong, confident, beautiful young lady.",
	"The world is dark, and selfish, and cruel. If it finds even the slightest ray of sunshine, it destroys it!",
	"You want me to be the bad guy? Fine, now I'm the bad guy.",
	"Oh well. C'est la vie. Enjoy your crown!"
],
[	"I don't care how you kill the little beasts. But do it!",
	"My only true love, Darling.",
	"We lose more women to marriage than war, famine, and disease.",
	"Congratulations. You've just won gold, silver, and bronze in the Morons Olympics!",
	"And you must be Rufus."
],
[	"Ecstatic",
	"My life is but to serve you, my lord.",
	"The power! The absolute power!",
	"I love the way your foul little mind works!",
	"You're only a fool if you give up, boy."
],
[	"I've never liked your spinach puffs",
	"Wrong Lever!!!",
	"HE'S SUPPOSED TO BE DEAD!!",
	"To save on postage, I'll just poison him with this!",
	"Well, he ain't getting any dead-er!"
],
[	"Insolent youth, prepare to die",
	"Why, you blithering blockhead!",
	"I'll show you this ghost has blood in his veins.",
	"I'm a codfish.",
	"Look alive, you swabs!"
],
[	"Hold your tongue.",
	"Bring up the breakfast trays at once, and hurry!",
	"You clumsy little fool!",
	"Oh. Pay no attention to HER.",
	"Of course. I said, \"If.\""
],
[	"Who is the fairest one of all?",
	"You know the penalty if you fail.",
	"Go on, have a bite.",
	"Now, begin thy magic spell.",
	"Don't let the wish grow cold."
],
[	"I'm afraid I've been thinking",
	"This is the day your dreams come true.",
	"If I didn't know better, I'd think you had feelings for this monster.",
	"How can you read this? There's no pictures!",
	"I use antlers in all of my decorating!"
],
[	"I've got a dirty thumb.",
	"Squeeze every last drop out of those insolent musical peasants.",
	"Let him go, for heaven sakes! Let him go!",
	"I told you never to mention my brother's name!",
	"My trap is baited and set! And then, revenge! Ahh."
],
[	"And all you got to do, to make this reality Is hand over that little talisman of mine.",
	"Besides, you and I both know the real power in this world ain't magic. It's money! Buckets of it.",
	"Don't you disrespect me, little man!",
	"Easy with that! Careful!",
	"I hear you. Now, what's in it for you?"
]
]
init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resultsButton.addEventListener("click", function(){
	if(score < -5){
		alert("You scored " + score + ", you need to watch more Disney");
	}
	if (score > -5 && score< 0){
		alert("You scored " + score + ", good try! You got this next time!");
	}
	if(score = 0){
		alert("Please play some more to get a score!")
	}
	if(score > 0){
		if(score/attempt < 1){
			alert("You survived!!! You scored" + score + " out of " + attempt + "!");
		}
		if(score/attempt > 1 && score/attempt < 5){
			alert("Wow! You are almost a disney wiz! You scored " + score + " out of " + attempt + "!");
		}
		if(score/attempt > 5 && score/attempt < 8){
				alert("What a fantasmic score! You are a true disney fan! You scored " + (score/attempt)*100 + "% Have a magical day!");
		}
	}
});

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab villain of clicked square
			var clickedVillain = this.id;
			//compare villain to pickedVillain
			if(clickedVillain == pickedVillain){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeVillains(clickedVillain);
				scoreUpdateUp();
			} else {
				this.classList.add("wrong");
				messageDisplay.textContent = "Try Again";
				scoreUpdateDown();
			}
		});
	}
}



function reset(){
	villains = generateRandomVillains(numSquares);
	//pick a new random Villain from array
	pickedVillain = pickVillain();
	pickedQuote = pickQuote();
	//change quoteDisplay to match picked Villain
	quoteDisplay.textContent = pickedQuote;
	resetButton.textContent = "New Villains"
	messageDisplay.textContent = "";
	//change villains of squares
	for(var i = 0; i < 6; i++){
		if(i<villains.length){
			squares[i].style.display = "block"
			squares[i].id = villains[i];
			imgs[i].setAttribute("src", webImages[villains[i]]);
			squares[i].classList.remove("wrong");
			//webImages = webImages.filter(e => e !== webImages[villains[i]);
		} else {
			squares[i].style.display = "none";
		}
	};
}

resetButton.addEventListener("click", function(){
	reset();
})

	function changeVillains(villain){
		//loop through all squares
		for(var i = 0; i < squares.length; i++){
			//change each Square to match given villain.
			imgs[i].setAttribute("src",webImages[villain]);
		}
	}

function pickVillain(){
	var random = Math.floor(Math.random() * villains.length);
	return villains[random];
}

function pickQuote(){
	var random = Math.floor(Math.random() * quotes[pickedVillain].length);
	return quotes[pickedVillain][random];
}

function generateRandomVillains(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random Villain and push into arr
		var vil = randomVillain();
		while(arr.includes(vil)){
			vil = randomVillain();
		}
		arr.push(vil);
	}
	//return that array
	return arr;
}

function randomVillain(){
	//pick a "Villain" from 0 - length of Villain list
	var v = Math.floor(Math.random() * webImages.length);
	return v;
}

function scoreUpdateUp(){
	score++;
	attempt++;
}

function scoreUpdateDown(){
	score--;
	attempt++;
}
