let stateText;
let pickedNo;
let board = [];
let numClicks = [];
let ss = $("#player-0").val();

// Initialaization function:
const init = function() {
  let dim1 = 3;
  let dim2 = 3;

  let boxes = dim1 * dim2;

  let random = Math.floor(Math.random() * 2);
  pickedNo = random;

  board = [];
  numClicks = [];
  backMusic();
  // $("#myTune").prop("play", true)
  $("#player-0").prop("disabled", false);
  $("#player-1").prop("disabled", false);

  p1 = $("#player-0")
    .val()
    .substr(0, 1)
    .toUpperCase();
  p2 = $("#player-1")
    .val()
    .substr(0, 1)
    .toUpperCase();
  if (p1 == p2) {
    p1 += pickedNo + 1;
    p2 += +!pickedNo + 1;
  }
  stateText = [p1, p2];

  $("#board").html("");
  for (let i = 1; i <= boxes; i++) {
    let $div = $("<div>", { id: i, class: "unit" });
    $div.click(play);
    $("#board").append($div);
    board.push(i);
  }
};

const results = function(winner) {
  // $("#player-" + winner).animate({ top: "250px" });
  $(".name-" + winner).animate({ bottom: "+=20%" }, "slow");
};
//ply X or O
const play = function(event) {
  let myTarget = event.target;
  pickedNo = +!pickedNo;
  if (numClicks.length == 0) {
    $("#player-0").prop("disabled", true);
    $("#player-1").prop("disabled", true);
  }
  numClicks.push(1);
  let thePicked = stateText[pickedNo];
  $(myTarget).text(thePicked);

  $(myTarget).addClass("play-" + pickedNo);
  $(myTarget).off();
  let boxId = $(myTarget).attr("id");
  board[boxId] = thePicked;

  if (board[1] == board[2] && board[1] == board[3]) {
    // setTimeout(() => {
    //   alert(board[1] + " WIN");
    //   init();
    // }, 400);
    results(pickedNo);
    init();

    //check winner
  } else if (board[4] == board[5] && board[4] == board[6]) {
    results(pickedNo);
    // alert(board[4] + " WIN");
    init();
  } else if (board[7] == board[8] && board[7] == board[9]) {
    results(pickedNo);
    // alert(board[7] + " WIN");
    init();
  } else if (board[1] == board[4] && board[1] == board[7]) {
    results(pickedNo);
    // alert(board[1] + " WIN");
    init();
  } else if (board[2] == board[5] && board[2] == board[8]) {
    results(pickedNo);
    // alert(board[2] + " WIN");
    init();
  } else if (board[3] == board[6] && board[3] == board[9]) {
    results(pickedNo);
    // alert(board[3] + " WIN");
    init();
  } else if (board[1] == board[5] && board[1] == board[9]) {
    results(pickedNo);
    // alert(board[1] + " WIN");
    init();
  } else if (board[3] == board[5] && board[3] == board[7]) {
    results(pickedNo);
    // alert(board[3] + " WIN");
    init();
  } else {
    if (numClicks.length == 9) {
      alert("NO ONE WIN");
      init();
    }
  }
};

const backMusic = function() {
  var myAudio = document.getElementById("myTune");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
};

$(function() {
  init();
  $("#start").click(init);
  // $("#sound").click(backMusic);

});



