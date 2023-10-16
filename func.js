const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener(
    "click",
    (even) => {
      img[i].style.backgroundColor = "red";
    },
    { once: true }
  );
}

button.addEventListener("click", () => {
  if (img[0] === true) {
    console.log("맞다");
  }
});
