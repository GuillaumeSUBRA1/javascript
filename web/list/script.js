let numbers = [];
let listElement = document.getElementById('number-list');

function add() {
    const newNumber = numbers.length + 1;
    numbers.push(newNumber);
    render();
}

function remove() {
    numbers.pop();
    render();
}

function render() {
    listElement.innerHTML = '';
    numbers.forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        listElement.appendChild(listItem);
    });
}
