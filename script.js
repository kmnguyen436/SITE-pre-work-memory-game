//Global constants
const cluePauseTime = 333; //how long to pause in-between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

//Global Variables
var pattern = new Array(8);
//var pattern = [2,2,4,3,2,1,2,4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.6; //must be between 0.0 and 1.0
var guessCounter = 0;
var mistake = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound


function createPattern(pattern)
{
  var i = 0;
  while (i < pattern.length)
    {
      var num = Math.floor(Math.random() * 4 + 1);
      pattern[i] = num;
      i++;
    }
}

function startGame(){
  //initialize game variables
  clueHoldTime = 1000; 
  createPattern(pattern);
  progress = 0;
  mistake = 0;
  roundCount(progress);
  mistakeCount(mistake);
  gamePlaying = true;
  playClueSequence();
  
  //swap the Start and the Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //show "Round: 0   Mistakes: 0"
  document.getElementById("rounds").classList.remove("hidden");
  document.getElementById("numrounds").classList.remove("hidden");
  document.getElementById("mistakes").classList.remove("hidden");
  document.getElementById("nummistakes").classList.remove("hidden");
}
function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  //swap the Start and the Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  //hide round and mistake text
  document.getElementById("rounds").classList.add("hidden");
  document.getElementById("numrounds").classList.add("hidden");
  document.getElementById("mistakes").classList.add("hidden");
  document.getElementById("nummistakes").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 350,
  2: 430,
  3: 470,
  4: 540
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true

  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
document.documentElement.addEventListener(
  "mousedown", function(){
    onmousedown = true;
    if (o.context.state !== 'StartTone(1)') {
    o.context.resume();
  }})
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }

}

function roundCount(progress){ //overwrite value for rounds
  document.getElementById("numrounds").innerHTML = progress;
}
function mistakeCount(mistake){ //overwrite value for mistakes
  document.getElementById("nummistakes").innerHTML = mistake;
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if (mistake != 3)
    {
      if (btn == pattern[guessCounter])
      {
        if (guessCounter == progress){
          if (progress == pattern.length-1){
            roundCount(progress + 1);
            winGame();
          }
          else{
            progress++;
            roundCount(progress);
            playClueSequence();
            clueHoldTime -= 60;
          }
        }    
        else
          guessCounter++;
      }
      else{
        mistake++;
        mistakeCount(mistake);
        playClueSequence();
      }
    }
  else
    loseGame();
}
