const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    img[i].style.backgroundColor = "red";
    const mandoo = [img[0], img[2], img[3], img[9], img[10], img[11]];

    button.addEventListener("click", () => {
      if (mandoo[0] === true) {
        console.log("맞다");
      }
    });
  });
}
