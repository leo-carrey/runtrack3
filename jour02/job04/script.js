var textarea = document.getElementById("keylogger");
document.addEventListener("keydown", function (event) {
    var key = event.key.toLowerCase();
    var isFocused = (document.activeElement === textarea);
    if (/[a-z]/.test(key)) {
        if (isFocused) {
            textarea.value += key;
        } else {
            textarea.value += key;
        }
    }
});
