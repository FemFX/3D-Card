let cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mousemove', rotate);
    cards[i].addEventListener('mouseout', back);  
}
function rotate(event){
    let cardItem     = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth  = cardItem.offsetWidth / 2;
    console.log(halfHeight, halfWidth);
    cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeight) / 10}deg) rotateY(${(event.offsetX - halfWidth) / 10}deg)`
}
function back(event) {  
    let cardItem     = this.querySelector('.card-item');
    cardItem.style.transform = `rotate(0)`
}