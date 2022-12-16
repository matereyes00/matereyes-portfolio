let button = document.getElementById("changing-button");
let changedElement = document.getElementById("changed-element");

function changeElement() {
    if (changedElement.textContent === "Now you don't") {
      changedElement.textContent = "Now you see me!";
    } else {
        changedElement.textContent = "Now you don't";
    }
  }

// == Plays audio ==
// let song = document.getElementById("song");
// song.play();

/*========== POLL =============== */
let chickenCount = document.getElementById("chicken-number-display");
let fishCount = document.getElementById("fish-number-display");

let count_chckens = 0;
let count_fish = 0;

function addChicken() {
  count_chckens += 1
  chickenCount.textContent = count_chckens;
}

function addFish() {
  count_fish += 1
  fishCount.textContent = count_fish;
}

function removeChicken() {
  count_chckens -= 1;
  chickenCount.textContent = count_chckens;
}

function removeFish() {
  count_fish -= 1;
  fishCount.textContent = count_fish;
}

//  ===========
let aboutProfilePic = document.getElementsById("profilepic");
function changePic() {
  document.getElementById("profilepic").src="images/mate.jpg";
}