class Footer {
    constructor() {
        this.filtro = document.getElementById('filtro-turbulencia')
    }

    efeitoOnda() {
        TweenMax.to(this.filtro, 20, {attr: { baseFrequency: "0.03"}, repeat: -1, yoyo: true})
    }
}

export { Footer }