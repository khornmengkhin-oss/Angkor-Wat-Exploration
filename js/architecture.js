// Architecture page scripts can be added here.
/*When I put the js directly in html, I only need 
"<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js"></script>"
But when I separate it to this file, the model-viewer wouldn't load, so I asked AI to help fix thi*/ 
const script = document.createElement("script");
script.type = "module";
script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js";
script.onload = () => {
  console.log("model-viewer loaded");
};
document.head.appendChild(script);

