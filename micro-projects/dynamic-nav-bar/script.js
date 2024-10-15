const list = document.querySelectorAll('.list');

function active()  {
    list.forEach((i) => {
        i.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach((i) => {
    i.addEventListener('click', active);
});