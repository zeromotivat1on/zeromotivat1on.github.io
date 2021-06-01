window.onload = () => {
    includeHTML() // function to include part of html code

    // Page transition
    const transitionElem = document.querySelector('.transition')
    setTimeout(() => {
        transitionElem.classList.remove('is-active')
    }, 500)

    // Following part of code rewrites the logic of anchors in order to
    // make page transition not only while loading, but while going through ref
    const anchors = document.querySelectorAll('a')
    for(let i in anchors) {
        anchors[i].addEventListener('click', (e) => {
            e.preventDefault()
            let target = e.target.href
            if(target === undefined) target = 'index.html'
            transitionElem.classList.add('is-active')

            setTimeout(() => {
                window.location.href = target
            }, 500)
        })
    }
}

const arrowDown = document.querySelector('.arrow-down')
let clockwiseRotation = true,
    arrowPointsDown = true // check arrow point direction in order to scroll in correct way, while its clicked
window.addEventListener('scroll', () => {
    let scrollPos = this.scrollY
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

arrowDown.addEventListener('click', () => {
    if(arrowPointsDown) window.scrollBy(0, window.innerHeight)
    else window.scrollBy(0, -window.innerHeight)
})