window.onload = () => {

    // Change selection color on click
    let Selected = {
        color: "Morning Haze",
        fill: "Memory Foam",
        quantity: 1,
        price: 0
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
    DecreaseOne.onmousedown = function () {
        DecreaseOne.style.background = "#000000";
    }
    DecreaseOne.onmouseup = function () {
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
    IncreaseOne.onmousedown = function () {
        IncreaseOne.style.background = "#000000";
    }
    IncreaseOne.onmouseup = function () {
        IncreaseOne.style.background = "#888282";
    }
    IncreaseOne.onclick = function () {
        AddOne.innerText = parseInt(AddOne.innerText, 10) + 1;
        Selected.quantity = parseInt(AddOne.innerText, 10);
    }

    //Add item to Cart 
    let JuliaPillowImage = document.getElementById("JuliaPillowImage");
    let CartHasItem = document.getElementById("CartHasItem");
    let ShoppingCartDD = document.getElementById("ShoppingCartDD");
    let AddToCartButton = document.getElementById("AddToCartButton");
    let ItemImageInDD = document.getElementById("ItemImageInDD");
    let SubtotalDD = document.getElementById("SubtotalDD");
    let QuantityDD = document.getElementById("QuantityDD");
    let LineDD = document.getElementById("LineDD");
    let DDMButtons = document.getElementById("DDMButtons");
    let NothingCart = document.getElementById("NothingCart");
    let ItemsInDD = document.getElementById("ItemsInDD");
    let CartItemDescDD = document.getElementById("CartItemDescDD");


    AddToCartButton.onclick = function (event) {
        event.stopPropagation();
        ShoppingCartDD.style.display = "Block";
        CartHasItem.style.display = "Block";
        console.log(ItemsInDD);
        console.log(AddOne.innerText);
        //How many Items in Cart
        var NumItemInDD = document.getElementById("NumItemCart");
        NumItemInDD.innerHTML = Selected.quantity + " item(s) in your cart";
        //Julia Pillow Renders 
        var AddImageToDropDown = document.createElement("img");
        AddImageToDropDown.src = "fluffstuff/JuliaPillow.png";
        AddImageToDropDown.className = "JuliaPillowDD";
        ItemImageInDD.appendChild(AddImageToDropDown);
        //Adds Color to Dropdown
        var ColorSelectionDD = document.createElement("h6");
        ColorSelectionDD.innerHTML = "COLOR: " + Selected.color;
        CartItemDescDD.appendChild(ColorSelectionDD);
        //Quantity to Dropdown
        var QuantityDropDown = document.createElement("h6");
        QuantityDropDown.innerHTML = "QUANTITY: " + Selected.quantity;
        QuantityDD.appendChild(QuantityDropDown);
        //Add Fill to Dropdown 
        var FillSelectionDD = document.createElement("h6");
        FillSelectionDD.innerHTML = "FILL: " + Selected.fill;
        CartItemDescDD.appendChild(FillSelectionDD);
        //Remove Cart Item
        var RemoveItemDropDown = document.createElement("h6");
        RemoveItemDropDown.innerHTML = "REMOVE ITEM";
        ItemsInDD.appendChild(RemoveItemDropDown);
        //Subtotal line in Dropdown
        LineDD.style.borderBottom = "solid";
        //Subtotal in Dropdown
        var SubtotalDropDown = document.getElementById("PriceUpdate");
        // Get current subtotal
        //  if (subtotal) new price is current sub + newPrice
        // else subtotal = new
        //Price update 
        let newPrice = parseInt(AddOne.innerHTML) * 45;
        SubtotalDropDown.innerHTML = "SUBTOTAL: " + newPrice;
        SubtotalDD.appendChild(SubtotalDropDown);
        //Remove Nothing is in your cart
        NothingCart.style.display = "none";
        //Unhide Buttons fromm dropdown 
        DDMButtons.style.display = "block";
        //Adds Items to Local Storage
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

    //Toggle Dropdown Cart WONT SHOW DROPDOWN
    let ProductPageTotal = document.getElementById("ProductPageTotal");
    let ShoppingBagIconClick = document.getElementById("ShoppingBagIconClick");

    ShoppingBagIconClick.onclick = function () {
        if (ShoppingCartDD.style.display === "block") {
            console.log('disappear');
            ShoppingCartDD.style.display = "none";
        } else {
            console.log('show');
            ShoppingCartDD.style.display = "block";
        }
    }

    ProductPageTotal.onclick = function () {
        ShoppingCartDD.style.display = "none";
    }

    //Click through image of pillow 
    let JuliaPillowImage1 = document.getElementById("JuliaPillowImage1")
    let JuliaPillowImage2 = document.getElementById("JuliaPillowImage2")
    let JuliaPillowImage3 = document.getElementById("JuliaPillowImage3")

    JuliaPillowImage1.onclick = function () {
        JuliaPillowImage.src = "fluffstuff/JuliaPillow.png";
    }

    JuliaPillowImage2.onclick = function () {
        JuliaPillowImage.src = "fluffstuff/JuliaPillow2.png";
    }

    JuliaPillowImage3.onclick = function () {
        JuliaPillowImage.src = "fluffstuff/JuliaPillow3.png";
    }

    //Quantity 
    let QuantityCounter = document.getElementById("QuantityCounter");
    if (QuantityCounter === null) {
        QuantityCounter = Selected.quantity;
        console.log(QuantityCounter);
    } else {
        QuantityCounter = QuantityCounter + Selected.quantity;
        console.log(QuantityCounter);
    }

}

