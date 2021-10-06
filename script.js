const element = document.getElementById('vertical-navbar');
var visible = 0;

var ham = document.getElementById('ham');

ham.addEventListener('click', () => {
    if(visible === 0){
        element.style.display = 'none';
        visible = 1;
    }else{
        element.style.display = 'flex';
        visible = 0;
    }
});

if(window.innerWidth >= 1000 && visible === 1){
    ham.click();
}