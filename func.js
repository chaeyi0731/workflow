const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function clicks() {
    if (img[i].style.backgroundColor === "") {
      img[i].style.backgroundColor = "red";
    } else if (img[i].style.backgroundColor === "red") {
      img[i].style.backgroundColor = "";
    }
  });
}

button.onclick = () => {
  if (
    img[0].style.backgroundColor === "red" &&
    img[2].style.backgroundColor === "red" &&
    img[2].style.backgroundColor === "red" &&
    img[9].style.backgroundColor === "red" &&
    img[10].style.backgroundColor === "red" &&
    img[11].style.backgroundColor === "red"
  ) {
    alert("고기만두");
  } else if (
    img[8].style.backgroundColor === "red" &&
    img[2].style.backgroundColor === "red" &&
    img[2].style.backgroundColor === "red" &&
    img[9].style.backgroundColor === "red" &&
    img[10].style.backgroundColor === "red" &&
    img[11].style.backgroundColor === "red"
  ) {
    alert("새우만두");
  } else {
    alert("만두 속 재료가 이상해!!");
  }
};
