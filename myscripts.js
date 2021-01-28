const items = document.querySelectorAll('.side-nav__item');

function toggleOpen() {
    console.log('hello');
    this.classList.add('.item-clicked');
}

items.forEach(item => item.addEventListener('click', toggleOpen));