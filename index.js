const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none'
})

const themeToggler = document.querySelector('.theme-toggler')

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})


var sideBar = document.querySelector(".sidebar");
var menu = sideBar.querySelectorAll('a')

for (var i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    var current = document.querySelectorAll("a.active");
    current[0].classList.remove("active")
    this.classList.add("active")
  });
}



