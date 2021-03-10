function rotate() {
    Array.from(document.querySelectorAll('.rotator')).forEach((item) => {
       const rotator = Array.from(item.querySelectorAll('.rotator__case'));
       let activeCase = rotator.findIndex(i => i.classList.contains('rotator__case_active'));
       rotator[activeCase].classList.remove('rotator__case_active');
       activeCase = activeCase === rotator.length - 1 ? 0 : activeCase + 1;
       rotator[activeCase].classList.add('rotator__case_active')
    })
}
 setInterval(rotate, 1000);



