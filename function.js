export const list = (event) => {
  const option = event.target.value;
  console.log(option);
};
export const talla = (event) => {
  const option1 = event.target.value;
  console.log(option1);
};

export const marca = () => {};
document.querySelector(".Talla").addEventListener("change", talla);
document.querySelector(".Tipo").addEventListener("change", list);
document.querySelectorAll(".Marcas").forEach(marca);
