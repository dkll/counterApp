const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const intcreaseButton = document.getElementById("increaseButton");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseButton.onclick = ()=>{
    if (count > 0) {
        count--;
    }
    countLabel.textContent = count;
}

resetButton.onclick = ()=>{
    count = 0;
    countLabel.textContent = count;
}

intcreaseButton.onclick = ()=>{
    count++;
    countLabel.textContent = count;
}
