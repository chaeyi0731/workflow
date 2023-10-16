const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    img[i].style.backgroundColor = "red";
  });
  img[i].removeEventListener("click", () => {
    img[i].style.backgroundColor = "";
  });
}

button.addEventListener("click", () => {
  if (img[0] === true) {
    console.log("맞다");
  }
});
