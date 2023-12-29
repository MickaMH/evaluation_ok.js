let tableau = ["Audrey", "Aurélien", "Flavien", "Jeremy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let prenom = prompt("Entrez un prénom:");

if (tableau.includes(prenom)) 
{   let index = tableau.indexOf(prenom);
    tableau.splice(index, 1)
    tableau.push("");                   
    console.log(tableau);  }
else
{   alert("Erreur");                    }

