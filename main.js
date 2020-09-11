const toggleButton = document.querySelector('.burger');
const list = document.querySelector('.menu');

toggleButton.addEventListener('click', toggleItems);

function toggleItems() {
    if (list.classList.contains('menu')) {
        list.classList.remove('menu')
    } else {
        list.classList.add('menu')
    }
}