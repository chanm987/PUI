//Change selection color on click
let BeigeChip = document.getElementById("BeigeChip");
BeigeChip.onclick = function() {
    BeigeChip.style.border = "2px solid #000000";
    BlueChip.style.border = "none";
    GrayChip.style.border = "none";
    YellowChip.style.border = "none";
    ColorName.innerHTML = "Morning Haze";
}

let BlueChip = document.getElementById("BlueChip");
BlueChip.onclick = function() {
    BlueChip.style.border = "2px solid #000000";
    BeigeChip.style.border = "none";
    YellowChip.style.border = "none";
    GrayChip.style.border = "none";
    ColorName.innerHTML = "Cozy Denim";
}

let GrayChip = document.getElementById("GrayChip");
GrayChip.onclick = function() {
    GrayChip.style.border = "2px solid #000000";
    BeigeChip.style.border = "none";
    BlueChip.style.border = "none";
    YellowChip.style.border = "none";
    ColorName.innerHTML = "Rainy Day";
}

let YellowChip = document.getElementById("YellowChip");
YellowChip.onclick = function() {
    YellowChip.style.border = "2px solid #000000";
    BeigeChip.style.border = "none";
    BlueChip.style.border = "none";
    GrayChip.style.border = "none";
    ColorName.innerHTML = "After School Special";
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
}

let DuckDownChoice = document.getElementById("DuckDownChoice");
DuckDownChoice.onclick = function() {
    FillChoice.innerHTML = "Duck Down";
    DuckDownChoice.style.background = "#888282";
    DuckDownChoice.style.color = "#FFFFFF";
    MemoryFoamChoice.style.border = "1px solid #888282";
    MemoryFoamChoice.style.color = "#888282";
    MemoryFoamChoice.style.background = "#FFFFFF";
    HypoChoice.style.border = "1px solid #888282";
    HypoChoice.style.color = "#888282";
    HypoChoice.style.background = "#FFFFFF";
}

let HypoChoice = document.getElementById("HypoChoice");
HypoChoice.onclick = function() {
    FillChoice.innerHTML = "Hypoallergenic";
    HypoChoice.style.background = "#888282";
    HypoChoice.style.color = "#FFFFFF";
    MemoryFoamChoice.style.border = "1px solid #888282";
    MemoryFoamChoice.style.color = "#888282";
    MemoryFoamChoice.style.background = "#FFFFFF";
    DuckDownChoice.style.border = "1px solid #888282";
    DuckDownChoice.style.color = "#888282";
    DuckDownChoice.style.background = "#FFFFFF";
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

let IncreaseOne = document.getElementById("IncreaseOne");
IncreaseOne.onmousedown = function() {
    IncreaseOne.style.background = "#000000";
}
IncreaseOne.onmouseup = function() {
    IncreaseOne.style.background = "#888282";
}

//Add item to Cart 
