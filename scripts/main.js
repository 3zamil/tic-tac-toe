let stateText = ["X", "O"];
let pickedNo;
let board = [];
const init = function() {
  let dim1 = 3;
  let dim2 = 3;

  let boxes = dim1 * dim2;

  let random = Math.floor(Math.random() * 2);
  pickedNo = random;

  // let x = [];
  // let o = [];
  board = [];
  $("#board").html("");
  console.log($("#board"));
  for (let i = 1; i <= boxes; i++) {
    let $div = $("<div>", { id: i, class: "unit" });
    $div.click(play);
    $("#board").append($div);
    board.push(i);
  }
};

const play = function(event) {
  let myTarget = event.target;
  pickedNo = +!pickedNo;
  let thePicked = stateText[pickedNo];
  $(myTarget).text(thePicked);

  $(myTarget)
    .show()
    .fadeIn("slow");

  $(myTarget).addClass("play-" + thePicked);
  $(myTarget).off();
  let boxId = $(myTarget).attr("id");
  board[boxId] = thePicked;

  if (board[1] == board[2] && board[1] == board[3]) {
    alert(board[1] + " WIN");
    init();
  }
  if (board[4] == board[5] && board[4] == board[6]) {
    alert(board[4] + " WIN");
    init();
  }
  if (board[7] == board[8] && board[7] == board[9]) {
    alert(board[7] + " WIN");
    init();
  }
  if (board[1] == board[4] && board[1] == board[7]) {
    alert(board[1] + " WIN");
    init();
  }
  if (board[2] == board[5] && board[2] == board[8]) {
    alert(board[2] + " WIN");
    init();
  }
  if (board[3] == board[6] && board[3] == board[9]) {
    alert(board[3] + " WIN");
    init();
  }
  if (board[1] == board[5] && board[1] == board[9]) {
    alert(board[1] + " WIN");
    init();
  }
  if (board[3] == board[5] && board[3] == board[7]) {
    alert(board[3] + " WIN");
    init();
  }
};

$(function() {
  init();
});

// console.log("Hello Tic Tac Toe", boxes, picked, random);
