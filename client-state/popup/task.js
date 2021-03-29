

window.addEventListener('load', (e) => {
    if (getCookie('modal') === null) {
        document.getElementById('subscribe-modal').classList.add('modal_active');
    } 
})

document.querySelector('.modal__close').addEventListener('click', (e) => {
    document.querySelector('.modal').classList.remove('modal_active');
    document.cookie = 'modal=1';
    console.log(getCookie('modal'));
   
})





function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
        const [key, value] = c.split('=');
        if (key === name) {
            return decodeURIComponent(value)
        }
    }
    return null
}

function setCookie(name, value, props) {
    props = props || {}
    var exp = props.expires
    if (typeof exp == "number" && exp) {
        var d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }
    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    var updatedCookie = name + "=" + value
    for(var propName in props){
        updatedCookie += "; " + propName
        var propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
    document.cookie = updatedCookie
}
