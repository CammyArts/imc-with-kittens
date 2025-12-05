function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    const resultado = document.getElementById("resultado");

    let mensagem = "";
    let imagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
        imagem = "/assets/magro.png"; 
    } else if (imc <= 24.9) {
        mensagem = "Peso ideal";
        imagem = "/assets/ideal.png";
    } else if (imc >= 25) {
        mensagem = "Sobrepeso / Obesidade";
        imagem = "/assets/gordin.png";
    }

    resultado.innerHTML = `
        <p>IMC: ${imc.toFixed(2)} - ${mensagem}</p>
        <img src="${imagem}" alt="imagem de gatinho" style="width: 300px;">
    `;
}