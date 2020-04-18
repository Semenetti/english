export default class EndRound {
  constructor(
    {
      image, audioSrc,
    },
  ) {
    this.image = image;
    this.audioSrc = audioSrc;
  }


  // Win page generator
  generateRoundResult() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('result-page');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('result__image-block');

    if (this.audioSrc) {
      imageWrapper.audio = this.audioSrc;
    }
    if (this.image) {
      imageWrapper.style = `background-image: url(../src/${this.image})`;
    }

    wrapper.append(imageWrapper);

    return wrapper;
  }
}
