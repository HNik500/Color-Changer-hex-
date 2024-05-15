
document.addEventListener("DOMContentLoaded", function(event) {
    let getBtntobc = document.getElementById('change-color-btn');
let changebc = document.getElementById('color-box');
getBtntobc.addEventListener('click', function  getRandomColor(){
    
    let array1 = ["A", "B", "C", "D", "E","F", "1","2","3","4","5","6","7","8","9"]
    let hexcolor = '#'
    for(let i = 0; i<6; i++){
    let randomno = Math.floor(Math.random()*array1.length)
    hexcolor+=array1[randomno]
    }
    changebc.style.backgroundColor = hexcolor
    document.querySelector('.mycurrentcolor').innerHTML = hexcolor;
    
})
});

// getBtn.style.backgroundColor 





// const spanHi = document.getElementById('color-box');
// spanHi.style.backgroundColor = '#abc23e';
