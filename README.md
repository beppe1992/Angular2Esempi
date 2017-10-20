# AngularEsempi
Questo progetto racchiude alcuni esempi di applicazioni sviluppate con Angular.

## HelloWorldExample
Questo progetto contiene un semplice Hello World fatto con Angular2<br>

### Framework
Questo progetto utilizza Angular e TypeScript. Non è presente alcun servizio REST.

### Applicazione
I file principali dell'applicazione sono:<br>
myfirstcomponent.ts --> Contiene il componente angular <br>
Index.html --> Contiene la pagina html

### Configurazioni
File package.json --> Dipendenze del progetto <br>
File tsconfig.json --> Configura typescript <br>
File typings.json --> Librerie aggiuntive typescript <br>
File systemjs.config.js --> Carica i moduli e inizializza l'applicazione<br>

Per provare il progetto e' necessario aver installato nmp.
Una volta scaricato il progetto è necessario lanciare il comando "npm install"  per inizializzare le dipendenze Javascript utilizzate dal progetto.<br>

### Test
Per provare il progetto è necessario eseguire il comando npm start
Esempio HelloWorld: http://localhost:3000/ <br>

## ProgettoWebSempliceGuidato 
Questo progetto contiene le istruzioni per creare un progetto completo fatto con Angular2.<br>
Le istruzioni sono nel documento "STEP_BY_STEP_INDICATION.docx"<br>

## ExtensionLibraries  
Questo progetto contiene alcuni esempi di utilizzo di componenti di terze parti:<br>
1. Esempio utilizzo di alcuni componenti di Primefaces<br>

## AngularAndSpringApplication
Questo progetto contiene un esempio di implementazione di un progetto utilizzando un Angular lato client e Spring Boot lato server.<br>

### Framework
Questo progetto utilizza Angular lato client e Spring Boot lato Server.

### Configurazioni
Una volta scaricato il progetto è necessario lanciare il comando "npm install"<br>
Per provare il progetto e' necessario lanciare il comando "ng build --base-href /dist/" ed eseguire il main di Spring Boot (App.java).

### Link
Link Esempio: http://localhost:8080/dist/index.html <br>

## AngularAndSpringModularApplication
Questo progetto contiene un esempio nel quale vengono implementate molte piccole applicazioni (ognuna in un proprio progetto conentente parte client con Angular e parte server con Spring Boot) e poi tutte unite in un unico ear.<br>
Il progetto è configurato in modo che quando viene lanciata la build maven, viene lanciata anche una build angular che crea i file per la distribuzione delle nostre applicazioni.

### Framework
Questo progetto utilizza Angular lato client e Spring Boot lato Server.

### Configurazioni
Ogni singola applicazione è eseguibile lanciando tutti i Main presenti all'interno di ogni progetto. Lanciando anche il progetto "WAR", si può utilizzare il proxy Zool, grazie al quale tutte le applicazioni rispondono sempre ad un unico server, su un unica porta.<br>
Per generare l'ear per eseguire il deploy dell'applicazione e necessario lanciare i comandi mvn clean install (sul pom padre) e mvn package (sul pom ApplicazioniEar).


### Link
Link Esempio Applicazione Anagrafiche: http://localhost:9380/applicazioni/anagrafiche/ <br>
Link Esempio Applicazione Sale: http://localhost:9380/applicazioni/sale/ <br>

### Da migliorare
1. I file base di angular2 dovrebbero essere centralizzati (compresi i node_modules)<br>
2. La context root dell'applicazione (/applicazioni) è molto ridondante all'interno del software<br>
3. Provare a fare il deploy su un was<br>