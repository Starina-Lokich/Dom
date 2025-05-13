import goblin from "../img/goblin.png";
import "../css/style.css";

// Создаем игровое поле 4x4
const createGameBoard = () => {
  const gameBoard = document.createElement("div");
  gameBoard.className = "game-board";

  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    gameBoard.appendChild(cell);
  }

  return gameBoard;
};

// Добавляем игровое поле на страницу
document.body.appendChild(createGameBoard());

// Загружаем изображение персонажа
const characterImage = new Image();
characterImage.src = goblin;
characterImage.className = "character";

// Функция для рандомного перемещения персонажа
function moveCharacter() {
  const cells = document.querySelectorAll(".cell");

  // Получаем текущий индекс персонажа
  let currentCharacter = document.querySelector(".character");
  let currentIndex = -1;

  if (currentCharacter) {
    // Находим текущий индекс персонажа
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].contains(currentCharacter)) {
        currentIndex = i;
        break;
      }
    }
  }

  // Генерируем новый индекс, пока он не будет отличаться от текущего
  let newRandomIndex;
  do {
    newRandomIndex = Math.floor(Math.random() * cells.length);
  } while (newRandomIndex === currentIndex);

  // Удаляем существующее изображение
  if (document.querySelector(".character")) {
    document.querySelector(".character").remove();
  }

  // Добавляем новое изображение в случайную ячейку
  cells[newRandomIndex].appendChild(characterImage.cloneNode(true));
}

// Перемещаем персонажа каждые 2 секунды
setInterval(moveCharacter, 2000);
