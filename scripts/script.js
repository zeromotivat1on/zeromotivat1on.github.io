const footer = document.querySelector('.footer')
console.log(footer)

const arrowDown = document.querySelector('.arrow-down')

let clockwiseRotation = true
window.addEventListener('scroll', () => {
    let scrollPos = this.scrollY
    console.log(clockwiseRotation)

    if(scrollPos !== 0) arrowDown.style.transform = 'rotate(180deg)'
    
    if(scrollPos === 0 && clockwiseRotation) {
        arrowDown.style.transform = 'rotate(0deg)'
        clockwiseRotation = false
    } else if(scrollPos === 0 && !clockwiseRotation) {
        arrowDown.style.transform = 'rotate(360deg)'
        clockwiseRotation = true
    }
})
