var gradientValue = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");

function gradientChanger() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    gradientValue.textContent = gradient.style.background;
}


color1.addEventListener("input", gradientChanger);
color2.addEventListener("input", gradientChanger);


const array = [1, 2, 4, 6];
const newArray = array.forEach((num => {
    num * 2;
}));

console.log(newArray);

const mapArray = array.map((num) => {
    return num * 3; // 'map' always returns something. It has to return something.
});
console.log(mapArray);


const filterArray = array.filter((a) => {
    return a >= 2; // 'filter' always returns something. It has to return something.
});
console.log(filterArray);


const reduceArray = array.reduce((ac, num) => {
    return ac + num;
}, 5); // 5 is the value for 'ac'
console.log(reduceArray);

// To try a code and throw catch an error (if any. Else the try{} scope will run without error) ---
try {
    bob + 5;
} catch (error) {
    console.log('An error encountered! ' + error);
}


