const chickenBtn = document.getElementById("meal-chicken-btn");
const fishBtn = document.getElementById("meal-fish-btn");
const beefBtn = document.getElementById("meal-beef-btn");

let welcomeContainer = document.getElementById("welcome-container");
let user = document.getElementById("username");
const submitUserBtn = document.getElementById("submit-username");

// p tags
let orderMessage = document.getElementById("order-message");
let checkForStocks = document.getElementById("check-for-stocks");
let validityMessage = document.getElementById("validity-message");

let websiteServerActive = true;

// log-in feature
submitUserBtn.addEventListener("click", function() {
    welcomeContainer.innerHTML = `
    <h1> Welcome to Dodo Airlines Food Booking page, ${user.value}! </h1>
    <h2> What would you like to order today, ${user.value}? </h2>`;
});


const menu = {
    Food : ["Fish", "Chicken", "Beef"],
    Quantity : [30, 20, 12]
}
// create a promise
let orderPromise = (time, work) => {
    return new Promise((resolve, reject) => {
        if (websiteServerActive) {
            setTimeout( () => {
                resolve( work() );
            }, time)
        } else {
            reject(console.log("Sorry, website server is down."));
        }
    });
};


chickenBtn.addEventListener("click", function() {
    // NO STOCKS AVAILABLE
    if (menu.Quantity[1] === 0) {
        setTimeout( () => {
            checkForStocks.innerHTML = `No stocks available`
        }, 2000);
    } 
    // STOCKS AVAILABLE
    else { 
        // validation that user is logged in
        orderPromise(2000, () => console.log("User is logged in!"))
        
        .then( ()=> {
            return orderPromise(1000, () => {
                checkForStocks.innerHTML = `Checking for stocks...`
                setTimeout( () => {
                    checkForStocks.innerHTML += "We have stocks!"
                }, 1000);
            })
        })
        
        .then( () => {
            return orderPromise(2000, () => {
                orderMessage.innerHTML = `${user.value} ordered ${menu.Food[1]}.`
            })
        })

        .then( () => {
            return orderPromise(1000, () => {
                validityMessage.innerHTML = `${user.value}'s order of ${menu.Food[1]} has been confirmed.`
            })
        })
        
        .catch( () => console.log("Website not active. Cannot place order."))
        
        .finally( () => validityMessage.innerHTML += "Thank you for shopping with us")
    }

    
});

fishBtn.addEventListener("click", function() {
    orderMessage.innerHTML += `You ordered ${menu.Food[0]}`
});

beefBtn.addEventListener("click", function() {
    orderMessage.innerHTML += `You ordered ${menu.Food[2]}`
});