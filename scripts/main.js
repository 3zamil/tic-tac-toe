let stateText;
let pickedNo;
let board = [];
let numClicks = 1;
let round = 3;

// Initialaization function:
const init = function() {
  let dim1 = 3;
  let dim2 = 3;

  let boxes = dim1 * dim2;

  let random = Math.floor(Math.random() * 2);
  pickedNo = random;

  $("#player-" + +!pickedNo).css("border-color", "red");
  $("#player-" + pickedNo).css("border-color", "#ccc");

  board = [];
  numClicks = 0;
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
  // when one player win
  $(".name-" + winner).animate({ bottom: "+=20%" }, "slow");
  if (round == 0) {
    ss = setTimeout(function() {
      $(".name-0").animate({ bottom: "-29px" }, "slow");
      $(".name-1").animate({ bottom: "-29px" }, "slow");
    }, 3000);
    round = 3;
    // let myVar = setTimeout(alertFunc, 3000);
  } else {
    round--;
  }
};

//ply X or O
const play = function(event) {
  let myTarget = event.target;
  pickedNo = +!pickedNo;
  if (numClicks == 0) {
    $("#player-0").prop("disabled", true);
    $("#player-1").prop("disabled", true);
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
  }

  $("#player-" + pickedNo).css("border-color", "#ccc");
  $("#player-" + +!pickedNo).css("border-color", "red");

  numClicks++;
  let thePicked = stateText[pickedNo];
  $(myTarget).text(thePicked);

  $(myTarget).addClass("play-" + pickedNo);
  $(myTarget).off();
  let boxId = $(myTarget).attr("id");
  board[boxId] = thePicked;

  //check winner
  if (board[1] == board[2] && board[1] == board[3]) {
    results(pickedNo);
    init();
  } else if (board[4] == board[5] && board[4] == board[6]) {
    results(pickedNo);
    init();
  } else if (board[7] == board[8] && board[7] == board[9]) {
    results(pickedNo);
    init();
  } else if (board[1] == board[4] && board[1] == board[7]) {
    results(pickedNo);
    init();
  } else if (board[2] == board[5] && board[2] == board[8]) {
    results(pickedNo);
    init();
  } else if (board[3] == board[6] && board[3] == board[9]) {
    results(pickedNo);
    init();
  } else if (board[1] == board[5] && board[1] == board[9]) {
    results(pickedNo);
    init();
  } else if (board[3] == board[5] && board[3] == board[7]) {
    results(pickedNo);
    init();
  } else {
    if (numClicks == 9) {
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
  $("#start").click(function() {
    $(".name-0").animate({ bottom: "-29px" }, "slow");
    $(".name-1").animate({ bottom: "-29px" }, "slow");
    round = 3;
    init();
  });
  // $("#sound").click(backMusic);
});
