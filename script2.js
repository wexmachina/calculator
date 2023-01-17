document.addEventListener("DOMContentLoaded", function () {
  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let decimal = document.querySelector(".decimal");
  let equals = document.querySelector(".equals");
  let clear = document.querySelector(".clear");
  let allclear = document.querySelector(".allclear");

  numbers.forEach(function (number) {
    number.addEventListener("click", function (e) {
      displayCurrent(e.target.textContent);
    });
  });

  operators.forEach(function (operator) {
    operator.addEventListener("click", function (e) {
      displayPrevious(currentValue.textContent + " " + operator.textContent);
    });
  });

  decimal.addEventListener("click", function (e) {
    insertDecimal(currentValue.textContent);
  });

  equals.addEventListener("click", function (e) {
    displaySolution(currentValue.textContent);
  });

  clear.addEventListener("click", function (e) {
    clearCurrent(currentValue.textContent);
  });

  allclear.addEventListener("click", function (e) {
    clearAll(currentValue.textContent);
  });

  let currentValue = document.querySelector(".current");
  let previousValue = document.querySelector(".previous");

  function displayCurrent(curr) {
    if (currentValue.textContent.length <= 9) {
      currentValue.textContent += curr;
    }
  }

  function displayPrevious(prev) {
    previousValue.textContent = prev;
    currentValue.textContent = "";
  }

  function insertDecimal() {
    if (currentValue.textContent === "") {
      currentValue.textContent += ".";
    } else if (currentValue.textContent.includes(".")) {
      currentValue.textContent;
    } else currentValue.textContent += ".";
  }

  function displaySolution() {
    if (previousValue != "" && currentValue != "") {
      findSolution();
    }

    solution = sol.toString();
    if (solution.length > 10) {
      currentValue.textContent = solution.substring(0, 10) + "...";
      previousValue.textContent = "";
    } else currentValue.textContent = solution;
  }

  function findSolution() {
    prevNum = parseFloat(previousValue.textContent.slice(0, -1));
    oper = previousValue.textContent.slice(-1);
    currNum = parseFloat(currentValue.textContent);

    if (oper === "+") {
      sol = prevNum + currNum;
    } else if (oper === "-") {
      sol = prevNum - currNum;
    } else if (oper === "x") {
      sol = prevNum * currNum;
    } else sol = prevNum / currNum;

    return sol;
  }

  function clearCurrent() {
    currentValue.textContent = "";
  }

  function clearAll() {
    currentValue.textContent = "";
    previousValue.textContent = "";
  }
});
