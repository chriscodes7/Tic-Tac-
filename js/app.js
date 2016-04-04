$(document).ready(function() {

    var $gameCells = $('.cell');
    var moves = ["", "", "", "", "", "", "", "", ""];
    var count = 0;
    var turn = '#';

    $($gameCells).one('click', function() {
        $(this).html(turn);
        moves[this.id] = turn;

        count++;

        turn = (turn == '#') ? '!' : '#';

        // if (count % 2 == 0){
        //  turn = 'X';
        // } else {
        //  turn = 'O';
        // }
});
        console.log(moves, count, turn);

});
