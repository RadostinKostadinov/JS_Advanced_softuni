function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchFieled = document.getElementById('searchField');
      const rows = document.querySelectorAll('tbody tr');
      Array.from(rows).forEach(row => {
         if(row.textContent.toLowerCase().includes(searchFieled.value.toLowerCase()) && searchFieled.value != ''){
            row.className = "select";
         } else {
            row.removeAttribute("class");
         }
      }
      );
   }
}