const crossIcon = "./img/cross.png"; 
const circleIcon = "./img/circle.png";
var imgSrc = crossIcon;
var imgAlt = "Cross";
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

    var winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winCombinations.forEach(combination => {
        var C1 = gridElements[combination[0]].children[0];
        var C2 = gridElements[combination[1]].children[0];
        var C3 = gridElements[combination[2]].children[0];
        if((C1.alt === C2.alt) && (C1.alt === C3.alt)){
            setColor(C1, C2, C3, "lightblue");
        }
    });
}

function setColor(C1, C2, C3, color){
    C1.parentElement.style.backgroundColor = color;
    C2.parentElement.style.backgroundColor = color;
    C3.parentElement.style.backgroundColor = color;
}