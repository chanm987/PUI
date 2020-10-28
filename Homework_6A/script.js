window.onload = () => {

    // Change selection color on click
    let Selected = {
        color: "Morning Haze",
        fill: "Memory Foam",
        quantity: 1
    };

    let BeigeChip = document.getElementById("BeigeChip");
    BeigeChip.onclick = function () {
        BeigeChip.style.border = "2px solid #000000";
        BlueChip.style.border = "none";
        GrayChip.style.border = "none";
        YellowChip.style.border = "none";
        ColorName.innerHTML = "Morning Haze";
        Selected.color = "Morning Haze";
    }

    let BlueChip = document.getElementById("BlueChip");
    BlueChip.onclick = function () {
        BlueChip.style.border = "2px solid #000000";
        BeigeChip.style.border = "none";
        YellowChip.style.border = "none";
        GrayChip.style.border = "none";
        ColorName.innerHTML = "Cozy Denim";
        Selected.color = "Cozy Denim";
    }

    let GrayChip = document.getElementById("GrayChip");
    GrayChip.onclick = function () {
        GrayChip.style.border = "2px solid #000000";
        BeigeChip.style.border = "none";
        BlueChip.style.border = "none";
        YellowChip.style.border = "none";
        ColorName.innerHTML = "Rainy Day";
        Selected.color = "Rainy Day";
    }

    let YellowChip = document.getElementById("YellowChip");
    YellowChip.onclick = function () {
        YellowChip.style.border = "2px solid #000000";
        BeigeChip.style.border = "none";
        BlueChip.style.border = "none";
        GrayChip.style.border = "none";
        ColorName.innerHTML = "After School Special";
        Selected.color = "After School Special";
    }

    //Change fill selection
    let MemoryFoamChoice = document.getElementById("MemoryFoamChoice");
    MemoryFoamChoice.onclick = function () {
        FillChoice.innerHTML = "Memory Foam";
        MemoryFoamChoice.style.background = "#888282";
        MemoryFoamChoice.style.color = "#FFFFFF";
        DuckDownChoice.style.border = "1px solid #888282";
        DuckDownChoice.style.color = "#888282";
        DuckDownChoice.style.background = "#FFFFFF";
        HypoChoice.style.border = "1px solid #888282";
        HypoChoice.style.color = "#888282";
        HypoChoice.style.background = "#FFFFFF";
        Selected.fill = "Memory Foam";
    }

    let DuckDownChoice = document.getElementById("DuckDownChoice");
    DuckDownChoice.onclick = function () {
        FillChoice.innerHTML = "Duck Down";
        DuckDownChoice.style.background = "#888282";
        DuckDownChoice.style.color = "#FFFFFF";
        MemoryFoamChoice.style.border = "1px solid #888282";
        MemoryFoamChoice.style.color = "#888282";
        MemoryFoamChoice.style.background = "#FFFFFF";
        HypoChoice.style.border = "1px solid #888282";
        HypoChoice.style.color = "#888282";
        HypoChoice.style.background = "#FFFFFF";
        Selected.fill = "Duck Down";
    }

    let HypoChoice = document.getElementById("HypoChoice");
    HypoChoice.onclick = function () {
        FillChoice.innerHTML = "Hypoallergenic";
        HypoChoice.style.background = "#888282";
        HypoChoice.style.color = "#FFFFFF";
        MemoryFoamChoice.style.border = "1px solid #888282";
        MemoryFoamChoice.style.color = "#888282";
        MemoryFoamChoice.style.background = "#FFFFFF";
        DuckDownChoice.style.border = "1px solid #888282";
        DuckDownChoice.style.color = "#888282";
        DuckDownChoice.style.background = "#FFFFFF";
        Selected.fill = "Hypoallergenic";
    }

    //Change Quantity
    let AddOne = document.getElementById("AddOne");

    let DecreaseOne = document.getElementById("DecreaseOne");
    DecreaseOne.onmousedown = function() {
        DecreaseOne.style.background = "#000000";
    }
    DecreaseOne.onmouseup = function() {
        DecreaseOne.style.background = "#888282";
    }
    DecreaseOne.onclick = function () {
        var Decrease = parseInt(AddOne.innerText, 10) - 1;
        if (Decrease >= 0) {
            AddOne.innerText = Decrease;
            Selected.quantity = Decrease;
        }

    }

    let IncreaseOne = document.getElementById("IncreaseOne");
    console.log(IncreaseOne);
    console.log(AddOne.value)
    IncreaseOne.onmousedown = function() {
        IncreaseOne.style.background = "#000000";
    }
    IncreaseOne.onmouseup = function() {
        IncreaseOne.style.background = "#888282";
    }
    IncreaseOne.onclick = function() {
        AddOne.innerText = parseInt(AddOne.innerText, 10) + 1;
        Selected.quantity = parseInt(AddOne.innerText, 10) + 1;
    }


    //Add item to Cart 
    let CartHasItem = document.getElementById("CartHasItem");
    let DropDownShoppingCart = document.getElementById("DropDownShoppingCart");
    let AddToCartButton = document.getElementById("AddToCartButton");

    AddToCartButton.onclick = function() {
        CartHasItem.style.display = "Block";
        DropDownShoppingCart.style.display = "Block";
        var CurrentCart = localStorage.getItem("Selected");
        if (CurrentCart) {
            var LastSelection = JSON.parse(CurrentCart);
            LastSelection.CartArray.push(Selected);
            localStorage.setItem("Selected", JSON.stringify(LastSelection));
        } else {
            let Cart = {
                CartArray: [Selected]
            }
            localStorage.setItem("Selected", JSON.stringify(Cart));
        }
    }

    //Toggle Dropdown Cart 
    let ProductPageTotal = document.getElementById("ProductPageTotal");
    let ShoppingBagIconClick = document.getElementById("ShoppingBagIconClick");

    ShoppingBagIconClick.onclick = function() {
        if (ShoppingBagIconClick.style.display === 'Block') {
            console.log('disappear');
            ShoppingBagIconClick.style.display = "none";
        } else{
            console.log('show');
            ShoppingBagIconClick.style.display = "Block";
        }
    }

    ProductPageTotal.onclick = function() {
        DropDownShoppingCart.style.display = "none";
    }
}
