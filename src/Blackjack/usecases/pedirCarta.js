

  /**
 * Esta función permite tomar una carta del deck.
 * @param {Array<string>} deck - El deck de cartas.
 * @throws {Error} Si no hay cartas en el deck.
 * @returns {string} La carta tomada del deck.
 */
  //esta funcion me permite tomar una carta del deck
 export const pedirCarta = (deck) => {
    if (!deck ||deck.length === 0) {
        throw 'No hay cartas en el deck';
        }
    const carta = deck.pop();
    return carta;
    };

    export default pedirCarta;