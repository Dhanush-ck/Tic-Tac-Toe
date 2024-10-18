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
    const C1 = gridElements[0].children[0];
    // console.log(C1.alt);
    const C2 = gridElements[1].children[0];
    // console.log(C2.alt);
    const C3 = gridElements[2].children[0];
    // console.log(C3.alt);
    if((C1.alt == C2.alt)&&(C1.alt == C3.alt)){
        C1.parentElement.style.backgroundColor = "lightblue";
        C2.parentElement.style.backgroundColor = "lightblue";
        C3.parentElement.style.backgroundColor = "lightblue";
    }
}