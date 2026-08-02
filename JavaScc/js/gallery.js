function upDate(previewPic) {
  console.log("Hovering or Focused:", previewPic.alt, previewPic.src);
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function initializeGallery() {
  console.log("Page loaded. Initializing gallery and adding tabindex to images.");
  
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}