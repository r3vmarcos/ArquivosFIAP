const menu = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.menu_link')

menu.addEventListener('click', () => {
  navMenu.classList.toggle('open')
})
