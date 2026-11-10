
const botaoAbrir = document.getElementById("abrirConvite");
const capaEnvelope = document.getElementById("capaEnvelope");

botaoAbrir.addEventListener("click", () => {

  // 1. Abre a aba do envelope
  capaEnvelope.classList.add("aberto");

  // 2. Aguarda a aba abrir
  setTimeout(() => {
    capaEnvelope.classList.add("cartinha-subindo");
  }, 1200);


  // A cartinha fica em destaque por um instante
  setTimeout(() => {
    capaEnvelope.style.opacity = "0";
  }, 5400);

  // Revela o convite completo
  setTimeout(() => {
    capaEnvelope.style.display = "none";
  }, 6300);


}, { once: true });
