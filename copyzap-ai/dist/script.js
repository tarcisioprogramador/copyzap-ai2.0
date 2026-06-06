function gerar() {
  const nome = document.getElementById("nome").value;
  const produto = document.getElementById("produto").value;
  const valor = document.getElementById("valor").value;
  const tipo = document.getElementById("tipo").value;

  let texto = "";

  if (tipo === "venda") {
    texto = `${nome}, tenho uma condição especial no ${produto} por R$ ${valor}. Quer aproveitar?`;
  }

  if (tipo === "followup") {
    texto = `${nome}, passando pra te lembrar da proposta do ${produto}. Ainda está disponível!`;
  }

  if (tipo === "urgencia") {
    texto = `🚨 ${nome}, última chance no ${produto} por R$ ${valor}. Posso fechar pra você agora?`;
  }

  document.getElementById("resultado").value = texto;

  const hist = document.getElementById("historico");
  hist.innerHTML += `<p>${texto}</p>`;
}

function copiar() {
  const texto = document.getElementById("resultado");
  texto.select();
  document.execCommand("copy");
}

function whatsapp() {
  const texto = document.getElementById("resultado").value;
  const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}