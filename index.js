
let random1=Math.floor(Math.random()*6)+1;
let path1="images/dice"+ random1 +".png";
document.querySelector(".img1").setAttribute("src",path1);

let random2=Math.floor(Math.random()*6)+1;
let path2="images/dice"+ random2 +".png";
document.querySelector(".img2").setAttribute("src",path2);



let heading=document.getElementById("heading");
if (random1 > random2) {
    heading.innerHTML="🚩 Play 1 Wins!";
} 
else if(random1 < random2) {
    heading.innerHTML="Play 2 Wins! 🚩";
}
else{
    heading.innerHTML="Draw";
}
