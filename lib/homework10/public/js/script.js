
let werte;

fetch('/artikelJson')
.then(res => res.text())
.then(body => werte = JSON.parse(body));

document.getElementById('search').addEventListener('keyup', (search) => {
    let searchStr = search.target.value, str = "", titleTeile;

            for (let wert in werte) {
                titleTeile = werte[wert].title.split(" ");
                if (titleTeile.length != 0) {
                    titleTeile.forEach((teil) => {
                        if (teil.includes(searchStr) && teil.length > 3) {
                            if (teil.includes(".")) {
                                teil = teil.replace(".", "");
                            }
                            str += `<option value="${teil}">`;
                        }
                    })
                }
            }
            document.getElementById('sugg').innerHTML = str;
});