

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn"); // selects button
const color = document.querySelector(".color"); // selects the color code

button.addEventListener("click", changeColor);

function changeColor(event){
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;  // selects the background
    color.textContent = hexColor;  // selects the color text

}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}



