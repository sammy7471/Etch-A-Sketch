// javascript

const container = document.querySelector("#container");

// A function to create a Grid
function createGrid(num) {  
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("box");
        container.appendChild(square);
        // Set an addEventListener for a hover effect so the grid changes color when the mouse is moved over them.
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = generateRandomColor();
        });
    }
}
createGrid(16);

//An addEventListener to a button with a createGrid callback which generates a prompt for a userinput,
//and creates a Grid acoording to the User's input.
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const input = parseInt(prompt("New Grid Input"), 10);
    document.getElementById("container").innerText = "";
    createGrid(input);
    // Limits input from 0 to 100
    if (input < 0 || input > 100) {
        alert("Value should be between 0 - 100");
        document.getElementById("container").innerText = "";
        return;
    }
});

//Function that generates a random color
function generateRandomColor () {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}