function numberToString(moiMeme) {
    let noms = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
    let sortie = [];

    for (let i = 0; i < moiMeme.length; i++) {
        if (moiMeme[i] >= 1 && moiMeme[i] <= 10) {
            sortie.push(noms[moiMeme[i] - 1]);
        }
    }

    return sortie;
}

let moiMeme = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numberToString(moiMeme));

module.exports = numberToString;