/**
 * Following file uses includeHTML() function, which includes
 * som part of HTML code from another file and
 * rewrites the logic of anchors in order to make page transition
 * 
 */

// Code is provided by https://www.w3schools.com
// *Some minor changes implemented
function includeHTML() {
    // Loop through a collection of all HTML elements
    let doc = document.getElementsByTagName('*')
    for(let i = 0; i < doc.length; i++) {
        let elem = doc[i]
        // Search for elements with a certain atrribute
        let file = elem.getAttribute('w3-include-html')
        if(file) {
            // Make an HTTP request using the attribute value as the file name
            let xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) elem.innerHTML = this.responseText
                    if (this.status == 404) elem.innerHTML = 'Page not found.'
                    // Remove the attribute, and call this function once more
                    elem.removeAttribute('w3-include-html')
                    includeHTML()
                }
            }
            xhttp.open('GET', file, true)
            xhttp.send()

            return
        }
    }
}

// Call the fucntion to include some HTML code and rewrite anchor logic for transition
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
    for(let i = 0 ; i < anchors.length; ++i) {
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