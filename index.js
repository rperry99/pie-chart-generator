// Name Text Boxes
const piece1Name = document.getElementById("item1-name");
const piece2Name = document.getElementById("item2-name");
const piece3Name = document.getElementById("item3-name");
const piece4Name = document.getElementById("item4-name");
const piece5Name = document.getElementById("item5-name");

// Key List Items
const piece1Key = document.getElementById("item1-key");
const piece2Key = document.getElementById("item2-key");
const piece3Key = document.getElementById("item3-key");
const piece4Key = document.getElementById("item4-key");
const piece5Key = document.getElementById("item5-key");

// Percent Boxes
const piece1Percent = document.getElementById("item1-percent");
const piece2Percent = document.getElementById("item2-percent");
const piece3Percent = document.getElementById("item3-percent");
const piece4Percent = document.getElementById("item4-percent");
const piece5Percent = document.getElementById("item5-percent");

// Change the text in the key when you type in the boxes.
piece1Name.onkeyup = () => {
  if (piece1Name.value === "") {
    piece1Key.innerHTML = `<span class="dot dot1"></span>Item 1`;
  } else {
    piece1Key.innerHTML = `<span class="dot dot1"></span>${piece1Name.value}`;
  }
};
piece2Name.onkeyup = () => {
  if (piece2Name.value === "") {
    piece2Key.innerHTML = `<span class="dot dot2"></span>Item 2`;
  } else {
    piece2Key.innerHTML = `<span class="dot dot2"></span>${piece2Name.value}`;
  }
};
piece3Name.onkeyup = () => {
  if (piece3Name.value === "") {
    piece3Key.innerHTML = `<span class="dot dot3"></span>Item 3`;
  } else {
    piece3Key.innerHTML = `<span class="dot dot3"></span>${piece3Name.value}`;
  }
};
piece4Name.onkeyup = () => {
  if (piece4Name.value === "") {
    piece4Key.innerHTML = `<span class="dot dot4"></span>Item 4`;
  } else {
    piece4Key.innerHTML = `<span class="dot dot4"></span>${piece4Name.value}`;
  }
};
piece5Name.onkeyup = () => {
  if (piece5Name.value === "") {
    piece5Key.innerHTML = `<span class="dot dot5"></span>Item 5`;
  } else {
    piece5Key.innerHTML = `<span class="dot dot5"></span>${piece5Name.value}`;
  }
};
