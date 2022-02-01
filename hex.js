const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn"); // selects button
const color = document.querySelector(".color"); // selects the color code

button.addEventListener("click", changeColor);

function changeColor(event){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[0];
    }
    document.body.style.backgroundColor = hexColor;  // selects the background
    color.textContent = hexColor;  // selects the color text

}

function getRandomNumber(){
    // Get random number between 0 - 3, as we have 4 colors in the array
    return Math.floor(Math.random() * 4);

}