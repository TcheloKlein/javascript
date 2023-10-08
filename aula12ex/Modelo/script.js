function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha1.png'
        document.body.style.background = '#b48051'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src ='imagens/tarde1.png'
        document.body.style.background = '#95a2b9'
    } else {
        //Boa noite!
        img.src ='imagens/noite1.png'
        document.body.style.background = '#2d5a9b'
    }
}

