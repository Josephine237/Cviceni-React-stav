import React, { useState } from 'react'


// Děláš počítadlo, kde jde tlačítky zvětšovat nebo zmenšovat hodnota.

// Zadání 1:
// Z proměnné `cislo` udělej stavovou proměnnou.
// Nezapomeň na všechno, co musíš udělat, když chceš použít useState.

// Zadání 2:
// Nastav, aby jednotlivá tlačítka měnila stav `cislo`
// Tlačíítko +1 aby přičítalo jedničku, +5 přičítalo pětku,
// tlačítko Vynulovat nastavovalo číslo na nulu apod.

const Pocitadlo = () => {
	// const cislo = 0
	const [cislo, setCislo] = useState(0)

	const zvetsiPocet = (oKolik) => {
		setCislo(cislo + oKolik)
	}			// todle (celá const) tu vůbec nemusí být (ve výsledcích jí nemají a funguje to i bez ní)
				// nechápu proč, on pak v řešení má v returnu místo zvetsiPocet, setCislo

	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={ () => { zvetsiPocet(-5)}} >-5</button>
			<button onClick={ () => { zvetsiPocet(-1)}} >-1</button>
			<button onClick={ () => { setCislo(0)}} >Vynulovat</button>
			<button onClick={ () => { zvetsiPocet(1)}} >+1</button>
			<button onClick={ () => { zvetsiPocet(5)}} >+5</button>
		</>
	)
}

const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}

export default Uloha2;