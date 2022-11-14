var answer;
function start() {
    document.getElementById("btnstart").setAttribute("class", "btnstart inactivestart");
    document.getElementById("btnstart").disabled = true;
    document.getElementById("btnstop").disabled = false;
    document.getElementById("btnstop").setAttribute("class", "btnstop activestop");
    document.getElementById("answerbox").disabled = false;
    document.getElementById("useranswer").disabled = false;
    question();
}
function stop() {
    document.getElementById("btnstop").setAttribute("class", "btnstop inactivestop");
    document.getElementById("btnstop").disabled = true;
    document.getElementById("btnstart").disabled = false;
    document.getElementById("btnstart").setAttribute("class", "btnstart activestart");
    document.getElementById("answerbox").disabled = true;
    document.getElementById("useranswer").disabled = true;
    document.getElementById("answerbox").value = "";
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("list").innerHTML = "";
}
function question() {
    var num1 = Math.floor(Math.random() * 100 + 1);
    var num2 = Math.floor(Math.random() * 100 + 1);
    answer = num1 + num2;
    document.getElementById("quiz").innerHTML = num1 + "+" + num2;
}
function checkanswer() {
    var useranswer = Number(document.getElementById("answerbox").value);

    if (answer == useranswer) {
        document.getElementById("list").innerHTML += "<li>Correct</li>";
    } else {
        document.getElementById("list").innerHTML += "<li>Wrong</li>";
    };
    document.getElementById("answerbox").value = "";
    question();
}