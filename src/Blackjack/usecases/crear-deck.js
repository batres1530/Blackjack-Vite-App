import _ from 'underscore' 

export const miNombre = 'David'
// esta funcion crea el deck de cartas

/**
 *  esta funcion crea el deck de cartas
 * @param {Array<string>} tiposDeCarta  Ejmeplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales  ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array} retorna un array de cartas
 */



 export  const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta ) { throw new 'TipoDeCarta es Oblicatorio';}
    let deck = []; // aqui se declara como areglo basio
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
        deck =  _.shuffle(deck); //sirve para mover o mesclar la baraja de cartas
        return deck;
    };

    export default crearDeck;