let randomNum;
let lifeAmount = 10;
let balanceAmount = 10;

document.getElementById("generateBtn").addEventListener("click", function () {
  const generated = document.getElementById("notGenerated");
  randomNum = Math.round(Math.random() * 100) + 1;
  generated.innerText = "Generated";
});

const btnNumbers = document.querySelectorAll(".numbers");
const inputValue = document.getElementById("inputValue");
let allValue = "";
btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", function () {
    allValue += btnNumber.innerText;
    inputValue.value = allValue;
  });
});

inputValue.addEventListener("input", function () {
  allValue = inputValue.value;
});

document.getElementById("checkBtn").addEventListener("click", function () {
  let myInput = parseInt(allValue);

  if (myInput == randomNum) {
    const notGenerated = document.getElementById("notGenerated");
    notGenerated.innerText = "Your Answer is right and your got $5";
    balanceAmount += 5;
  } else if (randomNum > myInput) {
    const greaterThen = document.getElementById("greaterThen");
    const newP = document.createElement("p");
    newP.innerHTML = `
    
    <p>Your Value is Greater Than ${myInput}</p>
    `;

    greaterThen.appendChild(newP);
    lifeAmount -= 1;
  } else {
    const lessThen = document.getElementById("lessThen");
    const newP = document.createElement("p");
    newP.innerHTML = `
    
    <p>Your Value is Less Than ${myInput}</p>
    `;

    lessThen.appendChild(newP);
    lifeAmount -= 1;
  }

  inputValue.value = "";
  allValue = "";

  const life = document.getElementById("life");
  life.innerText = `Life: ${lifeAmount}`;

  const balance = document.getElementById("balance");
  balance.innerText = `Balance: $${balanceAmount}`;

  const disableBtn = document.getElementById("checkBtn");

  if (lifeAmount <= 0) {
    disableBtn.style.cursor = "not-allowed";
    disableBtn.disabled = true;
  }
});
