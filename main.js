let userName = prompt('İsminizi giriniz: ');
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
let greetingsText = document.querySelector('#greetings');
greetingsText.innerHTML = `Merhaba, ${
  userName ? userName : 'kodluyoruz fellow'
}! Hoşgeldin!`;
let clock = document.querySelector('#liveClock');

function settingText() {
  let dateInfo = new Date().toLocaleTimeString([], { hour12: false });
  let dayInfo = new Date().getDay();
  let dayString = '';

  if (dayInfo === 1) {
    dayString = 'Pazartesi';
  } else if (dayInfo === 2) {
    dayString = 'Salı';
  } else if (dayInfo === 3) {
    dayString = 'Çarşamba';
  } else if (dayInfo === 4) {
    dayString = 'Perşembe';
  } else if (dayInfo === 5) {
    dayString = 'Cuma';
  } else if (dayInfo === 6) {
    dayString = 'Cumartesi';
  } else if (dayInfo === 0) {
    dayString = 'Pazar';
  }

  let calendar = dateInfo + ' ' + dayString;
  clock.innerHTML = calendar;
  setTimeout(settingText, 1000);
}

settingText();
