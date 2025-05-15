document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn0").addEventListener("click", () => {
    const titulo = document.querySelector("h1");
    titulo.textContent = "NOVO TÍTULO";
    titulo.style.color = "Black";
  });

  document.getElementById("btn1").addEventListener("click", () => {
    const img = document.querySelector(".fotos");
    img.src = "calabreso.png";
    img.style.width = "400px";
    img.style.height = "300px";
  });

  document.getElementById("btn2").addEventListener("click", () => {
    const texto1 = document.querySelectorAll("h4")[0];
    texto1.textContent = "novo texto1";
    texto1.style.backgroundColor = "purple";
    texto1.style.color = "black";
  });

  const texto2 = document.querySelectorAll("h4")[1];

  for (let i = 3; i <= 5; i++) {
    const btn = document.getElementById(`btn${i}`);
    btn.textContent = `btn ${i + 1}`;
    btn.addEventListener("click", () => {
      texto2.textContent = btn.textContent;
    });
  }
});
