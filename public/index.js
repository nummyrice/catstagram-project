let catImage;
let counter = 0;


window.onload = async() => {
    //interacts with API and gets random cat image
    const catUrl = await fetch("https://api.thecatapi.com/v1/images/search", {"method": "GET", "header": {"x-api-key": "cc6decfa-0715-4d20-8982-75fc3d73f806"}})
    .then(res => res.json())
    .then(ans => {
        //creates image element using the retrieved image url
        return ans[0].url;
    })
    .catch(e => console.log(e))

catImage = document.createElement("img");
catImage.setAttribute("src", catUrl);

 let box = document.createElement("div");
  let title = document.createElement("h1");
    title.innerText = "KittyGraham";
    title.setAttribute("class", "title");
    box.appendChild(title);

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

        const newCatbuttonDiv = document.createElement("div");
        newCatbuttonDiv.setAttribute("id", "newCat-button");
        const newCatButton = document.createElement("button");
        newCatButton.innerText = "Next Kitty";
        newCatbuttonDiv.appendChild(newCatButton);
        box.appendChild(newCatbuttonDiv);

        //setting up the form for submitting comments
        let form = document.createElement("form");
        form.setAttribute("id", "myForm");
        const commentSubmitDiv = document.createElement("div");
        form.appendChild(commentSubmitDiv)
        let labelComment = document.createElement("label")
        let inputComment = document.createElement("input");
        inputComment.setAttribute("id", "Comment")
        inputComment.setAttribute("type", "text");
        labelComment.setAttribute("for", "Comment")
        inputComment.placeholder ="Add a comment"




        labelComment.innerText = "Comment:"

        commentSubmitDiv.appendChild(labelComment);
        commentSubmitDiv.appendChild(inputComment);
        let submitForm = document.createElement("button");
        submitForm.setAttribute("id", "commentSubmit");
        submitForm.innerText = "Submit"
        commentSubmitDiv.appendChild(submitForm)

        // initiate form object
        // const kittyComments = new FormData

        box.appendChild(form)

        let commentDiv = document.createElement("div");
        commentDiv.setAttribute("id", "commentDiv")
        let unOrderedList = document.createElement("ul");
        unOrderedList.setAttribute("id", "unordered")
        commentDiv.appendChild(unOrderedList)
        box.appendChild(commentDiv)

        //listeners
        newCatButton.addEventListener("click", async () => {
            counter = 0;
            popularityCounterDiv.innerText = `Popularity Score: ${counter}`;
            let newCat = await fetch("https://api.thecatapi.com/v1/images/search")
            const jsonRes = await newCat.json();
            catImage.setAttribute("src", jsonRes[0].url);
            document.querySelector("#unordered").innerText = ""
        } );

        upButton.addEventListener("click", () => {
            counter++;
            popularityCounterDiv.innerText = `Popularity Score: ${counter}`;
        })

        downButton.addEventListener("click", () => {
            counter--;
            popularityCounterDiv.innerText = `Popularity Score: ${counter}`;
        })

        function createComments(e){
            e.preventDefault()
            const liList = document.createElement("li");
            liList.innerText = document.querySelector("#Comment").value
    document.querySelector("#unordered").appendChild(liList) 
        //    document.querySelector("#Comment").value = ""

 console.log(window.localStorage.getItem("comments"));
 if (!window.localStorage.getItem('comments')) {
    
                window.localStorage.setItem("comments", [])
           }
          window.localStorage
                  .getItem("comments")
                  .push(document.querySelector("#Comment").value);
        }

        submitForm.addEventListener("click", createComments)

    function restoreComments(){
        const setComments = window.localStorage.getItem("comments");
        //if there are comments in local storage
        if(setComments){
            //restore them (show them)
            for (let i = 0; i < setComments.length; i++) {
              const liList = document.createElement("li");
             liList.innerText = setComments[i];
             document.querySelector("#unordered").appendChild(liList);
            }
          
        }
    }
    restoreComments();
    //   function restoreImg(){

    //   }
}


