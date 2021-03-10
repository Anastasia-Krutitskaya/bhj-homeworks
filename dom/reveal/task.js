
Array.from(document.querySelectorAll('.reveal')).forEach((item) => {
     window.addEventListener('scroll', () => {
        const viewportHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const elementBottom = item.getBoundingClientRect().bottom;
        if ( elementBottom <= viewportHeight && elementTop >= 0 ) {
            item.classList.add('reveal_active');
        }
    })
})

