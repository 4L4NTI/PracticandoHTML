const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "¡¡ME HICISTE CLIC!! ❤️";
  setTimeout(() => {
    btn.textContent = "Presióname";
  }, 1000);
});
  const colorInput = document.getElementById('bo');

  colorInput.addEventListener('input', function () {
    document.body.style.backgroundColor = this.value;
  });