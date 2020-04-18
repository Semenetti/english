export default class Card {
  constructor(
    {
      word, translation, image, audioSrc,
    },
  ) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.audioSrc = audioSrc;
    this.gameMode = document.getElementById('game-mode').checked;
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }


  // Main page cards generator
  generateMainCard() {
    let template = '';
    const a = document.createElement('a');
    const link = this.word.split(' ').join('-');
    a.className = 'main-card';
    a.setAttribute('href', `#${link}`);

    if (this.image) {
      template += `<img class="card-img" src='../src/${this.image}' alt="${this.word}">`;
    }

    template += `<h2 class="text-shadow">${this.word}</h2>`;

    a.innerHTML = template;
    return a;
  }

  // Card generator
  generateCards() {
    // console.log(this.gameMode);
    // const template = '';
    const flip = document.createElement('div');
    flip.className = 'flip';

    const front = document.createElement('div');
    front.className = 'front';
    const frontImageWrapper = document.createElement('div');
    frontImageWrapper.className = 'image-block';
    // frontImageWrapper.setAttribute('audio', this.audioSrc);
    frontImageWrapper.audio = this.audioSrc;
    if (this.image) {
      frontImageWrapper.style = `background-image: url(../src/${this.image})`;
      // template += `<div class="front" style ='background-image: url(../src/${this.image})'>`;
    }

    const textBlock = document.createElement('div');
    textBlock.classList.add('text-block');
    const title = document.createElement('h2');
    if (this.word) {
      title.innerHTML = this.word;
      // template += `<div class='text-block'><h2 class="text-shadow">${this.word}</h2>`;
    }
    textBlock.append(title);

    const span = document.createElement('span');
    span.innerHTML = '&#x2B6E;';
    // template += '<span id=\'rotate-btn\'>&#x2B6E;</span>';
    // template += '</div>';
    // template += '</div>';
    textBlock.append(span);
    front.append(frontImageWrapper);
    front.append(textBlock);
    flip.append(front);

    const back = document.createElement('div');
    back.className = 'back';
    back.style = `background-image: url(../src/${this.image})`;

    const textBlockBack = document.createElement('div');
    textBlockBack.classList.add('text-block');
    const titleBack = document.createElement('h2');
    titleBack.innerHTML = this.translation;
    textBlockBack.append(titleBack);

    // template += `<div class="back" style ='background-image: url(../src/${this.image})'>`;
    // template += `<div class='text-block'><h2 class="text-shadow">${this.translation}</h2>`;
    // template += '</div>';
    // flip.innerHTML += template;
    back.append(textBlockBack);
    flip.append(back);
    // frontImageWrapper.onclick = () => {
    //   console.log(this);
    //   this.play();
    // };

    if (this.gameMode) {
      textBlock.style.display = 'none';
    }

    return flip;
  }


  gameMode() {
    console.log('hi');

    return this.gameMode;
  }

  // play() {
  //   this.audio = new Audio(`../src/${this.audioSrc}`);
  //   return this.audio.play();
  // }

  checkifwin() {
    return this.word;
  }
}
