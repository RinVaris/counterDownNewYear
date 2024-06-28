const items = document.querySelectorAll(".countdown-item > h4");
const NewYearMessage = document.querySelector(".new-year-message")

function initCountDate() {
  // Получаем текущее время
let nowDate = new Date();

// Получаем текущий год
let year = nowDate.getFullYear();

// Назначаем дату отчета
let countdownDate = new Date(year, 11, 31, 23, 59, 59, 999);


  // Проверяем прошла ли дата в текущем году
  if (nowDate > countdownDate) {
    countdownDate = new Date(year + 1, 11, 31, 23, 59, 59, 999);
  }
  return countdownDate;
}

let countdownDate = initCountDate();

function getCountDownTime() {
  // Получаем текущее время в миллисекундах
  const now = new Date().getTime();

  // Находим разницу времени
  const distance = countdownDate.getTime() - now;

  // Создаем переменные в миллисекундах
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  if(distance <= 0) {
    //Показываем сообщение "С новым годом"
    NewYearMessage.style.display = "block";

    //Скрыть счетчик
    items.forEach(function (item) {
      item.parentElement.style.display = "none";
    });

    //Обновляем дату отчета на сл год
    countdownDate = new Date(countdownDate.getFullYear() + 1, 5, 28, 23, 1, 0, 0);

    setTimeout(() => {
      //Скрываем сообщение
      NewYearMessage.style.display = "none";

    //Показываем счетчик
    items.forEach(function (item) {
      item.parentElement.style.display = "block";
    });

    //Обновляем дату на следующий год и перезапускаем счетчик
    getCountDownTime();
    }, 60 * 1000); //24 * 60 * 60 * 100); //24 часа

    return;
  }

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
