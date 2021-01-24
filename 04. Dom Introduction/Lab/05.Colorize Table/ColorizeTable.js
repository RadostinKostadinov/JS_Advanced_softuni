function colorize() {
    Array.from(document.querySelectorAll('table:first-of-type tr:nth-of-type(even)')).forEach(el => el.style.backgroundColor = 'Teal');
}