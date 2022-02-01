

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn"); // selects button
const color = document.querySelector(".color"); // selects the color code


button.addEventListener("click", changeColor);

function changeColor(event){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];  // selects the background
    color.textContent = colors[randomNumber];  // selects the color text
}

function getRandomNumber(){
    // Get random number between 0 - 3, as we have 4 colors in the array
    return Math.floor(Math.random() * 4);

}