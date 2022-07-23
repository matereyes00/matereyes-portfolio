const chickenBtn = document.getElementById("meal-chicken-btn");
const fishBtn = document.getElementById("meal-fish-btn");

let orderMessage = document.getElementById("order-message");

const menu = {
    Food : ["Fish", "Chicken", "Beef"],
    Quantity : [30, 2, 12]
}

chickenBtn.addEventListener("click", function() {
    console.log("omg");
    orderMessage.innerHTML += `You ordered ${menu.Food[1]}`
});

fishBtn.addEventListener("click", function() {
    console.log("lmao");
    orderMessage.innerHTML += `You ordered ${menu.Food[0]}`
});