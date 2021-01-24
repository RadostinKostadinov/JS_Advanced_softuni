function extractText() {
    document.getElementById('result').value = Array.from(document.querySelectorAll('#items li')).map(el => el = el.textContent).join('\n');
}