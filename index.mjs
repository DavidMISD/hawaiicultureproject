import frames from './frames/frames.json' assert { type: 'json' };

let frame = 0;
let currentFrame;
let mainDiv = document.getElementById("main");

nextFrame();

function nextFrame() {
  frame++;

  currentFrame = frames[frame];
  console.log(currentFrame);
  mainDiv.style.backgroundImage = `url("./frames/${currentFrame.image}")`;
}

function nextDialouge() {
  if (currentFrame.dialouges.length == 0) nextFrame();
  const ele = mainDiv.getElementsByClassName("dialougeBox");
  if (ele.length != 0) ele[0].remove();
  createDialougeBox(currentFrame.dialouges.shift());
}

function createDialougeBox(dialouge) {
  console.log(dialouge);
  let topDiv = document.createElement("div");
  topDiv.id = "dialouge";
  topDiv.className = 'dialougeBox';

  let headerDiv = document.createElement("div");
  headerDiv.id = "dialougeHeader";
  headerDiv.className = "dialougeBoxHeader";
  headerDiv.innerText = dialouge.person;

  topDiv.appendChild(headerDiv);

  let bodyDiv = document.createElement("div");
  bodyDiv.id = "dialougeBody";
  bodyDiv.className = "dialougeBoxBody";
  bodyDiv.innerText = dialouge.text

  topDiv.appendChild(bodyDiv);

  mainDiv.appendChild(topDiv);
}

document.addEventListener("mouseup", (event) => {
  nextDialouge();
})

export { frame, mainDiv, currentFrame, createDialougeBox, nextFrame, nextDialouge };
