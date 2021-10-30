let options = ["piedra", "papel", "tijera"];

function rock() {
  let bot = Math.random() * 2;
  if (bot.toFixed() == 0) {
      let emp = 'EMPATE'
    document.getElementById('jugada').innerHTML =  emp ;
  } else if (bot.toFixed() == 1) {
      let lost = 'PERDISTE'
    document.getElementById('jugada').innerHTML = lost ;
  } else {
      let win = 'GANASTE'
    document.getElementById('jugada').innerHTML = win ;
  }
  
  document.getElementById('bot').innerHTML = ' El bot jugo: \n' + options[(bot.toFixed())];
  
}

function paper() {
    let bot = Math.random() * 2;
    if (bot.toFixed() == 1) {
        let emp = 'EMPATE'
      document.getElementById('jugada').innerHTML =  emp ;
    } else if (bot.toFixed() == 2) {
        let lost = 'PERDISTE'
      document.getElementById('jugada').innerHTML = lost ;
    } else {
        let win = 'GANASTE'
      document.getElementById('jugada').innerHTML = win ;
    }
    
    document.getElementById('bot').innerHTML = ' El bot jugo: \n' + options[(bot.toFixed())];
    
  }


  function scissor() {
    let bot = Math.random() * 2;
    if (bot.toFixed() == 2) {
      let emp = 'EMPATE'
    document.getElementById('jugada').innerHTML =  emp ;
  } else if (bot.toFixed() == 0) {
      let lost = 'PERDISTE'
    document.getElementById('jugada').innerHTML = lost ;
  } else {
      let win = 'GANASTE'
    document.getElementById('jugada').innerHTML = win ;
  }
  
  document.getElementById('bot').innerHTML = ' El bot jugo: \n' + options[(bot.toFixed())];
  
}
   