const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const patron = /^[a-z\s]+$/;

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function mostrar_ocultar(textoEncritado) {
    let texto = document.querySelector("#resultado")
    texto.value = textoEncritado
    document.querySelector(".contenedor_texto").style.display = "none"
    document.querySelector(".contenedor_resultado").style.display = "flex"
}

function btnEncriptar() {
    if (patron.test(textArea.value)) {
        const textoEncritado = encriptar(textArea.value)
        mostrar_ocultar(textoEncritado)
    }else{
         document.querySelector("#validando").innerHTML = `<p class="salida_texto1">¡Texto no valido!</p>`
    }
}

function btnDesencriptar() {
    if (patron.test(textArea.value)) {
        const textoEncritado = desencriptar(textArea.value)
        mostrar_ocultar(textoEncritado)
    }else{
        document.querySelector("#validando").innerHTML = `<p class="salida_texto1">¡Texto no valido!</p>`
    }
}

function encriptar(stringEncriptada) {
    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrixCodigo.length; i++) {
        if (stringEncriptada.includes(matrixCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrixCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrixCodigo.length; i++) {
        if (stringDesencriptada.includes(matrixCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copiar() {
    let textoCopiado = document.querySelector("#resultado").value
    let botonCopiar = document.querySelector(".btn-copiar")
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            botonCopiar.textContent = "¡Copiado!"
            setTimeout(() => {
                botonCopiar.textContent = "Copiar"
            }, 1000)
        })
    textArea.value = ""
}
