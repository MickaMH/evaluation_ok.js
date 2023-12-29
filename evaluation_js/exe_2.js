function TableMultiplication(nombre)
{
for(i=1; i<= 10; i++)
{
let resultat = nombre * i;
console.log( nombre+ " x " +i+ " = " +resultat );
}
}

let nombre = prompt("Entrez un nombre à multiplier :");

TableMultiplication(nombre);