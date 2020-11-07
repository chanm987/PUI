//Id array for remove 
var IdArray = [];

//Subtotal 
var CPSubtotal=0;

//Sales Tax
var CPSSalesTax=0;

//Shipping
var CPShipping=0;

//Grand Total
var CPGrandTotal=0;

var SelectedArray = JSON.parse(localStorage.getItem('Cart'));
// console.log(SelectedArray);


//access object in local storage
if (SelectedArray!=null) {
    for (let i=0; i<SelectedArray.length; i++) {
        loadProducts(i);
        // console.log(SelectedArray[i]);
    }
}

//Load Products on Shopping Cart page
function loadProducts(index) {

    //Large Item Container Per Div 
    let LargeContainerItemInfo = document.createElement('div');
    LargeContainerItemInfo.setAttribute('class', 'ItemInfo');

    //Item Info on Left 
    let ItemDescLeft = document.createElement('div');
    ItemDescLeft.setAttribute('class', 'ItemInfoLeft');

    //Item Image 
    let CartImage = document.createElement("img");
    CartImage.setAttribute('class', 'JuliaCouchPillowCartImage');
    CartImage.setAttribute('src', SelectedArray[index].image);

    //Items Full Desc 
    let CartItemDescDiv = document.createElement('div');
    CartItemDescDiv.setAttribute('class', 'JuliaCartInfo');

    //Add Product Name 
    let CartProductName = document.createElement('h5');
    CartProductName.setAttribute('class', 'ProductName');
    var CPProductName = SelectedArray[index].product;
    CartProductName.innerHTML = CPProductName;

    //Add Color Selection
    let CartColorName = document.createElement("h6");
    CartColorName.setAttribute('class', 'ColorName');
    var CPColorName = SelectedArray[index].color;
    CartColorName.innerHTML = 'COLOR: ' + CPColorName;

    //Add Fill Choice
    let CartFillChoice = document.createElement('h6');
    CartFillChoice.setAttribute('class', 'FillChoice');
    var CPFillChoice = SelectedArray[index].fill;
    CartFillChoice.innerHTML = "FILL: " + CPFillChoice;

    //Make Changes 
    let MakeChanges = document.createElement('div');
    MakeChanges.setAttribute('class', 'CartMakeChanges');
    
    //Remove Item 
    let CartRemoveAnItem = document.createElement('div');
    CartRemoveAnItem.setAttribute('class', 'CartRemoveItem');
    CartRemoveAnItem.innerHTML = "REMOVE ITEM"
    CartRemoveAnItem.setAttribute('id', index);

    //Cart Quantity + Total Price Container
    let CartQtyTotal = document.createElement('div');
    CartQtyTotal.setAttribute('class', 'CartQuantityItemTotal');

    //Cart Quantity Container
    let QtyContainer = document.createElement('div');
    QtyContainer.setAttribute('class', 'CartQuantity');

    //Cart Quantity
    let CartQuantityItems = document.createElement('h6');
    CartQuantityItems.setAttribute('class', 'CartQuantityNum');
    var CPQuantity = SelectedArray[index].quantity;
    CartQuantityItems.innerHTML = CPQuantity;

    //Update Quantity
    let CartUpdateQty = document.createElement('h6');
    CartUpdateQty.setAttribute('class', "CartUpdate");
    CartUpdateQty.innerHTML = "UPDATE";

    //Each Item Price
    let EachItemPrice = document.createElement('div');
    EachItemPrice.setAttribute('class', 'CartEachItemPrice');
    EachItemPrice.innerHTML = "$45.00";

    //Total Price 
    let TotalPrice = document.createElement('div');
    TotalPrice.setAttribute('class', 'CartItemTotalPrice');
    var CPTotalPrice = SelectedArray[index].price;
    TotalPrice.innerHTML = '$' + CPTotalPrice;
    

    //Append my children to the container
    ItemDescLeft.appendChild(CartImage);
    CartItemDescDiv.appendChild(CartProductName);
    CartItemDescDiv.appendChild(CartColorName);
    CartItemDescDiv.appendChild(CartFillChoice);
    MakeChanges.appendChild(CartRemoveAnItem);
    CartItemDescDiv.appendChild(MakeChanges);
    ItemDescLeft.appendChild(CartItemDescDiv);
    LargeContainerItemInfo.appendChild(ItemDescLeft);

    
    QtyContainer.appendChild(CartQuantityItems);
    QtyContainer.appendChild(CartUpdateQty);
    CartQtyTotal.appendChild(QtyContainer);
    CartQtyTotal.appendChild(EachItemPrice);
    CartQtyTotal.appendChild(TotalPrice);
    LargeContainerItemInfo.appendChild(CartQtyTotal);

    document.getElementById('SCContainer').appendChild(LargeContainerItemInfo);
    

    //Add Subtotal 
    let CartPageSubtotal = document.getElementById("CartPageSubtotal");
    // console.log(CPSubtotal, typeof CPSubtotal)
    CPSubtotal = CPSubtotal + parseFloat(SelectedArray[index].price);
    // console.log(CPSubtotal, typeof CPSubtotal)
    CartPageSubtotal.innerHTML = '$' + CPSubtotal.toFixed(2);

    //Add Sales Tax 
    let CartPageSalesTax = document.getElementById("CartPageSalesTax");
    CPSalesTax = CPSubtotal * 0.06;
    CartPageSalesTax.innerHTML = '$' + CPSalesTax.toFixed(2);
    
    //Add Shipping Fee 
    let CartPageShipping = document.getElementById('CartPageShipping');
    if (CPSubtotal > 75) {
        CPShipping = 0;
        CartPageShipping.innerHTML = '$' + CPShipping.toFixed(2);
    } else {
        CPShipping = 15;
        CartPageShipping.innerHTML = '$' + CPShipping.toFixed(2);
    }
    
    //Add Grand Total
    let CartPageGrandTotal = document.getElementById('CartPageGrandTotal');
    CPGrandTotal = CPSubtotal + CPSalesTax + CPShipping;
    CartPageGrandTotal.innerHTML = '$' + CPGrandTotal.toFixed(2);




}

var RemoveItemsList = document.getElementsByClassName('CartRemoveItem');
// console.log(localStorage.getItem("Cart"))
for (let i=0; i<RemoveItemsList.length; i++) {
    RemoveItemsList[i].addEventListener('click', function() {
        var currentId = this.id;
        // console.log("index" + currentId)
        console.log(SelectedArray)
        SelectedArray.splice(0,1);
        console.log(SelectedArray)
        
        localStorage.setItem('Cart', JSON.stringify(SelectedArray));
        location.reload();
    });
}
