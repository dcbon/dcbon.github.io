// jellygotchi by dcbon

let name = ''
let deathCause = ''
let message = `R.I.P ${name} just ${deathCause}. Would you like to restart?`


// let red = document.getElementById('red')
// let yellow = document.getElementById('yellow')
// let green = document.getElementById('green')
// let blue = document.getElementById('blue')
// let purple = document.getElementById('purple')
// let black = document.getElementById('black')


let hunger = parseInt(document.getElementById('hungerLevel').innerHTML)
let full = parseInt(document.getElementById('fullLevel').innerHTML)
let bored  = parseInt(document.getElementById('boredLevel').innerHTML)
let tired = parseInt(document.getElementById('tiredLevel').innerHTML)


function colorPicked() {
  name = document.getElementById('name').value
  let chooseJelly = document.getElementById('chooseJelly')
  let play = document.getElementById('play')
  let jellyName = document.getElementById('jellyName')
  let jelly = document.getElementById('jelly')
  let color = document.getElementById('color').value
  
  
  chooseJelly.style.display = 'none'
  play.style.display = 'block'


  if (!name) {
    jellyName.innerHTML = "your jelly's name"
  } else {
    jellyName.innerHTML = `- ${name} -`
  }
  
  
  let redJelly = '/img/jelly3.png'
  let yellowJelly = '/img/jelly1.png'
  let greenJelly = '/img/jelly2.png'
  let blueJelly = '/img/jelly4.png'
  let purpleJelly = '/img/jelly5.png'
  let blackJelly = '/img/jelly6.png'


  if (color == red) {
    jelly.src = redJelly
    jellyName.style.color = '#ff7d53';
  }
  if (color == yellow) {
    jelly.src = yellowJelly
    jellyName.style.color = '#fee75c';
  }
  if (color == green) {
    jelly.src = greenJelly
    jellyName.style.color = '#0b950e';
  }
  if (color == blue) {
    jelly.src = blueJelly
    jellyName.style.color = '#3693f4';
  }
  if (color == purple) {
    jelly.src = purpleJelly
    jellyName.style.color = '#cf4ada';
  }
  if (color == black) {
    jelly.src = blackJelly
    jellyName.style.color = '#919191';
  }

}


function isDead() {
  mood = 'dead'
  if (confirm(message)) {
    document.location.reload(true)
  }
}


function updateStat() {
  document.getElementById('boredLevel').innerHTML = bored
  document.getElementById('hungerLevel').innerHTML = hunger
  document.getElementById('fullLevel').innerHTML = full
  document.getElementById('tiredLevel').innerHTML = tired

  let mood = ''

  if (hunger <= 20 && hunger > 0) {
    mood = 'hungry'
    alert(`${name} is reaalllyyyy hunggryyy :(`)
  }
  if (hunger >= 90 && hunger < 100) {
    mood = 'happy'
    alert(`${name} is full and happy :D`)
  }

  switch (mood) {
    case 'happy': 
      document.getElementById('face').src = '/img/happy.png'
      break;
    case 'sad': 
      document.getElementById('face').src = '/img/sad.png'
      break;
    case 'angry': 
      document.getElementById('face').src = '/img/angry.png'
      break;
    case 'smile': 
      document.getElementById('face').src = '/img/smile.png'
      break;
    case 'dead': 
      document.getElementById('face').src = ''
      break;
    default:
      document.getElementById('face').src = '/img/face3.png'
      break;
  }
}


function playClicked() {
  bored -= 5
  hunger += 10

  if (bored < 0) {
    alert(`${name} isn't bored anymore`)
    bored = 0
  } else if (bored >100) {
    deathCause = 'died of boredom'
    isDead()
  }
  updateStat()
}


function feedClicked() {
  hunger -= 5
  full += 10

  if (hunger < 0) {
    deathCause = 'starved to death'
    isDead()
  } else if (hunger > 100) {
    deathCause = 'choke to death'
    isDead()
  }
  updateStat()
}


function pooClicked() {
  full -= 10
  tired += 5
  
  if (full < 0) {
    deathCause = 'died.. just because..'
    isDead()
  } else if (full > 0) {
    deathCause = 'died of embarrasment'
    isDead()
  }
  updateStat()
}


function napClicked() {
  tired -= 10
  bored += 5
  
  if (tired < 0) {
    deathCause = 'died of heart failure'
    isDead()
  } else if (tired > 0) {
    deathCause = 'cursed to sleep forever'
    isDead()
  }
  updateStat()
}

