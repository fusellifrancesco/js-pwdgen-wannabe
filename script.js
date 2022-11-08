let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colorePreferito = prompt("Inserisci il tuo colore preferito");
let numero1 = prompt("Inserisci un numero");
let numero2 = prompt("Inserisci un altro numero");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

numeroDiviso = numero1 / numero2

password = nome + cognome + colorePreferito + numeroDiviso

console.log(
    `
    ------ Informazioni Anagrafiche ------
    Nome: ${nome}
    Cognome ${cognome}

    ------ Colore Preferito ------
    Colore Preferito: ${colorePreferito}

    ------ Numeri Inseriti ------
    Numero 1: ${numero1}
    Numero 2: ${numero2}

    ------ Risultato Divisione Numeri ------
    Risultato: ${numeroDiviso}

    ------ Password Generata ------
    Password: ${password}
    `
)
