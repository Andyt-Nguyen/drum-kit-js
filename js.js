
window.addEventListener('keydown', keydownEvent);
const key = document.querySelectorAll('.key');
key.forEach( a => a.addEventListener('transitionend', endTrans));


function keydownEvent(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	audio.currentTime = 0;
	!audio ? undefined : audio.play();
	key.classList.add('playing');
}

function endTrans(e) {
	if(e.propertyName !== "transform") return ;
	this.classList.remove('playing')
}
