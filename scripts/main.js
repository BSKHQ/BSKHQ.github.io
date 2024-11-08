const img = document.querySelector("img");

img.onclick = () => {
    const src = img.getAttribute("src");
    if (src === "images/firefox-icon.png") {
        img.setAttribute("src", "images/firefox-icon2.png");
    } else {
        img.setAttribute("src", "images/firefox-icon.png");
    }
}

let button = document.querySelector("button");
let heading = document.querySelector("h1");

button.onclick = () => {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const userName = localStorage.getItem("name");
    heading.textContent = `Mozilla is cool, ${userName}`;
}

function setUserName() {
    const userName = prompt("Please enter your name");
    if (userName === null || !userName.trim()) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        heading.textContent = `Mozilla is cool, ${userName}`;
    }

}



