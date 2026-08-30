const formulario = document.getElementById("forms");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const dados = new FormData(formulario);

    const resposta = await fetch(formulario.action, {
        method: "POST",
        body: dados,
        headers: {
            "Accept": "application/json"
        }
    });

    if (resposta.ok) {
        alert("Respostas enviadas :)");
        formulario.reset();
    } else {
        alert("Deu algum problema ao enviar :(");
    }

});