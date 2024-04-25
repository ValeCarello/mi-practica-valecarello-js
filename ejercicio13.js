// Ejercico 13

function calcularPromedioEdad(personas) {
    const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdades / personas.length;
  }
  
  
  function obtenerMujerMayorEdad(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "mujer");
    const mayorEdad = mujeres.reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), mujeres[0]);
    return mayorEdad.nombre;
  }
  
  
  function obtenerHombreMenorEdad(personas) {
    const hombres = personas.filter(persona => persona.sexo === "hombre");
    const menorEdad = hombres.reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), hombres[0]);
    return menorEdad.nombre;
  }
  

  function calcularPromedioEdadMujeres(personas) {
    const mujeres = personas.filter(persona => persona.sexo === "mujer");
    return calcularPromedioEdad(mujeres);
  }
  
  
  const promedioTotal = calcularPromedioEdad(listaPersonas);
  const mujerMayor = obtenerMujerMayorEdad(listaPersonas);
  const hombreMenor = obtenerHombreMenorEdad(listaPersonas);
  const promedioMujeres = calcularPromedioEdadMujeres(listaPersonas);
  

  console.log("Promedio de edad total:", promedioTotal);
  console.log("Nombre de la mujer con mayor edad:", mujerMayor);
  console.log("Nombre del hombre con menor edad:", hombreMenor);
  console.log("Promedio de edad de las mujeres:", promedioMujeres);