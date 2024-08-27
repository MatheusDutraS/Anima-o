class Cards{  //Criação de um objeto com a classe
    constructor() {  //Método que cria itens para a classe
        this.posicaoSectionDicas = document.getElementById('dicas');
        this.cardEsq = document.querySelector('.card--esq');
        this.cardDir = document.querySelector('.card--dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calcularScroll.bind(this))  
        //Comunica ao navegador da realização de uma animação, atualiza um quadro de animação antes da próxima repaint
        //Necessário para navegadores antigos
    }

    calcularScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y']; //variável que contem a posição y do elemento em relação ao viewport
        if (posicao >= 50) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 50) / 10}%)`;
            //Move o card esquerdo para a direita conforme a posição y do elemento
            this.cardDir.style.transform = `translate(${(posicao - 50) / 10}%)`;
            //Move o card direito para a esquerda conforme a posição y do elemento
        }  
        //A posição y do elemento vira a base para a posição x dos cards 
        //Quando chega na posição limite da condição if os cards param de se mover, pois a condição não será mais verdadeira
    }

}

export { Cards }