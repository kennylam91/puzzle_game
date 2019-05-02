let objImg1 = document.getElementById("img1");
let objImg2 = document.getElementById("img2");
let objImg3 = document.getElementById("img3");
function imgswitch(objImg) {
    console.log(objImg);
    let srcImg1 = "./1.png";
    let srcImg2 = "./2.png";
    let srcImg3 = "./3.png";

    if (objImg.alt == "img1") {
        objImg.src = srcImg2;
        objImg.alt = "img2";
    } else if (objImg.alt == "img2") {
        objImg.src = srcImg3;
        objImg.alt = "img3";
    } else if (objImg.alt == "img3") {
        objImg.src = srcImg1;
        objImg.alt = "img1";
    }
    imgMatch();
}

function imgMatch() {
    if ((objImg1.alt == objImg2.alt) && (objImg1.alt == objImg3.alt)) {
        document.getElementById("div_to").style.border = "solid 5px blue";

    } else {
        document.getElementById("div_to").style.border = "none";
    }
}




