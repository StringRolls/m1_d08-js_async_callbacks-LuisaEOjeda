console.log("JS Loaded");

/*
function sendMessageToPast(message) {
  document.getElementById("future").textContent = message;
}

setTimeout(
() => sendMessageToPast("You should all drink chupitos!!!"), 5 * 1000)

setTimeout(
() => sendMessageToPast("You should all drink beers!!!"), 2 * 1000)

setTimeout(
() => sendMessageToPast("You should all drink coffee!!!"), 1 * 1000)


let dropdownSection = document.getElementById("dropdown-section");

let toggleButton = document.getElementById("hide-div");

dropdownSection.classList.add("open")

toggleButton.addEventListener("click", handleHideShow)

function handleHideShow() {
    if (this.innerText === "Hide") {
      this.innerText = "Show";
    } else {
      this.innerText = "Hide";
    }
    setTimeout(() =>dropdownSection.classList.toggle("close"), 1*1000);
  }
  */

  function sendMessageToPast(message) {
    document.getElementById("future").textContent = message;
  }
  
  const textOneId = setInterval(() => {
    console.log(3);
    sendMessageToPast("I am the last one to be run, even if I come first");
  }, 3 * 1000);
  
  const textTwoId = setInterval(() => {
    console.log(1);
    sendMessageToPast("You should all drink cappuccino");
  }, 1 * 1000);
  
  const textThreeId = setInterval(() => {
    console.log(5);
    sendMessageToPast("I am not a fortune cookie");
  }, 2 * 1000);
  
  let dropdownSection = document.getElementById("dropdown-section");
  
  let toggleButton = document.getElementById("hide-div");
  
  dropdownSection.classList.add("open");
  
  toggleButton.addEventListener("click", handleHideShow);
  
  let addItem = document.getElementById("add-item-button");
  let itemsList = document.getElementById("item-list");
  addItem.addEventListener("click", () => {
    itemsList.innerHTML += `<li> One new item </li>`;
  });

  function handleHideShow() {
    if (this.innerText === "Hide") {
      this.innerText = "Show";
    } else {
      this.innerText = "Hide";
    }
    setTimeout(() => dropdownSection.classList.toggle("close"), 1 * 1000);
  }
  
  const stopTitle = document.getElementById("kill-future");
  stopTitle.onclick = () => {
    clearInterval(textOneId);
    clearInterval(textTwoId);
    clearInterval(textThreeId);
  };