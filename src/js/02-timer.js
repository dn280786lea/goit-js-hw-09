import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
   input : document.querySelector('input#datetime-picker'),
   dataStart: document.querySelector('button[data-start]'),
   dataDay: document.querySelector('[data-days]'),
   dataHour: document.querySelector('[ data-hours]'),
   dataMinute: document.querySelector('[data-minutes]'),
   dataSecond: document.querySelector('[data-seconds]'),
};
let timerId = null;
let selectTime = null;
let todayTime = null;

refs.dataStart.disabled = true;
refs.dataStart.addEventListener('click', handledataStartClick)



function handledataStartClick(evt) {
  timerId = setInterval(() => {
    todayTime = Date.now();
    const currentTime = selectTime - todayTime;
    const time = convertMs(currentTime);
    console.log(time);
    updateTime(time);
    if (currentTime < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const dataFlatpickr =
    flatpickr('input#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
selectTime = selectedDates[0];

        if(selectTime > Date.now()){
            refs.dataStart.removeAttribute("disabled");
            
        } else
        {
            Notiflix.Notify.failure('Please choose a date in the future');
           refs.dataStart.setAttribute('disabled', 'disabled');
        }
        
}
});

function updateTime ({ days, hours, minutes, seconds }) {
refs.dataDay.textContent = days;
refs.dataHour.textContent = hours;
refs.dataMinute.textContent = minutes;
refs.dataSecond.textContent = seconds;
};


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

