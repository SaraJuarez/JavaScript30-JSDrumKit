'user strict';
function pressedKey(ev) {
    let keyCode = ev.keyCode
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    var audioSrc = new Audio(audio.src)
    audioSrc.play()
    const text = document.querySelector(`div[data-key="${keyCode}" ]`)
    text.classList.toggle('playing')
}

function changeStyle(ev) {
    let keyCode = ev.keyCode
    const text = document.querySelector(`div[data-key="${keyCode}" ]`)
    text.classList.toggle('playing')
}
window.addEventListener('keydown', pressedKey)
window.addEventListener('keyup', changeStyle)


