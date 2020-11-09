//when item is in cart dot appears 
const cartDot = document.getElementById("CartHasItem");
if (JSON.parse(localStorage.getItem('Cart'))!=null) {
    cartDot.style.display = 'block';  
} else {
    cartDot.style.display = 'none';
}