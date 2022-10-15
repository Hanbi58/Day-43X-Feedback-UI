const icons = document.querySelectorAll(".icon");
const text = document.querySelector(".text");
icons.forEach((icon, idx) => {
  icon.addEventListener("click", () => {
    removeS();
    icon.classList.add("slected");
    setT(idx);
  });
});

function removeS() {
  icons.forEach((icon) => {
    icon.classList.remove("slected");
  });
}

function setT(num) {
  num === 0 && (text.textContent = "bad");
  num === 1 && (text.textContent = "ok");
  num === 2 && (text.textContent = "great");
}

const btns = document.querySelectorAll("button");

const frontside = document.querySelector(".frontside");
const backside = document.querySelector(".backside");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    frontside.classList.toggle("hide");
    backside.classList.toggle("hide");
  });
});
