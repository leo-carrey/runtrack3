function jourtravaile(joursemaine, jour, mois, annee) {
    date = [joursemaine, jour, mois, annee]
    tamp = false
    const arr = [[1, 1, 2020], [13, 4, 2020], [1, 5, 2020], [8, 5, 2020], [21, 5, 2020], [1, 6, 2020], [14, 7, 2020], [15, 8, 2020], [1, 11, 2020], [11, 11, 2020], [25, 12, 2020]]
    for (let i in arr) {
        if (jour === arr[i][0] && mois === arr[i][1] && annee === arr[i][2]) {
            console.log("Le " + date + " est un jour férié")
            tamp = true
        }
    }
    if (tamp === false) {
        if (joursemaine === "samedi" || joursemaine === "dimanche") {
            console.log("Non, " + date + " est un week-end")
        }
        else (console.log("Oui," + date + " est un jour travaillé"))
    }
}

jourtravaile("lundi", 8, 5, 2020)
jourtravaile("dimanche", 7, 5, 2020)
jourtravaile("mardi", 9, 5, 2020)