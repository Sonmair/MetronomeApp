import Timer from './timer.js';

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');


//put these variables into an array where it's randomized and the called upon
const randomPitch 
const pitchC1 = new Audio('');
const pitchD1 = new Audio('');
const pitchE1 = new Audio('');
const pitchF2 = new Audio('');
const pitchG1 = new Audio('');
const pitchA1 = new Audio('');
const pitchB1 = new Audio('');


let bpm = 144;
let count = 0;
let beatsPerMeasure = 4;
let tempoTextString = 'Allegro';

decreaseTempoBtn.addEventListener('click', () => {
    if (bpm <= 10) {return}
    bpm--;
    validateTempo();
    updateMetronome(); 
});

increaseTempoBtn.addEventListener('click', () => {
    if (bpm >= 288) {return}
    bpm++;
    validateTempo(); 
    updateMetronome(); 
});
tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    validateTempo();
    updateMetronome();
});
subtractBeats.addEventListener('click', () => {
    if (beatsPerMeasure <= 2) {return};
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});
addBeats.addEventListener('click', () => {
    if (beatsPerMeasure >= 12) {return};
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;


    if(bpm <= 24) {tempoTextString = "Larghissimo"};
    if(bpm > 25 && bpm <= 45) {tempoTextString = "Grave"};
    if(bpm > 45 && bpm <= 60) {tempoTextString = "Largo"};
    if(bpm > 60 && bpm <= 69) {tempoTextString = "Larghetto"};
    if(bpm > 69 && bpm <= 76) {tempoTextString = "Adagio"};
    if(bpm > 76 && bpm <= 98) {tempoTextString = "Andante"};
    if(bpm > 98 && bpm <= 102)  {tempoTextString = "Moderato"};
    if(bpm > 102 && bpm <= 110) {tempoTextString = "Allegretto"};
    if(bpm > 110 && bpm <= 120) {tempoTextString = "Allegro Moderato"};
    if(bpm > 120 && bpm <= 156) {tempoTextString = "Allegro"};
    if(bpm > 156 && bpm <= 168) {tempoTextString = "Vivace"};
    if(bpm > 168 && bpm <= 200) {tempoTextString = "Presto"};
    if(bpm > 200) {tempoTextString = "Prestissimo"};

    tempoText.textContent = tempoTextString;
}
function validateTempo() {
    if (bpm >= 288) {return};
    if (bpm >= 288) {return};
}

function playPitch() {
    console.log(count);
    if (count === beatsPerMeasure) {
        count = 0;
    }
    if  (count === 0) {
        randomPitch.play();
        randomPitch.currentTime = 0;
    } // else {
   //     click2.play();
   //     click2.currentTime = 0;
   // }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true});
