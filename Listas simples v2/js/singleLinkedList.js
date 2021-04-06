const capturaValorInputAnonima = function() {
    let valoresNodos = document.getElementById("nodos").value;
    document.getElementById("nodosIngresados").innerHTML = valoresNodos;
    /* Dividir o separar cada valor por "," split() */
};

function cargueImagenes(eventoSeleccionar) {
    let files = eventoSeleccionar.target.files;
    for (let i = 0, f; f = files[i]; i++) {
        /* Cargue de sólo imagenes */
        if (!f.type.match('image.*')) {
            continue;
        }
        let cargueImagenes = new FileReader;
        /* Capturar información de la imagen: tipo, nombre, tamaño */
        cargueImagenes.onload = (function(imagenSeleccionada) {
            return function(imagen) {
                /* Crear etiqueta HTML en el DOM */
                let span = document.createElement('span');
                /* Escribimos en la etiqueta span: cargamos la imagen */
                span.innerHTML = ['<img class ="thumb" width ="100px" heigth="100px" src= " ',
                    imagen.target.result, ' "title=" ', escape(imagenSeleccionada.name),
                    ' "/> '
                ].join('');
                document.getElementById("list").insertBefore(span, null);
            };
        })(f);
        /* Función de la API FileReader
        Hace la lectura del contenido de un objeto Blob
        Trabaja con el atributo result que devuelve los datos del fichero, en este caso la imagen seleccionada */
        cargueImagenes.readAsDataURL(f);
    }
}
document.getElementById('files').addEventListener('change', cargueImagenes, false);

/* Cargue de archivo txt */
let input = myInput;
let infoArchivo = new FileReader;
input.addEventListener('change', onChange);

function onChange(event) {
    /* event es el evento clic de selección */
    /* targer es el tipo de archivo seleccionado */
    /* files[0] sólo permite el cargue de un archivo */
    let archivo = event.target.files[0];
    /* readAsText se utiliza para leer el contenido de ls archivos */
    infoArchivo.readAsText(archivo);
    /* Permite ejecutar la función onload despues de cargar el archivo */
    infoArchivo.onload = onLoad;
}

/* Lectura del contenido del archivo */
function onLoad() {
    let contenidoTxt = infoArchivo.result;
    let lecturaLineaPorLina = contenidoTxt.split('\n');
    let contenido = "";
    contenido += lecturaLineaPorLina;
    document.getElementById("ver").innerHTML = contenido;
}

class NodeClass {

    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}

class listasSimples {
    constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        /* Métodos de la lista: añadir, eliminar, buscar, actualizar valor */
    añadirNodoF(valor) {
        /* Instancia de la clase NodeClass */
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    añadirNodoI(valor) {
        let newNode = new NodeClass(valor);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    eliminarNodoF() {
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }
    eliminarNodoI() {
        if (!this.head) return undefined;
        let cabezaactual = this.head;
        this.head = cabezaactual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return cabezaactual;
    }

    getPosicionPuntero(index) {
        if (index < 0 || index >= this.length) return null;
        let contadorPuntero = 0;
        let nodoVisitado = this.head;
        while (contadorPuntero !== index) {
            nodoVisitado = nodoVisitado.next;
            contadorPuntero++;
        }
        return nodoVisitado;
    }

    modificarValorNodo(index, valor) {
        let encontrarNodo = this.getPosicionPuntero(index);
        if (encontrarNodo) {
            encontrarNodo.valor = valor;
            return true;
        }
        return false;
    }

    removerNodoPorPosicion(index) {
        let nodoVisitad = this.head;
        let nodoAnteriorAlVisitado = null;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.head = nodoVisitad.next;
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitad;
                nodoVisitad = nodoVisitad.next;
            };
            nodoAnteriorAlVisitado.next = nodoVisitad.next;
        };
        this.length--;
        return nodoVisitad.valor;
    }

    insertarNodoPorPosicion(valor, index) {
        let newNode = new NodeClass(valor);
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado;
        if (index < 0 || index >= this.length) return null;
        if (index === 0) this.añadirNodoI(valor);
        else {
            for (let i = 0; i < index; i++) {
                nodoAnteriorAlVisitado = nodoVisitado;
                nodoVisitado = nonodoVisitado.next;
            }
            newNode.next = nodoVisitado;
            nodoAnteriorAlVisitado.next = newNode;
        }
        this.length++;
    }
    removerNodoPorValor(valor) {
        let nodoVisitado = this.head;
        let nodoAnteriorAlVisitado = null;
        while (nodoVisitado !== null) {
            if (nodoVisitado.valor === valor) {
                if (!nodoAnteriorAlVisitado)
                    this.head = nodoVisitado.next;
                else
                    nodoAnteriorAlVisitado.next = nodoVisitado.next;
                this.length--;
                return nodoVisitado.valor;
            }
            nodoAnteriorAlVisitado = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        return null;
    }
    invertirOrdenLista() {
        console.log("Implementar método")
    }

    /* Implementar método reverse (invertir nodos de la lista) */
    /* Implementar función para llamar método según selección del user en la lista desplagable */
    /* Crear la lista simple a partir de los valores ingresados por el usuario, 
    en la opción por default y del campo input */

    imprimirArrayList() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        document.getElementById("listaPorDefault").innerHTML = arregloNodos;
    }
}
let instClass = new listasSimples();
instClass.añadirNodoF(5);
instClass.añadirNodoI(4);
instClass.añadirNodoI(3);
instClass.añadirNodoI(2);
instClass.añadirNodoI(1);
instClass.añadirNodoI(7);
instClass.añadirNodoI(8);
instClass.añadirNodoI(9);
/* Añadir nodo al final de los valores ingresados en el campo input plit(",")
    Añadir nodo al final que contenga el nombre de las imagenes seleccionadas
    Añadir nodo al final que muestre el contenido del archivo txt seleccionado, donde cada linea 
    es un valor de nodo diferente split("\n")*/

instClass.imprimirArrayList();

/* validar el algoritmo de selección de lista desplegable y checkbox */
let seleccion = document.getElementById("functionSelected").value;

if (seleccion === "1") {
    instClass.añadirNodoI();
    instClass.añadirNodoF();
    instClass.imprimirArrayList();
} else if (seleccion === "2") {
    instClass.eliminarNodoI();
    instClass.eliminarNodoF();
    instClass.imprimirArrayList();
} else if (seleccion === "3") {
    instClass.getPosicionPuntero();
    instClass.imprimirArrayList();
} else if (seleccion === "4") {
    instClass.removerNodoPorPosicion();
    instClass.imprimirArrayList();
} else if (seleccion === "5") {
    instClass.removerNodoPorValor();
    instClass.imprimirArrayList();
} else if (seleccion === "6") {
    instClass.modificarValorNodo();
    instClass.imprimirArrayList();
} else if (seleccion === "7") {
    instClass.insertarNodoPorPosicion();
    instClass.imprimirArrayList();
} else if (seleccion === "7") {
    instClass.invertirOrdenLista();
    instClass.imprimirArrayList();
}
instClass.imprimirArrayList();