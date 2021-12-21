function keydown(kdown){
    const keyCode = kdown.keyCode;
    getCode = document.querySelector(`div[data-key="${keyCode}"]`);
    getCode.style.opacity = '1';
}

function keyUp(kup){
    const keyCode = kup.keyCode;
    code = document.querySelector(`div[data-key="${keyCode}"]`);
    code.style.opacity = '0';

}

function acorde(gAcorde){
    const keyCode = gAcorde.keyCode;
    getChord = Array.from(document.querySelectorAll(`div[data-key="${keyCode}"]`));
    getChord.forEach(gcrd => {
        gcrd.style.opacity = '1';
    });
}

const playSound = e => {
    const keyCode = e.keyCode;
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    if(!keyCode) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

};

window.addEventListener("keydown", keydown);
window.addEventListener('keyup', keyUp);
window.addEventListener('keydown', acorde);
window.addEventListener('keydown', playSound);
