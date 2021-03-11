class NodeClass {
    constructor(value) {
        /* Propiedades que tiene todo nodo */
        this.value = value;
        this.next = null; /* Generar el enlace entre los nodos */
    }
}

class listasSimples {
    constructor() {
        /* Propiedades que tiene toda lista */
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Metodos a trabajar con SyngleLinkedList */

    /* Añadir nodos al FINAL de la lista */
    pushNode(value) {
        /* Instancia de la clase NodeClass */
        let newNode = new NodeClass(value);
        /* Validar si la lista esta vacía */
        if (!this.head) {
            /* Como sería el único nodo de la lista, toma el valor de cabeza y cola */
            this.head = newNode;
            this.tail = this.head;
        } else {
            /* La actual cola de la lista genera el enlace con el nuevo nodo */
            this.tail.next = newNode;
            /* El nuevo nodo pasa a ser la nueva cola de la lista */
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /* Añadir nodo al INICIO de la lista */
    unshiftNode(value) {
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        /* El nuevo nodo pasa a ser la cabeza de la lista */
        this.head = newNode;
        this.length++;
        return this;
    }

    /* Eliminar nodo al final de la lista */
    popNode() {
        if (!this.head) return undefined; /* Nada que eliminar */
        /* Debemos recorrer toda la lista hasta llegar al nodo cola */
        let nodoActual = this.head;
        let newTail = nodoActual;
        /* Recorremos todos los enlaces de la lista */
        while (nodoActual.next) {
            newTail = nodoActual;
            nodoActual = nodoActual.next;
        }
        this.tail = newTail;
        /* Especificamos que es la nueva cola y se genera el enlace de next con null */
        this.tail.next = null;
        this.length--;
        /* Incluir la validación: Si eliminamos el único nodo que tenia la lista */
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoActual;
    }

    /* Eliminar el nodo inicio */
    shiftNode() {
        if (!this.head) return undefined;
        let nodoActual = this.head;
        this.head = nodoActual.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoActual;
    }

    /* Buscar un nodo por el puntero */
    getValorNodo(nodoBuscado) {
        if (nodoBuscado < 0 || nodoBuscado >= this.length) return null;
        let contadorNodos = 0;
        let nodoActual = this.head;
        while (contadorNodos !== nodoBuscado) {
            nodoActual = nodoActual.next;
            contadorNodos++;
        }
        /* Prueba que capturamos el valor de la posición 
        return nodoActual.value; */
        return nodoActual;
    }

    modificarValorNodo(nodoBuscado, value) {
        let encontrarNodo = this.getValorNodo(nodoBuscado);
        if (encontrarNodo) {
            encontrarNodo.value = value;
            return true;
        }
        return false;
    }

    /* Insertar nuevo nodo en determinada posición de la lista */
    insertarNodoEnPosicion(value, nodoBuscado) {
            let nuevoNodo = new NodeClass(value, null);
            let nodoActual = this.head;
            let nodoPrevio;
            if (nodoBuscado < 0 || nodoBuscado > this.length) {
                return null;
            }
            if (nodoBuscado === 0) {
                /* this.unshiftNode(value); */
                nuevoNodo.next = nodoActual;
                this.head = nuevoNodo;
            } else if (nodoBuscado === this.length - 1) {
                this.pushNode(value);
            } else {
                for (let i = 0; i < nodoBuscado; i++) {
                    nodoPrevio = nodoActual;
                    nodoActual = nodoActual.next;
                }
                nuevoNodo.next = nodoActual;
                nodoPrevio.next = nuevoNodo;
            }
            this.length++;
        }
        /* Eliminar nodo en determinada posición de la lista */
}
let listaSimpleTest = new listasSimples();
listaSimpleTest.pushNode("Yaneth");
listaSimpleTest.pushNode("Mejía");
listaSimpleTest.unshiftNode("Nombre: ");
listaSimpleTest.popNode();
listaSimpleTest.shiftNode();
console.log("Salida función getValorNodo" + listaSimpleTest.getValorNodo(0));
console.log("Modificar valor nodo" + listaSimpleTest.modificarValorNodo(0, "TAD I UAM"));
console.log(listaSimpleTest);
listaSimpleTest.insertarNodoEnPosicion('Nuevo nodo', 0);
listaSimpleTest.insertarNodoEnPosicion('New node', 1);
listaSimpleTest.insertarNodoEnPosicion('New node intermedio', 2);
console.log("Modificar valor nodo" + listaSimpleTest.modificarValorNodo(1, "TAD I UAM"));

console.log(listaSimpleTest);