const nodes = new Array(9);
const next = document.querySelector(".next");
var text = document.querySelector(".text");
const reset = document.querySelector("#reset");

let input = "X";
let moves = 0;
let winner = false;

for (var i = 1; i <= 9; i++) {
  nodes[i] = document.querySelector(`#node${i}`);
}

reset.addEventListener("click", () => {
  location.reload();
});

function toggle(input) {
  return input === "X" ? "0" : "X";
}

function checkwinner() {
  let winn = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];
  winn.forEach((e) => {
    if (
      nodes[e[0]].innerText === nodes[e[1]].innerText &&
      nodes[e[2]].innerText === nodes[e[1]].innerText &&
      nodes[e[0]].innerText !== ""
    ) {
      text.innerText = `Winner is : ${nodes[e[0]].innerText}`;
      winner = true;
    }
  });
}

nodes.forEach((key) => {
  key.addEventListener("click", (node) => {
    if (!winner) {
      if (node.target.innerText != "X" && node.target.innerText != "0") {
        node.target.innerText = input;
        input = toggle(input);
        next.innerText = input;
        moves++;
      }
    }

    if (moves >= 5) {
      checkwinner();
      if (winner) {
        key.removeEventListener("click", (node) => {
          node.target.innerText = "";
        });
        document
          .querySelector(".info")
          .getElementsByTagName("img")[0].style.width = "50px";
      }
    }

    if (moves == 9) {
      if (winner == false) {
        text.innerText = `Match Draw`;
      }
    }
  });
});
