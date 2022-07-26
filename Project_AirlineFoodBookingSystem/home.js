const chickenBtn = document.getElementById("meal-chicken-btn");
const fishBtn = document.getElementById("meal-fish-btn");

let orderMessage = document.getElementById("order-message");
let checkForStocks = document.getElementById("check-for-stocks");
let validityMessage = document.getElementById("validity-message")

const menu = {
    Food : ["Fish", "Chicken", "Beef"],
    Quantity : [30, 10, 12]
}

chickenBtn.addEventListener("click", function() {
    setTimeout( () => {
        checkForStocks.innerHTML = `Checking for stocks...`
    }, 0000);

    if (menu.Quantity[1] === 0) {
        
        setTimeout( () => {
            validityMessage.innerHTML = `Sorry we don't have stocks. Have a nice day`
        }, 2000);

    } else {
        setTimeout( () => {
            orderMessage.innerHTML += `You ordered ${menu.Food[1]}`;
            
            setTimeout( () => {
                validityMessage.innerHTML += `Your order, ${menu.Food[1]}, has been processed.`
            }, 2000);

        }, 2000);

        
    }

    
});

fishBtn.addEventListener("click", function() {
    console.log("lmao");
    orderMessage.innerHTML += `You ordered ${menu.Food[0]}`
});