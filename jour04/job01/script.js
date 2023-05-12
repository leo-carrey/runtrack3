function printText() {
    let file = "expression.txt"
    fetch(file)
        .then(x => x.text())
        .then(y => document.getElementById("myText").innerHTML = y);
}