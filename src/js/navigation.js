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



