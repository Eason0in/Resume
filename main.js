const menuBlocks = document.querySelector('.menu-blocks')
const menuClose = document.getElementById('close')
const menuList = document.querySelector('.menu-container')
const contentBlocks = [...document.querySelectorAll('.content-blocks')]
const menuLists = [...document.querySelectorAll('.menu li')]
const clearClassMap = [
  {
    array: contentBlocks,
    className: 'showx'
  },
  {
    array: menuLists,
    className: 'active'
  }
]

//監聽四個menu項目
menuBlocks.addEventListener('click', e => {
  const selectMenu = e.target.closest('.menu-block').dataset.menu

  if (selectMenu) {
    const menuItem = document.querySelector(`li.${selectMenu}`)
    toggleClass(selectMenu, menuItem)
    menuList.classList.toggle('showx')
  }
})

//監聽上排menu
menuList.addEventListener('click', e => {
  const menuItem = e.target
  if ((menuItem.nodeName === 'LI') & (menuItem.id !== 'close')) {
    clearClass()
    toggleClass(menuItem.textContent, menuItem)
  }
})

//切換content的showx class & menuLists的active class
const toggleClass = (selectMenu, menuItem) => {
  const selectItem = document.getElementById(selectMenu)
  selectItem.classList.toggle('showx')
  menuItem.classList.toggle('active')
}

//監聽x
menuClose.addEventListener('click', () => {
  menuList.classList.toggle('showx')
  clearClass()
})

//清除所有content的showx class & menuLists的active class
const clearClass = () => {
  for (let i = 0; i < clearClassMap.length; i++) {
    const { array, className } = clearClassMap[i]
    array.forEach(item => item.classList.remove(`${className}`))
  }
}
