"use strict"
{
  const king = document.getElementById("kinsura");
  king.addEventListener("click", () => {
    king.classList.toggle("moved");
  });

  const metal = document.getElementById("metaking");
  metal.addEventListener("click", () => {
    metal.classList.toggle("moved");
  });
}
