let PU = prompt("Entrez le prix unitaire de l'article:");
let QTECOM = prompt("Entrez la quantité:");
let MINI = "";

let TOT = (PU*QTECOM);
TOT = Math.round(TOT*100)/100;

let TAUXREM = 0;
if(TOT>=100 && TOT<=200)
{TAUXREM = 5;}
else if(TOT>200)
{TAUXREM = 10;}

let REM = ((TOT*TAUXREM)/100);
REM = Math.round(REM*100)/100;

let TOTREM = (TOT-REM);
TOTREM = Math.round(TOTREM*100)/100;

let TAUXPORT = 2;
if(TOTREM>500)
{TAUXPORT = 0;}

let PORT = ((TOTREM*TAUXPORT)/100);
PORT = Math.round(PORT*100)/100;
if(PORT<6 && PORT!==0)
{PORT = 6; MINI = "(mini)";}

let PAP = (TOTREM+PORT);
PAP = Math.round(PAP*100)/100;

alert("Prix total: "+TOT+" euro(s). Remise("+TAUXREM+"%): -"+REM+" euro(s). Frais de port"+MINI+": "+PORT+" euro(s). Prix TTC: "+PAP+" euro(s).");
