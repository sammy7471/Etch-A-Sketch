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

const button = document.querySelector("#button");
button.addEventListener("click", () => {
    const input = parseInt(prompt("New Grid Input"), 10);
    document.getElementById("container").innerText = "";
    createGrid(input);
});

function generateRandomColor () {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}