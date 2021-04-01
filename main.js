function nextpage(){
    var player1 = document.getElementById("Player1name").value;
    var player2 = document.getElementById("Player2name").value;
    localStorage.setItem("player1name", player1);
    localStorage.setItem("player2name", player2);
    window.location="quixpage.html";
}

