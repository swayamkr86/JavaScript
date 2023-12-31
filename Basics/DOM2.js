let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.fontSize = "20px";
div.innerText="Hello";