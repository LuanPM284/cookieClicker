
// ================================================================
// Pseudo-Code some principles on how it all can work:
// a defaultValue that will take all transformations from the multipliers and bonus
// a total Value that is the result of all those transformations
// a display the credits that will show on screen the credits and points 
// for the bonus I need to focus on two things, add a 2 times extra totalValue and make it so it works only for 30 secondes
//  bonus (click) => totalValue * 2 (30s) => display totalValue + display counter 30s => stop * 2 and return totalValue to previous defaultValue  


// // get buttons from HTML
// const coockieBtn = document.getElementById("coockie");
// const bonusBtn = document.getElementById("bonus");
// const pointsDisplay = document.getElementById("points")
// const creditDisplay = document.getElementById("credit")

// // button update, to turn off when not in use
// const bonusUpdate = document.querySelector("#bonus");

// // variables that change
// let points = 0;
// let credits = 0;
// let creditClick = 1;

// // some prices and updates
// let bonusMultiplier = 2;
// let bonusPrice = 5;
// const bonusDuration = 30000;

// let bonusActive = false;

// showCredits();

// //Envent Listener
// coockieBtn.addEventListener("click", addCredit);
// bonusBtn.addEventListener("click", activateBonus);

// function showCredits() {
//   // Credits
//   creditDisplay.innerHTML = "Credit : " + formatNumber(credits);
//   pointsDisplay.innerHTML = "Point : " + formatNumber(points);
//   bonusBtn.innerHTML = `Bonus (${bonusPrice})C`
// };

// function activateBonus() {
//   if (credits >= bonusPrice && !bonusActive) {
//     credits -= bonusPrice;
//     bonusActive = true;
//     creditClick *= bonusMultiplier;
//     showCredits();
//     bonusBtn.disabled = true;
//     setTimeout(deactivateBonus, bonusDuration);
//   } else {
//     showCredits();
//   }
// }

// function deactivateBonus() {
//   creditClick /= bonusMultiplier;
//   bonusActive = false;
//   bonusBtn.disabled = false;
//   bonusPrice += 5; // Increase the cost for next use
//   showCredits();
// }


// function addCredit() {
//   credits += creditClick;
//   points += creditClick;
//   showCredits();
// };
// function addBonus() {
//   creditClick *= bonusMultiplier;
// }
// function formatNumber(num) {
//   if (num > 1000000000) {
//     return (num / 1000000000).toFixed(2) + "Mld";
//   }
//   if (num > 1000000) {
//     return (num / 1000000).toFixed(2) + "Mll";
//   }
//   if (num > 1000) {
//     return (num / 1000).toFixed(2) + "k";
//   }
//   return num;
// }
// ============================================ Code final ====================================
// Other than the timer of 30 secondes and the display of seconds( help with GPT) I was able to do the rest
// get buttons from HTML
const coockieBtn = document.getElementById("coockie");
const bonusBtn = document.getElementById("bonus");
const pointsDisplay = document.getElementById("points")
const creditDisplay = document.getElementById("credit")
const bonusTimerDisplay = document.getElementById("bonus-timer");

// button update, to turn off when not in use
const bonusUpdate = document.querySelector("#bonus");

// variables that change
let points = 0;
let credits = 0;
let creditClick = 1;

// some prices and updates
let bonusMultiplier = 2;
let bonusPrice = 5;
const bonusDuration = 30000; // 30 seconds

let bonusActive = false;
let bonusInterval = null;

showCredits();

// Event Listeners
coockieBtn.addEventListener("click", addCredit);
bonusBtn.addEventListener("click", activateBonus);

function showCredits() {
  // Credits
  creditDisplay.innerHTML = "Credit : " + formatNumber(credits);
  pointsDisplay.innerHTML = "Point : " + formatNumber(points);
  bonusBtn.innerHTML = `Bonus (${bonusPrice}C)`;
  bonusTimerDisplay.innerHTML = ""; // Clear the timer display when bonus is available
}

function activateBonus() {
  if (credits >= bonusPrice && !bonusActive) {
    credits -= bonusPrice;
    bonusActive = true;
    creditClick *= bonusMultiplier;
    showCredits();
    bonusBtn.disabled = true;
    startBonusTimer(bonusDuration / 1000); // Start the timer in seconds
    setTimeout(deactivateBonus, bonusDuration);
  } else {
    showCredits();
  }
}

function deactivateBonus() {
  creditClick /= bonusMultiplier;
  bonusActive = false;
  bonusBtn.disabled = false;
  bonusPrice += 5; // Increase the cost for next use
  clearInterval(bonusInterval); // Clear the interval when bonus deactivates
  showCredits();
}

function addCredit() {
  credits += creditClick;
  points += creditClick;
  showCredits();
}

function startBonusTimer(duration) {
  let timer = duration;
  bonusInterval = setInterval(function () {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    bonusTimerDisplay.innerHTML = "Timer: " + minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(bonusInterval); // Clear the interval when the timer ends
      bonusTimerDisplay.innerHTML = ""; // Clear the timer display when bonus is available
    }
  }, 1000);
  bonusTimerDisplay.innerHTML = ""; // Clear the timer display when bonus is available
}

function formatNumber(num) {
  if (num > 1000000000) {
    return (num / 1000000000).toFixed(2) + "Mld";
  }
  if (num > 1000000) {
    return (num / 1000000).toFixed(2) + "Mll";
  }
  if (num > 1000) {
    return (num / 1000).toFixed(2) + "k";
  }
  return num;
}
