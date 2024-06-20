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
let multiBox = document.getElementById("multi-list");

let autoclic = document.getElementById("auto");
let autozone = document.getElementById('autozone');
let autop = document.getElementById('autoP');

let times2xpoint = document.getElementById("2x");
let times5xpoint = document.getElementById("5x");
let times10xpoint = document.getElementById("10x");
let times100xpoint = document.getElementById("100x");

let times2xzoneprice = document.getElementById("price2x");
let times5xzoneprice = document.getElementById("price5x");
let times10xzoneprice = document.getElementById("price10x");
let times100xzoneprice = document.getElementById("price100x");

let auto_value = 0;
let autoPrice =  100;
var points = 0;
let credit = 0;
var clickValue = 1;
let multi = 1;
let clic =0;

let multiplier2x = 2;
let multiplier5x = 5;
let multiplier10x = 10;
let multiplier100x = 100;

let times2xpointPrice = 10;
let times5xpointPrice = 50;
let times10xpointPrice = 100;
let times100xpointPrice = 1000;

let autoclicInterval = null;

function increaseCredits() {
  credit += clickValue;
}

function increaseCookies() {
  points += clickValue;
  increaseCredits();
  displayCookie();
  buttonActiver();
}

function displayCookie() {
  pointsTag.innerHTML = `Points: ` + points;
  creditTag.innerHTML = `Credit: <br>` + credit;
}

function multiplierTaggle() {
  times2xpoint.disabled = credit < times2xpointPrice;
  times5xpoint.disabled = credit < times5xpointPrice;
  times10xpoint.disabled = credit < times10xpointPrice;
  times100xpoint.disabled = credit < times100xpointPrice;
  autoclic.disabled = credit < autoPrice;
}

function displayMultiplier() {
  multiBox.innerHTML += "<br>" + multi;
}

function applyMultiplier(multiplier, price, element) {
  credit -= price;
  clickValue *= multiplier;

  buttonActiver();
  displayCookie();
  multiBox.innerHTML = "Multiplier : <br>" +clickValue + "*";

  if(credit<price){
     element.disabled = true; // Disable button after purchase
  }
}

function buttonActiver() {
  multiplierTaggle();
}

function rainbow(button) {
  button.addEventListener('click', function () {
    this.classList.add('rainbow');
    setTimeout(() => this.classList.remove('rainbow'), 1000);
  });
}

function buyAutoClicker() {
  if (credit >= autoPrice) {
    auto_value +=  0.1; //add 1 clic every 10 sec
    credit -= autoPrice;
    autoPrice += 10;
    autoclic.disabled = true;
    autoclicInterval = setInterval(increaseCookies, 10000);
    displayCookie();
    buttonActiver();
    autozone.innerHTML = "clic/sec : " + auto_value.toFixed(1);
    autop.innerHTML = autoPrice + "C"
  }
}

coockieBtn.addEventListener("click", increaseCookies);

times2xpoint.addEventListener("click", () => {
  applyMultiplier(multiplier2x, times2xpointPrice, times2xpoint);
  times2xpointPrice +=5;
  times2xzoneprice.innerHTML =  times2xpointPrice + "C";
});

times5xpoint.addEventListener("click", () => {
  applyMultiplier(multiplier5x, times5xpointPrice, times5xpoint);
  times5xpointPrice += 10;
  times5xzoneprice.innerHTML =  times5xpointPrice + "C";
});

times10xpoint.addEventListener("click", () => {
  applyMultiplier(multiplier10x, times10xpointPrice, times10xpoint);
  times10xpointPrice += 30;
  times10xzoneprice.innerHTML =  times10xpointPrice + "C";
});

times100xpoint.addEventListener("click", () => {
  applyMultiplier(multiplier100x, times100xpointPrice, times100xpoint);
  times100xpointPrice += 200;
  times100xzoneprice.innerHTML =  times100xpointPrice + "C";
});

autoclic.addEventListener("click", buyAutoClicker);

[rainbow(times2xpoint), rainbow(times5xpoint), rainbow(times10xpoint), rainbow(times100xpoint)];

displayCookie();
buttonActiver();