let catImage;
window.onload = () => {
    fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET", "header": {"x-api-key": "cc6decfa-0715-4d20-8982-75fc3d73f806"}})
    .then(res => res.json())
    .then(ans => {
        catImage = document.createElement("img");
        catImage.setAttribute("src", ans[0].url);
        box.appendChild(catImage);
        catImage.className = "catImage";
        box.setAttribute("id", "mainBox")
        document.body.appendChild(box);
    })
    .catch(e => console.log(e))
    let box = document.createElement("div");

    let title = document.createElement("h1");
    title.innerText = "KittyGraham";
    title.setAttribute("class", "title");
    box.appendChild(title);

}
