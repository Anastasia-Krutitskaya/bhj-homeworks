
document.getElementById('editor').addEventListener('keyup', () => {
    let text = document.getElementById('editor').value;
    localStorage.setItem('savedText', text);
 })
window.addEventListener('load', () => {
    document.getElementById('editor').value = localStorage.getItem('savedText');
})

 