let pointsTag = document.getElementById("points");
let coockieBtn = document.getElementById("coockie");
let creditTag = document.getElementById("credit");
let multiBox = document.getElementById("multi-list");

let times2xpoint = document.getElementById("2x");
let times5xpoint = document.getElementById("5x");
let times10xpoint = document.getElementById("10x");
let times100xpoint = document.getElementById("100x");

let times2xzoneprice = document.getElementById("price2x");
let times5xzoneprice = document.getElementById("price5x");
let times10xzoneprice = document.getElementById("price10x");
let times100xzoneprice = document.getElementById("price100x");

let credit = 0;
var clickValue = 1;
let multi = 1;
let clic = 0;

let multiplier2x = 2;
let multiplier5x = 5;
let multiplier10x = 10;
let multiplier100x = 100;

let times2xpointPrice = 10;
let times5xpointPrice = 50;
let times10xpointPrice = 100;
let times100xpointPrice = 1000;

//autoclic

let autoclic = document.getElementById("auto");
let autozone = document.getElementById('autozone');
let autop = document.getElementById('autoP');

let auto_value = 0;
let autoPrice = 100;
var points = 0;

let autoclicInterval = null;

function increaseCredits() {
  credit += clickValue;
}

function increaseCookies() {
  points += clickValue;
  increaseCredits();
  displayCookie();
  multiplierTaggle();
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
  clickValue *= multiplier;
  credit -= price;
  multiplierTaggle();
  displayCookie();
  multiBox.innerHTML = "Multiplier : <br>" + clickValue + "";
  if (credit > price) {
    element.disabled = true; // Disable button after purchase
  }
}

function rainbow(button) {
  button.addEventListener('click', function () {
    this.classList.add('rainbow');
    setTimeout(() => this.classList.remove('rainbow'), 1000);
    autoclic.disabled;
  });
}

function rainbow_bonus(button) {
  button.addEventListener('click', function () {
    this.classList.add('rainbow');
    setTimeout(() => this.classList.remove('rainbow'), 30000);
    autoclic.disabled;
  });
}

function buyAutoClicker() {
  if (credit >= autoPrice) {
    auto_value += 0.1; //add 1 clic every 10 sec
    credit -= autoPrice;
    autoPrice += 10;
    autoclic.disabled = true;
    autoclicInterval = setInterval(increaseCookies, 10000);
    displayCookie();
    multiplierTaggle();
    autozone.innerHTML = "clic/sec : " + auto_value.toFixed(1);
    autop.innerHTML = autoPrice + "C"
  }
}

coockieBtn.addEventListener("click", increaseCookies);

times2xpoint.addEventListener("click", () => {
  if (credit >= times2xpointPrice) {
    applyMultiplier(multiplier2x, times2xpointPrice, times2xpoint, times2xzoneprice);
    times2xpointPrice += 5;
    times2xzoneprice.innerHTML = times2xpointPrice + "C";
  }
  multiplierTaggle();
});

times5xpoint.addEventListener("click", () => {
  if (credit >= times5xpointPrice) {
    applyMultiplier(multiplier5x, times5xpointPrice, times5xpoint, times5xzoneprice);
    times5xpointPrice += 10;
    times5xzoneprice.innerHTML = times5xpointPrice + "C";
  }
  multiplierTaggle();
});

times10xpoint.addEventListener("click", () => {
  if (credit >= times10xpointPrice) {
    applyMultiplier(multiplier10x, times10xpointPrice, times10xpoint, times10xzoneprice);
    times10xpointPrice += 30;
    times10xzoneprice.innerHTML = times10xpointPrice + "C";
  }
  multiplierTaggle();
});

times100xpoint.addEventListener("click", () => {
  if (credit >= times100xpointPrice) {
    applyMultiplier(multiplier100x, times100xpointPrice, times100xpoint, times100xzoneprice);
    times100xpointPrice += 200;
    times100xzoneprice.innerHTML = times100xpointPrice + "C";
  }
  multiplierTaggle();
});

autoclic.addEventListener("click", buyAutoClicker);

[rainbow(times2xpoint), rainbow(times5xpoint), rainbow(times10xpoint), rainbow(times100xpoint)];

displayCookie();
multiplierTaggle();