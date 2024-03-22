let divImageContainer = document.getElementById("photoGallery");

// Create a delete button
let delBtn = document.createElement("button");
delBtn.innerText = "❌";
divImageContainer.appendChild(delBtn);

// Create a zoom in button
let zoomInBtn = document.createElement("button");
zoomInBtn.innerText = "➕";
let zoomOutBtn = document.createElement("button");
zoomOutBtn.innerText = "➖";
divImageContainer.appendChild(zoomInBtn);
divImageContainer.appendChild(zoomOutBtn);

let newLine = document.createElement("br");
divImageContainer.appendChild(newLine);

// this is the equivalent of writing <img src="./foo">
// Create an image element
let imgElem = document.createElement("img");
imgElem.src = "./cat.png";
// set default width and height (without the px! just a number)
imgElem.height = 500;
imgElem.width = 500;
divImageContainer.appendChild(imgElem);

delBtn.addEventListener("click", function () {
  imgElem.remove();
  this.remove();
});

const scaleFactor = 1.2;

zoomInBtn.addEventListener("click", function () {
  // zoom in event handler
  imgElem.height *= scaleFactor;
  imgElem.width *= scaleFactor;
});
zoomOutBtn.addEventListener("click", function () {
  // zoom out event handler
  imgElem.height /= scaleFactor;
  imgElem.width /= scaleFactor;
});