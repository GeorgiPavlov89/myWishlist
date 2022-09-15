
/* Navigation Links */
const links = document.querySelectorAll('.link');


  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
          
      });
      e.preventDefault();
      link.classList.add('active');
      
    });
  });

  /* Search Bar Clear Button */
const clearButton = document.getElementById('clearButton')
document.getElementById('searchBar').addEventListener('keyup' , (e) => {
  if (e.target.value.length > 0) {
    clearButton.disabled = false;
    clearButton.addEventListener('click', () => {
      document.getElementById('searchBar').value = ''
      clearButton .disabled = true;
    })
  } else {
    clearButton .disabled = true;
  }
})
/* Remove product from list */
const products = document.querySelectorAll('.card')
const buttonRemove = document.querySelectorAll('.remove-list-item')

buttonRemove.forEach((button) => {
  button.addEventListener('click' , (e) => {
    products.forEach((product) => {
      if(product.id === e.target.dataset.card) {
        product.classList.add('removeProduct')
      }
    })
  }
  )
}
)




