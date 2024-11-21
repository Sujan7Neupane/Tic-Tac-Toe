let newGameBtn = document.querySelector(".new-btn");
let resetGameBtn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");
let messageBox = document.querySelector(".msg-container");
let winnerText = document.querySelector(".winner-text");

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

// console.log(boxes);
let turnX = true; //toogle for players each time X or O.

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX && box.innerHTML === "") {
      box.innerText = "X";
      box.style.color = "red";
      turnX = false;
      // console.log("X");
    } else {
      box.innerText = "O";
      box.style.color = "green";

      turnX = true;
      // console.log("0");
    }
    box.disabled = true;

    // To check winner
    winnerCheckFunc();
  });
});

let winnerCheckFunc = () => {
  for (let pattern of winningPattern) {
    // console.log(pattern[0]);
    // console.log(pattern[1]);
    // console.log(pattern[2]);
    // console.log(boxes[pattern[0]])
    // console.log(boxes[pattern[1]])
    // console.log(boxes[pattern[2]])
    // console.log(boxes[pattern[0]].innerText);
    // console.log(boxes[pattern[1]].innerText);
    // console.log(boxes[pattern[2]].innerText);

    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;

    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 === value2 && value2 === value3) {
        // console.log(`winner: ${value1}`);
        displayWinnerFunc(value1);
        messageBox.classList.remove("hide");
      }
    }
  }
};

const displayWinnerFunc = (value) => {
  if (value === "X") {
    winnerText.innerText = `Winner: ${value}`;
    winnerText.style.color = "red";
  } else {
    winnerText.innerText = `Winner: ${value}`;
    winnerText.style.color = "green";
  }

  disabledBoxes();
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

newGameBtn.addEventListener("click", () => {
  enabledBoxes();

  messageBox.classList.add("hide");
  // console.log("new btn clicked");

  boxes.forEach((box) => {
    box.innerText = "";
  });
});

resetGameBtn.addEventListener("click", () => {
  enabledBoxes();

  console.log("reset btn clicked");
  messageBox.classList.add("hide");

  boxes.forEach((box) => {
    box.innerText = "";
  });
});
