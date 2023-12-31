let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};


let btn2 = document.querySelector("#btn2");
// btn2.onclick = (evt) => {
//     console.log('button was clicked');
//     let a = 25;
//     a++;
//     console.log(a);
    
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

btn2.addEventListener("click", () => {
    console.log("button was clicked - handler1");
});


btn2.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});


const handler3 = () => {                                 //Removing this
    console.log("button was clicked - handler3");
};
btn2.addEventListener("click",handler3);


btn2.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});

btn2.removeEventListener("click",handler3);     //To remove