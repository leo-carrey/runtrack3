function showhide() {
    var x = document.getElementById("myText");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
showhide()