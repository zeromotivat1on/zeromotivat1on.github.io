document.getElementById('dropdown-menu-button').addEventListener('click', () => {
    let dropdownMenu = document.querySelector('.dropdown-menu')
    let dropdownMenuButton = document.getElementById('dropdown-menu-button')

    if(!dropdownMenu.className.includes('hidden')) {
        dropdownMenu.className = 'dropdown-menu hidden'
        dropdownMenu.style.transform = 'translateY(-200%)'
        dropdownMenu.style.zIndex = '-50'
        dropdownMenuButton.style.transform = 'rotate(0deg)'
    } else {
        dropdownMenu.className = 'dropdown-menu'
        dropdownMenu.style.transform = 'translateY(0%)'
        setTimeout(() => { dropdownMenu.style.zIndex = '0' }, 300)
        dropdownMenuButton.style.transform = 'rotate(-90deg)'
    }
})

let dropdownMenuContents = document.querySelectorAll('.dropdown-menu-content')

// About
dropdownMenuContents[0].addEventListener('click', () => {
    console.log('About')
})

// Projects
dropdownMenuContents[1].addEventListener('click', () => {
    console.log('Projects')
})

// Contact
dropdownMenuContents[2].addEventListener('click', () => {
    console.log('Contact')
})
