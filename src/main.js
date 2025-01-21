import './style.css'
import _ from 'underscore'


(() => { // esta es la funcion anonima aqui la creamos que puede crearse con una funcion normal nostero la creamos con una funcion anonima con flecha
	'use strict'; // esto es para decirle a js que sea estricto con nuesto codigo

	
    // el deck funciona para majejar la baraja por asi desirlo
	let deck = []; // aqui se declara como areglo basio
	const tipos = ['C', 'D', 'H', 'S'], // esto son los tipos de cartas 
	especiales = ['A', 'J', 'Q', 'K']; // esto son las cartas especiales 
	// aqui se declaran los puntos de los jugadores 
	let puntosJugador = 0, 
	puntosComputadora = 0;

	// REFERENCIAS HTML
	const btnPedir = document.querySelector('#btnPedir'),
		  btnDetener = document.querySelector('#btnDetener'),
		  btnNuevo = document.querySelector('#btnNuevo'); 

	const divCartasJugador = document.querySelector('#jugador-cartas'),
		  divCartasComputadora = document.querySelector('#computadora-cartas'),
		  puntosHtml = document.querySelectorAll('b');


	// esta funcion crea el deck de cartas
	const crearDeck = () => {

	for (let i = 2; i <= 10; i++) {
		for (let tipo of tipos) {
			deck.push(i + tipo);
		}
	}
	for (let tipo of tipos) {
		for (let esp of especiales) {
			deck.push(esp + tipo);
		}
	}
		deck =  _.shuffle(deck); //sirve para mover o mesclar la baraja de cartas
		return deck;
	};
	crearDeck();

	//esta funcion me permite tomar una carta del deck
	const pedirCarta = () => {
	if (deck.length === 0) {
		throw 'No hay cartas en el deck';
		}
	const carta = deck.pop();
	return carta;
	};

	// esta funcion me permite saber el valor de la carta
	const valorCarta = (carta) => {
	const valor = carta.substring(0, carta.length - 1);
	return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1;
	};
	// esta funcion es para el turno de la computadora
	const turnoComputadora = (puntosMinimos) => {
	do {
		const carta = pedirCarta();
			puntosComputadora = puntosComputadora + valorCarta(carta);
			puntosHtml[1].innerText = puntosComputadora;
		const img = document.createElement('img'); // se crea una imagen de la carta
			img.src=`assets/cartas/${carta}.png`;
			divCartasComputadora.append(img); // es lo que perdmite menia el dom para agregar la imagen
			img.classList.add('carta'); // es la clase que se le asigna a la imagen
		if (puntosMinimos > 21) {
			break
		};
	}while((puntosComputadora < puntosMinimos)  &&  (puntosMinimos <= 21));

	setTimeout(() => {
	if (puntosMinimos === puntosComputadora){
		alert('Nadie gana!');
	}
	else if (puntosMinimos === 21){
		alert('La el jugador gana');
	}
	else if (puntosMinimos > 21 ){
		alert('La IA gana');
	}
	else if (puntosComputadora > 21){
		alert('La IA perdio');
	}
	else if (puntosComputadora === 21){
		alert('La IA gana');
	}
	else if (puntosComputadora > 21){
		alert('La IA gana');
	}
	else {
		alert('La IA gana');
	}
	}, 500);
	};

	// eventos
	btnPedir.addEventListener('click',() => {
		const carta = pedirCarta();
			puntosJugador = puntosJugador + valorCarta(carta);
			puntosHtml[0].innerText = puntosJugador;
		const img = document.createElement('img'); // se crea una imagen de la carta
			img.src=`assets/cartas/${carta}.png`;
			divCartasJugador.append(img); // es lo que perdmite menia el dom para agregar la imagen
			img.classList.add('carta'); // es la clase que se le asigna a la imagen
				if (puntosJugador > 21) {
				console.warn('Lo siento mucho, perdiste');
					btnPedir.disabled = true;
					turnoComputadora(puntosJugador);
						btnDetener.disabled = true;
							} else if (puntosJugador === 21) {
							console.warn('21, genial');
									btnPedir.disabled = true;
								turnoComputadora(puntosJugador);
								}
								});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador);
		});
	
	btnNuevo.addEventListener('click', () => {
		location.reload(); // renicia la pagian y hace que salga un nuevo juego 
	});

}) (); // aqui  se ejecuta la funcion anonima
