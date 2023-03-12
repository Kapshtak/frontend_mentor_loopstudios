const menuButton = document.querySelector('.mobile')
const closeButton = document.querySelector('.close')
const nav = document.getElementById('mob_menu')
const header = document.getElementsByTagName('header')
const menuItems = document.querySelectorAll('#mob_menu li a')
const desktopStyle = document.getElementById('desktop_style')
const mobileStyle = document.getElementById('mobile_style')

document.addEventListener('DOMContentLoaded', init)

function init() {
  console.log(window.innerWidth)
}
if (window.innerWidth >= 1440) {
  mobileStyle.rel = 'stylesheet alternate'
  desktopStyle.rel = 'stylesheet'
} else {
  mobileStyle.rel = 'stylesheet'
  desktopStyle.rel = 'stylesheet alternate'
}

const mobMenuOpen = () => {
  for (const element of menuItems) {
    element.addEventListener('click', mobMenuClose)
  }

  for (const element of header) {
    element.classList.toggle('responsive')
  }
  menuButton.classList.toggle('hidden')
  closeButton.classList.toggle('hidden')

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }
}

const mobMenuClose = () => {
  for (const element of header) {
    element.classList.toggle('responsive')
  }
  menuButton.classList.toggle('hidden')
  closeButton.classList.toggle('hidden')

  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive')
  } else {
    nav.classList.add('responsive')
  }
}

const scrollFunction = () => {
  if (
    menuButton.classList.contains('hidden') &&
    window.innerWidth < 1440 &&
    (document.body.scrollTop > 667 || document.documentElement.scrollTop > 667)
  ) {
    mobMenuClose()
  }
}

window.onscroll = function () {
  scrollFunction()
}
menuButton.addEventListener('click', mobMenuOpen)
closeButton.addEventListener('click', mobMenuClose)
window.onresize = function () {
  if (window.innerWidth >= 1440) {
    mobileStyle.rel = 'stylesheet alternate'
    desktopStyle.rel = 'stylesheet'
  } else {
    mobileStyle.rel = 'stylesheet'
    desktopStyle.rel = 'stylesheet alternate'
  }
}
