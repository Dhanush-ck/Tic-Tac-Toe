const crossIcon = "./img/cross.png"; 
const circleIcon = "./img/circle.png";
var imgSrc = crossIcon;
var imgAlt = "Cross"
const gridElements = document.querySelectorAll('.grid-elements');

gridElements.forEach(gridElement=>{
    gridElement.onclick = ()=>{
        const child = gridElement.children;
        if(child.length == 0){
            gridElement.innerHTML = `<img src="${imgSrc}" alt=${imgAlt}>`;
            setImgSrc();
            checkWin();
        }
    }
})

function setImgSrc() {
    if(imgSrc == crossIcon){
        imgSrc = circleIcon;
        imgAlt = "Circle";
    }
    else{
        imgSrc = crossIcon;
        imgAlt = "Cross";
    }
}

function checkWin(){
    var C1 = gridElements[0].children[0];
    var C2 = gridElements[1].children[0];
    var C3 = gridElements[2].children[0];
    if((C1.alt == C2.alt)&&(C1.alt == C3.alt)){
        setColor(C1, C2, C3, "lightblue");
    }
    else{
        C2 = gridElements[3].children[0];
        C3 = gridElements[6].children[0];
        if((C1.alt == C2.alt)&&(C1.alt == C3.alt)){
            setColor(C1, C2, C3, "lightblue");
        }
    }
}

function setColor(C1, C2, C3, color){
    C1.parentElement.style.backgroundColor = color;
    C2.parentElement.style.backgroundColor = color;
    C3.parentElement.style.backgroundColor = color;
}