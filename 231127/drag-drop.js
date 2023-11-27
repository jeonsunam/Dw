const boxes = document.querySelectorAll(".box");
const imgBox = document.querySelector(".imageBox");

boxes.forEach((box) => {
  // 떠잇을떄 계속발생
  box.addEventListener("dragover", (e) => {
    console.log("over", e.currentTarget.classList.value);
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  });
  //   영역 벗어날때 발생
  box.addEventListener("dragleave", (e) => {
    console.log("leave", e.currentTarget.classList.value);
    e.currentTarget.classList.remove("hovered");
  });
  //   뗏을때 발생
  box.addEventListener("drop", (e) => {
    console.log("drop", e.currentTarget.classList.value);
    e.currentTarget.appendChild(imgBox);
    e.currentTarget.classList.remove("hovered");
  });
});
