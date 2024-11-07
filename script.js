let randomNum;
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
  if (isNaN(myInput)) {
    console.log("Please Enter Valid Value");
    inputValue.value = "";
    allValue = "";
  } else {
    if (myInput == randomNum) {
      console.log("Your are corrent");
    } else if (randomNum > myInput) {
      console.log(`The Number is Greater Than ${myInput}`);
    } else {
      console.log(`The Number is Less Than ${myInput}`);
    }

    inputValue.value = "";
    allValue = "";
  }
});
