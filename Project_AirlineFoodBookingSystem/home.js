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
let transactionArea = document.getElementById("transaction-area");

// checks if user is logged in
function checkValidity() {
    if (user.value === "") {
        welcomeContainer.innerHTML += `
            <p>Please input a valid username.</p>
        `;
    } else {
        chickenBtn.disabled = false; //button is enabled
        beefBtn.disabled = false; //button is enabled
        fishBtn.disabled = false; //button is enabled
    
        welcomeContainer.innerHTML = `
            <h1> Welcome to Dodo Airlines Food Booking page, ${user.value}! </h1>
        `; 
        renderTransactionArea();  
    }
}

function renderTransactionArea() {
    transactionArea.innerHTML = `
        <h2> What would you like to order today, ${user.value}? </h2>
        <h3> Transaction Area </h3>
    `;
}

// log-in feature
submitUserBtn.addEventListener("click", function() {
    checkValidity();
});

const menu = {
    Food : ["Fish", "Chicken", "Beef"],
    Quantity : [30, 20, 12]
}
// create a promise for customer to place an order
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
            transactionArea.innerHTML += `<p>No stocks available</p>`
        }, 2000);
    } 
    // STOCKS AVAILABLE
    else { 
        // validation that user is logged in
        orderPromise(2000, () => console.log("User is logged in!"))
        
        .then( ()=> {
            return orderPromise(1000, () => {
                transactionArea.innerHTML += `<p>Checking for stocks...</p>`
                setTimeout( () => {
                    transactionArea.innerHTML += "We have stocks!"
                }, 1000);
            })
        })
        
        .then( () => {
            return orderPromise(2000, () => {
                transactionArea.innerHTML += `<p>${user.value} ordered ${menu.Food[1]}.</p>`
            })
        })

        .then( () => {
            return orderPromise(1000, () => {
                transactionArea.innerHTML += `<p>${user.value}'s order of ${menu.Food[1]} has been confirmed.</p>`
            })
        })
        
        .catch( () => console.log("Website not active. Cannot place order."))
        
        .finally( () => transactionArea.innerHTML += "<p>Thank you for shopping with us!</p>")
    }

    
});

fishBtn.addEventListener("click", function() {
    transactionArea.innerHTML += `You ordered ${menu.Food[0]}`
});

beefBtn.addEventListener("click", function() {
    transactionArea.innerHTML += `You ordered ${menu.Food[2]}`
});