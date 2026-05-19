let runs = 0;     //display on board
let wickets = 0;  //display on board
let balls = 0;    //internally count the over if balls === 6 then increase the over
let overs = 0;     //display on board
let history = [];   //for push runs, wickets, balls, over

// update UI
function updateUI() {
  document.getElementById("runs").innerText = runs;  //set the value of runs variable 
  document.getElementById("wickets").innerText = wickets;    //set the value of wickets variable 
  document.getElementById("overs").innerText = overs + "." + balls;   //set the value of overs and balls variable 
}

// add run
 function addRuns(run) {
  if (wickets >= 10) {
    alert("All wickets are down!");
        return;
    
  } else {
    history.push({ runs, wickets, overs, balls });
    runs += run;
    addBall();
    updateUI();
  }
}

// add wicket
function addWicket() {
  if (wickets >= 10) {
    alert("All wickets are down!");
        return;

  }
  else{
    history.push({ runs, wickets, overs, balls });

    wickets++;
    addBall();
    updateUI();
  }
    
}


// ball logic
function addBall() {
  balls++;

  if (balls === 6) {
    overs++;
    balls = 0;
  }
}

// Undo
function undo() {
  if (history.length > 0) {
    let last = history.pop();

    runs = last.runs;
    wickets = last.wickets;
    overs = last.overs;
    balls = last.balls;

    updateUI();
  }
}

// Clear the board
function resetMatch() {
  let confirmClear = confirm("Are you sure you want to clear the board?");

  if (confirmClear) {
    runs = 0;
    wickets = 0;
    overs = 0;
    balls = 0;

    history = [];

    updateUI();
  }
}
