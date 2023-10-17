const root = document.getElementById('root');
console.dir(root);
const img = root.children[0].children;
console.dir(img);
<<<<<<< HEAD
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
=======
const button = document.getElementById('button');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function clicks() {
        if (img[i].style.backgroundColor === '') {
            img[i].style.backgroundColor = 'red';
        } else if (img[i].style.backgroundColor === 'red') {
            img[i].style.backgroundColor = '';
        }
    });
}

button.onclick = () => {
    if (img[0].style.backgroundColor === 'red') {
        alert('고기만두');
    } else if (img[8].style.backgroundColor === 'red') {
        alert('새우만두');
    }
};
>>>>>>> kimwoojin
