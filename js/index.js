var turn = 1;

function _(id) {
    return document.getElementById(id);
}

function clickBtn(btn) {
    if (turn == 1) {
        _(btn).value = "X";
        _(btn).disabled = true;
        turn++;
        win("X");
    } else {
        _(btn).value = "O";
        _(btn).disabled = true;
        turn--;
        win("O");
    }
}

function win(player) {
    // check if either player wins horizontally, vertically or diagonally
    if (_("btn1").value === player && _("btn2").value === player && _("btn3").value === player ||
        _("btn4").value === player && _("btn5").value === player && _("btn6").value === player ||
        _("btn7").value === player && _("btn8").value === player && _("btn9").value === player) {
        alert("Player " + player + " is the winner!");
        reset();
    } else if (_("btn1").value === player && _("btn4").value === player && _("btn7").value === player ||
        _("btn2").value === player && _("btn5").value === player && _("btn8").value === player ||
        _("btn3").value === player && _("btn6").value === player && _("btn9").value === player) {
        alert("Player " + player + " is the winner!");
        reset();
    } else if (_("btn1").value === player && _("btn5").value === player && _("btn9").value === player ||
        _("btn3").value === player && _("btn5").value === player && _("btn7").value === player) {
        alert("Player " + player + " is the winner!");
        reset();
    }
}

function reset() {
    for (i = 1; i <= 9; i++) {
        _("btn" + i).value = "";
        _("btn" + i).disabled = false;
    }
    turn = 1;
}
