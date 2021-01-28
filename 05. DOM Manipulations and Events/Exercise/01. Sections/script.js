function create(words) {
      const divContent = document.getElementById('content');
      divContent.addEventListener('click', onClick);

      for (const word of words) {
         const newParagraphEl = document.createElement('P');
         newParagraphEl.textContent = word;
         newParagraphEl.style.display = 'none';
         const newDivEl = document.createElement('DIV');
         newDivEl.appendChild(newParagraphEl);
         divContent.appendChild(newDivEl);
      }

      function onClick(ev){
         const isVisible = ev.target.children[0].style.display === 'block';
         console.log(isVisible);
         isVisible ? ev.target.children[0].style.display = 'none' : ev.target.children[0].style.display = 'block';
      };
}