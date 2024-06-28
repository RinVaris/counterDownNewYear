const items = document.querySelectorAll(".countdown-item > h4");

function initCountDate() {
  // Получаем текущее время
let nowDate = new Date();

// Получаем текущий год
let year = nowDate.getFullYear();
console.log(year);

// Назначаем дату отчета
let countdownDate = new Date(year, 5, 28, 23, 16, 0, 0);

// Проверяем прошла ли дата в текущем году
if (nowDate > countdownDate) {
  countdownDate = new Date(year + 1, 5, 28, 23, 1, 0, 0);
  }
return countdownDate;
}

let countdownDate = initCountDate();

function getCountDownTime() {
  // Получаем текущее время в миллисекундах
  const now = new Date().getTime();

  // Находим разницу времени
  const distance = countdownDate.getTime() - now;

  if(distance < 0) {
    //Обновляем дату отчета на сл год
    countdownDate = new Date(countdownDate.getFullYear() + 1, 5, 28, 23, 1, 0, 0);
    return;
  }

  // Создаем переменные в миллисекундах
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // Подсчитываем дни, часы, минуты и секунды
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  // Создаем массив значений
  const values = [days, hours, minutes, seconds];

  // Обновляем значения на странице
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });
}

// Обновляем счетчик каждую секунду
let countdown = setInterval(getCountDownTime, 1000);

// Инициализируем текущее время
getCountDownTime();
