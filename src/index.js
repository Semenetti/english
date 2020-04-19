// import './js/navigation';
import create from './js/create';
import Card from './js/Card';
import cards from './js/cards';
import { set, get } from './js/storage';
import EndRound from './js/Round';
import Star from './js/Star';

const { body } = document;
const wrapper = document.getElementById('wrapper');
const gameMode = document.getElementById('game-mode');
const hiddenMenuLinks = document.querySelector('.overlay-content');
const PLAY = 'PLAY';
const TRAIN = 'TRAIN';
const RIGHT = 'RIGHT';
const WRONG = 'WRONG';

const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');

openMenuBtn.onclick = () => {
  document.querySelector('#navbar').style.width = '100%';
  document.querySelectorAll('.open')[0].style.opacity = 0;
};

closeMenuBtn.onclick = () => {
  document.querySelector('#navbar').style.width = '0';
  document.querySelectorAll('.open')[0].style.opacity = 1;
};

const openedMenuContent = document.getElementById('navbar');
openedMenuContent.onclick = () => {
  document.querySelector('#navbar').style.width = '0';
  document.querySelectorAll('.open')[0].style.opacity = 1;
};


const getCurrentGameMode = () => ((gameMode.checked) ? PLAY : TRAIN);

if (getCurrentGameMode() === PLAY) {
  body.classList.add('play');
} else {
  body.classList.add('train');
}


const playCurrentWord = (src) => {
  const audio = new Audio(src);
  audio.preload = "auto";
  return audio.play();
};

const playAudio = (e) => {
  if (e.target.closest('.image-block')) {
    const audioSrc = `../src/${e.target.closest('.image-block').audio}`;

    playCurrentWord(audioSrc);
  }
};


function shuffle(array) {
  const newArr = array;
  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}


const getAudioFromCurrentPageCards = () => {
  const currentLevelAudioQueue = [];
  const currentCardsToPlay = document.querySelectorAll('.image-block');
  currentCardsToPlay.forEach((i) => {
    currentLevelAudioQueue.push(i.audio);
  });

  shuffle(currentLevelAudioQueue);
  return currentLevelAudioQueue;
};

const winAudioIfClickedRightWord = () => {
  const audioSrc = '../src/audio/correct.mp3';

  playCurrentWord(audioSrc);
};

const loseAudioIfClickedWrongWord = () => {
  const audioSrc = '../src/audio/error.mp3';
  playCurrentWord(audioSrc);
};


const getWrapper = () => {
  const cardsContainer = document.getElementById('cards-content');
  cardsContainer.innerHTML = '';
  return cardsContainer;
};

const getMainImages = () => {
  const images = [];
  for (let i = 1; i < cards.length; i += 1) {
    images.push(cards[i][0].image);
  }
  return images;
};

const getMainHeaders = () => {
  const headers = [];
  for (let i = 0; i < cards[0].length; i += 1) {
    headers.push(cards[0][i]);
  }
  return headers;
};

const addRotationByClickBtn = () => {
  document.querySelector('.content').addEventListener('click', (e) => {
    if (e.target.closest('span')) {
      const flip = e.target.closest('.flip');
      const font = e.target.closest('.flip').firstChild;
      const back = e.target.closest('.flip').lastChild;

      font.style.transform = 'rotateY(180deg)';
      font.style.opacity = '0';

      back.style.opacity = '1';
      back.style.transform = 'rotateY(0deg)';

      flip.addEventListener('mouseleave', () => {
        back.style.opacity = '0';
        back.style.transform = 'rotateY(-180deg)';

        font.style.transform = 'rotateY(0deg)';
        font.style.opacity = '1';
      });
    }
  });
};

const generateCurrentLevelCards = (data) => {
  const currentLevelCards = [];
  cards[data].forEach((elem) => {
    currentLevelCards.push(new Card(elem));
  });
  addRotationByClickBtn();
  return currentLevelCards;
};

const createButton = () => {
  const btn = create('button', 'start-game start', ['id', 'start-game']);
  btn.innerText = 'Start Game';
  return btn;
};

const deleteExistingBtn = () => {
  if (document.getElementById('start-game')) {
    const btn = document.getElementById('start-game');
    btn.remove();
  }
};


// const removeEventListeners = (node) => {
//   if (document.body.contains(node)) {
//     const clone = node.cloneNode(true);
//     node.parentNode.replaceChild(clone, node);
//   }
// };

const getStarsWrapper = () => {
  const starsContainer = document.querySelector('.stars-block');
  starsContainer.innerHTML = '';
  return starsContainer;
};

const renderAnswer = () => {
  const starsWrapper = getStarsWrapper();
  const starsToRender = get('answersHistoryArray');
  const arr = [];

  for (let i = 0; i < starsToRender.length; i += 1) {
    // starsToRender.forEach((el) => {
    const star = starsToRender[i];
    const position = i;
    if (star === RIGHT) {
      const image = 'img/star-win.svg';
      const currentStar = new Star(image, position);
      arr.push(currentStar);
    } else {
      const image = 'img/star.svg';
      const currentStar = new Star(image, position);
      arr.push(currentStar);
    }
    // });
  }

  arr.forEach((el) => {
    const elem = el;
    starsWrapper.append(elem.generateStar());
  });
};


const addAnswer = (answer) => {
  const arrayWithAnswers = get('answersHistoryArray');
  if (answer === RIGHT) {
    arrayWithAnswers.push(RIGHT);
  } else {
    arrayWithAnswers.push(WRONG);
  }
  set('answersHistoryArray', arrayWithAnswers);
  renderAnswer();
};

const goToMainPage = () => {
  setTimeout(() => {
    document.location.reload(true);
  }, 4000);
};


const renderMistakesBlock = () => {
  const starsWrapper = getStarsWrapper();
  const arrayWithAnswers = get('answersHistoryArray');

  const arrayWithWrongAnswers = arrayWithAnswers.filter((word) => word === WRONG);
  const arrWithWrongAnswers = [];

  for (let i = 0; i < arrayWithWrongAnswers.length; i += 1) {
    const position = i;

    const image = 'img/star.svg';
    const currentStar = new Star(image, position);
    arrWithWrongAnswers.push(currentStar);
  }

  arrWithWrongAnswers.forEach((el) => {
    const elem = el;
    starsWrapper.append(elem.generateStar());
  });
};


const endCurrentGame = () => {
  const cardWrapper = getWrapper();

  deleteExistingBtn();
  const arrayWithAnswers = get('answersHistoryArray');
  const currentRound = {};

  if (arrayWithAnswers.includes(WRONG)) {
    currentRound.audioSrc = 'audio/failure.mp3';
    currentRound.image = 'img/failure.png';
  } else {
    currentRound.audioSrc = 'audio/success.mp3';
    currentRound.image = 'img/smile.png';
  }
  const currentCard = new EndRound(currentRound).generateRoundResult();
  cardWrapper.append(currentCard);
  renderMistakesBlock();
  setTimeout(() => {
    playCurrentWord(`../src/${currentRound.audioSrc}`);
  }, 700);
  goToMainPage();
};


let currentWordToGuessPosition = 0;

const clickedCards = (e) => {
  if (e.target.closest('.image-block')) {
    const audioSrcClicked = `../src/${e.target.closest('.image-block').audio}`;

    const currentLevel = get('audioArrayToGuess');
    let currentAudioSrc = `../src/${currentLevel[currentWordToGuessPosition]}`;

    if (audioSrcClicked === currentAudioSrc) {
      winAudioIfClickedRightWord();
      addAnswer(RIGHT);

      currentWordToGuessPosition += 1;
      if (currentWordToGuessPosition === 8) {
        console.log('End of game');
        endCurrentGame();
      }
      currentAudioSrc = `../src/${currentLevel[currentWordToGuessPosition]}`;

      e.target.closest('.image-block').classList.add('right-word');
      setTimeout(() => {
        playCurrentWord(`../src/${currentLevel[currentWordToGuessPosition]}`);
      }, 1500);
    } else {
      addAnswer(WRONG);
      loseAudioIfClickedWrongWord();
    }
  }
};


const startGame = () => {
  const currentClickedCards = document.querySelector('.content');
  set('answersHistoryArray', []);

  playCurrentWord(`../src/${get('audioArrayToGuess')[0]}`);

  const currentLevel = get('audioArrayToGuess');
  currentClickedCards.addEventListener('click', clickedCards);
  currentClickedCards.currentLevel = currentLevel;
};

const changeBtnStyle = (e) => {
  const startGameBtn = document.getElementById('start-game');
  e.target.classList.remove('start');
  e.target.classList.add('repeat');
  // e.target.innerHTML = '&#x2B6E;';
  e.target.innerHTML = '';
  e.target.style = 'background-image: url(../src/img/repeat.svg)';

  setTimeout(() => {
    startGameBtn.addEventListener('click', () => {
      playCurrentWord(`../src/${get('audioArrayToGuess')[currentWordToGuessPosition]}`);
    });
  }, 1300);
  startGame();
};


const firstClickStartBtnHandler = () => {
  const startGameBtn = document.getElementById('start-game');
  startGameBtn.addEventListener('click', changeBtnStyle, { once: true });
  set('audioArrayToGuess', getAudioFromCurrentPageCards());
};

const renderStartGameButton = () => {
  deleteExistingBtn();
  const startGameButton = createButton();
  if (getCurrentGameMode() === TRAIN) startGameButton.style.display = 'none';
  wrapper.append(startGameButton);
  firstClickStartBtnHandler();
};


const setCardsOnclickPlayAudio = () => {
  const currentCardsToPlay = document.querySelector('.content');
  currentCardsToPlay.addEventListener('click', playAudio);
};

const resetClickEventListener = (node, handler) => {
  node.removeEventListener('click', handler);
};


const animationWhenSwiftGameMode = () => {
  const mainPageCards = document.querySelectorAll('.main-card');
  const playPageCards = document.querySelectorAll('.front');
  const textBlockOnPlayCards = document.querySelectorAll('.text-block');
  const startGameBtn = document.getElementById('start-game');

  if (getCurrentGameMode() === PLAY) {
    body.classList.remove('train');
    body.classList.add('play');

    document.querySelectorAll('.open')[0].style.color = 'springgreen';
    mainPageCards.forEach((item) => {
      const element = item;
      element.style.background = 'springgreen';
      element.style.border = '5px solid springgreen';
    });
    playPageCards.forEach((item) => {
      const element = item;
      element.style.background = 'springgreen';
      element.style.border = '5px solid springgreen';
    });

    textBlockOnPlayCards.forEach((item) => {
      const element = item;
      element.style.opacity = '0';
      setTimeout(() => {
        element.style.display = 'none';
      }, 100);
    });

    if (startGameBtn !== null) {
      startGameBtn.style.display = 'block';
      setTimeout(() => {
        startGameBtn.style.opacity = '1';
      }, 0);
    }
  } else {
    body.classList.remove('play');
    body.classList.add('train');
    document.querySelectorAll('.open')[0].style.color = 'salmon';
    mainPageCards.forEach((item) => {
      const element = item;
      element.style.background = 'salmon';
      element.style.border = '5px solid salmon';
    });
    playPageCards.forEach((item) => {
      const element = item;
      element.style.background = 'salmon';
      element.style.border = '5px solid salmon';
    });
    textBlockOnPlayCards.forEach((item) => {
      const element = item;
      setTimeout(() => {
        element.style.opacity = '1';
      }, 0);
      element.style.display = 'block';
    });

    if (startGameBtn !== null) {
      startGameBtn.style.opacity = '0';
      setTimeout(() => {
        startGameBtn.style.display = 'none';
      }, 100);
    }
  }
};


const renderCardsToPlay = (data) => {
  const cardWrapper = getWrapper();
  generateCurrentLevelCards(data).forEach((card) => {
    cardWrapper.append(card.generateCards());
  });
  renderStartGameButton();

  if (getCurrentGameMode() === TRAIN) {
    setCardsOnclickPlayAudio();
  }
  animationWhenSwiftGameMode();
};

const resetCssClassOnMenu = () => {
  const allHiddenMenuLinks = hiddenMenuLinks.querySelectorAll('a');
  allHiddenMenuLinks.forEach((i) => {
    const node = i;
    node.classList.remove('active');
  });
};

const addActiveClassToClickedMenu = (clickedMenuElemId) => {
  resetCssClassOnMenu();
  hiddenMenuLinks.querySelectorAll('a')[clickedMenuElemId].classList.add('active');
};

const addMainPageCardsClickHandler = () => {
  document.querySelector('.content').addEventListener('click', (e) => {
    if (e.target.closest('.main-card')) {
      const clickedCardId = e.target.closest('.main-card').getAttribute('data-id');
      addActiveClassToClickedMenu(clickedCardId);
      renderCardsToPlay(clickedCardId);
    }
  });
};

const renderMainPage = () => {
  const cardWrapper = getWrapper();
  const images = getMainImages();
  const headers = getMainHeaders();

  deleteExistingBtn();

  for (let i = 0; i < cards[0].length; i += 1) {
    const currentMainCardToRender = {};
    currentMainCardToRender.word = headers[i];
    currentMainCardToRender.image = images[i];
    const currentCard = new Card(currentMainCardToRender).generateMainCard();
    currentCard.setAttribute('data-id', i + 1);
    cardWrapper.append(currentCard);
  }
  addMainPageCardsClickHandler();
  animationWhenSwiftGameMode();
};

const disableOnclickAudioInPlayMode = () => {
  const currentCards = document.querySelector('.content');
  if (getCurrentGameMode() === PLAY) {
    // removeEventListeners(currentCards);
    resetClickEventListener(currentCards, playAudio);
  } else {
    setCardsOnclickPlayAudio();
  }
};

const clearCardStylesAfterSwitchMode = () => {
  currentWordToGuessPosition = 0;
  set('audioArrayToGuess', []);
  if (document.querySelector('.right-word')) {
    const currentClickedCards = document.querySelector('.content');
    currentClickedCards.removeEventListener('click', clickedCards);
    document.querySelectorAll('.right-word').forEach((i) => {
      const a = i;
      a.classList.remove('right-word');
    });
  }

  if (document.querySelector('.stars-block')) {
    // document.querySelector('.stars-block').innerHTML = '';
    getStarsWrapper();
  }

  if (document.querySelector('.main-card')) {
    deleteExistingBtn();
  } else {
    renderStartGameButton();
  }
};

const renderCardsByClickMenuLinks = (e) => {
  clearCardStylesAfterSwitchMode();
  currentWordToGuessPosition = 0;
  getStarsWrapper();
  // del('answersHistoryArray');
  if (e.target.closest('a')) {
    const clickedCardId = e.target.closest('a').getAttribute('data-id');
    if (clickedCardId === '0') {
      renderMainPage();
    } else {
      renderCardsToPlay(clickedCardId);
    }
    addActiveClassToClickedMenu(clickedCardId);
  }
};

hiddenMenuLinks.addEventListener('click', renderCardsByClickMenuLinks);


gameMode.addEventListener('change', () => {
  clearCardStylesAfterSwitchMode();
  animationWhenSwiftGameMode();
  disableOnclickAudioInPlayMode();
});

window.onload = () => {
  renderMainPage();
};
