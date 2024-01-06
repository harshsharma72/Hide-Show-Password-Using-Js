let btn = document.querySelector("#button");
let image = document.querySelector("img");
let input = document.querySelector("input");
btn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    image.src = "Images/eye-open.png";
  } else if (input.type === "text") {
    input.type = "password";
    image.src = "Images/eye-close.png";
  }
});
