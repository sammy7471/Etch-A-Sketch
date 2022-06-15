// javascript

const container = document.querySelector("#container");

function createGrid(num) {  
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; i++) {
        const square = document.createElement("div");
        square.classList.add("box");
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "blue";
        });
    }
}

createGrid(16);