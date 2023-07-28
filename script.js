let random1 = Math.floor(Math.random()*6)+1;
let randomImgSrc1 = "dice"+random1+".png" 
let img1 = document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1);


let random2 = Math.floor(Math.random()*6)+1;
let randomImgSrc2 = "dice"+random2+".png" 
let img2 = document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

// Game Decision
if(random1 > random2){
    document.querySelector('h1').innerHTML="🥳 Player 1 Won"
    document.querySelector('h1').style.fontSize = '4rem'
}else if(random2 > random1){
    document.querySelector('h1').innerHTML="🥳 Player 2 Won"
    document.querySelector('h1').style.fontSize = '4rem'
}else if(random1 === random2){
    document.querySelector('h1').innerHTML="😒 Game Drawn"
    document.querySelector('h1').style.fontSize = '4rem'
} 