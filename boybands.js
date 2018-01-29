console.log("JS TEST");

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


let newBand = "";
for (i = 0; i < bands.length; i++) {

  let currentBand = `${bands[i]} | `;
  console.log(currentBand);
  document.getElementById("boybands").innerHTML += currentBand;
  

  let currentVegetables = `${vegetables[i]} | `
  console.log(currentVegetables);
  document.getElementById("vegetables").innerHTML += currentVegetables;
}