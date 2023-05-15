function myJson() {
    fetch("./pokemon.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => console.log(jsondata));
}
myJson()