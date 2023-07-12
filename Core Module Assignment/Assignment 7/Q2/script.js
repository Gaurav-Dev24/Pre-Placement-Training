const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function updateTime() {
  const now = new Date();
  hours.innerHTML = now.getHours();
  let ampm = 'AM';
  
  if (hours > 12) {
    hours -= 12;
    ampm = 'PM';
  }

  minutes.innerHTML = String(now.getMinutes()).padStart(2, '0');
  seconds.innerHTML = String(now.getSeconds()).padStart(2, '0');
}

setInterval(updateTime, 1000);