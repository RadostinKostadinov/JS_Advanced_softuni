function solve() {
   const authorField = document.getElementById('creator');
   const titleField = document.getElementById('title');
   const categoryField = document.getElementById('category');
   const contentField = document.getElementById('content');
   document.querySelector('button[class=\'btn create\']').addEventListener('click', Create);
   const archiveOl = document.querySelector('section.archive-section ol');
   const mainSection = document.querySelector('div.site-content main section');


   function Create(ev) {
      ev.preventDefault();
      const divButtons = e('div');
      divButtons.className = 'buttons';
      const deleteButton = e('button', 'Delete');
      deleteButton.className = 'btn delete';
      const archiveButton = e('button', 'Archive');
      archiveButton.className = 'btn archive';

      const name = titleField.value;
      deleteButton.addEventListener('click', () => deleteFnc(article));
      archiveButton.addEventListener('click', () => archiveFnc(name, article));

      divButtons.appendChild(deleteButton);
      divButtons.appendChild(archiveButton);



      const article = e('article',
         e('h1', titleField.value),
         e('p', 'Category:',
            e('strong', categoryField.value)),
         e('p', 'Creator:',
            e('strong', authorField.value)),
         e('p', contentField.value),
         divButtons
      );

      mainSection.appendChild(article);

   };

   function deleteFnc(article) {
      article.remove();
   };

   function archiveFnc(name, article) {
      const newLi = e('li', name);
      archiveOl.appendChild(newLi);
      article.remove();
      sortArchive();
   };

   function sortArchive() {
      Array
         .from(archiveOl.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => archiveOl.appendChild(li));
   }


   function e(type, ...content) {
      const result = document.createElement(type);

      content.forEach(c => {
         if (typeof c == 'string' || typeof c == 'number') {
            const node = document.createTextNode(c);
            result.appendChild(node);
         } else {
            result.appendChild(c);
         }
      });
      return result;
   }
}
