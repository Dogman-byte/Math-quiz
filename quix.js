var player1name = localStorage.getItem("player1name");
var player2name = localStorage.getItem("player2name");

document.getElementById("Player1scorename").innerHTML = player1name+ "  :  ";
document.getElementById("Player2scorename").innerHTML = player2name+ "  :  ";

document.getElementById("playername1").innerHTML = player1name;
document.getElementById("playername2").innerHTML = player2name;

var scoreplayer1 = 0;
var scoreplayer2 = 0;
document.getElementById("player1score").innerHTML = scoreplayer1;
document.getElementById("player2score").innerHTML = scoreplayer2;

function wordsend(){
    word = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    console.log(" First number is  = " + word);
    console.log(" second number is  = " + word2);
    
    question_word = "<h4 id = 'word_display'> Q. " +word+"X"+word2+"</h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check </button><br><br>";
    row = question_word + input_box + check_button;
    document.getElementById("Worddisplay").innerHTML = row;
document.getElementById("word").value = "" ;
document.getElementById("word2").value = "";

}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer);
    answer = word*word2;

    if (answer == get_answer) {
        if (answer_turn == "player1"){
            scoreplayer1 = scoreplayer1 + 1;
            document.getElementById("player1score").innerHTML = scoreplayer1;
        }
        else {
            scoreplayer2 = scoreplayer2 + 1;
            document.getElementById("player2score").innerHTML = scoreplayer2;
        }
    }

    if (question_turn == "player1") {
        document.getElementById("playername1").innerHTML = player2name;
        question_turn = "player2";
    }
    else {
        document.getElementById("playername1").innerHTML = player1name;
        question_turn = "player1";
    }
    if (answer_turn == "player1") {
        document.getElementById("playername2").innerHTML = player2name;
        answer_turn = "player2";
    }
    else {
        document.getElementById("playername2").innerHTML = player1name;
        answer_turn = "player1";
    }
    document.getElementById("Worddisplay").innerHTML = " ";
}