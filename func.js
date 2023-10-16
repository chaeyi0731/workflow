const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function clicks() {
    img[i].style.backgroundColor = "red";
    () => {
      removeEventListener("click", clicks);
    };
  });
}

button.addEventListener("click", () => {
  if (img[0] === true) {
    console.log("맞다");
  }
});
