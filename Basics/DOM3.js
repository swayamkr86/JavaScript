let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);      //adds at the end of the node (inside)
// div.prepend(newBtn);  //adds at the start of the node (inside)
// div.before(newBtn);   //adds before the node (outside)
// div.after(newBtn);    //adds after the node (outside)

let para = document.querySelector("p");
para.remove();