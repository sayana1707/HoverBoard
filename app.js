// Получение доски
const board = document.querySelector('#board')

// Массив цветов
const colors = ['#e92de9', '#1e99e0', '#e7e430', '#e78830', '#3fe730']

// Количество клеток
const SQUARES_NUMBER = 650

// Генерация доски
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

// Добавить цвет
function setColor(element) {
    const color = getRandomColor( )
    element.style.background = color
}

// Убрать цвет
function removeColor(element) {
    element.style.background = '#1d1d1d'
}

// Получение случайного цвета из массива colors
function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}