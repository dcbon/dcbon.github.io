// jellygotchi by dcbon

let name = '';
let deathCause = '';
let mood = '';

let hunger = parseInt(document.getElementById('hungerLevel').innerHTML);
let full = parseInt(document.getElementById('fullLevel').innerHTML);
let bored  = parseInt(document.getElementById('boredLevel').innerHTML);
let tired = parseInt(document.getElementById('tiredLevel').innerHTML);


function colorPicked() {

  mood = 'smile';
  name = document.getElementById('name').value;
  let chooseJelly = document.getElementById('chooseJelly');
  let play = document.getElementById('play');
  let jellyName = document.getElementById('jellyName');
  let jelly = document.getElementById('jelly');
  let color = document.getElementById('color');
  
  
  chooseJelly.style.display = 'none';
  play.style.display = 'block';


  if (!name) {
    jellyName.innerHTML = "your jelly's name";
  } else {
    jellyName.innerHTML = `- ${name} -`;
  }
  
  
  if (color.options[color.selectedIndex] == red) {
    jelly.src = '/img/Jelly3.png';
    jellyName.style.color = '#ff7d53';
  }
  if (color.options[color.selectedIndex] == yellow) {
    jelly.src = '/img/Jelly1.png';
    jellyName.style.color = '#fee75c';
  }
  if (color.options[color.selectedIndex] == green) {
    jelly.src = '/img/Jelly2.png';
    jellyName.style.color = '#0b950e';
  }
  if (color.options[color.selectedIndex] == blue) {
    jelly.src = '/img/Jelly4.png';
    jellyName.style.color = '#3693f4';
  }
  if (color.options[color.selectedIndex] == purple) {
    jelly.src = '/img/Jelly5.png';
    jellyName.style.color = '#cf4ada';
  }
  if (color.options[color.selectedIndex] == black) {
    jelly.src = '/img/Jelly6.png';
    jellyName.style.color = '#919191';
  }
}


function isDead() {

  mood = 'dead';
  if (confirm(`R.I.P ${name} just ${deathCause}. Would you like to restart?`)) {
    document.location.reload(true);
  }
}


function playClicked() {

  bored -= 10;
  hunger += 5;

  if (bored <= 0) {
    alert(`${name} isn't bored anymore`);
    bored = 0;
    mood = 'angry';
  } 
  if (bored >= 100) {
    bored = 'max';
    deathCause = 'died of boredom';
    isDead();
  }

  if (bored >= 85) {
    mood = 'sad';
    alert(`${name} is bored and lonely :(`);
  }
  
  updateStat();

}


function feedClicked() {

  hunger -= 10;
  full += 5;

  if (hunger <= 0) {
    alert(`${name}'s tummy is already full`);
    hunger = 0;
    mood = 'angry';
  } 
  if (hunger >= 100) {
    hunger = 'max';
    deathCause = 'starve to death';
    isDead();
  }
  if (hunger >= 85) {
    mood = 'sad';
    alert(`${name} is reaalllyyyy hunggryyy :(`);
  }

  updateStat();

}


function pooClicked() {

  full -= 10;
  tired += 5;
  
  if (full <= 0) {
    alert(`${name} don't wanna poo :(`);
    full = 0;
    mood = 'sad';
  } 
  if (full >= 100) {
    full = 'max';
    deathCause = 'died of embarrasment';
    isDead();
  }

  if (full >= 85) {
    mood = 'sad';
    alert(`${name} want to poo! :(`);
  }

  updateStat();

}


function napClicked() {

  tired -= 10;
  bored += 5;
  
  if (tired <= 0) {
    alert(`${name} is wide awake and full of energy`);
    tired = 0;
    mood = 'angry';
  } 
  if (tired >= 100) {
    tired = 'max';
    deathCause = 'cursed to sleep forever';
    isDead();
  }
  if (tired >= 85) {
    mood = 'sad';
    alert(`${name} is reaalllyyyy sleepy :(`);
  }

  updateStat();

}


function updateStat() {

  document.getElementById('boredLevel').innerHTML = bored;
  document.getElementById('hungerLevel').innerHTML = hunger;
  document.getElementById('fullLevel').innerHTML = full;
  document.getElementById('tiredLevel').innerHTML = tired;

  
  if (hunger <= 15 && bored <= 15 && full <= 15 && tired <= 15) {
    mood = 'happy';
    alert(`${name} is feeling great. Thanks to you!`);
  }


  switch (mood) {
    case 'happy': 
      document.getElementById('face').src = '/img/happy.png';
      break;
    case 'sad': 
      document.getElementById('face').src = '/img/sad.png';
      break;
    case 'angry': 
      document.getElementById('face').src = '/img/angry.png';
      break;
    case 'smile': 
      document.getElementById('face').src = '/img/smile.png';
      break;
    case 'dead': 
      document.getElementById('face').src = '/img/dead.png';
      break;
    default:
      document.getElementById('face').src = '/img/Face3.png';
      break;
  }
};

