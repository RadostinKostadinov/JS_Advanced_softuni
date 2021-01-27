function deleteByEmail() {
    const email = document.querySelector('label input[type="text"]').value;
    const tableEls = document.querySelector('#customers tbody');
    const result = document.getElementById('result');
    let isDeleted = false;
    for(const row of Array.from(tableEls.children)){
        if(row.children[1].textContent == email){
            row.remove();
            result.textContent = 'Deleted.';
            isDeleted = true;
        }
    };
    if(!isDeleted){
        result.textContent = 'Not found.';
    }
}