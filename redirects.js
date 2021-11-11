function beginRedirect() {
    console.log(document.location)

    const queryParams = new URL(document.location).searchParams
    const reason = queryParams.get('reason')
    switch (reason) {
        case 'bc-christmas':
            window.open('https://myfigurecollection.net/', '_self')        
            break
        case 'lost-luggage':
            window.open('https://andrewvora.com', '_self')
            break
    } 
}

window.onload = beginRedirect