function solve() {
   Array.from(document.querySelectorAll('button')).forEach(product => product.addEventListener('click', onClick));
   const textArea = document.querySelector('textarea');

   function onClick(el) {
      if (el.target.tagName == 'BUTTON' && el.target.className == 'add-product') { // when 'Add' button is clicked
         const product = el.target.parentNode.parentNode;
         const productName = product.querySelector('.product-details div').textContent;
         const productPrice = Number(product.querySelector('.product-line-price').textContent);

         textArea.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
      };
      if (el.target.tagName == 'BUTTON' && el.target.className == 'checkout') { // when "Checkout" button is clicked
         const myArr = textArea.textContent.split(' to the cart.\n').filter(line => line != '');
         const productsInCart = [];
         let totalPrice = 0;
         for (const line of myArr) {
             const  [, product, , price] = line.split(' ');
             if(productsInCart.indexOf(product) == -1) {
                productsInCart.push(product);
             }
             totalPrice += Number(price);
         }
         textArea.textContent += `You bought ${productsInCart.join(', ')} for ${totalPrice.toFixed(2)}`;
         Array.from(document.querySelectorAll('button')).forEach(button => button.disabled = 'true');
      };
   };
}