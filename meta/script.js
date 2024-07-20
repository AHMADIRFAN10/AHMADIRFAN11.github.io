let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
  image_1.addEventListener('click', () =>{
    var src = image_1.getAttribute('src');
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
  image_2.addEventListener('click', () =>{
    var src = image_2.getAttribute('src');
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
  image_3.addEventListener('click', () =>{
    var src = image_3.getAttribute('src');
    document.querySelector('.big-image-3').src = src;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heartButtons = document.querySelectorAll('.fa-heart');

  heartButtons.forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = 'hati.html';
      });
  });
});

document.getElementById('languageToggle').addEventListener('change', function() {
  const isChecked = this.checked;
  const toggleLabel = document.getElementById('toggleLabel');
  const elementsToTranslate = document.querySelectorAll('[data-en]');

  if (isChecked) {
    toggleLabel.textContent = 'Indonesian';
    elementsToTranslate.forEach(el => {
      el.textContent = el.getAttribute('data-id');
    });
  } else {
    toggleLabel.textContent = 'English';
    elementsToTranslate.forEach(el => {
      el.textContent = el.getAttribute('data-en');
    });
  }
});
