// basic setup
setup();

function setup() {
    getFox();
}

// get the source we need
function getFox() {
    fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(data => updateFoxImgSrc(data.image));
}

function updateFoxImgSrc(src) {
    var img = document.querySelector("img");
    img.src = src;
}