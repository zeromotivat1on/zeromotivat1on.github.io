const arrowDown = document.querySelector('.arrow-down-box')
const fixedBottomArrowBtn = document.querySelector('.arrow-down-box-fixed')
const scrollBoundedItems = document.querySelectorAll('.scroll-bounded-animation')
const fixedTopArrowBtn = document.querySelector('.arrow-left') 
const switchThemeBtn = document.querySelector('.switch-theme-button')

let clockwiseRotation = true,
    arrowPointsDown = true // check arrow point direction in order to scroll in correct way, while its clicked
// Bottom arrow down (only main page) scroll logic
window.addEventListener('scroll', () => {
    if(!arrowDown) return null

    let scrollPos = window.scrollY
    if(scrollPos !== 0) { // if we scrolled - rotate arrow button
        arrowDown.style.transform = 'rotate(180deg)'
        arrowPointsDown = false
    } else {
        // opposite (clockwise and anti-clockwise) rotations each iteration
        if(clockwiseRotation) {
            arrowDown.style.transform = 'rotate(0deg)'
            clockwiseRotation = false
            arrowPointsDown = true
        } else {
            arrowDown.style.transform = 'rotate(360deg)'
            clockwiseRotation = true
            arrowPointsDown = true
        }
    }
})

if(arrowDown) 
    arrowDown.addEventListener('click', () => {
        if(arrowPointsDown) window.scrollBy(0, window.innerHeight)
        else window.scrollBy(0, -window.innerHeight)
    })

// Bottom fixed arrow down (all other pages) scroll logic
window.addEventListener('scroll', () => {
    if(!fixedBottomArrowBtn) return null

    
})

// Theme changing
function setTheme(themeName) {
    localStorage.setItem('theme', themeName)
    document.documentElement.className = themeName
}

switchThemeBtn.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light')
        switchThemeBtn.innerHTML = '<b>Light</b>'
    } else {
        setTheme('theme-dark')
        switchThemeBtn.innerHTML = '<b>Dark</b>'
    }
})

;(function () {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-dark')
        switchThemeBtn.innerHTML = '<b>Dark</b>'
    } else {
        setTheme('theme-light')
        switchThemeBtn.innerHTML = '<b>Light</b>'
    }
})()    