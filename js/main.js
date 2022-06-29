// OUR SKILLS Width On Scrolling
//skills section
let ourSkillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let skills = document.querySelectorAll(".skills .skillP");
let ourSkillsPercentageSection = document.querySelector(".our-skills");
let SkillStarted = false; // Function Started ? NO
//Stats Section
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? NO
window.onscroll = function () {
  //For progrees bar and skills persentage
  if (window.scrollY >= ourSkillsSection.offsetTop) {
    //For prograss bar
    console.log("Reached Skill Section");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    //For skills persentage
    if (!SkillStarted) {
      skills.forEach((num) => startCount(num));
    }
    SkillStarted = true;
  }
  //Our Awsome Stats section
  if (window.scrollY >= statsSection.offsetTop) {
  if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal);
}


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


