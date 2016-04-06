$(document).ready(function() {

    // wrapped in document .ready,
    // Jquery function to make sure the dom is ready

    var $gameCells = $('.cell');
    // assigned to a variable for easy
    var moves = ["", "", "", "", "", "", "", "", ""];
    // allows you to track your moves on the board
    var count = 0;
    // count of play
    var turn = '#';
    // this is the turn either # or !
    var startGame = function() {
        console.log('startGame:', $gameCells);
        $gameCells.one('click',
            function() {
                console.log('you clicked');
                $(this).html(turn);
                moves[this.id] = turn;

                count++;

                var champ = getWinner();
                if (champ) {
                    alert('Player ' + champ + ' Wins');
                }

                turn = (turn == '#') ? '!' : '#';
                console.log(moves, count, turn);
            }
        );
    }

    var champ = null;
    var getWinner = function() {
        if (winnerIs('#')) {
            return '#';
        } else if (winnerIs('!')) {
            return '!';
        } else {
            return null;
        }
    }
    var winnerIs = function(turn) {
        return winsRow(turn) || winsCol(turn) || winsDiag(turn);
    }
    var winsRow = function(turn) {
        return allThree(turn, moves[0], moves[1], moves[2]) || allThree(turn, moves[3], moves[4], moves[5]) || allThree(turn, moves[6], moves[7], moves[8]);
    }
    var winsCol = function(turn) {
        return allThree(turn, moves[0], moves[3], moves[6]) || allThree(turn, moves[1], moves[4], moves[7]) || allThree(turn, moves[2], moves[5], moves[8]);
    }
    var winsDiag = function(turn) {
        return allThree(turn, moves[0], moves[4], moves[8]) || allThree(turn, moves[2], moves[4], moves[6]);
    }
    var allThree = function(turn, cell1, cell2, cell3) {
        return (cell1 === turn) && (cell2 === turn) && (cell3 === turn);
    }

    startGame();

    function reset() {
        var moves = ["", "", "", "", "", "", "", "", ""];
        // allows you to track your moves on the board
        var count = 0;
        // count of play
        var turn = '#';
        // this is the turn either # or !
        $($gameCells).on('click');
    };

    $('#reset').click(function() {
        $(this).off();
        $(this).on();
        reset();
        $gameCells.html('');
    });
});
