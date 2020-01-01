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

// Pie Chart
const pieChart = document.getElementById("pie-preview");

// HTML and CSS Previews
const htmlPreview = document.getElementById("html-preview");
const cssPreview = document.getElementById("css-preview");

function generate() {
  updateKey();
  updatePercent();
  updateHTML();
}

function updateKey() {
  piece1Key.innerHTML = `<span class="dot dot1"></span>${piece1Name.value}`;
  piece2Key.innerHTML = `<span class="dot dot2"></span>${piece2Name.value}`;
  piece3Key.innerHTML = `<span class="dot dot3"></span>${piece3Name.value}`;
  piece4Key.innerHTML = `<span class="dot dot4"></span>${piece4Name.value}`;
  piece5Key.innerHTML = `<span class="dot dot5"></span>${piece5Name.value}`;
}

function updatePercent() {
  let percent1 = parseInt(piece1Percent.value);
  let percent2 = parseInt(piece2Percent.value) + percent1;
  let percent3 = parseInt(piece3Percent.value) + percent2;
  let percent4 = parseInt(piece4Percent.value) + percent3;
  let percent5 = parseInt(piece5Percent.value) + percent4;
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
  htmlPreview.innerHTML = `
  <xmp>
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
  </xmp>
  `;
}
