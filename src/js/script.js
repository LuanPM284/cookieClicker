// veriables
var pointsCounted = 1;
var creditCounted = 1;
var cookieClick = 1;

let pointsTag = document.querySelector("#points");
let creditTag = document.querySelector("#credit");

function incrementFaction() {
  return pointsCounted++;
}

let cookieBtn = document.getElementById("coockie");
cookieBtn.addEventListener("click", () => {
  incrementFaction();
  //   pointsCounted = cookieClick + pointsCounted;
  //   creditCounted = cookieClick + creditCounted;

  pointsTag.textContent = `Points : ${pointsCounted}`;
  creditTag.textContent = `Credit : ${creditCounted}`;

  //   return creditCounted;?
  //   console.log(creditCounted);
});

console.log("asdasd" + pointsCounted);
