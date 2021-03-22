class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();

    this.timer();
  }

  reset() {
    this.setNewWord();
    
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
      document.addEventListener('keyup', (event) => {
      const symbol = this.currentSymbol.textContent.toLowerCase();
      const symbolChar = symbol.charCodeAt('0');
      const keyChar = event.key.charCodeAt('0');
      //console.log(symbolChar, symbol, event.key, keyChar);
      if (event.location === 1 || event.location === 2) {
        event.preventDefault();
      } else if ( keyChar == symbolChar) {
        this.success()
      } else if (keyChar !== symbolChar) {
        this.fail();
        
      }
    })
  }

  timer() {
    let countDown = this.wordElement.querySelectorAll('.symbol').length;
    document.getElementById('timer').innerHTML = countDown;
    let inteval = setInterval(() => {
        countDown = countDown - 1;
        document.getElementById('timer').innerHTML = countDown;
        if (countDown <= 0) {
          document.getElementById('timer').innerHTML = '0';
          clearInterval(inteval);
          this.reset();
          this.timer();
        }
      }, 1000)

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'love это',
      'bob',
        // 'awesome',
        // 'netology',
        // 'hello',
        // 'kitty',
        // 'rock',
        // 'youtube',
        // 'popcorn',
        // 'cinema',
        // 'love',
        // 'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

