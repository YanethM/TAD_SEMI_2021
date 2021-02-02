/* Inicialización de un array 
    refCelularesArray = []; -> array vacío
    refCelularesArray= new Array(); -> array vacío

    refCelularesArray = [1, 'hola', true] -> con elementos
*/
const refCelularesArray = [
    { id: 1, category: 'IPhone', model: 2021 },
    { id: 2, category: 'Nokia', model: 2021 },
    { id: 3, category: 'Samsung', model: 2021 },
    { id: 4, category: 'Samsung', model: 2019 }
];
/* --------------------------------------------------- */
/* iTERADORES QUE NOS PERMITEN RECORRER COLECCIONES */
for (let i = 0; i < refCelularesArray.length; i++) {
    console.log("Celular: ", refCelularesArray[i]);
}
/* --------------------------------------------------- */
/* Forma I: foreach */
refCelularesArray.forEach((j) => {
    console.log("Celular: ", j);
});
/* Forma II: Filter() 
Método que crea una copia de un array
Devuelve todo el objeto cuya clave cumple con el valor del filtro*/
let arraySamsung = refCelularesArray.filter(
    i => i.category === 'Samsung'
);
console.log(arraySamsung);
/* --------------------------------------------------- */
let arrayModels = refCelularesArray.filter(
    i => i.model === 2021
);
console.log(arrayModels);

/* --------------------------------------------------- */
/* Forma III: Map() 
crea un nuevo array especificando 
Devuelve el valor de la clave*/
const categoryCell = refCelularesArray.map((i) => i.category);
console.log(categoryCell);
const marcaCelular = "Nokia";
/* Imprimir concatenando strings */
console.log("Marca de celular" + marcaCelular + "\n" + "Marca de celulares disponibles " + categoryCell);
const categoryModel = `Marca de celular ${marcaCelular} \n Marca de celulares disponibles ${categoryCell}`;
console.log(categoryModel);