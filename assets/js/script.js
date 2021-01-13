let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    txtNome.style.padding = "5px"

    if (nome.value.length < 2) {
        txtNome.style.color = "red"
        txtNome.innerHTML = "Nome inválido!"
    } else {
        txtNome.style.color = "green"
        txtNome.style.display = "none"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    txtEmail.style.padding = "5px"

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.style.color = "red"
        txtEmail.innerHTML = "E-mail inválido!"
    } else {
        txtEmail.style.display = "none"
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.style.color = "red"
        txtAssunto.innerHTML = "Digite no máximo até 100 caracteres!"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk && emailOk && assuntoOk) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}