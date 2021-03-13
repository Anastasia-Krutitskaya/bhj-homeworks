Array.from(document.querySelectorAll('.interest__check')).forEach(item => {
    item.addEventListener('click', () => {
       const interestsActive = item.closest('.interest').querySelector('.interests_active');
       if (item.checked && interestsActive ) {
        interestsActive.querySelectorAll('.interest__check').forEach(i => {
                i.checked = true;
            })
        } else if ( item.checked === false && interestsActive ) {
            interestsActive.querySelectorAll('.interest__check').forEach(i => {
                i.checked = false;
            })
        }

    })
})