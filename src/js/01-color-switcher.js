
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.body;
  
  let intervalId = null; // Змінна для збереження ідентифікатора setInterval
  
  // Функція для зміни кольору фону
  function changeBackgroundColor() {
    body.style.backgroundColor = getRandomHexColor();
  }
  
  // Обробник для кнопки "Start"
  function onStartButtonClick() {
    startButton.disabled = true; // Вимикаємо кнопку "Start" після натискання
    stopButton.disabled = false; // Активуємо кнопку "Stop"
    intervalId = setInterval(changeBackgroundColor, 1000); // Розпочинаємо зміну кольору кожну секунду
  }
  
  // Обробник для кнопки "Stop"
  function onStopButtonClick() {
    startButton.disabled = false; // Активуємо кнопку "Start"
    stopButton.disabled = true; // Вимикаємо кнопку "Stop"
    clearInterval(intervalId); // Зупиняємо зміну кольору
    body.style.backgroundColor = ''; // Скидаємо фон на початковий
  }
  
  startButton.addEventListener('click', onStartButtonClick);
  stopButton.addEventListener('click', onStopButtonClick);
  