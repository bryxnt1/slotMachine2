// making a prompt to see if you are old enough to play this game.
//making a alert to greet new players to my slot machine website.

const Law =  window.prompt("Write accept if you are 18 or older to Play this slot machine.");

alert("welcome to bryants pixel themed slot machine!")

// the let statements are my value in which the functions pull/call from.
let Fruits =  ['url("./symbols/banana.png")', 'url("./symbols/heart.png")', 'url("./symbols/grapez.png")', 'url("./symbols/peach.png")'];
let FruitsImage = ['url("./symbols/banana.png")', 'url("./symbols/heart.png")', 'url("./symbols/grapez.png")', 'url("./symbols/peach.png")'];
let test = [];
let boxes = document.querySelectorAll('.box');
let btn = document.getElementById("btn");
let dw = document.getElementById("displayWinner");
let element = ["Congrats You won  10 Dollars!", "Congrats you won the top Prize 150 Dollars!","Congrats you won 25 Dollars!","Congrats you have won 100 Dollars!"]
let rst = document.getElementById("rst");
let WinSound = new Audio('./symbols/WinSound.mp3')

const ShuffleFruits = () => {
    for (let i = Fruits.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = Fruits[i];
    Fruits[i] = Fruits[j];
    Fruits[j] = temp;
    }
    return Fruits;
    };
let displayWinner= (var1,var2,var3) => {    
    if(var1 === var2 && var2 === var3) {
        if (var1 == FruitsImage[0]){
             dw.innerText = element[0]
             WinSound.play()};
        if (var2 == FruitsImage[1])
            {dw.innerText = element[1];
                WinSound.play()}
        if ( var3 == FruitsImage[2])
            {dw.innerText = element[2]
                WinSound.play()}
        if  (var3 == FruitsImage[3])
        {dw.innerText = element[3]
            WinSound.play()}
    }
        else {
        dw.innerHTML = ""
        btn.innerHTML = "Play Again"
    }
}
//Randomize fruits
//Get three random fruits
//inner html
//check for winner(all equal)
btn.addEventListener("click", function() {
    ShuffleFruits();

    let var1 = ShuffleFruits(Fruits)[0];
    let var2 = ShuffleFruits(Fruits)[0];
    let var3 = ShuffleFruits(Fruits)[0];

    boxes[0].style.backgroundImage = var1;
    boxes[1].style.backgroundImage = var2;
    boxes[2].style.backgroundImage = var3; 

    console.log(var1, var2, var3)
    displayWinner(var1,var2,var3);

});

rst.addEventListener("click", function() {
let var1 = "" + ""
let var2 = ""
let var3 = ""
boxes[0].style.backgroundImage = var1;
    boxes[1].style.backgroundImage = var2;
    boxes[2].style.backgroundImage = var3; 

    console.log(var1, var2, var3)
    displayWinner(var1,var2,var3);
});








