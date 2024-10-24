const crossIcon = "./img/cross.png"; 
const circleIcon = "./img/circle.png";
var imgSrc = crossIcon;
var imgAlt = "Cross";
var flag = 1;
const gridElements = document.querySelectorAll('.grid-elements');
const result = document.querySelector('.result');
const reset = document.getElementById('reset');

gridElements.forEach(gridElement=>{
    gridElement.onclick = ()=>{
        const child = gridElement.children;
        if((child.length == 0)&&(flag == 1)){
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
        if(C1 && C2 && C3 && (C1.alt === C2.alt) && (C1.alt === C3.alt)){
            let color;
            if(C1.alt == "Cross"){
                color = "lightblue";
                result.innerHTML = `<img src="${crossIcon}"> Won`;
                flag = 0;
            }
            else{
                color = "#ff5f5f";
                result.innerHTML = `<img src="${circleIcon}"> Won`;
                flag = 0;
            }
            setColor(C1, C2, C3, color);
            return;
        }
    });
    let flagM = 1;
    gridElements.forEach(gridElement=>{
        if(gridElement.children.length != 1){
            flagM = 0;
        }
    })
    if((flagM == 1)&&(flag != 0)){
        result.innerHTML = `It's Tie`;
        flag = 0;    
    }
    setButton();
}

function setColor(C1, C2, C3, color){
    C1.parentElement.style.backgroundColor = color;
    C2.parentElement.style.backgroundColor = color;
    C3.parentElement.style.backgroundColor = color;
}

reset.onclick = ()=>{
    if(flag == 0){
        gridElements.forEach(gridElement =>{
            gridElement.innerHTML = "";
            gridElement.style.backgroundColor = "transparent";
            result.innerHTML = "";
        })
        flag = 1;
    }
    setButton();
}

function setButton() {
    if(flag == 1){
        reset.innerHTML = "Reset";
    }
    else {
        reset.innerHTML = "Replay";
    }
}