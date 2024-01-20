function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha1.png'
        document.body.style.background = '#EEE8AA'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde1.png'
        document.body.style.background = '#FFA500'
    } else {
        //BOA NOITE!
        img.src = 'noite1.png'
        document.body.style.background = '#4682B4'
    }
}