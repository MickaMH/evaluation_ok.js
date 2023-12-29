function denombrement() 
{
  let jeunes = 0;
  let moyens = 0;
  let vieux = 0;
  
while(true)
{
  let age= prompt("Entrez un âge:"); 
  
    if (age < 20) 
    {
      jeunes++;
    } 
    
    else if (age > 40) 
    {
      vieux++;
    } 
    
    else 
    {
      moyens++;
    }
    
    if (age >= 100) 
    {
      break;
    }
}
  console.log("Il y a "+jeunes+" jeunes, "+moyens+" moyens et "+vieux+" vieux.");
} 

denombrement()