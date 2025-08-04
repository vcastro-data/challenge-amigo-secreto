// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres
let amigos = [];

// Función para añadir un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = "";
    }
}

// Función para mostrar la lista de amigos en la página
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(item);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        resultado.innerHTML = "<li>¡Debes añadir al menos 2 amigos!</li>";
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];

    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${elegido}</strong> 🎉</li>`;
}
