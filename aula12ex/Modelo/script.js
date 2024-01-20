function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha1.png'
    } else if (hora >= 12 && hpra < 18) {
        //Boa tarde!
        img.src = 'tarde1.png'
    } else {
        //BOA NOITE!
        img.src = 'noite1.png'
    }
}