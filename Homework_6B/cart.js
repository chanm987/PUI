var SelectedArray = JSON.parse(localStorage.getItem('Selected'));
console.log(SelectedArray);

function LoadProducts() {

    //Large Item Container Per Div 
    let LargeContainerItemInfo = document.createElement('div');
    LargeContainerItemInfo.setAttribute('class', 'ItemInfo');

    //Item Info on Left 
    let ItemDescLeft = document.createElement('div');
    ItemDescLeft.setAttribute('class', 'ItemInfoLeft');

    //Item Image 
    let CartImage = document.createElement("img");
    CartImage.setAttribute('class', 'JuliaCouchPillowCartImage');

    //Items Full Desc 
    let CartItemDescDiv = document.createElement('div');
    CartItemDescDiv.setAttribute('class', 'JuliaCartInfo');

    //Add Product Name 
    let CartProductName = document.createElement('h5');
    CartProductName.setAttribute('class', 'ProductName');

    //Add Color Selection
    let CartColorName = document.createElement("h6");
    CartColorName.setAttribute('class', 'ColorName');

    //Add Fill Choice
    let CartFillChoice = document.createElement('h6');
    CartFillChoice.setAttribute('class', 'FillChoice');

    //Make Changes 
    let MakeChanges = document.createElement('div');
    MakeChanges.setAttribute('class', 'CartMakeChanges');
    
    //Remove Item 
    let CartRemoveAnItem = document.createElement('div');
    CartRemoveAnItem.setAttribute('class', 'CartRemoveItem');

    //Cart Quantity + Total Price Container
    let CartQtyTotal = document.createElement('div');
    CartQtyTotal.setAttribute('class', 'CartQuantityItemTotal');

    //Cart Quantity Container
    let QtyContainer = document.createElement('div');
    QtyContainer.setAttribute('class', 'CartQuantity');

    //Cart Quantity
    let CartQuantityItems = document.createElement('h6');
    CartQuantityItems.setAttribute('class', 'CartQuantityNum');

    //Update Quantity
    let CartUpdateQty = document.createElement('h6');
    CartUpdateQty.setAttribute('class', "CartUpdate");

    //Each Item Price
    let EachItemPrice = document.createElement('div');
    EachItemPrice.setAttribute('class', 'CartEachItemPrice');

    //Total Price 
    let TotalPrice = document.createElement('div');
    TotalPrice.setAttribute('class', 'CartItemTotalPrice');

    //Append my children to the container
    ItemDescLeft.appendChild(CartImage);
    CartItemDescDiv.appendChild(CartProductName);
    CartItemDescDiv.appendChild(CartItemDescDiv);
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
    

}