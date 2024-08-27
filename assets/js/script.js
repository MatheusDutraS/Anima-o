import { Cards } from './cards.js'
import { Icones } from './icones.js'
import { Footer } from './footer.js'

window.onload = () => {  
    //window.onload = faz algo quando a página carrega, nesse caso executa uma função.
    let cards = new Cards()  
    //Cria um objeto, animarCard, tendo como protótipo o objeto criado pelo class importado do outro arquivo js.
    document.addEventListener('scroll', cards.scrollCards.bind(cards))  
    //adiciona um eventListener na tela quando a página é scrollada executando a função scrollCards que está no objeto criado tendo como referencia o próprio objeto.

    const icones = new Icones();
    icones.animarIcones();

    const footer = new Footer()
    footer.efeitoOnda();
}