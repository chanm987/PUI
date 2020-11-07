//Id array for remove 
var idArray = [];

//Subtotal 
var cPSubtotal=0;

//Sales Tax
var cPSSalesTax=0;

//Shipping
var cPShipping=0;

//Grand Total
var cPGrandTotal=0;

var selectedArray = JSON.parse(localStorage.getItem('Cart'));
// console.log(SelectedArray);


//access object in local storage
if (selectedArray!=null) {
    for (let i=0; i<selectedArray.length; i++) {
        loadProducts(i);
        // console.log(SelectedArray[i]);
    }
}

//Load Products on Shopping Cart page
function loadProducts(index) {

    //Large Item Container Per Div 
    let largeContainerItemInfo = document.createElement('div');
    largeContainerItemInfo.setAttribute('class', 'ItemInfo');

    //Item Info on Left 
    let itemDescLeft = document.createElement('div');
    itemDescLeft.setAttribute('class', 'ItemInfoLeft');

    //Item Image 
    let cartImage = document.createElement("img");
    cartImage.setAttribute('class', 'JuliaCouchPillowCartImage');
    cartImage.setAttribute('src', selectedArray[index].image);

    //Items Full Desc 
    let cartItemDescDiv = document.createElement('div');
    cartItemDescDiv.setAttribute('class', 'JuliaCartInfo');

    //Add Product Name 
    let cartProductName = document.createElement('h5');
    cartProductName.setAttribute('class', 'ProductName');
    var cPProductName = selectedArray[index].product;
    cartProductName.innerHTML = cPProductName;

    //Add Color Selection
    let cartColorName = document.createElement("h6");
    cartColorName.setAttribute('class', 'ColorName');
    var cPColorName = selectedArray[index].color;
    cartColorName.innerHTML = 'COLOR: ' + cPColorName;

    //Add Fill Choice
    let cartFillChoice = document.createElement('h6');
    cartFillChoice.setAttribute('class', 'FillChoice');
    var cPFillChoice = selectedArray[index].fill;
    cartFillChoice.innerHTML = "FILL: " + cPFillChoice;

    //Make Changes 
    let makeChanges = document.createElement('div');
    makeChanges.setAttribute('class', 'CartMakeChanges');
    
    //Remove Item 
    let cartRemoveAnItem = document.createElement('div');
    cartRemoveAnItem.setAttribute('class', 'CartRemoveItem');
    cartRemoveAnItem.innerHTML = "REMOVE ITEM"
    cartRemoveAnItem.setAttribute('id', index);

    //Cart Quantity + Total Price Container
    let cartQtyTotal = document.createElement('div');
    cartQtyTotal.setAttribute('class', 'CartQuantityItemTotal');

    //Cart Quantity Container
    let qtyContainer = document.createElement('div');
    qtyContainer.setAttribute('class', 'CartQuantity');

    //Cart Quantity
    let cartQuantityItems = document.createElement('h6');
    cartQuantityItems.setAttribute('class', 'CartQuantityNum');
    var cPQuantity = selectedArray[index].quantity;
    cartQuantityItems.innerHTML = cPQuantity;

    //Update Quantity
    let cartUpdateQty = document.createElement('h6');
    cartUpdateQty.setAttribute('class', "CartUpdate");
    cartUpdateQty.innerHTML = "UPDATE";

    //Each Item Price
    let eachItemPrice = document.createElement('div');
    eachItemPrice.setAttribute('class', 'CartEachItemPrice');
    eachItemPrice.innerHTML = "$45.00";

    //Total Price 
    let totalPrice = document.createElement('div');
    totalPrice.setAttribute('class', 'CartItemTotalPrice');
    var cPTotalPrice = selectedArray[index].price;
    totalPrice.innerHTML = '$' + cPTotalPrice;
    

    //Append my children to the container
    itemDescLeft.appendChild(cartImage);
    cartItemDescDiv.appendChild(cartProductName);
    cartItemDescDiv.appendChild(cartColorName);
    cartItemDescDiv.appendChild(cartFillChoice);
    makeChanges.appendChild(cartRemoveAnItem);
    cartItemDescDiv.appendChild(makeChanges);
    itemDescLeft.appendChild(cartItemDescDiv);
    largeContainerItemInfo.appendChild(itemDescLeft);

    
    qtyContainer.appendChild(cartQuantityItems);
    qtyContainer.appendChild(cartUpdateQty);
    cartQtyTotal.appendChild(qtyContainer);
    cartQtyTotal.appendChild(eachItemPrice);
    cartQtyTotal.appendChild(totalPrice);
    largeContainerItemInfo.appendChild(cartQtyTotal);

    document.getElementById('sCContainer').appendChild(largeContainerItemInfo);
    

    //Add Subtotal 
    let cartPageSubtotal = document.getElementById("cartPageSubtotal");
    // console.log(cPSubtotal, typeof cPSubtotal)
    cPSubtotal = cPSubtotal + parseFloat(selectedArray[index].price);
    // console.log(cPSubtotal, typeof cPSubtotal)
    cartPageSubtotal.innerHTML = '$' + cPSubtotal.toFixed(2);

    //Add Sales Tax 
    let cartPageSalesTax = document.getElementById("cartPageSalesTax");
    cPSalesTax = cPSubtotal * 0.06;
    cartPageSalesTax.innerHTML = '$' + cPSalesTax.toFixed(2);
    
    //Add Shipping Fee 
    let cartPageShipping = document.getElementById('cartPageShipping');
    if (cPSubtotal > 75) {
        cPShipping = 0;
        cartPageShipping.innerHTML = '$' + cPShipping.toFixed(2);
    } else {
        cPShipping = 15;
        cartPageShipping.innerHTML = '$' + cPShipping.toFixed(2);
    }
    
    //Add Grand Total
    let cartPageGrandTotal = document.getElementById('cartPageGrandTotal');
    cPGrandTotal = cPSubtotal + cPSalesTax + cPShipping;
    cartPageGrandTotal.innerHTML = '$' + cPGrandTotal.toFixed(2);




}

var removeItemsList = document.getElementsByClassName('CartRemoveItem');
// console.log(localStorage.getItem("Cart"))
for (let i=0; i<removeItemsList.length; i++) {
    removeItemsList[i].addEventListener('click', function() {
        var currentId = this.id;
        // console.log("index" + currentId)
        console.log(selectedArray)
        selectedArray.splice(0,1);
        console.log(selectedArray)
        
        localStorage.setItem('Cart', JSON.stringify(selectedArray));
        location.reload();
    });
}
