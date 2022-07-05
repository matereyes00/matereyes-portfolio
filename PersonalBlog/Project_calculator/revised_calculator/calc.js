let calculator_button = document.getElementsByClassName("calc-button");

function change_text(){
    let screen_content = document.getElementById("screen_content");
    screen_content.textContent += "1";
}

function clear_text() {
    let screen_content = document.getElementById("screen_content");
    screen_content.textContent = "0";
}