// Step 1 - base structure
// variables
// var counter = 0;
// var coockieBtn = document.getElementById("coockie");
// var credit = document.getElementById("credit");
// var points = document.getElementById("points");

// points.innerHTML = `Points: ${counter}`;
// credit.innerHTML = `Credits: ${counter}`;

// coockieBtn.addEventListener("click", () => {
//     points.innerHTML = `Points: ${counter}`;
//     credit.innerHTML = `Credits: ${counter}`;
//     counter += 1;
// })
// var bonus = document.getElementById("bonus");
// bonus.addEventListener("click", () => {
//     console.log(counter);
// })

// ===============================================================================
// Step 2 -
//      Done at Step 1
// ===============================================================================
// Step 3 -
//      Done at Step 1
// ===============================================================================
// Step 4 -

// ===============================================================================
// Step 5 -

// ===============================================================================
// Step 6 -

// ===============================================================================
// Step 7 - Multiplier table

// const multiplierTableCounter = {
//     "2x": 0,
//     "5x": 0,
//     "10x": 0,
//     "100x": 0,
// };
// console.log(multiplierTableCounter["2x"]); // output: 0
// multiplierTableCounter["2"] = 10;
// console.log(multiplierTableCounter["2x"]) // output: 10
// ===============================================================================
// Step 8 -

// ===============================================================================
// Step 9 -

// ===============================================================================
// Step 10 -

// ===============================================================================
// Step 11 -

// ===============================================================================
// Step 12 -

// ===============================================================================
// This allows us to keep count of the times a certain multiplier was purchased

let pointsTag = document.getElementById("points");
let coockieBtn = document.getElementById("coockie");
let creditTag = document.getElementById("credit");
let multiBox = document.getElementById("multi-list"); // div that show all the multipy buttons

//multiplye buttons
let times2xpoint = document.getElementById("2x");
let times5xpoint = document.getElementById("5x");
let times10xpoint = document.getElementById("10x");
let times100xpoint = document.getElementById("100x");

//variables to calculate
var points = 0;
let credit = 0;
var clickValue = 1;
let multiplerList = [];

let multiplier2x = 2;
let multiplier5x = 5;
let multiplier10x = 10;
let multiplier100x = 100;

let times2xpointPrice = 10;
let times5xpointPrice = 20;
let times10xpointPrice = 30;
let times100xpointPrice = 40;

// will add give the points value to the credit
function increaseCredits() {
  credit += clickValue;
}

//will increase the value of points and call credit function to assign the the same value and call display function to display result
function increaseCookies() {
  points += clickValue;
  increaseCredits();
  displayCookie();
  buttonActiver();
}

function displayCookie() {
  pointsTag.innerText = `Points: ${points}`;
  creditTag.innerText = `Credit: ${credit}`;
  //   console.log(score);
}

function multiplierTaggle() {
  if (credit >= times2xpointPrice) {
    times2xpoint.disabled = false;
  } else {
    times2xpoint.disabled = true;
  }

  if (credit >= times5xpointPrice) {
    times5xpoint.disabled = false;
  } else {
    times5xpoint.disabled = true;
  }

  if (credit >= times10xpointPrice) {
    times10xpoint.disabled = false;
  } else {
    times10xpoint.disabled = true;
  }

  if (credit >= times100xpointPrice) {
    times100xpoint.disabled = false;
  } else {
    times100xpoint.disabled = true;
  }
}
multiBox.innerHTML = "List Multiplier";
function displayMultiplier() {
  if (multiplerList.length > 0) {
    multiplerList.forEach((item) => {
      let p = document.createElement("p");
      p.innerText = item;
      multiBox.appendChild(p);
    });
  }
}

function times2xpointfunction() {
  credit -= times2xpointPrice;
  clickValue *= multiplier2x;
  times2xpointPrice *= multiplier2x;
  buttonActiver();
  displayCookie();
  multiplerList.push("2x");

  multiBox.innerHTML = "List Multiplier"; //to make the list empty
  displayMultiplier();
}

function buttonActiver() {
  multiplierTaggle();
  console.log("buttonActiver");
}

displayMultiplier();
displayCookie();

times2xpoint.disabled = true;
times5xpoint.disabled = true;
times10xpoint.disabled = true;
times100xpoint.disabled = true;

coockieBtn.addEventListener("click", increaseCookies);

times2xpoint.addEventListener("click", times2xpointfunction);
