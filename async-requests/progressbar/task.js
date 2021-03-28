document.getElementById('form').addEventListener('submit', (event) => {
    let formData = new FormData(document.getElementById('form'));
    let xhr = new XMLHttpRequest;
    xhr.open('POST', '  https://netology-slow-rest.herokuapp.com/upload.php');
    
    xhr.upload.onprogress = function(event) {
        console.log('hi');
        let percent = event.loaded/event.total;
        const progress = document.getElementById( 'progress' );
        progress.value = percent;
      }
    xhr.send(formData); 
    event.preventDefault();  

})

