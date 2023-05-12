function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    win_lose(data);
}

artemp = []
arrwin = ['drag6', 'drag5', 'drag4', 'drag3', 'drag2', 'drag1']
function win_lose(data) {
    artemp.unshift(data);
    let cond = true
    for (i = 0; i < arrwin.length; i++) {
        if (arrwin[i] != artemp[i]) {
            cond = false
        }
    }
    if (cond == true) {
        printMess("Vous avez gagné", "win");
    } else if (cond == false) {
        printMess("Vous avez perdu", "loser");
    }
}

function mixPosition() {
    var conteneur = document.getElementById("images");
    var images = conteneur.getElementsByTagName("img");
    var imagesArray = Array.from(images);
    shuffleArray(imagesArray);
    for (var i = 0; i < imagesArray.length; i++) {
        conteneur.appendChild(imagesArray[i]);
    }
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function printMess(message, classeCSS) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = classeCSS;
}

allowDrop(ev)
drag(ev)
drop(ev)
mixPosition()
checkimages()
printMess()