const crossIcon = "./img/cross.png"; 
const circleIcon = "./img/circle.png";
var imgSrc = crossIcon;
const gridElements = document.querySelectorAll('.grid-elements');

gridElements.forEach(gridElement=>{
    gridElement.onclick = ()=>{
        const child = gridElement.children;
        if(child.length == 0){
            gridElement.innerHTML = `<img src="${imgSrc}">`;
            setImgSrc();
        }
    }
})

function setImgSrc() {
    if(imgSrc == crossIcon){
        imgSrc = circleIcon;
    }
    else{
        imgSrc = crossIcon;
    }
}