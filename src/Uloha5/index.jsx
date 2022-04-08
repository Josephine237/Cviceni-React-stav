import React, {useState} from 'react'
import './hamburger.css'


// Tvoříš rozbalovací hamburger menu.

// Zadání 1:
// Přichystej si stavovou proměnnou s výchozí hodnotou `false`,
// ve které bude uloženo, zda je menu otevřené nebo nikoliv.

// Zadání 2:
// Po kliknutí na button změň stav z `true` na `false` nebo obráceně.

// Zadání 3:
// Nerenderuj `ul`, pokud je stav `false`.

// Zadání 4:
// Pokud je menu zavřené nech mu jen třídu `hamburger`.
// Pro otevřené přidej navíc `hamburger--otevrene`.

const Uloha5 = () => {

	const [isOpen, setIsOpen] = useState(false)	// na začátku je munu schované, proto je tam na začátku false

	const handleClick = () => {
		if (isOpen === true) {
			setIsOpen(false)
		} else {
			setIsOpen(true)
		}
		// dalo by se to zapsat i takhle setIsOpen(!isOpen) - negace 

		// místo handleClick v buttonu můžu dát todle oClick{() => {setIsOpen(!isOpen)}} a celou const handleclick vymazat
	}

	// { isOpen ? 'hamburger hamburger--otevrene' : 'hamburger'} todle je tam proto, že když máme otevřené hamburger menu, tak se hamburger menu změní na křížek, kterým ho pak můžu zase zavřít
	
	return (
		<>
			<button className={ isOpen ? 'hamburger hamburger--otevrene' : 'hamburger'} aria-label="menu" onClick={handleClick}>
				<span></span>
				<span></span>
				<span></span>
			</button>

			{ isOpen &&
			
			<ul>
				<li>
					<a href="#o-nas">O nás</a>
				</li>
				<li>
					<a href="#co-delame">Co děláme</a>
				</li>
				<li>
					<a href="#kontakty">Kontakty</a>
				</li>
				<li>
					<a href="#cenik">Ceník</a>
				</li>
			</ul> }
		</>
		// ten ternární operátor { isOpen ? <ul></ul> : null } se dá napsat i lépe pomocí logického operátoru { isOpen && <ul></ul> } 
	)
}

export default Uloha5;