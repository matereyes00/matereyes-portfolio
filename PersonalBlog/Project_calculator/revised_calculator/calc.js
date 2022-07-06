const
    buttons = document.getElementsByClassName("calc_button"),
    screen_content = document.getElementById('screen_content');

function clear_text() {
    screen_content.textContent = '';
}

function backspace() {
    screen_content.textContent -= screen_content.textContent;
}


// https://stackoverflow.com/questions/63199551/how-to-get-the-values-of-buttons-with-eventlistener
Array.from(buttons).forEach(button =>
    button.addEventListener("click", showNumber));

function showNumber(event) { // Listener can access its triggering event
    const button = event.target; // event's `target` property is useful
    screen_content.innerHTML += button.value;
}

