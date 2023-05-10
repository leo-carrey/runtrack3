function showhide() {
    var x = document.getElementById("myArticle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
showhide()