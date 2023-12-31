let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";  //dark

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("white");
    }
    else{
        currMode = "light";
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("white");
        body.classList.remove("dark");
    }

    console.log(currMode);
});