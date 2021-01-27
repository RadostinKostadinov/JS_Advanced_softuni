function addItem() {
    const newText = document.getElementById('newItemText');
    const newLi = document.createElement('LI');
    newLi.textContent = newText.value;
    document.getElementById('items').appendChild(newLi);
    newText.value = '';
}