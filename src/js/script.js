// Step 1 - base structure
// veriables
var pointsCounted = 1;
var creditCounted = 1;
var cookieClick = 1;

let pointsTag = document.getElementById("points")
let creditTag = document.querySelector("#credit");

let coockieBtn = document.getElementById("coockie");
coockieBtn.addEventListener("click", () => {
    pointsTag.innerHTML = `Points: ${cookieClick}`;
    creditTag.innerHTML = `Credit: ${creditCounted}`;
    console.log(cookieClick + " " + creditCounted + " " + pointsCounted);
    cookieClick++;
    creditCounted++;
    pointsCounted++;
})
// function incrementFaction() {
//     return pointsCounted++;
// }

// let cookieBtn = document.getElementById("coockie");
// cookieBtn.addEventListener("click", () => {
//     incrementFaction();
//   pointsCounted = cookieClick + pointsCounted;
//   creditCounted = cookieClick + creditCounted;

// pointsTag.textContent = `Points : ${pointsCounted}`;
// creditTag.textContent = `Credit : ${creditCounted}`;

//   return creditCounted;?
//   console.log(creditCounted);
// });

// console.log("asdasd" + pointsCounted);
// ===============================================================================
// Step 2 -

// ===============================================================================
// Step 3 -
// Step 4 -
// Step 5 -
// Step 6 -
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
// Step 8 -
// Step 9 -
// Step 10 -
// Step 11 -
// Step 12 -
// This allows us to keep count of the times a certain multiplier was purchased

