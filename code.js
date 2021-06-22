const images = document.querySelectorAll('.slider__img'),
      leftBtn = document.querySelector('.slider__left'),
      rightBtn = document.querySelector('.slider__right');

let count = 0;

leftBtn.addEventListener('click', () => {
    count--;
    if (count == -1) {
        count = images.length - 1;
    }
    update();
});

rightBtn.addEventListener('click', () => {
    count++;
    if (count == images.length) {
        count = 0;
    }
    update();
});

function update() {
    images.forEach((image) => {
        image.style.display = 'none';
    });
    images[count].style.display = 'block';
}

update();