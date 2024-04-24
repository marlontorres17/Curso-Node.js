// Definición de la clase Equipo
class Equipo {
  constructor(nombre, pais, fundacion) {
    this.nombre = nombre;
    this.pais = pais;
    this.fundacion = fundacion;
  }
}

// Definición de la clase Piloto
class Piloto {
  constructor(nombre, equipo, nacionalidad) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nacionalidad = nacionalidad;
  }
}

// Definición de la clase Carrera
class Carrera {
  constructor(nombre, pais, fecha) {
    this.nombre = nombre;
    this.pais = pais;
    this.fecha = fecha;
  }
}

// Script principal para interactuar con el usuario
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista para almacenar los datos ingresados
const equipos = [];
const pilotos = [];
const carreras = [];

// Función para agregar un equipo
function agregarEquipo() {
  rl.question("Ingrese el nombre del equipo: ", (nombre) => {
    rl.question("Ingrese el país del equipo: ", (pais) => {
      rl.question("Ingrese el año de fundación del equipo: ", (fundacion) => {
        const equipo = new Equipo(nombre, pais, fundacion);
        equipos.push(equipo);
        console.log("Equipo agregado:", equipo);
        mostrarMenu();
      });
    });
  });
}

// Función para agregar un piloto
function agregarPiloto() {
  rl.question("Ingrese el nombre del piloto: ", (nombre) => {
    rl.question("Ingrese el equipo del piloto: ", (equipo) => {
      rl.question("Ingrese la nacionalidad del piloto: ", (nacionalidad) => {
        const piloto = new Piloto(nombre, equipo, nacionalidad);
        pilotos.push(piloto);
        console.log("Piloto agregado:", piloto);
        mostrarMenu();
      });
    });
  });
}

// Función para agregar una carrera
function agregarCarrera() {
  rl.question("Ingrese el nombre de la carrera: ", (nombre) => {
    rl.question("Ingrese el país de la carrera: ", (pais) => {
      rl.question("Ingrese la fecha de la carrera (YYYY-MM-DD): ", (fecha) => {
        const carrera = new Carrera(nombre, pais, fecha);
        carreras.push(carrera);
        console.log("Carrera agregada:", carrera);
        mostrarMenu();
      });
    });
  });
}

// Menú principal
function mostrarMenu() {
  console.log("\n--- Menú Principal ---");
  console.log("1. Agregar equipo");
  console.log("2. Agregar piloto");
  console.log("3. Agregar carrera");
  console.log("4. Mostrar datos");
  console.log("5. Salir");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarEquipo();
        break;
      case "2":
        agregarPiloto();
        break;
      case "3":
        agregarCarrera();
        break;
      case "4":
        mostrarDatos();
        break;
      case "5":
        console.log("¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("Opción inválida. Por favor, seleccione una opción válida.");
        mostrarMenu();
        break;
    }
  });
}

// Función para mostrar los datos ingresados
function mostrarDatos() {
  console.log("\n--- Equipos ---");
  equipos.forEach((equipo, index) => {
    console.log(`Equipo ${index + 1}:`, equipo);
  });

  console.log("\n--- Pilotos ---");
  pilotos.forEach((piloto, index) => {
    console.log(`Piloto ${index + 1}:`, piloto);
  });

  console.log("\n--- Carreras ---");
  carreras.forEach((carrera, index) => {
    console.log(`Carrera ${index + 1}:`, carrera);
  });

  mostrarMenu();
}

// Iniciar la aplicación mostrando el menú principal
mostrarMenu();
