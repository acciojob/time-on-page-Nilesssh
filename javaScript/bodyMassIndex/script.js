/*// Function to play the sound
function playSound(keyCode) {
    const audio = new Audio(``);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return; // Exit if no audio element found
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing'); // Add playing class for styling
  }
  
  // Function to handle keydown event
  function handleKeydown(event) {
    const keyCode = event.keyCode || event.which; // Get the key code
    playSound(keyCode);
  }
  
  // Function to remove playing class after transition
  function removePlayingClass(event) {
    if (event.propertyName !== 'transform') return; // Skip if it's not a transform property
    this.classList.remove('playing');
  }
  
  // Add event listeners
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
  window.addEventListener('keydown', handleKeydown);
   */

let firstNum = document.querySelector("#firstNum");
let secondNum = document.querySelector("#secondNum");
let ans = document.querySelector("#result")
const btns = document.querySelectorAll("#btn");

btns.addEventListener("click",()=>{
      event.preventDefault();
  let str  = firstNum.value + btns.value + secondNum.value;
  ans.innerHTML = eval(str);
});

