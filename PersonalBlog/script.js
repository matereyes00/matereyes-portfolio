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

let arrow_toggle = document.getElementsByClassName("arrow");

ShowLangBtn.addEventListener("click", function() {
  if (languages_panel.style.display === "none") {
    languages_panel.style.display = "block";
  } else {
    languages_panel.style.display = "none";
  }
});

ShowToolsBtn.addEventListener("click", function() {
  if (tools_panel.style.display === "none") {
    tools_panel.style.display = "block";
  } else {
    tools_panel.style.display = "none";
  }
});

ShowFrameworksBtn.addEventListener("click", function() {
  if (frameworks_panel.style.display === "none") {
    frameworks_panel.style.display = "block";
  } else {
    frameworks_panel.style.display = "none";
  }
});