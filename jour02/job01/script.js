document.addEventListener("DOMContentLoaded", (event) => {
    function citation(){
        const button = document.querySelector("#button");
        let element = document.querySelector("#citation").innerHTML;
        button.addEventListener('click', event => {
            console.log(element)
        })
    }
    citation()
})