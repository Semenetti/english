export default class Star {
  constructor(image, position) {
    this.image = image;
    this.position = position + 1;
  }


  // Win page generator
  generateStar() {
    const star = document.createElement('div');
    star.className = 'result__stars-block';
    star.innerText = this.position;


    if (this.image) {
      star.style = `background-image: url(../src/${this.image})`;
    }
    return star;
  }
}
