/* Wildlife Fish Mouse Down */
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


/* Earth Stat show on click (one by one) */
let earthStat1 = document.getElementById("earthText1");
let earthStat2 = document.getElementById("earthText2");
let earthStat3 = document.getElementById("earthText3");
let earthStat4 = document.getElementById("earthText4");
let earthImage1 = document.getElementById("earth1");
let earthImage2 = document.getElementById("earth2");
let earthImage3 = document.getElementById("earth3");
let earthImage4 = document.getElementById("earth4");

earthImage1.onmousedown = function () {
    earthImage1.style.fill = "#759370";
    earthStat1.style.display = "Block";
}

earthImage1.onmouseup = function () {
    earthImage1.style.fill = "white";
    earthStat1.style.display = "none";
}

earthImage2.onmousedown = function () {
    earthImage2.style.fill = "#759370";
    earthStat2.style.display = "Block";
}

earthImage2.onmouseup = function () {
    earthImage2.style.fill = "white";
    earthStat2.style.display = "none";
}

earthImage3.onmousedown = function () {
    earthImage3.style.fill = "#759370";
    earthStat3.style.display = "Block";
}

earthImage3.onmouseup = function () {
    earthImage3.style.fill = "white";
    earthStat3.style.display = "none";
}

earthImage4.onmousedown = function () {
    earthImage4.style.fill = "#759370";
    earthStat4.style.display = "Block";
}

earthImage4.onmouseup = function () {
    earthImage4.style.fill = "white";
    earthStat4.style.display = "none";
}

/* Earth Stat show on click (button) */
let earthStatButton = document.getElementById("viewAllStats");

earthStatButton.onmousedown = function () {
    earthImage1.style.fill = "#758370";
    earthImage2.style.fill = "#758370";
    earthImage3.style.fill = "#758370";
    earthImage4.style.fill = "#758370";
    earthStat1.style.display = "Block";
    earthStat2.style.display = "Block";
    earthStat3.style.display = "Block";
    earthStat4.style.display = "Block";
    earthStatButton.style.backgroundColor = "#758370";
    earthStatButton.style.color = "white";
}

earthStatButton.onmouseup = function () {
    earthImage1.style.fill = "white";
    earthImage2.style.fill = "white";
    earthImage3.style.fill = "white";
    earthImage4.style.fill = "white";
    earthStat1.style.display = "none";
    earthStat2.style.display = "none";
    earthStat3.style.display = "none";
    earthStat4.style.display = "none";
    earthStatButton.style.backgroundColor = "white";
    earthStatButton.style.color = "black";
}