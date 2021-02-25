img = document.getElementById('cookie');
click = +document.getElementById('clicker__counter').textContent;
console.log(click);
img.onclick = function() {
    click += 1;
    console.log(click);
    document.getElementById('clicker__counter').textContent = click;
    if (click %2 == 0) {
        img.width -= 20;
        img.height -= 20;
    } else {
        img.width += 20;
        img.height += 20;
    }
   
}
