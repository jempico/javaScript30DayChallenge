const result_p = document.querySelector(".result");
const keyA_div = document.querySelector(`.key[data-key="65"]`);
const keyS_div = document.querySelector(`.key[data-key="83"]`);
const keyD_div = document.querySelector(`.key[data-key="68"]`);
const keyF_div = document.querySelector(`.key[data-key="70"]`);
const keyG_div = document.querySelector(`.key[data-key="71"]`);
const keyH_div = document.querySelector(`.key[data-key="72"]`);
const keyJ_div = document.querySelector(`.key[data-key="74"]`);
const keyK_div = document.querySelector(`.key[data-key="75"]`);
const keyL_div = document.querySelector(`.key[data-key="76"]`);


function playfromKeyboard(){
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(() => key.classList.remove('playing'), 500);
  });
}
playfromKeyboard();

function playfromDOM(chosenKey, datakey) {
    result_p.innerHTML = `You hit ${chosenKey}!!`
    const audio = document.querySelector(`audio[data-key="${datakey}"]`);
    const key = document.querySelector(`.key[data-key="${datakey}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(() => key.classList.remove('playing'), 500);
}

  function chooseKey() {
keyA_div.addEventListener('click', () => playfromDOM('A', 65));
keyS_div.addEventListener('click', () => playfromDOM('S', 83));
keyD_div.addEventListener('click', () => playfromDOM('D', 68));
keyF_div.addEventListener('click', () => playfromDOM('F', 70));
keyG_div.addEventListener('click', () => playfromDOM('G', 71));
keyH_div.addEventListener('click', () => playfromDOM('H', 72));
keyJ_div.addEventListener('click', () => playfromDOM('J', 74));
keyK_div.addEventListener('click', () => playfromDOM('K', 75));
keyL_div.addEventListener('click', () => playfromDOM('L', 76));

}

chooseKey();
