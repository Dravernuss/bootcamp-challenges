const audios = [
    new Audio("./sounds/fizzle.wav"),
    new Audio("./sounds/hat.wav"),
    new Audio("./sounds/kick.wav"),
    new Audio("./sounds/snare.wav"),
    new Audio("./sounds/snarezz.wav"),
    new Audio("./sounds/synth.wav"),
    new Audio("./sounds/vox1.wav"),
    new Audio("./sounds/vox2.wav"),
    new Audio("./sounds/vox3.wav"),
    new Audio("./sounds/wood.wav"),
];

document.addEventListener('keydown',({key})=>{
    selectValue(key);
    audios[key].play();
});

document.addEventListener('keyup',({key})=>{
    unSelectValue(key);
});

const selectValue = (num)=>{
    document.getElementById(`balloon_${num}`).classList.add("blow");
};

const unSelectValue = (num)=>{
    document.getElementById(`balloon_${num}`).classList.remove("blow");
};
