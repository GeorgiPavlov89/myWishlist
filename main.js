const links = document.querySelectorAll('.link');
const underlines = document.querySelectorAll('.underLine');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
          underlines.forEach((underline) => {
            underline.classList.remove('underLine');
          })
      });
      e.preventDefault();
      link.classList.add('active');
      underline.classList.add('underLine')
    });
  });

