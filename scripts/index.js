const arrowDown = document.querySelector('.arrow-down-box')
const fixedBottomArrowBtn = document.querySelector('.arrow-down-fixed')
const scrollBoundedItems = document.querySelectorAll('.scroll-bounded-animation')

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

    let scrollPos = window.scrollY
    console.log(scrollPos, window.innerHeight)
    if(scrollPos >= window.innerHeight) { // works only now for about page (remaster required)
        fixedBottomArrowBtn.style.transform = 'rotate(180deg)'
        fixedBottomArrowBtn.style.bottom = `${Math.floor(scrollPos - window.innerHeight)}px`
    } else {
        fixedBottomArrowBtn.style.transform = 'rotate(0deg)'
        fixedBottomArrowBtn.style.bottom = '0'
    }

    if(!scrollBoundedItems) return null

    for(let i = 0; i < scrollBoundedItems.length; ++i) {
        let sbiOffset = scrollBoundedItems[i].offsetTop // top offset of scroll bounded items
        if(scrollPos > 150) {
            scrollBoundedItems[i].style.opacity = 0
            scrollBoundedItems[i].style.transform = 'translateY(-50px)'
        } else {
            scrollBoundedItems[i].style.opacity = 1
            scrollBoundedItems[i].style.transform = 'translateY(0px)'
        }
    }
})