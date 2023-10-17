const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");
const mandoo = [img[0], img[2], img[3], img[9], img[10], img[11]];

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function (event) {
    img[i].style.backgroundColor = "red";
    button.addEventListener("click", function () {
      if (img[0] === event.currentTarget) {
        console.log("o");
      }
    });
  });
}
