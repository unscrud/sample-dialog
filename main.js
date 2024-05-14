const mensagens = [
  {
    id: 1,
    frase:
      "O sucesso não é final, o fracasso não é fatal: o que importa é a coragem de continuar.",
    autor: "Winston Churchill",
  },
  {
    id: 2,
    frase: "A mente é tudo. O que você pensa, você se torna.",
    autor: "Buda",
  },
  {
    id: 3,
    frase: "Se você pode sonhar, você pode fazer.",
    autor: "Walt Disney",
  },
  {
    id: 4,
    frase: "A única maneira de fazer um bom trabalho é amar o que você faz.",
    autor: "Steve Jobs",
  },
  {
    id: 5,
    frase: "Não tenha medo de falhar. Tenha medo de não tentar.",
    autor: "LeBron James",
  },
  {
    id: 6,
    frase: "A vida é uma aventura ousada ou nada.",
    autor: "Helen Keller",
  },
  {
    id: 7,
    frase:
      "O que você faz hoje é mais importante do que o que você diz que vai fazer amanhã.",
    autor: "Abraham Lincoln",
  },
  {
    id: 8,
    frase:
      "A única maneira de fazer um grande trabalho é amar o que você faz. Se você ainda não encontrou, continue procurando. Não se acomode.",
    autor: "Steve Jobs",
  },
  {
    id: 9,
    frase: "Se você pode sonhar, você pode alcançar.",
    autor: "Walt Disney",
  },
  {
    id: 10,
    frase: "A dor é temporária. A desistência dura para sempre.",
    autor: "Lance Armstrong",
  },
  {
    id: 11,
    frase: "A única maneira de fazer um bom trabalho é amar o que você faz.",
    autor: "Steve Jobs",
  },
  {
    id: 12,
    frase: "Não tenha medo de falhar. Tenha medo de não tentar.",
    autor: "LeBron James",
  },
  {
    id: 13,
    frase: "A vida é uma aventura ousada ou nada.",
    autor: "Helen Keller",
  },
  {
    id: 14,
    frase:
      "O que você faz hoje é mais importante do que o que você diz que vai fazer amanhã.",
    autor: "Abraham Lincoln",
  },
  {
    id: 15,
    frase:
      "A única maneira de fazer um grande trabalho é amar o que você faz. Se você ainda não encontrou, continue procurando. Não se acomode.",
    autor: "Steve Jobs",
  },
  {
    id: 16,
    frase: "Se você pode sonhar, você pode alcançar.",
    autor: "Walt Disney",
  },
  {
    id: 17,
    frase: "A dor é temporária. A desistência dura para sempre.",
    autor: "Lance Armstrong",
  },
  {
    id: 18,
    frase: "Se você pode sonhar, você pode fazer.",
    autor: "Walt Disney",
  },
  {
    id: 19,
    frase: "A única maneira de fazer um bom trabalho é amar o que você faz.",
    autor: "Steve Jobs",
  },
  {
    id: 20,
    frase: "Não tenha medo de falhar. Tenha medo de não tentar.",
    autor: "LeBron James",
  },
];

const fecharPopup = document.querySelector(".fechar-popup");
const popup = document.querySelector(".popup");

fecharPopup.addEventListener("click", () => {
  popup.close();
});

function gerarConteudoAleatorio(dados) {
  const indiceAleatorio = Math.floor(Math.random() * dados.length);
  const itemAleatorio = dados[indiceAleatorio];
  return itemAleatorio;
}

window.addEventListener("DOMContentLoaded", async () => {
  const itemAleatorio = gerarConteudoAleatorio(mensagens);
  exibirConteudoAleatorio(itemAleatorio);
});

function exibirConteudoAleatorio(mensagem) {
  const conteudoHTML = `<h1>${mensagem.frase}</h1><p>${mensagem.autor}</p>`;
  document.getElementById("conteudo-aleatorio").innerHTML = conteudoHTML;
  popup.showModal();
}
