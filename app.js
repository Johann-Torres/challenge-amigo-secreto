let amigo = [];

// Función para agregar amigos
function agregarAmigo () {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo === "") {
        alert("Digite un nombre, por favor"); // Verificar si el input está vacío
        return;
    } 
    if (amigo.includes(nombreAmigo)) { // Verificar si el amigo ya está en la lista
        alert('¡Este nombre ya está en la lista!');
        return;
    }

    amigo.push(nombreAmigo);
    console.log(amigo);
    inputAmigo.value = ""; // Limpiar el input
    inputAmigo.focus(); // Devolver el foco al input
    actualizarLista(); // Llamar a la función para mostrar la lista de amigos
}

// Función para mostrar amigos
function actualizarLista () {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    // Recorrer el array de amigos y agregar cada uno a la lista
    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}
// Función para sortear amigo
function sortearAmigo () {
    if (amigo.length === 0) {
        alert("No hay amigos para sortear"); // Verificar si hay amigos en la lista
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; // Sortear un amigo desde el array [0 a amigo.length]
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡Feliciades, amigo sorteado es ${amigoSorteado}!`; // Decir el amigo sorteado
};

