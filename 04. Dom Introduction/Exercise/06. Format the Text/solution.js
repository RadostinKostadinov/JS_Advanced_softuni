function solve() {
  const text = document.getElementById('input').value;
  const resultEl = document.getElementById('output');
  let sentancesArr = text.split('.').filter(e => e != '');

  function groupArrBy3(array){
    const newArr = [];
    for(let i = 0; i < array.length; i+= 3){
      let str = '';
      if(array[i] != undefined) {
        str += `${array[i].trim()}.`;
      };
      if(array[i+1] != undefined) {
        str += `${array[i+1].trim()}.`;
      };
      if(array[i+2] != undefined) {
        str += `${array[i+2].trim()}.`;
      };
      newArr.push(str);
    }
    return newArr;
  }
  sentancesArr = groupArrBy3(sentancesArr);

  sentancesArr.forEach(sentance => {
    const pEl = document.createElement('p');
    pEl.textContent = sentance;
    resultEl.appendChild(pEl);
  });
}