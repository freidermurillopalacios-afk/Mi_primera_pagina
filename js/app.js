const Numero = document.getElementById("numero");
const salida = document.getElementById("salida");

Numero.addEventListener("input", function () {
    let numero = Number(Numero.value);

    if (numero === 12) {
        salida.textContent = "Correcto acertaste";
    } else if (numero >= 13) {
        salida.textContent = "Casi, el número es mas bajo";
    } else if (numero <= 11) {
        salida.textContent = "Casi, el número esta mas arriba";
    } 
});

const opcion = document.getElementById("opcion");
const imagen = document.querySelector("img");
const salida2 = document.getElementById("salida2");

opcion.addEventListener("change", function () {
    const Seleccionada = opcion.value;

    if (Seleccionada === "futbol") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5bEioJg7K8rqEX6CQqWaPdJ9rcDoFZ1hDoNdUsBeBQ&s=10";
        salida2.textContent = "Mi equipo favorito es el Real Madrid";
    } else if (Seleccionada === "caminar") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7Js8OcGg8jGHidiK10NTya-6N_vGfE0G6WgHPAnpuw&s=10"; 
        salida2.textContent = "Me gusta salir a caminar mucho.";
    } else if (Seleccionada === "musica") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgEfr0KH6CsPMfV3dO9qmMKXIAjiAuwXrYOiwNc8Ugw&s=10"; 
        salida2.textContent = "Mi cantante favorito es myke towers.";
    } else {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqErJbUkx7eHhk9qTR2_sdRZY8wi95LxWm4BBP0XinkA&s=10";
        salida2.textContent = "Selecciona una opcion para ver una imagen de mis pasiones.";
    }
});

const boton = document.getElementById("boton");
boton.addEventListener("click", function () {
    alert("Todo lo puedo en Cristo que me fortalece, Dios lo bendiga profe.");
});