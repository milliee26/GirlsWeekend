// This is where you'll place your javascript code

// open your Developer Tools (CTRL + Shift + j) to see this message :)
console.log("Hello World!");

const url = "http://www.girlsintech.co.uk/api/top10?category=likes"

fetch(url).then(response => response.json()).then(data => {
})

function getListItem(video) {
}

const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener("click", () => {
    text.classList.toggle("hidden");
});