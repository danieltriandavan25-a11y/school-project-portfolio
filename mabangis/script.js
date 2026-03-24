// =============================================
// 1. ALERT BOX - welcome message on page load
// =============================================

window.onload = function () {
  alert("Welcome to our Portfolio! 👋 Thanks for visiting TRIO Studio.");
};


// =============================================
// 2. DYNAMICALLY CHANGE CONTENT
// =============================================

// Change the hero title text every 3 seconds
var titles = [
  "We Design.<br>We <span>Code.</span>",
  "We Create.<br>We <span>Build.</span>",
  "We Think.<br>We <span>Deliver.</span>"
];

var currentTitle = 0;
var heroTitle = document.querySelector(".hero h1");

setInterval(function () {
  currentTitle++;
  if (currentTitle >= titles.length) {
    currentTitle = 0;
  }
  heroTitle.innerHTML = titles[currentTitle];
}, 3000);


// Change the hero description text to match the title
var descriptions = [
  "Three people. One studio. A shared obsession with building digital things that actually matter — from pixel to production.",
  "We turn ideas into real products. From wireframes to working websites, we handle it all.",
  "Quality work, on time. We take your vision seriously and make sure it comes to life."
];

var currentDesc = 0;
var heroDesc = document.querySelector(".hero p.desc");

setInterval(function () {
  currentDesc++;
  if (currentDesc >= descriptions.length) {
    currentDesc = 0;
  }
  heroDesc.innerHTML = descriptions[currentDesc];
}, 3000);
