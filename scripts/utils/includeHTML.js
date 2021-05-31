// Code is provided by https://www.w3schools.com
// *Some minor changes implemented

function includeHTML() {
    /* Loop through a collection of all HTML elements: */
    let doc = document.getElementsByTagName("*")
    for(let i = 0; i < doc.length; i++) {
        let elem = doc[i]
        /* Search for elements with a certain atrribute: */
        let file = elem.getAttribute("w3-include-html")
        if(file) {
            /* Make an HTTP request using the attribute value as the file name: */
            let xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) elem.innerHTML = this.responseText
                    if (this.status == 404) elem.innerHTML = "Page not found."
                    /* Remove the attribute, and call this function once more: */
                    elem.removeAttribute("w3-include-html")
                    includeHTML()
                }
            }
            xhttp.open("GET", file, true)
            xhttp.send()
            /* Exit the function: */
            return
        }
    }
}