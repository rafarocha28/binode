class No {
  constructor(conteudo) {
    this.conteudo = conteudo;
    this.esquerda = null;
    this.direita = null;
  }
}

function main() {
  const noPrincipal = new No(4);
  noPrincipal.esquerda = new No(2);
  noPrincipal.direita = new No(5);

  noPrincipal.esquerda.esquerda = new No(1);
  noPrincipal.esquerda.direita = new No(3);

  noPrincipal.direita.direita = new No(6);

  noPrincipal.esquerda.esquerda.esquerda = new No(0);

  const converte = (noPrincipal) => {};
}