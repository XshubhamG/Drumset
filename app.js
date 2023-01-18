 // function to play the sound
 let playSound = function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    
    console.log(audio);
    console.log(key);

    if(!audio)return; // stop the function to run altogether 
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

//added event listener for playing sound
window.addEventListener('keydown' , playSound);


// function to add effects on keydown
let removeTransition = function(e) {
if (e.propertyName !== 'transform') return; //skip this  if propertyName doesn't have transform

this.classList.remove('playing');

}  

// selecting all keys 
const keys = document.querySelectorAll('.key');

// for each keys pressed
keys.forEach(key => key.addEventListener('transitionend', removeTransition));