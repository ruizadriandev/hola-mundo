console.log("--- Iniciando Sistema ---");

const usuario = "Adrian Ruiz";
const carrera = "Ingeniería de Sistemas";
const meta = "Backend Developer";

console.log(`Bienvenido, ${usuario}.`);
console.log(`Detectamos que estás estudiando: ${carrera}.`);
console.log(`Cargando perfil para objetivo: ${meta}...`);

// Simulación de proceso
const diasParaGraduacion = 90;
const horasEstudioSemanal = 15;
const totalHoras = diasParaGraduacion / 7 * horasEstudioSemanal;

console.log(`Plan de ataque: ${Math.floor(totalHoras)} horas de código antes de graduarte.`);
console.log("--- Sistema Listo ---");