
secondsLeft = document.getElementById('timer').textContent;

function time() {
    secondsLeft -= 1;
    if ( secondsLeft < 0 ) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!"); 
    } else {
        document.getElementById('timer').textContent = secondsLeft;
    }

}
interval = setInterval(time,1000);



