let changeColor=document.querySelector("#changeColor");
let changeShape=document.querySelector("#changeShape");
const shapebg = document.querySelector('.shapes');
const shapeIcons = document.querySelector('.shapeIcons');
 


changeColor.addEventListener('click',function(){
    shapebg.style.backgroundColor=changingColor();
})

function changingColor(){
    let chars="0123456789abcdef";
    let hexColorLength=6;
    let color="#";
    for(let i=0;i<hexColorLength;i++){
        let randomIndex=Math.floor(Math.random()*16);
        color=color+chars[randomIndex];
    }
    return color;
}

changeShape.addEventListener('click',function(){
    shapeIcons.id = changingShape();

})

function changingShape(){
    let shapeNames = ['square','round','diamond','triangle','arrow','frame','star','cross'];
    let randomIdx = Math.floor(Math.random()* shapeNames.length);
    let resultShape= shapeNames[randomIdx];
    return resultShape;
}
