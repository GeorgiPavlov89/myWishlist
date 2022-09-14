const links = document.querySelectorAll('.link');
const underlines = document.querySelectorAll('.underLine');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
          
      });
      e.preventDefault();
      link.classList.add('active');
      
    });
  });

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


