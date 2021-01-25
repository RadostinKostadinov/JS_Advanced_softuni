function search() {
   const liElements = document.querySelectorAll('#towns li');
   const searchText = document.getElementById('searchText');

   let matches = 0;
   Array.from(liElements).forEach(town => {
      if((town.textContent.toLowerCase()).includes((searchText.value).toLowerCase())) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   })
   document.getElementById('result').textContent = `${matches} matches found`;
}
