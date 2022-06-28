// The End Of the year Date to countdown to
// 1000 milliseconds = 1 sec


let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  //Find The Date Differnece Between Now And CountDown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  // console.log(days);

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // console.log(hours);
  
  let minuets = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    // console.log(minuets);
  
  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);
    // console.log(seconds);
  
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minuets;
  document.querySelector(".seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000);
