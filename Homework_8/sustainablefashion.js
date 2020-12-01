jQuery(function() {
    gsap.registerPlugin(ScrollTrigger);
    /* Main Image color fill */
    let mainImageEmpty = document.getElementById("colorImageFill");
    let mainImageTL = new TimelineMax({paused:true, scrollTrigger:{trigger:"#colorImageFill"}});
    TweenMax.set(mainImageEmpty, {css:{opacity:0}});
    mainImageTL.to(mainImageEmpty, 7, {css:{opacity: 1}});
    /* Star flash */
    let flashingStars = document.getElementsByClassName("starClass");
    TweenMax.set(flashingStars, {css:{opacity:0}});
    gsap.to($(".starClass"), {css:{opacity:1}, stagger: {each: 0.3, from:"random"}, duration: 0.8});
    /* Dot flash */
    let flashingDot = document.getElementsByClassName("dotClass");
    TweenMax.set(flashingDot, {css:{opacity:0}});
    gsap.to($(".dotClass"), {css:{opacity:1}, stagger: {each: 0.3, from:"random"}, duration: 0.8});
    /* Tshirt Image color fill */
    let tShirtEmpty = document.getElementById("tShirtFill");
    let tShirtTL = new TimelineMax({paused: true, scrollTrigger:{trigger:"#tShirtFill", start: "50% bottom"}});
    TweenMax.set(tShirtEmpty, {css:{opacity: 0}});
    tShirtTL.to(tShirtEmpty, 7, {css:{opacity: 1}});
    /* Make washing machine spin */
    let washingMachineSpin = document.getElementById("machineSpin");
    let washingMachineTL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#washingMachine", start: "50% bottom"}});
    washingMachineTL.to(washingMachineSpin, {duration: 3, rotation:"+=360", transformOrigin:"50% 50%", ease: "Power1.easeInOut"});
    /* Cloud move */
    let cloud2 = document.getElementById("cloudToMove2");
    let cloud3 = document.getElementById("cloudToMove3");
    let cloud4 = document.getElementById("cloudToMove4");
    let cloud5 = document.getElementById("cloudToMove5");
    let cloud6 = document.getElementById("cloudToMove6");
    let cloud2TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#cloudToMove2", start: "50% bottom"}});
    let cloud3TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#cloudToMove3", start: "50% bottom"}});
    let cloud4TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#cloudToMove4", start: "50% bottom"}});
    let cloud5TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#cloudToMove5", start: "50% bottom"}});
    let cloud6TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#cloudToMove6", start: "50% bottom"}});
        /* set cloud position */
    gsap.set(cloud2, {x:"-=800", y:"+=20"});
    gsap.set(cloud4, {x:"-=400"});
    gsap.set(cloud3, {x:"+=800"});
    gsap.set(cloud5, {x:"+=600"});
    gsap.set(cloud6, {x:"+=1200", y:"+=40"});
        /* set movement of the clouds */
    cloud2TL.to(cloud2, 60, {css:{x:"+1200"}}, 0.2);
    cloud4TL.to(cloud4, 40, {css:{x:"+1200"}});
    cloud3TL.to(cloud3, 40, {css:{x:"-1400"}});
    cloud5TL.to(cloud5, 60, {css:{x:"-1500"}}, 0.2);
    cloud6TL.to(cloud6, 55, {css:{x:"-1500"}});
    /* Small Fish move */
    let fishMove1 = document.getElementById("fish1");
    let fishMove2 = document.getElementById("fish2");
    let fishMove3 = document.getElementById("fish3");
    let fish1TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#fish1", start: "50% bottom"}});
    let fish2TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#fish2", start: "50% bottom"}});
    let fish3TL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#fish3", start: "50% bottom"}});
        /* set fish position */
    gsap.set(fishMove1, {x:"+=1200"});
    gsap.set(fishMove2, {x:"-=120"});
    gsap.set(fishMove3, {x:"-=1200"});
        /* set fish movement */
    fish1TL.to(fishMove1, 40, {css:{x:"-400"}});
    fish2TL.to(fishMove2, 50, {css:{x:"+1400"}}, 0.3);
    fish3TL.to(fishMove3, 30, {css:{x:"+500"}});
    /* Bubble fade in out */
    let bubbleFade = document.getElementById("bubbles");
    let bubbleTL = new TimelineMax({paused: true, repeat: -1, scrollTrigger:{trigger: "#fishMain", start: "50% bottom", ease: "Power4.easeOut"}});
    TweenMax.set(bubbleFade, {css:{opacity:0}});
    bubbleTL.to(bubbleFade, 4, {css:{opacity: 1}});
    /* Wildlife Fish on click */
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
    earthImage1.onmouseover = function () {
        earthImage1.style.fill = "#759370";
        earthStat1.style.display = "Block";
    }
    earthImage1.onmouseout = function () {
        earthImage1.style.fill = "white";
        earthStat1.style.display = "none";
    }
    earthImage2.onmouseover = function () {
        earthImage2.style.fill = "#759370";
        earthStat2.style.display = "Block";
    }
    earthImage2.onmouseout = function () {
        earthImage2.style.fill = "white";
        earthStat2.style.display = "none";
    }
    earthImage3.onmouseover = function () {
        earthImage3.style.fill = "#759370";
        earthStat3.style.display = "Block";
    }
    earthImage3.onmouseout = function () {
        earthImage3.style.fill = "white";
        earthStat3.style.display = "none";
    }
    earthImage4.onmouseover = function () {
        earthImage4.style.fill = "#759370";
        earthStat4.style.display = "Block";
    }
    earthImage4.onmouseout = function () {
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
    /* Clothing Rack Solution Color Fill */
    let clothingRackEmpty = document.getElementById("clothingSolutionFill");
    let clothingRackTL = new TimelineMax({paused: true, scrollTrigger:{trigger:"#clothingSolutionFill", start: "50% bottom"}});
    TweenMax.set(clothingRackEmpty, {opacity: 0});
    clothingRackTL.to(clothingRackEmpty, 7, {css:{opacity:1}});
})