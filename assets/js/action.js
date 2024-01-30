document.addEventListener('scroll', () =>{
  const nav = document.querySelector('nav')

  if (window.scrollY > 100) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})