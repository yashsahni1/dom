let main=document.getElementById("mainContainer");
for(let i=0;i<30;i++){
    let singleDiv=document.createElement("div");
    singleDiv.classList.add("color-container");
    main.appendChild(singleDiv);
    let Rcolor=randomColor();
    singleDiv.innerText=Rcolor;
    singleDiv.style.backgroundColor=Rcolor;
    
}
// console.log(main);
function randomColor(){
    let chars="0123456789abcdef";
    let hexColorLength=6;
    let color="#";
    for(let i=0;i<hexColorLength;i++){
        let randomIndex=Math.floor(Math.random()*chars.length);
        color=color+chars[randomIndex];

    }
    return color;
}