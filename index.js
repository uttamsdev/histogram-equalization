const grayLevels = [0, 1, 2, 3, 4, 5, 6, 7];
const numberOfPixels = [2, 10, 3, 4, 3, 2, 1, 0];
const n = 25;
let pdf = [];
for (const x of numberOfPixels) {
  pdf.push(x / n);
}

let cdf = [];
pdf.reduce(function (a, b, i) {
  return (cdf[i] = a + b);
}, 0);

let newCdf = [];
for (c of cdf) {
  newCdf.push(c * (grayLevels.length - 1));
}
// console.log(newCdf);

let roundOff = [];
for (round of newCdf) {
  roundOff.push(Math.round(round));
}


const table = document.getElementById("table-body");

for (let i = 0; i < grayLevels.length; i++) {
  const tr = document.createElement("tr");
  // tr.classList = 'bg-danger';
  tr.innerHTML = `
    <td>${grayLevels[i]}</td>
    <td class="text-danger fw-bold">${numberOfPixels[i]}</td>
    <td>${pdf[i]}</td>
    <td>${cdf[i].toFixed(3)}</td>
    <td>${newCdf[i].toFixed(3)}</td>
    <td class="text-danger fw-bold">${roundOff[i]}</td>
    `;
  table.appendChild(tr);
}
const p = document.createElement("p");

const result = document.getElementById("result");
let sumOfNumberOfPixels = 0;
let sumOfPdf = 0;
for (const i of numberOfPixels) {
  sumOfNumberOfPixels += i;
}

for (const i of pdf) {
  sumOfPdf += i;
}
result.innerHTML = `
    <p class="text-center mt-5 text-danger fw-bold">Sum of pixels = ${sumOfNumberOfPixels}</p>
    <p class="text-center m-3 text-danger fw-bold">Sum of pdf = ${sumOfPdf}</p>
`;
// p.appendChild(result);
