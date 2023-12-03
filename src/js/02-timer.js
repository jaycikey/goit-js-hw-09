import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

// Функція для обчислення залишкового часу у форматі { days, hours, minutes, seconds }
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Функція для додавання ведучих нулів до числа, якщо воно менше 10
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

const datePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let countdownIntervalId;
let targetDate;

// Ініціалізація flatpickr для вибору дати та часу
flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  defaultDate: new Date(), // Додайте поточну дату та час за замовчуванням
  onClose: function (selectedDates) {
    if (selectedDates[0] <= Date.now()) { // Використовуємо Date.now() для поточної дати та часу
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      targetDate = selectedDates[0];
      startButton.disabled = false;
    }
  },
});

// Забезпечуємо, що кнопка "Start" відразу деактивована
startButton.disabled = true;

// Обробник для кнопки "Start"
startButton.addEventListener('click', () => {
  if (!targetDate) {
    Notiflix.Notify.warning("Please select a future date and time");
    return;
  }

  startButton.disabled = true;

  countdownIntervalId = setInterval(() => {
    const currentTime = Date.now(); // Використовуємо Date.now() для поточної дати та часу
    const timeRemaining = targetDate - currentTime;

    if (timeRemaining <= 0) {
      clearInterval(countdownIntervalId);
      Notiflix.Notify.success("Time's up!");
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
  }, 1000);
});
