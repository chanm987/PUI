/* Wildlife Fish click */
let fishImage = document.getElementById("fishMain");
let fishInnerBody = document.getElementById("fishInside");
let fishStat = document.getElementById("groupText");

fishImage.onmousedown = function () {
    fishInnerBody.style.display = "Block";
    fishStat.style.display = "Block";
}

fishImage.onmouseup = function () {
    fishInnerBody.style.display = "none";
    fishStat.style.display = "none";
}

fishInnerBody.onmouseup = function () {
    fishInnerBody.style.display = "none";
    fishStat.style.display = "none";
}
