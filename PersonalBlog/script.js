//  ===========
let aboutProfilePic = document.getElementById("profilepic");
aboutProfilePic.addEventListener("click", function() {
  
  if (aboutProfilePic.src = "images/decentmate.jpg") {
    document.getElementById("profilepic").src="images/mate.jpg";
  } else {
    document.getElementById("profilepic").src="images/decentmate.jpg";
  }
  
});

// toggle between hiding/showing: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
const ShowLangBtn = document.getElementById("show-languages");
const ShowToolsBtn = document.getElementById('show-tools');
const ShowFrameworksBtn = document.getElementById('show-frameworks');
const languages_panel = document.getElementById('languages-panel');
const tools_panel = document.getElementById('tools-panel');
const frameworks_panel = document.getElementById('frameworks-panel');

let arrow_toggle1 = document.querySelector('.toggle1');
let arrow_toggle2 = document.querySelector('.toggle2');
let arrow_toggle3 = document.querySelector('.toggle3');


ShowLangBtn.addEventListener("click", function() {
  if (languages_panel.style.display === "none") {
    languages_panel.style.display = "block";
    arrow_toggle1.style.transform = 'rotate(0deg)';
    // arrow_toggle.forEach(el => el.style.transform = 'rotate(0deg)');
  } else {
    languages_panel.style.display = "none";
    arrow_toggle1.style.transform = 'rotate(180deg)';
    // arrow_toggle.forEach(el => el.style.transform = 'rotate(180deg)');
    // https://stackoverflow.com/questions/60917073/how-can-i-select-the-all-classes-in-javascript-with-same-classname
  }
});

ShowToolsBtn.addEventListener("click", function() {
  if (tools_panel.style.display === "none") {
    tools_panel.style.display = "block";
    arrow_toggle2.style.transform = 'rotate(0deg)';
  } else {
    tools_panel.style.display = "none";
    arrow_toggle2.style.transform = 'rotate(180deg)';
  }
});

ShowFrameworksBtn.addEventListener("click", function() {
  if (frameworks_panel.style.display === "none") {
    frameworks_panel.style.display = "block";
    arrow_toggle3.style.transform = 'rotate(0deg)';
  } else {
    frameworks_panel.style.display = "none";
    arrow_toggle3.style.transform = 'rotate(180deg)';
  }
});