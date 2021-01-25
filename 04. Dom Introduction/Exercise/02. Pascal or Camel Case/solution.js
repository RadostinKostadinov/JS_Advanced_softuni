function solve() {
  const text = document.getElementById('text');
  const namingConvention = document.getElementById('naming-convention');
  const result = document.getElementById('result');
  const [...wordsArr] = text.value.split(' ');

  if (namingConvention.value == 'Camel Case') {
    result.textContent = wordsArr.map((word, id) => {
      if (id != 0) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toLowerCase();
      }
    }).join('');
  } else if (namingConvention.value == 'Pascal Case') {
    result.textContent = wordsArr.map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join('');
  } else {
    result.textContent = 'Error!';
  }

}