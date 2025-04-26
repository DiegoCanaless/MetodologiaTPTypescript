// Ejercicio 1

interface Usuario {
    id?: number;
    nombre?: string;
    edad?: number;
    email?: string;
    activo?: boolean
}

type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean
}

// Diferencias entre interface y type
// 1. Las interfaces pueden ser extendidas, mientras que los tipos no pueden ser extendidos.
// 2. Las interfaces pueden ser implementadas por clases, mientras que los tipos no pueden ser implementados por clases.
// 3. Las interfaces pueden ser fusionadas, mientras que los tipos no pueden ser fusionados.
// 4. Las interfaces son más adecuadas para definir la forma de un objeto, mientras que los tipos son más adecuados para definir un tipo de dato.



// Ejercicio 2

let usuarios: Usuario[] = [
    { id: 1, nombre: "Mariano", edad: 52, email: "Marianito52@gmail.com", activo: false},
    { id: 2, nombre: "Juan", edad: 25, email: "Juanito25@gmail.com", activo: true},
    { id: 3, nombre: "Pablo", edad: 99, email: "PablitoViejardo@gmail.com", activo: true}
]

const activos = usuarios.filter(user => user.activo) 

console.log(activos)


console.log("-----------Ejercicio 3-----------")


// Ejercicio 3

class UsuarioClass implements Usuario {
    id?: number;
    nombre?: string;
    edad?: number;
    email?: string;
    activo?: boolean;

    
    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
    }

    toggleActivo(): void{
        this.activo = !this.activo;
    }

    getActivo(): boolean{
        return this.activo!;
    }
} 


let usuario1 = new UsuarioClass(1, "Mariano", 52, "Marianito52@gmail.com", false)
let usuario2 = new UsuarioClass(2, "Juan", 25, "Juanito25@gmail.com", true);

console.log("Usuario 1: ", usuario1)
console.log("Usuario 2: ", usuario2)
// Aca podria haberlo mostrado con Getters pero para evitar tantas lineas de codigo lo hice asi



usuario1.toggleActivo()             // Ejecuto el metodo haciendo que cambie indiferentemente a True o False
console.log(usuario1.getActivo())   // Ahora el el usuario termino siendo True

console.log("----------Ejercicio 4------------")

class AdminUsuario extends UsuarioClass {
    permisos: string[] = ["Crear", "Leer", "Actualizar", "Eliminar"];
}

let admin1 = new AdminUsuario(1, "Julian", 18, "Buenardo@gmail.com", true,)

console.log("Admin 1: ", admin1)


console.log("----------Ejercicio 5------------")

let productos = [
    {id: 1, nombre: "Devil May Cry 1", precio: 20, stock: 80},
    {id: 2, nombre: "Mafia 2", precio: 50, stock: 60},
    {id: 3, nombre: "Resident Evil 4", precio: 30, stock: 0}
]

const producto: string[] = productos.map(productos => productos.nombre);
const productoFiltrados = productos.filter (producto => producto.stock > 0)

console.log("Productos en el catalogo: " + producto.join(", "))


console.log(productoFiltrados)



console.log("----------Ejercicio 6------------")

let productosOrdenados =  [...productos].sort((a, b) => a.precio - b.precio) 
console.log("Productos ordenados por precio: ", productosOrdenados)
productos.push({id: 4, nombre: "Sea of Thieves", precio: 40, stock: 20})


console.log("Ultimo juego del catalogo eliminado", productos.pop())


console.log("----------Ejercicio 7------------")

function getRandomItem<T> (items: T[]): T {
    return items[items.length-1];
}

const numeros = [1, 2, 3, 4, 5]
const letras = ["a", "b", "c", "d", "e"]

console.log(getRandomItem(usuarios))



console.log("----------Ejercicio 8------------")

interface Caja<T>{
    contenido: T[];
}

class CajaClass<T> implements Caja<T>{
    contenido: T[] = [];

    agregarContenido(item: T): void{
        this.contenido.push(item);
    }

    obtenerContenido(): T[]{
        return this.contenido; 
    }

}

let cajaNumeros = new CajaClass<string>();
cajaNumeros.agregarContenido("Hola");
cajaNumeros.agregarContenido("Adios");
cajaNumeros.agregarContenido("Eliminen a Nafiri");
console.log(cajaNumeros.obtenerContenido())


console.log("----------Ejercicio 9------------")
let arraySimuladora: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

async function obtenerDatos(): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...arraySimuladora]);
        }, 2000);
    });
}

(async () => {
    console.log("Obteniendo datos...");
    const datos = await obtenerDatos();
    console.log("Datos recibidos:", datos);
})();



console.log("----------Ejercicio 10------------")


async function llamarApi(): Promise<any> {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/Mewtwo");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al llamar a la API:", error);
        throw error;
    }
}

(async () => {
    try {
        console.log("Llamando a la API...");
        const pokemon = await llamarApi();
        
        if (pokemon && typeof pokemon === 'object') {
            console.log("Pokémon recibido:");
            console.log(`Nombre: ${pokemon.name || 'Desconocido'}`);
            console.log(`ID: ${pokemon.id || 'N/A'}`);
        } else {
            console.log("La API no devolvió un Pokémon válido");
        }
    } catch (error) {
        console.error("Error en la ejecución:", error);
    }
})();



console.log("----------Ejercicio 11------------");

interface UsuarioFinal {
    id?: number;
    nombre?: string;
    edad?: number;
    email?: string;
}

let arrayUsuarios: UsuarioFinal[] = [
    { id: 1, nombre: "Mariano", edad: 52, email: "Marian@gmail.com" },
    { id: 2, nombre: "Juan", edad: 25, email: "Juan@gmail.com" },
    { id: 3, nombre: "Pablo", edad: 99, email: "Pablo@gmail.com" },
    { id: 4, nombre: "Julian", edad: 18, email: "Julian@gmail.com" },
    { id: 5, nombre: "Nicolas", edad: 30, email: "Nicolas@gmail.com" }
];

document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    let mostrarUsuarios = false;
    button.textContent = "Mostrar Usuarios";

    const listaUsuarios = document.createElement("ul");

    button.addEventListener("click", () => {
        mostrarUsuarios = !mostrarUsuarios;
        if (mostrarUsuarios) {
            button.textContent = "Ocultar Usuarios";
        } else {
            button.textContent = "Mostrar Usuarios";
        }
        renderUsuarios();
    });


    function renderUsuarios() {
        listaUsuarios.innerHTML = "";

        if (mostrarUsuarios) {
            arrayUsuarios.forEach(usuario => {
                const li = document.createElement("li");
                li.textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`;
                listaUsuarios.appendChild(li);
            });
        }
    }

    document.body.appendChild(button);
    document.body.appendChild(listaUsuarios);
});