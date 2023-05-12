dico = {
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019",
}
function jsonValueKey(string, cle) {
    return string[cle]
}
console.log(jsonValueKey(dico, "city"))