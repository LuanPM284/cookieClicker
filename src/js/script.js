// Step 1 - base structure

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
let clickValueTag = document.getElementById("clickValue");

//cost botton price
let custspan2x = document.getElementById("custspan2x");
let custspan5x = document.getElementById("custspan5x");
let custspan10x = document.getElementById("custspan10x");
let custspan100x = document.getElementById("custspan100x");

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

//the value of multipliers
let multiplier2x = 2;
let multiplier5x = 5;
let multiplier10x = 10;
let multiplier100x = 100;

// the cost of multipliers
let times2xpointPrice = 10;
let times5xpointPrice = 20;
let times10xpointPrice = 30;
let times100xpointPrice = 40;

let autoClickeCost = 100;

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
  displayClickValue();
  clickSound();
}

// it will assign the values to the html
function displayCookie() {
  pointsTag.innerText = points;
  creditTag.innerText = credit;
  //   console.log(score);
}
function displayClickValue() {
  clickValueTag.innerText = `${clickValue}`;
}

///// new code dysolay auto click cost
let autoclickpricetag = document.getElementById("autoclickprice");
function displayautoClick() {
  autoclickpricetag.innerText = `Cost: ${autoClickeCost}`;
}

function displayCost(btnspan, price) {
  btnspan.innerText = `Cost: ${price}`;
}

// turn buttoms on off
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

  //new code to active a disactive auto-clicker
  if (credit >= autoClickeCost) {
    AutoClickBtn.disabled = false;
  } else {
    AutoClickBtn.disabled = true;
  }
}

// multiBox.innerHTML = "";
// function displayMultiplier() {
//   if (multiplerList.length > 0) {
//     multiplerList.forEach((item) => {
//       let p = document.createElement("p");
//       p.innerText = item;
//       let btnClasses = [
//         "border",
//         "border-2",
//         "bg-orange-400",
//         "p-3",
//         "text-orange-100",
//         "font-bold",
//         "rounded-lg",
//         "cursor-auto",
//       ];
//       p.classList.add(...btnClasses);
//       multiBox.appendChild(p);
//     });
//   }
// }

function buttonActiver() {
  multiplierTaggle();
}

// 2x button function
function times2xpointfunction() {
  credit -= times2xpointPrice;
  clickValue *= multiplier2x;
  times2xpointPrice *= multiplier2x;
  buttonActiver();
  displayCookie();
  multiplerList.push("2x");

  // multiBox.innerHTML = ""; //to make the list empty
  displayMultiplier();
  displayCost(custspan2x, times2xpointPrice);
  displayClickValue();

  buyclickSound(); //sound function
}

function times5xpointfunction() {
  credit -= times5xpointPrice;
  clickValue *= multiplier5x;
  times5xpointPrice *= multiplier2x;
  buttonActiver();
  displayCookie();
  multiplerList.push("5x");

  // multiBox.innerHTML = ""; //to make the list empty
  displayMultiplier();
  displayCost(custspan5x, times5xpointPrice);
  displayClickValue();

  buyclickSound(); //sound function
}

function times10xpointfunction() {
  credit -= times10xpointPrice;
  clickValue *= multiplier10x;
  times10xpointPrice *= multiplier10x;
  buttonActiver();
  displayCookie();
  multiplerList.push("10x");

  // multiBox.innerHTML = ""; //to make the list empty
  displayMultiplier();
  displayCost(custspan10x, times10xpointPrice);
  displayClickValue();

  buyclickSound(); //sound function
}

function times100xpointfunction() {
  credit -= times100xpointPrice;
  clickValue *= multiplier100x;
  times100xpointPrice *= multiplier100x;
  buttonActiver();
  displayCookie();
  multiplerList.push("100x");

  // multiBox.innerHTML = ""; //to make the list empty
  displayMultiplier();
  displayCost(custspan100x, times100xpointPrice);
  displayClickValue();

  buyclickSound(); //sound function
}

displayMultiplier();
displayCookie();
displayClickValue();
displayautoClick();

displayCost(custspan2x, times2xpointPrice);
displayCost(custspan5x, times5xpointPrice);
displayCost(custspan10x, times10xpointPrice);
displayCost(custspan100x, times100xpointPrice);

times2xpoint.disabled = true;
times5xpoint.disabled = true;
times10xpoint.disabled = true;
times100xpoint.disabled = true;

coockieBtn.addEventListener("click", increaseCookies);

times2xpoint.addEventListener("click", times2xpointfunction);
times5xpoint.addEventListener("click", times5xpointfunction);
times10xpoint.addEventListener("click", times10xpointfunction);
times100xpoint.addEventListener("click", times100xpointfunction);

///new code

let AutoClickBtn = document.getElementById("AutoClickBtn");

//new code for auto clicker  show how much time left
let autoclikecount = document.getElementById("autoclikecount");
autoclikecount.textContent = `10s`;

function startFunction() {
  autoclikecount.classList.remove("hidden");
  let count = 10;
  credit -= autoClickeCost;
  autoClickeCost *= 2;

  const intervalId = setInterval(() => {
    increaseCookies();
    buttonActiver();

    console.log("clicked");
    count--;
    autoclikecount.textContent = `${count}s`;
    if (count <= 0) {
      clearInterval(intervalId);
      autoclikecount.textContent = `10s`;
      autoclikecount.classList.add("hidden");
    }
  }, 1000);
  buyclickSound();
}

AutoClickBtn.addEventListener("click", startFunction);

// new codes 24/6/2024
//commented the (  // multiBox.innerHTML = ""; ) from each button
let persecond = document.getElementById("persecond"); //the tag that show the value of

let activeBooster2xbutton = document.getElementById("activeBooster2xbutton"); // the active button tag
let activeBooster2xNum = document.getElementById("activeBooster2xNum"); // the bedge show the number of time the button us used
let activeBooster5xbutton = document.getElementById("activeBooster5xbutton");
let activeBooster5xNum = document.getElementById("activeBooster5xNum");

let activeBooster10xbutton = document.getElementById("activeBooster10xbutton");
let activeBooster10xNum = document.getElementById("activeBooster10xNum");

let activeBooster100xbutton = document.getElementById(
  "activeBooster100xbutton"
);
let activeBooster100xNum = document.getElementById("activeBooster100xNum");

function displayMultiplier() {
  //will check if there is a multipeier in the array
  if (multiplerList.includes("2x")) {
    //remove the hidden class for the tag
    activeBooster2xbutton.classList.remove("hidden");
    //set the text with the value come for the function which is the number same item un array
    activeBooster2xNum.textContent = getOccurrence(multiplerList, "2x");
  }
  if (multiplerList.includes("5x")) {
    activeBooster5xbutton.classList.remove("hidden");
    activeBooster5xNum.textContent = getOccurrence(multiplerList, "5x");
  }
  if (multiplerList.includes("10x")) {
    activeBooster10xbutton.classList.remove("hidden");
    activeBooster10xNum.textContent = getOccurrence(multiplerList, "10x");
  }
  if (multiplerList.includes("100x")) {
    activeBooster100xbutton.classList.remove("hidden");
    activeBooster100xNum.textContent = getOccurrence(multiplerList, "100x");
  }
}

//will check how meany time a booster is used (will check the array and see how meany time the given item is in the array)
function getOccurrence(array, value) {
  return array.filter((v) => v === value).length;
}

//this function will play sound when called
function clickSound() {
  var sound = new Audio("sound/clickb7.mp3");
  sound.play();
}
function buyclickSound() {
  var sound = new Audio("sound/buy3.mp3");
  sound.play();
}
