let formulaireValide = document.getElementById("envoi");/*Variable Input Submit pour validation du formulaire lors de l'envoi*/

let nom = document.getElementById("nom");               /*Variable qui prend la valeur de l'Input Text Nom*/
let nomVerif = /^[a-zA-Z][a-zA-Z' -]{1,50}$/;            /*Vérifie 1 lettre Min ou Maj, puis lettres Min ou Maj ou apostrophe ou trait d'union*/

let prenom = document.getElementById("prenom");         /*¨Prend la valeur de Input Text Prenom*/
let prenomVerif = /^[a-zA-Z][a-zA-Z' -]{1,20}$/;         /*Pareil que nomVerif sur 1 à 20 caractères*/

let feminin = document.getElementById("feminin");       /*Prend la valeur de Input Radio Sexe Féminin*/
let masculin = document.getElementById("masculin");     /*Prend la valeur de Input Radio Sexe Masculin*/

let ddn = document.getElementById("ddn");               /*Prend la valeur de Input Text Date de naissance (ddn), (en Text pour Vérif)*/
let ddnVerif = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19\d\d|20[012]\d|2030)$/;/*Vérifie 1 chiffre entre 1 et 31 pouvant commencer par un 0*/ 
                                                                                        /*Puis 1 chiffre entre 1 et 12, puis 1 ciffre entre 1900 et 2030*/
let cp = document.getElementById("cp");                 /*Prend la valeur de Input Text Code Postal (cp)*/
let cpVerif = /^[0-9]{5}$/;                             /*Vérifie 5 chiffres de 0 à 9*/

let mail = document.getElementById("mail");             /*Prend la valeur de Input Email*/
let mailVerif = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*let mailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;*/       /*Voir avec le formateur pour Regex d'Email*/

let menuDer = document.getElementById("menuDer");       /*Prend la valeur de Input Select (Menu Déroulant/menuDer)*/ 

let com = document.getElementById("com");               /*Prend la valeur de Input TextArea (Commentaires/com)*/
let comVerif = /^[a-zA-Z0-9,'-?!: .]{1,300}$/;          /*Vérifie lettres Min ou Maj ou chiffres ou , - ? ! :  . */

let coche = document.getElementById("coche");           /*Prend la valeur de Input Checkbox (coche)*/

let requisNom = document.getElementById("requisNom");           /*Variables pour Message d'erreur ou Valide*/
let requisPrenom = document.getElementById("requisPrenom");
let requisSexe = document.getElementById("requisSexe");
let requisDdn = document.getElementById("requisDdn"); 
let requisCp = document.getElementById("requisCp");
let requisMail = document.getElementById("requisMail");
let requisMenuDer = document.getElementById("requisMenuDer")
let requisCom = document.getElementById("requisCom");
let requisCoche = document.getElementById("requisCoche");
   
let asteriNom = document.getElementById("asteriNom");           /*Variables pour changer couleur de l'astérisque*/
let asteriPrenom = document.getElementById("asteriPrenom");
let asteriSexe = document.getElementById("asteriSexe");
let asteriDdn = document.getElementById("asteriDdn");
let asteriCp = document.getElementById("asteriCp");
let asteriMail = document.getElementById("asteriMail");
let asteriMenuDer = document.getElementById("asteriMenuDer");
let asteriCom = document.getElementById("asteriCom");
let asteriCoche = document.getElementById("asteriCoche");

/*---------------------------------------------------------------------------------------------------------------------------------------------*/

        formulaireValide.addEventListener("click", validation);     /*Evènement pour la "validation" du Formulaire lors du "click"*/
            
            function validation(event)                              /*Fonction qui gère la "validation" de l'évènement (event)*/
  
/*---------------------------------------------------------------------------------------------------------------------------------------------*/            
                /*NOM (nom)*/                                        
            {
                if (nom.validity.valueMissing)                              /*Si "valeur" du champ "nom" est vide*/
                {
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requisNom.textContent = "\u26a0 Champ obligatoire";     /*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.1rem";                      /*Taille de police du message d'erreur*/
                    requisNom.style.color = "red";                              /*Couleur de police du message d'erreur*/
                    requisNom.style.fontFamily = "sans-serif";              
                    asteriNom.style.color = "red";
                }
                else if (nomVerif.test(nom.value) == false){                /*Sinon si "valeur" du champ "nom" différent du Format prévu (nomVerif)*/
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requisNom.textContent = "\u26a0 Vérifiez l'orthographe";/*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.1rem";                      /*Taille de police du message d'erreur*/
                    requisNom.style.color = "orange";                           /*Couleur de police du message d'erreur*/
                    requisNom.style.fontFamily = "sans-serif";              
                    asteriNom.style.color = "orange";                       /*Couleur de l'astérisque "Nom"*/
                    nom.placeholder= "sans accents";
                }
                else                                                        /*Sinon "NOM" valide*/
                {
                    requisNom.textContent = "\u2713";                       /*Affiche une Coche*/ 
                    requisNom.style.fontSize = "1.1rem";                      /*Taille de police de la Coche*/
                    requisNom.style.color = "green";                        /*Couleur de la Coche*/
                    asteriNom.style.color = "green";                        /*Couleur de l'astérisque "Nom"*/
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*PRENOM (prenom)*/
                
                if (prenom.validity.valueMissing)               /*Fonctionne comme "NOM" mais ne permet que 20 caractères ( let prenomVerif )*/
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Champ obligatoire";      /*Champ vide : Message d'erreur Rouge*/
                    requisPrenom.style.fontSize = "1.1rem";
                    requisPrenom.style.color = "red";
                    requisPrenom.style.fontFamily = "sans-serif"; 
                    asteriPrenom.style.color = "red";
                }
                else if (prenomVerif.test(prenom.value) == false)                       
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Vérifiez l'orthographe"; /*Format incorrect : Message d'erreur Orange*/
                    requisPrenom.style.fontSize = "1.1rem";
                    requisPrenom.style.color = "orange";
                    requisPrenom.style.fontFamily = "sans-serif"; 
                    asteriPrenom.style.color = "orange";                        /*Astérisque devient Orange*/
                    prenom.placeholder= "sans accents";
                }
                else
                {
                    requisPrenom.textContent = "\u2713";                        /*Format Valide : Coche Verte*/
                    requisPrenom.style.fontSize = "1.1rem";
                    requisPrenom.style.color = "green";
                    asteriPrenom.style.color = "green";                         /*Astérisque devient Verte*/
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*SEXE (sexe)*/                

                if (feminin.validity.valueMissing && masculin.validity.valueMissing)    /*Si Bouton Radio Féminin et Masculin non cochés*/
                {                                                                       
                    event.preventDefault();                                             /*Bloque l'envoi du Formulaire*/
                    requisSexe.textContent = "\u26a0  Choisissez votre sexe";                /*Affiche message d'erreur*/
                    requisSexe.style.fontSize = "1.1rem";                                 /*Taille de police du message d'erreur*/
                    requisSexe.style.color = "red";                                     /*Couleur de police du message d'erreur*/   
                    requisSexe.style.fontFamily = "sans-serif"; 
                    asteriSexe.style.color = "red";                        
                }
                else                                                                    /*Sinon "SEXE" valide*/                
                {
                    requisSexe.textContent = "\u2713";                                  /*Affiche une coche*/
                    requisSexe.style.fontSize = "1.1rem";                                 /*Taille de police de la coche*/
                    requisSexe.style.color = "green";                                   /*Couleur de la coche*/
                    asteriSexe.style.color = "green";                                   /*Couleur de l'astérisque "Sexe"*/
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*DATE DE NAISSANCE (ddn)*/

                if (ddn.validity.valueMissing)                  /*Fonctionne comme "NOM" avec Regex ( let ddnVerif )*/
                {
                    event.preventDefault();
                    requisDdn.textContent = "\u26a0 Champ obligatoire";
                    requisDdn.style.fontSize = "1.1rem";
                    requisDdn.style.color = "red";
                    requisDdn.style.fontFamily = "sans-serif"; 
                    asteriDdn.style.color = "red";
                }
                else if (ddnVerif.test(ddn.value) == false)                                  
                {
                    event.preventDefault();                                                 
                    requisDdn.textContent = "\u26a0 Date ou format incorrect";
                    requisDdn.style.fontSize = "1.1rem";
                    requisDdn.style.color = "orange";
                    requisDdn.style.fontFamily = "sans-serif"; 
                    asteriDdn.style.color = "orange";
                    ddn.placeholder= "ex: jj/mm/aaaa";
                }                                                       
                else
                {
                    requisDdn.textContent = "\u2713";
                    requisDdn.style.fontSize = "1.1rem";
                    requisDdn.style.color = "green";
                    asteriDdn.style.color = "green";
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*CODE POSTAL (cp)*/

                if (cp.validity.valueMissing)                   /*Fonctionne comme "NOM" avec Regex ( let cpVerif )*/
                {
                    event.preventDefault();
                    requisCp.textContent = "\u26a0 Champ obligatoire";
                    requisCp.style.fontSize = "1.1rem";
                    requisCp.style.color = "red";
                    requisCp.style.fontFamily = "sans-serif"; 
                    asteriCp.style.color = "red";
                }
                else if (cpVerif.test(cp.value) == false)                                      
                {
                    event.preventDefault();
                    requisCp.textContent = "\u26a0 Format incorrect";
                    requisCp.style.fontSize = "1.1rem";
                    requisCp.style.color = "orange";
                    requisCp.style.fontFamily = "sans-serif"; 
                    asteriCp.style.color = "orange";
                    cp.placeholder= "ex: 75000";
                }
                else
                {
                    requisCp.textContent = "\u2713";
                    requisCp.style.fontSize = "1.1rem";
                    requisCp.style.color = "green";
                    asteriCp.style.color = "green";
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*EMAIL (mail)*/

                if (mail.validity.valueMissing)                 /*Fonctionne comme "NOM" avec Regex ( let mailVerif )*/
                {
                    event.preventDefault();
                    requisMail.textContent = "\u26a0 Champ obligatoire";
                    requisMail.style.fontSize = "1.1rem";
                    requisMail.style.color = "red";
                    requisMail.style.fontFamily = "sans-serif"; 
                    asteriMail.style.color = "red";
                }
                else if (mailVerif.test(mail.value) == false)                                  
                {
                    event.preventDefault();
                    requisMail.textContent = "\u26a0 Format incorrect";
                    requisMail.style.fontSize = "1.1rem";
                    requisMail.style.color = "orange";
                    requisMail.style.fontFamily = "sans-serif"; 
                    asteriMail.style.color = "orange";
                    mail.placeholder= "ex: dave.loper@afpa.fr";
                }
                else
                {
                    requisMail.textContent = "\u2713";
                    requisMail.style.fontSize = "1.1rem";
                    requisMail.style.color = "green";
                    asteriMail.style.color = "green";
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*MENU DEROULANT (menuDer)*/

                if (menuDer.selectedIndex == 0)                                 /*Si aucune sélection*/
                {                                                               
                    event.preventDefault();                                     /*Bloque l'envoi du formulaire*/
                    requisMenuDer.textContent = "\u26a0 Sélection obligatoire";     /*Affiche un message d'erreur*/
                    requisMenuDer.style.fontSize = "1.1rem";                      /*Taille de police du message d'erreur*/
                    requisMenuDer.style.color = "red";                          /*Couleur de police du message d'erreur*/
                    requisMenuDer.style.fontFamily = "sans-serif"; 
                    asteriMenuDer.style.color = "red";                        
                }
                else                                                            /*SInon "MENU DEROULANT" valide*/                            
                {
                    requisMenuDer.textContent = "\u2713";                       /*Affiche une coche*/
                    requisMenuDer.style.fontSize = "1.1rem";                      /*Taille de police de la coche*/
                    requisMenuDer.style.color = "green";                        /*Couleur de police de la coche*/
                    asteriMenuDer.style.color = "green";                        /*Couleur de l'astérisque Menu Déroulant*/
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*COMMENTAIRES / QUESTIONS (com)*/

                if (com.validity.valueMissing)                  /*Fonctionne comme "NOM" avec Regex ( let comVerif )*/
                {
                    event.preventDefault();
                    requisCom.textContent = "\u26a0 Champ obligatoire";
                    requisCom.style.fontSize = "1.1rem";
                    requisCom.style.color = "red";
                    requisCom.style.fontFamily = "sans-serif"; 
                    asteriCom.style.color = "red";
                }
                else if (comVerif.test(com.value) == false)                                    
                {
                    event.preventDefault();
                    requisCom.textContent = "\u26a0 Vérifiez l'orthographe";
                    requisCom.style.fontSize = "1.1rem";
                    requisCom.style.color = "orange";
                    requisCom.style.fontFamily = "sans-serif"; 
                    asteriCom.style.color = "orange";
                    com.placeholder= "Caractères autorisés: (a-A , 0-9 ,': ,.?!)";
                }
                else
                {
                    requisCom.textContent = "\u2713";
                    requisCom.style.fontSize = "1.1rem";
                    requisCom.style.color = "green";
                    asteriCom.style.color = "green";
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                /*COCHER CASE (coche)*/

                if (coche.validity.valueMissing)                            /*Si La case n'est pas coché*/
                {
                    event.preventDefault();                                 /*Bloque l'envoi du formulaire*/
                    requisCoche.textContent = "\u26a0 Cochez la case";   /*Affiche un message d'erreur*/
                    requisCoche.style.fontSize = "1.1rem";                    /*Taille de police du message d'erreur*/
                    requisCoche.style.color = "red";                        /*Couleur de police du message d'erreur*/
                    requisCoche.style.fontFamily = "sans-serif"; 
                    asteriCoche.style.color = "red";
                }
                else                                                        /*Sinon la case est coché : Valide */                                
                {
                    requisCoche.textContent = "\u2713";                     /*Affiche une coche*/
                    requisCoche.style.fontSize = "1.1rem";                    /*Taille de police de la coche*/
                    requisCoche.style.color = "green";                      /*Couleur de la coche*/
                    asteriCoche.style.color = "green";                      /*Couleur de l'astérisque Cocher Case*/
                }
/*----------------------------------------------------------------------------------------------------------------------------------------------*/
            }                                                               /*FIN*/
