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

  let noPrincipalLista = null;
  let noAnterior = null;

  const convert = (no) => {
    if (!no) {
      return;
    }
    // começa pelo lado esquerdo da árvore
    convert(no.esquerda);

    // o mais a esquerda será o primeiro da lista
    if (!noAnterior) {
      noPrincipalLista = no;
    }
    // esquerda será o nó anterior
    // direita será o nó atual
    // ligação dupla
    else {
      no.esquerda = noAnterior;
      noAnterior.direita = no;
    }
    // anterior agora passa a ser o atual
    noAnterior = no;
    // vai para o lado direito
    convert(no.direita);
  };

  convert(noPrincipal);  
}
