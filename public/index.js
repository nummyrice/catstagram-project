let catImage;
let counter = 0;
window.onload = () => {
    //interacts with API and gets random cat image
    fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET", "header": {"x-api-key": "cc6decfa-0715-4d20-8982-75fc3d73f806"}})
    .then(res => res.json())
    .then(ans => {
        //creates image element using the retrieved image url
        catImage = document.createElement("img");
        catImage.setAttribute("src", ans[0].url);
        box.appendChild(catImage);
        catImage.className = "catImage";
        box.setAttribute("id", "mainBox")
        document.body.appendChild(box);
        //creates new div in the box div that the image is in for popularity score
        let popularityCounterDiv = document.createElement("div");
        popularityCounterDiv.setAttribute("class", "popularity");
        popularityCounterDiv.innerText = `Popularity Score: ${counter}`;
        box.appendChild(popularityCounterDiv);
        
        const buttonDiv = document.createElement("div")
        buttonDiv.setAttribute("id", "popularity-buttons")
        box.appendChild(buttonDiv)
        const downButton = document.createElement("button")
        downButton.innerText = "Downvote"
        const upButton = document.createElement("button")
        upButton.innerText = "Upvote"
        downButton.setAttribute("id", "down-button")
        upButton.setAttribute("id", "up-button")
        buttonDiv.appendChild(upButton)
        buttonDiv.appendChild(downButton)

    })
    .catch(e => console.log(e))
    let box = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = "KittyGraham";
    title.setAttribute("class", "title");
    box.appendChild(title);

    let popularityScore = 0;



}

// window.addEventListener("DOMContentLoaded", () => {

// })
