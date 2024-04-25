// Ejercicio 12
const persona = {
    nombre: "",
    sexo: "",
    edad: 0
  };
  const listaPersonas = [
    { nombre: "Juan", sexo: "hombre", edad: 25 },
    { nombre: "María", sexo: "mujer", edad: 30 },
    { nombre: "Carlos", sexo: "hombre", edad: 20 },
    { nombre: "Ana", sexo: "mujer", edad: 35 }
  ]
  function promedioEdad(personas) {
    const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdades / personas.length;
  }
  function mujerMayorEdad(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "mujer");
    const mayorEdad = mujeres.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), mujeres[0]);
    return mayorEdad.nombre;
  }
  function hombreMenorEdad(personas) {
    const hombres = personas.filter(persona => persona.sexo === "hombre");
    const menorEdad = hombres.reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), hombres[0]);
    return menorEdad.nombre;
  }
  function promedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "mujer");
    return promedioEdad(mujeres);
  }
  const promedioTotal = promedioEdad(listaPersonas);
  const mujerMayor = mujerMayorEdad(listaPersonas);
  const hombreMenor = hombreMenorEdad(listaPersonas);
  const promedioMujeres = promedioEdadMujeres(listaPersonas);

  console.log("Promedio de edad total:", promedioTotal);
  console.log("Nombre de la mujer con mayor edad:", mujerMayor);
  console.log("Nombre del hombre con menor edad:", hombreMenor);
  console.log("Promedio de edad de las mujeres:", promedioMujeres);