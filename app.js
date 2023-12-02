function playS(e){
    // console.log(e.keyCode);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio){
        return;
    }
    btn.classList.add('addtran');
    audio.currentTime=0;
    audio.play();
    setTimeout(()=>{
        btn.classList.remove('addtran');
    },100)
};

function removeT(e){
    if(e.propertyName!=='transform'){
        return;
    }
    e.target.classList.remove('addtran');
}

// const keys=Array.from(document.querySelectorAll('.btn'));
window.addEventListener('keydown',playS);
// keys.forEach(key => key.addEventListener('transitionend',removeT));