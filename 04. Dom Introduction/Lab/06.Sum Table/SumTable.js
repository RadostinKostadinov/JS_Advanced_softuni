function sumTable() {
    document.getElementById('sum').textContent = Array.from(document.querySelectorAll(`table:first-of-type tr`)).slice(1, -1).reduce((acc, row) => acc + Number(row.lastChild.textContent
    ),0);
}