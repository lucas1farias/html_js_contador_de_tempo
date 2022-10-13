

class Clock {
  constructor() {
    this.second = 0
    this.minute = 0
    this.hour = 0
    
    this.hourElement = document.querySelector('.hours')
    this.minuteElement = document.querySelector('.minutes')
    this.secondElement = document.querySelector('.seconds')
    this.secondElement.textContent = this.second
    this.minuteElement.textContent = this.minute
    let launcher = setInterval(() => {
      //
      this.incrementSecond()

      //
      this.nullSecond()
      this.nullMinute()

      //
      this.shapeSecond()
      this.shapeMinute()
      this.shapeHour()

      
    }, 1000)
  }
  
  // Segundos de 10 até 59 perdem "0" a <-
  setSecondAboveNine() {
    this.secondElement.textContent = ':' + this.second
  }
  
  // Segundos de 1 até 9 recebem "0" a <-
  setSecondBelowNine() {
    this.secondElement.textContent = ':0' + this.second
  }

  // Minutos de 1 até 9 recebem "0" a <-
  setMinuteBelowNine() {
    this.minuteElement.textContent = '0' + this.minute
  }
  
  // Minutos de 10 até 59 perdem "0" a <-
  setMinuteAboveNine() {
    this.minuteElement.textContent = this.minute
  }

  setHourBelowNine() {
    this.hourElement.textContent = '0' + this.hour + ':'
  }

  setHourAboveNine() {
    this.hourElement.textContent = this.hour + ':'
  }

  setSecondAsNull() {
    this.secondElement.textContent = ':00'
  }

  incrementSecond() {
    this.second++
  }

  incrementMinute() {
    this.minute++
  }

  incrementHour() {
    this.hour++
  }

  shapeSecond() {
    if(this.second <= 9) {
      this.setSecondBelowNine()
    } else if(this.second > 9) {
      this.setSecondAboveNine()
    }
  }

  shapeMinute() {
    if(this.minute <= 9) {
      this.setMinuteBelowNine()
    } else if(this.minute > 9) {
      this.setMinuteAboveNine()
    }
  }

  shapeHour() {
    if(this.hour <= 9) {
      this.setHourBelowNine()
    } else if(this.hour > 9) {
      this.setHourAboveNine()
    }
  }

  resetSecond() {
    this.second = 0
  }

  resetMinute() {
    this.minute = 0
  }

  nullSecond() {
    if(this.second > 59) {
      this.setSecondAsNull()
      this.resetSecond()
      this.incrementMinute()
      this.setMinuteBelowNine()
    }
  }

  nullMinute() {
    if(this.minute === 59 && this.second === 59) {
      this.setSecondAsNull()
      this.resetSecond()
      this.resetMinute()
      this.incrementHour()
      this.setHourBelowNine()
    }
  }
}

function char() {
  let chars = 'abcdef'
  let numbers = '0123456789'
  let hexadecimal = []
  
  /*
  RESULTADO: [a, b, c, d, e, f, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  1) Se feito manualmente, ao salvar, o array formata uma string por
  linha (não desejado)
  */
  for (let index of chars) {
    hexadecimal.push(index)
  }
  
  for (let index of numbers) {
    hexadecimal.push(index)
  }

  return hexadecimal[Math.floor(Math.random() * (hexadecimal.length - 0) + 0)]
}

function hexadecimal() {
  return `#${char()}${char()}${char()}${char()}${char()}${char()}`
}

let clock = new Clock()

// Parte que muda a cor dos segundos a cada 3 segundos
let counter = 0
let clockSpanSecond = document.querySelector('.seconds')

setInterval(() => {
  counter ++
  if (counter % 3 === 0) {
    clockSpanSecond.style.transition = 'ease 1s'
    clockSpanSecond.style.color = hexadecimal()
    clockSpanSecond.style.textShadow = `0 0 5px ${hexadecimal()}`
  }
}, 1000)
