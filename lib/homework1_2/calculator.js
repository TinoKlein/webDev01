(function() {

    let left, right, operator, opTmp, erg;

    const werte = process.argv.slice(2);
    const pattern = /\+|-|\*|\/|[x]/;

    switch (werte.length) {
        case 0:
            console.error("Bitte Parameter angeben!");
            return;
        case 1:
            if (werte[0].search(pattern) >= 0) {
                operator = werte[0][werte[0].search(pattern)];
                opTmp = werte[0].split(operator);
            } else {
                console.error("Unzulässige oder falsche Anzahl Parameter angegeben!");
                return;
            }
            break;
        case 2:
            if (werte[0].search(pattern) !== -1) {
                operator = werte[0][werte[0].search(pattern)];
                opTmp = werte[0].split(operator);
            } else if (werte[1].search(pattern) !== -1) {
                operator = werte[1][werte[1].search(pattern)];
                opTmp = werte[1].split(operator);
            } else {
                console.error("Falscher Operator gewählt, oder unzulässige oder falsche Anzahl Parameter angegeben!");
                return;
            }
            break;
        case 3:
            if (werte[0].search(pattern) >= 0 || (werte[1].search(pattern) >= 0 && werte[1].length > 1)) {
                console.error("Unzulässige oder falsche Anzahl Parameter angegeben!");
                return;
            } else {
                if (werte[1].search(pattern) === -1) {
                    console.error("Falscher Operator gewählt!");
                    return;
                } else {
                    left = intFloat(werte[0]);
                    operator = werte[1];
                    right = intFloat(werte[2]);
                }
            }
            break;
        default:
            console.error("Unzulässige oder falsche Anzahl Parameter angegeben!");
            return;
    }

    if (werte.length < 3) {
        (opTmp[0] !== '') ? left = intFloat(opTmp[0]) : left = intFloat(werte[0]);
        (opTmp[1] !== '') ? right = intFloat(opTmp[1]) : right = intFloat(werte[1]);
    }

    if (right === 0 && operator === "/") {
        console.error("Eine Division durch 0 ist nicht möglich!");
    }else if(isNaN(left) || isNaN(right)){
        console.error("Unzulässige oder falsche Anzahl Parameter angegeben!");
    }else {
        switch (operator) {
            case "+":
                erg = left + right;
                break;
            case "-":
                erg = left - right;
                break;
            case "*":
            case "x":
                erg = left * right;
                break;
            case "/":
                erg = left / right;
                break;
            default:
                break;
        }

        console.log(erg);
    }

})();


function intFloat(wert){
    let ausgabe;

    if(wert.includes(".")){
        ausgabe = parseFloat(wert);
    }else if(wert.includes(",")){
        wert = wert.replace(",",".");
        ausgabe = parseFloat(wert);
    }else{
        ausgabe = parseInt(wert);
    }

    return ausgabe;
}