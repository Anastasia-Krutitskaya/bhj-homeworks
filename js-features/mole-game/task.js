
dead = +document.getElementById('dead').textContent;
lost = +document.getElementById('lost').textContent;

getHole = index => document.getElementById(`hole${index}`);

for ( let i = 1; i <= document.getElementsByClassName('hole').length; i++ ) {
    getHole(i).addEventListener('click', () => {
        if ( getHole(i).className.includes('hole_has-mole') ) {
            dead += 1; 
            document.getElementById('dead').textContent = dead;
        } else {
            lost += 1;
            document.getElementById('lost').textContent = lost;
        }
        if ( dead == 10 ) {
            alert('Победа!') 
        }
        if ( lost == 5 ) {
            alert('Игра окончена!')
            dead = 0;
            lost = 0;
            document.getElementById('dead').textContent = dead;
            document.getElementById('lost').textContent = lost;
        }  
    });  
    
}






