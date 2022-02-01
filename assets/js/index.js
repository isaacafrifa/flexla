const menuBtn = document.querySelector('.menu-btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.close-btn')
const blurOverlay = document.querySelector('.blur-overlay')

const IS_ACTIVE = 'is-active'
const CLICK = 'click'

//toggle navigation and blur overlay
const toggleNavigation = () => {
    navigation.classList.toggle(IS_ACTIVE)
    blurOverlay.classList.toggle(IS_ACTIVE)
}

//listeners
menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation) 

//create new instance of fullpage constructor
new fullpage('#myfullpage', {
    autoScrolling: true,
    scrollBar: true
})