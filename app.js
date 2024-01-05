const btns = document.querySelectorAll(".box");
const winnerDiv = document.getElementById("win_div");
const winnerName = document.getElementById("win");
const playAgainBtn = document.getElementById("play_again");
const resetBtn = document.getElementById("reset");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let flag = true;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (flag) {
      btn.innerText = "O";
      flag = false;
    } else {
      btn.innerText = "X";
      flag = true;
    }
    btn.disabled = true;

    checkPattern();
  });
});

const winner = (val) => {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
  winnerDiv.style.display = "block";
  winnerName.innerText = `Winner is : ${val}`;
};

const checkPattern = () => {
  for (let pattern of winPattern) {
    const val1 = btns[pattern[0]].innerText;
    const val2 = btns[pattern[1]].innerText;
    const val3 = btns[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        winner(val1);
      }
    }
  }
};

playAgainBtn.addEventListener("click", () => {
  flag = true;
  btns.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
  winnerDiv.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  flag = true;
  btns.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
});

// let arr = [
//   ["Swiggy", 123],
//   ["Swiggy", 227],
//   ["Zomato", 103],
//   ["Zomato", 171],
//   ["Dunzo", 131],
//   ["Zomato", 122],
//   ["Swiggy", 181],
// ];

// function highestAvgAmount(arr) {
//   // space -> O(m) m-number of services
//   // time -> O(n)
//   let tempObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     let company = arr[i][0];
//     let value = arr[i][1];
//     if (tempObj[company] === undefined) {
//       tempObj[company] = { sum: value, items: 1 };
//     } else {
//       tempObj[company].sum += value;
//       tempObj[company].items += 1;
//     }
//   }
//   let highAvg = 0,
//     str = "";
//   for (const item in tempObj) {
//     if (tempObj[item].sum / tempObj[item].items > highAvg) {
//       str = item;
//       highAvg = Math.max(highAvg, tempObj[item].sum / tempObj[item].items);
//     }
//   }
//   return str;
// }

// highestAvgAmount(arr);
