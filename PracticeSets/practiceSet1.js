let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);
h2.innerText = h2.innerText + " including DOM as well.";

let divs = document.querySelectorAll(".box");
console.log(divs);

// divs[0].innerText = "new unique  value 1";
// divs[1].innerText = "new unique  value 2";
// divs[2].innerText = "new unique  value 3";

let idx = 1;
for(div of divs){
    div.innerText = `New unique value ${idx}`;
    idx++;
}