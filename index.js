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
let percent1 = 20;
let percent2 = 20;
let percent3 = 20;
let percent4 = 20;
let percent5 = 20;

// Pie Chart
const pieChart = document.getElementById("pie-preview");

// HTML and CSS Previews
const htmlPreview = document.getElementById("html-preview");
const cssPreview = document.getElementById("css-preview");

// Keeping track of items
let currentItemNumber = 0;

// Form section
const formSection = document.getElementById("form-box");

// Key list
const keyList = document.getElementById("keyList");

function generate() {
  updateKey();
  updatePercent();
  updateHTML();
  updateCSS();
}

function updateKey() {
  piece1Key.innerHTML = `<span class="dot dot1"></span>${piece1Name.value}`;
  piece2Key.innerHTML = `<span class="dot dot2"></span>${piece2Name.value}`;
  piece3Key.innerHTML = `<span class="dot dot3"></span>${piece3Name.value}`;
  piece4Key.innerHTML = `<span class="dot dot4"></span>${piece4Name.value}`;
  piece5Key.innerHTML = `<span class="dot dot5"></span>${piece5Name.value}`;
}

function updatePercent() {
  percent1 = parseInt(piece1Percent.value);
  percent2 = parseInt(piece2Percent.value) + percent1;
  percent3 = parseInt(piece3Percent.value) + percent2;
  percent4 = parseInt(piece4Percent.value) + percent3;
  percent5 = parseInt(piece5Percent.value) + percent4;
  console.log(percent1, percent2, percent3, percent4, percent5);
  pieChart.style.background = `conic-gradient(
    red 0% ${percent1}%,
    green ${percent1}% ${percent2}%,
    blue ${percent2}% ${percent3}%,
    yellow ${percent3}% ${percent4}%,
    purple ${percent4}% ${percent5}%
  )`;
}

function updateHTML() {
  htmlPreview.innerHTML = `<xmp>
    <div class="pie-chart">
    <div class="key">
      <p>Key</p>
      <ul>
        <li id="item1-key"><span class="dot dot1"></span>${piece1Name.value}</li>
        <li id="item2-key"><span class="dot dot2"></span>${piece2Name.value}</li>
        <li id="item3-key"><span class="dot dot3"></span>${piece3Name.value}</li>
        <li id="item4-key"><span class="dot dot4"></span>${piece4Name.value}</li>
        <li id="item5-key"><span class="dot dot5"></span>${piece5Name.value}</li>
      </ul>
    </div>
    <div id="pie-preview"></div>
  </xmp>`;
}

function updateCSS() {
  cssPreview.innerHTML = `
  <pre>
  .pie-chart { 
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
  } 
  .key {width: 25%;} 
  .key p { 
    text-align: center; 
    margin-bottom: 15px; 
    font-weight: bold; 
    font-size: 1.2rem; 
  } 
  .key ul {list-style: none;} 
  .key ul li { 
    margin-bottom: 20px; 
    position: relative; 
  } 
  .key ul li .dot { 
    height: 20px; 
    width: 20px; 
    border-radius: 50%; 
    position: absolute; 
    left: -30px; 
    top: -3px; 
    border: solid 1px black; 
  } 
  .dot1 {background: red;} 
  .dot2 {background: green;} 
  .dot3 {background: blue;} 
  .dot4 {background: yellow;} 
  .dot5 {background: purple;} 
  #pie-preview { 
    width: 150px; 
    height: 150px; 
    border-radius: 50%; 
    border: solid 1px black; 
    background: conic-gradient( 
      red 0% ${percent1}%, 
      green ${percent1}% ${percent2}%, 
      blue ${percent2}% ${percent3}%, 
      yellow ${percent3}% ${percent4}%, 
      purple ${percent4}% ${percent5}% 
    ); 
    box-shadow: 5px 5px 5px #111; 
  }
  </pre>
  `;
}

const color = [
  "#DB050D",
  "#F36523",
  "#FEF200",
  "#7CC576",
  "#34A458",
  "#FAB9CF",
  "#F76DB8",
  "#CA0088",
  "#92D4F7",
  "#91B1EE",
  "#103B8A",
  "#032360",
  "#8781BF",
  "#662E93",
  "#BA9B6F",
  "#4E2B0B"
];
let colorNumber = 0;

function add() {
  currentItemNumber++;
  let node = document.createElement("DIV");
  node.classList.add("item");
  node.innerHTML = `
      <div>
        <label for="item${currentItemNumber}-name">Item ${currentItemNumber} Name</label>
        <input type="text" id="item${currentItemNumber}-name" />
      </div>
      <div>
        <label for="item${currentItemNumber}-percent">Item ${currentItemNumber} Percent</label>
        <input type="text" id="item${currentItemNumber}-percent" />
      </div>
      <a onclick="remove()" class="remove">X</a>
  `;
  formSection.appendChild(node);

  let keyNode = document.createElement("LI");
  keyNode.innerHTML = `Item ${currentItemNumber}`;
  if (
    colorNumber === 0 ||
    colorNumber === 4 ||
    colorNumber === 7 ||
    colorNumber === 10 ||
    colorNumber === 11 ||
    colorNumber === 13 ||
    colorNumber === 15
  ) {
    keyNode.style.color = "white";
  }
  keyNode.style.background = color[colorNumber];
  keyList.appendChild(keyNode);

  if (colorNumber <= color.length - 2) {
    colorNumber++;
  } else {
    colorNumber = 0;
  }
}
